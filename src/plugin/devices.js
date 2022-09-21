import { useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { Button, Flex, FlexItem, CheckboxControl } from '@wordpress/components';

export function Devices( props ) {
	const [ devices, setDevices ] = useState( [] );
	const { index, onChange, onChangeDevice, rule } = props;

	useEffect( () => {
		setDevices( window.popper.devices );
	}, [] );

	return (
		<Flex align="start" justify="start">
			<FlexItem>
		        <CheckboxControl
		            label={ rule.device }
		            checked={ rule.visibility }
					onChange={ ( val ) => {
						onChange( 'visibility', val, index );
					} }
		        />
			</FlexItem>
		</Flex>
	);
}
