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

	const devicesArr = devices.split(',');

	const onChange = (val, device) => {
		let filteredArray = devicesArr;
		if(val){
		    filteredArray = [...devicesArr, device]
		} else {
		    filteredArray = devicesArr.filter(item => item !== device)
		}
		setAttributes( { devices: filteredArray.join(',') } );							
		setMeta( { ...meta, popper_rules: {
			...meta.popper_rules,
			device: filteredArray.join(',')
		} } );
	};

	return (
		<>
			<PanelBody title={ __( 'Devices', 'popper' ) } initialOpen={ false }>
		        <CheckboxControl
		            label={ __( 'Desktop', 'popper' ) }
		            checked={ devicesArr.includes('desktop') }
					onChange={ (val) => onChange( val, 'desktop' ) }
		        />
		        <CheckboxControl
		            label={ __( 'Tablet', 'popper' ) }
		            checked={ devicesArr.includes('tablet') }
					onChange={ (val) => onChange( val, 'tablet' ) }
		        />
		        <CheckboxControl
		            label={ __( 'Mobile', 'popper' ) }
		            checked={ devicesArr.includes('mobile') }
					onChange={ (val) => onChange( val, 'mobile' ) }
		        />
			</PanelBody>
		</>
	);
};

export default Devices;
