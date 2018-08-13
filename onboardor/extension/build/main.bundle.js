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

var div = document.createElement('div');
div.setAttribute("id", "onboardor");
document.body.appendChild(div);
_reactDom2.default.render(_react2.default.createElement(_app2.default, null), div);
// renderApp();
// const observer = new MutationObserver(() => {
//   if (!document.getElementById("onboardor") &&
//       window.location.hash === "#onboardor") {
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

exports.default = (0, _found.makeRouteConfig)(_react2.default.createElement(_found.Route, { path: "/" }, _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/everestate/everestate#onboardor" }, _dashboardContainer.routeConfig)))); /* tslint:disable:max-line-length */

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

/***/ "./extension/Components/dashboard/__generated__/dashboardContainerQuery.graphql.js":
/*!*****************************************************************************************!*\
  !*** ./extension/Components/dashboard/__generated__/dashboardContainerQuery.graphql.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash d7993d160f35c855766affad4be66ae4
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type dashboardContainerQueryVariables = {||};
export type dashboardContainerQueryResponse = {|
  +organizations: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +avatarUrl: string,
  |}>
|};
export type dashboardContainerQuery = {|
  variables: dashboardContainerQueryVariables,
  response: dashboardContainerQueryResponse,
|};
*/

/*
query dashboardContainerQuery {
  organizations {
    id
    name
    avatarUrl
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "organizations",
    "storageKey": null,
    "args": null,
    "concreteType": "Organization",
    "plural": true,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "avatarUrl",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "dashboardContainerQuery",
    "id": null,
    "text": "query dashboardContainerQuery {\n  organizations {\n    id\n    name\n    avatarUrl\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "dashboardContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
    },
    "operation": {
      "kind": "Operation",
      "name": "dashboardContainerQuery",
      "argumentDefinitions": [],
      "selections": v0
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = 'e974bb1898298285443a9e5d2734154f';
module.exports = node;

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

var _portalReplacer = __webpack_require__(/*! ../utilities/portalReplacer */ "./extension/Components/utilities/portalReplacer.tsx");

var _portalReplacer2 = _interopRequireDefault(_portalReplacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function Dashboard(props) {
  return _react2.default.createElement(_portalReplacer2.default, { node: document.getElementsByClassName('repository-content')[0] }, (0, _stringify2.default)(props));
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

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  var node = __webpack_require__(/*! ./__generated__/dashboardContainerQuery.graphql */ "./extension/Components/dashboard/__generated__/dashboardContainerQuery.graphql.js");

  if (node.hash && node.hash !== "e974bb1898298285443a9e5d2734154f") {
    console.error("The definition of 'dashboardContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/dashboardContainerQuery.graphql */ "./extension/Components/dashboard/__generated__/dashboardContainerQuery.graphql.js");
};
var routeConfig = exports.routeConfig = {
  Component: _dashboard2.default,
  query: query
};
exports.default = _dashboard2.default;

/***/ }),

/***/ "./extension/Components/utilities/portalReplacer.tsx":
/*!***********************************************************!*\
  !*** ./extension/Components/utilities/portalReplacer.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactPortal = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PortalReplacer = function (_React$Component) {
    (0, _inherits3.default)(PortalReplacer, _React$Component);

    function PortalReplacer() {
        (0, _classCallCheck3.default)(this, PortalReplacer);
        return (0, _possibleConstructorReturn3.default)(this, (PortalReplacer.__proto__ || (0, _getPrototypeOf2.default)(PortalReplacer)).apply(this, arguments));
    }

    (0, _createClass3.default)(PortalReplacer, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (this.props.node) {
                this.props.node.innerHTML = "";
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_reactPortal.Portal, { node: this.props.node }, this.props.children);
        }
    }]);
    return PortalReplacer;
}(_react2.default.Component);

exports.default = PortalReplacer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmcudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9fX2dlbmVyYXRlZF9fL2Rhc2hib2FyZENvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvdXRpbGl0aWVzL3BvcnRhbFJlcGxhY2VyLnRzeCJdLCJuYW1lcyI6WyJub2RlIiwidjAiLCJoYXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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c0JBQVQsQ0FBZ0Msb0JBQWhDLEVBQXNELENBQXRELENBQVAsRUFBZixFQUNHLHlCQUFlLEtBQWYsQ0FESCxDQURnQjtBQUFBLENBQWxCO2tCQU1lLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmY7Ozs7QUFFQSxJQUFNO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsQ0FBTjtBQVVPLElBQU0sb0NBQWM7QUFDekIsYUFBVyxtQkFEYztBQUV6QjtBQUZ5QixDQUFwQjtrQkFLUSxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7Ozs7O0lBRUEsYzs7Ozs7Ozs7Ozs2Q0FDb0I7QUFDaEIsZ0JBQUksS0FBSyxLQUFMLENBQVcsSUFBZixFQUFxQjtBQUNuQixxQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixTQUFoQixHQUE0QixFQUE1QjtBQUNEO0FBQ0Y7OztpQ0FDSztBQUNKLG1CQUNFLDhCQUFDLG1CQUFELEVBQU8sRUFBQyxNQUFNLEtBQUssS0FBTCxDQUFXLElBQWxCLEVBQVAsRUFDRyxLQUFLLEtBQUwsQ0FBVyxRQURkLENBREY7QUFLRDs7O0VBWjBCLGdCQUFNLFM7O2tCQWVwQixjIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJjb25zdCByYXZlbiA9ICh3aW5kb3cgYXMgYW55KS5SYXZlbjtcblxuaWYgKHR5cGVvZiByYXZlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuU0VOVFJZX0RTTl9DTElFTlQpIHtcbiAgcmF2ZW4uY29uZmlnKHByb2Nlc3MuZW52LlNFTlRSWV9EU05fQ0xJRU5ULCB7XG4gICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KS5pbnN0YWxsKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvbnRzOiB7XG4gICAgc2FuczogXCJNb250c2VycmF0LCBzYW5zLXNlcmlmXCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgNzY4LFxuICAgIDk5MixcbiAgICAxMjAwXG4gIF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgbm9ybWFsOiA0MDAsXG4gICAgYm9sZDogNjAwXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIGRhcmtHcmV5OiBcIiMyMTIxMjFcIixcbiAgICBlcnJvcjogXCIjZmYzYjNiXCIsXG4gICAgZ3JleTogXCIjNEE0QTRBXCIsXG4gICAgbGlnaHRHcmV5OiBcIiM3MzczNzNcIixcbiAgICBwcmltYXJ5OiBcIiM0M2NlYTJcIixcbiAgICBwcmltYXJ5MjogXCIjMmZkYmFiXCIsXG4gICAgc2Vjb25kYXJ5OiBcIiMzZDlkZmZcIlxuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tIFwiZm91bmQtcmVsYXlcIjtcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9yb3V0aW5nL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmViYXNzUHJvdmlkZXIgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihlbnZpcm9ubWVudCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJlYmFzc1Byb3ZpZGVyXG4gICAgICB0aGVtZT17dGhlbWV9XG4gICAgPlxuICAgICAgPFJvdXRlciBtYXRjaENvbnRleHQ9e3sgc3RvcmUgfX0gcmVzb2x2ZXI9e3Jlc29sdmVyfSAvPlxuICAgIDwvUmViYXNzUHJvdmlkZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmdcIjtcbmltcG9ydCByZW5kZXJOYXYgZnJvbSBcIi4uL25hdi9uYXZMaW5rQ29udGFpbmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25ib2FyZG9yXCIpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkaXYpO1xuXG4vLyByZW5kZXJBcHAoKTtcblxuLy8gY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4vLyAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmJvYXJkb3JcIikgJiZcbi8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNvbmJvYXJkb3JcIikge1xuLy8gICAgIHJlbmRlckFwcCgpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuLy8gICBzdWJ0cmVlOiB0cnVlLFxuLy8gICBjaGlsZExpc3Q6IHRydWUsXG4vLyB9KVxuXG4vLyByZW5kZXJOYXYoKTtcbiIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uOiB7IHRleHQ6IHN0cmluZyB9LCB2YXJpYWJsZXM6IGFueSkgPT5cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBQX1VSTH0vZ3JhcGhxbGAsIHtcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcbiIsIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG5pbXBvcnQgeyBtYWtlUm91dGVDb25maWcsIFJvdXRlIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBkYXNoYm9hcmRSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9kYXNoYm9hcmQvZGFzaGJvYXJkQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gICAgPFJvdXRlIHBhdGg9XCIvZXZlcmVzdGF0ZS9ldmVyZXN0YXRlI29uYm9hcmRvclwiIHsuLi5kYXNoYm9hcmRSb3V0ZUNvbmZpZ30gLz5cbiAgPC9Sb3V0ZT4sXG4pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGVkUm91dGVyLCBjcmVhdGVSZW5kZXIgfSBmcm9tIFwiZm91bmRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGVycm9yOiB7XG4gICAgc3RhdHVzOiBudW1iZXJcbiAgICBkYXRhOiBudW1iZXIsXG4gIH07XG4gIHJvdXRlcjogYW55O1xufVxuXG5jb25zdCBSZW5kZXJFcnJvciA9ICh7IGVycm9yLCByb3V0ZXIgfTogSVByb3BzKSA9PiB7XG4gIHJvdXRlci5yZXBsYWNlKHtcbiAgICBwYXRobmFtZTogYC9lcnJvci8ke2Vycm9yLnN0YXR1c31gLFxuICAgIHN0YXRlOiB7XG4gICAgICBlcnJvcjogZXJyb3IuZGF0YSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7XG4gIHJlbmRlcjogY3JlYXRlUmVuZGVyKHtcbiAgICByZW5kZXJFcnJvcjogUmVuZGVyRXJyb3IsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25zIGFzIEZhcmNlQWN0aW9ucywgTWVtb3J5UHJvdG9jb2wsIGNyZWF0ZUhpc3RvcnlFbmhhbmNlcixcbiAgcXVlcnlNaWRkbGV3YXJlIH0gZnJvbSBcImZhcmNlXCI7XG5pbXBvcnQgeyBjcmVhdGVNYXRjaEVuaGFuY2VyLCBmb3VuZFJlZHVjZXIgYXMgZm91bmQsIE1hdGNoZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlQ29uZmlnXCI7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbiAgcHJvdG9jb2w6IG5ldyBNZW1vcnlQcm90b2NvbChsb2NhdGlvbiksXG59KTtcblxuY29uc3QgbWF0Y2hlciA9IG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKTtcbmNvbnN0IG1hdGNoZXJFbmhhbmNlciA9IGNyZWF0ZU1hdGNoRW5oYW5jZXIobWF0Y2hlcik7XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gKHdpbmRvdyBhcyBhbnkpLndpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgbWlkZGxlV2FyZSk7XG5cbnN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggZDc5OTNkMTYwZjM1Yzg1NTc2NmFmZmFkNGJlNjZhZTRcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBkYXNoYm9hcmRDb250YWluZXJRdWVyeVZhcmlhYmxlcyA9IHt8fH07XG5leHBvcnQgdHlwZSBkYXNoYm9hcmRDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK29yZ2FuaXphdGlvbnM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICtuYW1lOiBzdHJpbmcsXG4gICAgK2F2YXRhclVybDogc3RyaW5nLFxuICB8fT5cbnx9O1xuZXhwb3J0IHR5cGUgZGFzaGJvYXJkQ29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IGRhc2hib2FyZENvbnRhaW5lclF1ZXJ5VmFyaWFibGVzLFxuICByZXNwb25zZTogZGFzaGJvYXJkQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgZGFzaGJvYXJkQ29udGFpbmVyUXVlcnkge1xuICBvcmdhbml6YXRpb25zIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICBhdmF0YXJVcmxcbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc1wiLFxuICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgIFwiYXJnc1wiOiBudWxsLFxuICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhdmF0YXJVcmxcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJkYXNoYm9hcmRDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IGRhc2hib2FyZENvbnRhaW5lclF1ZXJ5IHtcXG4gIG9yZ2FuaXphdGlvbnMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIGF2YXRhclVybFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJkYXNoYm9hcmRDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogdjBcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImRhc2hib2FyZENvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MFxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZTk3NGJiMTg5ODI5ODI4NTQ0M2E5ZTVkMjczNDE1NGYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcnRhbFJlcGxhY2VyIGZyb20gXCIuLi91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXJcIjtcblxuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKSA9PiAoXG4gIDxQb3J0YWxSZXBsYWNlciBub2RlPXtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXBvc2l0b3J5LWNvbnRlbnQnKVswXX0+XG4gICAge0pTT04uc3RyaW5naWZ5KHByb3BzKX1cbiAgPC9Qb3J0YWxSZXBsYWNlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsImltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgZGFzaGJvYXJkQ29udGFpbmVyUXVlcnkge1xuICAgIG9yZ2FuaXphdGlvbnMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGF2YXRhclVybFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IERhc2hib2FyZCxcbiAgcXVlcnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCJpbXBvcnQgeyBQb3J0YWwsIFBvcnRhbFByb3BzIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQb3J0YWxSZXBsYWNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQb3J0YWxQcm9wcz4ge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubm9kZSkge1xuICAgICAgdGhpcy5wcm9wcy5ub2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbCBub2RlPXt0aGlzLnByb3BzLm5vZGV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsUmVwbGFjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9