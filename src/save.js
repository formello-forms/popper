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

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
    const { attributes } = props;
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

	return (
        <div 
            data-open={ openBehaviour }
            data-anchor={ openBehaviour === 'anchor' ? anchor : '' }
            data-target={ openBehaviour === 'target' ? target : '' }
            data-anchorclose={ closeOnAnchorClick ? closeAnchor : '' }
            data-time={ openBehaviour === 'load' ? waitTime : '' }
            data-dismiss={ dismissForVisitors ? dismissPeriod : '' }
            data-offset={ openBehaviour === 'scroll' ? offset : '' }
            data-outside={ closeOnClickOutside }
            data-created={ uuid }
            className="popper" 
            id={ 'modal-' + uuid }
            aria-hidden="true">
            <div 
                className="popper__overlay" 
                tabindex="-1" 
                style={ { backgroundColor: 'rgba(0,0,0,' + overlayOpacity/100 + ')' } }
            >
                <div className="popper__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title" style={ modalStyle }>
                    <button className="popper__close" aria-label="Close modal" style={ closeButtonStyle }></button>
                    <main className="popper__content">
                        <InnerBlocks.Content />
                    </main>
                </div>
            </div>
        </div>
	);
}
