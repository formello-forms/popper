import './plugin/';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from '../block.json';
import variations from './variations';

const { name, attributes, supports } = metadata;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( name, {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	icon: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
		 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
		 preserveAspectRatio="xMidYMid meet">

		<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
		fill="#000000" stroke="none">
		<path d="M4400 4699 c-114 -19 -240 -97 -307 -191 l-35 -48 -1384 0 c-1476 0
		-1430 1 -1448 -45 -3 -9 -6 -502 -6 -1096 l0 -1079 80 0 80 0 0 770 0 770
		1441 0 c1435 0 1441 0 1510 -21 l69 -21 0 -1184 0 -1184 -1080 0 -1080 0 0
		-80 0 -80 1139 0 1140 0 20 26 c21 27 21 27 21 1265 l0 1238 42 12 c127 34
		252 136 306 251 143 303 -33 646 -358 698 -73 11 -74 11 -150 -1z m180 -188
		c100 -38 164 -110 195 -216 73 -249 -192 -480 -427 -373 -77 36 -123 80 -160
		156 -29 58 -33 76 -32 142 1 143 87 259 224 301 49 14 148 10 200 -10z m-584
		-293 c0 -90 19 -163 61 -235 l24 -43 -1351 0 -1350 0 0 180 0 180 1308 0 1308
		0 0 -82z"/>
		<path d="M4312 4377 l-52 -52 52 -53 53 -52 -53 -53 -52 -53 58 -57 57 -57 53
		52 52 53 53 -53 53 -52 54 55 54 55 -52 53 -52 52 52 53 53 52 -57 57 -58 58
		-53 -53 -53 -52 -49 50 c-27 27 -52 50 -55 50 -3 0 -29 -24 -58 -53z"/>
		<path d="M196 3419 l-26 -20 0 -1599 0 -1599 26 -20 27 -21 1648 0 1648 0 28
		24 28 24 3 421 3 421 -81 0 -80 0 0 -365 0 -365 -1545 0 -1545 0 0 1220 0
		1220 365 0 365 0 0 80 0 80 -365 0 -365 0 0 180 0 180 360 0 360 0 0 80 0 80
		-414 0 c-403 0 -414 -1 -440 -21z"/>
		<path d="M1418 2073 l-188 -3 0 -81 0 -81 288 7 287 7 -71 -74 c-39 -40 -277
		-284 -528 -542 l-457 -470 58 -58 58 -59 65 68 c35 37 271 281 525 542 l460
		473 6 -223 c4 -123 7 -252 8 -286 l1 -63 82 0 81 0 -6 182 c-4 99 -7 280 -7
		400 l0 219 -25 24 -24 25 -213 -2 c-117 -2 -297 -4 -400 -5z"/>
		</g>
		</svg>,

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
} );
