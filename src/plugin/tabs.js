import { Fragment, useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { TabPanel, Button } from '@wordpress/components';
import { Select } from './select';
import { UserSelect } from './user-select';

export function Tabs( props ) {

	const { onDelete, onChange, addRule, rules, onSelect, activeTab } = props;

	return (
		<TabPanel
			onSelect={ onSelect }
			tabs={ [
				{
					name: 'location',
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
			] }
		>
			{ ( tabData ) => {
				return (
					<Fragment>
						<h2>{ tabData.title }</h2>
						{ tabData.description }
						<Fragment>
							{ rules[ activeTab ].map( ( r, i ) => {
								const Component =
									'user' === tabData.name
										? UserSelect
										: Select;
								return (
									<Component
										onChange={ onChange }
										onDelete={ onDelete }
										rule={ r }
										index={ i }
										key={ i }
									/>
								);
							} ) }
						</Fragment>
						<Button
							isPrimary={ true }
							onClick={ addRule }
							className={ 'popper-modal-button' }
						>
							{ __( 'Add rule', 'popper' ) }
						</Button>
					</Fragment>
				);
			} }
		</TabPanel>
	);
}
