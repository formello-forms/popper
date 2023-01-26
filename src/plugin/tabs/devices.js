import { useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { Flex, FlexItem, CheckboxControl } from '@wordpress/components';

export function Devices( props ) {

	const { onDelete, onChangeDevice, rules, activeTab } = props;

	const devicesArr = rules[ activeTab ];

	const onChange = (val, device) => {
		let filteredArray = devicesArr;
		if(val){
		    filteredArray = [...devicesArr, device]
		} else {
		    filteredArray = devicesArr.filter(item => item !== device)
		}
		onChangeDevice( filteredArray );

	};

	return (
		<Flex align="start" justify="start">
			<FlexItem>
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
			</FlexItem>
		</Flex>
	);

}