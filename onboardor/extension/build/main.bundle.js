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

var _navLinkContainer = __webpack_require__(/*! ../../nav/navLinkContainer */ "./extension/Components/nav/navLinkContainer.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* tslint:disable:max-line-length */
exports.default = (0, _found.makeRouteConfig)(_react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/" }, _navLinkContainer.routeConfig), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/onboardor" }, _dashboardContainer.routeConfig))));

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _found.createConnectedRouter)({
    render: (0, _found.createRender)({
        renderError: function renderError(_ref) {
            var error = _ref.error;
            return _react2.default.createElement("div", null, error.status === 404 ? 'Not found' : 'Error');
        }
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
    protocol: new _farce.HashProtocol()
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

/***/ "./extension/Components/nav/__generated__/navLinkContainerQuery.graphql.js":
/*!*********************************************************************************!*\
  !*** ./extension/Components/nav/__generated__/navLinkContainerQuery.graphql.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 21c853de188d3658a7d9a5d4ddf9e6c5
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type navLinkContainerQueryVariables = {||};
export type navLinkContainerQueryResponse = {|
  +setup: ?string
|};
export type navLinkContainerQuery = {|
  variables: navLinkContainerQueryVariables,
  response: navLinkContainerQueryResponse,
|};
*/

/*
query navLinkContainerQuery {
  setup
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "ScalarField",
    "alias": null,
    "name": "setup",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "navLinkContainerQuery",
    "id": null,
    "text": "query navLinkContainerQuery {\n  setup\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "navLinkContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
    },
    "operation": {
      "kind": "Operation",
      "name": "navLinkContainerQuery",
      "argumentDefinitions": [],
      "selections": v0
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '3e090ad559ead70d96fccbbb328b7752';
module.exports = node;

/***/ }),

/***/ "./extension/Components/nav/navLink.tsx":
/*!**********************************************!*\
  !*** ./extension/Components/nav/navLink.tsx ***!
  \**********************************************/
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPortal = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = (0, _styledComponents2.default)(_found.Link).withConfig({
    displayName: "navLink__Anchor"
})(["", ""], function (props) {
    return props.selected && "&.reponav-item.selected {\n      border-color: " + props.theme.colors.primary + " rgb(229, 229, 229) transparent;\n    }";
});
var id = "onboardor-nav-link";

var NavLink = function (_React$Component) {
    (0, _inherits3.default)(NavLink, _React$Component);

    function NavLink(props, observer) {
        (0, _classCallCheck3.default)(this, NavLink);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NavLink.__proto__ || (0, _getPrototypeOf2.default)(NavLink)).call(this, props));

        _this.observer = observer;
        _this.state = {
            selected: false
        };
        return _this;
    }

    (0, _createClass3.default)(NavLink, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // this.observer = new MutationObserver(() => {
            //   if (window.location.hash === "#onboardor") {
            //     const selectedItem = document.querySelector(`.reponav-item.selected:not([id='${id}'])`);
            //     if (selectedItem) {
            //       selectedItem.classList.remove("selected");
            //     }
            //     this.setState({ selected: true });
            //   } else {
            //     this.setState({ selected: false });
            //   }
            // });
            // this.observer.observe(document, {
            //   subtree: true,
            //   childList: true,
            // })
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            // this.observer.disconnect();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_reactPortal.Portal, { node: document.getElementsByClassName("reponav")[0] }, _react2.default.createElement(Anchor, { id: id, to: "/onboardor", className: (0, _classnames2.default)("reponav-item", this.state.selected && "selected"), selected: this.state.selected }, "onboardor"));
        }
    }]);
    return NavLink;
}(_react2.default.Component);

exports.default = (0, _found.withRouter)(NavLink);

/***/ }),

/***/ "./extension/Components/nav/navLinkContainer.tsx":
/*!*******************************************************!*\
  !*** ./extension/Components/nav/navLinkContainer.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _navLink = __webpack_require__(/*! ./navLink */ "./extension/Components/nav/navLink.tsx");

