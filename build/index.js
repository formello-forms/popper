/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const layout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (layout);
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const deprecated = [// v1 of button block.
{
  attributes: {
    width: {
      type: 'number',
      default: ''
    },
    waitTime: {
      type: 'number',
      default: 1
    },
    offset: {
      type: 'number',
      default: 20
    },
    openBehaviour: {
      type: 'string',
      default: 'load'
    },
    showCloseButton: {
      type: 'boolean',
      default: true
    },
    closeButtonAlignment: {
      type: 'string',
      default: 'right'
    },
    closeButtonColor: {
      type: 'string',
      default: '#000000'
    },
    overlayColor: {
      type: 'string',
      default: '#000000'
    },
    overlayOpacity: {
      type: 'number',
      default: 75
    },
    closeButtonSize: {
      type: 'number',
      default: 20
    },
    borderRadius: {
      type: 'number',
      default: 3
    },
    boxShadow: {
      type: 'string',
      default: 'shadow-md'
    },
    closeOnClickOutside: {
      type: 'boolean',
      default: true
    },
    closeOnAnchorClick: {
      type: 'boolean',
      default: false
    },
    closeAnchor: {
      type: 'string'
    },
    anchor: {
      type: 'string',
      default: ''
    },
    target: {
      type: 'string',
      default: ''
    },
    backgroundColor: {
      type: 'string'
    },
    gradientBackground: {
      type: 'string'
    },
    dismissForVisitors: {
      type: 'boolean',
      default: true
    },
    dismissPeriod: {
      type: 'number',
      default: 20
    },
    uuid: {
      type: 'number',
      default: null
    }
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      width,
      anchor,
      target,
      waitTime,
      offset,
      openBehaviour,
      backgroundColor,
      gradientBackground,
      closeButtonColor,
      closeButtonSize,
      borderRadius,
      overlayOpacity,
      closeAnchor,
      closeOnClickOutside,
      closeOnAnchorClick,
      dismissForVisitors,
      dismissPeriod,
      uuid
    } = attributes;
    const modalStyle = {
      minWidth: width,
      borderRadius
    };

    if (backgroundColor) {
      modalStyle.backgroundColor = backgroundColor;
    }

    if (gradientBackground) {
      modalStyle.background = gradientBackground;
    }

    const closeButtonStyle = {
      color: closeButtonColor,
      fontSize: closeButtonSize
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-open": openBehaviour,
      "data-anchor": openBehaviour === 'anchor' ? anchor : '',
      "data-target": openBehaviour === 'target' ? target : '',
      "data-anchorclose": closeOnAnchorClick ? closeAnchor : '',
      "data-time": openBehaviour === 'load' ? waitTime : '',
      "data-dismiss": dismissForVisitors ? dismissPeriod : '',
      "data-offset": openBehaviour === 'scroll' ? offset : '',
      "data-outside": closeOnClickOutside,
      "data-created": uuid,
      id: 'modal-' + uuid,
      "aria-hidden": "true",
      className: "popper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "popper__overlay",
      tabIndex: "-1",
      style: {
        backgroundColor: 'rgba(0,0,0,' + overlayOpacity / 100 + ')'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "popper__container",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-1-title",
      style: modalStyle
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "popper__close",
      "aria-label": "Close modal",
      style: closeButtonStyle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
      className: "popper__content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)))));
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./placeholder */ "./src/placeholder.js");
/* harmony import */ var _settings_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/button */ "./src/settings/button.js");
/* harmony import */ var _settings_appearance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/appearance */ "./src/settings/appearance.js");
/* harmony import */ var _settings_open_behaviour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/open-behaviour */ "./src/settings/open-behaviour.js");
/* harmony import */ var _settings_close_behaviour__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/close-behaviour */ "./src/settings/close-behaviour.js");
/* harmony import */ var _plugin_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugin/modal */ "./src/plugin/modal.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./library */ "./src/library.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _settings_controls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/controls */ "./src/settings/controls.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);



















function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    width,
    backgroundColor,
    showCloseButton,
    closeButtonColor,
    closeButtonSize,
    closeButtonAlignment,
    boxShadow,
    overlayColor,
    align,
    fullPage,
    borderRadius
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      uuid: postId
    });
  }, []);
  const postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/editor').getCurrentPostId());
  const {
    hasInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const block = getBlock(clientId);
    return {
      hasInnerBlocks: !!(block && block.innerBlocks.length)
    };
  }, [clientId]);
  const [isModalOpen, setModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const closeModal = () => setModalOpen(false);

  const closeButtonStyle = {};

  if (closeButtonColor) {
    closeButtonStyle.color = closeButtonColor;
    closeButtonStyle.fontSize = closeButtonSize;
    closeButtonStyle.width = closeButtonSize;
    closeButtonStyle.height = closeButtonSize;
  }

  if ('outside' === closeButtonAlignment) {
    closeButtonStyle.top = (closeButtonSize + 4) * -1;
    closeButtonStyle.right = 0;
  }

  const modalStyle = {
    width,
    borderRadius
  };
  const overlayStyle = {
    backgroundColor: overlayColor
  };

  if (overlayColor && !align.includes('center')) {
    overlayStyle.backgroundColor = undefined;
  }

  if (backgroundColor) {
    modalStyle.backgroundColor = backgroundColor;
  }

  const popperClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()('wp-block-popper wp-block-popper-is-open', 'wp-block-formello-popper', {
    'wp-block-popper--right': align.includes('right'),
    'wp-block-popper--left': align.includes('left'),
    'wp-block-popper--top': align.includes('top'),
    'wp-block-popper--bottom': align.includes('bottom'),
    'wp-block-formello-popper--nobg': !align.includes('center') || undefined === overlayColor
  });
  const containerClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()('wp-block-popper__container', boxShadow, {
    wide: fullPage
  });
  /**
   * Returns the current deviceType.
   */

  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post');
    return {
      deviceType: __experimentalGetPreviewDeviceType()
    };
  }, []);

  if ('Mobile' === deviceType) {
    modalStyle.width = undefined;
  }

  const closeButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "wp-block-popper__close",
    style: closeButtonStyle
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: popperClass,
    style: overlayStyle
  }, showCloseButton && 'edge' === closeButtonAlignment && closeButton, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_settings_open_behaviour__WEBPACK_IMPORTED_MODULE_10__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_settings_close_behaviour__WEBPACK_IMPORTED_MODULE_11__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_settings_appearance__WEBPACK_IMPORTED_MODULE_9__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_settings_button__WEBPACK_IMPORTED_MODULE_8__["default"], props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template', 'popper'),
    icon: 'layout',
    onClick: () => {
      setModalOpen('templates');
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Rules', 'popper'),
    icon: 'visibility',
    onClick: () => {
      setModalOpen('options');
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_settings_controls__WEBPACK_IMPORTED_MODULE_15__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: containerClass,
    style: modalStyle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, showCloseButton && 'edge' !== closeButtonAlignment && closeButton, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("main", {
    className: "wp-block-popper__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    templateLock: false,
    renderAppender: hasInnerBlocks ? undefined : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.ButtonBlockAppender, null)
  })))), 'templates' === isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_library__WEBPACK_IMPORTED_MODULE_13__.TemplatesModal, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: 'remote',
    onRequestClose: () => setModalOpen(false)
  }, props)), 'options' === isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_plugin_modal__WEBPACK_IMPORTED_MODULE_12__.RulesModal, {
    onRequestClose: closeModal
  }));
}

