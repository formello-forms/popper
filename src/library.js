/**
 * WordPress dependencies
 */
import { useDispatch } from '@wordpress/data';
import {
	store as blockEditorStore,
	//__experimentalBlockPatternSetup as BlockPatternSetup,
} from '@wordpress/block-editor';
import { Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cloneBlock } from '@wordpress/blocks';

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

	return (
		<Modal
			className="block-editor-query-pattern__selection-modal"
			isFullScreen
			title={ __( 'Choose a pattern' ) }
			closeLabel={ __( 'Cancel' ) }
			onRequestClose={ onRequestClose }
		>
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
