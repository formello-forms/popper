import { __ } from '@wordpress/i18n';
import {
	RangeControl,
	PanelBody,
	PanelRow,
	SelectControl,
	RadioControl,
	ColorPicker
} from '@wordpress/components';
import { 
	__experimentalColorGradientControl as ColorGradientControl,
	PanelColorSettings
} from '@wordpress/block-editor';

const Button = (props) => {
	const { attributes, setAttributes, showPreview } = props;
	const {
		closeButtonColor,
		closeButtonSize,
		closeButtonAlignment,
	} = attributes;

	const options = [
		{ label: __('Inside', 'popper'), value: 'inside' },
		{ label: __('Outside', 'popper'), value: 'outside' },
		{ label: __('Edge of screen', 'popper'), value: 'edge' },
	];

	return (
		<>
			<PanelBody
				title={__('Button', 'popper')}
				initialOpen={false}
			>
				<RangeControl
					value={closeButtonSize}
					label={__('Close Icon Size', 'popper')}
					onChange={(val) => {
						setAttributes({ closeButtonSize: val });
					}}
					allowReset
					min={12}
					max={40}
				/>
				<RadioControl
					label={__('Button position', 'popper')}
					onChange={(val) =>
						setAttributes({ closeButtonAlignment: val })
					}
					selected={ closeButtonAlignment }
					options={ options }
				/>
			</PanelBody>
		</>
	);
};

export default Button;
