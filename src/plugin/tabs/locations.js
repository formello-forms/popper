import { LocationRow } from './locations/location-row';

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
