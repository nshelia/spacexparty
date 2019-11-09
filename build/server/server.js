/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/client/imgs/falcon9.jpg":
/*!*************************************!*\
  !*** ./src/client/imgs/falcon9.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "falcon9.jpg";

/***/ }),

/***/ "./src/client/js/api/index.js":
/*!************************************!*\
  !*** ./src/client/js/api/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/client/js/api/request.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var api = {
  name: 'hello',
  getNextLaunch: function () {
    var _getNextLaunch = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("launches/next");

            case 2:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getNextLaunch() {
      return _getNextLaunch.apply(this, arguments);
    }

    return getNextLaunch;
  }(),
  getRecentLaunches: function () {
    var _getRecentLaunches = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(limit) {
      var data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("launches/past", {
                limit: limit,
                order: "desc"
              });

            case 2:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getRecentLaunches(_x) {
      return _getRecentLaunches.apply(this, arguments);
    }

    return getRecentLaunches;
  }(),
  getMissions: function () {
    var _getMissions = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(limit, missionId) {
      var data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("missions", {
                limit: limit,
                missionId: missionId
              });

            case 2:
              data = _context3.sent;
              return _context3.abrupt("return", data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getMissions(_x2, _x3) {
      return _getMissions.apply(this, arguments);
    }

    return getMissions;
  }(),
  getRoadster: function () {
    var _getRoadster = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("roadster");

            case 2:
              data = _context4.sent;
              return _context4.abrupt("return", data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getRoadster() {
      return _getRoadster.apply(this, arguments);
    }

    return getRoadster;
  }(),
  getRockets: function () {
    var _getRockets = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(limit) {
      var data;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("rockets", {
                limit: limit
              });

            case 2:
              data = _context5.sent;
              return _context5.abrupt("return", data);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getRockets(_x4) {
      return _getRockets.apply(this, arguments);
    }

    return getRockets;
  }(),
  getShips: function () {
    var _getShips = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6(limit) {
      var data;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("ships", {
                limit: limit
              });

            case 2:
              data = _context6.sent;
              return _context6.abrupt("return", data);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getShips(_x5) {
      return _getShips.apply(this, arguments);
    }

    return getShips;
  }(),
  getVehicles: function () {
    var _getVehicles = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7() {
      var _ref, roadster, _ref2, rockets, _ref3, ships;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("roadster");

            case 2:
              _ref = _context7.sent;
              roadster = _ref.data;
              _context7.next = 6;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("rockets");

            case 6:
              _ref2 = _context7.sent;
              rockets = _ref2.data;
              _context7.next = 10;
              return Object(_request__WEBPACK_IMPORTED_MODULE_0__["getRequest"])("ships");

            case 10:
              _ref3 = _context7.sent;
              ships = _ref3.data;
              return _context7.abrupt("return", {
                roadster: roadster,
                rockets: rockets,
                ships: ships
              });

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getVehicles() {
      return _getVehicles.apply(this, arguments);
    }

    return getVehicles;
  }()
};
var _default = api;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(api, "api", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/api/index.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/api/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/api/request.js":
/*!**************************************!*\
  !*** ./src/client/js/api/request.js ***!
  \**************************************/
/*! exports provided: getRequest, postRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRequest", function() { return postRequest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();



var host = "https://api.spacexdata.com/v3";
var getRequest = function getRequest(service, query) {
  var queries = qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(query, {
    addQueryPrefix: true
  });
  var url = "".concat(host, "/").concat(service).concat(queries);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
};
var postRequest = function postRequest(service, query) {
  var queries = qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(query, {
    addQueryPrefix: true
  });
  var url = "".concat(host, "/").concat(service).concat(queries);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url);
};
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(host, "host", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/api/request.js");
  reactHotLoader.register(getRequest, "getRequest", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/api/request.js");
  reactHotLoader.register(postRequest, "postRequest", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/api/request.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Application/index.js":
/*!****************************************************!*\
  !*** ./src/client/js/modules/Application/index.js ***!
  \****************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Application */ "./src/client/js/modules/Application/views/Application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _views_Application__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/client/js/modules/Application/views/Application.js":
/*!****************************************************************!*\
  !*** ./src/client/js/modules/Application/views/Application.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/Header */ "./src/client/js/modules/Header/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader */ "react-hot-loader");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! routes */ "./src/client/js/routes/index.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-bootstrap-grid */ "styled-bootstrap-grid");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: left;\n    background: ", " !important;\n    color: ", " !important;\n    overflow-y: scroll !important;\n  }\n  a {\n    color: inherit;\n    text-decoration:none;\n  }\n\n  .svg-icon--reddit {\n    height: 24px;\n    width: 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.white;
});

function Application() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "SpaceX Calendar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "SpaceX rockets launch dates, videos and other great stuff about companys work."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:locale",
    content: "en_US"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "SpaceX Calendar"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "og:description",
    content: "SpaceX rockets launch dates, videos and other great stuff about companys work."
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    col: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, routes__WEBPACK_IMPORTED_MODULE_4__["routes"].map(function (route, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: index,
      exact: route.exact,
      path: route.path,
      component: route.component
    });
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_5__["BaseCSS"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyles, null)));
}

