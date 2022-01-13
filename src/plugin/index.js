import includes from 'lodash/includes';

import { useSelect, select, dispatch } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useEntityProp } from '@wordpress/core-data';
import {
	ToggleControl,
	RadioControl,
	BaseControl,
	TextControl,
	Modal,
	PanelRow,
	Button,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { RulesModal } from './modal';
import { __ } from '@wordpress/i18n';

registerPlugin('popper-display', {
	render() {
		const postType = useSelect(
			(select) => select('core/editor').getCurrentPostType(),
			[]
		);

		if ('popper' !== postType) {
			return false;
		}

		const [meta, setMeta] = useEntityProp('postType', postType, 'meta');

		const [isModalOpen, setModalOpen] = useState(false);
		const closeModal = () => setModalOpen(false);

		return (
			<PluginDocumentSettingPanel
				title={__('Display Rules', 'popper')}
				icon={() => ''}
				opened={true}
				name="popper-display"
			>
				<BaseControl>
					<Button
						isPrimary
						onClick={() => {
							setModalOpen(true);
						}}
					>
						{__('Conditions', 'popper')}
					</Button>
				</BaseControl>
				<PanelRow>
					<p>
						{__(
							'To take full advantage of Popper and start collecting leads, we suggest using our Formello plugin.'
						)}
					</p>
				</PanelRow>
				<Button isPrimary href={popper.installLink}>
					{__('Install form', 'popper')}
				</Button>

				{isModalOpen && <RulesModal onRequestClose={closeModal} />}
			</PluginDocumentSettingPanel>
		);
	},
});
