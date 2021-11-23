/**
 * External dependencies
 */
import classnames from 'classnames';
import './editor.scss';

/**
 * WordPress dependencies
 */
import {
	Fragment,
	RawHTML,
	useState,
	useEffect
} from '@wordpress/element';

import {
	__,
	sprintf,
} from '@wordpress/i18n';

import {
	BaseControl,
	SelectControl,
	Button,
	Flex,
	FlexItem
} from '@wordpress/components';

export function UserSelect ( props ) {

	const [ users, setUsersConditions ] = useState( [] )
	const { index, onDelete } = props;
	
	useEffect(
	  	() => {
			setUsersConditions( popper.users )
	  	},
	  []
	)

	return (
		<Flex align='start' justify='start' className='popper-modal-rule'>
			<FlexItem>
				<label className='components-form-token-field__label'>{ __( 'Where', 'popper' ) }</label>
				<select onChange={ (val) => { props.onChange( 'rule', val.target.value, props.index ) } } value={ props.rule.rule } className='components-select-control__input'>
		            <option value="">
		                { __( 'Select one...', 'popper' ) }
		            </option>
					{
						Object.keys( users ).map( (key, i) => {
							return (
								<optgroup label={ users[key].label } key={ i }>
								{
									Object.keys( users[key].rules ).map( (opt,i) => {
										return <option value={ opt } key={ opt }>{ users[key].rules[opt] }</option>
									})
								}
								</optgroup>					
							)
						} )
					}
				</select>
			</FlexItem>
			<FlexItem align='center'>
				<Button className='popper-modal-button' icon='no' onClick={ (val) => { props.onDelete( props.index ) } } ></Button>
			</FlexItem>
		</Flex>
	);
}
