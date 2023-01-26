import { TabPanel, Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, render, useState, useEffect } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import api from '@wordpress/api';

const Exporter = (props) => {
    const [ isOpen, setOpen ] = useState( false );
    const [ id, setId ] = useState( false );
    const openModal = (e) => console.log( e );
    const closeModal = () => setOpen( false );

		console.log(props)
	const updateMetaValue = () => {
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
					Stocazz
				</Modal>
            ) }
        </Fragment>
    );
}

window.addEventListener( 'DOMContentLoaded', (e) => {
	render( <Exporter stocazzo="345dfr" />, document.getElementById( 'popper-table' ) );
} );