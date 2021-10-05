<?php
/**
 * Plugin Name:     Popper
 * Description:     Popup builder with exit-intent powered by Gutenberg.
 * Version:         0.1.0
 * Author:          Formello
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     popper
 *
 * @package         create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */

require __DIR__ . '/includes/class-conditions.php';

function popper_block_init() {
	register_block_type_from_metadata(
		__DIR__,
	);
}
add_action( 'init', 'popper_block_init' );


function popper_register() {
	$args = array(
		'labels' => array(
			'name'                => _x( 'Popups', 'Post Type General Name', 'popper' ),
			'singular_name'       => _x( 'Popup', 'Post Type Singular Name', 'popper' ),
			'menu_name'           => __( 'Popups', 'popper' ),
			'parent_item_colon'   => __( 'Parent Popup', 'popper' ),
			'all_items'           => __( 'Popups', 'popper' ),
			'view_item'           => __( 'View Popup', 'popper' ),
			'add_new_item'        => __( 'Add New Popup', 'popper' ),
			'add_new'             => __( 'Add New', 'popper' ),
			'edit_item'           => __( 'Edit Popup', 'popper' ),
			'update_item'         => __( 'Update Popup', 'popper' ),
			'search_items'        => __( 'Search Popup', 'popper' ),
			'not_found'           => __( 'Not Found', 'popper' ),
			'not_found_in_trash'  => __( 'Not found in Trash', 'popper' ),
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
		'capability_type'     => 'post',
        'template' => array(
            array( 'formello/popper' ),
        ),
        'template_lock' 	  => 'insert',
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
					),
				),
			),
			'object_subtype' => 'popper',
		)
	);
}
add_action( 'init', 'popper_register' );

function filter_block_editor_settings_when_post_provided() {
	$positions = Popper_Conditions::get_conditions();

	wp_localize_script(
		'wp-block-directory',
		'popper',
		array(
			'positions' => $positions,
		)
	);

}
add_filter( 'admin_enqueue_scripts', 'filter_block_editor_settings_when_post_provided', 10, 2 );

/**
 * Saves box options and rules
 *
 * @param int $box_id
 *
 */
function popper_matcher() {
	if( is_admin() || wp_is_json_request() ){
		return false;
	}
	global $wpdb;

	$popups = '';

	$rules = $wpdb->get_results(
		$wpdb->prepare( "SELECT * FROM {$wpdb->prefix}postmeta WHERE meta_key=%s", 'popper_rules' ) 
	);

	$matched = false;
	$popper_id = '';

	// loop through all rules for all boxes.
	foreach ( $rules as $rule ) {
		$popper_id = $rule->post_id;

		// Get the rules.
		$rule = maybe_unserialize( $rule->meta_value );

		$matched = Popper_Conditions::show_data( $rule['location'], $rule['exclude'], array() );

		if ( $matched ) {
			$form = get_post( $popper_id );
			$popups .= do_blocks( $form->post_content );
			$matched = false;
		}

	}

	echo $popups;

}
add_action( 'wp_footer', 'popper_matcher' );
