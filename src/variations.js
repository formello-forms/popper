/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';
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
		title: __('Basic'),
		description: __('Basic popup'),
		icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
				/>
			</SVG>
		),
		innerBlocks: [['core/group', { backgroundColor: 'ffffff' }]],
		scope: ['block'],
	},
	{
		name: 'With image',
		title: __('Left Image'),
		description: __('Image on the left'),
		icon: (
			<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<Path d="M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z" />
			</SVG>
		),
		innerBlocks: [
			[
				'core/media-text',
				{
					mediaPosition: 'left',
					verticalAlignment: 'center',
					mediaType: 'image',
					mediaUrl:
						'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80',
				},
				[
					[
						'core/heading',
						{
							textAlign: 'center',
							placeholder: 'Your claim...',
							fontSize: 'large',
							content: '30% off coupon',
						},
					],
					[
						'core/paragraph',
						{
							align: 'center',
							placeholder: 'Your claim...',
							content:
								"If you're looking for a new way to promote your business.",
						},
					],
					[
						'core/buttons',
						{ contentJustification: 'center' },
						[
							[
								'core/button',
								{
									text: 'SHOP NOW',
									style: { color: { background: '#28a7d9' } },
								},
							],
						],
					],
				],
			],
		],
		scope: ['block'],
	},
	{
		name: 'button',
		title: __('With buttons'),
		description: __('Popup with buttons and image'),
		icon: (
			<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<Path d="M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z" />
			</SVG>
		),
		innerBlocks: [
			[
				'core/group',
				{ style: { color: { background: '#fff' } } },
				[
					[
						'core/image',
						{
							align: 'center',
							width: 234,
							height: 291,
							url: 'https://www.pngfind.com/pngs/m/525-5253539_3d-book-template-1-ebook-image-png-transparent.png',
						},
						[],
					],
					[
						'core/heading',
						{
							textAlign: 'center',
							placeholder: 'Your claim...',
							fontSize: 'large',
							content: 'My secret SEO strategy',
						},
					],
					[
						'core/paragraph',
						{
							align: 'center',
							placeholder: 'Your claim...',
							content:
								"If you're looking for a fast way to rank high on Google.",
						},
					],
					[
						'core/buttons',
						{ contentJustification: 'center' },
						[
							[
								'core/button',
								{
									text: 'No thanks',
									style: {
										color: {
											background: '#fff',
											text: '#000',
										},
									},
								},
							],
							[
								'core/button',
								{
									text: 'DOWNLOAD NOW',
									style: { color: { background: '#28a7d9' } },
								},
							],
						],
					],
				],
			],
		],
		scope: ['block'],
	},
];

export default variations;