var _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__["hot"])(module)(Application);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GlobalStyles, "GlobalStyles", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Application/views/Application.js");
  reactHotLoader.register(Application, "Application", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Application/views/Application.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Application/views/Application.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Header/index.js":
/*!***********************************************!*\
  !*** ./src/client/js/modules/Header/index.js ***!
  \***********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Header */ "./src/client/js/modules/Header/views/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _views_Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/client/js/modules/Header/styled/index.js":
/*!******************************************************!*\
  !*** ./src/client/js/modules/Header/styled/index.js ***!
  \******************************************************/
/*! exports provided: StyledHeader, StyledUl, StyledTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledUl", function() { return StyledUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTab", function() { return StyledTab; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var falcon9_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! falcon9.jpg */ "./src/client/imgs/falcon9.jpg");
/* harmony import */ var falcon9_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(falcon9_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_styled_NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/styled/NavLink */ "./src/client/js/shared/styled/NavLink.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();




var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  componentId: "gai094-0"
})(["background:url(", ");border-radius:0 0 5px 5px;padding:20px 0 2px 20px;margin-bottom:20px;"], falcon9_jpg__WEBPACK_IMPORTED_MODULE_1___default.a);
var StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  componentId: "gai094-1"
})(["display:flex;list-style:none;padding:10px;a{text-decoration:none;}"]);
var StyledTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(shared_styled_NavLink__WEBPACK_IMPORTED_MODULE_2__["NavLink"]).withConfig({
  componentId: "gai094-2"
})(["border-radius:3px;"]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StyledHeader, "StyledHeader", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Header/styled/index.js");
  reactHotLoader.register(StyledUl, "StyledUl", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Header/styled/index.js");
  reactHotLoader.register(StyledTab, "StyledTab", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Header/styled/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Header/views/Header.js":
/*!******************************************************!*\
  !*** ./src/client/js/modules/Header/views/Header.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ "./src/client/js/modules/Header/styled/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

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




var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "SpaceX Calendar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "SpaceX rockets launch dates, videos and other great stuff about companys work."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledUl"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledTab"], {
        activeClassName: "current",
        exact: true,
        to: "/"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledTab"], {
        activeClassName: "current",
        to: "/launches"
      }, "Launches")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledTab"], {
        activeClassName: "current",
        to: "/missions"
      }, "Missions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledTab"], {
        activeClassName: "current",
        to: "/vehicles"
      }, "Vehicles"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Header/views/Header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/LaunchesAll/actions/index.js":
/*!************************************************************!*\
  !*** ./src/client/js/modules/LaunchesAll/actions/index.js ***!
  \************************************************************/
/*! exports provided: fetchLaunchesFailureAction, fetchLaunchesRequestAction, fetchLaunchesSuccessAction, clearStoreAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLaunchesFailureAction", function() { return fetchLaunchesFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLaunchesRequestAction", function() { return fetchLaunchesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLaunchesSuccessAction", function() { return fetchLaunchesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStoreAction", function() { return clearStoreAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/client/js/modules/LaunchesAll/actions/types.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();



var fetchLaunchesFailureAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_LAUNCHES_FAILURE"]);
var fetchLaunchesRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_LAUNCHES_REQUEST"]);
var fetchLaunchesSuccessAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_LAUNCHES_SUCCESS"]);
var clearStoreAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_STORE"]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchLaunchesFailureAction, "fetchLaunchesFailureAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/index.js");
  reactHotLoader.register(fetchLaunchesRequestAction, "fetchLaunchesRequestAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/index.js");
  reactHotLoader.register(fetchLaunchesSuccessAction, "fetchLaunchesSuccessAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/index.js");
  reactHotLoader.register(clearStoreAction, "clearStoreAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/LaunchesAll/actions/types.js":
/*!************************************************************!*\
  !*** ./src/client/js/modules/LaunchesAll/actions/types.js ***!
  \************************************************************/
/*! exports provided: FETCH_LAUNCHES_REQUEST, FETCH_LAUNCHES_SUCCESS, FETCH_LAUNCHES_FAILURE, CLEAR_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LAUNCHES_REQUEST", function() { return FETCH_LAUNCHES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LAUNCHES_SUCCESS", function() { return FETCH_LAUNCHES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LAUNCHES_FAILURE", function() { return FETCH_LAUNCHES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/LaunchesAll/config.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


var FETCH_LAUNCHES_REQUEST = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_LAUNCHES_REQUEST");
var FETCH_LAUNCHES_SUCCESS = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_LAUNCHES_SUCCESS");
var FETCH_LAUNCHES_FAILURE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_LAUNCHES_FAILURE");
var CLEAR_STORE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/CLEAR_STORE");
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_LAUNCHES_REQUEST, "FETCH_LAUNCHES_REQUEST", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/types.js");
  reactHotLoader.register(FETCH_LAUNCHES_SUCCESS, "FETCH_LAUNCHES_SUCCESS", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/types.js");
  reactHotLoader.register(FETCH_LAUNCHES_FAILURE, "FETCH_LAUNCHES_FAILURE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/types.js");
  reactHotLoader.register(CLEAR_STORE, "CLEAR_STORE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/actions/types.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/LaunchesAll/config.js":
/*!*****************************************************!*\
  !*** ./src/client/js/modules/LaunchesAll/config.js ***!
  \*****************************************************/
/*! exports provided: moduleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleName", function() { return moduleName; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var moduleName = "launchesAll";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(moduleName, "moduleName", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/config.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/LaunchesAll/reducer/index.js":
/*!************************************************************!*\
  !*** ./src/client/js/modules/LaunchesAll/reducer/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api */ "./src/client/js/api/index.js");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-loop */ "redux-loop");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_loop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/LaunchesAll/actions/index.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/types */ "./src/client/js/modules/LaunchesAll/actions/types.js");