function Placeholder(props) {
  const {
    name,
    clientId,
    setAttributes
  } = props;
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/block-editor');
  const {
    getBlockVariations,
    getDefaultBlockVariation
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/blocks');
  const defaultVariation = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(() => {
    return typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation(props.name);
  }, [name]);
  const variations = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(() => {
    return getBlockVariations(name, 'block');
  }, [name]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_placeholder__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: 'external',
    label: 'Popup',
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a form to start with.', 'popper'),
    variations: variations,
    clientId: clientId,
    setAttributes: setAttributes,
    allowSkip: true,
    onSelect: function () {
      let nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;

      if (nextVariation.attributes) {
        setAttributes(nextVariation.attributes);
      }

      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(props.clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlocksFromInnerBlocksTemplate)(nextVariation.innerBlocks), true);
      }
    }
  }));
}

const PopperEdit = props => {
  const {
    clientId
  } = props;
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getBlock
    } = select('core/block-editor');
    const block = getBlock(clientId);
    return !!(block && block.innerBlocks.length);
  }, [clientId]);
  const Component = hasInnerBlocks ? Edit : Placeholder;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, props);
};

/* harmony default export */ __webpack_exports__["default"] = (PopperEdit);

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-serialization-default-parser */ "@wordpress/block-serialization-default-parser");
/* harmony import */ var _wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_8__);










const withAdvancedControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const allowedBlocks = ['core/image', 'core/button'];

    if (!allowedBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }

    const opts = [{
      value: null,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a popup', 'popper')
    }];

    const findById = val => {
      return popups.find(element => {
        return element.ID === val;
      });
    };

    const setAnchor = val => {
      let elm = findById(val);

      if (!elm) {
        return;
      }

      elm = (0,_wordpress_block_serialization_default_parser__WEBPACK_IMPORTED_MODULE_7__.parse)(elm.post_content);
      const attrs = elm[0].attrs;

      if ('anchor' === attrs.openBehaviour) {
        setAttributes({
          anchor: attrs.anchor
        });
      }
    };

    const addRule = val => {
      const post = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_8___default().models.Popper)({
        id: val
      });
      post.fetch().done(data => {
        post.setMeta('popper_rules', 'newValue');
        post.save({
          id: val
        });
      });
    };

    const popups = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
      return select('core').getEntityRecords('postType', 'popper', {
        per_page: -1
      });
    });

    if (popups !== null) {
      popups.forEach(post => {
        opts.push({
          value: post.id,
          label: post.title.raw
        });
      });
    }

    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      popper
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open popup'),
      value: popper,
      options: opts,
      onChange: val => {
        setAttributes({
          popper: val
        });
        setAnchor(val);
        addRule(val);
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open a popup on anchor click', 'popper')
    })));
  };
}, 'withAdvancedControls');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'formello/popper-advanced-control', withAdvancedControls);
/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */

