(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["Launches"],{

/***/ "./src/client/js/modules/Launches/views/Launches.js":
/*!**********************************************************!*\
  !*** ./src/client/js/modules/Launches/views/Launches.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Launches; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_LaunchesAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/LaunchesAll */ "./src/client/js/modules/LaunchesAll/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function Launches() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Launches")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_LaunchesAll__WEBPACK_IMPORTED_MODULE_1__["LaunchesAll"], null));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Launches, "Launches", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Launches/views/Launches.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/LaunchesAll/container/LaunchesAll.js":
/*!********************************************************************!*\
  !*** ./src/client/js/modules/LaunchesAll/container/LaunchesAll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/LaunchesAll/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/LaunchesAll/actions/index.js");
/* harmony import */ var _views_LaunchesAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/LaunchesAll */ "./src/client/js/modules/LaunchesAll/views/LaunchesAll.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return state[_config__WEBPACK_IMPORTED_MODULE_1__["moduleName"]];
};

var mapDispatchToProps = {
  fetchLaunchesRequestAction: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchLaunchesRequestAction"],
  clearStoreAction: _actions__WEBPACK_IMPORTED_MODULE_2__["clearStoreAction"]
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_views_LaunchesAll__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/container/LaunchesAll.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/container/LaunchesAll.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/container/LaunchesAll.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/LaunchesAll/index.js":
/*!****************************************************!*\
  !*** ./src/client/js/modules/LaunchesAll/index.js ***!
  \****************************************************/
/*! exports provided: LaunchesAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_LaunchesAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container/LaunchesAll */ "./src/client/js/modules/LaunchesAll/container/LaunchesAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LaunchesAll", function() { return _container_LaunchesAll__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/client/js/modules/LaunchesAll/views/LaunchesAll.js":
/*!****************************************************************!*\
  !*** ./src/client/js/modules/LaunchesAll/views/LaunchesAll.js ***!
  \****************************************************************/
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
/* harmony import */ var shared_styled_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/styled/Box */ "./src/client/js/shared/styled/Box.js");
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







var LaunchesAll =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LaunchesAll, _React$Component);

  function LaunchesAll() {
    _classCallCheck(this, LaunchesAll);

    return _possibleConstructorReturn(this, _getPrototypeOf(LaunchesAll).apply(this, arguments));
  }

  _createClass(LaunchesAll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchLaunchesRequestAction();
    }
  }, {
    key: "renderList",
    value: function renderList() {
      if (this.props.isFetched) {
        return this.props.data.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Launch__WEBPACK_IMPORTED_MODULE_2__["Launch"], {
            url: item.links.video_link,
            title: item.mission_name,
            details: item.details,
            image: item.links.mission_patch_small,
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_styled_Box__WEBPACK_IMPORTED_MODULE_4__["BoxBlockHeader"], null, "Launches"), this.renderList());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LaunchesAll;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(LaunchesAll, "defaultProps", {
  limit: 10
});

LaunchesAll.propTypes = {
  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isFetched: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  clearStoreAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})),
  fetchLaunchesRequestAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = LaunchesAll;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LaunchesAll, "LaunchesAll", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/views/LaunchesAll.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/views/LaunchesAll.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=Launches-eb0248eb4ca00d23969d.chunk.js.map