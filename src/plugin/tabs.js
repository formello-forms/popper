import { Fragment, useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { TabPanel, Button } from '@wordpress/components';
import { MySelect } from './select';
import { UserSelect } from './user-select';
import { Devices } from './devices';
import { Dates } from './dates';

export function Tabs( props ) {

	const { onDelete, onChange, onChangeDevice, addRule, rules, onSelect, activeTab } = props;

	if( !rules['device'] ){
		rules['device'] = [
			{
				device: 'desktop',
				visibility: false
			},
			{
				device: 'tablet',
				visibility: false
			},
			{
				device: 'mobile',
				visibility: false
			},
		]
	}

	if( !rules['date'] ){
		rules['date'] = [
			{
				date: 'evergreen',
				startDate: false,
				endDate: false
			},
		]
	}

	return (
		<TabPanel
			onSelect={ onSelect }
			tabs={ [
				{
					name: 'location',
					component: MySelect,
					title: <span>{ __( 'Location', 'popper' ) }</span>,
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
					component: MySelect,
					title: <span>{ __( 'Exclude', 'popper' ) }</span>,
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
					component: UserSelect,
					title: <span>{ __( 'Users', 'popper' ) }</span>,
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
					name: 'date',
					component: Dates,
					title: <span>{ __( 'Date', 'popper' ) }</span>,
					description: '',
				},
			] }
		>
			{ ( tabData ) => {
				return (
					<Fragment>
						<h2>{ tabData.title }</h2>
						{ tabData.description }
						<Fragment>
							{ rules[ activeTab ].map( ( r, i ) => {
								const Component = tabData.component
								return (
									<Component
										onChange={ onChange }
										onChangeDevice={ onChangeDevice }
										onDelete={ onDelete }
										rule={ r }
										index={ i }
										key={ i }
									/>
								);
							} ) }
						</Fragment>
						{
							'date' !== activeTab &&
							<Button
								isPrimary={ true }
								onClick={ addRule }
								className={ 'popper-modal-button' }
							>
								{ __( 'Add rule', 'popper' ) }
							</Button>
						}
					</Fragment>
				);
			} }
		</TabPanel>
	);
}
