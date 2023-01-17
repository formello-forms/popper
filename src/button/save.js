import classnames from 'classnames';
import {
	useBlockProps,
	RichText,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	__experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
} from '@wordpress/block-editor';
import { ReactComponent as CloseButton } from './close-button.svg';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {
	const { text, position, isIcon, style } = attributes;

	const borderRadius = style?.border?.radius;
	const borderProps = getBorderClassesAndStyles( attributes );

	// Check for old deprecated numerical border radius. Done as a separate
	// check so that a borderRadius style won't overwrite the longhand
	// per-corner styles.
	if ( typeof borderRadius === 'number' ) {
		borderProps.style.borderRadius = `${ borderRadius }px`;
	}

	const colorProps = getColorClassesAndStyles( attributes );

	const buttonClasses = classnames(
		borderProps.className,
		colorProps.className,
		'wp-block-popper__close', {
		'wp-block-popper__close-outside': 'outside' === position,
		'wp-block-popper__close-corner': 'corner' === position,
	} );

	const blockProps = useBlockProps.save( {
		className: buttonClasses,
		style: colorProps.style
	} );

	if( isIcon ){
		return (
			<button { ...blockProps }>
				<CloseButton />
			</button>
		);
	} else {
		return (
			<RichText.Content { ...blockProps } tagName="button" value={ text } />
		);
	}

}
