import { __ } from '@wordpress/i18n';
import { useSelect, dispatch, select, subscribe } from '@wordpress/data';
import { useState, useEffect, Fragment } from '@wordpress/element';
import { useEntityProp } from '@wordpress/core-data';

import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	RichText,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import {
	isReusableBlock,
	createBlocksFromInnerBlocksTemplate,
	createBlock,
} from '@wordpress/blocks';

import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

import BlockVariationPicker from './placeholder';
import Appearance from './settings/appearance';
import OpenBehaviour from './settings/open-behaviour';
import CloseBehaviour from './settings/close-behaviour';
import { RulesModal } from './plugin/modal';
import { TemplatesModal } from './library';
import './editor.scss';
import Controls from './settings/controls';
import usePostSaved from './savedhook';

import classnames from 'classnames';
import icons from './icons';

function Edit(props) {
	const { attributes, setAttributes, className, clientId } = props;
	const saved = usePostSaved();

	const {
		width,
		backgroundColor,
		gradientBackground,
		showCloseButton,
		closeButtonColor,
		closeButtonSize,
		closeButtonAlignment,
		borderRadius,
		boxShadow,
		overlayColor,
		overlayOpacity,
		uuid,
	} = attributes;

	const postTitle = select('core/editor').getEditedPostAttribute('meta');

	if( saved ) {

		if (!postTitle.popper_rules.location.length) {
			dispatch('core/notices').createNotice(
				'warning',
				'This popup has no rules assigned. Please select at least one option.',
				{ 	
					id: 'popper', 
					isDismissible: true,
				}
			);
		}
	}

	useEffect(() => {

		setAttributes( { uuid: post_id } )

	}, []);

	const post_id = useSelect((select) =>
		select('core/editor').getCurrentPostId()
	);

	const { hasInnerBlocks } = useSelect(
		(select) => {
			const { getBlock, getSettings } = select(blockEditorStore);
			const block = getBlock(clientId);
			return {
				hasInnerBlocks: !!(block && block.innerBlocks.length),
			};
		},
		[clientId]
	);

	const [isModalOpen, setModalOpen] = useState(false);
	const [isModalTemplateOpen, setModalTemplateOpen] = useState(false);
	const closeModal = () => setModalOpen(false);

	const style = {
		minWidth: width,
		width: width,
	};

	const closeButtonStyle = {};

	if (backgroundColor) {
		//style.backgroundColor = backgroundColor;
	}

	if (gradientBackground) {
		style.background = gradientBackground;
	}

	if (closeButtonColor) {
		closeButtonStyle.color = closeButtonColor;
		closeButtonStyle.fontSize = closeButtonSize;
		closeButtonStyle.width = closeButtonSize;
		closeButtonStyle.height = closeButtonSize;
	}

	if ('outside' === closeButtonAlignment) {
		closeButtonStyle.top = (closeButtonSize + 4) * -1;
		closeButtonStyle.right = 0;
	}

	const containerClass = classnames('wp-block-popper__container', boxShadow);

	const modalStyle = {
		minWidth: width,
		width: width,
		borderRadius,
	};

	if (backgroundColor) {
		modalStyle.backgroundColor = backgroundColor;
	}
	if (gradientBackground) {
		modalStyle.background = gradientBackground;
	}

	return (
		<div {...useBlockProps()} style={style}>
			<InspectorControls>
				<OpenBehaviour {...props} />
				<CloseBehaviour {...props} />
				<Appearance {...props} />
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Template', 'popper' ) }
						icon={ 'layout' }
						onClick={ () => {
							setModalOpen( 'templates' );
						}}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						label={ __( 'Display Rules', 'popper' ) }
						icon={ 'visibility' }
						onClick={ () => {
							setModalOpen( 'options' );
						}}
					/>
				</ToolbarGroup>
				<Controls
					attributes={attributes}
					setAttributes={setAttributes}
					style={style}
				/>
			</BlockControls>
			<div>
				<Fragment>
					{showCloseButton && (
						<button
							className="wp-block-popper__close"
							style={closeButtonStyle}
						></button>
					)}

					<div
						{...useBlockProps()}
						className={containerClass}
						style={modalStyle}
					>
						<InnerBlocks
							templateLock={false}
							renderAppender={
								hasInnerBlocks ? undefined : (
									<InnerBlocks.ButtonBlockAppender />
								)
							}
						/>
					</div>
				</Fragment>
			</div>
			{ 'templates' === isModalOpen &&
				<TemplatesModal
					type={ 'remote' }
					onRequestClose={ () => setModalOpen( false ) }
					clientId={ clientId }
				/>
			}
			{ 'options' === isModalOpen && <RulesModal onRequestClose={ closeModal } />}
		</div>
	);
}

function Placeholder ( props ) {

	const { className, name, hasInnerBlocks, clientId } = props;

	const {
		insertBlock,
		replaceInnerBlocks,
	} = dispatch( 'core/block-editor' );

	const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );

	const defaultVariation = useSelect(
		( select ) => {
			return typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( props.name );
		},
		[ name ]
	);

	const variations = useSelect(
		( select ) => {
			return getBlockVariations( name, 'block' );
		},
		[ name ]
	);

	return (
		<div {...useBlockProps()}>
			<BlockVariationPicker
				icon={ 'external' }
				label={ 'Popup' }
				instructions={ __( 'Select a form to start with.', 'popper' ) }
				variations={ variations }
				clientId={ clientId }
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

const PopperEdit = (props) => {

	const { clientId, name } = props;
	const hasInnerBlocks = useSelect(
		(select) => {
			const { getBlock } = select('core/block-editor');
			const block = getBlock(clientId);
			return !!(block && block.innerBlocks.length);
		},
		[clientId]
	);
	const Component = hasInnerBlocks ? Edit : Placeholder;

	return <Component {...props} />;
};

export default PopperEdit;
