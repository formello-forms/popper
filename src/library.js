/**
 * Import CSS
 */
//import './editor.scss';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	Fragment,
	RawHTML,
	useState,
} from '@wordpress/element';

import {
	__,
	sprintf,
} from '@wordpress/i18n';

import apiFetch from '@wordpress/api-fetch';

import {
	compose,
} from '@wordpress/compose';

import {
	decodeEntities,
} from '@wordpress/html-entities';

import {
	withSelect,
	useDispatch,
	useSelect
} from '@wordpress/data';

import {
	parse,
} from '@wordpress/blocks';

import {
	TabPanel,
	Spinner,
	SelectControl,
	Modal,
	Button
} from '@wordpress/components';
import { BlockPreview } from '@wordpress/block-editor';

export function TemplatesModal ( props ) {

	const {
		onRequestClose,
		type,
		clientId,
	} = props;

	const [ loading, setLoading ] = useState( false )
	const [ error, setError ] = useState( false )

    const templates = useSelect(
        ( select ) => select( 'formello/popper-templates' ).getTemplates(),
        []
    );

	const updateTransient = () => {
		apiFetch( {
			path: '/popper/v1/sync_template_library/',
			method: 'POST',
			data: {},
		} )
	}

	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	
	const insertTemplate = ( content, clientId, cb ) => {
		const parsedBlocks = parse( content );

		if ( parsedBlocks.length ) {

			replaceInnerBlocks( clientId, parsedBlocks[0].innerBlocks )
			cb( false );

		}
	}

	const getTemplates = ( type ) => {

		if ( ! templates ) {
			return templates;
		}

		const result = [];

		templates.forEach( ( template ) => {
			let allow = ! type;

			// type check.
			if ( ! allow && template.types ) {
				template.types.forEach( ( typeData ) => {
					if ( typeData.slug && type === typeData.slug ) {
						allow = true;
					}
				} );
			}

			if ( allow ) {
				result.push( template );
			}
		} );

		return result;
	}

	const allTemplates = getTemplates( type );
	const showLoadingSpinner = loading || ! allTemplates;

	return (
		<Modal
			title={ __( 'Popups', 'popper' ) }
			className={ classnames(
				'formello-plugin-templates-modal',
				'formello-plugin-templates-modal-hide-header',
				showLoadingSpinner ? 'formello-plugin-templates-modal-loading' : ''
			) }
			position="top"
			isFullScreen
			onRequestClose={ onRequestClose }
		>

			{ showLoadingSpinner &&
				<div className="formello-plugin-templates-modal-loading-spinner"><Spinner /></div>
			}
			<Fragment>

				<div className="formello-plugin-templates-categories-row">
					<div className="formello-plugin-templates-count">
						<RawHTML>
							{ sprintf(
								/* translators: Number of templates. */
								__( 'Templates: %s', 'popper' ),
								`<strong>${ allTemplates.length ? allTemplates.length : 0 }</strong>` )
							}
						</RawHTML>
					</div>
				</div>
				<div>
					<Button isPrimary onClick={ updateTransient }>Sync template</Button>
				</div>
				{ allTemplates && ! allTemplates.length &&
					<div>
						{ 'local' === type ? (
							<Fragment>
								<p>{ __( 'No templates found.', 'popper' ) }</p>
								<a className="components-button is-button is-primary" href={ formello.templatesURL } target="_blank" rel="noopener noreferrer">{ __( 'Add New', 'popper' ) }</a>
							</Fragment>
						) : (
							<p>{ __( 'No templates found.', 'popper' ) }</p>
						) }
					</div>
				}

				{ allTemplates && 
					<ul className="popper-templates-list">
						{ allTemplates.map( ( template ) => {
							const withPreview = !! template.content;
							const templateTitle = decodeEntities( template.title );

							return (
								<li
									className={ classnames( 'formello-plugin-templates-list-item', 'formello-plugin-templates-list-item-no-thumb' ) }
									key={ template.id }
								>
									<a
										onClick={ () => {
											setLoading( true );
											if ( 'remote' === type && template.content ) {
												insertTemplate( template.content, clientId, ( errorResponse ) => {
													if ( errorResponse ) {
														setError( errorResponse );
													} else {
														onRequestClose();
													}
												} );
											}else{
												onRequestClose( template.id );
											}
											setLoading( false );
										} }
									>
										{ withPreview &&
											<BlockPreview
												blocks={ parse( template.content ) }
											/>
										}
										<div className="formello-plugin-templates-list-item-title">{ templateTitle }</div>
									</a>
								</li>
							);
						} ) }
					</ul>
				}
			</Fragment>
		</Modal>
	);
}