function addAttributes(settings) {
  const allowedBlocks = ['core/image', 'core/button']; //check if object exists for old Gutenberg version compatibility

  if (allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      popper: {
        type: 'numeric',
        default: null
      }
    });
  }

  return settings;
}

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.registerBlockType', 'formello/popper-custom-attributes', addAttributes);

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.borderRadiusNone = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "118",
  stroke: "currentColor",
  width: "118",
  x: "-51",
  y: "-48",
  strokeWidth: "10"
})))));
icons.borderRadiusSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "118",
  rx: "2",
  stroke: "currentColor",
  width: "118",
  x: "-51",
  y: "-48",
  strokeWidth: "10"
})))));
icons.borderRadiusMedium = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "118",
  rx: "10",
  stroke: "currentColor",
  width: "118",
  x: "-51",
  y: "-48",
  strokeWidth: "10"
})))));
icons.borderRadiusLarge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "118",
  rx: "20",
  stroke: "currentColor",
  width: "118",
  x: "-51",
  y: "-48",
  strokeWidth: "10"
})))));
icons.borderRadiusXLarge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "118",
  rx: "50",
  stroke: "currentColor",
  width: "118",
  x: "-51",
  y: "-48",
  strokeWidth: "10"
})))));
icons.borderWidthNone = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16 16h68v68h-68z",
  fill: "none",
  transform: "matrix(1 0 0 1 2 2)"
}));
icons.borderWidthSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "68",
  stroke: "currentColor",
  width: "68",
  x: "16",
  y: "16"
})))));
icons.borderWidthMedium = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "68",
  stroke: "currentColor",
  width: "68",
  x: "16",
  y: "16",
  strokeWidth: "4"
})))));
icons.borderWidthLarge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "68",
  stroke: "currentColor",
  width: "68",
  x: "16",
  y: "16",
  strokeWidth: "6"
})))));
icons.borderWidthXLarge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "100",
  width: "100",
  x: "0",
  y: "0"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
  fill: "#fff"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  xlinkHref: "#path-1"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
  stroke: "#fff",
  strokeWidth: "3",
  xlinkHref: "#path-1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "68",
  stroke: "currentColor",
  width: "68",
  x: "16",
  y: "16",
  strokeWidth: "10"
})))));
icons.boxShadowNone = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16 16h68v68h-68z",
  fill: "#fff",
  stroke: "#000",
  transform: "matrix(1 0 0 1 2 2)",
  strokeWidth: "3"
}));
icons.boxShadowSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m12 13h68v68h-68z",
  fill: "#d8d8d8"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m6 7h68v68h-68z",
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "3"
})));
icons.boxShadowMedium = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m19 20h68v68h-68z",
  fill: "#d8d8d8"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m6 7h68v68h-68z",
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "3"
})));
icons.boxShadowLarge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m23 24h68v68h-68z",
  fill: "#d8d8d8"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m6 7h68v68h-68z",
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "3"
})));
icons.boxShadowXLarge = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 104 104"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  transform: "matrix(1 0 0 1 2 2)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32 32h68v68h-68z",
  fill: "#d8d8d8"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m6 7h68v68h-68z",
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "3"
})));
icons.borderWidth = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  fill: "currentColor",
  height: "20px",
  version: "1.1",
  viewBox: "0 0 24 24",
  width: "20px",
  x: "0px",
  y: "0px"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "content_040-no_border-table-cell-square"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("desc", null, "Created with Sketch."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none",
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "currentColor",
  transform: "matrix(1 0 0 1 -476 -188)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "matrix(1 0 0 1 477 189)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "0",
  y: "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "8",
  y: "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "4",
  y: "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "12",
  y: "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "0",
  y: "7"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "0",
  y: "3"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "20",
  y: "8"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "20",
  y: "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "20",
  y: "4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "0",
  y: "11"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "0",
  y: "15"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "0",
  y: "19"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "20",
  y: "12"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "2",
  width: "1",
  x: "20",
  y: "16"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "19",
  y: "20"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "3",
  y: "20"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "7",
  y: "20"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "11",
  y: "20"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "16",
  y: "0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  height: "1",
  width: "2",
  x: "15",
  y: "20"
})))));
icons.borderRadius = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "20px",
  viewBox: "0 0 66 66",
  width: "20px"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m457 596.97658v5.02342c0 .552285-.447715 1-1 1h-12c-.552285 0-1-.447715-1-1v-5h-14.996435c-6.077067 0-11.003565-4.926533-11.003565-11.003565v-37.99287c0-6.077067 4.926533-11.003565 11.003565-11.003565h37.99287c6.077067 0 11.003565 4.926533 11.003565 11.003565v14.996435h5c.552285 0 1 .447715 1 1v12c0 .552285-.447715 1-1 1h-5.023422c-.506685 10.803114-9.172511 19.469882-19.976578 19.97658zm-12 4.02342h10v-10h-10zm26-26h10v-10h-10zm-28 20v-5c0-.552285.447715-1 1-1h12c.552285 0 1 .447715 1 1v4.974104c9.699148-.5031 17.471015-8.275803 17.974102-17.974104h-4.974102c-.552285 0-1-.447715-1-1v-12c0-.552285.447715-1 1-1h5v-14.996435c0-4.972466-4.03107-9.003565-9.003565-9.003565h-37.99287c-4.972466 0-9.003565 4.03107-9.003565 9.003565v37.99287c0 4.972466 4.03107 9.003565 9.003565 9.003565z",
  transform: "matrix(1 0 0 1 -417 -537)",
  fillRule: "evenodd"
}));
icons.boxShadow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "20px",
  viewBox: "0 0 100 100",
  width: "20px",
  enableBackground: "new 0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m92.5 21.233h-13.733v-13.733c0-1.381-1.119-2.5-2.5-2.5h-68.767c-1.381 0-2.5 1.119-2.5 2.5v68.767c0 1.381 1.119 2.5 2.5 2.5h13.733v13.733c0 1.381 1.119 2.5 2.5 2.5h68.767c.164 0 .328-.017.489-.049.075-.015.145-.043.217-.064.084-.025.168-.044.249-.077.086-.036.164-.084.245-.129.062-.034.126-.061.185-.101.275-.183.51-.419.694-.694.039-.058.065-.122.099-.182.045-.082.094-.161.13-.248.033-.081.052-.165.077-.248.022-.073.05-.143.065-.219.033-.161.05-.325.05-.489v-68.767c0-1.38-1.119-2.5-2.5-2.5zm-82.5 52.534v-63.767h63.767v13.733 50.033h-50.034-13.733zm16.233 16.233v-7.698l7.699 7.698zm14.769 0-11.233-11.233h6.063l11.233 11.233zm13.133 0-11.233-11.233h6.063l11.233 11.233zm13.134 0-11.234-11.233h6.063l11.234 11.233zm13.133 0-11.234-11.233h6.063l11.234 11.233zm9.598-3.535-11.233-11.234v-6.063l11.233 11.234zm0-13.133-11.233-11.234v-6.063l11.233 11.234zm0-13.134-11.233-11.233v-6.063l11.233 11.233zm0-13.133-11.233-11.233v-6.063l11.233 11.233zm0-13.133-7.698-7.698h7.698z"
}));
icons.plugin = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "20px",
  viewBox: "0 0 100 100",
  width: "20px",
  enableBackground: "new 0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m27.751 67.15-.001-4.54-16.454.033c-3.027.017-5.475-2.431-5.478-5.47v-35.232c.003-3.014 2.451-5.462 5.453-5.462 1.313 0 2.521.469 3.441 1.225l15.019 15.069c1.434 1.484 2.331 3.479 2.318 5.568l-.033 20.008 4.595.026-.001-15.947c.011-2.975 2.459-5.423 5.51-5.43l16.99.028v-4.742l-19.718.03c-2.173 0-4.168-.897-5.582-2.264l-15.39-15.078c-1.075-.938-1.807-2.414-1.807-4.055 0-3.002 2.448-5.45 5.526-5.415h35.67c3.099-.035 5.548 2.413 5.544 5.212l.024 17.276 4.386.056-.01-11.806c-.002-3.042 2.519-5.49 5.442-5.49 1.37 0 2.638.538 3.672 1.435l10.798 10.549c.974.952 1.913 2.361 1.913 4.096 0 3.002-2.448 5.457-5.33 5.467l-12.163.043v4.658l16.678-.037c2.984-.007 5.433 2.419 5.418 5.451l-.011 35.698c-.001 3.088-2.445 5.537-5.447 5.537-1.595 0-2.99-.732-3.995-1.735l-14.585-14.56c-1.447-1.444-2.376-3.411-2.377-5.455l-.004-20.661-4.414.084.016 15.931c.015 2.96-2.433 5.4-5.411 5.392l-17.076-.047.004 4.596 19.44-.016c2.225-.002 4.206.933 5.57 2.301l15.985 16.035c.868.87 1.242 2.163 1.242 3.476 0 3.002-2.448 5.45-5.546 5.471l-35.508.041c-3.102.02-5.55-2.428-5.507-5.539l.068-17.508-4.598.029.023 11.997c.013 3.031-2.435 5.479-5.437 5.479-1.407 0-2.692-.538-3.642-1.401l-11.506-11.45c-.76-.919-1.215-2.126-1.187-3.44.063-3.002 2.448-5.45 5.331-5.482l12.135-.032m-.022-28.553c-.029-1.116-.492-2.146-1.173-2.829l-14.453-14.638c-.217-.23-.506-.36-.824-.36-.637 0-1.156.519-1.163 1.258v35.089c.008.726.527 1.245 1.213 1.233l16.429-.032zm30.179 19.754-16.997-.009-.004-15.875c.016-.652.535-1.171 1.199-1.183l16.983.033-.007 15.87c.011.657-.509 1.164-1.174 1.164zm20.542 29.772-15.306-15.381c-.709-.712-1.703-1.255-2.816-1.257l-19.44-.034-.035 17.565c-.039.688.481 1.207 1.101 1.192l35.763-.041c.594-.025 1.113-.544 1.113-1.181 0-.319-.128-.61-.38-.863zm-41.859-25.516-.005 4.515-4.553.053.017-4.515zm-8.824 20.809.01-11.91-12.062-.013c-.617.014-1.136.533-1.136 1.17 0 .318.13.607.33.829l10.697 10.625c.263.34.615.543 1.013.543.637-.001 1.156-.52 1.148-1.244zm31.303-72.658.019 17.284-19.526-.021c-1.164-.004-2.194-.467-2.942-1.164l-15.306-15.09c-.199-.104-.402-.456-.402-.854 0-.637.519-1.156 1.158-1.125h35.88c.598-.031 1.118.488 1.119.97zm8.7 26.237.028-4.63-4.414-.056v4.658zm17.168-10.999-10.825-10.723c-.162-.252-.514-.455-.912-.455-.637 0-1.156.519-1.152 1.203l.043 12.021 12.037-.038c.642-.022 1.161-.541 1.161-1.178.001-.318-.129-.607-.352-.83zm4.97 16.382c0-.637-.519-1.156-1.247-1.131l-16.597.014-.004 20.39c0 .834.51 1.821 1.194 2.514l14.571 14.741c.201.203.507.443.904.443.637 0 1.156-.519 1.157-1.168l.001-35.906",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
