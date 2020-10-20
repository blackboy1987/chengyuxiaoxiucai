require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/game/index"],{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
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

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/components/Popup/PopupRank/index.css":
/*!**************************************************!*\
  !*** ./src/components/Popup/PopupRank/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Popup/PopupRank/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/Popup/PopupRank/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/Popup/PopupRank/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Popup */ "./src/components/Popup/index.tsx");
/* harmony import */ var _util_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/util/request */ "./src/util/request.ts");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var PopupRank = /*#__PURE__*/function (_React$Component) {
  _inherits(PopupRank, _React$Component);

  var _super = _createSuper(PopupRank);

  function PopupRank() {
    var _this;

    _classCallCheck(this, PopupRank);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      jobList: [],
      currentJobRank: 2
    });

    return _this;
  }

  _createClass(PopupRank, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_util_request__WEBPACK_IMPORTED_MODULE_5__["default"])("api/job_rank/list", function (res) {
        var _res$data = res.data,
            data = _res$data === void 0 ? [] : _res$data;

        _this2.setState({
          jobList: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          onClose = _this$props.onClose;
      var _this$state = this.state,
          jobList = _this$state.jobList,
          currentJobRank = _this$state.currentJobRank;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        visible: visible,
        onClose: onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
        className: "list-popup-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        className: "list-popup-title",
        src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_6__["default"].resourceUrl, "/image/popup/gzdj-bj-gzdj@2x.png")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["ScrollView"], {
        scrollY: true,
        className: "list-scroll-list"
      }, jobList.map(function (job) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
          className: "list-scroll-item",
          key: job.level
        }, job.level < currentJobRank ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          className: "list-item-bg",
          src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_6__["default"].resourceUrl, "/image/popup/gzdj-iocn-ytg@2x.png")
        }) : null, job.level === currentJobRank ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          className: "list-item-bg",
          src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_6__["default"].resourceUrl, "/image/popup/gzdj-iocn-zjx@2x.png")
        }) : null, job.level > currentJobRank ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          className: "list-item-bg",
          src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_6__["default"].resourceUrl, "/image/popup/gzdj-iocn-wwc@2x.png")
        }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('list-item-content', job.level < currentJobRank ? 'blue' : job.level === currentJobRank ? 'yellow' : 'grey')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
          className: "list-item-name"
        }, job.name), job.level !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
          className: "list-item-round"
        }, "\u5B8C\u6210\u7B2C", job.level, "\u5173") : null));
      }))));
    }
  }]);

  return PopupRank;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PopupRank);

/***/ }),

/***/ "./src/components/Popup/index.css":
/*!****************************************!*\
  !*** ./src/components/Popup/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Popup/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Popup/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/Popup/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);




var Popup = function Popup(_ref) {
  var onClose = _ref.onClose,
      visible = _ref.visible,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "list-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "popup-container"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    onTap: onClose,
    className: "close-btn-container",
    hoverClassName: "btn-click",
    hoverStartTime: 0,
    hoverStayTime: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "close-btn",
    src: "http://chengyuxiaoxiucai.i-gomall.com/addons/yf_chengyujiekong/resource/image/word/cyjs-defauit-fh@2x.png"
  })))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./src/pages/game/index.css":
/*!**********************************!*\
  !*** ./src/pages/game/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/game/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/game/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/pages/game/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Popup_PopupRank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Popup/PopupRank */ "./src/components/Popup/PopupRank/index.tsx");
