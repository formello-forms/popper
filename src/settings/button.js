import { __ } from '@wordpress/i18n';
import { RangeControl, PanelBody, RadioControl, CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import {
	__experimentalUseBorderProps as useBorderProps,
} from '@wordpress/block-editor';

const Button = ( props ) => {
	const {
		attributes: { closeButtonSize, closeButtonAlignment, closeButtonStyle },
		setAttributes,
	} = props;

	const options = [
		{ label: __( 'Inside', 'popper' ), value: 'inside' },
		{ label: __( 'Outside', 'popper' ), value: 'outside' },
		{ label: __( 'Corner', 'popper' ), value: 'corner' },
		{ label: __( 'Edge of screen', 'popper' ), value: 'edge' },
	];

	const changeButton = ( property, val ) => {
		setAttributes( { closeButtonStyle: {
			...closeButtonStyle,
			[property]: val
		} } )
	}

	return (
		<>
			<PanelBody title={ __( 'Button', 'popper' ) } initialOpen={ false }>
				<CheckboxControl 
					value={ closeButtonStyle?.fontSize }
					label={ __( 'Rounded button', 'popper' ) }
					onChange={ ( val ) => {
						if(val)
							changeButton( 'borderRadius', '100%' )
						else
							changeButton( 'borderRadius', undefined )
					} }
				/>
				<RangeControl
					value={ closeButtonStyle?.fontSize }
					label={ __( 'Close Icon Size', 'popper' ) }
					onChange={ ( val ) => {
						changeButton( 'fontSize', val )
					} }
					allowReset
					min={ 12 }
					max={ 40 }
				/>
				<RadioControl
					label={ __( 'Button position', 'popper' ) }
					onChange={ ( val ) =>
						setAttributes( { closeButtonAlignment: val } )
					}
					selected={ closeButtonAlignment }
					options={ options }
				/>
			</PanelBody>
		</>
	);
};

export default Button;