var _navLink2 = _interopRequireDefault(_navLink);

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _oAuthNavLink = __webpack_require__(/*! ./oAuthNavLink */ "./extension/Components/nav/oAuthNavLink.tsx");

var _oAuthNavLink2 = _interopRequireDefault(_oAuthNavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const observer = new MutationObserver(() => {
//   if (!document.getElementById("onboardor-nav-link")) {
//     renderNav();
//   }
// });
// observer.observe(document, {
//   subtree: true,
//   childList: true,
// });
var query = function query() {
  var node = __webpack_require__(/*! ./__generated__/navLinkContainerQuery.graphql */ "./extension/Components/nav/__generated__/navLinkContainerQuery.graphql.js");

  if (node.hash && node.hash !== "3e090ad559ead70d96fccbbb328b7752") {
    console.error("The definition of 'navLinkContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/navLinkContainerQuery.graphql */ "./extension/Components/nav/__generated__/navLinkContainerQuery.graphql.js");
};
var NavLinkContainer = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return !!props.setup;
}, (0, _recompose.renderComponent)(_oAuthNavLink2.default)))(_navLink2.default);
var routeConfig = exports.routeConfig = {
  Component: NavLinkContainer,
  query: query
};
exports.default = NavLinkContainer;

/***/ }),