/* harmony import */ var _util_audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/audio */ "./src/util/audio.ts");
/* harmony import */ var _util_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/util/request */ "./src/util/request.ts");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/util/utils */ "./src/util/utils.ts");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var _page = function _page() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      gameBoxes = _useState2[0],
      setGameBoxes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      currentKey = _useState4[0],
      setCurrentKey = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      currentKeys = _useState6[0],
      setCurrentKeys = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      answer = _useState8[0],
      setAnswer = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState10 = _slicedToArray(_useState9, 2),
      isShakeBtn1 = _useState10[0],
      setIsShakeBtn1 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState12 = _slicedToArray(_useState11, 2),
      isShakeBtn2 = _useState12[0],
      setIsShakeBtn2 = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      popupRank = _useState14[0],
      setPopupRank = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState16 = _slicedToArray(_useState15, 2),
      idioms = _useState16[0],
      setIdioms = _useState16[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {
    load(4);
  });

  var load = function load(id) {
    Object(_util_request__WEBPACK_IMPORTED_MODULE_7__["default"])("api/game/level", function (res) {
      var data = res.data;
      initAnswer(data.answer);
      initGameBox(data.gameBoxes);
      setIdioms(data.idioms);
    }, {
      data: {
        id: id
      }
    });
  };

  var initAnswer = function initAnswer(dataAnswer) {
    var newAnswer = dataAnswer.map(function (item) {
      return {
        text: item,
        style: ''
      };
    });
    setAnswer(newAnswer);
  };

  var initGameBox = function initGameBox(dataGameBox) {
    var newCurrentKey = '';
    var newCurrentKeys = [];
    var newGameBoxes = (dataGameBox || [[]]).map(function (rowItem, index) {
      var newRowItem = (rowItem || []).map(function (item, index1) {
        var newItem = _objectSpread(_objectSpread({}, item), {}, {
          x: index,
          y: index1
        });

        var style = '';

        if (newItem.show && !newItem.canSelect && !newItem.ans) {
          style = "game_box space block";
        }

        if (!newItem.show && !newItem.canSelect) {
          style = "game_box";
        }

        if (newItem.canSelect && newItem.show && newItem.ans) {
          if (!newCurrentKey) {
            newCurrentKey = "".concat(index, "_").concat(index1);
          }

          newCurrentKeys.push("".concat(index, "_").concat(index1));
          style = "game_box space";
        }

        if (currentKey === "".concat(index, "_").concat(index1)) {
          style = style + " active";
        }

        newItem.style = style;
        return newItem;
      });
      return newRowItem;
    });
    setGameBoxes(newGameBoxes);
    setCurrentKeys(newCurrentKeys);
    setCurrentKey(newCurrentKey);
  };

  var animationEnd1 = function animationEnd1() {
    setIsShakeBtn1(false);
    setTimeout(function () {
      setIsShakeBtn2(true);
    }, 600);
  };

  var animationEnd2 = function animationEnd2() {
    setIsShakeBtn2(false);
    setTimeout(function () {
      setIsShakeBtn1(true);
    }, 600);
  };

  var showPopupRank = function showPopupRank(flag) {
    _util_audio__WEBPACK_IMPORTED_MODULE_6__["default"].playAudio("btnClick");
    setPopupRank(!!flag);
  };

  var selectBox = function selectBox(rowId, columnId, item) {
    if (item.show && item.canSelect && !item.isSuccess) {
      _util_audio__WEBPACK_IMPORTED_MODULE_6__["default"].playAudio("changeBox");
      setCurrentKey("".concat(rowId, "_").concat(columnId)); // 如果有这个值，去掉

      if (item.text) {
        toggleAnswer(item.text, '');
        toggleGameBox(rowId, columnId, '');
        var newCurrentKeys = [].concat(_toConsumableArray(currentKeys), ["".concat(rowId, "_").concat(columnId)]);
        newCurrentKeys = Object(_util_utils__WEBPACK_IMPORTED_MODULE_8__["filterArray"])(newCurrentKeys);
        newCurrentKeys.sort(function (a, b) {
          return a.localeCompare(b);
        });
        setCurrentKeys(newCurrentKeys);
      }
    }
  };
  /**
   * 选择下面的词语
   * @param ans
   */


  var selectWord = function selectWord(ans) {
    if (ans.style === "selected") {
      return;
    }

    var rowId = parseInt(currentKey.split("_")[0], 10);
    var columnId = parseInt(currentKey.split("_")[1], 10);
    toggleAnswer(ans.text, 'selected');
    var newGameBoxes = toggleGameBox(rowId, columnId, ans.text);
    updateCurrentKey();
    _util_audio__WEBPACK_IMPORTED_MODULE_6__["default"].playAudio("selectWord"); // 检查刚才这个词填充的周围是否有完整的四字成语.

    checkAnswer(newGameBoxes, rowId, columnId, ans);
  };

  var checkAnswer = function checkAnswer(newGameBoxes, rowId, columnId, ans) {
    var word1 = new Map();

    for (var row = rowId - 3; row <= rowId + 3; row += 1) {
      if (row >= 0 && row < 9) {
        word1.set("".concat(row, "_").concat(columnId), '');
      }
    }

    var word2 = new Map();

    for (var column = columnId - 3; column <= columnId + 3; column += 1) {
      if (column >= 0 && column < 9) {
        word2.set("".concat(rowId, "_").concat(column), '');
      }
    } // 循环gameBox里面的数据，看看有没有完整的4字成语。


    (newGameBoxes || [[]]).forEach(function (rowItem) {
      (rowItem || []).forEach(function (item) {
        if (word1.get("".concat(item.x, "_").concat(item.y)) === '') {
          if (item.text !== '') {
            word1.set("".concat(item.x, "_").concat(item.y), item.text);
          } else {
            word1.set("".concat(item.x, "_").concat(item.y), "龠");
          }
        }

        if (word2.get("".concat(item.x, "_").concat(item.y)) === '') {
          if (item.text !== '') {
            word2.set("".concat(item.x, "_").concat(item.y), item.text);
          } else {
            word2.set("".concat(item.x, "_").concat(item.y), "龠");
          }
        }
      });
    }); // 开始判断成语了。

    var idiom1 = '';
    var idiom2 = ''; // 这里做扩展处理。超过2个字都算成语。

    word1.forEach(function (value) {
      idiom1 += value;
    });
    word2.forEach(function (value) {
      idiom2 += value;
    });
    var position1 = -1;

    var _loop = function _loop(position11) {
      idioms.forEach(function (idiom) {
        if (idiom === idiom1.substr(position11, 4)) {
          position1 = position11;
        }
      });
    };

    for (var position11 = 0; position11 < idiom1.length - 3; position11++) {
      _loop(position11);
    }

    var position2 = -1;

    var _loop2 = function _loop2(position22) {
      idioms.forEach(function (idiom) {
        if (idiom === idiom2.substr(position22, 4)) {
          position2 = position22;
        }
      });
    };

    for (var position22 = 0; position22 < idiom2.length - 3; position22++) {
      _loop2(position22);
    }

    if (position1 >= 0) {
      var activityKeys = [];
      var index = 0;
      word1.forEach(function (value, key) {
        if (index < position1 + 4) {
          activityKeys.push(key);
        }

        index += 1;
      });
      console.log("activityKeys1", activityKeys);
    }

    if (position2 >= 0) {
      var _activityKeys = [];
      var _index = 0;
      word2.forEach(function (value, key) {
        if (_index < position1 + 4) {
          _activityKeys.push(key);
        }

        _index += 1;
      });
      console.log("activityKeys2", _activityKeys);
    }
  };

  var toggleGameBox = function toggleGameBox(rowId, columnId, ans) {
    var newGameBoxes = (gameBoxes || [[]]).map(function (rowItem, index) {
      if (rowId !== index) {
        return rowItem;
      }

      return (rowItem || []).map(function (item, index1) {
        if (columnId !== index1) {
          return item;
        }

        var newItem = _objectSpread({}, item);

        newItem.text = ans;

        if (ans) {
          newItem.style = newItem.style + " text";
        } else {
          newItem.style = newItem.style.replace(" text", "");
        }

        return newItem;
      });
    }); // 重新设置currentKey

    setGameBoxes(newGameBoxes);
    return newGameBoxes;
  }; // 将该处值设置为选中


  var toggleAnswer = function toggleAnswer(ans, style) {
    if (ans) {
      var newAnswer = answer.map(function (ans1) {
        if (ans1.text === ans) {
          return _objectSpread(_objectSpread({}, ans1), {}, {
            style: style
          });
        }

        return ans1;
      });
      setAnswer(newAnswer);
    }
  };

  var updateCurrentKey = function updateCurrentKey() {
    var newCurrentKey = '';
    var position = currentKeys.findIndex(function (value, index, arr) {
      return value === currentKey;
    });
    newCurrentKey = currentKeys[(position + 1) % currentKeys.length];
    var newCurrentKeys = currentKeys.filter(function (item, index) {
      return item !== currentKey;
    });

    if (newCurrentKeys.length === 0) {
      // 所有已经填写完毕
      console.log("----已完成");
    } else {
      console.log("===未完成");
      setCurrentKeys(newCurrentKeys);
    }

    setCurrentKey(newCurrentKey);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "game"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "game_container"
  }, (gameBoxes || [[]]).map(function (rowItem, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "game_row",
      key: index,
      __key: index
    }, (rowItem || []).map(function (item, index1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
        onTap: function onTap() {
          return selectBox(index, index1, item);
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(item.style, currentKey === "".concat(index, "_").concat(index1) ? 'active' : ''),
        key: "".concat(index, "_").concat(index1),
        __key: "".concat(index, "_").concat(index1)
      }, item.text);
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tool-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tool-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tool-left-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("open-data", {
    type: "userAvatarUrl",
    lang: "zh_CN"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tool-left-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tool-left-tip"
  }, "\u7687\u5E1D\u4E5F\u8981"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tool-left-tip"
  }, "\u591A\u5B66\u4E60")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tool-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onAnimationEnd: animationEnd1,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("btn_default", "right-icon-container", isShakeBtn1 ? "btn-scale" : ""),
    hoverClassName: "btn-click",
    hoverStartTime: 0,
    hoverStayTime: 100,
    openType: "share",
    style: {
      marginLeft: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "right-icon",
    src: "/image/game/yxz-defauit-khy.png",
    style: {
      width: 96
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "right-icon-container",
    hoverClassName: "btn-click",
    hoverStartTime: 0,
    hoverStayTime: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "right-icon",
    src: "/image/game/yxz-defauit-cw@2x.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onAnimationEnd: animationEnd2,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("btn_default", "right-icon-container", isShakeBtn2 ? "btn-scale" : ""),
    hoverClassName: "btn-click",
    hoverStartTime: 0,
    hoverStayTime: 100,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "tip-icon",
    src: "/image/game/yxz-defauit-ts.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tip-type-box"
  }, "99+"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "select_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "select-row"
  }, (answer || []).map(function (ans, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      onTap: function onTap() {
        return selectWord(ans);
      },
      className: "select-item",
      key: index,
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("btn_default", "select_box", "big-select2", ans.style)
    }, ans.text));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onTap: function onTap() {
      return showPopupRank(true);
    }
  }, "adfa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Popup_PopupRank__WEBPACK_IMPORTED_MODULE_5__["default"], {
    visible: popupRank,
    onClose: function onClose() {
      return showPopupRank(false);
    }
  }));
};