var _reducerMap;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};
var reducerMap = (_reducerMap = {}, _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_LAUNCHES_REQUEST"], function (state, _ref) {
  var payload = _ref.payload;

  if (state && !state.isFetching && !state.isFetched && !state.isFailed) {
    return Object(redux_loop__WEBPACK_IMPORTED_MODULE_2__["loop"])(_objectSpread({}, state, {
      isFetched: false,
      isFetching: true,
      isFailed: false
    }), redux_loop__WEBPACK_IMPORTED_MODULE_2__["Cmd"].run(api__WEBPACK_IMPORTED_MODULE_1__["default"].getRecentLaunches, {
      successActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchLaunchesSuccessAction"],
      failActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchLaunchesFailureAction"],
      args: [payload]
    }));
  }

  return state;
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_LAUNCHES_SUCCESS"], function (state, action) {
  return _objectSpread({}, state, {
    isFetched: true,
    isFetching: false,
    isFailed: false,
    data: action.payload.data
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_LAUNCHES_FAILURE"], function (state) {
  return _objectSpread({}, state, {
    isFetched: false,
    isFetching: false,
    isFailed: true
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["CLEAR_STORE"], function () {
  return initialState;
}), _reducerMap);

var _default = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])(reducerMap, initialState);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/reducer/index.js");
  reactHotLoader.register(reducerMap, "reducerMap", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/reducer/index.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/LaunchesAll/reducer/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/MissionsAll/actions/index.js":
/*!************************************************************!*\
  !*** ./src/client/js/modules/MissionsAll/actions/index.js ***!
  \************************************************************/
/*! exports provided: fetchMissionsFailureAction, fetchMissionsRequestAction, fetchMissionsSuccessAction, clearStoreAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMissionsFailureAction", function() { return fetchMissionsFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMissionsRequestAction", function() { return fetchMissionsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMissionsSuccessAction", function() { return fetchMissionsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStoreAction", function() { return clearStoreAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/client/js/modules/MissionsAll/actions/types.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();



var fetchMissionsFailureAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_MISSIONS_FAILURE"]);
var fetchMissionsRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_MISSIONS_REQUEST"]);
var fetchMissionsSuccessAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_MISSIONS_SUCCESS"]);
var clearStoreAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_STORE"]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchMissionsFailureAction, "fetchMissionsFailureAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/index.js");
  reactHotLoader.register(fetchMissionsRequestAction, "fetchMissionsRequestAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/index.js");
  reactHotLoader.register(fetchMissionsSuccessAction, "fetchMissionsSuccessAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/index.js");
  reactHotLoader.register(clearStoreAction, "clearStoreAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/MissionsAll/actions/types.js":
/*!************************************************************!*\
  !*** ./src/client/js/modules/MissionsAll/actions/types.js ***!
  \************************************************************/
/*! exports provided: FETCH_MISSIONS_REQUEST, FETCH_MISSIONS_SUCCESS, FETCH_MISSIONS_FAILURE, CLEAR_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MISSIONS_REQUEST", function() { return FETCH_MISSIONS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MISSIONS_SUCCESS", function() { return FETCH_MISSIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MISSIONS_FAILURE", function() { return FETCH_MISSIONS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/MissionsAll/config.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


var FETCH_MISSIONS_REQUEST = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_MISSIONS_REQUEST");
var FETCH_MISSIONS_SUCCESS = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_MISSIONS_SUCCESS");
var FETCH_MISSIONS_FAILURE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_MISSIONS_FAILURE");
var CLEAR_STORE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/CLEAR_STORE");
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_MISSIONS_REQUEST, "FETCH_MISSIONS_REQUEST", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/types.js");
  reactHotLoader.register(FETCH_MISSIONS_SUCCESS, "FETCH_MISSIONS_SUCCESS", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/types.js");
  reactHotLoader.register(FETCH_MISSIONS_FAILURE, "FETCH_MISSIONS_FAILURE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/types.js");
  reactHotLoader.register(CLEAR_STORE, "CLEAR_STORE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/actions/types.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/MissionsAll/config.js":
/*!*****************************************************!*\
  !*** ./src/client/js/modules/MissionsAll/config.js ***!
  \*****************************************************/
/*! exports provided: moduleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleName", function() { return moduleName; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var moduleName = "missionsAll";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(moduleName, "moduleName", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/config.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/MissionsAll/reducer/index.js":
/*!************************************************************!*\
  !*** ./src/client/js/modules/MissionsAll/reducer/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api */ "./src/client/js/api/index.js");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-loop */ "redux-loop");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_loop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/MissionsAll/actions/index.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/types */ "./src/client/js/modules/MissionsAll/actions/types.js");
var _reducerMap;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};
var reducerMap = (_reducerMap = {}, _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_MISSIONS_REQUEST"], function (state, _ref) {
  var payload = _ref.payload;

  if (state && !state.isFetching && !state.isFetched && !state.isFailed) {
    return Object(redux_loop__WEBPACK_IMPORTED_MODULE_2__["loop"])(_objectSpread({}, state, {
      isFetched: false,
      isFetching: true,
      isFailed: false
    }), redux_loop__WEBPACK_IMPORTED_MODULE_2__["Cmd"].run(api__WEBPACK_IMPORTED_MODULE_1__["default"].getMissions, {
      successActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchMissionsSuccessAction"],
      failActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchMissionsFailureAction"],
      args: [payload]
    }));
  }

  return state;
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_MISSIONS_SUCCESS"], function (state, action) {
  return _objectSpread({}, state, {
    isFetched: true,
    isFetching: false,
    isFailed: false,
    data: action.payload.data
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_MISSIONS_FAILURE"], function (state) {
  return _objectSpread({}, state, {
    isFetched: false,
    isFetching: false,
    isFailed: true
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["CLEAR_STORE"], function () {
  return initialState;
}), _reducerMap);

var _default = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])(reducerMap, initialState);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/reducer/index.js");
  reactHotLoader.register(reducerMap, "reducerMap", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/reducer/index.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/MissionsAll/reducer/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NextLaunch/actions/index.js":
/*!***********************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/actions/index.js ***!
  \***********************************************************/
/*! exports provided: fetchNextLaunchFailureAction, fetchNextLaunchRequestAction, fetchNextLaunchSuccessAction, clearStoreAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNextLaunchFailureAction", function() { return fetchNextLaunchFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNextLaunchRequestAction", function() { return fetchNextLaunchRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNextLaunchSuccessAction", function() { return fetchNextLaunchSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStoreAction", function() { return clearStoreAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/client/js/modules/NextLaunch/actions/types.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();



var fetchNextLaunchFailureAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEXT_LAUNCH_FAILURE"]);
var fetchNextLaunchRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEXT_LAUNCH_REQUEST"]);
var fetchNextLaunchSuccessAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEXT_LAUNCH_SUCCESS"]);
var clearStoreAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_STORE"]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchNextLaunchFailureAction, "fetchNextLaunchFailureAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/index.js");
  reactHotLoader.register(fetchNextLaunchRequestAction, "fetchNextLaunchRequestAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/index.js");
  reactHotLoader.register(fetchNextLaunchSuccessAction, "fetchNextLaunchSuccessAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/index.js");
  reactHotLoader.register(clearStoreAction, "clearStoreAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NextLaunch/actions/types.js":
/*!***********************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/actions/types.js ***!
  \***********************************************************/
/*! exports provided: FETCH_NEXT_LAUNCH_REQUEST, FETCH_NEXT_LAUNCH_SUCCESS, FETCH_NEXT_LAUNCH_FAILURE, CLEAR_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEXT_LAUNCH_REQUEST", function() { return FETCH_NEXT_LAUNCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEXT_LAUNCH_SUCCESS", function() { return FETCH_NEXT_LAUNCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEXT_LAUNCH_FAILURE", function() { return FETCH_NEXT_LAUNCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/NextLaunch/config.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


var FETCH_NEXT_LAUNCH_REQUEST = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_NEXT_LAUNCH_REQUEST");
var FETCH_NEXT_LAUNCH_SUCCESS = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_NEXT_LAUNCH_SUCCESS");
var FETCH_NEXT_LAUNCH_FAILURE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_NEXT_LAUNCH_FAILURE");
var CLEAR_STORE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/CLEAR_STORE");
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_NEXT_LAUNCH_REQUEST, "FETCH_NEXT_LAUNCH_REQUEST", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/types.js");
  reactHotLoader.register(FETCH_NEXT_LAUNCH_SUCCESS, "FETCH_NEXT_LAUNCH_SUCCESS", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/types.js");
  reactHotLoader.register(FETCH_NEXT_LAUNCH_FAILURE, "FETCH_NEXT_LAUNCH_FAILURE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/types.js");
  reactHotLoader.register(CLEAR_STORE, "CLEAR_STORE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/actions/types.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NextLaunch/config.js":
/*!****************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/config.js ***!
  \****************************************************/
/*! exports provided: moduleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleName", function() { return moduleName; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var moduleName = "nextLaunch";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(moduleName, "moduleName", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/config.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NextLaunch/reducer/index.js":
/*!***********************************************************!*\
  !*** ./src/client/js/modules/NextLaunch/reducer/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api */ "./src/client/js/api/index.js");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-loop */ "redux-loop");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_loop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/NextLaunch/actions/index.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/types */ "./src/client/js/modules/NextLaunch/actions/types.js");
