!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=78)}({10:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},15:function(e,t,n){var o=n(10);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},18:function(e,t,n){var o=n(10);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},20:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},33:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},34:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},78:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n.n(o),i=n(33),a=n.n(i),l=n(34),s=n.n(l),u=function(e){var t,n,o,r,i=(e=e||{}).delay||50;function a(){t=null,r=0}return a(),function(){return n=window.scrollY,null!=t&&(r=n-t),t=n,clearTimeout(o),o=setTimeout(a,i),Number(r)}}(),c=function(e,t){var n=t&&"local"!==t.toLowerCase()?sessionStorage:localStorage,o=function(t){n.setItem(e,JSON.stringify(t))},r=function(){return null!=n.getItem(e)};return Object.freeze({set:o,get:function(){return!!r()&&JSON.parse(n.getItem(e))},exists:r,create:function(){r()||o(arguments[0]||{})},remove:function(){n.removeItem(e)}})};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f=function(){function e(t){a()(this,e),this.element=t,this.happened=!1,this.storageKey="popper-dismiss",this.oldScroll=null;var n=t.dataset.dismiss;if(this.isItemDismissed()&&n)return!1;this.isMobile=window.matchMedia("only screen and (max-width: 760px)").matches,this.init()}return s()(e,[{key:"init",value:function(){this.bindOpen(),this.bindClose()}},{key:"openModal",value:function(){this.element.classList.add("wp-block-popper-is-open"),this.happened=!0}},{key:"closeModal",value:function(){this.element.classList.remove("wp-block-popper-is-open");var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}(document.getElementsByTagName("iframe"));try{for(t.s();!(e=t.n()).done;){var n=e.value;n.setAttribute("src",n.src)}}catch(e){t.e(e)}finally{t.f()}this.dismissModal()}},{key:"dismissModal",value:function(){var e=this.element.dataset,t=e.dismiss,n=e.anchor,o=e.created;if(!t||!o||n)return!1;var i=new Date,a=JSON.parse(localStorage.getItem(this.storageKey))||[];if(a.some((function(e){return e.modalID===o})))return!1;var l=864e5*t,s={expiry:i.getTime()+l,modalID:o};localStorage.setItem(this.storageKey,JSON.stringify([].concat(r()(a),[s])))}},{key:"isItemDismissed",value:function(){var e=this.element.dataset.created,t=JSON.parse(localStorage.getItem(this.storageKey))||[],n=t.filter((function(t){return t.modalID===e}));if(0===n.length)return!1;var o=n[0],r=new Date;if(o.expiry>r.getTime())return!0;var i=t.filter((function(e){return e!==n[0]}));return localStorage.setItem(this.storageKey,JSON.stringify(i)),!1}},{key:"bindOpen",value:function(){switch(this.element.dataset.open){case"anchor":this.bindAnchors();break;case"pageviews":this.bindPageViews();break;case"target":this.bindTarget();break;case"scroll":this.bindOpenAfterScroll();break;case"exit":this.bindExitIntent(),this.bindExitIntentMobile();break;default:case"load":this.bindOnLoad()}}},{key:"bindAnchors",value:function(){var e=this,t=this.element.dataset.anchor;if(!t)return!1;document.querySelectorAll("#".concat(t)).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.openModal()}))}))}},{key:"bindOpenAfterScroll",value:function(){var e=this;document.addEventListener("scroll",(function(){if(e.happened)return!1;var t=e.element.dataset.offset;if(Number(t)>=e.getScrolledPercent())return!1;e.openModal()}))}},{key:"bindOnLoad",value:function(){var e=this,t=this.element.dataset.time;setTimeout((function(){e.openModal()}),1e3*t)}},{key:"bindExitIntent",value:function(){var e=this;document.addEventListener("mouseout",(function(t){if(e.happened)return!1;t.clientY<0&&e.openModal()}))}},{key:"bindExitIntentMobile",value:function(){var e=this;if(!this.isMobile)return!1;window.onscroll=function(){setTimeout((function(){-1*u()>50&&e.isScrollingUp()&&e.openModal(),e.oldScroll=window.scrollY}),5e3)}}},{key:"bindTarget",value:function(){var e=this,t=this.element.dataset.target;window.onscroll=function(){return e.isScrolledIntoView(t)}}},{key:"bindPageViews",value:function(){this.element.dataset.target,document.addEventListener("DOMContentLoaded",this.hitcounter())}},{key:"bindClose",value:function(){this.bindCloseButtons(),this.bindAnchorClose(),this.bindOverlayClosing(),this.bindFormClosing(),this.bindEscClosing()}},{key:"bindAnchorClose",value:function(){var e=this,t=this.element.dataset.anchorclose;if(!t)return!1;document.querySelectorAll("#".concat(t)).forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.closeModal()}))}))}},{key:"bindCloseButtons",value:function(){var e=this;this.element.querySelectorAll(".wp-block-popper__close").forEach((function(t){t.addEventListener("click",(function(){e.closeModal()}))}))}},{key:"bindOverlayClosing",value:function(){var e=this;if("false"===this.element.dataset.outside)return!1;var t=this.element.querySelector(".wp-block-popper__overlay");t.addEventListener("click",(function(n){n.target==t&&e.closeModal()}))}},{key:"bindEscClosing",value:function(){var e=this;window.addEventListener("keydown",(function(t){console.log(t),27==t.keyCode&&e.closeModal()}))}},{key:"bindFormClosing",value:function(){var e=this;window.addEventListener("formello-success",(function(t){setTimeout((function(){e.closeModal()}),1e3)}))}},{key:"isScrolledIntoView",value:function(e){var t=document.getElementById(e);if(!t)return!1;var n=t.getBoundingClientRect(),o=n.top,r=n.bottom;o>=0&&r<=window.innerHeight&&this.openModal()}},{key:"getScrolledPercent",value:function(){var e=document.documentElement,t=document.body,n="scrollTop",o="scrollHeight";return(e[n]||t[n])/((e[o]||t[o])-e.clientHeight)*100}},{key:"isScrollingUp",value:function(){return this.oldScroll>window.scrollY}},{key:"hitcounter",value:function(){var e=new c("urls","sessionStorage");e.create();var t=e.get();t[location.href]=t.hasOwnProperty(location.href)?parseInt(t[location.href])+1:1,t.total=t.hasOwnProperty("total")?parseInt(t.total)+1:1;var n=this.element.dataset.pagenum;t.total>=n&&this.openModal(),e.set(t)}}]),e}();console.log("POPPER"),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".wp-block-formello-popper");e.length&&e.forEach((function(e){new f(e)}))}))},9:function(e,t,n){var o=n(18),r=n(19),i=n(15),a=n(20);e.exports=function(e){return o(e)||r(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0}});