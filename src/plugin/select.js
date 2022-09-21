import { useState, useEffect } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { Button, Flex, FlexItem } from '@wordpress/components';

import Rules from './conditions';

export function MySelect( props ) {
	const [ options, setOptions ] = useState( [] );
	const supported = [ 'post', 'taxonomy' ];
	const { index, onDelete, rule } = props;

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
				<label className="components-form-token-field__label" htmlFor="select">
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
