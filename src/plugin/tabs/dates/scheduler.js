import {
    __experimentalSpacer as Spacer,
	__experimentalHStack as HStack,
	CheckboxControl,
	RadioControl,
	TextControl,
	DateTimePicker,
	TimePicker
} from '@wordpress/components';
import { useState, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export function Scheduler( props ) {
	
	const { rule, onChange } = props

	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];

	const setDayOfWeek = ( day, startTime, endTime ) => {
		onChange( 'days', {
			...rule.days,
			[day]: {
				startTime: startTime || '',
				endTime: endTime || ''
			}
		}, 0 )
	}
	
	const removeDayOfWeek = ( day ) => {
    	let newObj = { ...rule.days };
		delete newObj[day];
		onChange( 'days', newObj, 0 );
	}
	
	return (
		<Fragment>
			<p>{ __( 'To have more control on when popup is displayed you can use the following options.' ) }</p>
			<CheckboxControl
				label={ __( 'Custom time', 'popper' ) }
				checked={ rule.customTime || false }
				onChange={ ( val ) => onChange( 'customTime', val, 0 ) }
			/>
			{
				rule.customTime &&
				<Spacer marginLeft="10">
					<HStack spacing="1" justify="flex-start">
						<TextControl
							label={ __( 'Start time', 'popper' ) }
							type="time"
							value={ rule.startTime || '' }
							onChange={ ( val ) => onChange( 'startTime', val, 0 ) }
						/>
						<TextControl
							label={ __( 'End time', 'popper' ) }
							type="time"
							value={ rule.endTime || '' }
							onChange={ ( val ) => onChange( 'endTime', val, 0 ) }
						/>
					</HStack>
				</Spacer>
			}
			<CheckboxControl
				label={ __( 'Days of week', 'popper' ) }
				checked={ rule.customDays || false }
				onChange={ ( val ) => {
					onChange( 'customDays', val, 0 )
				} }
			/>
			{
				rule.customDays && daysOfWeek.map( (d) => {
					return (
						<Fragment key={ d }>
							<CheckboxControl
								label={ d }
								checked={ rule.days?.[d] }
								onChange={ ( val ) => {
									if( val ) {
										setDayOfWeek( d )
									}else {
										removeDayOfWeek( d )
									}
								} }
							/>
							{
								rule.days?.[d] &&
								<Spacer marginLeft="10">
									<HStack spacing="1" justify="flex-start">
										<TextControl
											label={ __( 'Start time', 'popper' ) }
											type="time"
											value={ rule.days[d].startTime || '' }
											onChange={ ( val ) => setDayOfWeek( d, val, rule.days[d].endTime ) }
										/>
										<TextControl
											label={ __( 'End time', 'popper' ) }
											type="time"
											value={ rule.days[d].endTime || '' }
											onChange={ ( val ) => setDayOfWeek( d, rule.days[d].startTime, val ) }
										/>
									</HStack>
								</Spacer>
							}
						</Fragment>
					)
				} )
			}
		</Fragment>
	);
}