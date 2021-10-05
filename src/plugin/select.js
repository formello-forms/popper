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

import Rules from "./conditions";

export function Select ( props ) {

	const [ options, setOptions ] = useState( [] )
	const supported = ['post_tag', 'category', 'post', 'page']
	const { index, onDelete } = props;
	
	useEffect(
	  	() => {
			setOptions( popper.positions )
	  	},
	  []
	)

	const getType = () => {
		let splitted = props.rule.rule.split(/[:]+/).pop()
		return splitted
	}

	return (
		<Flex justify='start' className='popper-modal'>
			<FlexItem>
				<BaseControl label={ __( 'Where', 'popper' ) } help={ 'Choose where this pop up will be displayed' }>
					<select onChange={ (val) => { props.onChange( 'rule', val.target.value, props.index ) } } value={ props.rule.rule } className='components-select-control__input'>
			            <option value="">
			                { __( 'Select one...', 'formello' ) }
			            </option>
						{
							Object.keys(options).map( (key, i) => {
								return (
									<optgroup label={ options[key].label } key={ i }>
									{
										Object.keys( options[key].locations ).map( (opt,i) => {
											return <option value={ opt } key={ opt }>{ options[key].locations[opt] }</option>
										})
									}
									</optgroup>					
								)
							} )
						}
					</select>
				</BaseControl>
			</FlexItem>
			{
				supported.includes( getType() ) &&
				<FlexItem>
					<Rules 
						onChange={ props.onChange }
						selectedCategories={ [] }
						type={ getType() }
						rule={ props.rule }
						index={ props.index }
					/>
				</FlexItem>
			}
			<FlexItem>
				<Button icon='no' onClick={ (val) => { props.onDelete( props.index ) } } ></Button>
			</FlexItem>
		</Flex>
	);
}
