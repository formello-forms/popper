import { __ } from '@wordpress/i18n';
import {
	SelectControl,
	PanelBody,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import {
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
	InspectorControls,
	InspectorAdvancedControls,
	HeightControl,
} from '@wordpress/block-editor';

const Appearance = ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { minWidth, backgroundColor, overlayColor, animation } = attributes;

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	return (
		<>
			<InspectorControls group="dimensions">
				<ToolsPanelItem
					hasValue={ () => !! minWidth }
					label={ __( 'Minimum width' ) }
					onDeselect={ () =>
						setAttributes( {
							minWidth: undefined,
						} )
					}
					resetAllFilter={ () => ( {
						minWidth: undefined,
					} ) }
					isShownByDefault={ true }
					panelId={ clientId }
				>
					<HeightControl
						label={ __( 'Min Width' ) }
						labelPosition="edge"
						value={ minWidth }
						onChange={ ( nextWidth ) => {
							setAttributes( { minWidth: nextWidth } );
						} }
					/>
				</ToolsPanelItem>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody
					title={ __( 'Animation', 'popper' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( 'Animation', 'popper' ) }
						value={ animation }
						options={ [
							{ label: __( 'None', 'popper' ), value: '' },
							{
								label: __( 'Slide in Top', 'popper' ),
								value: 'slide-in-top',
							},
							{
								label: __( 'Slide in Bottom', 'popper' ),
								value: 'slide-in-bottom',
							},
							{
								label: __( 'Slide in Right', 'popper' ),
								value: 'slide-in-right',
							},
							{
								label: __( 'Slide in Left', 'popper' ),
								value: 'slide-in-left',
							},
							{ label: __( 'Unfold In', 'popper' ), value: 'unfoldIn' },
							{ label: __( 'Puff In', 'popper' ), value: 'puff-in' },
							{
								label: __( 'Puff In Back', 'popper' ),
								value: 'puff-in-back',
							},
						] }
						onChange={ ( val ) => setAttributes( { animation: val } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="color">
				<ColorGradientSettingsDropdown
					panelId={ clientId }
					settings={ [
						{
							colorValue: backgroundColor,
							onColorChange: ( color ) =>
								setAttributes( { backgroundColor: color } ),
							label: __( 'Popup Background Color', 'popper' ),
						},
						{
							colorValue: overlayColor,
							onColorChange: ( color ) =>
								setAttributes( { overlayColor: color } ),
							label: __( 'Overlay Color', 'popper' ),
							enableAlpha: true,
						},
					] }
					{ ...colorGradientSettings }
				/>
			</InspectorControls>
		</>
	);
};

export default Appearance;
