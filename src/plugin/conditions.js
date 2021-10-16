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