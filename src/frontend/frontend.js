import {Popup} from './popup';

console.log('popper is loaded')

document.addEventListener("DOMContentLoaded", function() {
	const popups = document.querySelectorAll( '.popper' );

	if ( ! popups.length ) {
		return;
	}

	popups.forEach( ( block ) => {
		new Popup( block );
	} );
});