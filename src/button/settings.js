import { __ } from '@wordpress/i18n';
import { RangeControl, PanelBody, RadioControl, CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import {
	__experimentalUseBorderProps as useBorderProps,
} from '@wordpress/block-editor';
import { ReactComponent as CloseButton } from './close-button.svg';

const Button = ( props ) => {
	const {
		attributes: { position, isIcon },
		setAttributes,
	} = props;

	const options = [
		{ label: __( 'Inside', 'popper' ), value: 'inside' },
		{ label: __( 'Outside', 'popper' ), value: 'outside' },
		{ label: __( 'Corner', 'popper' ), value: 'corner' },
	];

	return (
		<>
			<PanelBody title={ __( 'Settings', 'popper' ) }>
				<RadioControl
					label={ __( 'Button position', 'popper' ) }
					onChange={ ( val ) =>
						setAttributes( { position: val } )
					}
					selected={ position }
					options={ options }
				/>
				<RadioControl
					label={ __( 'Button type', 'popper' ) }
					onChange={ ( val ) => {
						setAttributes( { isIcon: !isIcon } )
					}
					}
					selected={ isIcon }
					options={ [
						{ label: __( 'Icon', 'popper' ), value: true },
						{ label: __( 'Text', 'popper' ), value: false },
					] }
				/>
			</PanelBody>
		</>
	);
};

export default Button;
