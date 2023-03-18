import { useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';

import { useEntityProp } from '@wordpress/core-data';

import { Button, Modal } from '@wordpress/components';
import { Tabs } from './new-tabs';

export function RulesModal( props ) {
	const { onRequestClose, setAttributes } = props;

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
		if ( 'user' === activeTab || 'device' === activeTab ) {
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
	};

	const onChangeDevice = ( items ) => {
		setRules( { ...rules, [ activeTab ]: items } );
		setAttributes( { devices: items.join( ',' ) } );
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
	};

	return (
		<Modal
			title={ __( 'Rules', 'popper' ) }
			onRequestClose={ onRequestClose }
			className={ 'popper-modal-rule' }
			shouldCloseOnClickOutside={ false }
		>
			<Tabs
				onDelete={ onDelete }
				onChange={ onChange }
				onChangeDevice={ onChangeDevice }
				addRule={ addRule }
				rules={ rules }
				onSelect={ onSelect }
				activeTab={ activeTab }
			/>
			<div className={ 'popper-modal-buttons' }>
				<Button isPrimary onClick={ updateMetaValue }>
					{ __( 'Save', 'popper' ) }
				</Button>
			</div>
		</Modal>
	);
}