_page.displayName = "Page[pages/game/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/game/index")));

/***/ }),

/***/ "./src/util/audio.ts":
/*!***************************!*\
  !*** ./src/util/audio.ts ***!
  \***************************/
/*! exports provided: Audio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");

var audios = {
  btnClick: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/btnClick.mp3",
  changeBox: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/changeBox.mp3",
  correct: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/correct.mp3",
  finish: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/finish.mp3",
  incorrect: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/incorrect.mp3",
  selectWord: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/selectWord.mp3",
  gameTip: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/gameTip.mp3",
  getEnergy: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/getEnergy.mp3",
  levelUp: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/levelUp.mp3",
  getBox: _util_constants__WEBPACK_IMPORTED_MODULE_0__["default"].resourceUrl + "/mp3/getBox.mp3"
};
var audioContexts = new Map();
var Audio = {
  audioInit: function audioInit() {
    for (var key in audios) {
      audioContexts.set(key, wx.createInnerAudioContext());
    }

    wx.setInnerAudioOption({
      obeyMuteSwitch: !1
    });
  },
  playAudio: function playAudio(type) {
    if (audioContexts.size === 0) {
      this.audioInit();
    }

    var audioContext = audioContexts.get(type);

    if (audioContext) {
      // @ts-ignore
      audioContext.src = audios[type];
      audioContext.play();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./src/pages/game/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:/Users/black/Desktop/game/chengyuxiaoxiucai_ts/src/pages/game/index.tsx */"./src/pages/game/index.tsx");


/***/ })

},[[1,"runtime","remax-vendors"]]]);