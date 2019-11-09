(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["Home"],{

/***/ "./src/client/imgs/nextlaunch.jpg":
/*!****************************************!*\
  !*** ./src/client/imgs/nextlaunch.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nextlaunch.jpg";

/***/ }),

/***/ "./src/client/imgs/tail-spin.svg":
/*!***************************************!*\
  !*** ./src/client/imgs/tail-spin.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tail-spin.svg";

/***/ }),

/***/ "./src/client/js/modules/Home/views/Home.js":
/*!**************************************************!*\
  !*** ./src/client/js/modules/Home/views/Home.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_RecentLaunches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/RecentLaunches */ "./src/client/js/modules/RecentLaunches/index.js");
/* harmony import */ var modules_NextLaunch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/NextLaunch */ "./src/client/js/modules/NextLaunch/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_NextLaunch__WEBPACK_IMPORTED_MODULE_2__["NextLaunch"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_RecentLaunches__WEBPACK_IMPORTED_MODULE_1__["RecentLaunches"], null));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Home/views/Home.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NextLaunch/container/NextLaunch.js":
/*!******************************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/container/NextLaunch.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/NextLaunch/config.js");
/* harmony import */ var _views_NextLaunch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/NextLaunch */ "./src/client/js/modules/NextLaunch/views/NextLaunch.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/NextLaunch/actions/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return state[_config__WEBPACK_IMPORTED_MODULE_1__["moduleName"]];
};

