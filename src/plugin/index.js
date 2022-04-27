import { useSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { getBlockTypes } from '@wordpress/blocks';
import { BaseControl, PanelRow, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { RulesModal } from './modal';
import { __ } from '@wordpress/i18n';

const Component = () => {
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);
	const [ isModalOpen, setModalOpen ] = useState( false );

	if ( 'popper' !== postType ) {
		return false;
	}

	const closeModal = () => setModalOpen( false );

	const formelloInstalled = getBlockTypes().filter( ( block ) => {
		return block.name.indexOf( 'formello/form' ) !== -1;
	} );
	return (
		<PluginDocumentSettingPanel
			title={ __( 'Display Rules', 'popper' ) }
			icon={ () => '' }
			opened={ true }
			name="popper-display"
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
			{ ! formelloInstalled.length && (
				<>
					<PanelRow>
						<p>
							{ __(
								'To take full advantage of Popper and start collecting leads, we suggest using our Formello plugin.'
							) }
						</p>
					</PanelRow>
					<Button isPrimary href={ window.popper.installLink }>
						{ __( 'Install form', 'popper' ) }
					</Button>
				</>
			) }

			{ isModalOpen && <RulesModal onRequestClose={ closeModal } /> }
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'popper-display', {
	render: Component,
} );