var _reducerMap;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};
var reducerMap = (_reducerMap = {}, _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_NEXT_LAUNCH_REQUEST"], function (state) {
  if (state && !state.isFetching && !state.isFetched && !state.isFailed) {
    return Object(redux_loop__WEBPACK_IMPORTED_MODULE_2__["loop"])(_objectSpread({}, state, {
      isFetched: false,
      isFetching: true,
      isFailed: false
    }), redux_loop__WEBPACK_IMPORTED_MODULE_2__["Cmd"].run(api__WEBPACK_IMPORTED_MODULE_1__["default"].getNextLaunch, {
      successActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchNextLaunchSuccessAction"],
      failActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchNextLaunchFailureAction"],
      args: []
    }));
  }

  return state;
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_NEXT_LAUNCH_SUCCESS"], function (state, action) {
  var launch = action.payload.data;
  return _objectSpread({}, state, {
    isFetched: true,
    isFetching: false,
    isFailed: false,
    redditCampaign: launch.links.reddit_campaign,
    details: launch.details || launch.description,
    rocket: launch.rocket,
    missionName: launch.mission_name,
    launchDateUTC: launch.launch_date_utc,
    staticFireDateUTC: launch.static_fire_date_utc,
    payloads: launch.rocket.second_stage.payloads
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_NEXT_LAUNCH_FAILURE"], function (state) {
  return _objectSpread({}, state, {
    isFetched: false,
    isFetching: false,
    isFailed: true
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["CLEAR_STORE"], function () {
  return initialState;
}), _reducerMap);

var _default = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])(reducerMap, initialState);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/reducer/index.js");
  reactHotLoader.register(reducerMap, "reducerMap", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/reducer/index.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NextLaunch/reducer/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/NotFound/index.js":
/*!*************************************************!*\
  !*** ./src/client/js/modules/NotFound/index.js ***!
  \*************************************************/
/*! exports provided: NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/NotFound */ "./src/client/js/modules/NotFound/views/NotFound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return _views_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/client/js/modules/NotFound/views/NotFound.js":
/*!**********************************************************!*\
  !*** ./src/client/js/modules/NotFound/views/NotFound.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Not Found");
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFound, "NotFound", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/NotFound/views/NotFound.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/RecentLaunches/actions/index.js":
/*!***************************************************************!*\
  !*** ./src/client/js/modules/RecentLaunches/actions/index.js ***!
  \***************************************************************/
/*! exports provided: fetchRecentLaunchesFailureAction, fetchRecentLaunchesRequestAction, fetchRecentLaunchesSuccessAction, clearStoreAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentLaunchesFailureAction", function() { return fetchRecentLaunchesFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentLaunchesRequestAction", function() { return fetchRecentLaunchesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentLaunchesSuccessAction", function() { return fetchRecentLaunchesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStoreAction", function() { return clearStoreAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/client/js/modules/RecentLaunches/actions/types.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();



var fetchRecentLaunchesFailureAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECENT_LAUNCHES_FAILURE"]);
var fetchRecentLaunchesRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECENT_LAUNCHES_REQUEST"]);
var fetchRecentLaunchesSuccessAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECENT_LAUNCHES_SUCCESS"]);
var clearStoreAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_STORE"]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchRecentLaunchesFailureAction, "fetchRecentLaunchesFailureAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/index.js");
  reactHotLoader.register(fetchRecentLaunchesRequestAction, "fetchRecentLaunchesRequestAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/index.js");
  reactHotLoader.register(fetchRecentLaunchesSuccessAction, "fetchRecentLaunchesSuccessAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/index.js");
  reactHotLoader.register(clearStoreAction, "clearStoreAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/RecentLaunches/actions/types.js":
/*!***************************************************************!*\
  !*** ./src/client/js/modules/RecentLaunches/actions/types.js ***!
  \***************************************************************/
/*! exports provided: FETCH_RECENT_LAUNCHES_REQUEST, FETCH_RECENT_LAUNCHES_SUCCESS, FETCH_RECENT_LAUNCHES_FAILURE, CLEAR_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECENT_LAUNCHES_REQUEST", function() { return FETCH_RECENT_LAUNCHES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECENT_LAUNCHES_SUCCESS", function() { return FETCH_RECENT_LAUNCHES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECENT_LAUNCHES_FAILURE", function() { return FETCH_RECENT_LAUNCHES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/RecentLaunches/config.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


var FETCH_RECENT_LAUNCHES_REQUEST = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_RECENT_LAUNCHES_REQUEST");
var FETCH_RECENT_LAUNCHES_SUCCESS = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_RECENT_LAUNCHES_SUCCESS");
var FETCH_RECENT_LAUNCHES_FAILURE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_RECENT_LAUNCHES_FAILURE");
var CLEAR_STORE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/CLEAR_STORE");
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_RECENT_LAUNCHES_REQUEST, "FETCH_RECENT_LAUNCHES_REQUEST", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/types.js");
  reactHotLoader.register(FETCH_RECENT_LAUNCHES_SUCCESS, "FETCH_RECENT_LAUNCHES_SUCCESS", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/types.js");
  reactHotLoader.register(FETCH_RECENT_LAUNCHES_FAILURE, "FETCH_RECENT_LAUNCHES_FAILURE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/types.js");
  reactHotLoader.register(CLEAR_STORE, "CLEAR_STORE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/actions/types.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/RecentLaunches/config.js":
/*!********************************************************!*\
  !*** ./src/client/js/modules/RecentLaunches/config.js ***!
  \********************************************************/
/*! exports provided: moduleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleName", function() { return moduleName; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var moduleName = "recentLaunches";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(moduleName, "moduleName", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/config.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/RecentLaunches/reducer/index.js":
/*!***************************************************************!*\
  !*** ./src/client/js/modules/RecentLaunches/reducer/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api */ "./src/client/js/api/index.js");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-loop */ "redux-loop");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_loop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/RecentLaunches/actions/index.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/types */ "./src/client/js/modules/RecentLaunches/actions/types.js");
