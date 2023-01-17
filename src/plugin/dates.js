import { dateI18n} from '@wordpress/date';
import { useState, Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { DateTimePicker, Popover, Button, Flex, FlexItem, RadioControl } from '@wordpress/components';

export function Dates( props ) {

	const [ openStartDate, setOpenStartDate ] = useState( false );
	const [ openEndDate, setOpenEndDate ] = useState( false );
	const { index, onChange, onChangeDevice, rule } = props;

	return (
		<Fragment>
			<Flex align="start" justify="start" style={{ marginBottom: '1em' }}>
				<FlexItem>
			        <RadioControl
			            label={ __( 'Choose when you want display this popup.' ) }
			            selected={ rule.type }
			            options={ [
			                { label: __( 'Evergreen', 'popper' ), value: 'evergreen' },
			                { label: __( 'Custom dates', 'popper' ), value: 'custom' },
			            ] }
			            onChange={ ( val ) => onChange( 'type', val, index ) }
			        />
				</FlexItem>
			</Flex>
			{
				'custom' === rule.type && 
				<Fragment>
					<Flex align="start" justify="start" className="popper-modal-row">
						<FlexItem>
							<b>From:</b>
						</FlexItem>
						<FlexItem>
							<Button isSecondary onClick={() => setOpenStartDate( ! openStartDate )}>
									{ rule.startDate ? dateI18n( 'F j, Y g:i a', rule.startDate ) : __( 'Click here to set start date.', 'popper' ) }
							</Button>
							{ openStartDate && (
								<Popover position="bottom" onClose={ setOpenStartDate.bind( null, false )}>
									<DateTimePicker
										__nextRemoveHelpButton
										__nextRemoveResetButton
										label="My Date/Time Picker"
										currentDate={ rule.startDate }
					            		onChange={ ( val ) => onChange( 'startDate', val, index ) }
										is12Hour ={true}
										isInvalidDate={
											(val) =>  {
												if( rule.endDate ){
													return new Date(val) > new Date( rule.endDate )
												}
											}
										}
									/>
								</Popover>
							) }
						</FlexItem>
						<FlexItem>
							<b>To:</b>
						</FlexItem>
						<FlexItem>
							<Button isSecondary onClick={() => setOpenEndDate( ! openEndDate )}>
									{ rule.endDate ? dateI18n( 'F j, Y g:i a', rule.endDate ) : __( 'Click here to set end date.', 'popper' ) }
							</Button>
							{ openEndDate && (
								<Popover position="bottom" onClose={ setOpenEndDate.bind( null, false )}>
									<DateTimePicker
										__nextRemoveHelpButton
										__nextRemoveResetButton
										label="My Date/Time Picker"
										currentDate={ rule.endDate }
										onChange={ ( val ) => onChange( 'endDate', val, index ) }
										is12Hour ={true}
										isInvalidDate={
											(val) =>  new Date(val) < new Date( rule.startDate )
										}
									/>
								</Popover>
							) }
						</FlexItem>
					</Flex>
				</Fragment>
			}
		</Fragment>
	);
}
