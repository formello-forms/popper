<?php
/**
 * Plugin Name:     Popper
 * Plugin URI: 		https://formello.net/
 * Description:     Popup builder with exit-intent powered by Gutenberg.
 * Version:         0.1.9
 * Author:          Formello
 * Author URI: 		https://formello.net
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     popper
 *
 * @package         create-block
 */

require __DIR__ . '/includes/class-conditions.php';
require __DIR__ . '/includes/rest.php';

load_plugin_textdomain( 'popper', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

/**
 * Register Popper block
 */
function popper_block_init() {
	register_block_type_from_metadata(
		__DIR__,
	);
	wp_set_script_translations( 'formello-popper-editor-script', 'popper', plugin_dir_path( __FILE__ ) . '/languages/' );
}
add_action( 'init', 'popper_block_init' );

/**
 * Register CPT.
 */
function popper_register() {
	$args = array(
		'labels' => array(
			'name'               => _x( 'Popups', 'Post Type General Name', 'popper' ),
			'singular_name'      => _x( 'Popup', 'Post Type Singular Name', 'popper' ),
			'menu_name'          => __( 'Popups', 'popper' ),
			'parent_item_colon'  => __( 'Parent Popup', 'popper' ),
			'all_items'          => __( 'Popups', 'popper' ),
			'view_item'          => __( 'View Popup', 'popper' ),
			'add_new_item'       => __( 'Add New Popup', 'popper' ),
			'add_new'            => __( 'Add New', 'popper' ),
			'edit_item'          => __( 'Edit Popup', 'popper' ),
			'update_item'        => __( 'Update Popup', 'popper' ),
			'search_items'       => __( 'Search Popup', 'popper' ),
			'not_found'          => __( 'Not Found' ),
			'not_found_in_trash' => __( 'Not found in Trash' ),
		),
		'public'              => false,
		'publicly_queryable'  => false,
		'has_archive'         => false,
		'show_ui'             => true,
		'exclude_from_search' => true,
		'show_in_nav_menus'   => true,
		'rewrite'             => false,
		'hierarchical'        => false,
		'show_in_menu'        => true,
		'show_in_admin_bar'   => true,
		'show_in_rest'        => true,
		'menu_icon'           => 'dashicons-external',
		'capability_type'     => 'post',
		'template'            => array(
			array( 'formello/popper' ),
		),
		'template_lock'       => 'insert',
		'supports'            => array(
			'title',
			'editor',
			'custom-fields',
		),
	);
	register_post_type( 'popper', $args );

	register_meta(
		'post',
		'popper_rules',
		array(
			'single' => true,
			'type' => 'object',
			'default' => array(
				'location' => array(),
				'exclude' => array(),
				'user' => array(),
			),
			'show_in_rest'  => array(
				'schema' => array(
					'type'  => 'object',
					'properties' => array(
						'location'    => array(
							'type' => 'array',
						),
						'exclude'    => array(
							'type' => 'array',
						),
						'user'    => array(
							'type' => 'array',
						),
					),
				),
			),
			'object_subtype' => 'popper',
		)
	);
}
add_action( 'init', 'popper_register' );

/**
 * Print default positions options.
 */
function popper_positions() {
	$positions = Popper_Conditions::get_conditions();
	$users = Popper_Conditions::get_user_conditions();

	wp_localize_script(
		'wp-block-directory',
		'popper',
		array(
			'positions' => $positions,
			'users' => $users,
		)
	);

}
add_filter( 'admin_enqueue_scripts', 'popper_positions', 10, 2 );

/**
 * Saves box options and rules.
 */
function popper_matcher() {
	if ( is_admin() || wp_is_json_request() ) {
		return false;
	}
	global $wpdb;
	remove_filter( 'the_content', 'wpautop' );

	$popups = '';

	$rules = $wpdb->get_results(
		$wpdb->prepare(
			"SELECT * FROM {$wpdb->prefix}posts 
			LEFT JOIN {$wpdb->prefix}postmeta 
			ON {$wpdb->prefix}posts.ID = {$wpdb->prefix}postmeta.post_id 
			WHERE {$wpdb->prefix}posts.post_type = %s 
			AND {$wpdb->prefix}postmeta.meta_key = %s 
			AND {$wpdb->prefix}posts.post_status = %s 
			ORDER BY {$wpdb->prefix}posts.ID;",
			'popper',
			'popper_rules',
			'publish',
		)
	);

	$matched   = false;
	$popper_id = '';

	// loop through all rules for all boxes.
	foreach ( $rules as $rule ) {
		$popper_id = $rule->post_id;

		// Get the rules.
		$rule = maybe_unserialize( $rule->meta_value );

		$matched = Popper_Conditions::show_data( $rule['location'], $rule['exclude'], $rule['user'] );

		if ( $matched ) {
			$popper  = get_post( $popper_id );
			$popups .= apply_filters( 'the_content', do_blocks( $popper->post_content ) );
			$matched = false;
		}
	}
	// phpcs:ignore
	echo $popups;
	add_filter( 'the_content', 'wpautop' );

}
add_action( 'wp_footer', 'popper_matcher' );
//add_action( 'wp_head', 'popper_matcher' );
