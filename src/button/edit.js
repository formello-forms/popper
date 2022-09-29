import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	AlignmentToolbar,
	BlockControls,
	InspectorAdvancedControls,
	RichText,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
} from '@wordpress/block-editor';

import { SelectControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

import classnames from 'classnames';

export default function Edit( { attributes, setAttributes } ) {
	const { style, text } = attributes;

	//const borderRadius = style?.border?.radius;
	//const borderProps = useBorderProps( attributes );

	// not already merged in Gutenberg
	// const spacingProps = useSpacingProps( attributes );

	// Check for old deprecated numerical border radius. Done as a separate
	// check so that a borderRadius style won't overwrite the longhand
	// per-corner styles.
	if ( typeof borderRadius === 'number' ) {
		//borderProps.style.borderRadius = `${ borderRadius }px`;
	}

	const colorProps = useColorProps( attributes );

	const buttonClasses = classnames(
		//borderProps.className,
		colorProps.className,
		attributes.alignment
	);

	const blockProps = useBlockProps( {
		className: 'wp-block-popper__close',
	} );

	return (
		<button { ...blockProps }>
			{ text }
		</button>
	);
}
