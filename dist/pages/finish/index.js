require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/finish/index"],{

/***/ "./src/api/player.ts":
/*!***************************!*\
  !*** ./src/api/player.ts ***!
  \***************************/
/*! exports provided: player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
var player = {
  "show_kefu": 0,
  "daTiEnable": false,
  "activityEnable": false,
  "activityTip": "再过49关即可开启字块参与瓜分万元奖学金",
  "advAuditSwitch": false,
  "background": "home-bj2@2x.png?ver=190704",
  "canPopActivityWindow": false,
  "canPopLoginAward": false,
  "canPopWeekScholar": false,
  "car": {
    "achieve": 0,
    "nextIndex": 1,
    "nextLevel": 10,
    "nextName": "毛驴",
    "tip": "再过0关即可升级座驾",
    "curIndex": "0",
    "curName": "未解锁",
    "type": 3
  },
  "cityRank": false,
  "dayPass": 0,
  "energyAllCountDown": 0,
  "energyCountDown": 0,
  "energyExtraValue": 0,
  "energyMaxValue": 5,
  "energyTotal": 2,
  "energyValue": 2,
  "finishPageStrategy": {
    "0": -1,
    "14": 3,
    "31": 2,
    "51": 1,
    "99": 1
  },
  "gzhEnergy": 0,
  "gzhSign": false,
  "hostUrl": "http://chengyuxiaoxiucai.i-gomall.com/addons/yf_chengyujiekong/resource/shareCard/",
  "house": {
    "achieve": 33,
    "curIndex": "2",
    "curName": "土坯房",
    "nextIndex": 3,
    "nextLevel": 45,
    "nextName": "独室木屋",
    "tip": "再过33关即可升级房屋",
    "type": 2
  },
  "howToPlayPop": false,
  "iosPay": false,
  "isBeta": false,
  "isCollectGame": 0,
  "isSubscribe": true,
  "loseUserStrategy": {
    "figureLevelGuide": 8,
    "firstFinish": 8,
    "firstLevel": 15,
    "homePageUpgrade": 8,
    "secondFinish": 10,
    "secondLevel": 10
  },
  "navigateApp": [],
  "nextBackground": "home-bj2@2x.png?ver=190704",
  "nextLevel": 13,
  "nextUnlock": 0,
  "nickname": " 无用",
  "passLevel": "12",
  "payEnable": false,
  "position": {
    "achieve": 3,
    "curIndex": "1",
    "curName": "书生",
    "nextIndex": 2,
    "nextLevel": 15,
    "nextName": "秀才",
    "tip": "再过3关即可升级官职",
    "type": 1
  },
  "quitGameFlag": false,
  "recoverTime": 1200,
  "scholarSwitch": false,
  "shareCards": ["config/share_card_1.png", "config/share_card_2.png"],
  "shareForbidden": false,
  "shareTitles": ["快来！升官买房娶妻都在这里！", "太难了！求求你帮我解一下这题~"],
  "showId": "13675",
  "sign": false,
  "signDays": 1,
  "signReward": [1, 1, 1, 1, 1, 1, 1],
  "tipItem": {
    "brokenSign": false,
    "discounts": "0.0",
    "originalPrice": "6.0",
    "price": "3.0",
    "propFlag": 0,
    "propId": 30001,
    "propName": "购买10点提醒",
    "propType": 3,
    "propValue": 10,
    "recharge": false,
    "remark": "",
    "saleNum": 193
  },
  "userId": "13675",
  "yearCardUser": false
};

/***/ }),

/***/ "./src/components/GuideText/index.css":
/*!********************************************!*\
  !*** ./src/components/GuideText/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/GuideText/index.tsx":
/*!********************************************!*\
  !*** ./src/components/GuideText/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/util/utils */ "./src/util/utils.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/GuideText/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);





var GuideText = function GuideText(_ref) {
  var arrow = _ref.arrow,
      content2 = _ref.content2,
      className = _ref.className,
      content = _ref.content,
      direction = _ref.direction,
      left = _ref.left,
      top = _ref.top,
      marginLeft = _ref.marginLeft;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "guide",
    style: {
      left: left,
      top: top
    }
  }, arrow !== 'none' && direction === 'up' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "guide-arrow-up",
    src: Object(_util_utils__WEBPACK_IMPORTED_MODULE_2__["imageShow"])('/image/common/ys-iocn-sjx@2x.png'),
    style: {
      marginLeft: marginLeft
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "guide-content-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "guide-content-text"
  }, content), content2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "guide-content-text"
  }, content2) : null), arrow !== 'none' && direction === 'down' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "guide-arrow-down",
    src: Object(_util_utils__WEBPACK_IMPORTED_MODULE_2__["imageShow"])('/image/common/ys-iocn-sjx@2x.png'),
    style: {
      marginLeft: marginLeft
    }
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (GuideText);

/***/ }),

/***/ "./src/pages/finish/index.css":
/*!************************************!*\
  !*** ./src/pages/finish/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/finish/index.tsx":
/*!************************************!*\
  !*** ./src/pages/finish/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");
/* harmony import */ var _api_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/player */ "./src/api/player.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/pages/finish/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_GuideText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/GuideText */ "./src/components/GuideText/index.tsx");
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/util/utils */ "./src/util/utils.ts");









var roundNum = 1;
var daTiFinishEnable = false;
var showRound1Guide = false;
var isAnimalEnd = false;

var Index = function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "block1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-banner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "banner-img",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-gxgg@2x.png")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-level"
  }, "\u7B2C13\u5173"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("open-data", {
    type: "userAvatarUrl",
    lang: "zh_CN"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("open-data", {
    type: "userNickName",
    lang: "zh_CN"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-idiom-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "idiom-bg",
    src: "".concat(_util_constants__WEBPACK_IMPORTED_MODULE_4__["default"].resourceUrl, "/image/finish/yxjs-icon-js@2x.png")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "idiom-text"
  }, "\u6570\u4E0D\u80DC\u6570")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "block2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "finish-action-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "to-big-animation",
    hoverClassName: "btn-click",
    hoverStartTime: 0,
    hoverStayTime: 100,
    style: {
      position: 'relative',
      zIndex: roundNum === 2 ? 9 : ''
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "back-btn",
    src: Object(_util_utils__WEBPACK_IMPORTED_MODULE_8__["imageShow"])('/image/finish/yxjs-defauit-home@2x.png')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "back-red-dot move-animation",
    src: Object(_util_utils__WEBPACK_IMPORTED_MODULE_8__["imageShow"])('/image/common/iocn-gx@2x.png')
  })), (!_api_player__WEBPACK_IMPORTED_MODULE_5__["player"].activityEnable || _api_player__WEBPACK_IMPORTED_MODULE_5__["player"].activityEnable && showRound1Guide) && roundNum == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_GuideText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "showPop2",
    content: "\u518D\u6765\u4E00\u5173\u8BD5\u8BD5\u624B\u5427\uFF01",
    direction: "down",
    left: 86,
    marginLeft: 190,
    top: -182
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "block3"
  }, "block3"));
};

var _page = Index;
_page.displayName = "Page[pages/finish/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/finish/index")));

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./src/pages/finish/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:/Users/black/Desktop/game/chengyuxiaoxiucai_ts/src/pages/finish/index.tsx */"./src/pages/finish/index.tsx");


/***/ })

},[[3,"runtime","remax-vendors","remax-styles"]]]);