/**
 * External dependencies
 */
import classnames from 'classnames';

import {
	applyFilters,
} from '@wordpress/hooks';
import metadata from '../block.json';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
	// v1 of button block.
	{
		attributes: metadata.attributes,
		save( { attributes } ) {

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

		    const containerClass = classnames( 'popper__container' );

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
		            id={ 'modal-' + uuid }
		            aria-hidden="true"
					className="popper"
		            >
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
		},
	},
];

export default deprecated;