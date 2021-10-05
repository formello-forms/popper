import includes from "lodash/includes";

import { useSelect, select } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useEntityProp } from '@wordpress/core-data';
import {
	ToggleControl,
	RadioControl,
	BaseControl,
	TextControl,
	Modal,
	FormTokenField,
	Button
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { RulesModal } from "./modal";
import { __ } from '@wordpress/i18n';

registerPlugin('popper-display', {
 	render() {
		const postType = useSelect(
			( select ) => select( 'core/editor' ).getCurrentPostType(),
			[]
		);

		if( 'popper' !== postType ){
			return false
		}

		const postTitle = useSelect(
			( select ) => select( 'core/editor' ).getPostEdits().title,
			[]
		);

		const [ meta, setMeta ] = useEntityProp(
			'postType',
			postType,
			'meta'
		);

		const metaFieldValue = meta['popper_rules'];
		const [ rule, setRule ] = useState( metaFieldValue );
		const [ isModalOpen, setModalOpen ] = useState( false );
	    const closeModal = () => setModalOpen( false );

		function updateMetaValue( newValue ) {
			setMeta( { ...meta, 'popper_rules': newValue } );
		}

		const handleChange = ( val, prop, index ) => {
			// 1. Make a shallow copy of the items
			let item = {...rule};
			// 2. Make a shallow copy of the item you want to mutate
			item[prop] = val;
			// 3. Set the state to our new copy
			setRule( item );
			updateMetaValue( item );
		}

		return (
			<PluginDocumentSettingPanel
				title={ __( 'Position', 'popper' ) }
				icon={ () => '' }
			>
				<BaseControl>
					<Button
						isPrimary
						onClick={ () => {
							setModalOpen( true );
						} }
					>
						{ __( 'Conditions', 'popper' ) }
					</Button>
				</BaseControl>
				{
					meta['popper_rules']['location'].map((r,i)=>{
						return (
							<li key={ i }>{ r.rule.split(/[:]+/).pop().replace(/_/g, ' ') }</li>
						)
					})				
				}
	            { isModalOpen && (
	                <RulesModal onRequestClose={ closeModal } />
	            ) }
			</PluginDocumentSettingPanel>
	);
  },
});
