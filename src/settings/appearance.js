import { __ } from '@wordpress/i18n';
import {
	RangeControl,
	PanelBody,
	PanelRow,
	SelectControl,
	RadioControl,
	ColorPicker,
	__experimentalBorderBoxControl as BorderBoxControl
} from '@wordpress/components';
import { 
	__experimentalColorGradientControl as ColorGradientControl,
	PanelColorSettings
} from '@wordpress/block-editor';

const Appearance = (props) => {
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
		animation,
		borders
	} = attributes;

	const options = [
		{ label: __('Inside', 'popper'), value: 'inside' },
		{ label: __('Outside', 'popper'), value: 'outside' },
		{ label: __('Edge of screen', 'popper'), value: 'edge' },
	];

	return (
		<>

			<PanelColorSettings
				  title={ __( 'Color Settings', 'popper' ) }
				  initialOpen={ false }
				  colorSettings={[
					{
						value: backgroundColor,
						onChange: (color) => setAttributes({ backgroundColor: color }),
						label: __( 'Background Color', 'popper' ),
					},
					{
						value: overlayColor,
						onChange: (color) => setAttributes({ overlayColor: color }),
						label: __( 'Overlay Color', 'popper' ),
						enableAlpha: true
					},
					{
						value: closeButtonColor,
						onChange: (color) => setAttributes({ closeButtonColor: color }),
						label: __( 'Close Button Color', 'popper' ),
					},
				  ]}
			/>
			<PanelBody
				title={__('Modal Appearance', 'popper')}
				initialOpen={false}
			>			
        		<RangeControl
					value={borderRadius}
					label={__('Popup Border Radius', 'popper')}
					onChange={(val) => {
						setAttributes({ borderRadius: val });
					}}
					allowReset
					min={0}
					max={100}
				/>
				<RangeControl
					value={ width}
					label={__('Popup  Min Width', 'popper')}
					onChange={(val) => {
						setAttributes({  width: val });
					}}
					allowReset
					min={50}
					max={1000}
				/>
				<SelectControl
					label={__('Animation', 'popper')}
					value={animation}
					options={[
						{ label: __('None', 'popper'), value: '' },
						{
							label: __('Slide in Top', 'popper'),
							value: 'slide-in-top',
						},
						{
							label: __('Slide in Bottom', 'popper'),
							value: 'slide-in-bottom',
						},
						{
							label: __('Slide in Right', 'popper'),
							value: 'slide-in-right',
						},
						{
							label: __('Slide in Left', 'popper'),
							value: 'slide-in-left',
						},
						{ label: __('Unfold In', 'popper'), value: 'unfoldIn' },
						{ label: __('Puff In', 'popper'), value: 'puff-in' },
						{
							label: __('Puff In Back', 'popper'),
							value: 'puff-in-back',
						},
					]}
					onChange={(val) => setAttributes({ animation: val })}
				/>
			</PanelBody>
		</>
	);
};

export default Appearance;
