/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToolbarDropdownMenu, ToolbarGroup, ToolbarItem, ToolbarButton } from '@wordpress/components';
import {
	BlockControls,
	ColorPalette,
	__experimentalBlockAlignmentMatrixControl as BlockAlignmentMatrixControl,
} from '@wordpress/block-editor';
import { Fragment, useState } from '@wordpress/element';
import icons from '../icons';
import { justifyLeft, justifyCenter, justifyRight } from '@wordpress/icons';

export default function Controls(props) {
	const {
		attributes,
		setAttributes,
		onSelectImage,
		className,
		style,
		attributes: { borderRadius, boxShadow, type, align },
	} = props;

	const [icon, setIcon] = useState(justifyCenter);

	const types = {
		popup: justifyCenter,
		slideIn: justifyLeft,
		slideInRight: justifyRight,
	};

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<BlockAlignmentMatrixControl
						value={attributes.align}
						onChange={ ( val ) => setAttributes( { align: val } ) }
						label={ __( 'Position', 'popper' ) }
					/>
					<ToolbarDropdownMenu
						icon={icons.boxShadow}
						label={ __( 'Box shadow', 'popper' ) }
						controls={[
							{
								label: __('None', 'popper'),
								title: 'None',
								icon: icons.boxShadowNone,
								isActive:
									attributes.boxShadow ===
									'wp-block-popper__shadow-none'
										? true
										: false,
								onClick: () =>
									setAttributes({
										boxShadow:
											'wp-block-popper__shadow-none',
									}),
							},
							{
								label: __('Small', 'popper'),
								title: 'Small',
								icon: icons.boxShadowSmall,
								isActive:
									attributes.boxShadow ===
									'wp-block-popper__shadow-sm'
										? true
										: false,
								onClick: () =>
									setAttributes({
										boxShadow: 'wp-block-popper__shadow-sm',
									}),
							},
							{
								label: __('Medium', 'popper'),
								title: 'Medium',
								icon: icons.boxShadowMedium,
								isActive:
									attributes.boxShadow ===
									'wp-block-popper__shadow-md'
										? true
										: false,
								onClick: () =>
									setAttributes({
										boxShadow: 'wp-block-popper__shadow-md',
									}),
							},
							{
								label: __('Large', 'popper'),
								title: 'Large',
								icon: icons.boxShadowLarge,
								isActive:
									attributes.boxShadow ===
									'wp-block-popper__shadow-lg'
										? true
										: false,
								onClick: () =>
									setAttributes({
										boxShadow: 'wp-block-popper__shadow-lg',
									}),
							},
							{
								label: __('X-Large', 'popper'),
								title: 'X-Large',
								icon: icons.boxShadowXLarge,
								isActive:
									attributes.boxShadow ===
									'wp-block-popper__shadow-xl'
										? true
										: false,
								onClick: () =>
									setAttributes({
										boxShadow: 'wp-block-popper__shadow-xl',
									}),
							},
						]}
					/>
					<ToolbarDropdownMenu
						icon={icons.borderRadius}
						label={ __( 'Border radius', 'popper' ) }
						controls={[
							{
								label: __('None', 'popper'),
								title: 'None',
								icon: icons.borderRadiusNone,
								isActive:
									attributes.borderRadius === 0
										? true
										: false,
								onClick: () =>
									setAttributes({ borderRadius: 0 }),
							},
							{
								label: __('Small', 'popper'),
								title: 'Small',
								icon: icons.borderRadiusSmall,
								isActive:
									attributes.borderRadius === 20
										? true
										: false,
								onClick: () =>
									setAttributes({ borderRadius: 2 }),
							},
							{
								label: __('Medium', 'popper'),
								title: 'Medium',
								icon: icons.borderRadiusMedium,
								isActive:
									attributes.borderRadius === 4
										? true
										: false,
								onClick: () =>
									setAttributes({ borderRadius: 4 }),
							},
							{
								label: __('Large', 'popper'),
								title: 'Large',
								icon: icons.borderRadiusLarge,
								isActive:
									attributes.borderRadius === 8
										? true
										: false,
								onClick: () =>
									setAttributes({ borderRadius: 8 }),
							},
							{
								label: __('X-Large', 'popper'),
								title: 'X-Large',
								icon: icons.borderRadiusXLarge,
								isActive:
									attributes.borderRadius === 24
										? true
										: false,
								onClick: () =>
									setAttributes({ borderRadius: 24 }),
							},
						]}
					/>
				</ToolbarGroup>
			</BlockControls>
		</Fragment>
	);
}
