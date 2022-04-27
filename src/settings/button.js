import { __ } from '@wordpress/i18n';
import { RangeControl, PanelBody, RadioControl } from '@wordpress/components';

const Button = ( props ) => {
	const {
		attributes: { closeButtonSize, closeButtonAlignment },
		setAttributes,
	} = props;

	const options = [
		{ label: __( 'Inside', 'popper' ), value: 'inside' },
		{ label: __( 'Outside', 'popper' ), value: 'outside' },
		{ label: __( 'Edge of screen', 'popper' ), value: 'edge' },
	];

	return (
		<>
			<PanelBody title={ __( 'Button', 'popper' ) } initialOpen={ false }>
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
