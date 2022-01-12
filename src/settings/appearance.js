import { __ } from '@wordpress/i18n';
import { RangeControl, PanelBody, PanelRow, SelectControl, RadioControl } from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from '@wordpress/block-editor';

const Appearance = ( props ) => {
	const { attributes, setAttributes, showPreview } = props;
	const {
		width,
		backgroundColor,
		gradientBackground,
		closeButtonColor,
		closeButtonSize,
		closeButtonAlignment,
		borderRadius,
		overlayColor,
		overlayOpacity,
		animation
	} = attributes;

	const options = [
		{ label: __( 'Inside', 'popper' ), value: 'inside' },
		{ label: __( 'Outside', 'popper' ), value: 'outside' },
	];

	return (
		<>
			<PanelBody title={ __( 'Colors', 'popper' ) } initialOpen={ false }>
				<ColorGradientControl
					label={ __( 'Close Button Color', 'popper' ) }
					colorValue={ closeButtonColor }
					onColorChange={ ( val ) => {
						setAttributes( {
							closeButtonColor: val || '#000000',
						} );
					} }
				/>
				<ColorGradientControl
					label={ __( 'Background Color', 'popper' ) }
					colorValue={ backgroundColor }
					gradientValue={ gradientBackground }
					onGradientChange={ ( val ) => {
						setAttributes( {
							gradientBackground: val || false,
						} );
					} }
					enableAlpha
					onColorChange={ ( val ) => {
						setAttributes( { backgroundColor: val || false } );
					} }
				/>
				<ColorGradientControl
					label={ __( 'Overlay Color', 'popper' ) }
					colorValue={ overlayColor }
					enableAlpha
					onColorChange={ ( val ) => {
						setAttributes( { overlayColor: val || false } );
					} }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Modal Appearance', 'popper' ) } initialOpen={ false }>
				<RangeControl
					value={ borderRadius }
					label={ __( 'Popup Border Radius', 'popper' ) }
					onChange={ ( val ) => {
						setAttributes( { borderRadius: val } );
					} }
					allowReset
					min={ 0 }
					max={ 100 }
				/>
				<RangeControl
					value={ width }
					label={ __( 'Popup Width', 'popper' ) }
					onChange={ ( val ) => {
						setAttributes( { width: val } );
					} }
					allowReset
					min={ 400 }
					max={ 700 }
				/>
				<RangeControl
					value={ closeButtonSize }
					label={ __( 'Close Icon Size', 'popper' ) }
					onChange={ ( val ) => {
						setAttributes( { closeButtonSize: val } );
					} }
					allowReset
					min={ 12 }
					max={ 40 }
				/>
				<RadioControl
					label={ __( 'Button position', 'popper' ) }
					onChange={ ( val ) => setAttributes( { closeButtonAlignment: val } ) }
					selected={ closeButtonAlignment }
					options={ options }
				/>
		        <SelectControl
		            label={ __( 'Animation', 'popper' ) }
		            value={ animation }
		            options={ [
		                { label: __( 'None', 'popper' ), value: '' },
		                { label: __( 'Slide in Top', 'popper' ), value: 'slide-in-top' },
		                { label: __( 'Slide in Bottom', 'popper' ), value: 'slide-in-bottom' },
		                { label: __( 'Slide in Right', 'popper' ), value: 'slide-in-right' },
		                { label: __( 'Slide in Left', 'popper' ), value: 'slide-in-left' },
		                { label: __( 'Unfold In', 'popper' ), value: 'unfoldIn' },
		                { label: __( 'Puff In', 'popper' ), value: 'puff-in' },
		                { label: __( 'Puff In Back', 'popper' ), value: 'puff-in-back' },
		            ] }
		            onChange={ ( val ) => setAttributes( { animation: val } ) }
		        />
			</PanelBody>
		</>
	);
};

export default Appearance;
