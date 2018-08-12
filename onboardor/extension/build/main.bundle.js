/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/shared/setupErrorLogging.tsx":
/*!*************************************************!*\
  !*** ./Components/shared/setupErrorLogging.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var raven = window.Raven;
if (typeof raven !== 'undefined' && "https://dedee895d5b84f1ba2b813c6438297bf@sentry.io/1251612") {
    raven.config("https://dedee895d5b84f1ba2b813c6438297bf@sentry.io/1251612", {
        environment: "development"
    }).install();
}

/***/ }),

/***/ "./Components/shared/utilities/theme.tsx":
/*!***********************************************!*\
  !*** ./Components/shared/utilities/theme.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    fonts: {
        sans: "Montserrat, sans-serif"
    },
    breakpoints: [768, 992, 1200],
    fontWeights: {
        normal: 400,
        bold: 600
    },
    colors: {
        darkGrey: "#212121",
        error: "#ff3b3b",
        grey: "#4A4A4A",
        lightGrey: "#737373",
        primary: "#43cea2",
        primary2: "#2fdbab",
        secondary: "#3d9dff"
    }
};

/***/ }),

/***/ "./extension/Components/app/app.tsx":
/*!******************************************!*\
  !*** ./extension/Components/app/app.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _foundRelay = __webpack_require__(/*! found-relay */ "./node_modules/found-relay/lib/index.js");

var _environment = __webpack_require__(/*! ./environment/environment */ "./extension/Components/app/environment/environment.tsx");

var _environment2 = _interopRequireDefault(_environment);

var _router = __webpack_require__(/*! ./routing/router */ "./extension/Components/app/routing/router.tsx");

var _router2 = _interopRequireDefault(_router);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _theme = __webpack_require__(/*! ../../../Components/shared/utilities/theme */ "./Components/shared/utilities/theme.tsx");

var _theme2 = _interopRequireDefault(_theme);

var _store = __webpack_require__(/*! ./store/store */ "./extension/Components/app/store/store.tsx");

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = new _foundRelay.Resolver(_environment2.default);
var App = function App() {
    return _react2.default.createElement(_reactRedux.Provider, { store: _store2.default }, _react2.default.createElement(_rebass.Provider, { theme: _theme2.default }, _react2.default.createElement(_router2.default, { matchContext: { store: _store2.default }, resolver: resolver })));
};
exports.default = App;

/***/ }),

/***/ "./extension/Components/app/appContainer.tsx":
/*!***************************************************!*\
  !*** ./extension/Components/app/appContainer.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(/*! ../../../Components/shared/setupErrorLogging */ "./Components/shared/setupErrorLogging.tsx");

var _app = __webpack_require__(/*! ./app */ "./extension/Components/app/app.tsx");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const query = graphql`
//   query appContainerQuery {
//     organizations {
//       id
//       name
//       avatarUrl
//     }
//   }
// `;
//const renderApp = () => {
_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementsByClassName('repository-content')[0]);
//};
// renderApp();
// const observer = new MutationObserver(() => {
//   if (!document.getElementById("onboardor") &&
//       window.location.hash === onboardorHash) {
//     renderApp();
//   }
// });
// observer.observe(document, {
//   subtree: true,
//   childList: true,
// })
// renderNav();

/***/ }),

/***/ "./extension/Components/app/environment/environment.tsx":
/*!**************************************************************!*\
  !*** ./extension/Components/app/environment/environment.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _relayRuntime = __webpack_require__(/*! relay-runtime */ "./node_modules/relay-runtime/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchQuery = function fetchQuery(operation, variables) {
    return fetch("https://localhost:49891" + "/graphql", {
        body: (0, _stringify2.default)({
            query: operation.text,
            variables: variables
        }),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "post"
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        // https://github.com/facebook/relay/issues/1816
        if (json.errors) {
            return _promise2.default.reject(json.errors);
        }
        return _promise2.default.resolve(json);
    });
};
var network = _relayRuntime.Network.create(fetchQuery);
var source = new _relayRuntime.RecordSource();
var store = new _relayRuntime.Store(source);
var environment = new _relayRuntime.Environment({
    network: network,
    store: store
});
(0, _relayCompose.setEnviroment)(environment);
exports.default = environment;

