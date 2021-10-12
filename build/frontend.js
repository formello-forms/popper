/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/frontend/exitIntentMobile.js":
/*!******************************************!*\
  !*** ./src/frontend/exitIntentMobile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ScrollSpeed = function (settings) {
  settings = settings || {};
  var lastPos,
      newPos,
      timer,
      delta,
      delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();
  return function () {
    newPos = window.scrollY;

    if (lastPos != null) {
      // && newPos < maxScroll 
      delta = newPos - lastPos;
    }

    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ScrollSpeed);

/***/ }),

/***/ "./src/frontend/frontend.js":
/*!**********************************!*\
  !*** ./src/frontend/frontend.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/frontend/popup.js");

console.log('popper');
document.addEventListener("DOMContentLoaded", function () {
  var popups = document.querySelectorAll('.popper');

  if (!popups.length) {
    return;
  }

  popups.forEach(function (block) {
    new _popup__WEBPACK_IMPORTED_MODULE_0__["Popup"](block);
  });
});

/***/ }),

/***/ "./src/frontend/popup.js":
/*!*******************************!*\
  !*** ./src/frontend/popup.js ***!
  \*******************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exitIntentMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exitIntentMobile */ "./src/frontend/exitIntentMobile.js");




/*global localStorage*/

var Popup = /*#__PURE__*/function () {
  function Popup(element) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    this.element = element;
    this.happened = false;
    this.storageKey = 'popper-dismiss';
    var dismiss = element.dataset.dismiss;

    if (this.isItemDismissed() && dismiss) {
      return false;
    }

    this.isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Popup, [{
    key: "init",
    value: function init() {
      this.bindOpen();
      this.bindClose();
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.element.classList.add('is-open');
      this.happened = true;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.element.classList.remove('is-open');
      this.dismissModal();
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      var _this$element$dataset = this.element.dataset,
          dismiss = _this$element$dataset.dismiss,
          anchor = _this$element$dataset.anchor,
          created = _this$element$dataset.created;

      if (!dismiss || !created || anchor) {
        return false;
      }

      var now = new Date();
      var cache = JSON.parse(localStorage.getItem(this.storageKey)) || [];
      var exists = cache.some(function (entry) {
        return entry.modalID === created;
      });

      if (exists) {
        return false;
      }

      var ttl = 1000 * 60 * 60 * 24 * dismiss;
      var item = {
        expiry: now.getTime() + ttl,
        modalID: created
      };
      localStorage.setItem(this.storageKey, JSON.stringify([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(cache), [item])));
    }
  }, {
    key: "isItemDismissed",
    value: function isItemDismissed() {
      var created = this.element.dataset.created;
      var cache = JSON.parse(localStorage.getItem(this.storageKey)) || [];
      var inCache = cache.filter(function (entry) {
        return entry.modalID === created;
      });

      if (inCache.length === 0) {
        return false;
      }

      var item = inCache[0];
      var now = new Date();

      if (item.expiry > now.getTime()) {
        return true;
      }

      var newCache = cache.filter(function (i) {
        return i !== inCache[0];
      });
      localStorage.setItem(this.storageKey, JSON.stringify(newCache));
      return false;
    }
  }, {
    key: "bindOpen",
    value: function bindOpen() {
      var open = this.element.dataset.open;

      switch (open) {
        case 'anchor':
          this.bindAnchors();
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
  }, {
    key: "bindAnchors",
    value: function bindAnchors() {
      var _this = this;

      var anchor = this.element.dataset.anchor;

      if (!anchor) {
        return false;
      }

      var buttons = document.querySelectorAll("#".concat(anchor));
      buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          console.log('Buttons');
          e.preventDefault();

          _this.openModal();
        });
      });
    }
  }, {
    key: "bindOpenAfterScroll",
    value: function bindOpenAfterScroll() {
      var _this2 = this;

      document.addEventListener('scroll', function () {
        if (_this2.happened) {
          return false;
        }

        var offset = _this2.element.dataset.offset;

        if (Number(offset) >= _this2.getScrolledPercent()) {
          return false;
        }

        _this2.openModal();
      });
    }
  }, {
    key: "bindOnLoad",
    value: function bindOnLoad() {
      var _this3 = this;

      var time = this.element.dataset.time;
      setTimeout(function () {
        _this3.openModal();
      }, time * 1000);
    }
  }, {
    key: "bindExitIntent",
    value: function bindExitIntent() {
      var _this4 = this;

      document.addEventListener('mouseleave', function (e) {
        if (_this4.happened) {
          return false;
        }

        if (e.clientY < 0) {
          _this4.openModal();
        }
      });
    }
  }, {
    key: "bindExitIntentMobile",
    value: function bindExitIntentMobile() {
      var _this5 = this;

      if (!this.isMobile) {
        return false;
      } // The speed check starts after 10 seconds.


      setTimeout(function () {
        window.onscroll = function () {
          if (Object(_exitIntentMobile__WEBPACK_IMPORTED_MODULE_3__["default"])() > 50) {
            _this5.openModal();
          }
        };
      }, 10000);
    }
  }, {
    key: "bindTarget",
    value: function bindTarget() {
      var _this6 = this;

      var target = this.element.dataset.target;

      window.onscroll = function () {
        return _this6.isScrolledIntoView(target);
      };
    }
  }, {
    key: "bindClose",
    value: function bindClose() {
      this.bindCloseButtons();
      this.bindAnchorClose();
      this.bindOverlayClosing();
      this.bindFormClosing();
    }
  }, {
    key: "bindAnchorClose",
    value: function bindAnchorClose() {
      var _this7 = this;

      var anchorclose = this.element.dataset.anchorclose;

      if (!anchorclose) {
        return false;
      }

      var buttons = document.querySelectorAll("#".concat(anchorclose));
      buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          e.preventDefault();

          _this7.closeModal();
        });
      });
    }
  }, {
    key: "bindCloseButtons",
    value: function bindCloseButtons() {
      var _this8 = this;

      var modal = this.element;
      var closes = modal.querySelectorAll('.popper__close');
      closes.forEach(function (close) {
        close.addEventListener('click', function () {
          _this8.closeModal();
        });
      });
    }
  }, {
    key: "bindOverlayClosing",
    value: function bindOverlayClosing() {
      var _this9 = this;

      var outside = this.element.dataset.outside;

      if ('false' === outside) {
        return false;
      }

      var overlay = this.element.querySelector('.popper__overlay');
      overlay.addEventListener('click', function (e) {
        if (e.target == overlay) {
          _this9.closeModal();
        }
      });
    }
  }, {
    key: "bindFormClosing",
    value: function bindFormClosing() {
      var _this10 = this;

      window.addEventListener('formello-success', function (e) {
        setTimeout(function () {
          _this10.closeModal();
        }, 1000);
      });
    }
  }, {
    key: "isScrolledIntoView",
    value: function isScrolledIntoView(el) {
      var target = document.getElementById(el);

      if (!target) {
        return false;
      }

      var rect = target.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom; // Only completely visible elements return true:

      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight; // Partially visible elements return true:
      //isVisible = elemTop < window.innerHeight && elemBottom >= 0;

      if (isVisible) {
        this.openModal();
      }
    }
  }, {
    key: "getScrolledPercent",
    value: function getScrolledPercent() {
      var height = document.documentElement;
      var body = document.body;
      var st = 'scrollTop';
      var sh = 'scrollHeight';
      return (height[st] || body[st]) / ((height[sh] || body[sh]) - height.clientHeight) * 100;
    }
  }]);

  return Popup;
}();



/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map