(window.webpackJsonp_popper=window.webpackJsonp_popper||[]).push([[2],{73:function(e,t,n){}}]),function(e){function t(t){for(var o,l,a=t[0],i=t[1],u=t[2],s=0,b=[];s<a.length;s++)l=a[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(p&&p(t);b.length;)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={1:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp_popper=window.webpackJsonp_popper||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=i;c.push([75,2]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t,n){var o=n(33),r=n(34),c=n(11),l=n(35);e.exports=function(e,t){return o(e)||r(e,t)||c(e,t)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(15),r=n(16),c=n(11),l=n(17);e.exports=function(e){return o(e)||r(e)||c(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(19),r=n(43),c=n(44),l=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?r(e):c(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var o=n(8);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.coreData},function(e,t){e.exports=window.wp.blocks},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"formello/popper","title":"Popper","category":"widgets","description":"A great popup block.","supports":{"html":false,"multiple":false,"className":true,"reusable":false,"spacing":{"padding":true,"margin":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true}},"attributes":{"width":{"type":"number","default":400},"waitTime":{"type":"number","default":1},"offset":{"type":"number","default":20},"openBehaviour":{"type":"string","default":"load"},"showCloseButton":{"type":"boolean","default":true},"closeButtonAlignment":{"type":"string","default":"right"},"closeButtonColor":{"type":"string","default":"#000000"},"overlayColor":{"type":"string","default":"#000000"},"overlayOpacity":{"type":"number","default":75},"closeButtonSize":{"type":"number","default":20},"borderRadius":{"type":"number","default":3},"closeOnClickOutside":{"type":"boolean","default":true},"closeOnAnchorClick":{"type":"boolean","default":false},"closeAnchor":{"type":"string"},"anchor":{"type":"string","default":""},"target":{"type":"string","default":""},"backgroundColor":{"type":"string"},"gradientBackground":{"type":"string"},"dismissForVisitors":{"type":"boolean","default":true},"dismissPeriod":{"type":"number","default":20},"uuid":{"type":"number","default":null}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","script":"file:./build/frontend.js"}')},function(e,t,n){var o=n(8);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(41),r=n(23);e.exports=function(e){return null!=e&&r(e.length)&&!o(e)}},function(e,t,n){var o=n(20).Symbol;e.exports=o},function(e,t,n){var o=n(21),r="object"==typeof self&&self&&self.Object===Object&&self,c=o||r||Function("return this")();e.exports=c},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(42))},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var l=r.apply(null,o);l&&e.push(l)}else if("object"===c)for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){e.exports=window.wp.plugins},function(e,t){e.exports=window.wp.editPost},function(e,t){e.exports=window.wp.apiFetch},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},,,function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,o=!1,r=void 0;try{for(var c,l=e[Symbol.iterator]();!(_n=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);_n=!0);}catch(e){o=!0,r=e}finally{try{_n||null==l.return||l.return()}finally{if(o)throw r}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(37),r=n(18),c=n(45),l=n(46),a=n(52),i=Math.max;e.exports=function(e,t,n,u){e=r(e)?e:a(e),n=n&&!u?l(n):0;var p=e.length;return n<0&&(n=i(p+n,0)),c(e)?n<=p&&e.indexOf(t,n)>-1:!!p&&o(e,t,n)>-1}},function(e,t,n){var o=n(38),r=n(39),c=n(40);e.exports=function(e,t,n){return t==t?c(e,t,n):o(e,r,n)}},function(e,t){e.exports=function(e,t,n,o){for(var r=e.length,c=n+(o?1:-1);o?c--:++c<r;)if(t(e[c],c,e))return c;return-1}},function(e,t){e.exports=function(e){return e!=e}},function(e,t){e.exports=function(e,t,n){for(var o=n-1,r=e.length;++o<r;)if(e[o]===t)return o;return-1}},function(e,t,n){var o=n(9),r=n(22);e.exports=function(e){if(!r(e))return!1;var t=o(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var o=n(19),r=Object.prototype,c=r.hasOwnProperty,l=r.toString,a=o?o.toStringTag:void 0;e.exports=function(e){var t=c.call(e,a),n=e[a];try{e[a]=void 0;var o=!0}catch(e){}var r=l.call(e);return o&&(t?e[a]=n:delete e[a]),r}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var o=n(9),r=n(24),c=n(10);e.exports=function(e){return"string"==typeof e||!r(e)&&c(e)&&"[object String]"==o(e)}},function(e,t,n){var o=n(47);e.exports=function(e){var t=o(e),n=t%1;return t==t?n?t-n:t:0}},function(e,t,n){var o=n(48);e.exports=function(e){return e?(e=o(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},function(e,t,n){var o=n(49),r=n(22),c=n(51),l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=a.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):l.test(e)?NaN:+e}},function(e,t,n){var o=n(50),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},function(e,t,n){var o=n(9),r=n(10);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},function(e,t,n){var o=n(53),r=n(55);e.exports=function(e){return null==e?[]:o(e,r(e))}},function(e,t,n){var o=n(54);e.exports=function(e,t){return o(t,(function(t){return e[t]}))}},function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},function(e,t,n){var o=n(56),r=n(67),c=n(18);e.exports=function(e){return c(e)?o(e):r(e)}},function(e,t,n){var o=n(57),r=n(58),c=n(24),l=n(60),a=n(62),i=n(63),u=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=c(e),p=!n&&r(e),s=!n&&!p&&l(e),b=!n&&!p&&!s&&i(e),f=n||p||s||b,d=f?o(e.length,String):[],m=d.length;for(var O in e)!t&&!u.call(e,O)||f&&("length"==O||s&&("offset"==O||"parent"==O)||b&&("buffer"==O||"byteLength"==O||"byteOffset"==O)||a(O,m))||d.push(O);return d}},function(e,t){e.exports=function(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}},function(e,t,n){var o=n(59),r=n(10),c=Object.prototype,l=c.hasOwnProperty,a=c.propertyIsEnumerable,i=o(function(){return arguments}())?o:function(e){return r(e)&&l.call(e,"callee")&&!a.call(e,"callee")};e.exports=i},function(e,t,n){var o=n(9),r=n(10);e.exports=function(e){return r(e)&&"[object Arguments]"==o(e)}},function(e,t,n){(function(e){var o=n(20),r=n(61),c=t&&!t.nodeType&&t,l=c&&"object"==typeof e&&e&&!e.nodeType&&e,a=l&&l.exports===c?o.Buffer:void 0,i=(a?a.isBuffer:void 0)||r;e.exports=i}).call(this,n(25)(e))},function(e,t){e.exports=function(){return!1}},function(e,t){var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==o||"symbol"!=o&&n.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,n){var o=n(64),r=n(65),c=n(66),l=c&&c.isTypedArray,a=l?r(l):o;e.exports=a},function(e,t,n){var o=n(9),r=n(23),c=n(10),l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Arguments]"]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l["[object Function]"]=l["[object Map]"]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1,e.exports=function(e){return c(e)&&r(e.length)&&!!l[o(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){(function(e){var o=n(21),r=t&&!t.nodeType&&t,c=r&&"object"==typeof e&&e&&!e.nodeType&&e,l=c&&c.exports===r&&o.process,a=function(){try{return c&&c.require&&c.require("util").types||l&&l.binding&&l.binding("util")}catch(e){}}();e.exports=a}).call(this,n(25)(e))},function(e,t,n){var o=n(68),r=n(69),c=Object.prototype.hasOwnProperty;e.exports=function(e){if(!o(e))return r(e);var t=[];for(var n in Object(e))c.call(e,n)&&"constructor"!=n&&t.push(n);return t}},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t,n){var o=n(70)(Object.keys,Object);e.exports=o},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t){e.exports=window.wp.compose},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(3),c=n.n(r),l=(n(36),n(5)),a=n(27),i=n(28),u=n(12),p=n(1),s=n(7),b=n.n(s),f=n(6),d=n.n(f),m=(n(26),n(2)),O=(n(71),n(72),n(29)),j=n.n(O);function h(e){var t=Object(o.useState)([]),n=c()(t,2),r=n[0],l=n[1],a=Object(o.useState)([]),i=c()(a,2),u=i[0],s=i[1];Object(o.useEffect)((function(){j()({path:"/popper/"+e.type+"/"+e.id,method:"GET"}).then((function(t){l(t[e.id].objects),s(t[e.id].label)}))}),[e.type]);var b,f=e.rule.object,d=r.map((function(e){return e.name}));return b=f.map((function(e){var t=r.find((function(t){return t.id===e}));return!(void 0===t||!t)&&t.name})),Object(o.createElement)(p.FormTokenField,{label:Object(m.__)("Selected "+u,"popper"),value:b,suggestions:d,onChange:function(t){var n=[];t.map((function(e){var t=r.find((function(t){return t.name===e}));void 0!==t&&n.push(t.id)})),e.onChange("object",n,e.index)},maxSuggestions:5})}function y(e){var t=Object(o.useState)([]),n=c()(t,2),r=n[0],l=n[1];e.index,e.onDelete,Object(o.useEffect)((function(){l(popper.positions)}),[]);var a=function(){return e.rule.rule.substr(0,e.rule.rule.indexOf(":")),e.rule.rule.indexOf(":taxonomy:")>0?"taxonomy":e.rule.rule.substr(0,e.rule.rule.indexOf(":"))};return Object(o.createElement)(p.Flex,{align:"start",justify:"start",className:"popper-modal-rule"},Object(o.createElement)(p.FlexItem,null,Object(o.createElement)("label",{className:"components-form-token-field__label"},Object(m.__)("Where","popper")),Object(o.createElement)("select",{onChange:function(t){e.onChange("rule",t.target.value,e.index)},value:e.rule.rule,className:"components-select-control__input"},Object(o.createElement)("option",{value:""},Object(m.__)("Select one...","popper")),Object.keys(r).map((function(e,t){return Object(o.createElement)("optgroup",{label:r[e].label,key:t},Object.keys(r[e].locations).map((function(t,n){return Object(o.createElement)("option",{value:t,key:t},r[e].locations[t])})))})))),["post","taxonomy"].includes(a())&&Object(o.createElement)(p.FlexItem,null,Object(o.createElement)(h,{onChange:e.onChange,selectedCategories:[],type:a(),id:e.rule.rule.substr(e.rule.rule.lastIndexOf(":")+1),rule:e.rule,index:e.index})),Object(o.createElement)(p.FlexItem,{align:"center"},Object(o.createElement)(p.Button,{className:"popper-modal-button",icon:"no",onClick:function(t){e.onDelete(e.index)}})))}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=e.onRequestClose,n=Object(l.useSelect)((function(e){return e("core/editor").getCurrentPostType()}),[]),r=Object(u.useEntityProp)("postType",n,"meta"),a=c()(r,2),i=a[0],s=a[1],f=i.popper_rules,O=Object(o.useState)(f),j=c()(O,2),h=j[0],g=j[1],x=Object(o.useState)("location"),w=c()(x,2),_=w[0],E=w[1],k=function(){var e=h[_].concat({rule:"",object:[]});g(v(v({},h),{},d()({},_,e)))},C=function(e,t,n){var o=b()(h[_]),r=v({},h[_][n]);r[e]=t,o[n]=r,g(v(v({},h),{},d()({},_,o))),s(v(v({},i),{},{popper_rules:h}))},B=function(e){var t=b()(h[_]);t.splice(e,1),g(v(v({},h),{},d()({},_,t))),s(v(v({},i),{},{popper_rules:h}))};return Object(o.createElement)(p.Modal,{title:Object(m.__)("Rules","popper"),onRequestClose:function(e){s(v(v({},i),{},{popper_rules:h})),t()}},Object(o.createElement)(p.TabPanel,{onSelect:function(e){E(e)},tabs:[{name:"location",title:Object(o.createElement)("span",null,Object(m.__)("Location","popper"))},{name:"exclude",title:Object(o.createElement)("span",null,Object(m.__)("Exclude","popper"))}]},(function(e){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("h2",null,e.title),Object(o.createElement)(o.Fragment,null,h[_].map((function(e,t){return Object(o.createElement)(y,{onChange:C,onDelete:B,rule:e,index:t,key:t})}))),Object(o.createElement)(p.Button,{isPrimary:!0,onClick:k},Object(m.__)("Add rule","formello-position")))})))}Object(a.registerPlugin)("popper-display",{render:function(){var e=Object(l.useSelect)((function(e){return e("core/editor").getCurrentPostType()}),[]);if("popper"!==e)return!1;var t=Object(u.useEntityProp)("postType",e,"meta"),n=c()(t,2),r=n[0],a=(n[1],Object(o.useState)(!1)),s=c()(a,2),b=s[0],f=s[1];return Object(o.createElement)(i.PluginDocumentSettingPanel,{title:Object(m.__)("Display","popper"),icon:function(){return""}},Object(o.createElement)(p.BaseControl,null,Object(o.createElement)(p.Button,{isPrimary:!0,onClick:function(){f(!0)}},Object(m.__)("Conditions","popper"))),r.popper_rules.location.map((function(e,t){return Object(o.createElement)("li",{key:t},e.rule.replace(/:/g," > "))})),b&&Object(o.createElement)(x,{onRequestClose:function(){return f(!1)}}))}});var w=n(13),_=(n(73),n(30)),E=n.n(_),k=n(4),C=function(e){var t=e.attributes,n=e.setAttributes,r=(e.showPreview,t.width,t.backgroundColor),c=t.gradientBackground,l=t.closeButtonColor,a=t.closeButtonSize,i=t.borderRadius,u=(t.overlayColor,t.overlayOpacity);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p.PanelBody,{title:Object(m.__)("Colors","popper"),initialOpen:!1},Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(k.__experimentalColorGradientControl,{label:Object(m.__)("Close Button Color","popper"),colorValue:l,onColorChange:function(e){n({closeButtonColor:e||"#000000"})}})),Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(k.__experimentalColorGradientControl,{label:Object(m.__)("Background Color","popper"),colorValue:r,gradientValue:c,onGradientChange:function(e){n({gradientBackground:e||!1})},onColorChange:function(e){n({backgroundColor:e||!1})}}))),Object(o.createElement)(p.PanelBody,{title:Object(m.__)("Modal Appearance","popper"),initialOpen:!1},Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.RangeControl,{value:u,label:Object(m.__)("Overlay Opacity","abs-popup"),onChange:function(e){n({overlayOpacity:e})},min:0,max:100})),Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.RangeControl,{value:i,label:Object(m.__)("Popup Border Radius","popper"),onChange:function(e){n({borderRadius:e})},min:0,max:100})),Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.RangeControl,{value:a,label:Object(m.__)("Close Icon Size","popper"),onChange:function(e){n({closeButtonSize:e})},min:12,max:40}))))},B=function(e){var t=e.attributes,n=e.setAttributes,r=t.openBehaviour,c=t.anchor,l=t.waitTime,a=t.offset,i=t.target,u=[{label:Object(m.__)("Timer","popper"),value:"load"},{label:Object(m.__)("On Anchor Click","popper"),value:"anchor"},{label:Object(m.__)("On Target Visibility","popper"),value:"target"},{label:Object(m.__)("On Scroll","popper"),value:"scroll"},{label:Object(m.__)("On Exit Intent","popper"),value:"exit"}];return Object(o.createElement)(p.PanelBody,{initialOpen:!0,title:Object(m.__)("Open Behaviour","popper")},Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.RadioControl,{onChange:function(e){n({openBehaviour:e})},selected:r,options:u})),Object(o.createElement)(p.PanelRow,null,"anchor"===r&&Object(o.createElement)(p.TextControl,{value:c,label:Object(m.__)("Anchor","popper"),help:Object(o.createElement)("small",null,Object(m.__)("You can add anchors to button blocks. Using the same anchor here will open the popup when you click the respective button.","popper")),onChange:function(e){n({anchor:e})}}),"target"===r&&Object(o.createElement)(p.TextControl,{value:i,label:Object(m.__)("Target","popper"),help:Object(o.createElement)("small",null,Object(m.__)("Show a popup when element with this anchor enter in viewport.","popper")),onChange:function(e){n({target:e})}}),"scroll"===r&&Object(o.createElement)(p.RangeControl,{label:Object(m.__)("Scroll Distance in Percent","popper"),help:Object(o.createElement)("small",null,Object(m.__)("Show the popup when this percentage of the page has been scrolled.")),beforeIcon:"image-flip-vertical",value:a,onChange:function(e){n({offset:e})},min:0,max:100}),"load"===r&&Object(o.createElement)(p.RangeControl,{label:Object(m.__)("Wait Time in Seconds","popper"),help:Object(o.createElement)("small",null,Object(m.__)("How much time to wait before showing the popup.")),beforeIcon:"clock",value:l,onChange:function(e){n({waitTime:e})},min:0,max:100}),"exit"===r&&Object(o.createElement)("small",null,Object(m.__)("Shows the popup when the user moves the mouse outside of the top of the window","popper"))))},P=function(e){var t=e.attributes,n=e.setAttributes,r=t.showCloseButton,c=(t.closeButtonAlignment,t.closeOnClickOutside),l=t.closeOnAnchorClick,a=t.closeAnchor,i=t.dismissForVisitors,u=t.dismissPeriod,s=function(e,t){n(d()({},e,t))};return Object(o.createElement)(p.PanelBody,{initialOpen:!1,title:Object(m.__)("Close Behaviour","popper")},Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.CheckboxControl,{label:Object(m.__)("Show Close Button","popper"),checked:r,onChange:function(e){return s("showCloseButton",e)}})),Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.CheckboxControl,{label:Object(m.__)("Close On Click Outside","popper"),checked:c,onChange:function(e){return s("closeOnClickOutside",e)}})),Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.CheckboxControl,{label:Object(m.__)("Close On Anchor Click","popper"),checked:l,onChange:function(e){return s("closeOnAnchorClick",e)}})),l&&Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.TextControl,{value:a,label:Object(m.__)("Anchor","popper"),help:Object(o.createElement)("small",null,Object(m.__)("You can add anchors to button blocks. Using the same anchor here will close the modal when you click the respective button.","popper")),onChange:function(e){return s("closeAnchor",e)}})),Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.CheckboxControl,{label:Object(m.__)("Dismiss for Recurrent Visitors","popper"),checked:i,onChange:function(e){return s("dismissForVisitors",e)}})),i&&Object(o.createElement)(p.PanelRow,null,Object(o.createElement)(p.RangeControl,{value:u,label:Object(m.__)("Number of Days Until the Notice is Shown again","popper"),onChange:function(e){n({dismissPeriod:e})},min:0,max:100})))};function S(e){var t=e.attributes,n=e.setAttributes,r=(e.className,Object(l.useSelect)((function(e){return e("core/editor").getCurrentPostId()}))),a=Object(o.useState)(!1),i=c()(a,2),u=i[0],s=i[1];Object(o.useEffect)((function(){n({uuid:r})}),[]);var b=t.width,f=t.backgroundColor,d=t.gradientBackground,O=(t.showCloseButton,t.closeButtonColor),j=t.closeButtonSize,h=t.borderRadius,y=(t.overlayColor,t.overlayOpacity,{minWidth:b,borderRadius:h}),g={};return f&&(y.backgroundColor=f),d&&(y.background=d),O&&(g.color=O,g.fontSize=j),Object(o.createElement)("div",E()({},Object(k.useBlockProps)(),{"aria-hidden":"true",style:y}),Object(o.createElement)(k.InspectorControls,null,Object(o.createElement)(B,e),Object(o.createElement)(P,e),Object(o.createElement)(C,e)),Object(o.createElement)(k.BlockControls,null,Object(o.createElement)(p.ToolbarGroup,null,Object(o.createElement)(p.ToolbarButton,{label:Object(m.__)("Display Rules","popper"),icon:"admin-generic",onClick:function(){s(!0)}}))),Object(o.createElement)("div",{tabIndex:"-1"},Object(o.createElement)("div",{role:"dialog","aria-modal":"true"},Object(o.createElement)("button",{className:"popper__close",style:g}),Object(o.createElement)("div",null,Object(o.createElement)(k.InnerBlocks,{templateLock:!1,renderAppender:function(){return Object(o.createElement)(k.InnerBlocks.ButtonBlockAppender,null)}})))),u&&Object(o.createElement)(x,{onRequestClose:function(){return s(!1)}}))}function A(e){var t=e.clientId,n=Object(l.select)("core/blocks"),r=(n.getBlockType,n.getBlockVariations),c=n.getDefaultBlockVariation,a=Object(l.dispatch)("core/block-editor"),i=(a.insertBlock,a.replaceInnerBlocks),u=Object(l.useSelect)((function(n){return(0,n("core/block-editor").getBlock)(t),{defaultVariation:void 0===c?null:c(e.name),variations:void 0===r?null:r(e.name)}}),[t]),p=u.variations,s=u.defaultVariation;return Object(o.createElement)("div",Object(k.useBlockProps)(),Object(o.createElement)(k.__experimentalBlockVariationPicker,{label:"Popup",instructions:Object(m.__)("Select a popup to start with.","popper"),variations:p,clientId:t,allowSkip:!0,onSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;e.attributes&&setAttributes(e.attributes),e.innerBlocks&&i(t,Object(w.createBlocksFromInnerBlocksTemplate)(e.innerBlocks),!0)}}))}n(74);var M=n(14),R=[{name:"simple",title:Object(m.__)("Basic"),description:Object(m.__)("Basic popup"),icon:Object(o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(p.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"})),innerBlocks:[["core/heading",{style:{color:{text:"#000000"}},fontSize:"large",placeholder:"My Popup"}]],scope:["block"]},{name:"With image",title:Object(m.__)("Left Image"),description:Object(m.__)("Image on the left"),icon:Object(o.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(p.Path,{d:"M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"})),innerBlocks:[["core/media-text",{mediaPosition:"left",verticalAlignment:"center",mediaType:"image",mediaUrl:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"},[["core/heading",{textAlign:"center",placeholder:"Your claim...",fontSize:"large",content:"30% off coupon"}],["core/paragraph",{align:"center",placeholder:"Your claim...",content:"If you're looking for a new way to promote your business."}],["core/buttons",{contentJustification:"center"},[["core/button",{text:"SHOP NOW",style:{color:{background:"#28a7d9"}}}]]]]]],scope:["block"]},{name:"button",title:Object(m.__)("With buttons"),description:Object(m.__)("Popup with buttons and image"),icon:Object(o.createElement)(p.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)(p.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"})),innerBlocks:[["core/group",{style:{color:{background:"#fff"}}},[["core/image",{align:"center",width:234,height:291,url:"https://www.pngfind.com/pngs/m/525-5253539_3d-book-template-1-ebook-image-png-transparent.png"},[]],["core/heading",{textAlign:"center",placeholder:"Your claim...",fontSize:"large",content:"My secret SEO strategy"}],["core/paragraph",{align:"center",placeholder:"Your claim...",content:"If you're looking for a fast way to rank high on Google."}],["core/buttons",{contentJustification:"center"},[["core/button",{text:"No thanks",style:{color:{background:"#fff",text:"#000"}}}],["core/button",{text:"DOWNLOAD NOW",style:{color:{background:"#28a7d9"}}}]]]]]],scope:["block"]}],T=M.name,I=M.attributes,z=M.supports;Object(w.registerBlockType)(T,{apiVersion:2,icon:Object(o.createElement)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"512.000000pt",height:"512.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},Object(o.createElement)("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},Object(o.createElement)("path",{d:"M4400 4699 c-114 -19 -240 -97 -307 -191 l-35 -48 -1384 0 c-1476 0 -1430 1 -1448 -45 -3 -9 -6 -502 -6 -1096 l0 -1079 80 0 80 0 0 770 0 770 1441 0 c1435 0 1441 0 1510 -21 l69 -21 0 -1184 0 -1184 -1080 0 -1080 0 0 -80 0 -80 1139 0 1140 0 20 26 c21 27 21 27 21 1265 l0 1238 42 12 c127 34 252 136 306 251 143 303 -33 646 -358 698 -73 11 -74 11 -150 -1z m180 -188 c100 -38 164 -110 195 -216 73 -249 -192 -480 -427 -373 -77 36 -123 80 -160 156 -29 58 -33 76 -32 142 1 143 87 259 224 301 49 14 148 10 200 -10z m-584 -293 c0 -90 19 -163 61 -235 l24 -43 -1351 0 -1350 0 0 180 0 180 1308 0 1308 0 0 -82z"}),Object(o.createElement)("path",{d:"M4312 4377 l-52 -52 52 -53 53 -52 -53 -53 -52 -53 58 -57 57 -57 53 52 52 53 53 -53 53 -52 54 55 54 55 -52 53 -52 52 52 53 53 52 -57 57 -58 58 -53 -53 -53 -52 -49 50 c-27 27 -52 50 -55 50 -3 0 -29 -24 -58 -53z"}),Object(o.createElement)("path",{d:"M196 3419 l-26 -20 0 -1599 0 -1599 26 -20 27 -21 1648 0 1648 0 28 24 28 24 3 421 3 421 -81 0 -80 0 0 -365 0 -365 -1545 0 -1545 0 0 1220 0 1220 365 0 365 0 0 80 0 80 -365 0 -365 0 0 180 0 180 360 0 360 0 0 80 0 80 -414 0 c-403 0 -414 -1 -440 -21z"}),Object(o.createElement)("path",{d:"M1418 2073 l-188 -3 0 -81 0 -81 288 7 287 7 -71 -74 c-39 -40 -277 -284 -528 -542 l-457 -470 58 -58 58 -59 65 68 c35 37 271 281 525 542 l460 473 6 -223 c4 -123 7 -252 8 -286 l1 -63 82 0 81 0 -6 182 c-4 99 -7 280 -7 400 l0 219 -25 24 -24 25 -213 -2 c-117 -2 -297 -4 -400 -5z"}))),attributes:I,variations:R,supports:z,edit:function(e){var t=e.clientId,n=Object(l.useSelect)((function(e){var n=(0,e("core/block-editor").getBlock)(t);return!(!n||!n.innerBlocks.length)}),[t])?S:A;return Object(o.createElement)(n,e)},save:function(e){var t=e.attributes,n=t.width,r=t.anchor,c=t.target,l=t.waitTime,a=t.offset,i=t.openBehaviour,u=t.backgroundColor,p=t.gradientBackground,s=t.closeButtonColor,b=t.closeButtonSize,f=t.borderRadius,d=(t.overlayColor,t.overlayOpacity),m=t.closeAnchor,O=t.closeOnClickOutside,j=t.closeOnAnchorClick,h=t.dismissForVisitors,y=t.dismissPeriod,g=t.uuid,v={minWidth:n,borderRadius:f};u&&(v.backgroundColor=u),p&&(v.background=p);var x={color:s,fontSize:b};return Object(o.createElement)("div",{"data-open":i,"data-anchor":"anchor"===i?r:"","data-target":"target"===i?c:"","data-anchorclose":j?m:"","data-time":"load"===i?l:"","data-dismiss":h?y:"","data-offset":"scroll"===i?a:"","data-outside":O,"data-created":g,className:"popper",id:"modal-"+g,"aria-hidden":"true"},Object(o.createElement)("div",{className:"popper__overlay",tabindex:"-1",style:{backgroundColor:"rgba(0,0,0,"+d/100+")"}},Object(o.createElement)("div",{className:"popper__container",role:"dialog","aria-modal":"true","aria-labelledby":"modal-1-title",style:v},Object(o.createElement)("button",{className:"popper__close","aria-label":"Close modal",style:x}),Object(o.createElement)("main",{className:"popper__content"},Object(o.createElement)(k.InnerBlocks.Content,null)))))}})}]);