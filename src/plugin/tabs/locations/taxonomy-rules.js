import { useSelect } from '@wordpress/data';
import { FormTokenField, FlexItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export function TaxonomyRules( props ) {
	const { type, rule, index, onChange } = props;

	const tax = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'taxonomy', type, {
			per_page: -1,
		} );
	} );

	let taxTitles = [];
	let taxFieldValue = [];
	const selectedObjects = rule.object;

	if ( tax !== null ) {
		taxTitles = tax.map( ( t ) => t.name );

		taxFieldValue = selectedObjects
			.map( ( taxId ) => {
				const wantedTax = tax.find( ( t ) => {
					return t.id === parseInt( taxId );
				} );
				if ( wantedTax === undefined || ! wantedTax ) {
					return false;
				}
				return wantedTax.name;
			} )
			.filter( ( p ) => !! p );
	}

	return (
		<FlexItem isBlock={ true }>
			<FormTokenField
				value={ taxFieldValue }
				suggestions={ taxTitles }
				placeholder={ __( 'Type to choose an item', 'popper' ) }
				onChange={ ( selectedObjects ) => {
					// Build array of selected objects.
					const selectedObjectsArray = [];
					selectedObjects.forEach( ( taxName ) => {
						const matchingTax = tax.find( ( t ) => {
							return t.name === taxName;
						} );
						if ( matchingTax !== undefined ) {
							selectedObjectsArray.push( matchingTax.id );
						}
					} );
					onChange( 'object', selectedObjectsArray, index );
				} }
				maxSuggestions={ 5 }
				__experimentalShowHowTo={ false }
			/>
		</FlexItem>
	);
}