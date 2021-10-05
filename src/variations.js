/**
 * WordPress dependencies
 */
import { Path, SVG, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
	{
		name: 'simple',
		title: __( 'Basic' ),
		description: __( 'Basic popup' ),
		icon: (
			<SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<Path d='M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z' />
			</SVG>
		),
		innerBlocks: [ 
			[ 'core/heading', {'style':{'color':{'text':'#000000'}},'fontSize':'large', 'placeholder':'My Popup'} ],
		],
		scope: [ 'block' ]
	},
	{
		name: 'With image',
		title: __( 'Left Image' ),
		description: __( 'Image on the left' ),
		icon: (
			<SVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<Path d='M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z' />
			</SVG>
		),
		innerBlocks: [ 
			[ 'core/media-text' ],
		],
		scope: [ 'block' ]
	},
	{
		name: 'button',
		title: __( 'With button' ),
		description: __( 'Popup with button and image' ),
		icon: (
			<SVG viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<Path d='M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z' />
			</SVG>
		),
		innerBlocks: [ 
			[ 'core/media-text', { 'mediaPosition':'right' }, [
				['core/paragraph', { 'placeholder':'Before you go', 'fontSize':'large' } ],
				['core/buttons', {}, [
					[ 'core/button' ]
				] ]
			] ],
		],
		scope: [ 'block' ]
	}
];

export default variations;