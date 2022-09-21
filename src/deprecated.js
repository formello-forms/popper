import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
import metadata from '../block.json';
const { omit } = lodash;
const { supports } = metadata;
const blockAttributes = {
	lock: {
	  type: 'object',
	  default: {
		move: true,
		remove: true
	  }
	},
    align: {
	  type: 'string',
      default: 'center center'
    },
    fullPage: {
      type: 'boolean',
      default: false
    },
    width: {
      type: 'number',
      default: 500
    },
    waitTime: {
      type: 'number',
      default: 1
    },
    offset: {
      type: 'number',
      default: 20
    },
    openBehaviour: {
      type: 'string',
      default: 'load'
    },
    showCloseButton: {
      type: 'boolean',
      default: true
    },
    closeButtonAlignment: {
      type: 'string',
      default: 'inside'
    },
    closeButtonSize: {
      type: 'number',
      default: 20
    },
    animation: {
      type: 'string'
    },
    borderRadius: {
      type: 'number',
      default: 4
    },
    boxShadow: {
      type: 'string',
      default: 'wp-block-popper__shadow-md'
    },
    closeOnClickOutside: {
      type: 'boolean',
      default: true
    },
    closeOnAnchorClick: {
      type: 'boolean',
      default: false
    },
    closeOnFormSubmission: {
      type: 'boolean',
      default: false
    },
    closeAnchor: {
      type: 'string'
    },
    anchor: {
      type: 'string',
      default: ''
    },
    target: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string'
    },
    closeButtonColor: {
      type: 'string'
    },
    overlayColor: {
      type: 'string'
    },
    gradientBackground: {
      type: 'string'
    },
    dismissForVisitors: {
      type: 'boolean',
      default: true
    },
    dismissPeriod: {
      type: 'number',
      default: 1
    },
    pageviews: {
      type: 'number',
      default: 3
    },
    uuid: {
      type: 'number',
      default: null
    }
};

const v1 =
	{
		attributes: blockAttributes,
		supports,
		save( { attributes, className } ) {
			const {
				width,
				anchor,
				target,
				waitTime,
				offset,
				openBehaviour,
				backgroundColor,
				closeButtonColor,
				closeButtonSize,
				closeButtonAlignment,
				borderRadius,
				boxShadow,
				overlayColor,
				closeAnchor,
				closeOnClickOutside,
				closeOnAnchorClick,
				closeOnFormSubmission,
				dismissForVisitors,
				dismissPeriod,
				showCloseButton,
				pageviews,
				animation,
				align,
				fullPage,
				uuid,
			} = attributes;

			const modalStyle = {
				width,
				borderRadius,
				backgroundColor,
			};

			const contentStyle = {
				borderRadius,
				backgroundColor,
			};

			const closeButtonStyle = {
				color: closeButtonColor,
				fontSize: closeButtonSize,
				width: closeButtonSize,
				height: closeButtonSize,
			};

			if ( 'outside' === closeButtonAlignment ) {
				closeButtonStyle.top = ( closeButtonSize + 4 ) * -1;
				closeButtonStyle.right = 0;
			}

			const popperClass = classnames( 'wp-block-popper', className, {
				'wp-block-popper--right': align.includes( 'right' ),
				'wp-block-popper--left': align.includes( 'left' ),
				'wp-block-popper--top': align.includes( 'top' ),
				'wp-block-popper--bottom': align.includes( 'bottom' ),
			} );
			const containerClass = classnames( 'wp-block-popper__container', boxShadow, {
				'wp-block-popper__animate': !! animation,
				wide: fullPage,
			} );

			if ( animation ) {
				modalStyle[ '--popper-animation' ] = animation;
			}

			const closeButton = (
				<button
					className="wp-block-popper__close"
					aria-label="Close modal"
					style={ closeButtonStyle }
				></button>
			);
	
			return (
				<div
					data-open={ openBehaviour }
					data-anchor={ openBehaviour === 'anchor' ? anchor : '' }
					data-target={ openBehaviour === 'target' ? target : '' }
					data-anchorclose={ closeOnAnchorClick ? closeAnchor : '' }
					data-time={ openBehaviour === 'load' ? waitTime : '' }
					data-dismiss={ dismissForVisitors ? dismissPeriod : '' }
					data-offset={ openBehaviour === 'scroll' ? offset : '' }
					data-pagenum={ openBehaviour === 'pageviews' ? pageviews : '' }
					data-outside={ closeOnClickOutside }
					data-form={ closeOnFormSubmission }
					data-created={ uuid }
					id={ 'modal-' + uuid }
					aria-hidden="true"
					className={ popperClass }
				>
					{ showCloseButton && 'edge' === closeButtonAlignment && closeButton }

					{ 'center center' === align && ! fullPage && (
						<div
							className="wp-block-popper__overlay"
							tabIndex="-1"
							style={ { backgroundColor: overlayColor } }
						></div>
					) }
					<div
						className={ containerClass }
						style={ modalStyle }
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-title"
					>
						{ showCloseButton &&
							'edge' !== closeButtonAlignment &&
							closeButton }
						<main className="wp-block-popper__content">
							<InnerBlocks.Content />
						</main>
					</div>
				</div>
			);
		},
	};

const deprecated = [ v1 ];

export default deprecated;
