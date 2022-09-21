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

		const opts = [ { value: '', label: __( 'Select a popup', 'popper' ) } ];

		const { postType, postId } = useSelect( ( select ) => ( {
			postId: select( 'core/editor' ).getCurrentPostId(),
			postType: select( 'core/editor' ).getCurrentPostType(),
		} ) );

		const { popups } = useSelect( ( select ) => ( {
			popups: select( 'core' ).getEntityRecords( 'postType', 'popper', {
					per_page: -1,
				} )
		} ) );

		const findById = ( val ) => {
			return popups.find( x => x.id === Number(val) )
		};

		const setAnchor = ( val ) => {
			if( val ){
				const popup = findById( val );
				setAttributes( { anchor: popup.meta.popper_trigger.value } );
			}else{
				setAttributes( { anchor: val } )
			}
		};

		const addRule = ( val ) => {
			if( !val ){
				return
			}
			const popup = findById( val );

			const rule = {
				rule: 'post:' + postType,
				object: [postId]
			}

			const ruleExists  = popup.meta.popper_rules.location.find(x => x.rule === rule.rule && x.object.includes(postId) )

			if( ruleExists ){
				return
			}

			popup.meta.popper_rules.location.push( rule )
			const post = new api.models.Popper( { id: val } );
			post.fetch().done( ( data ) => {
				post.setMeta( 'popper_rules', popup.meta.popper_rules );
				post.save( { id: val } );
			} );
		};

		if ( null !== popups && popups.length ) {
			popups.forEach( ( post ) => {
				if( 'anchor' === post.meta.popper_trigger.trigger || 'target' === post.meta.popper_trigger.trigger ) {
					opts.push( { value: post.id, label: post.title.raw + ' (' + post.meta.popper_trigger.trigger + ')' || __( 'No title', 'popper' ) } );
				}
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
