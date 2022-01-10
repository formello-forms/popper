import {
	FormTokenField
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import { __ } from '@wordpress/i18n';

export default function Rules( props ) {

	const {
		type,
		rule,
		index,
		onChange
	} = props

	console.log(type)

	const posts = useSelect( (select) => {
		return select( 'core' ).getEntityRecords( 'postType', type, { per_page: -1 } )
	} )

	let postNames = [];
	let postsFieldValue = [];
	let selectedObjects = rule.object;

	if ( posts !== null ) {
		postNames = posts.map( ( post ) => post.title.raw );

		postsFieldValue = selectedObjects.map( ( postId ) => {
			let wantedPost = posts.find( ( post ) => {
				return post.id === parseInt(postId);
			} );
			if ( wantedPost === undefined || ! wantedPost ) {
				return false;
			}
			return wantedPost.title.raw;
		} ).filter( p => !!p )
	}

	return (
		<FormTokenField 
			label={ __( 'Selected ' + type, 'popper' ) }
			value={ postsFieldValue  }
			suggestions={ postNames } 
			onChange={ ( selectedObjects ) => { 
				// Build array of selected objects.
				let selectedObjectsArray = [];
				selectedObjects.map(
					( postName ) => {
						const matchingPost = posts.find( ( post ) => {
							return post.title.raw === postName;
						} );
						if ( matchingPost !== undefined ) {
							selectedObjectsArray.push( matchingPost.id );
						}
					}
				)
				onChange( 'object', selectedObjectsArray, index )
			} }
			maxSuggestions={ 5 }
		/>
	);

};