icons.button = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 16 16"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin/ */ "./src/plugin/index.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variations */ "./src/variations.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter */ "./src/filter.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/store/index.js");










const {
  name,
  attributes,
  supports
} = _block_json__WEBPACK_IMPORTED_MODULE_6__;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,
  icon: 'external',
  attributes,
  variations: _variations__WEBPACK_IMPORTED_MODULE_7__["default"],
  supports,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesModal": function() { return /* binding */ TemplatesModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);


/**
 * Import CSS
 */
//import './editor.scss';

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









function TemplatesModal(props) {
  const {
    onRequestClose,
    type,
    clientId,
    setAttributes
  } = props;
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const templates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('formello/popper-templates').getTemplates(), []);

  const updateTransient = () => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
      path: '/popper/v1/sync_template_library/',
      method: 'POST',
      data: {}
    });
  };

  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core/block-editor');

  const insertTemplate = (content, clientId, cb) => {
    const parsedBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.parse)(content);
    setAttributes(parsedBlocks[0].attributes);

    if (parsedBlocks.length) {
      replaceInnerBlocks(clientId, parsedBlocks[0].innerBlocks);
      cb(false);
    }
  };

  const getTemplates = type => {
    if (!templates) {
      return templates;
    }

    const result = [];
    templates.forEach(template => {
      let allow = !type; // type check.

      if (!allow && template.types) {
        template.types.forEach(typeData => {
          if (typeData.slug && type === typeData.slug) {
            allow = true;
          }
        });
      }

      if (allow) {
        result.push(template);
      }
    });
    return result;
  };

  const allTemplates = getTemplates(type);
  const showLoadingSpinner = loading || !allTemplates;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Popups', 'popper'),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('formello-plugin-templates-modal', 'formello-plugin-templates-modal-hide-header', showLoadingSpinner ? 'formello-plugin-templates-modal-loading' : ''),
    position: "top",
    isFullScreen: true,
    onRequestClose: onRequestClose
  }, showLoadingSpinner && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Spinner, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "formello-plugin-templates-categories-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "formello-plugin-templates-count"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  /* translators: Number of templates. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Templates: %s', 'popper'), `<strong>${allTemplates.length ? allTemplates.length : 0}</strong>`)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    isPrimary: true,
    onClick: updateTransient
  }, "Sync template")), allTemplates && !allTemplates.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, 'local' === type ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No templates found.', 'popper')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "components-button is-button is-primary",
    href: formello.templatesURL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add New', 'popper'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No templates found.', 'popper'))), allTemplates && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "popper-templates-list"
  }, allTemplates.map(template => {
    const withPreview = !!template.content;
    const templateTitle = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(template.title);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('formello-plugin-templates-list-item', 'formello-plugin-templates-list-item-no-thumb'),
      key: template.id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      role: "button",
      tabIndex: "0",
      onClick: () => {
        setLoading(true);

        if ('remote' === type && template.content) {
          insertTemplate(template.content, clientId, errorResponse => {
            if (errorResponse) {
              setError(errorResponse);
            } else {
              onRequestClose();
            }
          });
        } else {
          onRequestClose(template.id);
        }

        setLoading(false);
      }
    }, withPreview && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.BlockPreview, {
      blocks: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.parse)(template.content)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "formello-plugin-templates-list-item-title"
    }, templateTitle)));
  }))));
}

/***/ }),

/***/ "./src/placeholder.js":
/*!****************************!*\
  !*** ./src/placeholder.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library */ "./src/library.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







function BlockVariationPicker(_ref) {
  let {
    icon = _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose variation'),
    instructions = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a variation to start with.'),
    variations,
    onSelect,
    allowSkip,
    clientId,
    setAttributes
  } = _ref;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-editor-block-variation-picker', {
    'has-many-variations': variations.length > 4
  });
  const [isModalOpen, setModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    icon: icon,
    label: label,
    instructions: instructions,
    className: classes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "block-editor-block-variation-picker__variations",
    role: "list",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block variations', 'formello')
  }, variations.map(variation => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: variation.name
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSecondary: true,
    icon: variation.icon,
    iconSize: 48,
    onClick: () => onSelect(variation),
    className: "block-editor-block-variation-picker__variation",
    label: variation.description || variation.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-editor-block-variation-picker__variation-label",
    role: "presentation"
  }, variation.title)))), allowSkip && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-block-variation-picker__skip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "plugin-formello-panel-button is-large",
    isPrimary: true,
    onClick: () => {
      setModalOpen('templates');
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open Library', 'formello')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isLink: true,
    onClick: () => onSelect()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Skip', 'formello'))), 'templates' === isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_library__WEBPACK_IMPORTED_MODULE_4__.TemplatesModal, {
    type: 'remote',
    onRequestClose: () => setModalOpen(false),
    clientId: clientId,
    setAttributes: setAttributes
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockVariationPicker);

/***/ }),

