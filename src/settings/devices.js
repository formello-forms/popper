import { __ } from '@wordpress/i18n';
import { CheckboxControl, PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

const Devices = ( props ) => {
	const {
		attributes: { devices },
		setAttributes,
	} = props;

	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const onChange = (val, device) => {
		let filteredArray = devices;
		if(val){
		    filteredArray = [...devices, device]
			setAttributes( { devices: filteredArray } );
		} else {
		    filteredArray = devices.filter(item => item !== device)
		    setAttributes({devices: filteredArray});							
		}
		setMeta( { ...meta, popper_rules: {
			...meta.popper_rules,
			device: filteredArray
		} } );
	};

	return (
		<>
			<PanelBody title={ __( 'Devices', 'popper' ) } initialOpen={ false }>
		        <CheckboxControl
		            label={ __( 'Desktop', 'popper' ) }
		            checked={ devices.includes('desktop') }
					onChange={ (val) => onChange( val, 'desktop' ) }
		        />
		        <CheckboxControl
		            label={ __( 'Tablet', 'popper' ) }
		            checked={ devices.includes('tablet') }
					onChange={ (val) => onChange( val, 'tablet' ) }
		        />
		        <CheckboxControl
		            label={ __( 'Mobile', 'popper' ) }
		            checked={ devices.includes('mobile') }
					onChange={ (val) => onChange( val, 'mobile' ) }
		        />
			</PanelBody>
		</>
	);
};

export default Devices;
