<?php
/**
 * Plugin Name: Popper
 * Plugin URI:  https://formello.net/
 * Description: Popup builder with exit-intent powered by Gutenberg.
 * Version:     0.3.4
 * Author:      Formello
 * Author URI:  https://formello.net
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: popper
 *
 * @package     Popper
 */

require_once __DIR__ . '/includes/class-conditions.php';
require_once __DIR__ . '/includes/class-rest.php';
require_once __DIR__ . '/includes/class-frontend.php';

load_plugin_textdomain( 'popper', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

/**
 * Init hook
 */
function popper_block_init() {
	register_block_type_from_metadata(
		__DIR__
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
			'author',
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

	register_meta(
		'post',
		'popper_trigger',
		array(
			'single' => true,
			'type' => 'object',
			'default' => array(
				'trigger' => '',
				'value' => '',
			),
			'show_in_rest' => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => array(
						'trigger' => array(
							'type' => 'string',
						),
						'value' => array(
							'type' => 'string',
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

	$screen = get_current_screen();
	if ( 'edit-popper' === $screen->id ) {
		wp_enqueue_script( 'popper-table' );
	}

	wp_localize_script(
		'wp-block-directory',
		'popper',
		array(
			'positions' => $positions,
			'users' => $users,
			'installLink' => wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=formello' ), 'install-plugin_popper' ),
		)
	);

	wp_localize_script(
		'popper-table',
		'popper',
		array(
			'positions' => $positions,
			'users' => $users,
		)
	);

}
add_filter( 'admin_enqueue_scripts', 'popper_positions', 10, 2 );
add_filter( 'manage_popper_posts_columns', 'popper_columns_table' );

/**
 * Add the custom columns to the book post type.
 *
 * @param array $columns The array of columns.
 *
 * @return array $columns
 */
function popper_columns_table( $columns ) {

	$inserted = array();

	$columns['display'] = __( 'Display Rules', 'popper' );
	$columns['visibility'] = __( 'Visibility', 'popper' );
	$columns['trigger'] = __( 'Trigger', 'popper' );

	unset( $columns['author'] );
	unset( $columns['date'] );

	$columns['date'] = __( 'Date' );

	return $columns;
}

add_action( 'manage_popper_posts_custom_column', 'popper_columns_display', 10, 2 );

/**
 * Add the custom columns to the book post type.
 *
 * @param string $column The name of columns.
 * @param number $post_id The post id.
 */
function popper_columns_display( $column, $post_id ) {
	switch ( $column ) {

		case 'display':
			$popup = get_post_meta( $post_id, 'popper_rules', true );

			$locations = array();
			$exclude = array();

			foreach ( $popup['location'] as $value ) {
				array_push( $locations, Popper_Conditions::get_saved_label( $value ) );
			}
			foreach ( $popup['exclude'] as $value ) {
				array_push( $exclude, Popper_Conditions::get_saved_label( $value ) );
			}

			$show = implode( ', ', $locations );
			$exclude = implode( ', ', $exclude );

			echo sprintf(
				'<b>%s</b> %s',
				// phpcs:ignore.
				__( 'Show on:', 'formello' ),
				esc_attr( $show ),
			);

			if ( $exclude ) {
				echo sprintf(
					'<br /><b>%s</b>: %s',
					// phpcs:ignore.
					__( 'Exclude on', 'formello' ),
					esc_attr( $exclude ),
				);
			}
			break;

		case 'visibility':
			$popup = get_post_meta( $post_id, 'popper_rules', true );
			echo esc_attr( rtrim( Popper_Conditions::get_user_label( $popup['user'] ), ',' ) );
			break;

		case 'trigger':
			$trigger = get_post_meta( $post_id, 'popper_trigger', true );
			echo sprintf(
				'<b>%s</b>: %s',
				esc_attr( ucfirst( $trigger['trigger'] ) ),
				esc_attr( $trigger['value'] ),
			);
			break;

	}
}

/**
 * Add link to table action row
 *
 * @param  array   $actions Actions.
 * @param  WP_POST $post Post.
 * @return string
 */
function popper_action_row( $actions, $post ) {
	// check for your post type.
	if ( 'popper' === $post->post_type ) {
		$view_link = sprintf(
			'<span id="popper-table"><a href="#" data-id="%s">%s</a></span>',
			absint( $post->ID ),
			__( 'Edit rules', 'popper' )
		);

		array_splice( $actions, 2, 0, $view_link );
	}

	return $actions;
}
//add_filter( 'post_row_actions', 'popper_action_row', 10, 2 );

/**
 * Load assets
 *
 * @throws \Error The error.
 */
function popper_load_assets() {
	$script_asset_path = plugin_dir_path( __FILE__ ) . 'build/table.asset.php';
	if ( ! file_exists( $script_asset_path ) ) {
		throw new \Error(
			'You need to run `npm start` or `npm run build` for the "create-block/formello" block first.'
		);
	}

	$script_asset = require $script_asset_path;

	wp_register_script( 'popper-table', plugin_dir_url( __FILE__ ) . 'build/table.js', $script_asset['dependencies'], $script_asset['version'], 'all' );

}
//add_action( 'admin_init', 'popper_load_assets' );

