import {
	FormTokenField
} from '@wordpress/components';
const {
	apiFetch,
} = wp;
import { useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

export default function Rules( props ) {

	const [ objects, setObjects ] = useState([]);

	const mapper = {
		post_tag: 'tags',
		category: 'categories',
		post: 'posts',
		page: 'pages'
	}

	useEffect(
		() => {
			apiFetch( {
				path: '/wp/v2/' + mapper[props.type],
				method: 'GET'
			} ).then( ( result ) => {
				setObjects( result )
			} );	
		},
		[props.type]
	);

	let selectedObjects = props.rule.object;

	let postNames = objects.map( ( post ) => { 
		if( 'post' === post.type ){
			return post.title.rendered;
		}
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
		if( 'post' === props.type ){
			return wantedPost.title.rendered;
		}
		return wantedPost.name;

	} );

	return (
		<FormTokenField 
			label={ __( 'Selected ' + mapper[props.type], 'popper' ) }
			value={ objectsFieldValue }
			suggestions={ postNames } 
			onChange={ ( selectedObjects ) => { 
				// Build array of selected objects.
				let selectedObjectsArray = [];
				selectedObjects.map(
					( postName ) => {
						const matchingPost = objects.find( ( post ) => {
							if( 'post' === props.type ){
								return post.title.rendered === postName
							}
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