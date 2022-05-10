import { TabPanel, Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, render, useState, useEffect } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import api from '@wordpress/api';
import { Tabs } from './plugin/tabs';

const Exporter = () => {
    const [ isOpen, setOpen ] = useState( false );
    const [ id, setId ] = useState( false );
    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );

	const updateMetaValue = () => {
		console.log(88)
	}

	const onSelect = () => {
		console.log(645)
	}

	useEffect( () => {
		
	}, [] )

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
					<Tabs 
						onDelete={ onDelete } 
						onChange={ onChange } 
						addRule={ addRule } 
						rules={ rules } 
						onSelect={ onSelect } 
						activeTab={ activeTab }
					/>
				</Modal>
            ) }
        </Fragment>
    );
}

window.addEventListener( 'DOMContentLoaded', () => {
	render( <Exporter />, document.getElementById( 'popper-table' ) );
} );