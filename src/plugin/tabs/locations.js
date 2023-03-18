import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Flex, FlexItem, FormTokenField } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

function Rules( props ) {
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
			__experimentalShowHowTo={ false }
		/>
	);
}

function LocationRow( props ) {
	const {
		onDelete,
		rule,
		index,
	} = props;

	const [ options, setOptions ] = useState( [] );
	const supported = [ 'post', 'taxonomy' ];

	useEffect( () => {
		setOptions( window.popper.positions );
	}, [] );

	const getType = () => {
		let locationType = '';
		if ( rule.rule.indexOf( ':taxonomy:' ) > 0 ) {
			locationType = 'taxonomy';
		} else {
			locationType = rule.rule.substr( 0, rule.rule.indexOf( ':' ) );
		}

		return locationType;
	};

	return (
		<Flex align="start" justify="start" className="popper-modal-row">
			<FlexItem>
				<label
					className="components-form-token-field__label"
					htmlFor="select"
				>
					{ __( 'Where', 'popper' ) }
				</label>
				<select
					onChange={ ( val ) => {
						props.onChange( 'rule', val.target.value, index );
					} }
					value={ rule.rule }
					className="components-select-control__input"
				>
					<option value="">{ __( 'Select one…', 'popper' ) }</option>
					{ Object.keys( options ).map( ( key, i ) => {
						return (
							<optgroup label={ options[ key ].label } key={ i }>
								{ Object.keys( options[ key ].locations ).map(
									( opt ) => {
										return (
											<option value={ opt } key={ opt }>
												{ options[ key ].locations[ opt ] }
											</option>
										);
									}
								) }
							</optgroup>
						);
					} ) }
				</select>
			</FlexItem>
			{ supported.includes( getType() ) && (
				<FlexItem isBlock={ true }>
					<Rules
						onChange={ props.onChange }
						selectedCategories={ [] }
						type={ rule.rule.substr( rule.rule.lastIndexOf( ':' ) + 1 ) }
						rule={ rule }
						index={ index }
					/>
				</FlexItem>
			) }
			<FlexItem>
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

export function Locations( props ) {
	const { onDelete, onChange, rules, activeTab } = props;

	return rules[ activeTab ].map( ( r, i ) => {
		return (
			<LocationRow
				onChange={ onChange }
				onDelete={ onDelete }
				rule={ r }
				index={ i }
				key={ i }
			/>
		);
	} );
}
