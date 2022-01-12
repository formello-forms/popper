import {Popup} from './popup';

console.log( 'POPPER' )

document.addEventListener("DOMContentLoaded", function() {
	const popups = document.querySelectorAll( '.wp-block-formello-popper' );

	if ( ! popups.length ) {
		return;
	}

	popups.forEach( ( block ) => {
		new Popup( block );
	} );
});