/***/ }),

/***/ "./extension/Components/app/routing/routeConfig.tsx":
/*!**********************************************************!*\
  !*** ./extension/Components/app/routing/routeConfig.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _dashboardContainer = __webpack_require__(/*! ../../dashboard/dashboardContainer */ "./extension/Components/dashboard/dashboardContainer.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _found.makeRouteConfig)(_react2.default.createElement(_found.Route, { path: "/" }, _react2.default.createElement(_found.Route, (0, _assign2.default)({}, _dashboardContainer.routeConfig)))); /* tslint:disable:max-line-length */

/***/ }),

/***/ "./extension/Components/app/routing/router.tsx":
/*!*****************************************************!*\
  !*** ./extension/Components/app/routing/router.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var RenderError = function RenderError(_ref) {
    var error = _ref.error,
        router = _ref.router;

    router.replace({
        pathname: "/error/" + error.status,
        state: {
            error: error.data
        }
    });
};
exports.default = (0, _found.createConnectedRouter)({
    render: (0, _found.createRender)({
        renderError: RenderError
    })
});

/***/ }),

/***/ "./extension/Components/app/store/store.tsx":
/*!**************************************************!*\
  !*** ./extension/Components/app/store/store.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _farce = __webpack_require__(/*! farce */ "./node_modules/farce/lib/index.js");

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _routeConfig = __webpack_require__(/*! ../routing/routeConfig */ "./extension/Components/app/routing/routeConfig.tsx");

var _routeConfig2 = _interopRequireDefault(_routeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _farce.createHistoryEnhancer)({
    middlewares: [_farce.queryMiddleware],
    protocol: new _farce.MemoryProtocol(location)
});
var matcher = new _found.Matcher(_routeConfig2.default);
var matcherEnhancer = (0, _found.createMatchEnhancer)(matcher);
var composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var middleWare = composeEnhancers(historyEnhancer, matcherEnhancer);
var reducers = (0, _redux.combineReducers)({
    found: _found.foundReducer
});
var store = (0, _redux.createStore)(reducers, {}, middleWare);
store.dispatch(_farce.Actions.init());
exports.default = store;

/***/ }),

/***/ "./extension/Components/dashboard/dashboard.tsx":
/*!******************************************************!*\
  !*** ./extension/Components/dashboard/dashboard.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function Dashboard(props) {
  return _react2.default.createElement("div", { id: "onboardor" }, (0, _stringify2.default)(props));
};
exports.default = Dashboard;

/***/ }),

/***/ "./extension/Components/dashboard/dashboardContainer.tsx":
/*!***************************************************************!*\
  !*** ./extension/Components/dashboard/dashboardContainer.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _dashboard = __webpack_require__(/*! ./dashboard */ "./extension/Components/dashboard/dashboard.tsx");

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeConfig = exports.routeConfig = {
    Component: _dashboard2.default
};
exports.default = _dashboard2.default;

/***/ }),

