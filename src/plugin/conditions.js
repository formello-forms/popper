import { FormTokenField } from '@wordpress/components';

import { useSelect } from '@wordpress/data';

import { __ } from '@wordpress/i18n';

export default function Rules( props ) {
	const { type, rule, index, onChange } = props;

	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', type, {
			per_page: -1,
		} );
	} );

	let postNames = [];
	let postsFieldValue = [];
	const selectedObjects = rule.object;

	if ( posts !== null ) {
		postNames = posts.map( ( post ) => post.title.raw );

		postsFieldValue = selectedObjects
			.map( ( postId ) => {
				const wantedPost = posts.find( ( post ) => {
					return post.id === parseInt( postId );
				} );
				if ( wantedPost === undefined || ! wantedPost ) {
					return false;
				}
				return wantedPost.title.raw;
			} )
			.filter( ( p ) => !! p );
	}

	return (
		<FormTokenField
			value={ postsFieldValue }
			suggestions={ postNames }
			placeholder={ __( 'Type to choose an item', 'popper' ) }
			onChange={ ( selectedObjects ) => {
				// Build array of selected objects.
				const selectedObjectsArray = [];
				selectedObjects.forEach( ( postName ) => {
					const matchingPost = posts.find( ( post ) => {
						return post.title.raw === postName;
					} );
					if ( matchingPost !== undefined ) {
						selectedObjectsArray.push( matchingPost.id );
					}
				} );
				onChange( 'object', selectedObjectsArray, index );
			} }
			maxSuggestions={ 5 }
		/>
	);
}
