import { __ } from '@wordpress/i18n';
import {
	RangeControl,
	SelectControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import {
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
	InspectorControls,
	InspectorAdvancedControls,
} from '@wordpress/block-editor';

const Appearance2 = ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { width, backgroundColor, overlayColor, animation } = attributes;

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	return (
		<>
			<InspectorControls __experimentalGroup="dimensions">
				<ToolsPanelItem
					hasValue={ () => !! width }
					label={ __( 'Minimum width' ) }
					onDeselect={ () =>
						setAttributes( {
							width: undefined,
						} )
					}
					resetAllFilter={ () => ( {
						width: undefined,
					} ) }
					isShownByDefault={ true }
					panelId={ clientId }
				>
					<RangeControl
						value={ width }
						label={ __( 'Popup Min Width', 'popper' ) }
						onChange={ ( val ) => {
							setAttributes( { width: val } );
						} }
						allowReset
						min={ 50 }
						max={ 1000 }
					/>
					<UnitControl
						label={ __( 'Width' ) }
						labelPosition="edge"
						__unstableInputWidth="80px"
						value={ width || '' }
						onChange={ ( nextWidth ) => {
							nextWidth =
								0 > parseFloat( nextWidth ) ? '0' : nextWidth;
							setAttributes( { width: nextWidth } );
						} }
					/>
				</ToolsPanelItem>
			</InspectorControls>
			<InspectorAdvancedControls>
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
			</InspectorAdvancedControls>
			<InspectorControls __experimentalGroup="color">
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

export default Appearance2;