/***/ 0:
/*!*************************************************************************************!*\
  !*** multi regenerator-runtime/runtime ./extension/Components/app/appContainer.tsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! I:\Users\Martin\onboardor\onboardor\extension\Components\app\appContainer.tsx */"./extension/Components/app/appContainer.tsx");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmcudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmRDb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFD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LFlBQVEseUJBQWE7QUFDbkIscUJBQWE7QUFETSxLQUFiO0FBRDJCLENBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJmOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNLGtCQUFrQixrQ0FBc0I7QUFDNUMsaUJBQWEsQ0FBQyxzQkFBRCxDQUQrQjtBQUU1QyxjQUFVLElBQUkscUJBQUosQ0FBbUIsUUFBbkI7QUFGa0MsQ0FBdEIsQ0FBeEI7QUFLQSxJQUFNLFVBQVUsSUFBSSxjQUFKLENBQVkscUJBQVosQ0FBaEI7QUFDQSxJQUFNLGtCQUFrQixnQ0FBb0IsT0FBcEIsQ0FBeEI7QUFDQSxJQUFNLG1CQUFvQixPQUFlLE1BQWYsQ0FBc0Isb0NBQXRCLElBQThELGNBQXhGO0FBRUEsSUFBTSxhQUFhLGlCQUNqQixlQURpQixFQUVqQixlQUZpQixDQUFuQjtBQUtBLElBQU0sV0FBVyw0QkFBZ0I7QUFDL0I7QUFEK0IsQ0FBaEIsQ0FBakI7QUFJQSxJQUFNLFFBQVEsd0JBQVksUUFBWixFQUFzQixFQUF0QixFQUEwQixVQUExQixDQUFkO0FBRUEsTUFBTSxRQUFOLENBQWUsZUFBYSxJQUFiLEVBQWY7a0JBRWUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCZixJQUFNLFlBQVksU0FBWixTQUFZLENBQUMsS0FBRDtBQUFBLFNBQ2hCLHVDQUFLLElBQUcsV0FBUixJQUNHLHlCQUFlLEtBQWYsQ0FESCxDQURnQjtBQUFBLENBQWxCO2tCQU1lLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUixJQUFNLG9DQUFjO0FBQ3pCLGVBQVc7QUFEYyxDQUFwQjtrQkFJUSxtQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiY29uc3QgcmF2ZW4gPSAod2luZG93IGFzIGFueSkuUmF2ZW47XG5cbmlmICh0eXBlb2YgcmF2ZW4gIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52LlNFTlRSWV9EU05fQ0xJRU5UKSB7XG4gIHJhdmVuLmNvbmZpZyhwcm9jZXNzLmVudi5TRU5UUllfRFNOX0NMSUVOVCwge1xuICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSkuaW5zdGFsbCgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmb250czoge1xuICAgIHNhbnM6IFwiTW9udHNlcnJhdCwgc2Fucy1zZXJpZlwiLFxuICB9LFxuICBicmVha3BvaW50czogW1xuICAgIDc2OCxcbiAgICA5OTIsXG4gICAgMTIwMFxuICBdLFxuICBmb250V2VpZ2h0czoge1xuICAgIG5vcm1hbDogNDAwLFxuICAgIGJvbGQ6IDYwMFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBkYXJrR3JleTogXCIjMjEyMTIxXCIsXG4gICAgZXJyb3I6IFwiI2ZmM2IzYlwiLFxuICAgIGdyZXk6IFwiIzRBNEE0QVwiLFxuICAgIGxpZ2h0R3JleTogXCIjNzM3MzczXCIsXG4gICAgcHJpbWFyeTogXCIjNDNjZWEyXCIsXG4gICAgcHJpbWFyeTI6IFwiIzJmZGJhYlwiLFxuICAgIHNlY29uZGFyeTogXCIjM2Q5ZGZmXCJcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSBcImZvdW5kLXJlbGF5XCI7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vcm91dGluZy9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlYmFzc1Byb3ZpZGVyIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvdGhlbWVcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSZWJhc3NQcm92aWRlclxuICAgICAgdGhlbWU9e3RoZW1lfVxuICAgID5cbiAgICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgICA8L1JlYmFzc1Byb3ZpZGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBcIi4uLy4uLy4uL0NvbXBvbmVudHMvc2hhcmVkL3NldHVwRXJyb3JMb2dnaW5nXCI7XG5pbXBvcnQgcmVuZGVyTmF2IGZyb20gXCIuLi9uYXYvbmF2TGlua0NvbnRhaW5lclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcblxuLy8gY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuLy8gICBxdWVyeSBhcHBDb250YWluZXJRdWVyeSB7XG4vLyAgICAgb3JnYW5pemF0aW9ucyB7XG4vLyAgICAgICBpZFxuLy8gICAgICAgbmFtZVxuLy8gICAgICAgYXZhdGFyVXJsXG4vLyAgICAgfVxuLy8gICB9XG4vLyBgO1xuXG4vL2NvbnN0IHJlbmRlckFwcCA9ICgpID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlcG9zaXRvcnktY29udGVudCcpWzBdKTtcbi8vfTtcblxuLy8gcmVuZGVyQXBwKCk7XG5cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuLy8gICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25ib2FyZG9yXCIpICYmXG4vLyAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gb25ib2FyZG9ySGFzaCkge1xuLy8gICAgIHJlbmRlckFwcCgpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuLy8gICBzdWJ0cmVlOiB0cnVlLFxuLy8gICBjaGlsZExpc3Q6IHRydWUsXG4vLyB9KVxuXG4vLyByZW5kZXJOYXYoKTtcbiIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uOiB7IHRleHQ6IHN0cmluZyB9LCB2YXJpYWJsZXM6IGFueSkgPT5cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBQX1VSTH0vZ3JhcGhxbGAsIHtcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcbiIsIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG5pbXBvcnQgeyBtYWtlUm91dGVDb25maWcsIFJvdXRlIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBkYXNoYm9hcmRSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9kYXNoYm9hcmQvZGFzaGJvYXJkQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgPFJvdXRlIHsuLi5kYXNoYm9hcmRSb3V0ZUNvbmZpZ30gLz5cbiAgPC9Sb3V0ZT4sXG4pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGVkUm91dGVyLCBjcmVhdGVSZW5kZXIgfSBmcm9tIFwiZm91bmRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGVycm9yOiB7XG4gICAgc3RhdHVzOiBudW1iZXJcbiAgICBkYXRhOiBudW1iZXIsXG4gIH07XG4gIHJvdXRlcjogYW55O1xufVxuXG5jb25zdCBSZW5kZXJFcnJvciA9ICh7IGVycm9yLCByb3V0ZXIgfTogSVByb3BzKSA9PiB7XG4gIHJvdXRlci5yZXBsYWNlKHtcbiAgICBwYXRobmFtZTogYC9lcnJvci8ke2Vycm9yLnN0YXR1c31gLFxuICAgIHN0YXRlOiB7XG4gICAgICBlcnJvcjogZXJyb3IuZGF0YSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7XG4gIHJlbmRlcjogY3JlYXRlUmVuZGVyKHtcbiAgICByZW5kZXJFcnJvcjogUmVuZGVyRXJyb3IsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25zIGFzIEZhcmNlQWN0aW9ucywgTWVtb3J5UHJvdG9jb2wsIGNyZWF0ZUhpc3RvcnlFbmhhbmNlcixcbiAgcXVlcnlNaWRkbGV3YXJlIH0gZnJvbSBcImZhcmNlXCI7XG5pbXBvcnQgeyBjcmVhdGVNYXRjaEVuaGFuY2VyLCBmb3VuZFJlZHVjZXIgYXMgZm91bmQsIE1hdGNoZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlQ29uZmlnXCI7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbiAgcHJvdG9jb2w6IG5ldyBNZW1vcnlQcm90b2NvbChsb2NhdGlvbiksXG59KTtcblxuY29uc3QgbWF0Y2hlciA9IG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKTtcbmNvbnN0IG1hdGNoZXJFbmhhbmNlciA9IGNyZWF0ZU1hdGNoRW5oYW5jZXIobWF0Y2hlcik7XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gKHdpbmRvdyBhcyBhbnkpLndpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgbWlkZGxlV2FyZSk7XG5cbnN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgaWQ9XCJvbmJvYXJkb3JcIj5cbiAgICB7SlNPTi5zdHJpbmdpZnkocHJvcHMpfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsImltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBEYXNoYm9hcmQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9