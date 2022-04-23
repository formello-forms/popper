import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	CheckboxControl,
	TextControl,
	RangeControl,
} from '@wordpress/components';

const CloseBehaviour = (props) => {
	const { attributes, setAttributes } = props;
	const {
		showCloseButton,
		closeOnClickOutside,
		closeOnFormSubmission,
		closeOnAnchorClick,
		closeAnchor,
		dismissForVisitors,
		dismissPeriod,
	} = attributes;

	const changeAttribute = (slug, val) => {
		setAttributes({ [slug]: val });
	};

	return (
		<PanelBody initialOpen={false} title={__('Close Behaviour', 'popper')}>
			<PanelRow>
				<CheckboxControl
					label={__('Show Close Button', 'popper')}
					checked={showCloseButton}
					onChange={(value) =>
						changeAttribute('showCloseButton', value)
					}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={__('Close On Click Outside', 'popper')}
					checked={closeOnClickOutside}
					onChange={(value) =>
						changeAttribute('closeOnClickOutside', value)
					}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={__('Close after form submission', 'popper')}
					checked={closeOnFormSubmission}
					onChange={(value) =>
						changeAttribute('closeOnFormSubmission', value)
					}
				/>
			</PanelRow>
			<PanelRow>
				<CheckboxControl
					label={__('Close On Anchor Click', 'popper')}
					checked={closeOnAnchorClick}
					onChange={(value) =>
						changeAttribute('closeOnAnchorClick', value)
					}
				/>
			</PanelRow>
			{closeOnAnchorClick && (
				<PanelRow>
					<TextControl
						value={closeAnchor}
						label={__('Anchor', 'popper')}
						help={
							<small>
								{__(
									'You can add anchors to button blocks. Using the same anchor here will close the modal when you click the respective button.',
									'popper'
								)}
							</small>
						}
						onChange={(value) =>
							changeAttribute('closeAnchor', value)
						}
					/>
				</PanelRow>
			)}
			<PanelRow>
				<CheckboxControl
					label={__('Dismiss for Recurrent Visitors', 'popper')}
					checked={dismissForVisitors}
					onChange={(value) =>
						changeAttribute('dismissForVisitors', value)
					}
				/>
			</PanelRow>
			{dismissForVisitors && (
				<PanelRow>
					<RangeControl
						value={dismissPeriod}
						label={__(
							'Number of Days Until the Notice is Shown again',
							'popper'
						)}
						onChange={(val) => {
							setAttributes({ dismissPeriod: val });
						}}
						min={0}
						max={100}
					/>
				</PanelRow>
			)}
		</PanelBody>
	);
};

export default CloseBehaviour;