var mapDispatchToProps = {
  fetchNextLaunchRequestAction: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchNextLaunchRequestAction"],
  clearStoreAction: _actions__WEBPACK_IMPORTED_MODULE_3__["clearStoreAction"]
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_views_NextLaunch__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/container/NextLaunch.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/container/NextLaunch.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/container/NextLaunch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NextLaunch/index.js":
/*!***************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/index.js ***!
  \***************************************************/
/*! exports provided: NextLaunch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_NextLaunch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container/NextLaunch */ "./src/client/js/modules/NextLaunch/container/NextLaunch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextLaunch", function() { return _container_NextLaunch__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/client/js/modules/NextLaunch/styled/index.js":
/*!**********************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/styled/index.js ***!
  \**********************************************************/
/*! exports provided: StyledNextLaunchBox, StyledNextLaunchCountdown, StyledCountdown, StyledNextLaunchDetails, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNextLaunchBox", function() { return StyledNextLaunchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNextLaunchCountdown", function() { return StyledNextLaunchCountdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCountdown", function() { return StyledCountdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNextLaunchDetails", function() { return StyledNextLaunchDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var shared_styled_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/styled/Box */ "./src/client/js/shared/styled/Box.js");
/* harmony import */ var shared_styled_Pulse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/styled/Pulse */ "./src/client/js/shared/styled/Pulse.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var StyledNextLaunchBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(shared_styled_Box__WEBPACK_IMPORTED_MODULE_1__["LightBox"]).withConfig({
  componentId: "sc-10otcnn-0"
})(["width:100%;margin-bottom:10px;display:flex;flex-direction:column;justify-content:space-between;padding:0;> span{display:block;}"]);
var StyledNextLaunchCountdown = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(shared_styled_Box__WEBPACK_IMPORTED_MODULE_1__["BoxInner"]).withConfig({
  componentId: "sc-10otcnn-1"
})(["min-height:85px;display:flex;align-items:center;justify-content:center;background:linear-gradient(", ",", ")"], function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.black;
});
var StyledCountdown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  componentId: "sc-10otcnn-2"
})(["color:", ";font-size:40px;animation:", " 3s ease-in infinite;"], function (props) {
  return props.theme.white;
}, shared_styled_Pulse__WEBPACK_IMPORTED_MODULE_2__["pulse"]);
var StyledNextLaunchDetails = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  componentId: "sc-10otcnn-3"
})(["display:flex;justify-content:center;align-items:center;text-align:center;padding:20px;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  componentId: "sc-10otcnn-4"
})(["display:flex;align-items:center;a{margin-right:10px;color:", ";text-decoration:underline;}"], function (props) {
  return props.theme.blue;
});
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StyledNextLaunchBox, "StyledNextLaunchBox", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/styled/index.js");
  reactHotLoader.register(StyledNextLaunchCountdown, "StyledNextLaunchCountdown", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/styled/index.js");
  reactHotLoader.register(StyledCountdown, "StyledCountdown", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/styled/index.js");
  reactHotLoader.register(StyledNextLaunchDetails, "StyledNextLaunchDetails", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/styled/index.js");
  reactHotLoader.register(Label, "Label", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/styled/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NextLaunch/views/NextLaunch.js":
/*!**************************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/views/NextLaunch.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/Countdown.js");
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_styled_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/styled/Box */ "./src/client/js/shared/styled/Box.js");
/* harmony import */ var shared_styled_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/styled/Loader */ "./src/client/js/shared/styled/Loader.js");
/* harmony import */ var shared_components_icons_Reddit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/components/icons/Reddit */ "./src/client/js/shared/components/icons/Reddit.js");
/* harmony import */ var nextlaunch_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nextlaunch.jpg */ "./src/client/imgs/nextlaunch.jpg");
/* harmony import */ var nextlaunch_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nextlaunch_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styled */ "./src/client/js/modules/NextLaunch/styled/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var NextLaunch =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(NextLaunch, _React$PureComponent);

  function NextLaunch() {
    var _this;

    _classCallCheck(this, NextLaunch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NextLaunch).call(this));
    _this.countdownRenderer = _this.countdownRenderer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(NextLaunch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchNextLaunchRequestAction();
    }
  }, {
    key: "countdownRenderer",
    value: function countdownRenderer(_ref) {
      var hours = _ref.hours,
          minutes = _ref.minutes,
          seconds = _ref.seconds,
          completed = _ref.completed;

      if (completed) {
        return "You can watch live here";
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["StyledCountdown"], null, hours, ":", minutes, ":", seconds);
    }
  }, {
    key: "renderCountdown",
    value: function renderCountdown() {
      if (this.props.isFetched) {
        if (this.props.launchDateUTC) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown_now__WEBPACK_IMPORTED_MODULE_2___default.a, {
            date: this.props.launchDateUTC,
            renderer: this.countdownRenderer
          });
        }

        return "TBC";
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_styled_Loader__WEBPACK_IMPORTED_MODULE_4__["Loader"], null);
    }
  }, {
    key: "renderDetails",
    value: function renderDetails() {
      if (this.props.isFetched) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["StyledNextLaunchDetails"], null, this.props.details);
      }
    }
  }, {
    key: "renderRedditThreadLink",
    value: function renderRedditThreadLink() {
      if (this.props.isFetched) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Label"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: this.props.redditCampaign
        }, "Reddit Campaign"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_icons_Reddit__WEBPACK_IMPORTED_MODULE_5__["default"], null));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_styled_Box__WEBPACK_IMPORTED_MODULE_3__["BoxBlockHeader"], null, "Upcoming launch countdown", this.renderRedditThreadLink()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["StyledNextLaunchBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["StyledNextLaunchCountdown"], {
        img: nextlaunch_jpg__WEBPACK_IMPORTED_MODULE_6___default.a
      }, this.renderCountdown()), this.renderDetails()));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return NextLaunch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

NextLaunch.propTypes = {
  clearStoreAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchNextLaunchRequestAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isFetched: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  launchDateUTC: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var _default = NextLaunch;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NextLaunch, "NextLaunch", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/views/NextLaunch.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/views/NextLaunch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/RecentLaunches/container/RecentLaunches.js":
/*!**************************************************************************!*\
  !*** ./src/client/js/modules/RecentLaunches/container/RecentLaunches.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/RecentLaunches/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/RecentLaunches/actions/index.js");
/* harmony import */ var _views_RecentLaunches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/RecentLaunches */ "./src/client/js/modules/RecentLaunches/views/RecentLaunches.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return state[_config__WEBPACK_IMPORTED_MODULE_1__["moduleName"]];
};

