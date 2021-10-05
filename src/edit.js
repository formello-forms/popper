import { __ } from '@wordpress/i18n';
import { useSelect, dispatch, select } from '@wordpress/data';
import { useState, useEffect, Fragment } from '@wordpress/element';

import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	RichText,
	useBlockProps,
	__experimentalBlockVariationPicker
} from '@wordpress/block-editor';

import {
	isReusableBlock,
	createBlocksFromInnerBlocksTemplate,
	createBlock
} from '@wordpress/blocks';

import Appearance from './settings/appearance';
import OpenBehaviour from './settings/open-behaviour';
import CloseBehaviour from './settings/close-behaviour';
import './editor.scss';


function Edit( props ) {

	const { attributes, setAttributes, className } = props;

    const post_id = useSelect(select =>
        select("core/editor").getCurrentPostId()
    );

    useEffect( () => {
    	setAttributes( { uuid: post_id } )
    }, [] )

	const {
		width,
		backgroundColor,
		gradientBackground,
		showCloseButton,
		closeButtonColor,
		closeButtonSize,
		borderRadius,
		overlayColor,
		overlayOpacity,
	} = attributes;

	const style = {
		minWidth: width,
		borderRadius,
	};

	const closeButtonStyle = {};
	
	if ( backgroundColor ) {
		style.backgroundColor = backgroundColor;
	}

	if ( gradientBackground ) {
		style.background = gradientBackground;
	}

	if ( closeButtonColor ) {
		closeButtonStyle.color = closeButtonColor;
		closeButtonStyle.fontSize = closeButtonSize;
	}

	return (
		<div { ...useBlockProps() } aria-hidden="true" style={ style }>

			<InspectorControls>
				<OpenBehaviour { ...props } />
				<CloseBehaviour { ...props } />
				<Appearance { ...props } />
			</InspectorControls>
			<div tabIndex="-1">

				<div role="dialog" aria-modal="true">

					<button className="popper__close" style={ closeButtonStyle }></button>

					<div>
						<InnerBlocks
						templateLock={ false }
						renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
						/>
					</div>

				</div>
			</div>
		</div>
	);
}

function Placeholder ( props ) {

	const { clientId } = props;
	const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );

	const {
		insertBlock,
		replaceInnerBlocks,
	} = dispatch( 'core/block-editor' );

	const { variations, defaultVariation } = useSelect(
		( select ) => {
			const { getBlock } = select( 'core/block-editor' );
			const block = getBlock( clientId );
			return {
				defaultVariation: typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( props.name ),
				variations: typeof getBlockVariations === 'undefined' ? null : getBlockVariations( props.name ),
			}
		},
		[ clientId ]
	);

	return (
		<div {...useBlockProps()}>
			<__experimentalBlockVariationPicker
				label={ 'Popup' }
				instructions={ __( 'Select a popup to start with.', 'popper' ) }
				variations={ variations }
				clientId={ clientId }
				allowSkip
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
					if ( nextVariation.innerBlocks ) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(
								nextVariation.innerBlocks
							),
							true
						);
					}
				} }
			/>
		</div>
	);
}

const PopperEdit = ( props ) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		( select ) => {
			const { getBlock } = select( 'core/block-editor' );
			const block = getBlock( clientId );
			return !! ( block && block.innerBlocks.length );
		},
		[ clientId ]
	);
	const Component = hasInnerBlocks
		? Edit
		: Placeholder;

	return <Component { ...props } />;
};

export default PopperEdit;