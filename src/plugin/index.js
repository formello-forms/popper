import { useSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { getBlockTypes } from '@wordpress/blocks';
import { BaseControl, PanelRow, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { RulesModal } from './modal';
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import apiFetch from '@wordpress/api-fetch';

const Component = ( props ) => {
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);
	const [ isModalOpen, setModalOpen ] = useState( false );
	const [ loading, setLoading ] = useState( false );
    const [ formello_options ] = useEntityProp( 'root', 'site', 'formello' );

	const allowed = ['formello_form', 'popper'];

	if ( ! allowed.includes( postType ) ) {
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
					disabled={ 'formello_form' === postType && ! formello_options?.enabled_addons.includes( 'inserter' ) }
				>
					{ __( 'Conditions', 'popper' ) }
				</Button>
			</BaseControl>

			{
				'formello_form' === postType && ! formello_options?.enabled_addons.includes( 'inserter' ) &&
				<PanelRow>
					<p>
						{ __(
							'You must enable Formello Inserter to set display conditions.', 'popper'
						) }
					</p>
				</PanelRow>
			}

			{ ! formelloInstalled.length && (
				<>
					<PanelRow>
						<p>
							{ __(
								'To take full advantage of Popper and start collecting leads, we suggest using our Formello plugin.', 'popper'
							) }
						</p>
					</PanelRow>
					<Button isPrimary href={ window.popper.installLink }>
						{ __( 'Install Formello form', 'popper' ) }
					</Button>
				</>
			) }

			{ isModalOpen && (
				<RulesModal onRequestClose={ closeModal } { ...props } />
			) }
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'popper-display', {
	render: Component,
} );
