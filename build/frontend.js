/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/pageCounter.js":
/*!*************************************!*\
  !*** ./src/frontend/pageCounter.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const StoreFactory = function (name, type) {
  /* this would usually be in a separate js file */
  'use strict';

  const engine = !type || type.toLowerCase() === 'local' ? localStorage : sessionStorage;

  const set = function (data) {
    engine.setItem(name, JSON.stringify(data));
  };

  const get = function () {
    return exists(name) ? JSON.parse(engine.getItem(name)) : false;
  };

  const remove = function () {
    engine.removeItem(name);
  };

  const exists = function () {
    return engine.getItem(name) === null ? false : true;
  };

  const create = function () {
    if (!exists()) {
      set(arguments[0] || {});
    }
  };

  return Object.freeze({
    set,
    get,
    exists,
    create,
    remove
  });
};

/* harmony default export */ __webpack_exports__["default"] = (StoreFactory);

/***/ }),

/***/ "./src/frontend/popup.js":
/*!*******************************!*\
  !*** ./src/frontend/popup.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": function() { return /* binding */ Popup; }
/* harmony export */ });
/* harmony import */ var _scrollSpeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSpeed */ "./src/frontend/scrollSpeed.js");
/* harmony import */ var _pageCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageCounter */ "./src/frontend/pageCounter.js");



class Popup {
  constructor(element) {
    this.element = element;
    this.happened = false;
    this.storageKey = 'popper-dismiss';
    this.oldScroll = null;
    const {
      dismiss
    } = element.dataset;

    if (this.isItemDismissed() && dismiss) {
      return false;
    }

    this.isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;
    this.init();
  }

  init() {
    this.bindOpen();
    this.bindClose();
  }

  openModal() {
    this.closeModals();
    this.element.classList.add('wp-block-popper-is-open');
    this.happened = true;
  }

  closeModals() {
    const popups = document.querySelectorAll('.wp-block-popper-is-open');

    for (let i = 0; i < popups.length; i++) {
      popups[i].classList.toggle('wp-block-popper-is-open');
    }
  }

  closeModal() {
    this.element.classList.remove('wp-block-popper-is-open');
    const frames = document.getElementsByTagName('iframe');

    for (const item of frames) {
      item.setAttribute('src', item.src);
    }

    this.dismissModal();
  }

  dismissModal() {
    const {
      dismiss,
      anchor,
      created
    } = this.element.dataset;

    if (!dismiss || !created || anchor) {
      return false;
    }

    const now = new Date();
    const cache = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    const exists = cache.some(entry => entry.modalID === created);

    if (exists) {
      return false;
    }

    const ttl = 1000 * 60 * 60 * 24 * dismiss;
    const item = {
      expiry: now.getTime() + ttl,
      modalID: created
    };
    localStorage.setItem(this.storageKey, JSON.stringify([...cache, item]));
  }

  isItemDismissed() {
    const {
      created
    } = this.element.dataset;
    const cache = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    const inCache = cache.filter(entry => entry.modalID === created);

    if (inCache.length === 0) {
      return false;
    }

    const item = inCache[0];
    const now = new Date();

    if (item.expiry > now.getTime()) {
      return true;
    }

    const newCache = cache.filter(i => {
      return i !== inCache[0];
    });
    localStorage.setItem(this.storageKey, JSON.stringify(newCache));
    return false;
  }

