import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	TextControl,
	RangeControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

const OpenBehaviour = ( props ) => {
	const { attributes, setAttributes } = props;
	const { openBehaviour, anchor, waitTime, offset, target, pageviews } =
		attributes;

	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const metaFieldValue = meta.popper_trigger;

	const updateTrigger = ( key, val ) => {
		setAttributes( { [ key ]: val } );
		setMeta( {
			...meta,
			popper_trigger: {
				...metaFieldValue,
				value: String( val ),
			},
		} );
	};

	const handleChangeOpenBehaviour = ( val ) => {
		setAttributes( { openBehaviour: val } );
		setMeta( {
			...meta,
			popper_trigger: {
				...metaFieldValue,
				trigger: val,
			},
		} );
	};

	const options = [
		{ label: __( 'Timer', 'popper' ), value: 'load' },
		{ label: __( 'On Anchor Click', 'popper' ), value: 'anchor' },
		{ label: __( 'On AdBlock Detect', 'popper' ), value: 'adBlock' },
		{ label: __( 'On Target Visibility', 'popper' ), value: 'target' },
		{ label: __( 'On Scroll', 'popper' ), value: 'scroll' },
		{ label: __( 'On Page Views', 'popper' ), value: 'pageviews' },
		{ label: __( 'On Exit Intent', 'popper' ), value: 'exit' },
	];

	return (
		<PanelBody initialOpen={ true } title={ __( 'Open Trigger', 'popper' ) }>
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
							__(
								'You can add anchors to button blocks. Using the same anchor here will open the popup when you click the respective button.',
								'popper'
							)
						}
						onChange={ ( val ) => updateTrigger( 'anchor', val ) }
					/>
				) }
				{ openBehaviour === 'adBlock' && (
					<RangeControl
						label={ __( 'Scroll Distance in Percent', 'popper' ) }
						help={
							__(
								'How much time to wait before showing the popup.'
							)
						}
						beforeIcon="image-flip-vertical"
						value={ offset }
						onChange={ ( val ) => updateTrigger( 'offset', val ) }
						min={ 20 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'target' && (
					<TextControl
						value={ target }
						label={ __( 'Target', 'popper' ) }
						help={
							__(
								'Show a popup when element with this anchor enter in viewport.',
								'popper'
							)
						}
						onChange={ ( val ) => updateTrigger( 'target', val ) }
					/>
				) }
				{ openBehaviour === 'scroll' && (
					<RangeControl
						label={ __( 'Scroll Distance in Percent', 'popper' ) }
						help={
							__(
								'Show the popup when this percentage of the page has been scrolled.'
							)
						}
						beforeIcon="image-flip-vertical"
						value={ offset }
						onChange={ ( val ) => updateTrigger( 'offset', val ) }
						min={ 0 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'pageviews' && (
					<RangeControl
						label={ __( 'Number of pages', 'popper' ) }
						help={
							__(
								'Show the popup when this number of pages has been visited.'
							)
						}
						beforeIcon="visibility"
						value={ pageviews }
						onChange={ ( val ) => updateTrigger( 'pageviews', val ) }
						min={ 0 }
						max={ 100 }
					/>
				) }
				{ openBehaviour === 'load' && (
					<RangeControl
						label={ __( 'Wait Time in Seconds', 'popper' ) }
						help={
							__(
								'How much time to wait before showing the popup.'
							)
						}
						beforeIcon="clock"
						value={ waitTime }
						onChange={ ( val ) => updateTrigger( 'waitTime', val ) }
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