/***/ "./src/plugin/conditions.js":
/*!**********************************!*\
  !*** ./src/plugin/conditions.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Rules; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function Rules(props) {
  const {
    type,
    rule,
    index,
    onChange
  } = props;
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select('core').getEntityRecords('postType', type, {
      per_page: -1
    });
  });
  let postNames = [];
  let postsFieldValue = [];
  const selectedObjects = rule.object;

  if (posts !== null) {
    postNames = posts.map(post => post.title.raw);
    postsFieldValue = selectedObjects.map(postId => {
      const wantedPost = posts.find(post => {
        return post.id === parseInt(postId);
      });

      if (wantedPost === undefined || !wantedPost) {
        return false;
      }

      return wantedPost.title.raw;
    }).filter(p => !!p);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Selected ', 'popper') + type,
    value: postsFieldValue,
    suggestions: postNames,
    onChange: selectedObjects => {
      // Build array of selected objects.
      const selectedObjectsArray = [];
      selectedObjects.forEach(postName => {
        const matchingPost = posts.find(post => {
          return post.title.raw === postName;
        });

        if (matchingPost !== undefined) {
          selectedObjectsArray.push(matchingPost.id);
        }
      });
      onChange('object', selectedObjectsArray, index);
    },
    maxSuggestions: 5
  });
}

/***/ }),

/***/ "./src/plugin/index.js":
/*!*****************************!*\
  !*** ./src/plugin/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ "./src/plugin/modal.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);










const Component = () => {
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('core/editor').getCurrentPostType(), []);
  const [isModalOpen, setModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  if ('popper' !== postType) {
    return false;
  }

  const closeModal = () => setModalOpen(false);

  const formelloInstalled = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockTypes)().filter(block => {
    return block.name.indexOf('formello/form') !== -1;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__.PluginDocumentSettingPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Display Rules', 'popper'),
    icon: () => '',
    opened: true,
    name: "popper-display"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isPrimary: true,
    onClick: () => {
      setModalOpen(true);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Conditions', 'popper'))), !formelloInstalled.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('To take full advantage of Popper and start collecting leads, we suggest using our Formello plugin.'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isPrimary: true,
    href: window.popper.installLink
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Install form', 'popper'))), isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_modal__WEBPACK_IMPORTED_MODULE_6__.RulesModal, {
    onRequestClose: closeModal
  }));
};

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)('popper-display', {
  render: Component
});

/***/ }),

/***/ "./src/plugin/modal.js":
/*!*****************************!*\
  !*** ./src/plugin/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesModal": function() { return /* binding */ RulesModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ "./src/plugin/select.js");
/* harmony import */ var _user_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-select */ "./src/plugin/user-select.js");








function RulesModal(props) {
  const {
    onRequestClose
  } = props;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core/editor').getCurrentPostType(), []);
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', postType, 'meta');
  const rulesMeta = meta.popper_rules;
  const [rules, setRules] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(rulesMeta);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('location');

  const addRule = () => {
    let joined;

    if ('user' === activeTab) {
      joined = rules[activeTab].concat('');
    } else {
      joined = rules[activeTab].concat({
        rule: '',
        object: []
      });
    }

    setRules({ ...rules,
      [activeTab]: joined
    });
  };

  const onChange = (prop, val, index) => {
    // 1. Make a shallow copy of the items
    const items = [...rules[activeTab]]; // 2. Make a shallow copy of the item you want to mutate

    let item = { ...rules[activeTab][index]
    }; // 3. Replace the property you're intested in

    if (!prop) {
      item = val;
    } else {
      item[prop] = val;
    } // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first


    items[index] = item; // 5. Set the state to our new copy

    setRules({ ...rules,
      [activeTab]: items
    });
    setMeta({ ...meta,
      popper_rules: rules
    });
  };

  const updateMetaValue = () => {
    setMeta({ ...meta,
      popper_rules: rules
    });
    onRequestClose();
  };

  const onSelect = tabName => {
    setActiveTab(tabName);
  };

  const onDelete = index => {
    const items = [...rules[activeTab]];
    items.splice(index, 1);
    setRules({ ...rules,
      [activeTab]: items
    });
    setMeta({ ...meta,
      popper_rules: rules
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rules', 'popper'),
    onRequestClose: updateMetaValue,
    className: 'popper-modal-rule'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    onSelect: onSelect,
    tabs: [{
      name: 'location',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Location', 'popper')),
      description: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose where you want display this popup.', 'popper'))
    }, {
      name: 'exclude',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude', 'popper')),
      description: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Choose where you don't want display this popup.", 'popper'))
    }, {
      name: 'user',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Users', 'popper')),
      description: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose which user will see this popup.', 'popper'))
    }]
  }, tabData => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, tabData.title), tabData.description, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, rules[activeTab].map((r, i) => {
      const Component = 'user' === tabData.name ? _user_select__WEBPACK_IMPORTED_MODULE_6__.UserSelect : _select__WEBPACK_IMPORTED_MODULE_5__.Select;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
        onChange: onChange,
        onDelete: onDelete,
        rule: r,
        index: i,
        key: i
      });
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      isPrimary: true,
      onClick: addRule,
      className: 'popper-modal-button'
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add rule', 'popper')));
  }));
}

/***/ }),

/***/ "./src/plugin/select.js":
/*!******************************!*\
  !*** ./src/plugin/select.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": function() { return /* binding */ Select; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conditions */ "./src/plugin/conditions.js");





function Select(props) {
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const supported = ['post', 'taxonomy'];
  const {
    index,
    onDelete,
    rule
  } = props;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOptions(window.popper.positions);
  }, []);

  const getType = () => {
    let locationType = '';

    if (rule.rule.indexOf(':taxonomy:') > 0) {
      locationType = 'taxonomy';
    } else {
      locationType = rule.rule.substr(0, rule.rule.indexOf(':'));
    }

    return locationType;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    align: "start",
    justify: "start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-form-token-field__label",
    htmlFor: "select"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Where', 'popper')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    onChange: val => {
      props.onChange('rule', val.target.value, index);
    },
    value: rule.rule,
    className: "components-select-control__input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select one…', 'popper')), Object.keys(options).map((key, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
      label: options[key].label,
      key: i
    }, Object.keys(options[key].locations).map(opt => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: opt,
        key: opt
      }, options[key].locations[opt]);
    }));
  }))), supported.includes(getType()) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    isBlock: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_conditions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: props.onChange,
    selectedCategories: [],
    type: rule.rule.substr(rule.rule.lastIndexOf(':') + 1),
    rule: rule,
    index: index
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "popper-modal-button",
    icon: "no",
    isSmall: true,
    onClick: () => {
      onDelete(index);
    }
  })));
}

/***/ }),

/***/ "./src/plugin/user-select.js":
/*!***********************************!*\
  !*** ./src/plugin/user-select.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSelect": function() { return /* binding */ UserSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




