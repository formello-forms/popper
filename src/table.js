import { TabPanel, Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, render, useState, useEffect } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import api from '@wordpress/api';

const Exporter = () => {
    const [ isOpen, setOpen ] = useState( false );
    const [ id, setId ] = useState( false );
    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );
 	
	useEffect( () => {
        setId( getQueryArg( window.location.href, 'form_id' ) )
	}, [] )

	const updateMetaValue = () => {
		console.log(88)
	}

	const onSelect = () => {
		console.log(645)
	}

    return (
        <Fragment>
            <a href={ '#' } onClick={ openModal }>
                { __( 'Edit rules', 'popper' ) }
            </a>
            { isOpen && (
				<Modal
					title={ __( 'Rules', 'popper' ) }
					onRequestClose={ updateMetaValue }
					className={ 'popper-modal-rule' }
				>
					<TabPanel
						onSelect={ onSelect }
						tabs={ [
							{
								name: 'location',
								title: <span>{ __( 'Location', 'popper' ) }</span>,
								description: (
									<p>
										{ __(
											'Choose where you want display this popup.',
											'popper'
										) }
									</p>
								),
							},
							{
								name: 'exclude',
								title: <span>{ __( 'Exclude', 'popper' ) }</span>,
								description: (
									<p>
										{ __(
											"Choose where you don't want display this popup.",
											'popper'
										) }
									</p>
								),
							},
							{
								name: 'user',
								title: <span>{ __( 'Users', 'popper' ) }</span>,
								description: (
									<p>
										{ __(
											'Choose which user will see this popup.',
											'popper'
										) }
									</p>
								),
							},
						] }
					>
						{ ( tabData ) => {
							return (
								<Fragment>
									<h2>{ tabData.title }</h2>
									{ tabData.description }
									<Fragment>
										{ rules[ activeTab ].map( ( r, i ) => {
											const Component =
												'user' === tabData.name
													? UserSelect
													: Select;
											return (
												<Component
													onChange={ onChange }
													onDelete={ onDelete }
													rule={ r }
													index={ i }
													key={ i }
												/>
											);
										} ) }
									</Fragment>
									<Button
										isPrimary={ true }
										onClick={ addRule }
										className={ 'popper-modal-button' }
									>
										{ __( 'Add rule', 'popper' ) }
									</Button>
								</Fragment>
							);
						} }
					</TabPanel>
				</Modal>
            ) }
        </Fragment>
    );
}

window.addEventListener( 'DOMContentLoaded', () => {
	render( <Exporter />, document.getElementById( 'popper-table' ) );
} );