import classnames from 'classnames';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	__experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
} from '@wordpress/block-editor';

export default function save( { attributes, className } ) {
	const {
		width,
		anchor,
		target,
		waitTime,
		offset,
		openBehaviour,
		backgroundColor,
		borderRadius,
		boxShadow,
		overlayColor,
		closeAnchor,
		closeOnClickOutside,
		closeOnAnchorClick,
		closeOnFormSubmission,
		dismissForVisitors,
		dismissPeriod,
		pageviews,
		animation,
		align,
		fullPage,
		id,
		uuid,
		devices,
	} = attributes;

	const borderProps = getBorderClassesAndStyles( attributes );
	const spacingProps = getSpacingClassesAndStyles( attributes );
	const colorProps = getColorClassesAndStyles( attributes );

	const modalStyle = {
		backgroundColor,
		...borderProps.style,
	};

	const contentStyle = {
		width,
		...spacingProps.style,
		...colorProps.style,
	};

	const popperClass = classnames( 'wp-block-popper', className, {
		'wp-block-popper--right': align.includes( 'right' ),
		'wp-block-popper--left': align.includes( 'left' ),
		'wp-block-popper--top': align.includes( 'top' ),
		'wp-block-popper--bottom': align.includes( 'bottom' ),
	} );

	const containerClass = classnames(
		'wp-block-popper__container',
		boxShadow,
		borderRadius,
		colorProps.className,
		{
			'wp-block-popper__animate': !! animation,
			wide: fullPage,
		}
	);

	if ( animation ) {
		modalStyle[ '--popper-animation' ] = animation;
	}

	return (
		<div
			data-open={ openBehaviour }
			data-anchor={ openBehaviour === 'anchor' ? anchor : undefined }
			data-target={ openBehaviour === 'target' ? target : undefined }
			data-anchorclose={ closeOnAnchorClick ? closeAnchor : undefined }
			data-time={ openBehaviour === 'load' ? waitTime : undefined }
			data-dismiss={ dismissForVisitors ? dismissPeriod : undefined }
			data-offset={ openBehaviour === 'scroll' ? offset : undefined }
			data-pagenum={ openBehaviour === 'pageviews' ? pageviews : undefined }
			data-outside={ closeOnClickOutside }
			data-form={ closeOnFormSubmission }
			data-id={ uuid || undefined }
			data-devices={ devices }
			id={ id }
			aria-hidden="true"
			className={ popperClass }
		>
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
				<main className="wp-block-popper__content" style={ contentStyle }>
					<InnerBlocks.Content />
				</main>
			</div>
		</div>
	);
}