function UserSelect(props) {
  const [users, setUsersConditions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    index,
    onDelete
  } = props;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setUsersConditions(window.popper.users);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    align: "start",
    justify: "start",
    className: "popper-modal-rule"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-form-token-field__label",
    htmlFor: "select"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('User', 'popper')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    onChange: val => {
      props.onChange(undefined, val.target.value, index);
    },
    value: props.rule,
    className: "components-select-control__input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select one…', 'popper')), Object.keys(users).map((key, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
      label: users[key].label,
      key: i
    }, Object.keys(users[key].rules).map(opt => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: opt,
        key: opt
      }, users[key].rules[opt]);
    }));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    align: "center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "popper-modal-button",
    icon: "no",
    onClick: () => {
      onDelete(index);
    }
  })));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




function save(_ref) {
  let {
    attributes,
    className
  } = _ref;
  const {
    width,
    anchor,
    target,
    waitTime,
    offset,
    openBehaviour,
    backgroundColor,
    closeButtonColor,
    closeButtonSize,
    closeButtonAlignment,
    borderRadius,
    boxShadow,
    overlayColor,
    closeAnchor,
    closeOnClickOutside,
    closeOnAnchorClick,
    closeOnFormSubmission,
    dismissForVisitors,
    dismissPeriod,
    showCloseButton,
    pageviews,
    animation,
    align,
    fullPage,
    uuid
  } = attributes;
  const modalStyle = {
    width,
    borderRadius,
    backgroundColor
  };
  const closeButtonStyle = {
    color: closeButtonColor,
    fontSize: closeButtonSize,
    width: closeButtonSize,
    height: closeButtonSize
  };

  if ('outside' === closeButtonAlignment) {
    closeButtonStyle.top = (closeButtonSize + 4) * -1;
    closeButtonStyle.right = 0;
  }

  const popperClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-popper', className, {
    'wp-block-popper--right': align.includes('right'),
    'wp-block-popper--left': align.includes('left'),
    'wp-block-popper--top': align.includes('top'),
    'wp-block-popper--bottom': align.includes('bottom')
  });
  const containerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-popper__container', boxShadow, {
    'wp-block-popper__animate': !!animation,
    wide: fullPage
  });

  if (animation) {
    modalStyle['--popper-animation'] = animation;
  }

  const closeButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "wp-block-popper__close",
    "aria-label": "Close modal",
    style: closeButtonStyle
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    "data-open": openBehaviour,
    "data-anchor": openBehaviour === 'anchor' ? anchor : '',
    "data-target": openBehaviour === 'target' ? target : '',
    "data-anchorclose": closeOnAnchorClick ? closeAnchor : '',
    "data-time": openBehaviour === 'load' ? waitTime : '',
    "data-dismiss": dismissForVisitors ? dismissPeriod : '',
    "data-offset": openBehaviour === 'scroll' ? offset : '',
    "data-pagenum": openBehaviour === 'pageviews' ? pageviews : '',
    "data-outside": closeOnClickOutside,
    "data-form": closeOnFormSubmission,
    "data-created": uuid,
    id: 'modal-' + uuid,
    "aria-hidden": "true",
    className: popperClass
  }, showCloseButton && 'edge' === closeButtonAlignment && closeButton, 'center center' === align && !fullPage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wp-block-popper__overlay",
    tabIndex: "-1",
    style: {
      backgroundColor: overlayColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: containerClass,
    style: modalStyle
  }), {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-title"
  }), showCloseButton && 'edge' !== closeButtonAlignment && closeButton, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("main", {
    className: "wp-block-popper__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./src/settings/appearance.js":
/*!************************************!*\
  !*** ./src/settings/appearance.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);





const Appearance = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    width,
    backgroundColor,
    closeButtonColor,
    borderRadius,
    overlayColor,
    animation
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'popper'),
    initialOpen: false,
    colorSettings: [{
      value: backgroundColor,
      onChange: color => setAttributes({
        backgroundColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'popper')
    }, {
      value: overlayColor,
      onChange: color => setAttributes({
        overlayColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overlay Color', 'popper'),
      enableAlpha: true
    }, {
      value: closeButtonColor,
      onChange: color => setAttributes({
        closeButtonColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close Button Color', 'popper')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modal Appearance', 'popper'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: borderRadius,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popup Border Radius', 'popper'),
    onChange: val => {
      setAttributes({
        borderRadius: val
      });
    },
    allowReset: true,
    min: 0,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: width,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popup Min Width', 'popper'),
    onChange: val => {
      setAttributes({
        width: val
      });
    },
    allowReset: true,
    min: 50,
    max: 1000
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Animation', 'popper'),
    value: animation,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'popper'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide in Top', 'popper'),
      value: 'slide-in-top'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide in Bottom', 'popper'),
      value: 'slide-in-bottom'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide in Right', 'popper'),
      value: 'slide-in-right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slide in Left', 'popper'),
      value: 'slide-in-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unfold In', 'popper'),
      value: 'unfoldIn'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Puff In', 'popper'),
      value: 'puff-in'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Puff In Back', 'popper'),
      value: 'puff-in-back'
    }],
    onChange: val => setAttributes({
      animation: val
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Appearance);

/***/ }),

/***/ "./src/settings/button.js":
/*!********************************!*\
  !*** ./src/settings/button.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Button = props => {
  const {
    attributes: {
      closeButtonSize,
      closeButtonAlignment
    },
    setAttributes
  } = props;
  const options = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inside', 'popper'),
    value: 'inside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Outside', 'popper'),
    value: 'outside'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edge of screen', 'popper'),
    value: 'edge'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'popper'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: closeButtonSize,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close Icon Size', 'popper'),
    onChange: val => {
      setAttributes({
        closeButtonSize: val
      });
    },
    allowReset: true,
    min: 12,
    max: 40
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button position', 'popper'),
    onChange: val => setAttributes({
      closeButtonAlignment: val
    }),
    selected: closeButtonAlignment,
    options: options
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/settings/close-behaviour.js":
/*!*****************************************!*\
  !*** ./src/settings/close-behaviour.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const CloseBehaviour = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    showCloseButton,
    closeOnClickOutside,
    closeOnFormSubmission,
    closeOnAnchorClick,
    closeAnchor,
    dismissForVisitors,
    dismissPeriod
  } = attributes;

  const changeAttribute = (slug, val) => {
    setAttributes({
      [slug]: val
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close Behaviour', 'popper')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Close Button', 'popper'),
    checked: showCloseButton,
    onChange: value => changeAttribute('showCloseButton', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close On Click Outside', 'popper'),
    checked: closeOnClickOutside,
    onChange: value => changeAttribute('closeOnClickOutside', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close after form submission', 'popper'),
    checked: closeOnFormSubmission,
    onChange: value => changeAttribute('closeOnFormSubmission', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close On Anchor Click', 'popper'),
    checked: closeOnAnchorClick,
    onChange: value => changeAttribute('closeOnAnchorClick', value)
  })), closeOnAnchorClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: closeAnchor,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Anchor', 'popper'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can add anchors to button blocks. Using the same anchor here will close the modal when you click the respective button.', 'popper')),
    onChange: value => changeAttribute('closeAnchor', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dismiss for Recurrent Visitors', 'popper'),
    checked: dismissForVisitors,
    onChange: value => changeAttribute('dismissForVisitors', value)
  })), dismissForVisitors && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: dismissPeriod,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of Days Until the Notice is Shown again', 'popper'),
    onChange: val => {
      setAttributes({
        dismissPeriod: val
      });
    },
    min: 0,
    max: 100
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CloseBehaviour);

/***/ }),

