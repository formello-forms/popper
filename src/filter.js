import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { parse } from '@wordpress/block-serialization-default-parser';
import api from '@wordpress/api';

const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const allowedBlocks = [ 'core/image', 'core/button' ];

		if ( ! allowedBlocks.includes( props.name ) ) {
			return <BlockEdit { ...props } />;
		}

		const opts = [ { value: null, label: __( 'Select a popup', 'popper' ) } ];

		const findById = ( val ) => {
			return popups.find( ( element ) => {
				return element.ID === val;
			} );
		};

		const setAnchor = ( val ) => {
			let elm = findById( val );
			if ( ! elm ) {
				return;
			}
			elm = parse( elm.post_content );
			const attrs = elm[ 0 ].attrs;
			if ( 'anchor' === attrs.openBehaviour ) {
				setAttributes( { anchor: attrs.anchor } );
			}
		};

		const addRule = ( val ) => {
			const post = new api.models.Popper( { id: val } );
			post.fetch().done( ( data ) => {
				post.setMeta( 'popper_rules', 'newValue' );

				post.save( { id: val } );
			} );
		};

		const popups = useSelect( ( select ) => {
			return select( 'core' ).getEntityRecords( 'postType', 'popper', {
				per_page: -1,
			} );
		} );

		if ( popups !== null ) {
			popups.forEach( ( post ) => {
				opts.push( { value: post.id, label: post.title.raw } );
			} );
		}

		const { attributes, setAttributes, isSelected } = props;

		const { popper } = attributes;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ isSelected && (
					<InspectorAdvancedControls>
						<SelectControl
							label={ __( 'Open popup' ) }
							value={ popper }
							options={ opts }
							onChange={ ( val ) => {
								setAttributes( { popper: val } );
								setAnchor( val );
								addRule( val );
							} }
							help={ __( 'Open a popup on anchor click', 'popper' ) }
						/>
					</InspectorAdvancedControls>
				) }
			</Fragment>
		);
	};
}, 'withAdvancedControls' );

addFilter(
	'editor.BlockEdit',
	'formello/popper-advanced-control',
	withAdvancedControls
);

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {
	const allowedBlocks = [ 'core/image', 'core/button' ];

	//check if object exists for old Gutenberg version compatibility
	if ( allowedBlocks.includes( settings.name ) ) {
		settings.attributes = Object.assign( settings.attributes, {
			popper: {
				type: 'numeric',
				default: null,
			},
		} );
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'formello/popper-custom-attributes',
	addAttributes
);
