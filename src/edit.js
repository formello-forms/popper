import { __ } from '@wordpress/i18n';
import { useSelect, dispatch, select } from '@wordpress/data';
import { useState, useEffect, Fragment } from '@wordpress/element';

import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	RichText,
	useBlockProps,
	store as blockEditorStore,
	__experimentalBlockVariationPicker
} from '@wordpress/block-editor';

import {
	isReusableBlock,
	createBlocksFromInnerBlocksTemplate,
	createBlock
} from '@wordpress/blocks';

import {
	ToolbarGroup,
	ToolbarButton
} from '@wordpress/components';

import Appearance from './settings/appearance';
import OpenBehaviour from './settings/open-behaviour';
import CloseBehaviour from './settings/close-behaviour';
import { RulesModal } from "./plugin/modal";
import './editor.scss';
import Controls from './settings/controls';

import classnames from 'classnames';
import icons from './icons';


function Edit( props ) {

	const { attributes, setAttributes, className, clientId } = props;

	const post_id = useSelect(select =>
		select("core/editor").getCurrentPostId()
	);

	const { hasInnerBlocks } = useSelect(
		( select ) => {
			const { getBlock, getSettings } = select( blockEditorStore );
			const block = getBlock( clientId );
			return {
				hasInnerBlocks: !! ( block && block.innerBlocks.length )
			};
		},
		[ clientId ]
	);

	const [ isModalOpen, setModalOpen ] = useState( false );
	const closeModal = () => setModalOpen( false );

	const {
		width,
		backgroundColor,
		gradientBackground,
		showCloseButton,
		closeButtonColor,
		closeButtonSize,
		borderRadius,
		boxShadow,
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
		closeButtonStyle.width = closeButtonSize;
		closeButtonStyle.height = closeButtonSize;
	}

    const containerClass = classnames( 'popper__container', boxShadow );

    const modalStyle = {
        minWidth: width,
        borderRadius,
    };

    if ( backgroundColor ) {
        modalStyle.backgroundColor = backgroundColor;
    }
    if ( gradientBackground ) {
        modalStyle.background = gradientBackground;
    }

	return (
		<div { ...useBlockProps() } aria-hidden="true" style={ style }>

			<InspectorControls>
				<OpenBehaviour { ...props } />
				<CloseBehaviour { ...props } />
				<Appearance { ...props } />
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Display Rules', 'popper' ) }
						icon={ 'admin-generic' }
						onClick={ () => {
							setModalOpen( true )
						} }
					/>
				</ToolbarGroup>
					<Controls
						attributes={ attributes }
						setAttributes={ setAttributes }
						style={ style }
					/>
			</BlockControls>
			<div tabIndex="-1">

				<div role="dialog" aria-modal="true">
					{
						showCloseButton &&
						<button className="popper__close" style={ closeButtonStyle }></button>
					}

					<div className={ containerClass } style={ modalStyle }>
						<InnerBlocks
							templateLock={ false }
							renderAppender={ hasInnerBlocks ? undefined : <InnerBlocks.ButtonBlockAppender /> }
						/>
					</div>

				</div>
			</div>
			{ isModalOpen && (
				<RulesModal onRequestClose={ closeModal } />
			)}
		</div>
	);
}

function Placeholder ( props ) {

	const { clientId, setAttributes } = props;
	const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );

	const {
		insertBlock,
		replaceInnerBlocks,
	} = dispatch( 'core/block-editor' );

	const { variations, defaultVariation } = useSelect(
		( select ) => {
			const { getBlock } = select( 'core/block-editor' );
			const block = getBlock( clientId );
			console.log(getDefaultBlockVariation( props.name ))
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
							)
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