var mapDispatchToProps = {
  fetchRecentLaunchesRequestAction: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchRecentLaunchesRequestAction"],
  clearStoreAction: _actions__WEBPACK_IMPORTED_MODULE_2__["clearStoreAction"]
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_views_RecentLaunches__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/container/RecentLaunches.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/container/RecentLaunches.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/container/RecentLaunches.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/RecentLaunches/index.js":
/*!*******************************************************!*\
  !*** ./src/client/js/modules/RecentLaunches/index.js ***!
  \*******************************************************/
/*! exports provided: RecentLaunches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_RecentLaunches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container/RecentLaunches */ "./src/client/js/modules/RecentLaunches/container/RecentLaunches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecentLaunches", function() { return _container_RecentLaunches__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/client/js/modules/RecentLaunches/views/RecentLaunches.js":
/*!**********************************************************************!*\
  !*** ./src/client/js/modules/RecentLaunches/views/RecentLaunches.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_Launch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/Launch */ "./src/client/js/modules/Launch/index.js");
/* harmony import */ var modules_Placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/Placeholders */ "./src/client/js/modules/Placeholders/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var shared_styled_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/styled/Box */ "./src/client/js/shared/styled/Box.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var RecentLaunches =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecentLaunches, _React$Component);

  function RecentLaunches() {
    _classCallCheck(this, RecentLaunches);

    return _possibleConstructorReturn(this, _getPrototypeOf(RecentLaunches).apply(this, arguments));
  }

  _createClass(RecentLaunches, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRecentLaunchesRequestAction(2);
    }
  }, {
    key: "renderList",
    value: function renderList() {
      if (this.props.isFetched) {
        return this.props.data.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Launch__WEBPACK_IMPORTED_MODULE_2__["Launch"], {
            url: item.links.video_link,
            image: item.links.mission_patch_small,
            title: item.mission_name,
            details: item.details,
            key: index
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Placeholders__WEBPACK_IMPORTED_MODULE_3__["LaunchPlaceholder"], {
        count: this.props.limit
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_styled_Box__WEBPACK_IMPORTED_MODULE_5__["BoxBlockHeader"], {
        withButton: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_styled_Box__WEBPACK_IMPORTED_MODULE_5__["BoxBlockHeaderText"], null, "Recent launches"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/launches"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_styled_Box__WEBPACK_IMPORTED_MODULE_5__["BoxBlockHeaderButton"], null, "See more"))), this.renderList());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RecentLaunches;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(RecentLaunches, "defaultProps", {
  limit: 2
});

RecentLaunches.propTypes = {
  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isFetched: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  clearStoreAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})),
  fetchRecentLaunchesRequestAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = RecentLaunches;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RecentLaunches, "RecentLaunches", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/views/RecentLaunches.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/views/RecentLaunches.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/shared/components/icons/Reddit.js":
/*!*********************************************************!*\
  !*** ./src/client/js/shared/components/icons/Reddit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "svg-icon--reddit",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "#FF4500"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    d: "M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/shared/components/icons/Reddit.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/shared/styled/Loader.js":
/*!***********************************************!*\
  !*** ./src/client/js/shared/styled/Loader.js ***!
  \***********************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var tail_spin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tail-spin.svg */ "./src/client/imgs/tail-spin.svg");
/* harmony import */ var tail_spin_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tail_spin_svg__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var Loader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  componentId: "sc-14gmevn-0"
})(["width:50px;height:50px;background:url(", ") no-repeat;background-size:50px 50px;position:absolute;top:", ";left:50%;transform:translate(-50%,-50%);"], tail_spin_svg__WEBPACK_IMPORTED_MODULE_1___default.a, function (props) {
  return props.top ? "".concat(props.top, "px") : '50%';
});
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/shared/styled/Loader.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/shared/styled/Pulse.js":
/*!**********************************************!*\
  !*** ./src/client/js/shared/styled/Pulse.js ***!
  \**********************************************/
/*! exports provided: pulse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulse", function() { return pulse; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var pulse = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:1;}50%{opacity:0.6;}100%{opacity:1;}"]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pulse, "pulse", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/shared/styled/Pulse.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=Home-8806e2aa05f7a8e0c6d9.chunk.js.map