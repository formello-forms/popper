/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Fragment, RawHTML, useState, useEffect } from '@wordpress/element';

import { __, sprintf } from '@wordpress/i18n';

import {
	BaseControl,
	SelectControl,
	Button,
	Flex,
	FlexItem,
} from '@wordpress/components';

import Rules from './conditions';

export function Select(props) {
	const [options, setOptions] = useState([]);
	const supported = ['post', 'taxonomy'];
	const { index, onDelete } = props;

	useEffect(() => {
		setOptions(popper.positions);
	}, []);

	const getType = () => {
		let splitted = props.rule.rule.substr(0, props.rule.rule.indexOf(':'));
		let locationType = '';
		if (props.rule.rule.indexOf(':taxonomy:') > 0) {
			locationType = 'taxonomy';
		} else {
			locationType = props.rule.rule.substr(
				0,
				props.rule.rule.indexOf(':')
			);
		}

		return locationType;
	};

	return (
		<Flex align="start" justify="start">
			<FlexItem>
				<label className="components-form-token-field__label">
					{__('Where', 'popper')}
				</label>
				<select
					onChange={(val) => {
						props.onChange('rule', val.target.value, props.index);
					}}
					value={props.rule.rule}
					className="components-select-control__input"
				>
					<option value="">{__('Select one...', 'popper')}</option>
					{Object.keys(options).map((key, i) => {
						return (
							<optgroup label={options[key].label} key={i}>
								{Object.keys(options[key].locations).map(
									(opt, i) => {
										return (
											<option value={opt} key={opt}>
												{options[key].locations[opt]}
											</option>
										);
									}
								)}
							</optgroup>
						);
					})}
				</select>
			</FlexItem>
			{supported.includes(getType()) && (
				<FlexItem isBlock={true}>
					<Rules
						onChange={props.onChange}
						selectedCategories={[]}
						type={props.rule.rule.substr(
							props.rule.rule.lastIndexOf(':') + 1
						)}
						rule={props.rule}
						index={props.index}
					/>
				</FlexItem>
			)}
			<FlexItem>
				<Button
					className="popper-modal-button"
					icon="no"
					isSmall
					onClick={(val) => {
						props.onDelete(props.index);
					}}
				></Button>
			</FlexItem>
		</Flex>
	);
}
