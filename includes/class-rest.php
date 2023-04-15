<?php
/**
 * Manage Template API.
 *
 * @package Popper
 */

namespace Popper;

/**
 * REST_API Handler
 */
class Rest extends \WP_REST_Controller {

	/**
	 * Instance.
	 *
	 * @access private
	 * @var object Instance
	 */
	private static $instance;

	/**
	 * Namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'popper/v1';

	/**
	 * Rest base.
	 *
	 * @var string
	 */
	protected $rest_base = 'popper';

	/**
	 * Initiator.
	 *
	 * @return object initialized object of class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * GenerateBlocks_Rest constructor.
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register the routes
	 *
	 * @return void
	 */
	public function register_routes() {

		// Get Templates.
		register_rest_route(
			$this->namespace,
			'/get_templates',
			array(
				'methods'  => \WP_REST_Server::READABLE,
				'callback' => array( $this, 'get_templates' ),
				'permission_callback' => '__return_true',
			)
		);

		// Regenerate CSS Files.
		register_rest_route(
			$this->namespace,
			'/sync_template_library',
			array(
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'sync_template_library' ),
				'permission_callback' => '__return_true',
			)
		);

	}

	/**
	 * Get templates.
	 *
	 * @return mixed
	 */
	public function get_templates() {

		$url       = 'https://formello.net/wp-json/formello/v1/formello_templates?type=popper&nocache=' . time();
		$templates = get_transient( 'popper_templates', false );

		/*
		 * Get remote templates.
		 */
		if ( ! $templates ) {
			$requested_templates = wp_remote_get( $url );

			if ( ! is_wp_error( $requested_templates ) ) {
				$new_templates = wp_remote_retrieve_body( $requested_templates );
				$new_templates = json_decode( $new_templates, true );

				if ( $new_templates && is_array( $new_templates ) ) {
					$templates = $new_templates;

					set_transient( 'popper_templates', $templates );
				}
			} else {
				$templates = array();
			}
		}

		if ( is_array( $templates ) ) {
			return $this->success( $templates );
		} else {
			return $this->error( 'no_templates', __( 'Templates not found.', 'popper' ) );
		}
	}

	/**
	 * Sync the template library.
	 *
	 * @param \WP_REST_Request $request  request object.
	 *
	 * @return mixed
	 */
	public function sync_template_library( \WP_REST_Request $request ) {
		delete_transient( 'popper_templates' );

		if ( current_user_can( 'manage_options' ) ) {
			return $this->get_templates();
		}

		return $this->success( true );
	}

	/**
	 * Checks if a given request has access to read the items.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 *
	 * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
	 */
	public function update_settings_permissions( $request ) {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Retrieves the query params for the items collection.
	 *
	 * @return array Collection parameters.
	 */
	public function get_collection_params() {
		return array();
	}

	/**
	 * Success rest.
	 *
	 * @param mixed $response response data.
	 * @return mixed
	 */
	public function success( $response ) {
		return new \WP_REST_Response(
			array(
				'success'  => true,
				'response' => $response,
			),
			200
		);
	}

	/**
	 * Failed rest.
	 *
	 * @param mixed $response response data.
	 * @return mixed
	 */
	public function failed( $response ) {
		return new \WP_REST_Response(
			array(
				'success'  => false,
				'response' => $response,
			),
			200
		);
	}

	/**
	 * Error rest.
	 *
	 * @param mixed $code     error code.
	 * @param mixed $response response data.
	 * @return mixed
	 */
	public function error( $code, $response ) {
		return new \WP_REST_Response(
			array(
				'error'      => true,
				'success'    => false,
				'error_code' => $code,
				'response'   => $response,
			),
			401
		);
	}

}

Rest::get_instance();