/***/ "./src/settings/controls.js":
/*!**********************************!*\
  !*** ./src/settings/controls.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Controls; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./src/icons.js");


/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */





function Controls(props) {
  const {
    setAttributes,
    attributes: {
      borderRadius,
      boxShadow,
      align,
      fullPage
    }
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalBlockAlignmentMatrixControl, {
    value: align,
    onChange: val => setAttributes({
      align: val
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'popper')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalBlockFullHeightAligmentControl, {
    isActive: fullPage,
    onToggle: () => setAttributes({
      fullPage: !fullPage
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarDropdownMenu, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].boxShadow,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box shadow', 'popper'),
    controls: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'popper'),
      title: 'None',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].boxShadowNone,
      isActive: boxShadow === 'wp-block-popper__shadow-none' ? true : false,
      onClick: () => setAttributes({
        boxShadow: 'wp-block-popper__shadow-none'
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small', 'popper'),
      title: 'Small',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].boxShadowSmall,
      isActive: boxShadow === 'wp-block-popper__shadow-sm' ? true : false,
      onClick: () => setAttributes({
        boxShadow: 'wp-block-popper__shadow-sm'
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Medium', 'popper'),
      title: 'Medium',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].boxShadowMedium,
      isActive: boxShadow === 'wp-block-popper__shadow-md' ? true : false,
      onClick: () => setAttributes({
        boxShadow: 'wp-block-popper__shadow-md'
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large', 'popper'),
      title: 'Large',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].boxShadowLarge,
      isActive: boxShadow === 'wp-block-popper__shadow-lg' ? true : false,
      onClick: () => setAttributes({
        boxShadow: 'wp-block-popper__shadow-lg'
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('X-Large', 'popper'),
      title: 'X-Large',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].boxShadowXLarge,
      isActive: boxShadow === 'wp-block-popper__shadow-xl' ? true : false,
      onClick: () => setAttributes({
        boxShadow: 'wp-block-popper__shadow-xl'
      })
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarDropdownMenu, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadius,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border radius', 'popper'),
    controls: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'popper'),
      title: 'None',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadiusNone,
      isActive: borderRadius === 0 ? true : false,
      onClick: () => setAttributes({
        borderRadius: 0
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small', 'popper'),
      title: 'Small',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadiusSmall,
      isActive: borderRadius === 20 ? true : false,
      onClick: () => setAttributes({
        borderRadius: 2
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Medium', 'popper'),
      title: 'Medium',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadiusMedium,
      isActive: borderRadius === 4 ? true : false,
      onClick: () => setAttributes({
        borderRadius: 4
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large', 'popper'),
      title: 'Large',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadiusLarge,
      isActive: borderRadius === 8 ? true : false,
      onClick: () => setAttributes({
        borderRadius: 8
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('X-Large', 'popper'),
      title: 'X-Large',
      icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].borderRadiusXLarge,
      isActive: borderRadius === 24 ? true : false,
      onClick: () => setAttributes({
        borderRadius: 24
      })
    }]
  }))));
}

/***/ }),

/***/ "./src/settings/open-behaviour.js":
/*!****************************************!*\
  !*** ./src/settings/open-behaviour.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const OpenBehaviour = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    openBehaviour,
    anchor,
    waitTime,
    offset,
    target,
    pageviews
  } = attributes;

  const handleChangeOpenBehaviour = value => {
    setAttributes({
      openBehaviour: value
    });
  };

  const updateAnchor = val => {
    setAttributes({
      anchor: val
    });
  };

  const updateTarget = val => {
    setAttributes({
      target: val
    });
  };

  const updateWaitTime = val => {
    setAttributes({
      waitTime: val
    });
  };

  const updateScrollOffset = val => {
    setAttributes({
      offset: val
    });
  };

  const updatePageViews = val => {
    setAttributes({
      pageviews: val
    });
  };

  const options = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Timer', 'popper'),
    value: 'load'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Anchor Click', 'popper'),
    value: 'anchor'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Target Visibility', 'popper'),
    value: 'target'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Scroll', 'popper'),
    value: 'scroll'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Page Views', 'popper'),
    value: 'pageviews'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Exit Intent', 'popper'),
    value: 'exit'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open Behaviour', 'popper')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    onChange: handleChangeOpenBehaviour,
    selected: openBehaviour,
    options: options
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, openBehaviour === 'anchor' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: anchor,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Anchor', 'popper'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can add anchors to button blocks. Using the same anchor here will open the popup when you click the respective button.', 'popper')),
    onChange: updateAnchor
  }), openBehaviour === 'target' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: target,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Target', 'popper'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show a popup when element with this anchor enter in viewport.', 'popper')),
    onChange: updateTarget
  }), openBehaviour === 'scroll' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scroll Distance in Percent', 'popper'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show the popup when this percentage of the page has been scrolled.')),
    beforeIcon: "image-flip-vertical",
    value: offset,
    onChange: updateScrollOffset,
    min: 0,
    max: 100
  }), openBehaviour === 'pageviews' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of pages', 'popper'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show the popup when this number of pages has been visited.')),
    beforeIcon: "visibility",
    value: pageviews,
    onChange: updatePageViews,
    min: 0,
    max: 100
  }), openBehaviour === 'load' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wait Time in Seconds', 'popper'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('How much time to wait before showing the popup.')),
    beforeIcon: "clock",
    value: waitTime,
    onChange: updateWaitTime,
    min: 0,
    max: 100
  }), openBehaviour === 'exit' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shows the popup when the user moves the mouse outside of the top of the window', 'popper'))));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenBehaviour);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/store/templates/index.js");
/**
 * Internal dependencies
 */


/***/ }),

/***/ "./src/store/templates/actions.js":
/*!****************************************!*\
  !*** ./src/store/templates/actions.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiFetch": function() { return /* binding */ apiFetch; },
/* harmony export */   "setTemplates": function() { return /* binding */ setTemplates; },
/* harmony export */   "setTemplateData": function() { return /* binding */ setTemplateData; }
/* harmony export */ });
function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request
  };
}
function setTemplates(templates) {
  return {
    type: 'SET_TEMPLATES',
    templates
  };
}
function setTemplateData(data) {
  return {
    type: 'SET_TEMPLATE_DATA',
    data
  };
}

