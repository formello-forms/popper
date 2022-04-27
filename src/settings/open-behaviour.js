import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	TextControl,
	RangeControl,
} from '@wordpress/components';

const OpenBehaviour = ( props ) => {
	const { attributes, setAttributes } = props;
	const { openBehaviour, anchor, waitTime, offset, target, pageviews } =
		attributes;

	const handleChangeOpenBehaviour = ( value ) => {
		setAttributes( { openBehaviour: value } );
	};

	const updateAnchor = ( val ) => {
		setAttributes( { anchor: val } );
	};

	const updateTarget = ( val ) => {
		setAttributes( { target: val } );
	};

	const updateWaitTime = ( val ) => {
		setAttributes( { waitTime: val } );
	};

	const updateScrollOffset = ( val ) => {
		setAttributes( { offset: val } );
	};

	const updatePageViews = ( val ) => {
		setAttributes( { pageviews: val } );
	};

	const options = [
		{ label: __( 'Timer', 'popper' ), value: 'load' },
		{ label: __( 'On Anchor Click', 'popper' ), value: 'anchor' },
		{ label: __( 'On Target Visibility', 'popper' ), value: 'target' },
		{ label: __( 'On Scroll', 'popper' ), value: 'scroll' },
		{ label: __( 'On Page Views', 'popper' ), value: 'pageviews' },
		{ label: __( 'On Exit Intent', 'popper' ), value: 'exit' },
	];

	return (
		<PanelBody initialOpen={ true } title={ __( 'Open Behaviour', 'popper' ) }>
			<PanelRow>
				<RadioControl
					onChange={ handleChangeOpenBehaviour }
					selected={ openBehaviour }
					options={ options }
				/>
			</PanelRow>
			<PanelRow>
				{ openBehaviour === 'anchor' && (
					<TextControl
						value={ anchor }
						label={ __( 'Anchor', 'popper' ) }
						help={
							<small>
								{ __(
									'You can add anchors to button blocks. Using the same anchor here will open the popup when you click the respective button.',
									'popper'
								) }
							</small>
						}
						onChange={ updateAnchor }
					/>
				) }
				{ openBehaviour === 'target' && (
					<TextControl
						value={ target }
						label={ __( 'Target', 'popper' ) }
						help={
							<small>
								{ __(
									'Show a popup when element with this anchor enter in viewport.',
									'popper'
								) }
							</small>
						}
						onChange={ updateTarget }
					/>
				) }
				{ openBehaviour === 'scroll' && (
					<RangeControl
						label={ __( 'Scroll Distance in Percent', 'popper' ) }
						help={
							<small>
								{ __(
									'Show the popup when this percentage of the page has been scrolled.'
								) }
							</small>
						}
						beforeIcon="image-flip-vertical"
						value={ offset }
						onChange={ updateScrollOffset }
						min={ 0 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'pageviews' && (
					<RangeControl
						label={ __( 'Number of pages', 'popper' ) }
						help={
							<small>
								{ __(
									'Show the popup when this number of pages has been visited.'
								) }
							</small>
						}
						beforeIcon="visibility"
						value={ pageviews }
						onChange={ updatePageViews }
						min={ 0 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'load' && (
					<RangeControl
						label={ __( 'Wait Time in Seconds', 'popper' ) }
						help={
							<small>
								{ __(
									'How much time to wait before showing the popup.'
								) }
							</small>
						}
						beforeIcon="clock"
						value={ waitTime }
						onChange={ updateWaitTime }
						min={ 0 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'exit' && (
					<small>
						{ __(
							'Shows the popup when the user moves the mouse outside of the top of the window',
							'popper'
						) }
					</small>
				) }
			</PanelRow>
		</PanelBody>
	);
};

export default OpenBehaviour;
