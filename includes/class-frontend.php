<?php
/**
 * This file handles the Display Rule conditions for Popper blocks.
 *
 * @package Popper
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access, please.
}

/**
 * The conditions class.
 */
class Popper_Frontend {
	/**
	 * Instance.
	 *
	 * @var instance
	 */
	private static $instance;

	/**
	 * Popups to show.
	 *
	 * @var popups
	 */
	private $popups;

	/**
	 *  Initiator
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {

		add_action( 'template_redirect', array( $this, 'popper_matcher' ), 5 );
		add_action( 'wp_footer', array( $this, 'get_popups' ), 5 );

	}

	/**
	 * Output our popups.
	 *
	 * @since 1.7
	 */
	public function get_popups() {
		// phpcs:ignore
		echo $this->popups;
	}

	/**
	 * Get our popups based on conditions.
	 *
	 * @since 1.7
	 *
	 * @return array
	 */
	public function popper_matcher() {

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
				$popper = get_post( $popper_id );
				// phpcs:ignore
				$popups .= apply_filters( 'the_content', do_blocks( $popper->post_content ) );

				$matched = false;
			}
		}
		// phpcs:ignore
		$this->popups = $popups;
		add_filter( 'the_content', 'wpautop' );

	}

}

Popper_Frontend::get_instance();
