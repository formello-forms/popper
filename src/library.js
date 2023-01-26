/**
 * WordPress dependencies
 */
import { useDispatch } from '@wordpress/data';
import {
	store as blockEditorStore,
	//__experimentalBlockPatternSetup as BlockPatternSetup,
} from '@wordpress/block-editor';
import { Modal, Button, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cloneBlock } from '@wordpress/blocks';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import BlockPatternSetup from './blockpattern';

export function TemplatesModal( {
	clientId,
	blockName,
	setIsPatternSelectionModalOpen,
	onRequestClose
} ) {
	const { replaceBlock, updateBlockAttributes, replaceInnerBlocks } = useDispatch( blockEditorStore );
	const onBlockPatternSelect = ( blocks ) => {

		updateBlockAttributes( clientId, blocks[0].attributes )
		replaceInnerBlocks( clientId, blocks[0].innerBlocks );
		onRequestClose( false );

	};

	const [ loading, setLoading ] = useState( false );

	const updateTransient = () => {
		setLoading(true)
		apiFetch( {
			path: '/popper/v1/sync_template_library/',
			method: 'POST',
			data: {},
		} ).then( () => {
			setLoading(false)
			window.location.reload()
		})
	};

	return (
		<Modal
			className="block-editor-query-pattern__selection-modal"
			isFullScreen
			title={ __( 'Choose a pattern' ) }
			closeLabel={ __( 'Cancel' ) }
			onRequestClose={ onRequestClose }
		>
			<div className="popper-pattern-button">
				<Button
					isPrimary
					onClick={ updateTransient }
					isBusy={ loading }
					disabled={ loading }
				>
					{ __( 'Sync template', 'popper' ) }
				</Button>
			</div>

			<BlockPatternSetup
				blockName={ blockName }
				clientId={ clientId }
				onBlockPatternSelect={ onBlockPatternSelect }
				showTitles={ true }
				initialViewMode={ 'grid' }
			/>
		</Modal>
	);
}
