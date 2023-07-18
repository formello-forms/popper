import { __ } from '@wordpress/i18n';
import { useSelect, dispatch, select } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import BlockVariationPicker from './placeholder';
import Appearance from './settings/appearance';
import OpenBehaviour from './settings/open-behaviour';
import CloseBehaviour from './settings/close-behaviour';
import { RulesModal } from './plugin/modal';
import { TemplatesModal } from './library';
import './editor.scss';
import Controls from './settings/controls';

import classnames from 'classnames';
import { layout } from '@wordpress/icons';

function Edit( props ) {
	const {
		attributes,
		setAttributes,
		clientId,
		name,
	} = props;

	const {
		minWidth,
		backgroundColor,
		boxShadow,
		overlayColor,
		align,
		fullPage,
		fullWidth,
		borderRadius,
		id,
		uuid,
	} = attributes;

	const { postId, deviceType } = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return {
			deviceType: __experimentalGetPreviewDeviceType(),
			postId: select( 'core/editor' ).getCurrentPostId(),
		};
	}, [] );

	const hasInnerBlocks = useSelect(
		( select ) => {
			const { getBlock } = select( 'core/block-editor' );
			const block = getBlock( clientId );
			return block.innerBlocks.length > 1;
		},
		[ clientId ]
	);

	useEffect( () => {
		if ( id !== 'modal-' + postId ) {
			setAttributes( { id: 'modal-' + postId } );
		}
		if ( parseInt( uuid ) !== postId ) {
			setAttributes( { uuid: postId } );
		}
	}, [] );

	const [ isModalOpen, setModalOpen ] = useState( false );

	const { selectBlock } = dispatch( blockEditorStore );

	const borderProps = useBorderProps( attributes );
	const spacingProps = useSpacingProps( attributes );

	const modalStyle = {
		borderRadius,
		...borderProps.style,
		minWidth: fullWidth ? undefined : minWidth,
		...spacingProps.style,
	};

	const overlayStyle = {
		backgroundColor: overlayColor,
	};

	if ( overlayColor && 'center center' !== align ) {
		overlayStyle.backgroundColor = undefined;
	}

	if ( backgroundColor ) {
		modalStyle.backgroundColor = backgroundColor;
	}

	const popperClass = classnames(
		'wp-block-popper wp-block-popper-is-open',
		'wp-block-formello-popper',
		'alignfull',
		{
			'wp-block-popper--right': align.includes( 'right' ),
			'wp-block-popper--left': align.includes( 'left' ),
			'wp-block-popper--top': align.includes( 'top' ),
			'wp-block-popper--bottom': align.includes( 'bottom' ),
			'wp-block-formello-popper--nobg':
				'center center' !== align || undefined === overlayColor,
		}
	);

	const containerClass = classnames(
		'wp-block-popper__container',
		boxShadow,
		borderRadius,
		borderProps.className,
		{
			fullwidth: fullWidth,
			wide: fullPage,
			'empty': ! hasInnerBlocks
		}
	);

	if ( 'Mobile' === deviceType ) {
		modalStyle.width = undefined;
	}

	const blockProps = useBlockProps( {
		className: containerClass,
		style: modalStyle,
	} );

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		template: [ [ 'core/paragraph' ] ],
		templateLock: false,
		renderAppender: InnerBlocks.DefaultBlockAppender,
	} );

	return (
		<>
			<InspectorControls>
				<OpenBehaviour { ...props } />
				<CloseBehaviour { ...props } />
			</InspectorControls>
			<Appearance { ...props } />
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Template', 'popper' ) }
						icon={ layout }
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

			<div className={ popperClass }>
				<div
					className="wp-block-popper__overlay"
					style={ overlayStyle }
					onClick={ () => selectBlock( clientId ) }
				></div>
				<main className="wp-block-popper__content" { ...innerBlocksProps }>
					{ children }
				</main>
			</div>

			{ 'templates' === isModalOpen && (
				<TemplatesModal
					clientId={ clientId }
					onRequestClose={ () => setModalOpen( false ) }
					blockName={ name }
				/>
			) }
			{ 'options' === isModalOpen && (
				<RulesModal
					onRequestClose={ () => setModalOpen( false ) }
					{ ...props }
				/>
			) }
		</>
	);
}

function Placeholder( props ) {
	const { name, clientId, setAttributes } = props;

	const { replaceInnerBlocks } = dispatch( 'core/block-editor' );

	const { getBlockVariations, getDefaultBlockVariation } =
		select( 'core/blocks' );

	const defaultVariation = useSelect( () => {
		return typeof getDefaultBlockVariation === 'undefined'
			? null
			: getDefaultBlockVariation( props.name );
	}, [ name ] );

	const variations = useSelect( () => {
		return getBlockVariations( name, 'block' );
	}, [ name ] );

	return (
		<div
			{ ...useBlockProps( {
				className: 'popper-placeholder',
			} ) }
		>
			<BlockVariationPicker
				icon={ 'external' }
				label={ 'Popup' }
				instructions={ __( 'Select a template to start with.', 'popper' ) }
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