var _reducerMap;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};
var reducerMap = (_reducerMap = {}, _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_RECENT_LAUNCHES_REQUEST"], function (state, _ref) {
  var payload = _ref.payload;

  if (state && !state.isFetching && !state.isFetched && !state.isFailed) {
    return Object(redux_loop__WEBPACK_IMPORTED_MODULE_2__["loop"])(_objectSpread({}, state, {
      isFetched: false,
      isFetching: true,
      isFailed: false
    }), redux_loop__WEBPACK_IMPORTED_MODULE_2__["Cmd"].run(api__WEBPACK_IMPORTED_MODULE_1__["default"].getRecentLaunches, {
      successActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchRecentLaunchesSuccessAction"],
      failActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchRecentLaunchesFailureAction"],
      args: [payload]
    }));
  }

  return state;
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_RECENT_LAUNCHES_SUCCESS"], function (state, action) {
  return _objectSpread({}, state, {
    isFetched: true,
    isFetching: false,
    isFailed: false,
    data: action.payload.data
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_RECENT_LAUNCHES_FAILURE"], function (state) {
  return _objectSpread({}, state, {
    isFetched: false,
    isFetching: false,
    isFailed: true
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["CLEAR_STORE"], function () {
  return initialState;
}), _reducerMap);

var _default = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])(reducerMap, initialState);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/reducer/index.js");
  reactHotLoader.register(reducerMap, "reducerMap", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/reducer/index.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/RecentLaunches/reducer/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Vehicles/actions/index.js":
/*!*********************************************************!*\
  !*** ./src/client/js/modules/Vehicles/actions/index.js ***!
  \*********************************************************/
/*! exports provided: fetchVehiclesFailureAction, fetchVehiclesRequestAction, fetchVehiclesSuccessAction, clearStoreAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVehiclesFailureAction", function() { return fetchVehiclesFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVehiclesRequestAction", function() { return fetchVehiclesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVehiclesSuccessAction", function() { return fetchVehiclesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStoreAction", function() { return clearStoreAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/client/js/modules/Vehicles/actions/types.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


 // Vehicles fetch api actions

var fetchVehiclesFailureAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VEHICLES_FAILURE"]);
var fetchVehiclesRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VEHICLES_REQUEST"]);
var fetchVehiclesSuccessAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_VEHICLES_SUCCESS"]);
var clearStoreAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_STORE"]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchVehiclesFailureAction, "fetchVehiclesFailureAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/index.js");
  reactHotLoader.register(fetchVehiclesRequestAction, "fetchVehiclesRequestAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/index.js");
  reactHotLoader.register(fetchVehiclesSuccessAction, "fetchVehiclesSuccessAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/index.js");
  reactHotLoader.register(clearStoreAction, "clearStoreAction", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Vehicles/actions/types.js":
/*!*********************************************************!*\
  !*** ./src/client/js/modules/Vehicles/actions/types.js ***!
  \*********************************************************/
/*! exports provided: FETCH_VEHICLES_REQUEST, FETCH_VEHICLES_SUCCESS, FETCH_VEHICLES_FAILURE, CLEAR_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VEHICLES_REQUEST", function() { return FETCH_VEHICLES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VEHICLES_SUCCESS", function() { return FETCH_VEHICLES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VEHICLES_FAILURE", function() { return FETCH_VEHICLES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_STORE", function() { return CLEAR_STORE; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/client/js/modules/Vehicles/config.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();


var FETCH_VEHICLES_REQUEST = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_VEHICLES_REQUEST");
var FETCH_VEHICLES_SUCCESS = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_VEHICLES_SUCCESS");
var FETCH_VEHICLES_FAILURE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/FETCH_VEHICLES_FAILURE");
var CLEAR_STORE = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__["moduleName"], "/CLEAR_STORE");
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_VEHICLES_REQUEST, "FETCH_VEHICLES_REQUEST", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/types.js");
  reactHotLoader.register(FETCH_VEHICLES_SUCCESS, "FETCH_VEHICLES_SUCCESS", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/types.js");
  reactHotLoader.register(FETCH_VEHICLES_FAILURE, "FETCH_VEHICLES_FAILURE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/types.js");
  reactHotLoader.register(CLEAR_STORE, "CLEAR_STORE", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/actions/types.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Vehicles/config.js":
/*!**************************************************!*\
  !*** ./src/client/js/modules/Vehicles/config.js ***!
  \**************************************************/
/*! exports provided: moduleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleName", function() { return moduleName; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var moduleName = "vehicles";
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(moduleName, "moduleName", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/config.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/modules/Vehicles/reducer/index.js":
/*!*********************************************************!*\
  !*** ./src/client/js/modules/Vehicles/reducer/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api */ "./src/client/js/api/index.js");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-loop */ "redux-loop");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_loop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/client/js/modules/Vehicles/actions/index.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/types */ "./src/client/js/modules/Vehicles/actions/types.js");