  bindOpen() {
    const {
      open
    } = this.element.dataset;

    switch (open) {
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
    const {
      anchor
    } = this.element.dataset;

    if (!anchor) {
      return false;
    }

    const buttons = document.querySelectorAll(`#${anchor}`);
    buttons.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        this.openModal();
      });
    });
  }

  bindOpenAfterScroll() {
    document.addEventListener('scroll', () => {
      if (this.happened) {
        return false;
      }

      const {
        offset
      } = this.element.dataset;

      if (Number(offset) >= this.getScrolledPercent()) {
        return false;
      }

      this.openModal();
    });
  }

  bindOnLoad() {
    const {
      time
    } = this.element.dataset;
    setTimeout(() => {
      this.openModal();
    }, time * 1000);
  }

  bindExitIntent() {
    document.addEventListener('mouseout', e => {
      if (this.happened) {
        return false;
      }

      if (e.clientY < 0) {
        this.openModal();
      }
    });
  }

  bindExitIntentMobile() {
    if (!this.isMobile) {
      return false;
    }

    if (this.happened) {
      return false;
    } // The speed check starts after 5 seconds.


    window.onscroll = () => {
      setTimeout(() => {
        const isOpen = (0,_scrollSpeed__WEBPACK_IMPORTED_MODULE_0__["default"])() * -1 > 50;

        if (isOpen && this.isScrollingUp()) {
          this.openModal();
        }

        this.oldScroll = window.scrollY;
      }, 5000);
    };
  }

  bindTarget() {
    const {
      target
    } = this.element.dataset;

    window.onscroll = () => this.isScrolledIntoView(target);
  }

  bindPageViews() {
    document.addEventListener('DOMContentLoaded', this.hitcounter());
  }

  bindClose() {
    this.bindCloseButtons();
    this.bindAnchorClose();
    this.bindOverlayClosing();
    this.bindFormClosing();
    this.bindEscClosing();
  }

  bindAnchorClose() {
    const {
      anchorclose
    } = this.element.dataset;

    if (!anchorclose) {
      return false;
    }

    const buttons = document.querySelectorAll(`#${anchorclose}`);
    buttons.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        this.closeModal();
      });
    });
  }

  bindCloseButtons() {
    const modal = this.element;
    const closes = modal.querySelectorAll('.wp-block-popper__close');
    closes.forEach(close => {
      close.addEventListener('click', () => {
        this.closeModal();
      });
    });
  }

  bindOverlayClosing() {
    const {
      outside
    } = this.element.dataset;

    if ('false' === outside) {
      return false;
    }

    const overlay = this.element.querySelector('.wp-block-popper__overlay');

    if (!overlay) {
      return false;
    }

    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        this.closeModal();
      }
    });
  }

  bindEscClosing() {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.closeModal();
      }
    });
  }

  bindFormClosing() {
    const {
      form
    } = this.element.dataset;

    if ('false' === form) {
      return false;
    }

    window.addEventListener('formello-success', () => {
      setTimeout(() => {
        this.closeModal();
      }, 1000);
    });
  }

  isScrolledIntoView(el) {
    const target = document.getElementById(el);

    if (!target) {
      return false;
    }

    const rect = target.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom; // Only completely visible elements return true:

    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight; // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    if (isVisible) {
      this.openModal();
    }
  }

  getScrolledPercent() {
    const height = document.documentElement;
    const body = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';
    return (height[st] || body[st]) / ((height[sh] || body[sh]) - height.clientHeight) * 100;
  }

  isScrollingUp() {
    return this.oldScroll > window.scrollY;
  }

  hitcounter() {
    const oStore = new _pageCounter__WEBPACK_IMPORTED_MODULE_1__["default"]('urls', 'sessionStorage');
    oStore.create();
    const data = oStore.get();
    data[window.location.href] = data.hasOwnProperty(window.location.href) ? parseInt(data[window.location.href]) + 1 : 1;
    data.total = data.hasOwnProperty('total') ? parseInt(data.total) + 1 : 1;
    const {
      pagenum
    } = this.element.dataset;

    if (data.total >= pagenum) {
      this.openModal();
    }

    oStore.set(data);
  }

}



/***/ }),

/***/ "./src/frontend/scrollSpeed.js":
/*!*************************************!*\
  !*** ./src/frontend/scrollSpeed.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const ScrollSpeed = function (settings) {
  settings = settings || {};
  let lastPos, newPos, timer, delta;
  const delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();
  return function () {
    newPos = window.scrollY;

    if (lastPos !== null) {
      // && newPos < maxScroll
      delta = newPos - lastPos;
    }

    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return Number(delta);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ScrollSpeed);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************************!*\
  !*** ./src/frontend/frontend.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/frontend/popup.js");

document.addEventListener('DOMContentLoaded', function () {
  const popups = document.querySelectorAll('.wp-block-popper');

  if (!popups.length) {
    return;
  }

  popups.forEach(block => {
    new _popup__WEBPACK_IMPORTED_MODULE_0__.Popup(block);
  });
});
}();
/******/ })()
;
//# sourceMappingURL=frontend.js.map