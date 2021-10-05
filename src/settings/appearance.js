import { __ } from '@wordpress/i18n';
import { RangeControl, PanelBody, PanelRow } from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from '@wordpress/block-editor';

const Appearance = ( props ) => {
	const { attributes, setAttributes, showPreview } = props;
	const {
		width,
		backgroundColor,
		gradientBackground,
		closeButtonColor,
		closeButtonSize,
		borderRadius,
		overlayColor,
		overlayOpacity,
	} = attributes;

	return (
		<>
			<PanelBody title={ __( 'Colors', 'popper' ) } initialOpen={ false }>
				<PanelRow>
					<ColorGradientControl
						label={ __( 'Close Button Color', 'popper' ) }
						colorValue={ closeButtonColor }
						onColorChange={ ( val ) => {
							setAttributes( {
								closeButtonColor: val || '#000000',
							} );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ColorGradientControl
						label={ __( 'Background Color', 'popper' ) }
						colorValue={ backgroundColor }
						gradientValue={ gradientBackground }
						onGradientChange={ ( val ) => {
							setAttributes( {
								gradientBackground: val || false,
							} );
						} }
						onColorChange={ ( val ) => {
							setAttributes( { backgroundColor: val || false } );
						} }
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={ __( 'Modal Appearance', 'popper' ) } initialOpen={ false }>
				<PanelRow>
					<RangeControl
						value={ width }
						label={ __( 'Popup Minimum Width', 'popper' ) }
						onChange={ ( val ) => {
							setAttributes( { width: val } );
						} }
						min={ 0 }
						max={ 1000 }
					/>
				</PanelRow>
				<PanelRow>
					<RangeControl
						value={ borderRadius }
						label={ __( 'Popup Border Radius', 'popper' ) }
						onChange={ ( val ) => {
							setAttributes( { borderRadius: val } );
						} }
						min={ 0 }
						max={ 100 }
					/>
				</PanelRow>
				<hr />
				<PanelRow>
					<RangeControl
						value={ closeButtonSize }
						label={ __( 'Close Icon Size', 'popper' ) }
						onChange={ ( val ) => {
							setAttributes( { closeButtonSize: val } );
						} }
						min={ 12 }
						max={ 40 }
					/>
				</PanelRow>
			</PanelBody>
		</>
	);
};

export default Appearance;
