/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes, className } ) {

    const {
        type,
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
        boxShadow,
        overlayColor,
        overlayOpacity,
        closeAnchor,
        closeOnClickOutside,
        closeOnAnchorClick,
        dismissForVisitors,
        dismissPeriod,
        showCloseButton,
        pageviews,
        uuid
    } = attributes;

    const modalStyle = {
        minWidth: width,
        borderRadius,
    };

    if ( backgroundColor ) {
        modalStyle.backgroundColor = backgroundColor;
    }
    if ( gradientBackground ) {
        modalStyle.background = gradientBackground;
    }

    const closeButtonStyle = {
        color: closeButtonColor,
        fontSize: closeButtonSize
    };

    const containerClass = classnames( 'popper__container', boxShadow, {
        'popper__slide': 'slideIn' === type || 'slideInRight' === type ,
        'popper__slide-right': 'slideInRight' === type,
    } );
    const popperClass = classnames( 'popper', className );

    const overlay = overlayOpacity ? overlayOpacity/100 : '.75';

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
            data-created={ uuid }
            id={ 'modal-' + uuid }
            aria-hidden="true"
            { ...useBlockProps.save({
                className: popperClass
            }) }
        >
            <div 
                className="popper__overlay" 
                tabindex="-1" 
                style={ { backgroundColor: overlayColor } }
            ></div>
            <div className={ containerClass } role="dialog" aria-modal="true" aria-labelledby="modal-title" style={ modalStyle }>
                {
                    showCloseButton && 
                    <button className="popper__close" aria-label="Close modal" style={ closeButtonStyle }></button>
                }
                <main className="popper__content">
                    <InnerBlocks.Content />
                </main>
            </div>
        </div>
	);
}
