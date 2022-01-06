/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, ButtonGroup, Dropdown, DropdownMenu, FocalPointPicker, MenuGroup, MenuItem, PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl, Toolbar, ToolbarButton, ToolbarGroup, Tooltip } from '@wordpress/components';
import { BlockControls, ColorPalette, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useState } from '@wordpress/element';
import icons from '../icons';
import {
	justifyLeft,
	justifyCenter,
	justifyRight,
} from '@wordpress/icons';

export default function Controls( props ) {
	const {
		attributes,
		setAttributes,
		onSelectImage,
		className,
		style,
		attributes: {
			borderRadius,
			boxShadow,
			type
		},
	} = props;

	const [ icon, setIcon ] = useState( justifyCenter );

	const types = {
		popup: justifyCenter,
		slideIn: justifyLeft,
		slideInRight: justifyRight
	}

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
				    <DropdownMenu
				        icon={ types[attributes.type] }
				        label={ __( 'Type', 'popper' ) }
				        controls={ [
				            {
								label: __( 'PopUp', 'popper' ),
								title: 'Pop Up',
				                icon: justifyCenter,
				                isActive: attributes.type === 'popup' ? true : false,
				                onClick: () => setAttributes( { type: 'popup' } ),
				            },
				            {
								label: __( 'Slide in Left', 'popper' ),
								title: 'Slide In left',
				                icon: justifyLeft,
				                isActive: attributes.type === 'slideIn' ? true : false,
				                onClick: () => setAttributes( { type: 'slideIn' } ),
				            },
				            {
								label: __( 'Slide In Right', 'popper' ),
								title: 'Slide In Right',
				                icon: justifyRight,
				                isActive: attributes.type === 'slideInRight' ? true : false,
				                onClick: () => setAttributes( { type: 'slideInRight' } ),
				            },
				        ] }
				    />
				    <DropdownMenu
				        icon={ icons.boxShadow }
				        label={ __( 'Box shadow', 'popper' ) }
				        controls={ [
				            {
								label: __( 'None', 'popper' ),
								title: 'None',
				                icon: icons.boxShadowNone,
				                isActive: attributes.boxShadow === 'popper__shadow-none' ? true : false,
				                onClick: () => setAttributes( { boxShadow: 'popper__shadow-none' } ),
				            },
				            {
								label: __( 'Small', 'popper' ),
								title: 'Small',
				                icon: icons.boxShadowSmall,
				                isActive: attributes.boxShadow === 'popper__shadow-sm' ? true : false,
				                onClick: () => setAttributes( { boxShadow: 'popper__shadow-sm' } ),
				            },
				            {
								label: __( 'Medium', 'popper' ),
								title: 'Medium',
				                icon: icons.boxShadowMedium,
				                isActive: attributes.boxShadow === 'popper__shadow-md' ? true : false,
				                onClick: () => setAttributes( { boxShadow: 'popper__shadow-md' } ),
				            },
				            {
								label: __( 'Large', 'popper' ),
								title: 'Large',
				                icon: icons.boxShadowLarge,
				                isActive: attributes.boxShadow === 'popper__shadow-lg' ? true : false,
				                onClick: () => setAttributes( { boxShadow: 'popper__shadow-lg' } ),
				            },
				            {
								label: __( 'X-Large', 'popper' ),
								title: 'X-Large',
				                icon: icons.boxShadowXLarge,
				                isActive: attributes.boxShadow === 'popper__shadow-xl' ? true : false,
				                onClick: () => setAttributes( { boxShadow: 'popper__shadow-xl' } ),
				            }
				        ] }
				    />
				    <DropdownMenu
				        icon={ icons.borderRadius }
				        label={ __( 'Border radius', 'popper' ) }
				        controls={ [
				            {
								label: __( 'None', 'popper' ),
								title: 'None',
				                icon: icons.borderRadiusNone,
				                isActive: attributes.borderRadius === 0 ? true : false,
				                onClick: () => setAttributes( { borderRadius: 0 } ),
				            },
				            {
								label: __( 'Small', 'popper' ),
								title: 'Small',
				                icon: icons.borderRadiusSmall,
				                isActive: attributes.borderRadius === 20 ? true : false,
				                onClick: () => setAttributes( { borderRadius: 2 } ),
				            },
				            {
								label: __( 'Medium', 'popper' ),
								title: 'Medium',
				                icon: icons.borderRadiusMedium,
				                isActive: attributes.borderRadius === 4 ? true : false,
				                onClick: () => setAttributes( { borderRadius: 4 } ),
				            },
				            {
								label: __( 'Large', 'popper' ),
								title: 'Large',
				                icon: icons.borderRadiusLarge,
				                isActive: attributes.borderRadius === 8 ? true : false,
				                onClick: () => setAttributes( { borderRadius: 8 } ),
				            },
				            {
								label: __( 'X-Large', 'popper' ),
								title: 'X-Large',
				                icon: icons.borderRadiusXLarge,
				                isActive: attributes.borderRadius === 24 ? true : false,
				                onClick: () => setAttributes( { borderRadius: 24 } ),
				            }
				        ] }
				    />
				</ToolbarGroup>
			</BlockControls>
		</Fragment>
	);
}
