import { Fragment, useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { TabPanel, Button } from '@wordpress/components';
import { MySelect } from './select';
import { UserSelect } from './user-select';
import { Devices } from './devices';

export function Tabs( props ) {

	const { onDelete, onChange, onChangeDevice, addRule, rules, onSelect, activeTab } = props;

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
					name: 'device',
					component: Devices,
					title: <span>{ __( 'Devices', 'popper' ) }</span>,
					description: (
						<p>
							{ __(
								'Choose which device will see this popup.',
								'popper'
							) }
						</p>
					),
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
							'device' !== activeTab &&
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