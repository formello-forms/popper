/**
 * External dependencies
 */
import classnames from 'classnames';

import { applyFilters } from '@wordpress/hooks';
import metadata from '../block.json';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
	// v1 of button block.
	{
		attributes: {
			width: {
				type: 'number',
				default: '',
			},
			waitTime: {
				type: 'number',
				default: 1,
			},
			offset: {
				type: 'number',
				default: 20,
			},
			openBehaviour: {
				type: 'string',
				default: 'load',
			},
			showCloseButton: {
				type: 'boolean',
				default: true,
			},
			closeButtonAlignment: {
				type: 'string',
				default: 'right',
			},
			closeButtonColor: {
				type: 'string',
				default: '#000000',
			},
			overlayColor: {
				type: 'string',
				default: '#000000',
			},
			overlayOpacity: {
				type: 'number',
				default: 75,
			},
			closeButtonSize: {
				type: 'number',
				default: 20,
			},
			borderRadius: {
				type: 'number',
				default: 3,
			},
			boxShadow: {
				type: 'string',
				default: 'shadow-md',
			},
			closeOnClickOutside: {
				type: 'boolean',
				default: true,
			},
			closeOnAnchorClick: {
				type: 'boolean',
				default: false,
			},
			closeAnchor: {
				type: 'string',
			},
			anchor: {
				type: 'string',
				default: '',
			},
			target: {
				type: 'string',
				default: '',
			},
			backgroundColor: {
				type: 'string',
			},
			gradientBackground: {
				type: 'string',
			},
			dismissForVisitors: {
				type: 'boolean',
				default: true,
			},
			dismissPeriod: {
				type: 'number',
				default: 20,
			},
			uuid: {
				type: 'number',
				default: null,
			},
		},
		save({ attributes }) {
			const {
				width,
				anchor,
				target,
				waitTime,
				offset,
				openBehaviour,
				backgroundColor,
				gradientBackground,
				closeButtonColor,
				closeButtonSize,
				borderRadius,
				overlayColor,
				overlayOpacity,
				closeAnchor,
				closeOnClickOutside,
				closeOnAnchorClick,
				dismissForVisitors,
				dismissPeriod,
				uuid,
			} = attributes;

			const modalStyle = {
				minWidth: width,
				borderRadius,
			};

			if (backgroundColor) {
				modalStyle.backgroundColor = backgroundColor;
			}
			if (gradientBackground) {
				modalStyle.background = gradientBackground;
			}

			const closeButtonStyle = {
				color: closeButtonColor,
				fontSize: closeButtonSize,
			};

			const containerClass = classnames('popper__container');

			return (
				<div
					data-open={openBehaviour}
					data-anchor={openBehaviour === 'anchor' ? anchor : ''}
					data-target={openBehaviour === 'target' ? target : ''}
					data-anchorclose={closeOnAnchorClick ? closeAnchor : ''}
					data-time={openBehaviour === 'load' ? waitTime : ''}
					data-dismiss={dismissForVisitors ? dismissPeriod : ''}
					data-offset={openBehaviour === 'scroll' ? offset : ''}
					data-outside={closeOnClickOutside}
					data-created={uuid}
					id={'modal-' + uuid}
					aria-hidden="true"
					className="popper"
				>
					<div
						className="popper__overlay"
						tabIndex="-1"
						style={{
							backgroundColor:
								'rgba(0,0,0,' + overlayOpacity / 100 + ')',
						}}
					>
						<div
							className="popper__container"
							role="dialog"
							aria-modal="true"
							aria-labelledby="modal-1-title"
							style={modalStyle}
						>
							<button
								className="popper__close"
								aria-label="Close modal"
								style={closeButtonStyle}
							></button>
							<main className="popper__content">
								<InnerBlocks.Content />
							</main>
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
