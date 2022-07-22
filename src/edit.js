import { __ } from '@wordpress/i18n';
import { useSelect, dispatch, select } from '@wordpress/data';
import { useState, useEffect, Fragment } from '@wordpress/element';

import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import BlockVariationPicker from './placeholder';
import Button from './settings/button';
import Appearance from './settings/appearance';
import OpenBehaviour from './settings/open-behaviour';
import CloseBehaviour from './settings/close-behaviour';
import { RulesModal } from './plugin/modal';
import { TemplatesModal } from './library';
import './editor.scss';
import Controls from './settings/controls';

import classnames from 'classnames';

function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;

	const {
		width,
		backgroundColor,
		showCloseButton,
		closeButtonColor,
		closeButtonSize,
		closeButtonAlignment,
		boxShadow,
		overlayColor,
		align,
		fullPage,
		borderRadius,
	} = attributes;

	useEffect( () => {
		setAttributes( { uuid: postId } );
	}, [] );

	const postId = useSelect( ( select ) =>
		select( 'core/editor' ).getCurrentPostId()
	);

	const { hasInnerBlocks } = useSelect(
		( select ) => {
			const { getBlock } = select( blockEditorStore );
			const block = getBlock( clientId );
			return {
				hasInnerBlocks: !! ( block && block.innerBlocks.length ),
			};
		},
		[ clientId ]
	);

	const [ isModalOpen, setModalOpen ] = useState( false );
	const closeModal = () => setModalOpen( false );

	const closeButtonStyle = {};

	if ( closeButtonColor ) {
		closeButtonStyle.color = closeButtonColor;
		closeButtonStyle.fontSize = closeButtonSize;
		closeButtonStyle.width = closeButtonSize;
		closeButtonStyle.height = closeButtonSize;
	}

	if ( 'outside' === closeButtonAlignment ) {
		closeButtonStyle.top = ( closeButtonSize + 4 ) * -1;
		closeButtonStyle.right = 0;
	}

	const modalStyle = {
		width,
		borderRadius,
	};

	const overlayStyle = {
		backgroundColor: overlayColor,
	};

	if ( overlayColor && ! align.includes( 'center' ) ) {
		overlayStyle.backgroundColor = undefined;
	}

	if ( backgroundColor ) {
		modalStyle.backgroundColor = backgroundColor;
	}

	const popperClass = classnames(
		'wp-block-popper wp-block-popper-is-open',
		'wp-block-formello-popper',
		{
			'wp-block-popper--right': align.includes( 'right' ),
			'wp-block-popper--left': align.includes( 'left' ),
			'wp-block-popper--top': align.includes( 'top' ),
			'wp-block-popper--bottom': align.includes( 'bottom' ),
			'wp-block-formello-popper--nobg':
				! align.includes( 'center' ) || undefined === overlayColor,
		}
	);

	const containerClass = classnames( 'wp-block-popper__container', boxShadow, {
		wide: fullPage,
	} );

	/**
	 * Returns the current deviceType.
	 */
	const { deviceType } = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return {
			deviceType: __experimentalGetPreviewDeviceType(),
		};
	}, [] );

	if ( 'Mobile' === deviceType ) {
		modalStyle.width = undefined;
	}

	const blockProps = useBlockProps( {
		className: containerClass,
		style: modalStyle,
	} )

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		templateLock: false,
		renderAppender: hasInnerBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
	} );

	const closeButton = (
		<button
			className="wp-block-popper__close"
			style={ closeButtonStyle }
		></button>
	);

	return (
		<div className={ popperClass } style={ overlayStyle }>
			{ showCloseButton && 'edge' === closeButtonAlignment && closeButton }
			<InspectorControls>
				<OpenBehaviour { ...props } />
				<CloseBehaviour { ...props } />
				<Appearance { ...props } />
				<Button { ...props } />
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Template', 'popper' ) }
						icon={ 'layout' }
						onClick={ () => {
							setModalOpen( 'templates' );
						} }
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Display Rules', 'popper' ) }
						icon={ 'visibility' }
						onClick={ () => {
							setModalOpen( 'options' );
						} }
					/>
				</ToolbarGroup>
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</BlockControls>
			<div {...innerBlocksProps}>
				<Fragment>
					{ showCloseButton &&
						'edge' !== closeButtonAlignment &&
						closeButton }
					<main className="wp-block-popper__content">
						{ children }
					</main>
				</Fragment>
			</div>
			{ 'templates' === isModalOpen && (
				<TemplatesModal
					type={ 'remote' }
					onRequestClose={ () => setModalOpen( false ) }
					{ ...props }
				/>
			) }
			{ 'options' === isModalOpen && (
				<RulesModal onRequestClose={ closeModal } />
			) }
		</div>
	);
}

function Placeholder( props ) {
	const { name, clientId, setAttributes } = props;

	const { replaceInnerBlocks } = dispatch( 'core/block-editor' );

	const { getBlockVariations, getDefaultBlockVariation } =
		select( 'core/blocks' );

	const defaultVariation = useSelect(
		() => {
			return typeof getDefaultBlockVariation === 'undefined'
				? null
				: getDefaultBlockVariation( props.name );
		},
		[ name ]
	);

	const variations = useSelect(
		() => {
			return getBlockVariations( name, 'block' );
		},
		[ name ]
	);

	return (
		<div { ...useBlockProps({
			className: 'popper-placeholder'
		}) }>
			<BlockVariationPicker
				icon={ 'external' }
				label={ 'Popup' }
				instructions={ __( 'Select a form to start with.', 'popper' ) }
				variations={ variations }
				clientId={ clientId }
				setAttributes={ setAttributes }
				allowSkip
				onSelect={ ( nextVariation = defaultVariation ) => {
					if ( nextVariation.attributes ) {
						setAttributes( nextVariation.attributes );
					}
					if ( nextVariation.innerBlocks ) {
						replaceInnerBlocks(
							props.clientId,
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
	const Component = hasInnerBlocks ? Edit : Placeholder;

	return <Component { ...props } />;
};

export default PopperEdit;