/***/ }),

/***/ "./src/store/templates/controls.js":
/*!*****************************************!*\
  !*** ./src/store/templates/controls.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_FETCH": function() { return /* binding */ API_FETCH; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function API_FETCH(_ref) {
  let {
    request
  } = _ref;
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(request).then(fetchedData => {
    if (fetchedData && fetchedData.success && fetchedData.response) {
      return fetchedData.response;
    }

    return false;
  });
}

/***/ }),

/***/ "./src/store/templates/index.js":
/*!**************************************!*\
  !*** ./src/store/templates/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/store/templates/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/store/templates/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/store/templates/actions.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./src/store/templates/controls.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers */ "./src/store/templates/resolvers.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('formello/popper-templates', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_4__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_5__
});

/***/ }),

/***/ "./src/store/templates/reducer.js":
/*!****************************************!*\
  !*** ./src/store/templates/reducer.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function reducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    templates: false,
    templatesData: {}
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEMPLATES':
      if (!state.templates && action.templates) {
        state.templates = action.templates;
      }

      break;

    case 'SET_TEMPLATE_DATA':
      if (action.templatesData && action.templatesData.id && !state.templatesData[action.templatesData.id]) {
        state.templatesData[action.templatesData.id] = action.templatesData;
      }

      break;
    // no default
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/store/templates/resolvers.js":
/*!******************************************!*\
  !*** ./src/store/templates/resolvers.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplates": function() { return /* binding */ getTemplates; },
/* harmony export */   "getTemplateData": function() { return /* binding */ getTemplateData; }
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/templates/actions.js");
/**
 * Internal dependencies
 */

function* getTemplates() {
  const query = '/popper/v1/get_templates';
  const templates = yield _actions__WEBPACK_IMPORTED_MODULE_0__.apiFetch({
    path: query
  });
  return _actions__WEBPACK_IMPORTED_MODULE_0__.setTemplates(templates);
}
function* getTemplateData(id) {
  const query = `/popper/v1/get_template_data/?id=${id}`;
  const data = yield _actions__WEBPACK_IMPORTED_MODULE_0__.apiFetch({
    path: query
  });

  if (!data.id) {
    data.id = id;
  }

  return _actions__WEBPACK_IMPORTED_MODULE_0__.setTemplateData(data);
}

/***/ }),

/***/ "./src/store/templates/selectors.js":
/*!******************************************!*\
  !*** ./src/store/templates/selectors.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplates": function() { return /* binding */ getTemplates; },
/* harmony export */   "getTemplateData": function() { return /* binding */ getTemplateData; }
/* harmony export */ });
function getTemplates(state) {
  return state.templates;
}
function getTemplateData(state, id) {
  return state.templatesData[id];
}

/***/ }),

/***/ "./src/variations.js":
/*!***************************!*\
  !*** ./src/variations.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const variations = [{
  name: 'simple',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic popup'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
  })),
  innerBlocks: [['core/heading', {
    content: 'My modal'
  }]],
  scope: ['block']
}, {
  name: 'With image',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left Image'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image on the left'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"
  })),
  innerBlocks: [['core/media-text', {
    mediaPosition: 'left',
    verticalAlignment: 'center',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'
  }, [['core/heading', {
    textAlign: 'center',
    placeholder: 'Your claim...',
    fontSize: 'large',
    content: '30% off coupon'
  }], ['core/paragraph', {
    align: 'center',
    placeholder: 'Your claim...',
    content: "If you're looking for a new way to promote your business."
  }], ['core/buttons', {
    layout: {
      type: 'flex',
      justifyContent: 'center'
    }
  }, [['core/button', {
    text: 'SHOP NOW',
    style: {
      color: {
        background: '#28a7d9'
      }
    }
  }]]]]]],
  scope: ['block']
}, {
  name: 'button',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('With buttons'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Popup with buttons and image'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"
  })),
  innerBlocks: [['core/group', {
    style: {
      color: {
        background: '#fff'
      }
    }
  }, [['core/image', {
    align: 'center',
    width: 234,
    height: 291,
    url: 'https://www.pngfind.com/pngs/m/525-5253539_3d-book-template-1-ebook-image-png-transparent.png'
  }, []], ['core/heading', {
    textAlign: 'center',
    placeholder: 'Your claim...',
    fontSize: 'large',
    content: 'My secret SEO strategy'
  }], ['core/paragraph', {
    align: 'center',
    placeholder: 'Your claim...',
    content: "If you're looking for a fast way to rank high on Google."
  }], ['core/buttons', {
    layout: {
      type: 'flex',
      justifyContent: 'center',
      orientation: 'vertical'
    }
  }, [['core/button', {
    text: 'DOWNLOAD NOW',
    style: {
      color: {
        background: '#28a7d9'
      }
    }
  }], ['core/button', {
    text: 'No thanks',
    style: {
      color: {
        background: '#fff',
        text: '#000'
      }
    }
  }]]]]]],
  scope: ['block']
}];
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/block-serialization-default-parser":
/*!*********************************************************!*\
  !*** external ["wp","blockSerializationDefaultParser"] ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockSerializationDefaultParser"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"formello/popper","title":"Pop up","category":"widgets","description":"A great popup block.","textdomain":"popper","supports":{"html":false,"multiple":false,"className":false,"reusable":false,"spacing":{"padding":true,"margin":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}}},"attributes":{"lock":{"type":"object","default":{"move":true,"remove":true}},"align":{"type":"string","default":"center center"},"fullPage":{"type":"boolean","default":false},"width":{"type":"number","default":500},"waitTime":{"type":"number","default":1},"offset":{"type":"number","default":20},"openBehaviour":{"type":"string","default":"load"},"showCloseButton":{"type":"boolean","default":true},"closeButtonAlignment":{"type":"string","default":"inside"},"closeButtonSize":{"type":"number","default":20},"animation":{"type":"string"},"borderRadius":{"type":"number","default":4},"boxShadow":{"type":"string","default":"wp-block-popper__shadow-md"},"closeOnClickOutside":{"type":"boolean","default":true},"closeOnAnchorClick":{"type":"boolean","default":false},"closeOnFormSubmission":{"type":"boolean","default":false},"closeAnchor":{"type":"string"},"anchor":{"type":"string","default":""},"target":{"type":"string","default":""},"backgroundColor":{"type":"string","default":"#ffffff"},"closeButtonColor":{"type":"string","default":"#000000"},"overlayColor":{"type":"string"},"gradientBackground":{"type":"string"},"dismissForVisitors":{"type":"boolean","default":true},"dismissPeriod":{"type":"number","default":1},"pageviews":{"type":"number","default":3},"uuid":{"type":"number","default":null}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","viewScript":"file:./build/frontend.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpopper"] = self["webpackChunkpopper"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map