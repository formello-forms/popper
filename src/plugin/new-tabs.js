import { Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { TabPanel, Button } from '@wordpress/components';
import { Locations } from './tabs/locations';
import { Users } from './tabs/users';
import { Devices } from './tabs/devices';
import { Dates } from './tabs/dates';

export function Tabs( props ) {
	const {
		addRule,
		rules,
		onSelect,
		activeTab,
	} = props;

	if ( ! rules.device ) {
		rules.device = [
			{
				device: 'desktop',
				visibility: false,
			},
			{
				device: 'tablet',
				visibility: false,
			},
			{
				device: 'mobile',
				visibility: false,
			},
		];
	}

	if ( ! rules.date ) {
		rules.date = [
			{
				date: 'evergreen',
				startDate: false,
				endDate: false,
			},
		];
	}

	return (
		<TabPanel
			onSelect={ onSelect }
			tabs={ [
				{
					name: 'location',
					component: Locations,
					title: __( 'Location', 'popper' ),
					description: (
						<p>
							{ __(
								'Choose where you want display this popup.',
								'popper'
							) }
						</p>
					),
				},
				{
					name: 'exclude',
					component: Locations,
					title: __( 'Exclude', 'popper' ),
					description: (
						<p>
							{ __(
								"Choose where you don't want display this popup.",
								'popper'
							) }
						</p>
					),
				},
				{
					name: 'user',
					component: Users,
					title: __( 'Users', 'popper' ),
					description: (
						<p>
							{ __(
								'Choose which user will see this popup.',
								'popper'
							) }
						</p>
					),
				},
				{
					name: 'device',
					component: Devices,
					title: __( 'Devices', 'popper' ),
					description: '',
				},
				{
					name: 'date',
					component: Dates,
					title: __( 'Date', 'popper' ),
					description: '',
				},
			] }
		>
			{ ( tabData ) => {
				const Component = tabData.component;
				return (
					<Fragment>
						<h2>{ tabData.title }</h2>
						{ tabData.description }
						<Component { ...props } />
						{ ! [ 'date', 'device' ].includes( activeTab ) && (
							<Button
								isPrimary={ true }
								onClick={ addRule }
								className={ 'popper-modal-button' }
							>
								{ __( 'Add rule', 'popper' ) }
							</Button>
						) }
					</Fragment>
				);
			} }
		</TabPanel>
	);
}
