/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToolbarDropdownMenu, ToolbarGroup } from '@wordpress/components';
import {
	BlockControls,
	__experimentalBlockAlignmentMatrixControl as BlockAlignmentMatrixControl,
	__experimentalBlockFullHeightAligmentControl as FullHeightAlignmentControl,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import icons from '../icons';

export default function Controls( props ) {
	const {
		setAttributes,
		attributes: { borderRadius, boxShadow, align, fullPage, style },
	} = props;

	const SHADOW_CONTROLS = [
		{
			icon: icons.shadow.none,
			title: __( 'None', 'popper' ),
			shadow: 'wp-block-popper__shadow-none',
		},
		{
			icon: icons.shadow.sm,
			title: __( 'Small', 'popper' ),
			shadow: 'wp-block-popper__shadow-sm',
		},
		{
			icon: icons.shadow.md,
			title: __( 'Medium', 'popper' ),
			shadow: 'wp-block-popper__shadow-md',
		},
		{
			icon: icons.shadow.lg,
			title: __( 'Large', 'popper' ),
			shadow: 'wp-block-popper__shadow-lg',
		},
		{
			icon: icons.shadow.xl,
			title: __( 'X-Large', 'popper' ),
			shadow: 'wp-block-popper__shadow-xl',
		},
	];

	const BORDER_CONTROLS = [
		{
			icon: icons.border.none,
			title: __( 'None', 'popper' ),
			border: 'wp-block-popper__border-none',
		},
		{
			icon: icons.border.sm,
			title: __( 'Small', 'popper' ),
			border: 'wp-block-popper__border-sm',
		},
		{
			icon: icons.border.md,
			title: __( 'Medium', 'popper' ),
			border: 'wp-block-popper__border-md',
		},
		{
			icon: icons.border.lg,
			title: __( 'Large', 'popper' ),
			border: 'wp-block-popper__border-lg',
		},
		{
			icon: icons.border.xl,
			title: __( 'X-Large', 'popper' ),
			border: 'wp-block-popper__border-xl',
		},
	];

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<BlockAlignmentMatrixControl
						value={ align }
						onChange={ ( val ) => setAttributes( { align: val } ) }
						label={ __( 'Position', 'popper' ) }
					/>
					<FullHeightAlignmentControl
						isActive={ fullPage }
						onToggle={ () => setAttributes( { fullPage: ! fullPage } ) }
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon={ icons.shadow[boxShadow?.replace( 'wp-block-popper__shadow-', '' )] }
						label={ __( 'Box shadow', 'popper' ) }
						controls={ SHADOW_CONTROLS.map( ( control ) => {
							const { shadow } = control;
							const isActive = boxShadow === shadow;

							return {
								...control,
								isActive,
								onClick: () => setAttributes( { boxShadow: shadow } ),
							}
						} ) }
					/>
					<ToolbarDropdownMenu
						icon={ icons.border[borderRadius?.replace( 'wp-block-popper__border-', '' )] }
						label={ __( 'Border radius', 'popper' ) }
						controls={ BORDER_CONTROLS.map( ( control ) => {
							const { border } = control;
							const isActive = borderRadius === border;

							return {
								...control,
								isActive,
								onClick: () => setAttributes( { borderRadius: border } )
							}
						} ) }
					/>
				</ToolbarGroup>
			</BlockControls>
		</Fragment>
	);
}
