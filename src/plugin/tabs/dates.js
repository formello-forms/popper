import { dateI18n} from '@wordpress/date';
import { useState, Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { DateTimePicker, Button, Flex, FlexItem, RadioControl, Dropdown } from '@wordpress/components';

export function Dates( props ) {

	const [ openStartDate, setOpenStartDate ] = useState( false );
	const [ openEndDate, setOpenEndDate ] = useState( false );
	const { index, onChange, onChangeDevice, rules, activeTab } = props;

	const rule = rules[ activeTab ][0];

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
			            onChange={ ( val ) => onChange( 'type', val, 0 ) }
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
						    <Dropdown
						        popoverProps={ { placement: 'bottom-start' } }
						        renderToggle={ ( { isOpen, onToggle } ) => (
						            <Button
						                variant="secondary"
						                onClick={ onToggle }
						                aria-expanded={ isOpen }
						            >
										{ rule.startDate ? dateI18n( 'F j, Y g:i a', rule.startDate ) : __( 'Click here to set start date.', 'popper' ) }
						            </Button>
						        ) }
						        renderContent={ () => 
									<DateTimePicker
										__nextRemoveHelpButton
										label="My Date/Time Picker"
										currentDate={ rule.startDate }
										onChange={ ( val ) => onChange( 'startDate', val, 0 ) }
										is12Hour ={true}
										isInvalidDate={
											(val) =>  {
												if( rule.endDate ){
													return new Date(val) > new Date( rule.endDate )
												}
											}
										}
									/>
						    	}
						    />	
						</FlexItem>
						<FlexItem>
							<b>To:</b>
						</FlexItem>
						<FlexItem>
						    <Dropdown
						        popoverProps={ { placement: 'bottom-start' } }
						        renderToggle={ ( { isOpen, onToggle } ) => (
						            <Button
						                variant="secondary"
						                onClick={ onToggle }
						                aria-expanded={ isOpen }
						            >
										{ 
											rule.endDate ? 
												dateI18n( 'F j, Y g:i a', rule.endDate ) : 
												__( 'Click here to set start date.', 'popper' ) 
										}
						            </Button>
						        ) }
						        renderContent={ () => 
									<DateTimePicker
										__nextRemoveHelpButton
										label="My Date/Time Picker"
										currentDate={ rule.endDate }
										onChange={ ( val ) => onChange( 'endDate', val, 0 ) }
										is12Hour ={true}
										isInvalidDate={
											(val) =>  new Date(val) < new Date( rule.startDate )
										}
									/>
						    	}
						    />	
						</FlexItem>
					</Flex>
				</Fragment>
			}
		</Fragment>
	);
}
