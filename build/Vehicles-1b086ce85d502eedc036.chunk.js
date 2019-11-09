(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["Vehicles"],{

/***/ "./src/client/js/modules/Vehicles/container/Vehicles.js":
/*!**************************************************************!*\
  !*** ./src/client/js/modules/Vehicles/container/Vehicles.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/Vehicles/config.js");
/* harmony import */ var _views_Vehicles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Vehicles */ "./src/client/js/modules/Vehicles/views/Vehicles.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/Vehicles/actions/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return state[_config__WEBPACK_IMPORTED_MODULE_1__["moduleName"]];
};

var mapDispatchToProps = {
  fetchVehiclesRequestAction: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchVehiclesRequestAction"],
  clearStoreAction: _actions__WEBPACK_IMPORTED_MODULE_3__["clearStoreAction"]
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_views_Vehicles__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/container/Vehicles.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/container/Vehicles.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/container/Vehicles.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Vehicles/views/Vehicles.js":
/*!**********************************************************!*\
  !*** ./src/client/js/modules/Vehicles/views/Vehicles.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_Launch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/Launch */ "./src/client/js/modules/Launch/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_styled_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/styled/Box */ "./src/client/js/shared/styled/Box.js");
/* harmony import */ var modules_Placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/Placeholders */ "./src/client/js/modules/Placeholders/index.js");
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








var Vehicles =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Vehicles, _React$Component);

  function Vehicles() {
    _classCallCheck(this, Vehicles);

    return _possibleConstructorReturn(this, _getPrototypeOf(Vehicles).apply(this, arguments));
  }

  _createClass(Vehicles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return this.props.fetchVehiclesRequestAction();
    }
  }, {
    key: "renderShips",
    value: function renderShips() {
      if (this.props.isFetched) {
        return this.props.ships.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Launch__WEBPACK_IMPORTED_MODULE_1__["Launch"], {
            title: item.ship_name,
            details: item.home_port,
            image: item.image,
            key: index
          });
        });
      }
    }
  }, {
    key: "renderRockets",
    value: function renderRockets() {
      if (this.props.isFetched) {
        return this.props.rockets.reverse().map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Launch__WEBPACK_IMPORTED_MODULE_1__["Launch"], {
            title: item.rocket_name,
            details: item.description,
            image: item.flickr_images[0],
            key: index
          });
        });
      }
    }
  }, {
    key: "renderRoadster",
    value: function renderRoadster() {
      if (this.props.isFetched) {
        var item = this.props.roadster;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Launch__WEBPACK_IMPORTED_MODULE_1__["Launch"], {
          title: item.name,
          details: item.details,
          image: item.flickr_images[0]
        });
      }
    }
  }, {
    key: "renderPlaceholders",
    value: function renderPlaceholders() {
      if (!this.props.isFetched) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Placeholders__WEBPACK_IMPORTED_MODULE_5__["LaunchPlaceholder"], {
          count: 10
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Vehicles")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_styled_Box__WEBPACK_IMPORTED_MODULE_4__["BoxBlockHeader"], null, "Vehicles"), this.renderPlaceholders(), this.renderRoadster(), this.renderRockets(), this.renderShips());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Vehicles;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Vehicles.propTypes = {
  isFetched: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  ships: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  rockets: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  roadster: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
var _default = Vehicles;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Vehicles, "Vehicles", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/views/Vehicles.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/views/Vehicles.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=Vehicles-1b086ce85d502eedc036.chunk.js.map