var _reducerMap;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};
var reducerMap = (_reducerMap = {}, _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_VEHICLES_REQUEST"], function (state) {
  if (state && !state.isFetching && !state.isFetched && !state.isFailed) {
    return Object(redux_loop__WEBPACK_IMPORTED_MODULE_2__["loop"])(_objectSpread({}, state, {
      isFetched: false,
      isFetching: true,
      isFailed: false
    }), redux_loop__WEBPACK_IMPORTED_MODULE_2__["Cmd"].run(api__WEBPACK_IMPORTED_MODULE_1__["default"].getVehicles, {
      successActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchVehiclesSuccessAction"],
      failActionCreator: _actions__WEBPACK_IMPORTED_MODULE_3__["fetchVehiclesFailureAction"],
      args: []
    }));
  }

  return state;
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_VEHICLES_SUCCESS"], function (state, _ref) {
  var _ref$payload = _ref.payload,
      roadster = _ref$payload.roadster,
      rockets = _ref$payload.rockets,
      ships = _ref$payload.ships;
  return _objectSpread({}, state, {
    isFetched: true,
    isFetching: false,
    isFailed: false,
    roadster: roadster,
    rockets: rockets,
    ships: ships.filter(function (item) {
      return item.image && item.ship_name && item.home_port;
    })
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["FETCH_VEHICLES_FAILURE"], function (state) {
  return _objectSpread({}, state, {
    isFetched: false,
    isFetching: false,
    isFailed: true
  });
}), _defineProperty(_reducerMap, _actions_types__WEBPACK_IMPORTED_MODULE_4__["CLEAR_STORE"], function () {
  return initialState;
}), _reducerMap);

var _default = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])(reducerMap, initialState);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/reducer/index.js");
  reactHotLoader.register(reducerMap, "reducerMap", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/reducer/index.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/modules/Vehicles/reducer/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/reducers/index.js":
/*!*****************************************!*\
  !*** ./src/client/js/reducers/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-loop */ "redux-loop");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_loop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_LaunchesAll_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/LaunchesAll/reducer */ "./src/client/js/modules/LaunchesAll/reducer/index.js");
/* harmony import */ var modules_MissionsAll_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/MissionsAll/reducer */ "./src/client/js/modules/MissionsAll/reducer/index.js");
/* harmony import */ var modules_NextLaunch_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/NextLaunch/reducer */ "./src/client/js/modules/NextLaunch/reducer/index.js");
/* harmony import */ var modules_RecentLaunches_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/RecentLaunches/reducer */ "./src/client/js/modules/RecentLaunches/reducer/index.js");
/* harmony import */ var modules_Vehicles_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/Vehicles/reducer */ "./src/client/js/modules/Vehicles/reducer/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_6__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();









