require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/components/Detail/index.css":
/*!*****************************************************!*\
  !*** ./src/pages/index/components/Detail/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/components/Detail/index.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/index/components/Detail/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/components/Detail/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/utils */ "./src/util/utils.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var newPlayHelp = true;

var Detail = function Detail() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_util_utils__WEBPACK_IMPORTED_MODULE_4__["getStorage"])("userInfo")),
      _useState2 = _slicedToArray(_useState, 2),
      userInfo = _useState2[0],
      setUserInfo = _useState2[1];

  console.log("userInfo", userInfo);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "bg",
    mode: "widthFix",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_3__["default"].resourceUrl, "/image/index/home-bj2.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "page-container"
  }, userInfo.houseIndex === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "home",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_3__["default"].resourceUrl, "/image/index/home-fz0.png")
  }) : null, userInfo.houseIndex !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "home",
    src: "{{listData.baseUrl}}{{houseResource.body}}"
  }) : null), newPlayHelp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "new-player-modal"
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ "./src/pages/index/components/Loading/index.css":
/*!******************************************************!*\
  !*** ./src/pages/index/components/Loading/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/components/Loading/index.tsx":
/*!******************************************************!*\
  !*** ./src/pages/index/components/Loading/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/components/Loading/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);





var Loading = function Loading(_ref) {
  var showText = _ref.showText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "loading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "loading-bg",
    mode: "widthFix",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_2__["default"].resourceUrl, "/image/loading/load_img_4.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "loading-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "loading-role"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "role-head",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_2__["default"].resourceUrl, "/image/loading/jzy-t.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "role-body",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_2__["default"].resourceUrl, "/image/loading/jzy-st.png")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "loading-tip",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_2__["default"].resourceUrl, "/image/loading/load_human_4.png")
  })), showText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "loading-text"
  }, showText) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/utils */ "./src/util/utils.ts");
/* harmony import */ var _util_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/util/request */ "./src/util/request.ts");
/* harmony import */ var _pages_index_components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/index/components/Loading */ "./src/pages/index/components/Loading/index.tsx");
/* harmony import */ var _pages_index_components_Detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/index/components/Detail */ "./src/pages/index/components/Detail/index.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var timer;
var index = 0;

var _page = function _page() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLogin = _useState2[0],
      setIsLogin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('登陆中'),
      _useState4 = _slicedToArray(_useState3, 2),
      showText = _useState4[0],
      setShowText = _useState4[1];

  var startTimer = function startTimer() {
    timer = setInterval(function () {
      index += 1;

      if (index % 4 === 0) {
        setShowText('登陆中');
      } else if (index % 4 === 1) {
        setShowText('登陆中.');
      } else if (index % 4 === 2) {
        setShowText('登陆中..');
      } else if (index % 4 === 3) {
        setShowText('登陆中...');
      }
    }, 600);
  };

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])("onLoad", function () {
    startTimer();
    setIsLogin(false);
    Object(_util_utils__WEBPACK_IMPORTED_MODULE_4__["login"])(function (res) {
      Object(_util_request__WEBPACK_IMPORTED_MODULE_5__["default"])('api/login', function (res) {
        var data = res.data;
        console.log(data);
        Object(_util_utils__WEBPACK_IMPORTED_MODULE_4__["setStorageSync"])("userInfo", data);
        Object(_util_utils__WEBPACK_IMPORTED_MODULE_4__["setStorageSync"])("token", data.token);
        setIsLogin(true);
        clearInterval(timer);
      }, {
        data: {
          code: res.code
        }
      });
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isShowPower: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "page-container"
  }, !isLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_pages_index_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showText: showText
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_pages_index_components_Detail__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
};

_page.displayName = "Page[pages/index/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index/index")));

/***/ }),

/***/ 2:
/*!*****************************************!*\
  !*** multi ./src/pages/index/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:/Users/black/Desktop/game/chengyuxiaoxiucai_ts/src/pages/index/index.tsx */"./src/pages/index/index.tsx");


/***/ })

},[[2,"runtime","remax-vendors","remax-styles"]]]);