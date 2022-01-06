import {Popup} from './popup';

document.addEventListener("DOMContentLoaded", function() {
	const popups = document.querySelectorAll( '.popper' );

	if ( ! popups.length ) {
		return;
	}

	popups.forEach( ( block ) => {
		new Popup( block );
	} );
});