/***/ "./extension/Components/nav/oAuthNavLink.tsx":
/*!***************************************************!*\
  !*** ./extension/Components/nav/oAuthNavLink.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactPortal = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = "onboardor-nav-link";
var OAuthNavLink = function OAuthNavLink(_ref) {
    var setup = _ref.setup;
    return _react2.default.createElement(_reactPortal.Portal, { node: document.getElementsByClassName("reponav")[0] }, _react2.default.createElement("a", { id: id, href: setup, className: "reponav-item" }, "onboardor"));
};
exports.default = OAuthNavLink;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmcudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9fX2dlbmVyYXRlZF9fL2Rhc2hib2FyZENvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L19fZ2VuZXJhdGVkX18vbmF2TGlua0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L25hdkxpbmsudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL25hdi9uYXZMaW5rQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9uYXYvb0F1dGhOYXZMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXIudHN4Il0sIm5hbWVzIjpbIm5vZGUiLCJ2MCIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtB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QkFlcEIsYyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiY29uc3QgcmF2ZW4gPSAod2luZG93IGFzIGFueSkuUmF2ZW47XG5cbmlmICh0eXBlb2YgcmF2ZW4gIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52LlNFTlRSWV9EU05fQ0xJRU5UKSB7XG4gIHJhdmVuLmNvbmZpZyhwcm9jZXNzLmVudi5TRU5UUllfRFNOX0NMSUVOVCwge1xuICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSkuaW5zdGFsbCgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmb250czoge1xuICAgIHNhbnM6IFwiTW9udHNlcnJhdCwgc2Fucy1zZXJpZlwiLFxuICB9LFxuICBicmVha3BvaW50czogW1xuICAgIDc2OCxcbiAgICA5OTIsXG4gICAgMTIwMFxuICBdLFxuICBmb250V2VpZ2h0czoge1xuICAgIG5vcm1hbDogNDAwLFxuICAgIGJvbGQ6IDYwMFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBkYXJrR3JleTogXCIjMjEyMTIxXCIsXG4gICAgZXJyb3I6IFwiI2ZmM2IzYlwiLFxuICAgIGdyZXk6IFwiIzRBNEE0QVwiLFxuICAgIGxpZ2h0R3JleTogXCIjNzM3MzczXCIsXG4gICAgcHJpbWFyeTogXCIjNDNjZWEyXCIsXG4gICAgcHJpbWFyeTI6IFwiIzJmZGJhYlwiLFxuICAgIHNlY29uZGFyeTogXCIjM2Q5ZGZmXCJcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSBcImZvdW5kLXJlbGF5XCI7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vcm91dGluZy9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlYmFzc1Byb3ZpZGVyIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvdGhlbWVcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSZWJhc3NQcm92aWRlclxuICAgICAgdGhlbWU9e3RoZW1lfVxuICAgID5cbiAgICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgICA8L1JlYmFzc1Byb3ZpZGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBcIi4uLy4uLy4uL0NvbXBvbmVudHMvc2hhcmVkL3NldHVwRXJyb3JMb2dnaW5nXCI7XG5pbXBvcnQgcmVuZGVyTmF2IGZyb20gXCIuLi9uYXYvbmF2TGlua0NvbnRhaW5lclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcblxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uYm9hcmRvclwiKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZGl2KTtcblxuLy8gcmVuZGVyQXBwKCk7XG5cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuLy8gICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25ib2FyZG9yXCIpICYmXG4vLyAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjb25ib2FyZG9yXCIpIHtcbi8vICAgICByZW5kZXJBcHAoKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtcbi8vICAgc3VidHJlZTogdHJ1ZSxcbi8vICAgY2hpbGRMaXN0OiB0cnVlLFxuLy8gfSlcblxuLy8gcmVuZGVyTmF2KCk7XG4iLCJpbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgTmV0d29yayxcbiAgUmVjb3JkU291cmNlLFxuICBTdG9yZSxcbn0gZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBmZXRjaFF1ZXJ5ID0gKG9wZXJhdGlvbjogeyB0ZXh0OiBzdHJpbmcgfSwgdmFyaWFibGVzOiBhbnkpID0+XG4gIGZldGNoKGAke3Byb2Nlc3MuZW52LkFQUF9VUkx9L2dyYXBocWxgLCB7XG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IG9wZXJhdGlvbi50ZXh0LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVsYXkvaXNzdWVzLzE4MTZcbiAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbi5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgIH0pO1xuXG5jb25zdCBuZXR3b3JrID0gTmV0d29yay5jcmVhdGUoZmV0Y2hRdWVyeSk7XG5jb25zdCBzb3VyY2UgPSBuZXcgUmVjb3JkU291cmNlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShzb3VyY2UpO1xuY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICBuZXR3b3JrLFxuICBzdG9yZSxcbn0pO1xuXG5zZXRFbnZpcm9tZW50KGVudmlyb25tZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuaW1wb3J0IHsgbWFrZVJvdXRlQ29uZmlnLCBSb3V0ZSB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZGFzaGJvYXJkUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vZGFzaGJvYXJkL2Rhc2hib2FyZENvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgbmF2TGlua1JvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL25hdi9uYXZMaW5rQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCIgey4uLm5hdkxpbmtSb3V0ZUNvbmZpZ30+XG4gICAgPFJvdXRlIHBhdGg9XCIvb25ib2FyZG9yXCIgey4uLmRhc2hib2FyZFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIsIGNyZWF0ZVJlbmRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZXJyb3I6IHtcbiAgICBzdGF0dXM6IG51bWJlclxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6ICh7IGVycm9yIH06IElQcm9wcykgPT4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yLnN0YXR1cyA9PT0gNDA0ID8gJ05vdCBmb3VuZCcgOiAnRXJyb3InfVxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IEFjdGlvbnMgYXMgRmFyY2VBY3Rpb25zLCBIYXNoUHJvdG9jb2wsIGNyZWF0ZUhpc3RvcnlFbmhhbmNlcixcbiAgcXVlcnlNaWRkbGV3YXJlIH0gZnJvbSBcImZhcmNlXCI7XG5pbXBvcnQgeyBjcmVhdGVNYXRjaEVuaGFuY2VyLCBmb3VuZFJlZHVjZXIgYXMgZm91bmQsIE1hdGNoZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlQ29uZmlnXCI7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbiAgcHJvdG9jb2w6IG5ldyBIYXNoUHJvdG9jb2woKSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyID0gbmV3IE1hdGNoZXIocm91dGVDb25maWcpO1xuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihtYXRjaGVyKTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAod2luZG93IGFzIGFueSkud2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZUVuaGFuY2VycyhcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvdW5kLFxufSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBtaWRkbGVXYXJlKTtcblxuc3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCBkNzk5M2QxNjBmMzVjODU1NzY2YWZmYWQ0YmU2NmFlNFxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmV4cG9ydCB0eXBlIGRhc2hib2FyZENvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3x8fTtcbmV4cG9ydCB0eXBlIGRhc2hib2FyZENvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArb3JnYW5pemF0aW9uczogJFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2lkOiBzdHJpbmcsXG4gICAgK25hbWU6IHN0cmluZyxcbiAgICArYXZhdGFyVXJsOiBzdHJpbmcsXG4gIHx9PlxufH07XG5leHBvcnQgdHlwZSBkYXNoYm9hcmRDb250YWluZXJRdWVyeSA9IHt8XG4gIHZhcmlhYmxlczogZGFzaGJvYXJkQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBkYXNoYm9hcmRDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBkYXNoYm9hcmRDb250YWluZXJRdWVyeSB7XG4gIG9yZ2FuaXphdGlvbnMge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIGF2YXRhclVybFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zXCIsXG4gICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgXCJhcmdzXCI6IG51bGwsXG4gICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImF2YXRhclVybFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcImRhc2hib2FyZENvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgZGFzaGJvYXJkQ29udGFpbmVyUXVlcnkge1xcbiAgb3JnYW5pemF0aW9ucyB7XFxuICAgIGlkXFxuICAgIG5hbWVcXG4gICAgYXZhdGFyVXJsXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImRhc2hib2FyZENvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MFxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZGFzaGJvYXJkQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdlOTc0YmIxODk4Mjk4Mjg1NDQzYTllNWQyNzM0MTU0Zic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9ydGFsUmVwbGFjZXIgZnJvbSBcIi4uL3V0aWxpdGllcy9wb3J0YWxSZXBsYWNlclwiO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpID0+IChcbiAgPFBvcnRhbFJlcGxhY2VyIG5vZGU9e2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlcG9zaXRvcnktY29udGVudCcpWzBdfT5cbiAgICB7SlNPTi5zdHJpbmdpZnkocHJvcHMpfVxuICA8L1BvcnRhbFJlcGxhY2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcblxuY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBkYXNoYm9hcmRDb250YWluZXJRdWVyeSB7XG4gICAgb3JnYW5pemF0aW9ucyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXZhdGFyVXJsXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogRGFzaGJvYXJkLFxuICBxdWVyeSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMjFjODUzZGUxODhkMzY1OGE3ZDlhNWQ0ZGRmOWU2YzVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBuYXZMaW5rQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fHx9O1xuZXhwb3J0IHR5cGUgbmF2TGlua0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArc2V0dXA6ID9zdHJpbmdcbnx9O1xuZXhwb3J0IHR5cGUgbmF2TGlua0NvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBuYXZMaW5rQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBuYXZMaW5rQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgbmF2TGlua0NvbnRhaW5lclF1ZXJ5IHtcbiAgc2V0dXBcbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgXCJhbGlhc1wiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcInNldHVwXCIsXG4gICAgXCJhcmdzXCI6IG51bGwsXG4gICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgfVxuXTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwibmF2TGlua0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgbmF2TGlua0NvbnRhaW5lclF1ZXJ5IHtcXG4gIHNldHVwXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcIm5hdkxpbmtDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogdjBcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIm5hdkxpbmtDb250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogdjBcbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzNlMDkwYWQ1NTllYWQ3MGQ5NmZjY2JiYjMyOGI3NzUyJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJU3R5bGVQcm9wcywgSU1hdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvdHlwZXNcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tIFwicmVhY3QtcG9ydGFsXCI7XG5pbXBvcnQgeyBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSBcImZvdW5kXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBtYXRjaDogSU1hdGNoO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJQW5jaG9yUHJvcHMgZXh0ZW5kcyBJU3R5bGVQcm9wcyB7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBBbmNob3IgPSBzdHlsZWQoTGluaylgXG4gICR7KHByb3BzOiBJQW5jaG9yUHJvcHMpID0+IHByb3BzLnNlbGVjdGVkICYmIChcbiAgICBgJi5yZXBvbmF2LWl0ZW0uc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fSByZ2IoMjI5LCAyMjksIDIyOSkgdHJhbnNwYXJlbnQ7XG4gICAgfWBcbiAgKX1cbmA7XG5cbmNvbnN0IGlkID0gXCJvbmJvYXJkb3ItbmF2LWxpbmtcIjtcblxuY2xhc3MgTmF2TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczoge30sIHB1YmxpYyBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgIC8vICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNvbmJvYXJkb3JcIikge1xuICAgIC8vICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmVwb25hdi1pdGVtLnNlbGVjdGVkOm5vdChbaWQ9JyR7aWR9J10pYCk7XG5cbiAgICAvLyAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgIC8vICAgICAgIHNlbGVjdGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHRydWUgfSk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgLy8gICBzdWJ0cmVlOiB0cnVlLFxuICAgIC8vICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIC8vIH0pXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIG5vZGU9e2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZXBvbmF2XCIpWzBdfT5cbiAgICAgICAgPEFuY2hvclxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB0bz1cIi9vbmJvYXJkb3JcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInJlcG9uYXYtaXRlbVwiLCB0aGlzLnN0YXRlLnNlbGVjdGVkICYmIFwic2VsZWN0ZWRcIil9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9XG4gICAgICAgID5cbiAgICAgICAgICBvbmJvYXJkb3JcbiAgICAgICAgPC9BbmNob3I+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2TGluayk7XG4iLCJpbXBvcnQgTmF2TGluayBmcm9tIFwiLi9uYXZMaW5rXCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjb21wb3NlLCBicmFuY2gsIHJlbmRlckNvbXBvbmVudCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBvQXV0aE5hdkxpbmsgZnJvbSBcIi4vb0F1dGhOYXZMaW5rXCI7XG5cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuLy8gICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25ib2FyZG9yLW5hdi1saW5rXCIpKSB7XG4vLyAgICAgcmVuZGVyTmF2KCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4vLyAgIHN1YnRyZWU6IHRydWUsXG4vLyAgIGNoaWxkTGlzdDogdHJ1ZSxcbi8vIH0pO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IG5hdkxpbmtDb250YWluZXJRdWVyeSB7XG4gICAgc2V0dXBcbiAgfVxuYDtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNldHVwOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkxpbmtDb250YWluZXIgPSBjb21wb3NlKFxuICBicmFuY2goXG4gICAgKHByb3BzOiBJUHJvcHMpID0+ICEhcHJvcHMuc2V0dXAsXG4gICAgcmVuZGVyQ29tcG9uZW50KG9BdXRoTmF2TGluayksXG4gIClcbikoKE5hdkxpbmspKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IE5hdkxpbmtDb250YWluZXIsXG4gIHF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcblxuY29uc3QgaWQgPSBcIm9uYm9hcmRvci1uYXYtbGlua1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgc2V0dXA6IHN0cmluZztcbn1cblxuY29uc3QgT0F1dGhOYXZMaW5rID0gKHtcbiAgc2V0dXAsXG59OiBJUHJvcHMpID0+IChcbiAgPFBvcnRhbCBub2RlPXtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVwb25hdlwiKVswXX0+XG4gICAgPGFcbiAgICAgIGlkPXtpZH1cbiAgICAgIGhyZWY9e3NldHVwfVxuICAgICAgY2xhc3NOYW1lPVwicmVwb25hdi1pdGVtXCJcbiAgICA+XG4gICAgICBvbmJvYXJkb3JcbiAgICA8L2E+XG4gIDwvUG9ydGFsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT0F1dGhOYXZMaW5rO1xuIiwiaW1wb3J0IHsgUG9ydGFsLCBQb3J0YWxQcm9wcyB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUG9ydGFsUmVwbGFjZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UG9ydGFsUHJvcHM+IHtcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm5vZGUpIHtcbiAgICAgIHRoaXMucHJvcHMubm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgbm9kZT17dGhpcy5wcm9wcy5ub2RlfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhbFJlcGxhY2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==