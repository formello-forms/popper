import './plugin/';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import metadata from '../block.json';
import variations from './variations';
import './filter';
import './store';

const { name, attributes, supports } = metadata;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( name, {

	attributes,

	variations,

	supports,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,

	deprecated,
} );
