import ScrollSpeed from './scrollSpeed';
import StoreFactory from './pageCounter';

/*global localStorage*/
class Popup {
	constructor( element ) {
		this.element = element;
		this.happened = false;
		this.storageKey = 'popper-dismiss';
		this.oldScroll = null;
		const { dismiss } = element.dataset;

		if ( this.isItemDismissed() && dismiss ) {
			return false;
		}
		this.isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
		this.init();
	}

	init() {
		this.bindOpen();
		this.bindClose();
	}

	openModal() {
		this.element.classList.add( 'popper-is-open' );
		this.happened = true;
	}

	closeModal() {
		this.element.classList.remove( 'popper-is-open' );
		var frames = document.getElementsByTagName("iframe");
		for (let item of frames) {
		    item.setAttribute( 'src', item.src )
		}
		this.dismissModal();
	}

	dismissModal() {
		const { dismiss, anchor, created } = this.element.dataset;
		if ( ! dismiss || ! created || anchor ) {
			return false;
		}

		const now = new Date();
		const cache =
			JSON.parse( localStorage.getItem( this.storageKey ) ) || [];
		const exists = cache.some( ( entry ) => entry.modalID === created );

		if ( exists ) {
			return false;
		}

		const ttl = 1000 * 60 * 60 * 24 * dismiss;
		const item = {
			expiry: now.getTime() + ttl,
			modalID: created,
		};
		localStorage.setItem(
			this.storageKey,
			JSON.stringify( [ ...cache, item ] )
		);
	}

	isItemDismissed() {
		const { created } = this.element.dataset;
		const cache =
			JSON.parse( localStorage.getItem( this.storageKey ) ) || [];
		const inCache = cache.filter( ( entry ) => entry.modalID === created );

		if ( inCache.length === 0 ) {
			return false;
		}

		const item = inCache[ 0 ];

		const now = new Date();

		if ( item.expiry > now.getTime() ) {
			return true;
		}
		const newCache = cache.filter( ( i ) => {
			return i !== inCache[ 0 ];
		} );
		localStorage.setItem( this.storageKey, JSON.stringify( newCache ) );

		return false;
	}

	bindOpen() {
		const { open } = this.element.dataset;
		switch ( open ) {
			case 'anchor':
				this.bindAnchors();
				break;
			case 'pageviews':
				this.bindPageViews();
				break;
			case 'target':
				this.bindTarget();
				break;
			case 'scroll':
				this.bindOpenAfterScroll();
				break;
			case 'exit':
				this.bindExitIntent();
				this.bindExitIntentMobile();
				break;
			default:
			case 'load':
				this.bindOnLoad();
				break;
		}
	}

	bindAnchors() {
		const { anchor } = this.element.dataset;
		if ( ! anchor ) {
			return false;
		}

		const buttons = document.querySelectorAll( `#${ anchor }` );
		buttons.forEach( ( button ) => {
			button.addEventListener( 'click', ( e ) => {
				e.preventDefault();
				this.openModal();
			} );
		} );
	}

	bindOpenAfterScroll() {
		document.addEventListener( 'scroll', () => {
			if ( this.happened ) {
				return false;
			}

			const { offset } = this.element.dataset;
			if ( Number(offset) >= this.getScrolledPercent() ) {
				return false;
			}

			this.openModal();
		} );
	}

	bindOnLoad() {
		const { time } = this.element.dataset;
		setTimeout( () => {
			this.openModal();
		}, time * 1000 );
	}

	bindExitIntent() {
		document.addEventListener( 'mouseout', ( e ) => {
			if ( this.happened ) {
				return false;
			}

			if ( e.clientY < 0 ) {
				this.openModal();
			}
		} );
	}

	bindExitIntentMobile() {
		if( !this.isMobile ){
			return false;
		}
		// The speed check starts after 5 seconds.
		window.onscroll = () => {
			setTimeout(() => {
				let isOpen = ScrollSpeed()*-1 > 50;
				if( isOpen && this.isScrollingUp() ){
					this.openModal()
				}
				this.oldScroll = window.scrollY
			}, 5000);
		}
	}

	bindTarget() {
		const { target } = this.element.dataset;
		window.onscroll = () => this.isScrolledIntoView( target )
	}

	bindPageViews() {
		const { target } = this.element.dataset;
		document.addEventListener( 'DOMContentLoaded', this.hitcounter() );
	}

	bindClose() {
		this.bindCloseButtons();
		this.bindAnchorClose();
		this.bindOverlayClosing();
		this.bindFormClosing();
	}

	bindAnchorClose() {
		const { anchorclose } = this.element.dataset;

		if ( ! anchorclose ) {
			return false;
		}

		const buttons = document.querySelectorAll( `#${ anchorclose }` );
		buttons.forEach( ( button ) => {
			button.addEventListener( 'click', ( e ) => {
				e.preventDefault();
				this.closeModal();
			} );
		} );
	}

	bindCloseButtons() {
		const modal = this.element;
		const closes = modal.querySelectorAll( '.popper__close' );

		closes.forEach( ( close ) => {
			close.addEventListener( 'click', () => {
				this.closeModal();
			} );
		} );
	}

	bindOverlayClosing() {
		const { outside } = this.element.dataset;
		if ( 'false' === outside ) {
			return false;
		}
		const overlay = this.element.querySelector( '.popper__overlay' );
		overlay.addEventListener( 'click', (e) => {
			if (e.target == overlay) {
				this.closeModal();
			}
		} );
	}

	bindFormClosing() {
		window.addEventListener( 'formello-success', (e) => {
			setTimeout(() => {
				this.closeModal();
			}, 1000);
		} );
	}

	isScrolledIntoView(el) {
		var target = document.getElementById( el );
		if( !target ){
			return false;
		}
		var rect = target.getBoundingClientRect();
		var elemTop = rect.top;
		var elemBottom = rect.bottom;

		// Only completely visible elements return true:
		var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
		// Partially visible elements return true:
		//isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		if( isVisible ){
			this.openModal();
		}
	}

	getScrolledPercent() {
		const height = document.documentElement;
		const body = document.body;
		const st = 'scrollTop';
		const sh = 'scrollHeight';

		return (
			( ( height[ st ] || body[ st ] ) /
				( ( height[ sh ] || body[ sh ] ) - height.clientHeight ) ) *
			100
		);
	}

	isScrollingUp() {
		return this.oldScroll > window.scrollY;
	}

	hitcounter() {

	    let oStore = new StoreFactory( 'urls', 'sessionStorage' );
	        oStore.create();

	    let data=oStore.get();
	        data[ location.href ]=data.hasOwnProperty( location.href ) ? parseInt( data[ location.href ] ) + 1 : 1;
	        data.total=data.hasOwnProperty('total') ? parseInt( data.total ) + 1 : 1;

		const { pagenum } = this.element.dataset;
	    if( data.total >= pagenum ) {
	    	this.openModal()
	    }

	    oStore.set( data );
	}

}

export { Popup };