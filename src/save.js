import classnames from 'classnames';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { ReactComponent as Icon } from './assets/Icon.svg';

export default function save( { attributes, className } ) {
	const {
		width,
		anchor,
		target,
		waitTime,
		offset,
		openBehaviour,
		backgroundColor,
		closeButtonStyle,
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
		devices
	} = attributes;

	const modalStyle = {
		width,
		backgroundColor,
	};

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

	const buttonClass = classnames( 'wp-block-popper__close', {
		'wp-block-popper__close-outside': 'outside' === closeButtonAlignment && !fullPage,
		'wp-block-popper__close-corner': 'corner' === closeButtonAlignment,
	} );

	if ( animation ) {
		modalStyle[ '--popper-animation' ] = animation;
	}

	const closeButton = (
		<button
			className={ buttonClass }
			aria-label="Close modal"
			style={ closeButtonStyle }
		><Icon /></button>
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
			data-devices={ JSON.stringify( devices ) }
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
				{ ...useBlockProps.save( {
					className: containerClass,
					style: modalStyle,
				} ) }
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
}
