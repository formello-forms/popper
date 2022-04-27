import { Fragment, useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';

import { useEntityProp } from '@wordpress/core-data';

import { TabPanel, Button, Modal } from '@wordpress/components';
import { Select } from './select';
import { UserSelect } from './user-select';

export function RulesModal( props ) {
	const { onRequestClose } = props;

	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const rulesMeta = meta.popper_rules;

	const [ rules, setRules ] = useState( rulesMeta );

	const [ activeTab, setActiveTab ] = useState( 'location' );

	const addRule = () => {
		let joined;
		if ( 'user' === activeTab ) {
			joined = rules[ activeTab ].concat( '' );
		} else {
			joined = rules[ activeTab ].concat( { rule: '', object: [] } );
		}
		setRules( { ...rules, [ activeTab ]: joined } );
	};

	const onChange = ( prop, val, index ) => {
		// 1. Make a shallow copy of the items
		const items = [ ...rules[ activeTab ] ];
		// 2. Make a shallow copy of the item you want to mutate
		let item = { ...rules[ activeTab ][ index ] };
		// 3. Replace the property you're intested in
		if ( ! prop ) {
			item = val;
		} else {
			item[ prop ] = val;
		}
		// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
		items[ index ] = item;
		// 5. Set the state to our new copy
		setRules( { ...rules, [ activeTab ]: items } );
		setMeta( { ...meta, popper_rules: rules } );
	};

	const updateMetaValue = () => {
		setMeta( { ...meta, popper_rules: rules } );
		onRequestClose();
	};

	const onSelect = ( tabName ) => {
		setActiveTab( tabName );
	};

	const onDelete = ( index ) => {
		const items = [ ...rules[ activeTab ] ];
		items.splice( index, 1 );
		setRules( { ...rules, [ activeTab ]: items } );
		setMeta( { ...meta, popper_rules: rules } );
	};

	return (
		<Modal
			title={ __( 'Rules', 'popper' ) }
			onRequestClose={ updateMetaValue }
			className={ 'popper-modal-rule' }
		>
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
		</Modal>
	);
}