var _default = function _default(history) {
  return Object(redux_loop__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    launchesAll: modules_LaunchesAll_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    missionsAll: modules_MissionsAll_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    nextLaunch: modules_NextLaunch_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    recentLaunches: modules_RecentLaunches_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
    vehicles: modules_Vehicles_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_6__["connectRouter"])(history)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/reducers/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/routes/index.js":
/*!***************************************!*\
  !*** ./src/client/js/routes/index.js ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var modules_NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/NotFound */ "./src/client/js/modules/NotFound/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_NextLaunch_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/NextLaunch/actions */ "./src/client/js/modules/NextLaunch/actions/index.js");
/* harmony import */ var modules_RecentLaunches_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/RecentLaunches/actions */ "./src/client/js/modules/RecentLaunches/actions/index.js");
/* harmony import */ var modules_MissionsAll_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/MissionsAll/actions */ "./src/client/js/modules/MissionsAll/actions/index.js");
/* harmony import */ var modules_LaunchesAll_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/LaunchesAll/actions */ "./src/client/js/modules/LaunchesAll/actions/index.js");
/* harmony import */ var modules_Vehicles_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/Vehicles/actions */ "./src/client/js/modules/Vehicles/actions/index.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var Home = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  chunkName: function chunkName() {
    return "Home";
  },
  isReady: function isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },
  requireAsync: function requireAsync() {
    return Promise.all(/*! import() | Home */[__webpack_require__.e("Home~Launches~Vehicles"), __webpack_require__.e("Home")]).then(__webpack_require__.bind(null, /*! modules/Home/views/Home */ "./src/client/js/modules/Home/views/Home.js"));
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! modules/Home/views/Home */ "./src/client/js/modules/Home/views/Home.js");
    }

    return eval('require.resolve')("modules/Home/views/Home");
  }
});
var Missions = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  chunkName: function chunkName() {
    return "Missions";
  },
  isReady: function isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },
  requireAsync: function requireAsync() {
    return __webpack_require__.e(/*! import() | Missions */ "Missions").then(__webpack_require__.bind(null, /*! modules/Missions/views/Missions */ "./src/client/js/modules/Missions/views/Missions.js"));
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! modules/Missions/views/Missions */ "./src/client/js/modules/Missions/views/Missions.js");
    }

    return eval('require.resolve')("modules/Missions/views/Missions");
  }
});
var Vehicles = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  chunkName: function chunkName() {
    return "Vehicles";
  },
  isReady: function isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },
  requireAsync: function requireAsync() {
    return Promise.all(/*! import() | Vehicles */[__webpack_require__.e("Home~Launches~Vehicles"), __webpack_require__.e("Vehicles")]).then(__webpack_require__.bind(null, /*! modules/Vehicles/container/Vehicles */ "./src/client/js/modules/Vehicles/container/Vehicles.js"));
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! modules/Vehicles/container/Vehicles */ "./src/client/js/modules/Vehicles/container/Vehicles.js");
    }

    return eval('require.resolve')("modules/Vehicles/container/Vehicles");
  }
});
var Launches = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  chunkName: function chunkName() {
    return "Launches";
  },
  isReady: function isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },
  requireAsync: function requireAsync() {
    return Promise.all(/*! import() | Launches */[__webpack_require__.e("Home~Launches~Vehicles"), __webpack_require__.e("Launches")]).then(__webpack_require__.bind(null, /*! modules/Launches/views/Launches */ "./src/client/js/modules/Launches/views/Launches.js"));
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! modules/Launches/views/Launches */ "./src/client/js/modules/Launches/views/Launches.js");
    }

    return eval('require.resolve')("modules/Launches/views/Launches");
  }
});
var routes = [{
  path: "/",
  exact: true,
  component: Home,
  loadData: function () {
    var _loadData = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(dispatch, req) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dispatch(Object(modules_NextLaunch_actions__WEBPACK_IMPORTED_MODULE_2__["fetchNextLaunchRequestAction"])());

            case 2:
              _context.next = 4;
              return dispatch(Object(modules_RecentLaunches_actions__WEBPACK_IMPORTED_MODULE_3__["fetchRecentLaunchesRequestAction"])(2));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadData(_x, _x2) {
      return _loadData.apply(this, arguments);
    }

    return loadData;
  }()
}, {
  path: "/missions",
  component: Missions,
  loadData: function () {
    var _loadData2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(dispatch, req) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dispatch(Object(modules_MissionsAll_actions__WEBPACK_IMPORTED_MODULE_4__["fetchMissionsRequestAction"])());

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loadData(_x3, _x4) {
      return _loadData2.apply(this, arguments);
    }

    return loadData;
  }()
}, {
  path: "/launches",
  component: Launches,
  loadData: function () {
    var _loadData3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(dispatch, req) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dispatch(Object(modules_LaunchesAll_actions__WEBPACK_IMPORTED_MODULE_5__["fetchLaunchesRequestAction"])());

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function loadData(_x5, _x6) {
      return _loadData3.apply(this, arguments);
    }

    return loadData;
  }()
}, {
  path: "/vehicles",
  component: Vehicles,
  loadData: function () {
    var _loadData4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(dispatch, req) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dispatch(Object(modules_Vehicles_actions__WEBPACK_IMPORTED_MODULE_6__["fetchVehiclesRequestAction"])());

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function loadData(_x7, _x8) {
      return _loadData4.apply(this, arguments);
    }

    return loadData;
  }()
}, {
  component: modules_NotFound__WEBPACK_IMPORTED_MODULE_0__["NotFound"],
  isNotFound: true
}];
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/routes/index.js");
  reactHotLoader.register(Missions, "Missions", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/routes/index.js");
  reactHotLoader.register(Vehicles, "Vehicles", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/routes/index.js");
  reactHotLoader.register(Launches, "Launches", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/routes/index.js");
  reactHotLoader.register(routes, "routes", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/routes/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/shared/styled/NavLink.js":
/*!************************************************!*\
  !*** ./src/client/js/shared/styled/NavLink.js ***!
  \************************************************/
/*! exports provided: NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();



var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"]).withConfig({
  componentId: "sc-8x48x9-0"
})(["color:", ";font-size:18px;margin-right:20px;&.current{color:", ";}"], function (props) {
  return props.theme.gray;
}, function (props) {
  return props.theme.blue;
});
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavLink, "NavLink", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/shared/styled/NavLink.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/shared/theme/index.js":
/*!*********************************************!*\
  !*** ./src/client/js/shared/theme/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  black: "#0c0c0c",
  white: "#F2F2F2",
  blue: "#005288",
  gray: "#777",
  darkGrey: "#333",
  boxColor: "#292929",
  red: "#CC0244",
  lightText: "#21272b",
  boxShadowLight: "rgba(0,0,0,0.4)",
  navigatorButtonBgColor: '#333',
  navigatorButtonColor: "#F2F2F2",
  navigatorButtonPadding: "15px"
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/shared/theme/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/client/js/store/index.js":
/*!**************************************!*\
  !*** ./src/client/js/store/index.js ***!
  \**************************************/
/*! exports provided: isServer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./src/client/js/reducers/index.js");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-loop */ "redux-loop");
/* harmony import */ var redux_loop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_loop__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();






var isServer = !(typeof window !== "undefined" && window.document && window.document.createElement);

var _default = function _default() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var history = isServer ? Object(history__WEBPACK_IMPORTED_MODULE_1__["createMemoryHistory"])({
    initialEntries: [url]
  }) : Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])();
  var enhancers = [Object(redux_loop__WEBPACK_IMPORTED_MODULE_4__["install"])()];

  if ( true && !isServer) {
    var devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  var middleware = [Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)];
  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers));
  var initialState = !isServer ? window.__PRELOADED_STATE__ : {};

  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(reducers__WEBPACK_IMPORTED_MODULE_3__["default"])(history), initialState, composedEnhancers);
  return {
    store: store,
    history: history
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isServer, "isServer", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/store/index.js");
  reactHotLoader.register(_default, "default", "/Users/nshelia/Documents/projects/spacexparty/src/client/js/store/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store */ "./src/client/js/store/index.js");
/* harmony import */ var modules_Application__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! modules/Application */ "./src/client/js/modules/Application/index.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/theme */ "./src/client/js/shared/theme/index.js");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! routes */ "./src/client/js/routes/index.js");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_17__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-console */


















var statsFile = path__WEBPACK_IMPORTED_MODULE_10___default.a.resolve('build/loadable-stats.json');
var app = express__WEBPACK_IMPORTED_MODULE_5___default()();
var PORT = process.env.PORT || 8080;
var ssrCache = new lru_cache__WEBPACK_IMPORTED_MODULE_17___default.a({
  max: 100 * 1024 * 1024,

  /* cache size will be 100 MB using `return n.length` as length() function */
  length: function length(n, key) {
    return n.length;
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
});

var getCacheKey = function getCacheKey(req, theme) {
  return "".concat(req.originalUrl, "&appTheme=").concat(theme);
};

app.use(compression__WEBPACK_IMPORTED_MODULE_12___default()());
app.use("/static", express__WEBPACK_IMPORTED_MODULE_5___default.a.static("build"));
app.get("/favicon.ico", function (req, res) {
  return res.status(204).end();
});
app.get("/*", function (req, res) {
  var key = getCacheKey(req, shared_theme__WEBPACK_IMPORTED_MODULE_11__["default"]);

  if (ssrCache.has(key)) {
    console.log("serving from cache ".concat(key));
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  var injectHTML = function injectHTML(data, _ref) {
    var helmet = _ref.helmet,
        body = _ref.body,
        styleTags = _ref.styleTags,
        scriptTags = _ref.scriptTags,
        state = _ref.state;
    data = data.replace("</head>", "".concat(helmet.title.toString()).concat(styleTags, "</head>"));
    data = data.replace("<main></main>", "<main>".concat(body, "</main><script>window.__PRELOADED_STATE__ = ").concat(state, "</script>").concat(scriptTags));
    return data;
  };

  var indexFile = path__WEBPACK_IMPORTED_MODULE_10___default.a.resolve("./build/index.html");
  fs__WEBPACK_IMPORTED_MODULE_9___default.a.readFile(indexFile, "utf8",
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(err, htmlData) {
      var context, _createStore, store, _matchRoutes, _matchRoutes2, branch, sheet, extractor, jsx, routeMarkup, scriptTags, helmet, styleTags, html;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!err) {
                _context.next = 3;
                break;
              }

              console.error("Something went wrong:", err);
              return _context.abrupt("return", res.status(500).send("Oops, better luck next time!"));

            case 3:
              context = {};
              _createStore = Object(store__WEBPACK_IMPORTED_MODULE_7__["default"])(req.url), store = _createStore.store;
              _matchRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_14__["matchRoutes"])(routes__WEBPACK_IMPORTED_MODULE_15__["routes"], req.url), _matchRoutes2 = _slicedToArray(_matchRoutes, 1), branch = _matchRoutes2[0];

              if (branch.route.isNotFound) {
                _context.next = 12;
                break;
              }

              if (!branch.route.loadData) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return branch.route.loadData(store.dispatch, req.url);

            case 10:
              _context.next = 13;
              break;

            case 12:
              res.status(404);

            case 13:
              sheet = new styled_components__WEBPACK_IMPORTED_MODULE_6__["ServerStyleSheet"]();
              extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_16__["ChunkExtractor"]({
                statsFile: statsFile,
                entrypoints: ["index"]
              });
              console.log("key ".concat(key, " not found, rendering"));
              jsx = extractor.collectChunks(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_6__["StyleSheetManager"], {
                sheet: sheet.instance
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
                theme: shared_theme__WEBPACK_IMPORTED_MODULE_11__["default"]
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
                store: store
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"], {
                location: req.url,
                context: context
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(modules_Application__WEBPACK_IMPORTED_MODULE_8__["Application"], null))))));
              routeMarkup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(jsx);
              scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();

              helmet = react_helmet__WEBPACK_IMPORTED_MODULE_13__["Helmet"].renderStatic();
              styleTags = sheet.getStyleTags(); // or extractor.getStyleElements();

              if (!(context.status === 404)) {
                _context.next = 24;
                break;
              }

              res.status(404);
              return _context.abrupt("return", res.end());

            case 24:
              if (!context.url) {
                _context.next = 27;
                break;
              }

              res.writeHead(302, {
                Location: context.url
              });
              return _context.abrupt("return", res.end());

            case 27:
              html = injectHTML(htmlData, {
                helmet: helmet,
                body: routeMarkup,
                styleTags: styleTags,
                scriptTags: scriptTags,
                state: JSON.stringify(store.getState()).replace(/</g, "\\u003c")
              });
              ssrCache.set(key, html);
              res.setHeader('x-cache', 'MISS');
              return _context.abrupt("return", res.send(html));

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
});
app.listen(PORT, console.log("App listening on port ".concat(PORT, "!")));
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(statsFile, "statsFile", "/Users/nshelia/Documents/projects/spacexparty/src/server/server.js");
  reactHotLoader.register(app, "app", "/Users/nshelia/Documents/projects/spacexparty/src/server/server.js");
  reactHotLoader.register(PORT, "PORT", "/Users/nshelia/Documents/projects/spacexparty/src/server/server.js");
  reactHotLoader.register(ssrCache, "ssrCache", "/Users/nshelia/Documents/projects/spacexparty/src/server/server.js");
  reactHotLoader.register(getCacheKey, "getCacheKey", "/Users/nshelia/Documents/projects/spacexparty/src/server/server.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "lodash/range":
/*!*******************************!*\
  !*** external "lodash/range" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/range");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown-now":
/*!**************************************!*\
  !*** external "react-countdown-now" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-loop":
/*!*****************************!*\
  !*** external "redux-loop" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-loop");

/***/ }),

/***/ "styled-bootstrap-grid":
/*!****************************************!*\
  !*** external "styled-bootstrap-grid" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-bootstrap-grid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map