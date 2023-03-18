import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
	RichText,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';

import classnames from 'classnames';
import { ReactComponent as CloseButton } from './close-button.svg';
import Button from './settings';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { style, text, position, isIcon } = attributes;

	const borderRadius = style?.border?.radius;
	const borderProps = useBorderProps( attributes );

	// not already merged in Gutenberg
	// const spacingProps = useSpacingProps( attributes );

	// Check for old deprecated numerical border radius. Done as a separate
	// check so that a borderRadius style won't overwrite the longhand
	// per-corner styles.
	if ( typeof borderRadius === 'number' ) {
		borderProps.style.borderRadius = `${ borderRadius }px`;
	}

	const colorProps = useColorProps( attributes );

	const buttonClasses = classnames(
		borderProps.className,
		colorProps.className,
		'wp-block-popper__close',
		{
			'wp-block-popper__close-outside': 'outside' === position,
			'wp-block-popper__close-corner': 'corner' === position,
		}
	);

	const blockProps = useBlockProps( {
		className: buttonClasses,
	} );

	return (
		<Fragment>
			<InspectorControls>
				<Button { ...props } />
			</InspectorControls>
			{ isIcon ? (
				<button { ...blockProps }>
					<CloseButton />
				</button>
			) : (
				<RichText
					{ ...blockProps }
					tagName="span"
					value={ text }
					onChange={ ( val ) => setAttributes( { text: val } ) }
					placeholder={ __( 'Enter close text…', 'popper' ) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					multiline={ false }
				/>
			) }
		</Fragment>
	);
}
