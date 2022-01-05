<?php

add_action( 'rest_api_init', function () {
	register_rest_route( 'popper', '/list/', array(
		'methods' => 'GET',
		'callback' => 'popper_get_saved',
		'permission_callback' => 'popper_rest_permission_callback',
		'args' => array(),
	) );
	register_rest_route( 'popper', '/post/(?P<id>[a-zA-Z0-9-_]+)', array(
		'methods' => 'GET',
		'callback' => 'popper_get_post_type_posts',
		'permission_callback' => 'popper_rest_permission_callback',
		'args' => array(
			'id' => array(
				'validate_callback' => function($param, $request, $key) {
					return sanitize_text_field( $param );
				}
			),
		),
	) );
	register_rest_route( 'popper', '/taxonomy/(?P<id>[a-zA-Z0-9-_]+)', array(
		'methods' => 'GET',
		'callback' => 'popper_get_taxonomy_terms',
		'permission_callback' => 'popper_rest_permission_callback',
		'args' => array(
			'id' => array(
				'validate_callback' => function($param, $request, $key) {
					return sanitize_text_field( $param );
				}
			),
		),
	) );
} );

/**
 * Get taxonomy terms for a specific taxonomy.
 *
 * @param WP_REST_Request $request Full details about the request.
 *
 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
 */
function popper_get_saved( $request ) {

	$args = array(
		'post_type'     => 'popper',
		'fields'        => '',
		'no_found_rows' => true,
		'post_status'   => 'publish',
		'numberposts'   => 500, // phpcs:ignore
	);

	$data = get_posts( $args );

	return rest_ensure_response( $data );
}

/**
 * Get taxonomy terms for a specific taxonomy.
 *
 * @param WP_REST_Request $request Full details about the request.
 *
 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
 */
function popper_get_taxonomy_terms( $request ) {
	$tax_id = $request->get_param( 'id' );
	if ( ! is_array( $tax_id ) ) {
		$tax_id = array( $tax_id );
	}

	$data = array();

	foreach ( $tax_id as $id ) {
		$tax = get_taxonomy( $id );

		$terms = get_terms(
			array(
				'taxonomy'   => $id,
				'hide_empty' => false,
			)
		);

		$data[ $id ] = array(
			'type'     => 'terms',
			'taxonomy' => $id,
			'label'    => $tax->label,
			'objects'  => array(),
		);

		foreach ( $terms as $term ) {
			$data[ $id ]['objects'][] = array(
				'id'    => $term->term_id,
				'name'  => esc_attr( $term->name ),
			);
		}
	}

	return rest_ensure_response( $data );
}

/**
 * Look up posts inside a post type.
 *
 * @param WP_REST_Request $request Full details about the request.
 *
 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
 */
function popper_get_post_type_posts( $request ) {
	$post_type = $request->get_param( 'id' );
	if ( ! is_array( $post_type ) ) {
		$post_type = array( $post_type );
	}
	$data = array();

	foreach ( $post_type as $type ) {
		global $wpdb;

		$post_status = array( 'publish', 'future', 'draft', 'pending', 'private' );

		$object = get_post_type_object( $type );

		$data[ $type ] = array(
			'type'     => 'posts',
			'postType' => $type,
			'label'    => $object->label,
			'objects'  => array(),
		);

		if ( 'attachment' === $type ) {
			$posts = $wpdb->get_results( $wpdb->prepare( "SELECT ID, post_title from $wpdb->posts where post_type = %s ORDER BY post_title", $type ) );

		} else {
			$format = implode( ', ', array_fill( 0, count( $post_status ), '%s' ) );
			$query = sprintf( "SELECT ID, post_title from $wpdb->posts where post_type = '%s' AND post_status IN(%s) ORDER BY post_title", $type, $format );
			// @codingStandardsIgnoreLine
			$posts = $wpdb->get_results( $wpdb->prepare( $query, $post_status ) );
		}

		foreach ( $posts as $post ) {
			$title = ( '' !== $post->post_title ) ? esc_attr( $post->post_title ) : $type . '-' . $post->ID;
			$data[ $type ]['objects'][] = array(
				'id'    => $post->ID,
				'name'  => $title,
			);
		}
	}

	return rest_ensure_response( $data );
}

/**
 * Look up posts inside a post type.
 *
 */
function popper_rest_permission_callback() {
	return current_user_can( 'manage_options' );
}
