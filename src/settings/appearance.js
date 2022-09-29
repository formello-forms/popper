import { __ } from '@wordpress/i18n';
import { RangeControl, PanelBody, SelectControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

const Appearance = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		width,
		backgroundColor,
		closeButtonColor,
		overlayColor,
		animation,
		closeButtonBgColor,
		closeButtonStyle
	} = attributes;

	const changeButtonColor = ( property, color ) => {
		setAttributes( { closeButtonStyle: {
			...closeButtonStyle,
			[property]: color
		} } )
	}

	return (
		<>
			<PanelColorSettings
				title={ __( 'Color Settings', 'popper' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						value: backgroundColor,
						onChange: ( color ) =>
							setAttributes( { backgroundColor: color } ),
						label: __( 'Background Color', 'popper' ),
					},
					{
						value: overlayColor,
						onChange: ( color ) =>
							setAttributes( { overlayColor: color } ),
						label: __( 'Overlay Color', 'popper' ),
						enableAlpha: true,
					},
					{
						value: closeButtonStyle?.backgroundColor,
						onChange: ( color ) => changeButtonColor( 'backgroundColor', color ),
						label: __( 'Button Background Color', 'popper' ),
					},
					{
						value: closeButtonStyle?.color,
						onChange: ( color ) => changeButtonColor( 'color', color ),
						label: __( 'Button Text Color', 'popper' ),
					},
				] }
			/>
			<PanelBody
				title={ __( 'Modal Appearance', 'popper' ) }
				initialOpen={ false }
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
		</>
	);
};

export default Appearance;
