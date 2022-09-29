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

	const changeBorder = ( val ) => {
		setAttributes( { style: {
			...style,
			border: {
				...style?.border,
				radius: val
			}
		} } )		
	}

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
						icon={ icons.boxShadow }
						label={ __( 'Box shadow', 'popper' ) }
						controls={ [
							{
								label: __( 'None', 'popper' ),
								title: 'None',
								icon: icons.boxShadowNone,
								isActive:
									boxShadow === 'wp-block-popper__shadow-none'
										? true
										: false,
								onClick: () =>
									setAttributes( {
										boxShadow:
											'wp-block-popper__shadow-none',
									} ),
							},
							{
								label: __( 'Small', 'popper' ),
								title: 'Small',
								icon: icons.boxShadowSmall,
								isActive:
									boxShadow === 'wp-block-popper__shadow-sm'
										? true
										: false,
								onClick: () =>
									setAttributes( {
										boxShadow: 'wp-block-popper__shadow-sm',
									} ),
							},
							{
								label: __( 'Medium', 'popper' ),
								title: 'Medium',
								icon: icons.boxShadowMedium,
								isActive:
									boxShadow === 'wp-block-popper__shadow-md'
										? true
										: false,
								onClick: () =>
									setAttributes( {
										boxShadow: 'wp-block-popper__shadow-md',
									} ),
							},
							{
								label: __( 'Large', 'popper' ),
								title: 'Large',
								icon: icons.boxShadowLarge,
								isActive:
									boxShadow === 'wp-block-popper__shadow-lg'
										? true
										: false,
								onClick: () =>
									setAttributes( {
										boxShadow: 'wp-block-popper__shadow-lg',
									} ),
							},
							{
								label: __( 'X-Large', 'popper' ),
								title: 'X-Large',
								icon: icons.boxShadowXLarge,
								isActive:
									boxShadow === 'wp-block-popper__shadow-xl'
										? true
										: false,
								onClick: () =>
									setAttributes( {
										boxShadow: 'wp-block-popper__shadow-xl',
									} ),
							},
						] }
					/>
					<ToolbarDropdownMenu
						icon={ icons.borderRadius }
						label={ __( 'Border radius', 'popper' ) }
						controls={ [
							{
								label: __( 'None', 'popper' ),
								title: 'None',
								icon: icons.borderRadiusNone,
								isActive: undefined === style?.border?.radius ? true : false,
								onClick: () => changeBorder( undefined )
							},
							{
								label: __( 'Small', 'popper' ),
								title: 'Small',
								icon: icons.borderRadiusSmall,
								isActive: '2px' === style?.border?.radius ? true : false,
								onClick: () => changeBorder( '2px' )

							},
							{
								label: __( 'Medium', 'popper' ),
								title: 'Medium',
								icon: icons.borderRadiusMedium,
								isActive: '4px' === style?.border?.radius ? true : false,
								onClick: () => changeBorder( '4px' )
							},
							{
								label: __( 'Large', 'popper' ),
								title: 'Large',
								icon: icons.borderRadiusLarge,
								isActive: '8px' === style?.border?.radius ? true : false,
								onClick: () => changeBorder( '8px' )
							},
							{
								label: __( 'X-Large', 'popper' ),
								title: 'X-Large',
								icon: icons.borderRadiusXLarge,
								isActive: '24px' === style?.border?.radius ? true : false,
								onClick: () => changeBorder( '24px' )
							},
						] }
					/>
				</ToolbarGroup>
			</BlockControls>
		</Fragment>
	);
}
