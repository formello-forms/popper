/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	Fragment,
	RawHTML,
	useState,
	useEffect
} from '@wordpress/element';

import {
	__,
	sprintf,
} from '@wordpress/i18n';

import {
	compose,
} from '@wordpress/compose';

import {
	useSelect,
} from '@wordpress/data';

import { useEntityProp } from '@wordpress/core-data';

import {
	TabPanel,
	Button,
	Modal,
} from '@wordpress/components';
import { Select } from './select';

export function RulesModal ( props ) {

	const {
		onRequestClose,
	} = props;

	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp(
		'postType',
		postType,
		'meta'
	);

	const rulesMeta = meta['popper_rules'];

	const [ rules, setRules ] = useState( rulesMeta )

	const [ activeTab, setActiveTab ] = useState( 'location' )
	
	const addRule = () => {
		var joined = rules[activeTab].concat( { rule: '', object: [] } );
		setRules( { ...rules, [activeTab]: joined } )
	}

	const onChange = ( prop, val, index ) => {
		// 1. Make a shallow copy of the items
		let items = [ ...rules[activeTab] ];
		// 2. Make a shallow copy of the item you want to mutate
		let item = {...rules[activeTab][index]};
		// 3. Replace the property you're intested in
		item[prop] = val;
		// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
		items[index] = item;
		// 5. Set the state to our new copy
		setRules( { ...rules, [activeTab]: items } )
		setMeta( { ...meta, 'popper_rules': rules } );
	}

	const updateMetaValue = ( newValue ) => {
		setMeta( { ...meta, 'popper_rules': rules } );
		onRequestClose()
	}

	const onSelect = ( tabName ) => {
		setActiveTab(tabName)
	}

	const onDelete = ( index ) => {
		let items = [ ...rules[activeTab] ];
		items.splice(index, 1);
		setRules( { ...rules, [activeTab]: items } )
		setMeta( { ...meta, 'popper_rules': rules } );
	}

	return (
		<Modal
			title={ __( 'Rules', 'popper' ) }
			onRequestClose={ updateMetaValue }
		>
			<TabPanel
				onSelect={ onSelect }
				tabs={ [
					{
						name: 'location',
						title: (
							<span>
								{ __( 'Location', 'popper' ) }
							</span>
						),
					},
					{
						name: 'exclude',
						title: (
							<span>
								{ __( 'Exclude', 'popper' ) }
							</span>
						),
					},
				] }
			>
				{
					( tabData ) => {
						return (
							<Fragment>
								<h2>{ tabData.title }</h2>
								<Fragment>
									{
										rules[activeTab].map( ( r, i ) => {
											return <Select onChange={ onChange } onDelete={ onDelete } rule={ r } index={ i } key={ i } />
										} )
									}
								</Fragment>
								<Button isPrimary={ true } onClick={ addRule }>
									{ __( 'Add rule', 'formello-position' ) }
								</Button>
							</Fragment>
						);
					}
				}
			</TabPanel>
		</Modal>
	);
}
