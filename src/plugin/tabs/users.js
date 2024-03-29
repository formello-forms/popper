import { useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { Button, Flex, FlexItem } from '@wordpress/components';

function UserRow( props ) {
	const [ users, setUsersConditions ] = useState( [] );

	const {
		index,
		onDelete,
	} = props;

	useEffect( () => {
		setUsersConditions( window.popper.users );
	}, [] );

	return (
		<Flex align="start" justify="start" className="popper-modal-row">
			<FlexItem>
				<select
					onChange={ ( val ) => {
						props.onChange( undefined, val.target.value, index );
					} }
					value={ props.rule }
					className="components-select-control__input"
				>
					<option value="">{ __( 'Select one…', 'popper' ) }</option>
					{ Object.keys( users ).map( ( key, i ) => {
						return (
							<optgroup label={ users[ key ].label } key={ i }>
								{ Object.keys( users[ key ].rules ).map( ( opt ) => {
									return (
										<option value={ opt } key={ opt }>
											{ users[ key ].rules[ opt ] }
										</option>
									);
								} ) }
							</optgroup>
						);
					} ) }
				</select>
			</FlexItem>
			<FlexItem align="center">
				<Button
					className="popper-modal-button"
					icon="no"
					isSmall
					onClick={ () => {
						onDelete( index );
					} }
				></Button>
			</FlexItem>
		</Flex>
	);
}

export function Users( props ) {
	const {
		onDelete,
		onChange,
		rules,
		activeTab,
	} = props;

	return rules[ activeTab ].map( ( r, i ) => {
		return (
			<UserRow
				onChange={ onChange }
				onDelete={ onDelete }
				rule={ r }
				index={ i }
				key={ i }
			/>
		);
	} );
}
