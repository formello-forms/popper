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

		const [ meta, setMeta ] = useEntityProp(
			'postType',
			postType,
			'meta'
		);

		const [ isModalOpen, setModalOpen ] = useState( false );
	    const closeModal = () => setModalOpen( false );

		return (
			<PluginDocumentSettingPanel
				title={ __( 'Display', 'popper' ) }
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
							<li key={ i }>{ r.rule.replace(/:/g, ' > ') }</li>
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
