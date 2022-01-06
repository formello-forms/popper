import {
	FormTokenField
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import { useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

export default function Rules( props ) {

	const [ objects, setObjects ] = useState([]);
	const [ objectLabel, setObjectLabel ] = useState([]);

	useEffect(
		() => {
			apiFetch( {
				path: '/popper/' + props.type + '/' + props.id,
				method: 'GET'
			} ).then( ( result ) => {
				setObjects( result[props.id].objects )
				setObjectLabel( result[props.id].label )
			} );	
		},
		[props.type]
	);

	const onChange = ( prop, val, index ) => {
		// 1. Make a shallow copy of the items
		let items = [ ...rules[activeTab] ];
		// 2. Make a shallow copy of the item you want to mutate
		let item = {...rules[activeTab][index]};
		// 3. Replace the property you're intested in
		item[prop] = val;
		// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
		items[index] = item;
		// 5. Set the state to our new copy
		setRules( { ...rules, [activeTab]: items } )
		setMeta( { ...meta, 'popper_rules': rules } );
	}

	let selectedObjects = props.rule.object;

	let postNames = objects.map( ( post ) => { 
		return post.name
	} );

	let objectsFieldValue = [];
	objectsFieldValue = selectedObjects.map( ( postId ) => {

		let wantedPost = objects.find( ( post ) => {
			return post.id === postId;
		} );
		if ( wantedPost === undefined || ! wantedPost ) {
			return false;
		}
		return wantedPost.name;

	} );

	return (
		<FormTokenField 
			label={ __( 'Selected ' + objectLabel, 'popper' ) }
			value={ objectsFieldValue }
			suggestions={ postNames } 
			onChange={ ( selectedObjects ) => { 
				// Build array of selected objects.
				let selectedObjectsArray = [];
				selectedObjects.map(
					( postName ) => {
						const matchingPost = objects.find( ( post ) => {
							return post.name === postName;
						} );
						if ( matchingPost !== undefined ) {
							selectedObjectsArray.push( matchingPost.id );
						}
					}
				)
				props.onChange( 'object', selectedObjectsArray, props.index )
			} }
			maxSuggestions={ 5 }
		/>
	);

};