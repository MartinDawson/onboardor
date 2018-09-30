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
/******/ 	__webpack_require__.p = "/";
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

/***/ "./Components/app/app.tsx":
/*!********************************!*\
  !*** ./Components/app/app.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  * { box-sizing: border-box; }\n  body { margin: 0; min-height: 100%; height: 100%; }\n  #app { height: inherit; > div { height: 100%; } }\n  html { height: 100%; }\n  a { color: inherit; text-decoration: none; }\n  ul { list-style: none; margin: 0; padding: 0; }\n  li { list-style: none }\n  button { border: 0; padding: 0; font: inherit; outline: none; cursor: pointer; }\n  svg { fill: #4A4A4A; }\n"], ["\n  * { box-sizing: border-box; }\n  body { margin: 0; min-height: 100%; height: 100%; }\n  #app { height: inherit; > div { height: 100%; } }\n  html { height: 100%; }\n  a { color: inherit; text-decoration: none; }\n  ul { list-style: none; margin: 0; padding: 0; }\n  li { list-style: none }\n  button { border: 0; padding: 0; font: inherit; outline: none; cursor: pointer; }\n  svg { fill: #4A4A4A; }\n"]);

var _foundRelay = __webpack_require__(/*! found-relay */ "./node_modules/found-relay/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _environment = __webpack_require__(/*! ./environment/environment */ "./Components/app/environment/environment.tsx");

var _environment2 = _interopRequireDefault(_environment);

var _router = __webpack_require__(/*! ./routing/router */ "./Components/app/routing/router.tsx");

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(/*! ./store/store */ "./Components/app/store/store.tsx");

var _store2 = _interopRequireDefault(_store);

var _theme = __webpack_require__(/*! ../shared/utilities/theme */ "./Components/shared/utilities/theme.tsx");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* tslint:disable no-unused-expression */
(0, _styledComponents.injectGlobal)(_templateObject);
/* tslint:enable no-unused-expression */
var resolver = new _foundRelay.Resolver(_environment2.default);
var App = function App() {
  return _react2.default.createElement(_reactRedux.Provider, { store: _store2.default }, _react2.default.createElement(_rebass.Provider, { theme: _theme2.default }, _react2.default.createElement(_router2.default, { matchContext: { store: _store2.default }, resolver: resolver })));
};
exports.default = App;

/***/ }),

/***/ "./Components/app/appContainer.tsx":
/*!*****************************************!*\
  !*** ./Components/app/appContainer.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(/*! ../shared/setupErrorLogging */ "./Components/shared/setupErrorLogging.tsx");

var _app = __webpack_require__(/*! ./app */ "./Components/app/app.tsx");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById("app"));

/***/ }),

/***/ "./Components/app/environment/environment.tsx":
/*!****************************************************!*\
  !*** ./Components/app/environment/environment.tsx ***!
  \****************************************************/
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

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var _relayRuntime = __webpack_require__(/*! relay-runtime */ "./node_modules/relay-runtime/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchQuery = function fetchQuery(operation, variables) {
    return fetch("/graphql", {
        body: (0, _stringify2.default)({
            query: operation.text,
            variables: variables
        }),
        credentials: "same-origin",
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

/***/ "./Components/app/routing/routeConfig.tsx":
/*!************************************************!*\
  !*** ./Components/app/routing/routeConfig.tsx ***!
  \************************************************/
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

var _dashboardContainer = __webpack_require__(/*! ../../dashboard/dashboardContainer */ "./Components/dashboard/dashboardContainer.tsx");

var _memberContainer = __webpack_require__(/*! ../../dashboard/member/memberContainer */ "./Components/dashboard/member/memberContainer.tsx");

var _onboardingProcessContainer = __webpack_require__(/*! ../../dashboard/onboardingProcess/onboardingProcessContainer */ "./Components/dashboard/onboardingProcess/onboardingProcessContainer.tsx");

var _organizationContainer = __webpack_require__(/*! ../../dashboard/organization/organizationContainer */ "./Components/dashboard/organization/organizationContainer.tsx");

var _organizationsContainer = __webpack_require__(/*! ../../dashboard/organizations/organizationsContainer */ "./Components/dashboard/organizations/organizationsContainer.tsx");

var _errorPageContainer = __webpack_require__(/*! ../../errorPage/errorPageContainer */ "./Components/errorPage/errorPageContainer.tsx");

var _imprintContainer = __webpack_require__(/*! ../../footer/imprintContainer */ "./Components/footer/imprintContainer.tsx");

var _privacyPolicyContainer = __webpack_require__(/*! ../../footer/privacyPolicyContainer */ "./Components/footer/privacyPolicyContainer.tsx");

var _termsAndConditionsContainer = __webpack_require__(/*! ../../footer/termsAndConditionsContainer */ "./Components/footer/termsAndConditionsContainer.tsx");

var _landingPageContainer = __webpack_require__(/*! ../../landingPage/landingPageContainer */ "./Components/landingPage/landingPageContainer.tsx");

var _primaryLayoutContainer = __webpack_require__(/*! ../../layouts/primaryLayout/primaryLayoutContainer */ "./Components/layouts/primaryLayout/primaryLayoutContainer.tsx");

var _selectOrganizationContainer = __webpack_require__(/*! ../../select/selectOrganizationContainer */ "./Components/select/selectOrganizationContainer.tsx");

var _selectTeamMembersContainer = __webpack_require__(/*! ../../select/selectTeamMembersContainer */ "./Components/select/selectTeamMembersContainer.tsx");

var _setupCallbackContainer = __webpack_require__(/*! ../../setup/setupCallbackContainer */ "./Components/setup/setupCallbackContainer.tsx");

var _setupContainer = __webpack_require__(/*! ../../setup/setupContainer */ "./Components/setup/setupContainer.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _found.makeRouteConfig)(_react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/" }, _primaryLayoutContainer.routeConfig), _react2.default.createElement(_found.Route, (0, _assign2.default)({}, _landingPageContainer.routeConfig)), _react2.default.createElement(_found.Redirect, { from: "(.*/)", to: function to(_ref) {
        var location = _ref.location;
        return location.pathname.slice(0, -1);
    } }), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/dashboard" }, _dashboardContainer.routeConfig), _react2.default.createElement(_found.Route, (0, _assign2.default)({}, _organizationsContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "organization/:id" }, _organizationContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "organization/:id/teamMember/:id" }, _memberContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "organization/:id/onboardingProcess" }, _onboardingProcessContainer.routeConfig))), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "setup" }, _setupContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "setupCallback" }, _setupCallbackContainer.routeConfig)), _react2.default.createElement(_found.Route, { path: "select" }, _react2.default.createElement(_found.Route, (0, _assign2.default)({}, _selectOrganizationContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/teamMembers" }, _selectTeamMembersContainer.routeConfig))), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "error/:status" }, _errorPageContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "termsAndConditions" }, _termsAndConditionsContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "privacyPolicy" }, _privacyPolicyContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "imprint" }, _imprintContainer.routeConfig)))); /* tslint:disable:max-line-length */

/***/ }),

/***/ "./Components/app/routing/router.tsx":
/*!*******************************************!*\
  !*** ./Components/app/routing/router.tsx ***!
  \*******************************************/
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

/***/ "./Components/app/store/store.tsx":
/*!****************************************!*\
  !*** ./Components/app/store/store.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _farce = __webpack_require__(/*! farce */ "./node_modules/farce/lib/index.js");

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _routeConfig = __webpack_require__(/*! ../routing/routeConfig */ "./Components/app/routing/routeConfig.tsx");

var _routeConfig2 = _interopRequireDefault(_routeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _farce.createHistoryEnhancer)({
    middlewares: [_farce.queryMiddleware],
    protocol: new _farce.BrowserProtocol()
});
var matcher = new _found.Matcher(_routeConfig2.default);
var matcherEnhancer = (0, _found.createMatchEnhancer)(matcher);
var composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var middleWare = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default), historyEnhancer, matcherEnhancer);
var reducers = (0, _redux.combineReducers)({
    form: _reduxForm.reducer,
    found: _found.foundReducer
});
var store = (0, _redux.createStore)(reducers, {}, middleWare);
store.dispatch(_farce.Actions.init());
exports.default = store;

/***/ }),

/***/ "./Components/dashboard/dashboard.tsx":
/*!********************************************!*\
  !*** ./Components/dashboard/dashboard.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardHeader = (0, _styledComponents2.default)(_gridStyled.Box).withConfig({
  displayName: "dashboard__DashboardHeader"
})(["box-shadow:0 2px 4px 0 #d2d2d2;height:80px;"]);
var Dashboard = function Dashboard(_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", null, _react2.default.createElement(DashboardHeader, { width: "100%", p: 10 }), children);
};
exports.default = Dashboard;

/***/ }),

/***/ "./Components/dashboard/dashboardContainer.tsx":
/*!*****************************************************!*\
  !*** ./Components/dashboard/dashboardContainer.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _dashboard = __webpack_require__(/*! ./dashboard */ "./Components/dashboard/dashboard.tsx");

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeConfig = exports.routeConfig = {
    Component: _dashboard2.default
};
exports.default = _dashboard2.default;

/***/ }),

/***/ "./Components/dashboard/member/__generated__/memberContainerQuery.graphql.js":
/*!***********************************************************************************!*\
  !*** ./Components/dashboard/member/__generated__/memberContainerQuery.graphql.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ea67d4d5ab357772eb3fb41e1a663405
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type memberContainerQueryVariables = {|
  id: string
|};
export type memberContainerQueryResponse = {|
  +node: ?{|
    +name?: string,
    +avatarUrl?: string,
  |}
|};
export type memberContainerQuery = {|
  variables: memberContainerQueryVariables,
  response: memberContainerQueryResponse,
|};
*/


/*
query memberContainerQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Member {
      name
      avatarUrl
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "InlineFragment",
  "type": "Member",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "avatarUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "memberContainerQuery",
  "id": null,
  "text": "query memberContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Member {\n      name\n      avatarUrl\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "memberContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "memberContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f8d9c24785d551b080ea1b418d165f4';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/member/member.tsx":
/*!************************************************!*\
  !*** ./Components/dashboard/member/member.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Member = function Member(_ref) {
    var name = _ref.name,
        avatarUrl = _ref.avatarUrl;
    return _react2.default.createElement("div", null, _react2.default.createElement(_rebass.Image, { src: avatarUrl }), name, _react2.default.createElement("div", null, "Monthly progress"));
};
exports.default = Member;

/***/ }),

/***/ "./Components/dashboard/member/memberContainer.tsx":
/*!*********************************************************!*\
  !*** ./Components/dashboard/member/memberContainer.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _member = __webpack_require__(/*! ./member */ "./Components/dashboard/member/member.tsx");

var _member2 = _interopRequireDefault(_member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  var node = __webpack_require__(/*! ./__generated__/memberContainerQuery.graphql */ "./Components/dashboard/member/__generated__/memberContainerQuery.graphql.js");

  if (node.hash && node.hash !== "4f8d9c24785d551b080ea1b418d165f4") {
    console.error("The definition of 'memberContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/memberContainerQuery.graphql */ "./Components/dashboard/member/__generated__/memberContainerQuery.graphql.js");
};
var Component = (0, _recompose.compose)((0, _recompose.flattenProp)("node"))(_member2.default);
var routeConfig = exports.routeConfig = {
  Component: Component,
  query: query
};
exports.default = _member2.default;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js":
/*!*********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 4d7e7dde69aa201fa7024b5e599c5745
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type onboardingProcessContainer_organization$ref = any;
export type AddOnboardingPipelineInput = {
  clientMutationId?: ?string,
  organizationId: number,
  name: string,
};
export type addPipelineMutationVariables = {|
  input: AddOnboardingPipelineInput
|};
export type addPipelineMutationResponse = {|
  +addPipeline: ?{|
    +organization: {|
      +$fragmentRefs: onboardingProcessContainer_organization$ref
    |}
  |}
|};
export type addPipelineMutation = {|
  variables: addPipelineMutationVariables,
  response: addPipelineMutationResponse,
|};
*/


/*
mutation addPipelineMutation(
  $input: AddOnboardingPipelineInput!
) {
  addPipeline(input: $input) {
    organization {
      ...onboardingProcessContainer_organization
      id
    }
  }
}

fragment onboardingProcessContainer_organization on Organization {
  organizationId
  name
  onboardingPipelines {
    id
    ...pipelineContainer_pipeline
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddOnboardingPipelineInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddOnboardingPipelineInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addPipelineMutation",
  "id": null,
  "text": "mutation addPipelineMutation(\n  $input: AddOnboardingPipelineInput!\n) {\n  addPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addPipelineMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingPipelinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "onboardingProcessContainer_organization",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "addPipelineMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingPipelinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "organizationId",
                "args": null,
                "storageKey": null
              },
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingPipelines",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingPipeline",
                "plural": true,
                "selections": [
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "onboardingPipelineId",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingSteps",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingStep",
                    "plural": true,
                    "selections": [
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "onboardingStepId",
                        "args": null,
                        "storageKey": null
                      },
                      v2
                    ]
                  }
                ]
              },
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '20b67e68c39920e8176632e99143fe35';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/addStepMutation.graphql.js":
/*!*****************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/addStepMutation.graphql.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 6aa009b45948ca8271421655b087cf0a
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
export type AddOnboardingStepInput = {
  clientMutationId?: ?string,
  pipelineId: number,
  name: string,
  description?: ?string,
};
export type addStepMutationVariables = {|
  input: AddOnboardingStepInput
|};
export type addStepMutationResponse = {|
  +addStep: ?{|
    +pipeline: {|
      +$fragmentRefs: pipelineContainer_pipeline$ref
    |}
  |}
|};
export type addStepMutation = {|
  variables: addStepMutationVariables,
  response: addStepMutationResponse,
|};
*/


/*
mutation addStepMutation(
  $input: AddOnboardingStepInput!
) {
  addStep(input: $input) {
    pipeline {
      ...pipelineContainer_pipeline
      id
    }
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddOnboardingStepInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddOnboardingStepInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addStepMutation",
  "id": null,
  "text": "mutation addStepMutation(\n  $input: AddOnboardingStepInput!\n) {\n  addStep(input: $input) {\n    pipeline {\n      ...pipelineContainer_pipeline\n      id\n    }\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addStepMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingStepPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pipeline",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "pipelineContainer_pipeline",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "addStepMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingStepPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pipeline",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "onboardingPipelineId",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingSteps",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingStep",
                "plural": true,
                "selections": [
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "onboardingStepId",
                    "args": null,
                    "storageKey": null
                  },
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5e9cff1aa61d965e3fc02a047539ba8';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/editPipelineMutation.graphql.js":
/*!**********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/editPipelineMutation.graphql.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 73d86615f51ea13898025a24f15f2653
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type onboardingProcessContainer_organization$ref = any;
export type EditOnboardingPipelineInput = {
  clientMutationId?: ?string,
  id: number,
  name: string,
};
export type editPipelineMutationVariables = {|
  input: EditOnboardingPipelineInput
|};
export type editPipelineMutationResponse = {|
  +editPipeline: ?{|
    +organization: {|
      +$fragmentRefs: onboardingProcessContainer_organization$ref
    |}
  |}
|};
export type editPipelineMutation = {|
  variables: editPipelineMutationVariables,
  response: editPipelineMutationResponse,
|};
*/


/*
mutation editPipelineMutation(
  $input: EditOnboardingPipelineInput!
) {
  editPipeline(input: $input) {
    organization {
      ...onboardingProcessContainer_organization
      id
    }
  }
}

fragment onboardingProcessContainer_organization on Organization {
  organizationId
  name
  onboardingPipelines {
    id
    ...pipelineContainer_pipeline
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditOnboardingPipelineInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "EditOnboardingPipelineInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "editPipelineMutation",
  "id": null,
  "text": "mutation editPipelineMutation(\n  $input: EditOnboardingPipelineInput!\n) {\n  editPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "editPipelineMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingPipelinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "onboardingProcessContainer_organization",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "editPipelineMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingPipelinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "organizationId",
                "args": null,
                "storageKey": null
              },
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingPipelines",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingPipeline",
                "plural": true,
                "selections": [
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "onboardingPipelineId",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingSteps",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingStep",
                    "plural": true,
                    "selections": [
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "onboardingStepId",
                        "args": null,
                        "storageKey": null
                      },
                      v2
                    ]
                  }
                ]
              },
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cfcbd4b05b92aa339df3457745eadaf4';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/editStepMutation.graphql.js":
/*!******************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/editStepMutation.graphql.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 4f9212a34efaaa401f0929fe74221c05
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
export type EditOnboardingStepInput = {
  clientMutationId?: ?string,
  id: number,
  name: string,
};
export type editStepMutationVariables = {|
  input: EditOnboardingStepInput
|};
export type editStepMutationResponse = {|
  +editStep: ?{|
    +pipeline: {|
      +$fragmentRefs: pipelineContainer_pipeline$ref
    |}
  |}
|};
export type editStepMutation = {|
  variables: editStepMutationVariables,
  response: editStepMutationResponse,
|};
*/


/*
mutation editStepMutation(
  $input: EditOnboardingStepInput!
) {
  editStep(input: $input) {
    pipeline {
      ...pipelineContainer_pipeline
      id
    }
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditOnboardingStepInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "EditOnboardingStepInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "editStepMutation",
  "id": null,
  "text": "mutation editStepMutation(\n  $input: EditOnboardingStepInput!\n) {\n  editStep(input: $input) {\n    pipeline {\n      ...pipelineContainer_pipeline\n      id\n    }\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "editStepMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingStepPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pipeline",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "pipelineContainer_pipeline",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "editStepMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingStepPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pipeline",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "onboardingPipelineId",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingSteps",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingStep",
                "plural": true,
                "selections": [
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "onboardingStepId",
                    "args": null,
                    "storageKey": null
                  },
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c770a8fc264e9a39e64370cdcecb8fd7';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainerQuery.graphql.js":
/*!*********************************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainerQuery.graphql.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 3154680423823c45aa37e5dfaae8f1c1
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type onboardingProcessContainer_organization$ref = any;
export type onboardingProcessContainerQueryVariables = {|
  id: string
|};
export type onboardingProcessContainerQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: onboardingProcessContainer_organization$ref
  |}
|};
export type onboardingProcessContainerQuery = {|
  variables: onboardingProcessContainerQueryVariables,
  response: onboardingProcessContainerQueryResponse,
|};
*/


/*
query onboardingProcessContainerQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Organization {
      ...onboardingProcessContainer_organization
    }
    id
  }
}

fragment onboardingProcessContainer_organization on Organization {
  organizationId
  name
  onboardingPipelines {
    id
    ...pipelineContainer_pipeline
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "onboardingProcessContainerQuery",
  "id": null,
  "text": "query onboardingProcessContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Organization {\n      ...onboardingProcessContainer_organization\n    }\n    id\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "onboardingProcessContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Organization",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "onboardingProcessContainer_organization",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "onboardingProcessContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "InlineFragment",
            "type": "Organization",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "organizationId",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingPipelines",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingPipeline",
                "plural": true,
                "selections": [
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "onboardingPipelineId",
                    "args": null,
                    "storageKey": null
                  },
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingSteps",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingStep",
                    "plural": true,
                    "selections": [
                      v2,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "onboardingStepId",
                        "args": null,
                        "storageKey": null
                      },
                      v3
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd8d9e14894ca528f012d82867d89a36a';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainer_organization.graphql.js":
/*!*****************************************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainer_organization.graphql.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type onboardingProcessContainer_organization$ref: FragmentReference;
export type onboardingProcessContainer_organization = {|
  +organizationId: number,
  +name: string,
  +onboardingPipelines: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: pipelineContainer_pipeline$ref,
  |}>,
  +$refType: onboardingProcessContainer_organization$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "onboardingProcessContainer_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "organizationId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingPipelines",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingPipeline",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "pipelineContainer_pipeline",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f0c280dda4678761ecbd8b9084a23e51';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js":
/*!****************************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
type stepContainer_step$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type pipelineContainer_pipeline$ref: FragmentReference;
export type pipelineContainer_pipeline = {|
  +id: string,
  +onboardingPipelineId: number,
  +name: string,
  +onboardingSteps: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: stepContainer_step$ref,
  |}>,
  +$refType: pipelineContainer_pipeline$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "pipelineContainer_pipeline",
  "type": "OnboardingPipeline",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "onboardingPipelineId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingSteps",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingStep",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "FragmentSpread",
          "name": "stepContainer_step",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '261fb122ea396ee0bd845865600f6792';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/removePipelineMutation.graphql.js":
/*!************************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/removePipelineMutation.graphql.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 26a0f3336adb94193675255ae73c3e3b
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type onboardingProcessContainer_organization$ref = any;
export type RemoveOnboardingPipelineInput = {
  clientMutationId?: ?string,
  id: number,
};
export type removePipelineMutationVariables = {|
  input: RemoveOnboardingPipelineInput
|};
export type removePipelineMutationResponse = {|
  +removePipeline: ?{|
    +organization: {|
      +$fragmentRefs: onboardingProcessContainer_organization$ref
    |}
  |}
|};
export type removePipelineMutation = {|
  variables: removePipelineMutationVariables,
  response: removePipelineMutationResponse,
|};
*/


/*
mutation removePipelineMutation(
  $input: RemoveOnboardingPipelineInput!
) {
  removePipeline(input: $input) {
    organization {
      ...onboardingProcessContainer_organization
      id
    }
  }
}

fragment onboardingProcessContainer_organization on Organization {
  organizationId
  name
  onboardingPipelines {
    id
    ...pipelineContainer_pipeline
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveOnboardingPipelineInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveOnboardingPipelineInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "removePipelineMutation",
  "id": null,
  "text": "mutation removePipelineMutation(\n  $input: RemoveOnboardingPipelineInput!\n) {\n  removePipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "removePipelineMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removePipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingPipelinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "onboardingProcessContainer_organization",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "removePipelineMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removePipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingPipelinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "organizationId",
                "args": null,
                "storageKey": null
              },
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingPipelines",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingPipeline",
                "plural": true,
                "selections": [
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "onboardingPipelineId",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingSteps",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingStep",
                    "plural": true,
                    "selections": [
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "onboardingStepId",
                        "args": null,
                        "storageKey": null
                      },
                      v2
                    ]
                  }
                ]
              },
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5ce3742dad9ca02bb0860eb96d99e003';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/removeStepMutation.graphql.js":
/*!********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/removeStepMutation.graphql.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 289785b57b9c1985a568f4012f8cc2b8
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
export type RemoveOnboardingStepInput = {
  clientMutationId?: ?string,
  id: number,
};
export type removeStepMutationVariables = {|
  input: RemoveOnboardingStepInput
|};
export type removeStepMutationResponse = {|
  +removeStep: ?{|
    +pipeline: {|
      +$fragmentRefs: pipelineContainer_pipeline$ref
    |}
  |}
|};
export type removeStepMutation = {|
  variables: removeStepMutationVariables,
  response: removeStepMutationResponse,
|};
*/


/*
mutation removeStepMutation(
  $input: RemoveOnboardingStepInput!
) {
  removeStep(input: $input) {
    pipeline {
      ...pipelineContainer_pipeline
      id
    }
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveOnboardingStepInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveOnboardingStepInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "removeStepMutation",
  "id": null,
  "text": "mutation removeStepMutation(\n  $input: RemoveOnboardingStepInput!\n) {\n  removeStep(input: $input) {\n    pipeline {\n      ...pipelineContainer_pipeline\n      id\n    }\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "removeStepMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingStepPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pipeline",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "pipelineContainer_pipeline",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "removeStepMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingStepPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pipeline",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "onboardingPipelineId",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingSteps",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingStep",
                "plural": true,
                "selections": [
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "onboardingStepId",
                    "args": null,
                    "storageKey": null
                  },
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9a58aa64b61e2403dc4cbbff4bf29679';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/stepContainer_step.graphql.js":
/*!********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/stepContainer_step.graphql.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 */

/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type stepContainer_step$ref: FragmentReference;
export type stepContainer_step = {|
  +onboardingStepId: number,
  +name: string,
  +$refType: stepContainer_step$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "stepContainer_step",
  "type": "OnboardingStep",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "onboardingStepId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4f247b848e1a321507bbc54ed4490566';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/onboardingProcess/addPipelineMutation.tsx":
/*!************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/addPipelineMutation.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/addPipelineMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js");

  if (node.hash && node.hash !== "20b67e68c39920e8176632e99143fe35") {
    console.error("The definition of 'addPipelineMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/addPipelineMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js");
};

exports.default = function (_ref) {
  var organizationId = _ref.organizationId,
      name = _ref.name;

  var variables = {
    input: {
      organizationId: organizationId,
      name: name
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/addStepMutation.tsx":
/*!********************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/addStepMutation.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/addStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/addStepMutation.graphql.js");

  if (node.hash && node.hash !== "e5e9cff1aa61d965e3fc02a047539ba8") {
    console.error("The definition of 'addStepMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/addStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/addStepMutation.graphql.js");
};

exports.default = function (_ref) {
  var pipelineId = _ref.pipelineId,
      name = _ref.name,
      description = _ref.description;

  var variables = {
    input: {
      pipelineId: pipelineId,
      name: name,
      description: description
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/editPipelineMutation.tsx":
/*!*************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/editPipelineMutation.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/editPipelineMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/editPipelineMutation.graphql.js");

  if (node.hash && node.hash !== "cfcbd4b05b92aa339df3457745eadaf4") {
    console.error("The definition of 'editPipelineMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/editPipelineMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/editPipelineMutation.graphql.js");
};

exports.default = function (_ref) {
  var id = _ref.id,
      name = _ref.name;

  var variables = {
    input: {
      id: id,
      name: name
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/editStepMutation.tsx":
/*!*********************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/editStepMutation.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/editStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/editStepMutation.graphql.js");

  if (node.hash && node.hash !== "c770a8fc264e9a39e64370cdcecb8fd7") {
    console.error("The definition of 'editStepMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/editStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/editStepMutation.graphql.js");
};

exports.default = function (_ref) {
  var id = _ref.id,
      name = _ref.name;

  var variables = {
    input: {
      id: id,
      name: name
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/emptyPipeline.tsx":
/*!******************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/emptyPipeline.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _button = __webpack_require__(/*! ../../shared/button/button */ "./Components/shared/button/button.tsx");

var _button2 = _interopRequireDefault(_button);

var _fieldInput = __webpack_require__(/*! ../../shared/inputs/fieldInput */ "./Components/shared/inputs/fieldInput.tsx");

var _fieldInput2 = _interopRequireDefault(_fieldInput);

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _pipeline = __webpack_require__(/*! ./pipeline */ "./Components/dashboard/onboardingProcess/pipeline.tsx");

var _createFieldValidator = __webpack_require__(/*! ../../shared/inputs/createFieldValidator */ "./Components/shared/inputs/createFieldValidator.tsx");

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPipelineValidator = (0, _createFieldValidator2.default)(["required"]);
var EmptyPipeline = function EmptyPipeline(_ref) {
    var togglePipeline = _ref.togglePipeline,
        isAddingPipeline = _ref.isAddingPipeline,
        handleSubmit = _ref.handleSubmit,
        addPipeline = _ref.addPipeline;
    return _react2.default.createElement(_pipeline.PipelineColumn, { px: 0 }, isAddingPipeline ? _react2.default.createElement("form", { onSubmit: handleSubmit(addPipeline), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "name", placeholder: "Pipeline name", validate: addPipelineValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Create"), _react2.default.createElement(_button2.default, { type: "button", onClick: togglePipeline }, "Cancel"))) : _react2.default.createElement(_button2.default, { onClick: togglePipeline, style: { width: "100%" } }, "Add a pipeline."));
};
exports.default = EmptyPipeline;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/emptyPipelineContainer.tsx":
/*!***************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/emptyPipelineContainer.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _emptyPipeline = __webpack_require__(/*! ./emptyPipeline */ "./Components/dashboard/onboardingProcess/emptyPipeline.tsx");

var _emptyPipeline2 = _interopRequireDefault(_emptyPipeline);

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _addPipelineMutation = __webpack_require__(/*! ./addPipelineMutation */ "./Components/dashboard/onboardingProcess/addPipelineMutation.tsx");

var _addPipelineMutation2 = _interopRequireDefault(_addPipelineMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
    addPipeline: function addPipeline(_ref) {
        var organizationId = _ref.organizationId,
            togglePipeline = _ref.togglePipeline;
        return function (input) {
            (0, _addPipelineMutation2.default)((0, _assign2.default)({ organizationId: organizationId }, input)), togglePipeline();
        };
    }
};
var stateHandlers = {
    togglePipeline: function togglePipeline(_ref2) {
        var isAddingPipeline = _ref2.isAddingPipeline;
        return function () {
            return {
                isAddingPipeline: !isAddingPipeline
            };
        };
    }
};
exports.default = (0, _recompose.compose)((0, _recompose.withStateHandlers)({ isAddingPipeline: false }, stateHandlers), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
    form: "addPipeline"
}))(_emptyPipeline2.default);

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/onboardingProcess.tsx":
/*!**********************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/onboardingProcess.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _emptyPipelineContainer = __webpack_require__(/*! ./emptyPipelineContainer */ "./Components/dashboard/onboardingProcess/emptyPipelineContainer.tsx");

var _emptyPipelineContainer2 = _interopRequireDefault(_emptyPipelineContainer);

var _pipelineContainer = __webpack_require__(/*! ./pipelineContainer */ "./Components/dashboard/onboardingProcess/pipelineContainer.tsx");

var _pipelineContainer2 = _interopRequireDefault(_pipelineContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PipelineRow = (0, _styledComponents2.default)(_rebass.Row).withConfig({
    displayName: "onboardingProcess__PipelineRow"
})(["margin-left:-5px;margin-right:-5px;height:700px;"]);
var OnboardingProcess = function OnboardingProcess(_ref) {
    var organization = _ref.organization;
    return _react2.default.createElement(_rebass.Container, { maxWidth: "100%" }, _react2.default.createElement(_rebass.Text, { mt: 20, mb: 40, fontSize: 20 }, _react2.default.createElement(_rebass.Text, { is: "span", display: "inline", fontWeight: "bold" }, organization.name), " on-boarding process"), _react2.default.createElement(PipelineRow, null, organization.onboardingPipelines.map(function (pipeline, i) {
        return _react2.default.createElement(_pipelineContainer2.default, { key: pipeline.id, form: "pipeline_" + i, pipeline: pipeline });
    }), _react2.default.createElement(_emptyPipelineContainer2.default, { organizationId: organization.organizationId })));
};
exports.default = OnboardingProcess;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/onboardingProcessContainer.tsx":
/*!*******************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/onboardingProcessContainer.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _onboardingProcess = __webpack_require__(/*! ./onboardingProcess */ "./Components/dashboard/onboardingProcess/onboardingProcess.tsx");

var _onboardingProcess2 = _interopRequireDefault(_onboardingProcess);

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  var node = __webpack_require__(/*! ./__generated__/onboardingProcessContainerQuery.graphql */ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainerQuery.graphql.js");

  if (node.hash && node.hash !== "d8d9e14894ca528f012d82867d89a36a") {
    console.error("The definition of 'onboardingProcessContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/onboardingProcessContainerQuery.graphql */ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainerQuery.graphql.js");
};
var fragments = {
  organization: function organization() {
    var node = __webpack_require__(/*! ./__generated__/onboardingProcessContainer_organization.graphql */ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainer_organization.graphql.js");

    if (node.hash && node.hash !== "f0c280dda4678761ecbd8b9084a23e51") {
      console.error("The definition of 'onboardingProcessContainer_organization' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(/*! ./__generated__/onboardingProcessContainer_organization.graphql */ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainer_organization.graphql.js");
  }
};
var Component = (0, _recompose.compose)((0, _recompose.renameProp)("node", "organization"), (0, _relayCompose.fragment)(fragments))(_onboardingProcess2.default);
var routeConfig = exports.routeConfig = {
  Component: Component,
  query: query
};
exports.default = Component;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/pipeline.tsx":
/*!*************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/pipeline.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PipelineColumn = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _button = __webpack_require__(/*! ../../shared/button/button */ "./Components/shared/button/button.tsx");

var _button2 = _interopRequireDefault(_button);

var _fieldInput = __webpack_require__(/*! ../../shared/inputs/fieldInput */ "./Components/shared/inputs/fieldInput.tsx");

var _fieldInput2 = _interopRequireDefault(_fieldInput);

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _cross = __webpack_require__(/*! ../../../wwwroot/assets/cross.svg */ "./wwwroot/assets/cross.svg");

var _cross2 = _interopRequireDefault(_cross);

var _pencil = __webpack_require__(/*! ../../../wwwroot/assets/pencil.svg */ "./wwwroot/assets/pencil.svg");

var _pencil2 = _interopRequireDefault(_pencil);

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _reactPortal = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");

var _createFieldValidator = __webpack_require__(/*! ../../shared/inputs/createFieldValidator */ "./Components/shared/inputs/createFieldValidator.tsx");

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _stepContainer = __webpack_require__(/*! ./stepContainer */ "./Components/dashboard/onboardingProcess/stepContainer.tsx");

var _stepContainer2 = _interopRequireDefault(_stepContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PipelineColumn = exports.PipelineColumn = (0, _styledComponents2.default)(_rebass.Column).withConfig({
    displayName: "pipeline__PipelineColumn"
})(["background-color:#F4F4F4;border-radius:4px;margin-left:5px;margin-right:5px;max-width:262px;"]);
var IconButton = (0, _styledComponents2.default)(_rebass.ButtonTransparent).withConfig({
    displayName: "pipeline__IconButton"
})(["padding:5px;"]);
var editPipelineValidator = (0, _createFieldValidator2.default)(["required"]);
var addStepValidator = (0, _createFieldValidator2.default)(["required"]);
var Pipeline = function Pipeline(_ref) {
    var togglePipeline = _ref.togglePipeline,
        isEditingPipeline = _ref.isEditingPipeline,
        handleSubmit = _ref.handleSubmit,
        editPipeline = _ref.editPipeline,
        removePipeline = _ref.removePipeline,
        removingNameConfirmValue = _ref.removingNameConfirmValue,
        onboardingPipelineId = _ref.onboardingPipelineId,
        name = _ref.name,
        addStep = _ref.addStep,
        isAddingStep = _ref.isAddingStep,
        toggleStep = _ref.toggleStep,
        onboardingSteps = _ref.onboardingSteps;
    return _react2.default.createElement(PipelineColumn, { key: onboardingPipelineId, p: 16 }, _react2.default.createElement(_rebass.Box, { pb: 16 }, _react2.default.createElement(_gridStyled.Flex, { alignItems: "center" }, isEditingPipeline ? _react2.default.createElement("form", { onSubmit: handleSubmit(editPipeline), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "pipelineName", validate: editPipelineValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Edit"), _react2.default.createElement(_button2.default, { type: "button", onClick: togglePipeline }, "Cancel"))) : _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_rebass.Text, { fontWeight: "bold", fontSize: 18 }, name), _react2.default.createElement(IconButton, { ml: "auto", onClick: togglePipeline }, _react2.default.createElement(_pencil2.default, null)), _react2.default.createElement(_reactPortal.PortalWithState, { closeOnEsc: true, closeOnOutsideClick: true }, function (_ref2) {
        var openPortal = _ref2.openPortal,
            closePortal = _ref2.closePortal,
            portal = _ref2.portal;
        return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(IconButton, { onClick: openPortal }, _react2.default.createElement(_cross2.default, null)), portal(_react2.default.createElement(_rebass.Modal, { top: "30%" }, _react2.default.createElement("form", { onSubmit: handleSubmit(removePipeline), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "removingNameConfirm", placeholder: "Type the pipeline name '" + name + "' to delete.", mb: 10 }), _react2.default.createElement(_button2.default, { mr: 10, disabled: removingNameConfirmValue !== name }, "Remove"), _react2.default.createElement(_button2.default, { type: "button", onClick: closePortal }, "Cancel")))));
    })))), onboardingSteps.map(function (step, i) {
        return _react2.default.createElement(_stepContainer2.default, { key: step.id, form: "step_" + i, step: step });
    }), isAddingStep ? _react2.default.createElement("form", { onSubmit: handleSubmit(addStep), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "onboardingStepName", placeholder: "e.g. Assign a mentor", validate: addStepValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Create"), _react2.default.createElement(_button2.default, { type: "button", onClick: toggleStep }, "Cancel"))) : _react2.default.createElement(_button2.default, { onClick: toggleStep, style: { width: "100%" } }, "Add an onboarding step."));
};
exports.default = Pipeline;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/pipelineContainer.tsx":
/*!**********************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/pipelineContainer.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var _removePipelineMutation = __webpack_require__(/*! ./removePipelineMutation */ "./Components/dashboard/onboardingProcess/removePipelineMutation.tsx");

var _removePipelineMutation2 = _interopRequireDefault(_removePipelineMutation);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _editPipelineMutation = __webpack_require__(/*! ./editPipelineMutation */ "./Components/dashboard/onboardingProcess/editPipelineMutation.tsx");

var _editPipelineMutation2 = _interopRequireDefault(_editPipelineMutation);

var _pipeline = __webpack_require__(/*! ./pipeline */ "./Components/dashboard/onboardingProcess/pipeline.tsx");

var _pipeline2 = _interopRequireDefault(_pipeline);

var _addStepMutation = __webpack_require__(/*! ./addStepMutation */ "./Components/dashboard/onboardingProcess/addStepMutation.tsx");

var _addStepMutation2 = _interopRequireDefault(_addStepMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
    pipeline: function pipeline() {
        var node = __webpack_require__(/*! ./__generated__/pipelineContainer_pipeline.graphql */ "./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js");

        if (node.hash && node.hash !== "261fb122ea396ee0bd845865600f6792") {
            console.error("The definition of 'pipelineContainer_pipeline' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
        }

        return __webpack_require__(/*! ./__generated__/pipelineContainer_pipeline.graphql */ "./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js");
    }
};
var stateHandlers = {
    togglePipeline: function togglePipeline(_ref) {
        var isEditingPipeline = _ref.isEditingPipeline;
        return function () {
            return {
                isEditingPipeline: !isEditingPipeline
            };
        };
    },
    toggleStep: function toggleStep(_ref2) {
        var isAddingStep = _ref2.isAddingStep;
        return function () {
            return {
                isAddingStep: !isAddingStep
            };
        };
    }
};
var handlers = {
    removePipeline: function removePipeline(_ref3) {
        var onboardingPipelineId = _ref3.onboardingPipelineId;
        return function () {
            return (0, _removePipelineMutation2.default)({ id: onboardingPipelineId });
        };
    },
    editPipeline: function editPipeline(_ref4) {
        var onboardingPipelineId = _ref4.onboardingPipelineId,
            togglePipeline = _ref4.togglePipeline;
        return function (input) {
            (0, _editPipelineMutation2.default)({
                id: onboardingPipelineId,
                name: input.pipelineName
            }), togglePipeline();
        };
    },
    addStep: function addStep(_ref5) {
        var onboardingPipelineId = _ref5.onboardingPipelineId,
            toggleStep = _ref5.toggleStep;
        return function (input) {
            (0, _addStepMutation2.default)({
                pipelineId: onboardingPipelineId,
                name: input.onboardingStepName
            }), toggleStep();
        };
    }
};
var Component = (0, _recompose.compose)((0, _recompose.withProps)(function (_ref6) {
    var form = _ref6.form;
    return {
        selector: (0, _reduxForm.formValueSelector)(form)
    };
}), (0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)("pipeline"), (0, _recompose.withStateHandlers)({
    isEditingPipeline: false,
    isAddingStep: false
}, stateHandlers), (0, _recompose.withHandlers)(handlers), (0, _recompose.withProps)(function (_ref7) {
    var name = _ref7.name;
    return {
        initialValues: {
            pipelineName: name
        }
    };
}), (0, _reduxForm.reduxForm)({}), (0, _reactRedux.connect)(function (state, _ref8) {
    var selector = _ref8.selector;
    return {
        removingNameConfirmValue: selector(state, "removingNameConfirm")
    };
}))(_pipeline2.default);
exports.default = Component;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/removePipelineMutation.tsx":
/*!***************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/removePipelineMutation.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/removePipelineMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/removePipelineMutation.graphql.js");

  if (node.hash && node.hash !== "5ce3742dad9ca02bb0860eb96d99e003") {
    console.error("The definition of 'removePipelineMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/removePipelineMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/removePipelineMutation.graphql.js");
};

exports.default = function (_ref) {
  var id = _ref.id;

  var variables = {
    input: {
      id: id
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/removeStepMutation.tsx":
/*!***********************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/removeStepMutation.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/removeStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/removeStepMutation.graphql.js");

  if (node.hash && node.hash !== "9a58aa64b61e2403dc4cbbff4bf29679") {
    console.error("The definition of 'removeStepMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/removeStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/removeStepMutation.graphql.js");
};

exports.default = function (_ref) {
  var id = _ref.id;

  var variables = {
    input: {
      id: id
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/step.tsx":
/*!*********************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/step.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _cross = __webpack_require__(/*! ../../../wwwroot/assets/cross.svg */ "./wwwroot/assets/cross.svg");

var _cross2 = _interopRequireDefault(_cross);

var _pencil = __webpack_require__(/*! ../../../wwwroot/assets/pencil.svg */ "./wwwroot/assets/pencil.svg");

var _pencil2 = _interopRequireDefault(_pencil);

var _fieldInput = __webpack_require__(/*! ../../shared/inputs/fieldInput */ "./Components/shared/inputs/fieldInput.tsx");

var _fieldInput2 = _interopRequireDefault(_fieldInput);

var _createFieldValidator = __webpack_require__(/*! ../../shared/inputs/createFieldValidator */ "./Components/shared/inputs/createFieldValidator.tsx");

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _button = __webpack_require__(/*! ../../shared/button/button */ "./Components/shared/button/button.tsx");

var _button2 = _interopRequireDefault(_button);

var _reactPortal = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepBox = (0, _styledComponents2.default)(_rebass.Box).withConfig({
    displayName: "step__StepBox"
})(["width:100%;border-radius:4px;text-align:left;margin:5px 0;padding:0;"]);
var IconButton = (0, _styledComponents2.default)(_rebass.ButtonTransparent).withConfig({
    displayName: "step__IconButton"
})(["padding:5px;"]);
var editStepValidator = (0, _createFieldValidator2.default)(["required"]);
var Step = function Step(_ref) {
    var toggleStep = _ref.toggleStep,
        name = _ref.name,
        isEditingStep = _ref.isEditingStep,
        editStep = _ref.editStep,
        handleSubmit = _ref.handleSubmit,
        removeStep = _ref.removeStep,
        removingNameConfirmValue = _ref.removingNameConfirmValue;
    return _react2.default.createElement(StepBox, null, isEditingStep ? _react2.default.createElement("form", { onSubmit: handleSubmit(editStep), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "stepName", validate: editStepValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Edit"), _react2.default.createElement(_button2.default, { type: "button", onClick: toggleStep }, "Cancel"))) : _react2.default.createElement(_rebass.Box, { bg: "white", px: "8px", py: "5px" }, _react2.default.createElement(_rebass.Flex, { alignItems: "center" }, _react2.default.createElement(_rebass.Text, null, name), _react2.default.createElement(IconButton, { ml: "auto", onClick: toggleStep }, _react2.default.createElement(_pencil2.default, null)), _react2.default.createElement(_reactPortal.PortalWithState, { closeOnEsc: true, closeOnOutsideClick: true }, function (_ref2) {
        var openPortal = _ref2.openPortal,
            closePortal = _ref2.closePortal,
            portal = _ref2.portal;
        return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(IconButton, { onClick: openPortal }, _react2.default.createElement(_cross2.default, null)), portal(_react2.default.createElement(_rebass.Modal, { top: "30%" }, _react2.default.createElement("form", { onSubmit: handleSubmit(removeStep), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "removingNameConfirm", placeholder: "Type the step name '" + name + "' to delete.", mb: 10 }), _react2.default.createElement(_button2.default, { mr: 10, disabled: removingNameConfirmValue !== name }, "Remove"), _react2.default.createElement(_button2.default, { type: "button", onClick: closePortal }, "Cancel")))));
    }))));
};
exports.default = Step;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/stepContainer.tsx":
/*!******************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/stepContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _step = __webpack_require__(/*! ./step */ "./Components/dashboard/onboardingProcess/step.tsx");

var _step2 = _interopRequireDefault(_step);

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _removeStepMutation = __webpack_require__(/*! ./removeStepMutation */ "./Components/dashboard/onboardingProcess/removeStepMutation.tsx");

var _removeStepMutation2 = _interopRequireDefault(_removeStepMutation);

var _editStepMutation = __webpack_require__(/*! ./editStepMutation */ "./Components/dashboard/onboardingProcess/editStepMutation.tsx");

var _editStepMutation2 = _interopRequireDefault(_editStepMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
    step: function step() {
        var node = __webpack_require__(/*! ./__generated__/stepContainer_step.graphql */ "./Components/dashboard/onboardingProcess/__generated__/stepContainer_step.graphql.js");

        if (node.hash && node.hash !== "4f247b848e1a321507bbc54ed4490566") {
            console.error("The definition of 'stepContainer_step' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
        }

        return __webpack_require__(/*! ./__generated__/stepContainer_step.graphql */ "./Components/dashboard/onboardingProcess/__generated__/stepContainer_step.graphql.js");
    }
};
var stateHandlers = {
    toggleStep: function toggleStep(_ref) {
        var isEditingStep = _ref.isEditingStep;
        return function () {
            return {
                isEditingStep: !isEditingStep
            };
        };
    }
};
var handlers = {
    removeStep: function removeStep(_ref2) {
        var onboardingStepId = _ref2.onboardingStepId;
        return function () {
            return (0, _removeStepMutation2.default)({ id: onboardingStepId });
        };
    },
    editStep: function editStep(_ref3) {
        var onboardingStepId = _ref3.onboardingStepId,
            toggleStep = _ref3.toggleStep;
        return function (input) {
            (0, _editStepMutation2.default)({
                id: onboardingStepId,
                name: input.stepName
            }), toggleStep();
        };
    }
};
exports.default = (0, _recompose.compose)((0, _recompose.withProps)(function (_ref4) {
    var form = _ref4.form;
    return {
        selector: (0, _reduxForm.formValueSelector)(form)
    };
}), (0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)("step"), (0, _recompose.withStateHandlers)({
    isEditingStep: false
}, stateHandlers), (0, _recompose.withHandlers)(handlers), (0, _recompose.withProps)(function (_ref5) {
    var name = _ref5.name;
    return {
        initialValues: {
            stepName: name
        }
    };
}), (0, _reduxForm.reduxForm)({}), (0, _reactRedux.connect)(function (state, _ref6) {
    var selector = _ref6.selector;
    return {
        removingNameConfirmValue: selector(state, "removingNameConfirm")
    };
}))(_step2.default);

/***/ }),

/***/ "./Components/dashboard/organization/__generated__/organizationContainerQuery.graphql.js":
/*!***********************************************************************************************!*\
  !*** ./Components/dashboard/organization/__generated__/organizationContainerQuery.graphql.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash cfa3f6bd0d2ee67f31f2a4750888e4c1
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type organizationContainerQueryVariables = {|
  id: string
|};
export type organizationContainerQueryResponse = {|
  +node: ?{|
    +name?: string
  |}
|};
export type organizationContainerQuery = {|
  variables: organizationContainerQueryVariables,
  response: organizationContainerQueryResponse,
|};
*/


/*
query organizationContainerQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Organization {
      name
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "InlineFragment",
  "type": "Organization",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "organizationContainerQuery",
  "id": null,
  "text": "query organizationContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Organization {\n      name\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "organizationContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "organizationContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63d2e3d1e41a2e64d145db8576e7b7c2';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/organization/organization.tsx":
/*!************************************************************!*\
  !*** ./Components/dashboard/organization/organization.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Organization = function Organization(_ref) {
    var onboardingSteps = _ref.onboardingSteps,
        name = _ref.name;
    return _react2.default.createElement("div", null, _react2.default.createElement(OnBoardingSteps, { organizationName: name, onboardingSteps: onboardingSteps }));
};
exports.default = Organization;

/***/ }),

/***/ "./Components/dashboard/organization/organizationContainer.tsx":
/*!*********************************************************************!*\
  !*** ./Components/dashboard/organization/organizationContainer.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _organization = __webpack_require__(/*! ./organization */ "./Components/dashboard/organization/organization.tsx");

var _organization2 = _interopRequireDefault(_organization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  var node = __webpack_require__(/*! ./__generated__/organizationContainerQuery.graphql */ "./Components/dashboard/organization/__generated__/organizationContainerQuery.graphql.js");

  if (node.hash && node.hash !== "63d2e3d1e41a2e64d145db8576e7b7c2") {
    console.error("The definition of 'organizationContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/organizationContainerQuery.graphql */ "./Components/dashboard/organization/__generated__/organizationContainerQuery.graphql.js");
};
var Component = (0, _recompose.compose)((0, _recompose.flattenProp)("node"))(_organization2.default);
var routeConfig = exports.routeConfig = {
  Component: Component,
  query: query
};
exports.default = Component;

/***/ }),

/***/ "./Components/dashboard/organizations/__generated__/organizationsContainerQuery.graphql.js":
/*!*************************************************************************************************!*\
  !*** ./Components/dashboard/organizations/__generated__/organizationsContainerQuery.graphql.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 4ce0054685437b7b3c17b5459dbfc287
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type organizationsContainerQueryVariables = {||};
export type organizationsContainerQueryResponse = {|
  +organizations: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +avatarUrl: string,
  |}>
|};
export type organizationsContainerQuery = {|
  variables: organizationsContainerQueryVariables,
  response: organizationsContainerQueryResponse,
|};
*/


/*
query organizationsContainerQuery {
  organizations {
    id
    name
    avatarUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizations",
    "storageKey": null,
    "args": null,
    "concreteType": "Organization",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "avatarUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "organizationsContainerQuery",
  "id": null,
  "text": "query organizationsContainerQuery {\n  organizations {\n    id\n    name\n    avatarUrl\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "organizationsContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "organizationsContainerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '32d14808967f9b087e70126fa717a296';
module.exports = node;


/***/ }),

/***/ "./Components/dashboard/organizations/organizations.tsx":
/*!**************************************************************!*\
  !*** ./Components/dashboard/organizations/organizations.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styles = __webpack_require__(/*! ../../select/styles */ "./Components/select/styles.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Organizations = function Organizations(_ref) {
    var organizations = _ref.organizations,
        match = _ref.match;
    return _react2.default.createElement("div", null, _react2.default.createElement(_rebass.Text, { my: 30 }, "Choose an organization"), _react2.default.createElement(_gridStyled.Flex, { flexWrap: "wrap" }, organizations.map(function (organization) {
        return _react2.default.createElement(_found.Link, { key: organization.id, to: match.location.pathname + "/organization/" + organization.id + "/onboardingProcess" }, _react2.default.createElement(_styles.SelectCard, { m: cardMargin }, _react2.default.createElement(_rebass.BackgroundImage, { width: 200, src: organization.avatarUrl, ratio: 1 }), _react2.default.createElement(_rebass.Subhead, { textAlign: "center", mt: _styles.nameMargin }, organization.name)));
    })));
};
exports.default = Organizations;

/***/ }),

/***/ "./Components/dashboard/organizations/organizationsContainer.tsx":
/*!***********************************************************************!*\
  !*** ./Components/dashboard/organizations/organizationsContainer.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _organizations = __webpack_require__(/*! ./organizations */ "./Components/dashboard/organizations/organizations.tsx");

var _organizations2 = _interopRequireDefault(_organizations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
    var node = __webpack_require__(/*! ./__generated__/organizationsContainerQuery.graphql */ "./Components/dashboard/organizations/__generated__/organizationsContainerQuery.graphql.js");

    if (node.hash && node.hash !== "32d14808967f9b087e70126fa717a296") {
        console.error("The definition of 'organizationsContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(/*! ./__generated__/organizationsContainerQuery.graphql */ "./Components/dashboard/organizations/__generated__/organizationsContainerQuery.graphql.js");
};
var routeConfig = exports.routeConfig = {
    Component: _organizations2.default,
    query: query,
    render: function render(route) {
        if (route.props) {
            if (route.props.organizations.length === 0) {
                return _react2.default.createElement("div", null, "You must belong to atleast one GitHub organization for onboardor to work");
            }
            if (route.props.organizations.length === 1) {
                throw new _found.RedirectException(route.match.location.pathname + "/organization/" + route.props.organizations[0].id + "/onboardingProcess");
            }
            return _react2.default.createElement(_organizations2.default, (0, _assign2.default)({}, route.props));
        }
        return null;
    }
};
exports.default = _organizations2.default;

/***/ }),

/***/ "./Components/errorPage/errorPage.tsx":
/*!********************************************!*\
  !*** ./Components/errorPage/errorPage.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage(_ref) {
    var status = _ref.status,
        _ref$error = _ref.error,
        error = _ref$error === undefined ? "An unknown error has occured." : _ref$error;
    return _react2.default.createElement(_rebass.Container, { mt: 100 }, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement("title", null, "Error " + status), _react2.default.createElement("meta", { name: "robots", content: "noindex" })), _react2.default.createElement(_rebass.Text, { fontSize: 60, textAlign: "center", mb: 25 }, "Error ", status), _react2.default.createElement(_rebass.Text, { fontSize: 25, textAlign: "center", lineHeight: 1.6 }, _react2.default.createElement("div", null, error), "We have been notified of the error \xAF\\_(\u30C4)_/\xAF. Please try again later."));
};
exports.default = ErrorPage;

/***/ }),

/***/ "./Components/errorPage/errorPageContainer.tsx":
/*!*****************************************************!*\
  !*** ./Components/errorPage/errorPageContainer.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _errorPage = __webpack_require__(/*! ./errorPage */ "./Components/errorPage/errorPage.tsx");

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
    var status = _ref.status,
        error = _ref.error;

    switch (status) {
        case 404:
            return { error: "The page could not be found." };
        default:
            return { error: error };
    }
};
var ErrorPageContainer = (0, _recompose.compose)((0, _recompose.withProps)(createProps))(_errorPage2.default);
var routeConfig = exports.routeConfig = {
    render: function render(route) {
        return route.props && _react2.default.createElement(ErrorPageContainer, { status: parseInt(route.props.params.status, 10), error: route.props.location.state.error });
    }
};
exports.default = ErrorPageContainer;

/***/ }),

/***/ "./Components/footer/imprint.tsx":
/*!***************************************!*\
  !*** ./Components/footer/imprint.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detail = (0, _styledComponents2.default)(_rebass.Text).withConfig({
    displayName: "imprint__Detail"
})(["font-size:18px;margin:10px 0;"]);
var Imprint = function Imprint() {
    return _react2.default.createElement(_rebass.Container, { pt: 40, width: ["100%", "80%", "60%"] }, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement("title", null, "Imprint"), _react2.default.createElement("meta", { name: "description", content: "Contact information for onboardor.com." })), _react2.default.createElement(_rebass.Heading, { mb: 40, is: "h1" }, "Imprint"), _react2.default.createElement(Detail, null, "Company Name: FOZEN LIMITED"), _react2.default.createElement(Detail, null, "Company Director: Martin Dawson"), _react2.default.createElement(Detail, null, "Address: 26 CalderView, Rastrick, Brighouse, HD63DQ United Kingdom"), _react2.default.createElement(Detail, null, "Telephone: +(44)7473591097"), _react2.default.createElement(Detail, null, "Email address: u1356770@gmail.com"));
};
exports.default = Imprint;

/***/ }),

/***/ "./Components/footer/imprintContainer.tsx":
/*!************************************************!*\
  !*** ./Components/footer/imprintContainer.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(/*! ./imprint */ "./Components/footer/imprint.tsx");

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;
var routeConfig = exports.routeConfig = {
    Component: ImprintContainer
};
exports.default = ImprintContainer;

/***/ }),

/***/ "./Components/footer/privacyPolicy.tsx":
/*!*********************************************!*\
  !*** ./Components/footer/privacyPolicy.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicy = function PrivacyPolicy() {
    return _react2.default.createElement("div", null, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement("title", null, "Privacy Policy"), _react2.default.createElement("meta", { name: "description", content: "Our privacy policy explaining what data we collect." })), _react2.default.createElement("h1", null, "Privacy Policy"), _react2.default.createElement("h2", null, "Last Updated: June 11th 2018"), _react2.default.createElement("p", null, "This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website."), _react2.default.createElement("ol", null, _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "What personal information do we collect?"), _react2.default.createElement("p", null, "When registering for our newsletter, you will be asked to enter your email address. This is to help us indentify you and keep you updated. We will not send you any emails that you do not request.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "When do we collect information?"), _react2.default.createElement("p", null, "We collect certain information from you when you register for our newsletter.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "How do we protect your information?"), _react2.default.createElement("p", null, "We do not use vulnerability scanning and/or scanning to PCI standards. We never ask for credit card numbers. We use regular Malware Scanning. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Do we use 'cookies'?"), _react2.default.createElement("p", null, "Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. They are used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "We use cookies to:"), _react2.default.createElement("ul", null, _react2.default.createElement("li", null, "Understand and save user's preferences for future visits."), _react2.default.createElement("li", null, "Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf")), _react2.default.createElement("p", null, "Cookies are an important part of our website and the website will not work without having them enabled. By using our site you allow us to use cookies.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Third-party disclosure"), _react2.default.createElement("p", null, "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Third-party links"), _react2.default.createElement("p", null, "There may be third-party links to radio station websites throughout our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites. Any link on our site to a third part website that is not relevant or if we deem it inappropriate, may be removed.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Google"), _react2.default.createElement("p", null, "Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en We have not enabled Google AdSense on our site.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "California Online Privacy Protection Act"), _react2.default.createElement("p", null, "CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "According to CalOPPA, we agree to the following:"), _react2.default.createElement("p", null, "Users can visit our site anonymously. This privacy policy has a link to it from our home page in the header. Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above. You will be notified of any Privacy Policy changes: \u2022 On our Privacy Policy Page Can change your personal information: \u2022 Through our website")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Does our site allow third-party behavioral tracking?"), _react2.default.createElement("p", null, "It's important to note that we allow third-party behavioral tracking")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "COPPA (Children Online Privacy Protection Act)"), _react2.default.createElement("p", null, "When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online. We do not specifically market to children under the age of 13 years old.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Fair Information Practices"), _react2.default.createElement("p", null, "The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information. In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify you via email within 7 business days. We will also notify users via an in-site notification on the home page within 7 business days. We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors."))));
};
exports.default = PrivacyPolicy;

/***/ }),

/***/ "./Components/footer/privacyPolicyContainer.tsx":
/*!******************************************************!*\
  !*** ./Components/footer/privacyPolicyContainer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(/*! ./privacyPolicy */ "./Components/footer/privacyPolicy.tsx");

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;
var routeConfig = exports.routeConfig = {
    Component: PrivacyPolicyContainer
};
exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ "./Components/footer/termsAndConditions.tsx":
/*!**************************************************!*\
  !*** ./Components/footer/termsAndConditions.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditions = function TermsAndConditions() {
    return _react2.default.createElement("div", null, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement("title", null, "Terms and Conditions"), _react2.default.createElement("meta", { name: "description", content: "Our terms and conditions that you agree to when using our site." })), _react2.default.createElement("h1", null, "Terms and Conditions"), _react2.default.createElement("h2", null, "Last Updated: June 11th 2018"), _react2.default.createElement("p", null, "\"You\" and \"your\" refer to you, as a user of the Site. A \"user\" is someone who accesses,browses, crawls, scrapes, or in any way uses the Site. \"We,\" \"us,\" and \"our\" refer to onboardor. \"Content\" means text, images, photos, audio, video, location data, and all other forms of data or communication. \"Your Content\" means Content that you submit or transmit to, through, or in connection with the Site, such as ratings, reviews, compliments, invitations, check-ins, messages, and information that you publicly display or displayed in your account profile. \"User Content\" means Content that users submit or transmit to, through, or in connection with the Site. \"onboardor Content\" means Content that we create and make available in connection with the Site. \"Third Party Content\" means Content that originates from parties other than onboardor or its users, which is made available in connection with the Site. \"Site Content\" means all of the Content that is made available in connection with the Site, including Your Content, User Content, Third Party Content, and onboardor Content."), _react2.default.createElement("ol", null, _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Terms"), _react2.default.createElement("p", null, "By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Disclaimer"), _react2.default.createElement("p", null, "The materials on the onboardor website are provided \"as shown\". onboardor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, onboardor does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its internet website or otherwise relating to such materials or on any sites linked to this site.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Limitations"), _react2.default.createElement("p", null, "In no event shall onboardor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our internet site or offered services, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Revisions and Errors"), _react2.default.createElement("p", null, "The materials appearing on our website could include technical, typographical, or photographic errors. onboardor does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Links"), _react2.default.createElement("p", null, "onboardor has not reviewed all of the sites linked to its internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user\"s own risk.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Governing Law"), _react2.default.createElement("p", null, "Any claim relating to the onboardor website shall be governed by the laws of the country of note without regard to its conflict of law provisions.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "English Language"), _react2.default.createElement("p", null, "In the event of a conflict between these Terms and a foreign language version of our Terms of Use, the English language version of these Terms governs. All disputes, claims and causes of action (and related proceedings) will be communicated in English.")), _react2.default.createElement("li", null, _react2.default.createElement("h2", null, "Copyright policy, notice and claim information"), _react2.default.createElement("p", null, "All materials on this site, whether separate or compiled, including, but not limited to, text, graphics, audio clips, logos, buttons, images, digital downloads, data compilations, software, icons, html code and xml code, as well as all copyright, patent, trademark, trade dress, and other rights therein, are owned or licensed by onboardor and its third-party information providers, and are protected by international intellectual property laws."))));
};
exports.default = TermsAndConditions;

/***/ }),

/***/ "./Components/footer/termsAndConditionsContainer.tsx":
/*!***********************************************************!*\
  !*** ./Components/footer/termsAndConditionsContainer.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(/*! ./termsAndConditions */ "./Components/footer/termsAndConditions.tsx");

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;
var routeConfig = exports.routeConfig = {
    Component: TermsAndConditionsContainer
};
exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ "./Components/landingPage/landingPage.tsx":
/*!************************************************!*\
  !*** ./Components/landingPage/landingPage.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _subscribeMailingListContainer = __webpack_require__(/*! ../shared/form/subscribeMailingListContainer */ "./Components/shared/form/subscribeMailingListContainer.tsx");

var _subscribeMailingListContainer2 = _interopRequireDefault(_subscribeMailingListContainer);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _backgroundBlue = __webpack_require__(/*! ../../wwwroot/assets/backgroundBlue.svg */ "./wwwroot/assets/backgroundBlue.svg");

var _backgroundBlue2 = _interopRequireDefault(_backgroundBlue);

var _backgroundGrey = __webpack_require__(/*! ../../wwwroot/assets/backgroundGrey.svg */ "./wwwroot/assets/backgroundGrey.svg");

var _backgroundGrey2 = _interopRequireDefault(_backgroundGrey);

var _check = __webpack_require__(/*! ../../wwwroot/assets/check.svg */ "./wwwroot/assets/check.svg");

var _check2 = _interopRequireDefault(_check);

var _board = __webpack_require__(/*! ../../wwwroot/assets/board.png */ "./wwwroot/assets/board.png");

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var GreenCheck = (0, _styledComponents2.default)(_check2.default).withConfig({
    displayName: "landingPage__GreenCheck"
})(["margin-right:10px;min-width:20px;fill:", ""], function (_ref) {
    var theme = _ref.theme;
    return theme.colors.primary;
});
var StyledStepFlex = (0, _styledComponents2.default)(_gridStyled.Flex).withConfig({
    displayName: "landingPage__StyledStepFlex"
})(["@media screen and (max-width:", "px){> svg{width:100%;}}"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.breakpoints[0];
});
var StepFlex = function StepFlex(_a) {
    var props = __rest(_a, []);
    return _react2.default.createElement(StyledStepFlex, (0, _assign2.default)({}, props, { mb: [40, 40, 0], justifyContent: "space-between", alignItems: ["center", "center", "stretch"], flexDirection: ["column", "column", "row"] }));
};
var StepContainer = function StepContainer(_a) {
    var props = __rest(_a, []);
    return _react2.default.createElement(_gridStyled.Box, (0, _assign2.default)({}, props, { width: [1, 1, 370], mt: [0, 0, 44], order: [-1, -1, 0] }));
};
var StepContent = function StepContent(_a) {
    var props = __rest(_a, []);
    return _react2.default.createElement(_gridStyled.Box, (0, _assign2.default)({ is: "ul" }, props, { mx: ["auto", "auto", "none"], fontSize: 18 }));
};
var StepItem = function StepItem(_a) {
    var children = _a.children,
        props = __rest(_a, ["children"]);
    return _react2.default.createElement(_gridStyled.Box, (0, _assign2.default)({ is: "li", width: ["initial", "60%", "100%"], mx: ["5%", "20%", 0], my: 12 }, props), _react2.default.createElement(_gridStyled.Flex, null, _react2.default.createElement(GreenCheck, { width: 20, height: 20 }), _react2.default.createElement(_rebass.Text, { color: "white", fontSize: 21 }, children)));
};
var LandingPage = function LandingPage(_ref3) {
    var theme = _ref3.theme;
    return _react2.default.createElement(_rebass.Relative, { style: { height: "100%" } }, _react2.default.createElement(_rebass.Absolute, { style: { width: "100%", height: "99%" }, zIndex: -1 }, _react2.default.createElement(_backgroundBlue2.default, { height: "100%", width: "100%" })), _react2.default.createElement(_rebass.Absolute, { style: { width: "100%", height: "99%" }, zIndex: -1 }, _react2.default.createElement(_backgroundGrey2.default, { height: "100%", width: "100%" })), _react2.default.createElement(_rebass.Container, { pt: 50, maxWidth: 1100 }, _react2.default.createElement(_rebass.Text, { textAlign: "center", mb: 34, fontSize: [25, 30], color: "white" }, "Setup your teams on-boarding process directly through GitHub"), _react2.default.createElement(_gridStyled.Box, { mt: 34, mb: 34 }, _react2.default.createElement(StepFlex, null, _react2.default.createElement(_rebass.Image, { src: _board2.default }), _react2.default.createElement(StepContainer, { ml: [0, 0, 30] }, _react2.default.createElement(StepContent, null, _react2.default.createElement(StepItem, null, "5 minute setup."), _react2.default.createElement(StepItem, null, "Uses a familiar GitHub issue board for your on-boarding setup"), _react2.default.createElement(StepItem, null, "Automatically integrates your team members from your organization"), _react2.default.createElement(StepItem, null, "Provides a set of pre-defined on-boarding best practices for you"))))), _react2.default.createElement(_subscribeMailingListContainer2.default, null), _react2.default.createElement(_rebass.Text, { textAlign: "center", mt: 20, mb: 45, color: theme.colors.primary2 }, "-Coming this September-")));
};
exports.default = (0, _styledComponents.withTheme)(LandingPage);

/***/ }),

/***/ "./Components/landingPage/landingPageContainer.tsx":
/*!*********************************************************!*\
  !*** ./Components/landingPage/landingPageContainer.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _landingPage = __webpack_require__(/*! ./landingPage */ "./Components/landingPage/landingPage.tsx");

var _landingPage2 = _interopRequireDefault(_landingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeConfig = exports.routeConfig = {
    Component: _landingPage2.default
};
exports.default = _landingPage2.default;

/***/ }),

/***/ "./Components/layouts/primaryLayout/primaryLayout.tsx":
/*!************************************************************!*\
  !*** ./Components/layouts/primaryLayout/primaryLayout.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _primaryLayoutErrorBoundary = __webpack_require__(/*! ./primaryLayoutErrorBoundary */ "./Components/layouts/primaryLayout/primaryLayoutErrorBoundary.tsx");

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayout = function PrimaryLayout(_ref) {
    var children = _ref.children,
        theme = _ref.theme;
    return _react2.default.createElement(_primaryLayoutErrorBoundary2.default, null, _react2.default.createElement(_rebass.Root, { style: { height: "100%" }, color: theme.colors.grey }, children));
};
exports.default = (0, _styledComponents.withTheme)(PrimaryLayout);

/***/ }),

/***/ "./Components/layouts/primaryLayout/primaryLayoutContainer.tsx":
/*!*********************************************************************!*\
  !*** ./Components/layouts/primaryLayout/primaryLayoutContainer.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(/*! ./primaryLayout */ "./Components/layouts/primaryLayout/primaryLayout.tsx");

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;
var routeConfig = exports.routeConfig = {
    Component: PrimaryLayoutContainer
};
exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ "./Components/layouts/primaryLayout/primaryLayoutErrorBoundary.tsx":
/*!*************************************************************************!*\
  !*** ./Components/layouts/primaryLayout/primaryLayoutErrorBoundary.tsx ***!
  \*************************************************************************/
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

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutErrorBoundary = function (_React$Component) {
    (0, _inherits3.default)(PrimaryLayoutErrorBoundary, _React$Component);

    function PrimaryLayoutErrorBoundary() {
        (0, _classCallCheck3.default)(this, PrimaryLayoutErrorBoundary);
        return (0, _possibleConstructorReturn3.default)(this, (PrimaryLayoutErrorBoundary.__proto__ || (0, _getPrototypeOf2.default)(PrimaryLayoutErrorBoundary)).apply(this, arguments));
    }

    (0, _createClass3.default)(PrimaryLayoutErrorBoundary, [{
        key: "render",

        // componentDidCatch() {
        //   this.props.router.push('/error/500');
        // }
        value: function render() {
            return this.props.children;
        }
    }]);
    return PrimaryLayoutErrorBoundary;
}(_react2.default.Component);

exports.default = (0, _recompose.compose)(_found.withRouter)(PrimaryLayoutErrorBoundary);

/***/ }),

/***/ "./Components/select/__generated__/selectOrganizationContainerQuery.graphql.js":
/*!*************************************************************************************!*\
  !*** ./Components/select/__generated__/selectOrganizationContainerQuery.graphql.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 670d93349d3732c3329e2887a3743ed4
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type selectOrganizationContainerQueryVariables = {||};
export type selectOrganizationContainerQueryResponse = {|
  +organizations: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +avatarUrl: string,
  |}>
|};
export type selectOrganizationContainerQuery = {|
  variables: selectOrganizationContainerQueryVariables,
  response: selectOrganizationContainerQueryResponse,
|};
*/


/*
query selectOrganizationContainerQuery {
  organizations {
    id
    name
    avatarUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizations",
    "storageKey": null,
    "args": null,
    "concreteType": "Organization",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "avatarUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "selectOrganizationContainerQuery",
  "id": null,
  "text": "query selectOrganizationContainerQuery {\n  organizations {\n    id\n    name\n    avatarUrl\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "selectOrganizationContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "selectOrganizationContainerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57282284a039bfd177849584adf71cfa';
module.exports = node;


/***/ }),

/***/ "./Components/select/__generated__/setOnboardingMembersMutation.graphql.js":
/*!*********************************************************************************!*\
  !*** ./Components/select/__generated__/setOnboardingMembersMutation.graphql.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 0cc49b422aef24cf248c7249e4acc77c
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SetOnboardingMembersInput = {
  clientMutationId?: ?string,
  memberIds: $ReadOnlyArray<?number>,
};
export type setOnboardingMembersMutationVariables = {|
  input: SetOnboardingMembersInput
|};
export type setOnboardingMembersMutationResponse = {|
  +setOnboardingMembers: ?{|
    +clientMutationId: ?string
  |}
|};
export type setOnboardingMembersMutation = {|
  variables: setOnboardingMembersMutationVariables,
  response: setOnboardingMembersMutationResponse,
|};
*/


/*
mutation setOnboardingMembersMutation(
  $input: SetOnboardingMembersInput!
) {
  setOnboardingMembers(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SetOnboardingMembersInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "setOnboardingMembers",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SetOnboardingMembersInput!"
      }
    ],
    "concreteType": "SetOnboardingMembersPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "setOnboardingMembersMutation",
  "id": null,
  "text": "mutation setOnboardingMembersMutation(\n  $input: SetOnboardingMembersInput!\n) {\n  setOnboardingMembers(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setOnboardingMembersMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "setOnboardingMembersMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b342372835c757e8b8f529947a3e620';
module.exports = node;


/***/ }),

/***/ "./Components/select/selectOrganization.tsx":
/*!**************************************************!*\
  !*** ./Components/select/selectOrganization.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _linkButton = __webpack_require__(/*! ../shared/button/linkButton */ "./Components/shared/button/linkButton.tsx");

var _linkButton2 = _interopRequireDefault(_linkButton);

var _styles = __webpack_require__(/*! ./styles */ "./Components/select/styles.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectOrganization = function SelectOrganization(_ref) {
    var organizations = _ref.organizations,
        selectedOrganizationId = _ref.selectedOrganizationId,
        selectOrganization = _ref.selectOrganization;
    return _react2.default.createElement(_gridStyled.Flex, { alignItems: "center", flexDirection: "column", pt: 30 }, _react2.default.createElement(_rebass.Text, { my: 30 }, "Select the organization that you want to start onboarding for."), _react2.default.createElement(_gridStyled.Flex, { flexWrap: "wrap" }, organizations.map(function (organization) {
        var selected = organization.id === selectedOrganizationId;
        return _react2.default.createElement(_gridStyled.Flex, { key: organization.id, flexDirection: "column", alignItems: "center" }, _react2.default.createElement(_styles.SelectCard, { key: organization.id, m: _styles.cardMargin, onClick: function onClick() {
                return selectOrganization(organization);
            }, selected: selected }, _react2.default.createElement(_rebass.BackgroundImage, { width: 200, src: organization.avatarUrl, ratio: 1 }), _react2.default.createElement(_rebass.Subhead, { textAlign: "center", mt: _styles.nameMargin }, organization.name)));
    })), _react2.default.createElement(_linkButton2.default, { to: "/select/teamMembers?organizationId=" + selectedOrganizationId, mx: "auto", mt: 50, fontSize: 25, display: "block" }, "Continue"));
};
exports.default = SelectOrganization;

/***/ }),

/***/ "./Components/select/selectOrganizationContainer.tsx":
/*!***********************************************************!*\
  !*** ./Components/select/selectOrganizationContainer.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _selectOrganization = __webpack_require__(/*! ./selectOrganization */ "./Components/select/selectOrganization.tsx");

var _selectOrganization2 = _interopRequireDefault(_selectOrganization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
    var node = __webpack_require__(/*! ./__generated__/selectOrganizationContainerQuery.graphql */ "./Components/select/__generated__/selectOrganizationContainerQuery.graphql.js");

    if (node.hash && node.hash !== "57282284a039bfd177849584adf71cfa") {
        console.error("The definition of 'selectOrganizationContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(/*! ./__generated__/selectOrganizationContainerQuery.graphql */ "./Components/select/__generated__/selectOrganizationContainerQuery.graphql.js");
};
var stateHandlers = {
    selectOrganization: function selectOrganization(_ref) {
        var selectedOrganizationId = _ref.selectedOrganizationId;
        return function (organization) {
            return {
                selectedOrganizationId: selectedOrganizationId ? null : organization.id
            };
        };
    }
};
var Component = (0, _recompose.compose)((0, _recompose.withStateHandlers)({
    selectedOrganizationId: null
}, stateHandlers))(_selectOrganization2.default);
var routeConfig = exports.routeConfig = {
    query: query,
    Component: Component
};
exports.default = Component;

/***/ }),

/***/ "./Components/select/selectTeamMembers.tsx":
/*!*************************************************!*\
  !*** ./Components/select/selectTeamMembers.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _button = __webpack_require__(/*! ../shared/button/button */ "./Components/shared/button/button.tsx");

var _button2 = _interopRequireDefault(_button);

var _styles = __webpack_require__(/*! ./styles */ "./Components/select/styles.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectTeamMembers = function SelectTeamMembers(_ref) {
    var organization = _ref.organization,
        selectTeamMember = _ref.selectTeamMember,
        proceed = _ref.proceed,
        selectedTeamMembers = _ref.selectedTeamMembers;
    return _react2.default.createElement(_gridStyled.Flex, { alignItems: "center", flexDirection: "column", pt: 30 }, _react2.default.createElement(_rebass.Text, { my: 30 }, "Select your team members that you want to start onboarding for ", _react2.default.createElement(_rebass.Text, { is: "span", fontWeight: "bold" }, organization.name), "."), _react2.default.createElement(_gridStyled.Flex, { flexWrap: "wrap" }, organization.members.map(function (member) {
        var selected = selectedTeamMembers.some(function (selectedTeamMember) {
            return selectedTeamMember.id === member.id;
        });
        return _react2.default.createElement(_styles.SelectCard, { key: member.id, m: _styles.cardMargin, onClick: function onClick() {
                return selectTeamMember(member);
            }, selected: selected }, _react2.default.createElement(_rebass.BackgroundImage, { width: 200, src: member.avatarUrl, ratio: 1 }), _react2.default.createElement(_rebass.Subhead, { textAlign: "center", mt: _styles.nameMargin }, member.name));
    })), _react2.default.createElement(_button2.default, { mx: "auto", mt: 50, fontSize: 25, display: "block", onClick: proceed }, "Continue"));
};
exports.default = SelectTeamMembers;

/***/ }),

/***/ "./Components/select/selectTeamMembersContainer.tsx":
/*!**********************************************************!*\
  !*** ./Components/select/selectTeamMembersContainer.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _selectTeamMembers = __webpack_require__(/*! ./selectTeamMembers */ "./Components/select/selectTeamMembers.tsx");

var _selectTeamMembers2 = _interopRequireDefault(_selectTeamMembers);

var _setOnboardingMembersMutation = __webpack_require__(/*! ./setOnboardingMembersMutation */ "./Components/select/setOnboardingMembersMutation.tsx");

var _setOnboardingMembersMutation2 = _interopRequireDefault(_setOnboardingMembersMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
    proceed: function proceed(_ref) {
        var router = _ref.router,
            selectedTeamMembers = _ref.selectedTeamMembers;
        return function () {
            (0, _setOnboardingMembersMutation2.default)({ memberIds: selectedTeamMembers.map(function (x) {
                    return x.id;
                }) });
            router.push("/");
        };
    }
};
var stateHandlers = {
    selectTeamMember: function selectTeamMember(_ref2) {
        var selectedTeamMembers = _ref2.selectedTeamMembers;
        return function (teamMember) {
            var existingTeamMemberIndex = selectedTeamMembers.findIndex(function (selectedTeamMember) {
                return selectedTeamMember.id === teamMember.id;
            });
            var newSelectedTeamMembers = [].concat((0, _toConsumableArray3.default)(selectedTeamMembers));
            if (existingTeamMemberIndex === -1) {
                newSelectedTeamMembers.push(teamMember);
            } else {
                newSelectedTeamMembers.splice(existingTeamMemberIndex, 1);
            }
            return { selectedTeamMembers: newSelectedTeamMembers };
        };
    }
};
var Component = (0, _recompose.compose)((0, _recompose.withStateHandlers)({
    selectedTeamMembers: []
}, stateHandlers), (0, _recompose.withHandlers)(handlers))(_selectTeamMembers2.default);
var routeConfig = exports.routeConfig = {
    Component: Component
};
exports.default = Component;

/***/ }),

/***/ "./Components/select/setOnboardingMembersMutation.tsx":
/*!************************************************************!*\
  !*** ./Components/select/setOnboardingMembersMutation.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/setOnboardingMembersMutation.graphql */ "./Components/select/__generated__/setOnboardingMembersMutation.graphql.js");

  if (node.hash && node.hash !== "8b342372835c757e8b8f529947a3e620") {
    console.error("The definition of 'setOnboardingMembersMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/setOnboardingMembersMutation.graphql */ "./Components/select/__generated__/setOnboardingMembersMutation.graphql.js");
};

exports.default = function (input) {
  var variables = {
    input: input
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/select/styles.tsx":
/*!**************************************!*\
  !*** ./Components/select/styles.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameMargin = exports.cardMargin = exports.SelectCard = undefined;

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectCard = exports.SelectCard = (0, _styledComponents2.default)(_rebass.Card).withConfig({
  displayName: "styles__SelectCard"
})(["cursor:pointer;", ""], function (_ref) {
  var selected = _ref.selected,
      theme = _ref.theme;
  return selected && "\n    box-shadow: inset 0 0 0 1px #eee, 0 0 7px 3px " + theme.colors.primary + ";\n  ";
});
var cardMargin = exports.cardMargin = 11;
var nameMargin = exports.nameMargin = 7;

/***/ }),

/***/ "./Components/setup/__generated__/setupCallbackContainerQuery.graphql.js":
/*!*******************************************************************************!*\
  !*** ./Components/setup/__generated__/setupCallbackContainerQuery.graphql.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 3132c5bf952cf98cfec0c59bf06ff6fb
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setupCallbackContainerQueryVariables = {|
  code: string,
  state: string,
|};
export type setupCallbackContainerQueryResponse = {|
  +setupCallback: boolean
|};
export type setupCallbackContainerQuery = {|
  variables: setupCallbackContainerQueryVariables,
  response: setupCallbackContainerQueryResponse,
|};
*/


/*
query setupCallbackContainerQuery(
  $code: String!
  $state: String!
) {
  setupCallback(code: $code, state: $state)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "code",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "state",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "setupCallback",
    "args": [
      {
        "kind": "Variable",
        "name": "code",
        "variableName": "code",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "state",
        "variableName": "state",
        "type": "String!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "setupCallbackContainerQuery",
  "id": null,
  "text": "query setupCallbackContainerQuery(\n  $code: String!\n  $state: String!\n) {\n  setupCallback(code: $code, state: $state)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setupCallbackContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "setupCallbackContainerQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d4ee24c2e6e193a1a6e90ae82972954';
module.exports = node;


/***/ }),

/***/ "./Components/setup/__generated__/setupContainerQuery.graphql.js":
/*!***********************************************************************!*\
  !*** ./Components/setup/__generated__/setupContainerQuery.graphql.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash ea7444b3bb8c852653f635a83488e3ff
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setupContainerQueryVariables = {||};
export type setupContainerQueryResponse = {|
  +setup: ?string
|};
export type setupContainerQuery = {|
  variables: setupContainerQueryVariables,
  response: setupContainerQueryResponse,
|};
*/


/*
query setupContainerQuery {
  setup
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "setup",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "setupContainerQuery",
  "id": null,
  "text": "query setupContainerQuery {\n  setup\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setupContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "setupContainerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ba110782e5a20608e01b761352b8726';
module.exports = node;


/***/ }),

/***/ "./Components/setup/setup.tsx":
/*!************************************!*\
  !*** ./Components/setup/setup.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _gitHub = __webpack_require__(/*! ../../wwwroot/assets/gitHub.svg */ "./wwwroot/assets/gitHub.svg");

var _gitHub2 = _interopRequireDefault(_gitHub);

var _anchorButton = __webpack_require__(/*! ../shared/button/anchorButton */ "./Components/shared/button/anchorButton.tsx");

var _anchorButton2 = _interopRequireDefault(_anchorButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomGitHubIcon = (0, _styledComponents2.default)(_gitHub2.default).withConfig({
    displayName: "setup__CustomGitHubIcon"
})(["width:30px;height:30px;fill:white;margin-right:10px;"]);
var Setup = function Setup(_ref) {
    var url = _ref.url;
    return _react2.default.createElement(_rebass.Container, { mt: 130 }, _react2.default.createElement(_rebass.Text, { mb: 20, fontSize: 20, textAlign: "center" }, "Install with GitHub to use onboardor"), _react2.default.createElement(_gridStyled.Flex, { justifyContent: "center" }, _react2.default.createElement(_anchorButton2.default, { href: url, style: {
            display: "flex",
            alignItems: "center"
        } }, _react2.default.createElement(CustomGitHubIcon, null), "Install onboardor")));
};
exports.default = Setup;

/***/ }),

/***/ "./Components/setup/setupCallbackContainer.tsx":
/*!*****************************************************!*\
  !*** ./Components/setup/setupCallbackContainer.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeConfig = undefined;

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var query = function query() {
    var node = __webpack_require__(/*! ./__generated__/setupCallbackContainerQuery.graphql */ "./Components/setup/__generated__/setupCallbackContainerQuery.graphql.js");

    if (node.hash && node.hash !== "5d4ee24c2e6e193a1a6e90ae82972954") {
        console.error("The definition of 'setupCallbackContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(/*! ./__generated__/setupCallbackContainerQuery.graphql */ "./Components/setup/__generated__/setupCallbackContainerQuery.graphql.js");
};
var routeConfig = exports.routeConfig = {
    prepareVariables: function prepareVariables(_, _ref) {
        var location = _ref.location;
        return {
            code: location.query.code,
            state: location.query.state
        };
    },
    query: query,
    render: function render(route) {
        if (route.props) {
            if (route.props.setupCallback) {
                var redirectUrl = route.match.location.query.redirectUrl;
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                } else {
                    throw new _found.RedirectException("/dashboard");
                }
            }
            // Handle errors
        }
        return null;
    }
};

/***/ }),

/***/ "./Components/setup/setupContainer.tsx":
/*!*********************************************!*\
  !*** ./Components/setup/setupContainer.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _setup = __webpack_require__(/*! ./setup */ "./Components/setup/setup.tsx");

var _setup2 = _interopRequireDefault(_setup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  var node = __webpack_require__(/*! ./__generated__/setupContainerQuery.graphql */ "./Components/setup/__generated__/setupContainerQuery.graphql.js");

  if (node.hash && node.hash !== "8ba110782e5a20608e01b761352b8726") {
    console.error("The definition of 'setupContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/setupContainerQuery.graphql */ "./Components/setup/__generated__/setupContainerQuery.graphql.js");
};
var routeConfig = exports.routeConfig = {
  query: query,
  render: function render(route) {
    return route.props && _react2.default.createElement(_setup2.default, { url: route.props.setup });
  }
};

/***/ }),

/***/ "./Components/shared/button/anchorButton.tsx":
/*!***************************************************!*\
  !*** ./Components/shared/button/anchorButton.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var AnchorButton = (0, _styledComponents2.default)(function (_a) {
    var theme = _a.theme,
        props = __rest(_a, ["theme"]);
    return _react2.default.createElement(_rebass.BlockLink, (0, _assign2.default)({}, props, { p: 15, color: "white", bg: theme.colors.primary }));
}).withConfig({
    displayName: "anchorButton__AnchorButton"
})(["border-radius:4px;"]);
exports.default = (0, _styledComponents.withTheme)(AnchorButton);

/***/ }),

/***/ "./Components/shared/button/button.tsx":
/*!*********************************************!*\
  !*** ./Components/shared/button/button.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Button = (0, _styledComponents2.default)(function (_a) {
    var appTheme = _a.appTheme,
        props = __rest(_a, ["appTheme"]);
    return _react2.default.createElement(_rebass.Button, (0, _assign2.default)({ bg: appTheme.colors.primary }, props));
}).withConfig({
    displayName: "button__Button"
})(["&:disabled{cursor:initial;}&:not(:disabled){cursor:pointer;}&:focus{box-shadow:none;}"]);
exports.default = (0, _redux.compose)(_styledComponents.withTheme, (0, _recompose.renameProp)("theme", "appTheme"))(Button);

/***/ }),

/***/ "./Components/shared/button/linkButton.tsx":
/*!*************************************************!*\
  !*** ./Components/shared/button/linkButton.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _found = __webpack_require__(/*! found */ "./node_modules/found/lib/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomLink = (0, _styledComponents2.default)(_found.Link).withConfig({
  displayName: "linkButton__CustomLink"
})(["background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
exports.default = (0, _redux.compose)(_styledComponents.withTheme)(CustomLink);

/***/ }),

/***/ "./Components/shared/form/Form.tsx":
/*!*****************************************!*\
  !*** ./Components/shared/form/Form.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var submitSucceeded = _ref.submitSucceeded,
      submitSucceededMessage = _ref.submitSucceededMessage,
      children = _ref.children,
      onSubmit = _ref.onSubmit;
  return _react2.default.createElement("div", null, submitSucceeded ? submitSucceededMessage : _react2.default.createElement("form", { onSubmit: onSubmit, action: "" }, children));
};
exports.default = Form;

/***/ }),

/***/ "./Components/shared/form/__generated__/subscribeMailingListMutation.graphql.js":
/*!**************************************************************************************!*\
  !*** ./Components/shared/form/__generated__/subscribeMailingListMutation.graphql.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @flow
 * @relayHash 27fab7a7eb7995747c4fb43650bc98be
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscribeMailingListInput = {
  clientMutationId?: ?string,
  email: string,
  recaptcha: string,
};
export type subscribeMailingListMutationVariables = {|
  input: SubscribeMailingListInput
|};
export type subscribeMailingListMutationResponse = {|
  +subscribeMailingList: ?{|
    +clientMutationId: ?string
  |}
|};
export type subscribeMailingListMutation = {|
  variables: subscribeMailingListMutationVariables,
  response: subscribeMailingListMutationResponse,
|};
*/


/*
mutation subscribeMailingListMutation(
  $input: SubscribeMailingListInput!
) {
  subscribeMailingList(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubscribeMailingListInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "subscribeMailingList",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SubscribeMailingListInput!"
      }
    ],
    "concreteType": "SubscribeMailingListPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "subscribeMailingListMutation",
  "id": null,
  "text": "mutation subscribeMailingListMutation(\n  $input: SubscribeMailingListInput!\n) {\n  subscribeMailingList(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subscribeMailingListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "subscribeMailingListMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b7774705a522c61eac286b0ba4f46c99';
module.exports = node;


/***/ }),

/***/ "./Components/shared/form/subscribeMailingList.tsx":
/*!*********************************************************!*\
  !*** ./Components/shared/form/subscribeMailingList.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _createFieldValidator = __webpack_require__(/*! ../inputs/createFieldValidator */ "./Components/shared/inputs/createFieldValidator.tsx");

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _emailGreen = __webpack_require__(/*! ../../../wwwroot/assets/email-green.svg */ "./wwwroot/assets/email-green.svg");

var _emailGreen2 = _interopRequireDefault(_emailGreen);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _button = __webpack_require__(/*! ../button/button */ "./Components/shared/button/button.tsx");

var _button2 = _interopRequireDefault(_button);

var _reactGoogleRecaptcha = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/es/recaptcha-wrapper.js");

var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

var _fieldInput = __webpack_require__(/*! ../inputs/fieldInput */ "./Components/shared/inputs/fieldInput.tsx");

var _fieldInput2 = _interopRequireDefault(_fieldInput);

var _Form = __webpack_require__(/*! ./Form */ "./Components/shared/form/Form.tsx");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitSucceededMessage = function SubmitSucceededMessage() {
    return _react2.default.createElement(_rebass.Text, { textAlign: "center", fontSize: 18, color: "white" }, "Thank you for subscribing. We will update you once we are live!");
};
var emailValidator = (0, _createFieldValidator2.default)(["required", "email"]);
var SubscribeMailingList = function SubscribeMailingList(_ref) {
    var handleSubmit = _ref.handleSubmit,
        onSubmit = _ref.onSubmit,
        setRecaptcha = _ref.setRecaptcha,
        recaptcha = _ref.recaptcha,
        submitSucceeded = _ref.submitSucceeded;
    return _react2.default.createElement(_gridStyled.Box, { mx: "auto" }, _react2.default.createElement(_Form2.default, { submitSucceeded: submitSucceeded, onSubmit: function onSubmit(e) {
            e.preventDefault();
            recaptcha && recaptcha.execute();
        }, submitSucceededMessage: _react2.default.createElement(SubmitSucceededMessage, null) }, _react2.default.createElement(_gridStyled.Flex, { justifyContent: "center" }, _react2.default.createElement(_rebass.Relative, null, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, px: 63, py: 27, fontSize: 17, bg: "white", id: "email", name: "email", placeholder: "Enter your email", type: "email", validate: emailValidator }), _react2.default.createElement(_rebass.Absolute, { top: "50%", left: 30, style: { transform: "translateY(-50%)" } }, _react2.default.createElement(_rebass.Label, { htmlFor: "email", mb: 0 }, _react2.default.createElement(_emailGreen2.default, null)))), _react2.default.createElement(_button2.default, { ml: 15, fontSize: 17, px: [20, 76], style: { textTransform: "uppercase", whiteSpace: "nowrap" } }, "Join List")), _react2.default.createElement(_reactGoogleRecaptcha2.default, { ref: setRecaptcha, size: "invisible", sitekey: "6LdV3F4UAAAAAAHstIWHTY1fZER_DgFAmqWqzgky", onChange: function onChange(recaptcha) {
            handleSubmit(function (props) {
                return onSubmit((0, _assign2.default)({}, props, { recaptcha: recaptcha }));
            })();
        } })));
};
exports.default = (0, _styledComponents.withTheme)(SubscribeMailingList);

/***/ }),

/***/ "./Components/shared/form/subscribeMailingListContainer.tsx":
/*!******************************************************************!*\
  !*** ./Components/shared/form/subscribeMailingListContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _subscribeMailingList = __webpack_require__(/*! ./subscribeMailingList */ "./Components/shared/form/subscribeMailingList.tsx");

var _subscribeMailingList2 = _interopRequireDefault(_subscribeMailingList);

var _subscribeMailingListMutation = __webpack_require__(/*! ./subscribeMailingListMutation */ "./Components/shared/form/subscribeMailingListMutation.tsx");

var _subscribeMailingListMutation2 = _interopRequireDefault(_subscribeMailingListMutation);

var _logErrors = __webpack_require__(/*! ../logErrors */ "./Components/shared/logErrors.tsx");

var _logErrors2 = _interopRequireDefault(_logErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var stateHandlers = {
    setRecaptcha: function setRecaptcha() {
        return function (recaptcha) {
            return {
                recaptcha: recaptcha
            };
        };
    }
};
var handlers = {
    onSubmit: function onSubmit() {
        return function (input) {
            return __awaiter(undefined, void 0, void 0, /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                return _context.abrupt("return", (0, _subscribeMailingListMutation2.default)(input));

                            case 4:
                                _context.prev = 4;
                                _context.t0 = _context["catch"](0);

                                (0, _logErrors2.default)(_context.t0);
                                throw _context.t0;

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 4]]);
            }));
        };
    }
};
exports.default = (0, _recompose.compose)((0, _recompose.withStateHandlers)(null, stateHandlers), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
    form: "subscribeMailingList"
}))(_subscribeMailingList2.default);

/***/ }),

/***/ "./Components/shared/form/subscribeMailingListMutation.tsx":
/*!*****************************************************************!*\
  !*** ./Components/shared/form/subscribeMailingListMutation.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/subscribeMailingListMutation.graphql */ "./Components/shared/form/__generated__/subscribeMailingListMutation.graphql.js");

  if (node.hash && node.hash !== "b7774705a522c61eac286b0ba4f46c99") {
    console.error("The definition of 'subscribeMailingListMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/subscribeMailingListMutation.graphql */ "./Components/shared/form/__generated__/subscribeMailingListMutation.graphql.js");
};

exports.default = function (_ref) {
  var email = _ref.email,
      recaptcha = _ref.recaptcha;

  var variables = {
    input: {
      email: email,
      recaptcha: recaptcha
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ "./Components/shared/inputs/createFieldValidator.tsx":
/*!***********************************************************!*\
  !*** ./Components/shared/inputs/createFieldValidator.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultErrorMessages = {
    email: "Email must contain an '@' and a '.' to be valid",
    required: "This input is required"
};
var RULES = {
    email: /.+@.+\..+/i,
    required: function required(value) {
        return value !== undefined && value !== null && (typeof value !== "boolean" || value === true) && (typeof value !== "string" || value.length > 0) && (!Array.isArray(value) || value.length > 0) && ((typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) !== "object" || (0, _keys2.default)(value).length > 0);
    }
};
var getMatcher = function getMatcher(name) {
    var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultErrorMessages[name];

    var rule = RULES[name];
    if (!rule) {
        throw new Error("No rule for name \"" + name + "\" defined");
    }
    var test = typeof rule === "function" ? rule : function (value) {
        return rule.test(value);
    };
    return { name: name, test: test, errorMessage: errorMessage };
};
var createValidate = function createValidate(matchers, value) {
    var invalidMatcher = matchers.find(function (matcher) {
        return !matcher.test(value);
    });
    if (!invalidMatcher) {
        return undefined;
    }
    return invalidMatcher.errorMessage || true;
};

exports.default = function () {
    var validations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function (value) {
        var matchers = [];
        validations.forEach(function (validation) {
            if (validation && typeof validation === "string") {
                var validationMatchers = getMatcher(validation);
                matchers = matchers.concat(validationMatchers);
            } else if (validation && (typeof validation === "undefined" ? "undefined" : (0, _typeof3.default)(validation)) === "object") {
                var _validationMatchers = (0, _keys2.default)(validation).map(function (ruleName) {
                    return getMatcher(ruleName, validation[ruleName]);
                });
                matchers = matchers.concat(_validationMatchers);
            } else {
                throw new Error("validations needs to be an array of type ['rule'] or [{ ruleName: 'errorMessage' }]");
            }
        });
        return createValidate(matchers, value);
    };
};

/***/ }),

/***/ "./Components/shared/inputs/fieldInput.tsx":
/*!*************************************************!*\
  !*** ./Components/shared/inputs/fieldInput.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var FieldInput = function FieldInput(_a) {
    var input = _a.input,
        name = _a.name,
        meta = _a.meta,
        props = __rest(_a, ["input", "name", "meta"]);

    return _react2.default.createElement(_rebass.Input, (0, _assign2.default)({}, input, props, { name: name }));
};
exports.default = FieldInput;

/***/ }),

/***/ "./Components/shared/logErrors.tsx":
/*!*****************************************!*\
  !*** ./Components/shared/logErrors.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (error) {
    if (error !== undefined) {
        var raven = window.Raven;
        var errors = Array.isArray(error) ? error : [error];
        errors.forEach(function (error) {
            if (typeof raven !== "undefined") {
                raven.captureMessage(error.message, { stackTrace: error.stack });
            }
        });
    }
};

/***/ }),

/***/ "./Components/shared/setupErrorLogging.tsx":
/*!*************************************************!*\
  !*** ./Components/shared/setupErrorLogging.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var raven = window.Raven;
if (typeof raven !== "undefined" && "https://dedee895d5b84f1ba2b813c6438297bf@sentry.io/1251612") {
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

/***/ "./wwwroot/assets/backgroundBlue.svg":
/*!*******************************************!*\
  !*** ./wwwroot/assets/backgroundBlue.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none", viewBox: "0 0 1600 964.375" }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "linearGradient",
        { id: "a", gradientUnits: "userSpaceOnUse", x1: "83.537", x2: "1516.463", y2: "964.375" },
        _react2.default.createElement("stop", { offset: ".165", stopColor: "#2529b7" }),
        _react2.default.createElement("stop", { offset: ".808", stopColor: "#369bff" }),
        _react2.default.createElement("stop", { offset: ".835", stopColor: "#369bff" })
      )
    ),
    _react2.default.createElement("path", { d: "M0 929.736S354 1040 800 867c437.022-169.518 623.333-123.667 800-82.153C1601.978 821.28 1600-1 1600-1H-.001L0 929.736z", fill: "url(#a)", fillRule: "evenodd" })
  );
};

/***/ }),

/***/ "./wwwroot/assets/backgroundGrey.svg":
/*!*******************************************!*\
  !*** ./wwwroot/assets/backgroundGrey.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none", viewBox: "0 0 1600 718.75" }, props),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "linearGradient",
        { id: "a", gradientUnits: "userSpaceOnUse", x1: "266.019", x2: "1333.981", y2: "718.75" },
        _react2.default.createElement("stop", { offset: ".165", stopColor: "#2529b7" }),
        _react2.default.createElement("stop", { offset: ".835", stopColor: "#4656ff" })
      )
    ),
    _react2.default.createElement("path", { d: "M0 674.736s300.177 123.399 783.51-42.968C1207 486 1411 524 1600 609.847V0H-.001L0 674.736z", fill: "url(#a)", opacity: ".04", fillRule: "evenodd" })
  );
};

/***/ }),

/***/ "./wwwroot/assets/board.png":
/*!**********************************!*\
  !*** ./wwwroot/assets/board.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wwwroot/assets/board.png";

/***/ }),

/***/ "./wwwroot/assets/check.svg":
/*!**********************************!*\
  !*** ./wwwroot/assets/check.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({ width: "11", height: "8", viewBox: "0 0 11 8", xmlns: "http://www.w3.org/2000/svg" }, props),
    _react2.default.createElement(
      "title",
      null,
      "icons/check"
    ),
    _react2.default.createElement("path", { d: "M3.98 7.24L.16 3.42a.52.52 0 0 1 0-.75l.374-.373a.518.518 0 0 1 .748 0L4.355 5.37 9.565.16a.517.517 0 0 1 .747 0l.374.374a.516.516 0 0 1 0 .748L4.73 7.24a.52.52 0 0 1-.75 0z" })
  );
};

/***/ }),

/***/ "./wwwroot/assets/cross.svg":
/*!**********************************!*\
  !*** ./wwwroot/assets/cross.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16" }, props),
    _react2.default.createElement(
      "title",
      null,
      "cross"
    ),
    _react2.default.createElement("path", { d: "M13.957 3.457l-1.414-1.414L8 6.586 3.457 2.043 2.043 3.457 6.586 8l-4.543 4.543 1.414 1.414L8 9.414l4.543 4.543 1.414-1.414L9.414 8z" })
  );
};

/***/ }),

/***/ "./wwwroot/assets/email-green.svg":
/*!****************************************!*\
  !*** ./wwwroot/assets/email-green.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid", width: "20", height: "14", viewBox: "0 0 20 14" }, props),
    _react2.default.createElement("path", { d: "M10.11 7.914c-1.073 0-2.089-.558-3.073-1.27L.885 13.996.956 14h18.308l.044-.002-5.934-7.353c-1.188.842-2.175 1.269-3.264 1.269zm5.172-2.794c-.349.3-.678.576-.991.828l5.616 7.177c.06-.135.093-.284.093-.441V.748c0-.09-.012-.177-.033-.261-.746.684-1.181 1.418-1.918 2.101-1.245 1.154-2.321 2.15-2.767 2.532zm-9.506.542l-.408-.328C4.805 4.886 2.33 2.578.021.539A1.029 1.029 0 0 0 0 .748v11.936c0 .148.03.289.084.418l6.04-7.16-.348-.28zm.721-.896c1.22.982 2.48 1.998 3.613 1.998 1.259 0 2.478-.847 4.424-2.516.429-.368 1.497-1.358 2.735-2.504.721-.669 1.497-1.043 2.232-1.718A1.147 1.147 0 0 0 19.264 0H.956C.854 0 .757.014.664.04c2.182 1.927 4.882 3.966 5.421 4.395l.412.331z", fill: "#2ed0a0", fillRule: "evenodd" })
  );
};

/***/ }),

/***/ "./wwwroot/assets/gitHub.svg":
/*!***********************************!*\
  !*** ./wwwroot/assets/gitHub.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16" }, props),
    _react2.default.createElement(
      "title",
      null,
      "github"
    ),
    _react2.default.createElement("path", { d: "M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 0 1 8 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 0 0 8.001.196z" })
  );
};

/***/ }),

/***/ "./wwwroot/assets/pencil.svg":
/*!***********************************!*\
  !*** ./wwwroot/assets/pencil.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16" }, props),
    _react2.default.createElement(
      "title",
      null,
      "pencil"
    ),
    _react2.default.createElement("path", { d: "M11.445.055L2.5 9H4v1h1v1h1v1h1v1.495l8.945-8.939c.5-2-2.5-5-4.5-4.5zM6 13H5v-1H4v-1H3v-1h-.857L0 16l6-2.144z" })
  );
};

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi regenerator-runtime/runtime ./Components/app/appContainer.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! I:\Users\Martin\onboardor\onboardor\Components\app\appContainer.tsx */"./Components/app/appContainer.tsx");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9tZW1iZXIvX19nZW5lcmF0ZWRfXy9tZW1iZXJDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL21lbWJlci9tZW1iZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL21lbWJlci9tZW1iZXJDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vYWRkUGlwZWxpbmVNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vYWRkU3RlcE11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9lZGl0UGlwZWxpbmVNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vZWRpdFN0ZXBNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vcmVtb3ZlUGlwZWxpbmVNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vcmVtb3ZlU3RlcE11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9zdGVwQ29udGFpbmVyX3N0ZXAuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9hZGRQaXBlbGluZU11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9hZGRTdGVwTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2VkaXRQaXBlbGluZU11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9lZGl0U3RlcE11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9lbXB0eVBpcGVsaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9lbXB0eVBpcGVsaW5lQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9vbmJvYXJkaW5nUHJvY2Vzcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3Mvb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL3BpcGVsaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9waXBlbGluZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvcmVtb3ZlUGlwZWxpbmVNdXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvcmVtb3ZlU3RlcE11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9zdGVwLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9zdGVwQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vcmdhbml6YXRpb24vX19nZW5lcmF0ZWRfXy9vcmdhbml6YXRpb25Db250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb25Db250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvX19nZW5lcmF0ZWRfXy9vcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbnMudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3kudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zZWxlY3QvX19nZW5lcmF0ZWRfXy9zZWxlY3RPcmdhbml6YXRpb25Db250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2VsZWN0L19fZ2VuZXJhdGVkX18vc2V0T25ib2FyZGluZ01lbWJlcnNNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdE9yZ2FuaXphdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0T3JnYW5pemF0aW9uQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NlbGVjdC9zZWxlY3RUZWFtTWVtYmVycy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0VGVhbU1lbWJlcnNDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2VsZWN0L3NldE9uYm9hcmRpbmdNZW1iZXJzTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2VsZWN0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zZXR1cC9fX2dlbmVyYXRlZF9fL3NldHVwQ2FsbGJhY2tDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2V0dXAvX19nZW5lcmF0ZWRfXy9zZXR1cENvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zZXR1cC9zZXR1cC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zZXR1cC9zZXR1cENhbGxiYWNrQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NldHVwL3NldHVwQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYW5jaG9yQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vbGlua0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZm9ybS9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9mb3JtL19fZ2VuZXJhdGVkX18vc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2Zvcm0vc3Vic2NyaWJlTWFpbGluZ0xpc3QudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2Zvcm0vc3Vic2NyaWJlTWFpbGluZ0xpc3RDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2Zvcm0vc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbG9nRXJyb3JzLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9zZXR1cEVycm9yTG9nZ2luZy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvdXRpbGl0aWVzL3RoZW1lLnRzeCIsIndlYnBhY2s6Ly8vLi93d3dyb290L2Fzc2V0cy9iYWNrZ3JvdW5kQmx1ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9hc3NldHMvYmFja2dyb3VuZEdyZXkuc3ZnIiwid2VicGFjazovLy8uL3d3d3Jvb3QvYXNzZXRzL2JvYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi93d3dyb290L2Fzc2V0cy9jaGVjay5zdmciLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9hc3NldHMvY3Jvc3Muc3ZnIiwid2VicGFjazovLy8uL3d3d3Jvb3QvYXNzZXRzL2VtYWlsLWdyZWVuLnN2ZyIsIndlYnBhY2s6Ly8vLi93d3dyb290L2Fzc2V0cy9naXRIdWIuc3ZnIiwid2VicGFjazovLy8uL3d3d3Jvb3QvYXNzZXRzL3BlbmNpbC5zdmciXSwibmFtZXMiOlsiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwib2JqIiwia2V5cyIsInRhcmdldCIsImkiLCJpbmRleE9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX3JlZiIsInN0eWxlcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFXQTtBQUVBLElBQU0sV0FBVyxJQUFJLG9CQUFKLENBQWEscUJBQWIsQ0FBakI7QUFFQSxJQUFNLE1BQU0sU0FBTixHQUFNO0FBQUEsU0FDViw4QkFBQyxvQkFBRCxFQUFTLEVBQUMsT0FBTyxlQUFSLEVBQVQsRUFDRSw4QkFBQyxnQkFBRCxFQUFlLEVBQ2IsT0FBTyxlQURNLEVBQWYsRUFHRSw4QkFBQyxnQkFBRCxFQUFPLEVBQUMsY0FBYyxFQUFFLHNCQUFGLEVBQWYsRUFBMEIsVUFBVSxRQUFwQyxFQUFQLENBSEYsQ0FERixDQURVO0FBQUEsQ0FBWjtrQkFVZSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENmOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsbUJBQVMsTUFBVCxDQUFnQiw4QkFBQyxhQUFELEVBQUksSUFBSixDQUFoQixFQUF5QixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBT0EsSUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLFNBQUQsRUFBOEIsU0FBOUI7QUFBQSxXQUNqQixNQUFNLFVBQU4sRUFBa0I7QUFDaEIsY0FBTSx5QkFBZTtBQUNuQixtQkFBTyxVQUFVLElBREU7QUFFbkI7QUFGbUIsU0FBZixDQURVO0FBS2hCLHFCQUFhLGFBTEc7QUFNaEIsaUJBQVM7QUFDUCxzQkFBVSxrQkFESDtBQUVQLDRCQUFnQjtBQUZULFNBTk87QUFVaEIsZ0JBQVE7QUFWUSxLQUFsQixFQVdHLElBWEgsQ0FXUSxVQUFDLFFBQUQ7QUFBQSxlQUFjLFNBQVMsSUFBVCxFQUFkO0FBQUEsS0FYUixFQVlHLElBWkgsQ0FZUSxVQUFDLElBQUQsRUFBUztBQUNiO0FBQ0EsWUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZixtQkFBTyxrQkFBUSxNQUFSLENBQWUsS0FBSyxNQUFwQixDQUFQO0FBQ0Q7QUFFRCxlQUFPLGtCQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUDtBQUNELEtBbkJILENBRGlCO0FBQUEsQ0FBbkI7QUFzQkEsSUFBTSxVQUFVLHNCQUFRLE1BQVIsQ0FBZSxVQUFmLENBQWhCO0FBQ0EsSUFBTSxTQUFTLElBQUksMEJBQUosRUFBZjtBQUNBLElBQU0sUUFBUSxJQUFJLG1CQUFKLENBQVUsTUFBVixDQUFkO0FBQ0EsSUFBTSxjQUFjLElBQUkseUJBQUosQ0FBZ0I7QUFDbEMsb0JBRGtDO0FBRWxDO0FBRmtDLENBQWhCLENBQXBCO0FBS0EsaUNBQWMsV0FBZDtrQkFFZSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENmOztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7a0JBR2UsNEJBQ2IsOEJBQUMsWUFBRCxFQUFNLHdCQUFDLE1BQUssR0FBTixJQUFjLG1DQUFkLENBQU4sRUFDRSw4QkFBQyxZQUFELEVBQU0sMEJBQUssaUNBQUwsQ0FBTixDQURGLEVBRUUsOEJBQUMsZUFBRCxFQUFTLEVBQUMsTUFBSyxPQUFOLEVBQWMsSUFBSTtBQUFBLFlBQUcsUUFBSCxRQUFHLFFBQUg7QUFBQSxlQUEwQixTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBQyxDQUE1QixDQUExQjtBQUFBLEtBQWxCLEVBQVQsQ0FGRixFQUdFLDhCQUFDLFlBQUQsRUFBTSx3QkFBQyxNQUFLLFlBQU4sSUFBdUIsK0JBQXZCLENBQU4sRUFDRSw4QkFBQyxZQUFELEVBQU0sMEJBQUssbUNBQUwsQ0FBTixDQURGLEVBRUUsOEJBQUMsWUFBRCxFQUFNLHdCQUFDLE1BQUssa0JBQU4sSUFBNkIsa0NBQTdCLENBQU4sQ0FGRixFQUdFLDhCQUFDLFlBQUQsRUFBTSx3QkFBQyxNQUFLLGlDQUFOLElBQTRDLDRCQUE1QyxDQUFOLENBSEYsRUFJRSw4QkFBQyxZQUFELEVBQU0sd0JBQUMsTUFBSyxvQ0FBTixJQUErQyx1Q0FBL0MsQ0FBTixDQUpGLENBSEYsRUFTRSw4QkFBQyxZQUFELEVBQU0sd0JBQUMsTUFBSyxPQUFOLElBQWtCLDJCQUFsQixDQUFOLENBVEYsRUFVRSw4QkFBQyxZQUFELEVBQU0sd0JBQUMsTUFBSyxlQUFOLElBQTBCLG1DQUExQixDQUFOLENBVkYsRUFXRSw4QkFBQyxZQUFELEVBQU0sRUFBQyxNQUFLLFFBQU4sRUFBTixFQUNFLDhCQUFDLFlBQUQsRUFBTSwwQkFBSyx3Q0FBTCxDQUFOLENBREYsRUFFRSw4QkFBQyxZQUFELEVBQU0sd0JBQUMsTUFBSyxjQUFOLElBQXlCLHVDQUF6QixDQUFOLENBRkYsQ0FYRixFQWVFLDhCQUFDLFlBQUQsRUFBTSx3QkFBQyxNQUFLLGVBQU4sSUFBMEIsK0JBQTFCLENBQU4sQ0FmRixFQWdCRSw4QkFBQyxZQUFELEVBQU0sd0JBQUMsTUFBSyxvQkFBTixJQUErQix3Q0FBL0IsQ0FBTixDQWhCRixFQWlCRSw4QkFBQyxZQUFELEVBQU0sd0JBQUMsTUFBSyxlQUFOLElBQTBCLG1DQUExQixDQUFOLENBakJGLEVBa0JFLDhCQUFDLFlBQUQsRUFBTSx3QkFBQyxNQUFLLFNBQU4sSUFBb0IsNkJBQXBCLENBQU4sQ0FsQkYsQ0FEYSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pmLElBQU0sY0FBYyxTQUFkLFdBQWMsT0FBOEI7QUFBQSxRQUEzQixLQUEyQixRQUEzQixLQUEyQjtBQUFBLFFBQXBCLE1BQW9CLFFBQXBCLE1BQW9COztBQUNoRCxXQUFPLE9BQVAsQ0FBZTtBQUNiLDhCQUFvQixNQUFNLE1BRGI7QUFFYixlQUFPO0FBQ0wsbUJBQU8sTUFBTTtBQURSO0FBRk0sS0FBZjtBQU1ELENBUEQ7a0JBU2Usa0NBQXNCO0FBQ25DLFlBQVEseUJBQWE7QUFDbkIscUJBQWE7QUFETSxLQUFiO0FBRDJCLENBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJmOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU0sa0JBQWtCLGtDQUFzQjtBQUM1QyxpQkFBYSxDQUFDLHNCQUFELENBRCtCO0FBRTVDLGNBQVUsSUFBSSxzQkFBSjtBQUZrQyxDQUF0QixDQUF4QjtBQUtBLElBQU0sVUFBVSxJQUFJLGNBQUosQ0FBWSxxQkFBWixDQUFoQjtBQUNBLElBQU0sa0JBQWtCLGdDQUFvQixPQUFwQixDQUF4QjtBQUNBLElBQU0sbUJBQW9CLE9BQWUsTUFBZixDQUFzQixvQ0FBdEIsSUFBOEQsY0FBeEY7QUFFQSxJQUFNLGFBQWEsaUJBQ2pCLDRCQUFnQixvQkFBaEIsQ0FEaUIsRUFFakIsZUFGaUIsRUFHakIsZUFIaUIsQ0FBbkI7QUFNQSxJQUFNLFdBQVcsNEJBQWdCO0FBQy9CLDRCQUQrQjtBQUUvQjtBQUYrQixDQUFoQixDQUFqQjtBQUtBLElBQU0sUUFBUSx3QkFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLFVBQTFCLENBQWQ7QUFFQSxNQUFNLFFBQU4sQ0FBZSxlQUFhLElBQWIsRUFBZjtrQkFFZSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDZjs7OztBQUNBOzs7Ozs7QUFNQSxJQUFNLGtCQUFrQixnQ0FBTyxlQUFQLENBQWxCO0FBQUE7QUFBQSxtREFBTjtBQUtBLElBQU0sWUFBWSxTQUFaLFNBQVk7QUFBQSxNQUNoQixRQURnQixRQUNoQixRQURnQjtBQUFBLFNBR2hCLDJDQUNFLDhCQUFDLGVBQUQsRUFBZ0IsRUFBQyxPQUFNLE1BQVAsRUFBYyxHQUFHLEVBQWpCLEVBQWhCLENBREYsRUFFRyxRQUZILENBSGdCO0FBQUEsQ0FBbEI7a0JBU2UsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCUixJQUFNLG9DQUFjO0FBQ3pCLGVBQVc7QUFEYyxDQUFwQjtrQkFJUSxtQjs7Ozs7Ozs7Ozs7O0FDTmY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQiw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsbUJBQW1CLHFDQUFxQyxvQ0FBb0MsYUFBYSxHQUFHO0FBQ25LLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lBOzs7O0FBWUEsSUFBTSxTQUFTLFNBQVQsTUFBUztBQUFBLFFBQ1osSUFEWSxRQUNaLElBRFk7QUFBQSxRQUVaLFNBRlksUUFFWixTQUZZO0FBQUEsV0FJYiwyQ0FDRSw4QkFBQyxhQUFELEVBQU0sRUFBQyxLQUFLLFNBQU4sRUFBTixDQURGLEVBRUcsSUFGSCxFQUlFLDhEQUpGLENBSmE7QUFBQSxDQUFmO2tCQWNlLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZjs7QUFFQTs7Ozs7O0FBRUEsSUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLENBQU47QUFhQSxJQUFNLFlBQVksd0JBQ2hCLDRCQUFZLE1BQVosQ0FEZ0IsRUFFaEIsZ0JBRmdCLENBQWxCO0FBSU8sSUFBTSxvQ0FBYztBQUN6QixzQkFEeUI7QUFFekI7QUFGeUIsQ0FBcEI7a0JBS1EsZ0I7Ozs7Ozs7Ozs7OztBQzNCZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixnQ0FBZ0Msb0JBQW9CLG1FQUFtRSxLQUFLLEdBQUcsc0VBQXNFLG1EQUFtRCxnREFBZ0QsR0FBRywrREFBK0QsMkRBQTJELHdDQUF3QyxHQUFHLG1EQUFtRCwrQkFBK0I7QUFDdG5CLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLDRCQUE0QixnQkFBZ0Isc0RBQXNELEtBQUssR0FBRywrREFBK0QsMkRBQTJELHdDQUF3QyxHQUFHLG1EQUFtRCwrQkFBK0I7QUFDN2EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdk1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLGlDQUFpQyxvQkFBb0IsbUVBQW1FLEtBQUssR0FBRyxzRUFBc0UsbURBQW1ELGdEQUFnRCxHQUFHLCtEQUErRCwyREFBMkQsd0NBQXdDLEdBQUcsbURBQW1ELCtCQUErQjtBQUN6bkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZCQUE2QixnQkFBZ0Isc0RBQXNELEtBQUssR0FBRywrREFBK0QsMkRBQTJELHdDQUF3QyxHQUFHLG1EQUFtRCwrQkFBK0I7QUFDaGIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBQVo7QUFBcUIsR0FBQyxPQUFPRCxNQUFQO0FBQWdCOztrQkFHNU0sVUFBQ08sSUFBRCxFQUFVO0FBQUEsb0JBR3BCQSxJQUhvQixDQUV0QkMsTUFGc0I7QUFBQSxNQUV0QkEsTUFGc0IsK0JBRWIsRUFGYTtBQUFBLE1BSXBCQyxLQUpvQixHQUlaWix5QkFBeUJVLElBQXpCLEVBQStCLENBQUMsUUFBRCxDQUEvQixDQUpZOztBQU14QixTQUFPO0FBQUE7QUFBQSw2QkFBSyxPQUFNLDRCQUFYLEVBQXdDLE9BQU0sSUFBOUMsRUFBbUQsUUFBTyxJQUExRCxFQUErRCxTQUFRLFdBQXZFLElBQXVGRSxLQUF2RjtBQUE4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTlGO0FBQW1ILDRDQUFNLEdBQUUsK0dBQVI7QUFBbkgsR0FBUDtBQUNELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gXCJmb3VuZC1yZWxheVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlYmFzc1Byb3ZpZGVyIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgaW5qZWN0R2xvYmFsIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9yb3V0aW5nL3JvdXRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3NoYXJlZC91dGlsaXRpZXMvdGhlbWVcIjtcblxuLyogdHNsaW50OmRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb24gKi9cbmluamVjdEdsb2JhbGBcbiAgKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgYm9keSB7IG1hcmdpbjogMDsgbWluLWhlaWdodDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9XG4gICNhcHAgeyBoZWlnaHQ6IGluaGVyaXQ7ID4gZGl2IHsgaGVpZ2h0OiAxMDAlOyB9IH1cbiAgaHRtbCB7IGhlaWdodDogMTAwJTsgfVxuICBhIHsgY29sb3I6IGluaGVyaXQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICB1bCB7IGxpc3Qtc3R5bGU6IG5vbmU7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuICBsaSB7IGxpc3Qtc3R5bGU6IG5vbmUgfVxuICBidXR0b24geyBib3JkZXI6IDA7IHBhZGRpbmc6IDA7IGZvbnQ6IGluaGVyaXQ7IG91dGxpbmU6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjsgfVxuICBzdmcgeyBmaWxsOiAjNEE0QTRBOyB9XG5gO1xuLyogdHNsaW50OmVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbiAqL1xuXG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihlbnZpcm9ubWVudCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJlYmFzc1Byb3ZpZGVyXG4gICAgICB0aGVtZT17dGhlbWV9XG4gICAgPlxuICAgICAgPFJvdXRlciBtYXRjaENvbnRleHQ9e3sgc3RvcmUgfX0gcmVzb2x2ZXI9e3Jlc29sdmVyfSAvPlxuICAgIDwvUmViYXNzUHJvdmlkZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFwiLi4vc2hhcmVkL3NldHVwRXJyb3JMb2dnaW5nXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iLCJpbXBvcnQgeyBzZXRFbnZpcm9tZW50IH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcbmltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuXG5jb25zdCBmZXRjaFF1ZXJ5ID0gKG9wZXJhdGlvbjogeyB0ZXh0OiBzdHJpbmcgfSwgdmFyaWFibGVzOiBhbnkpID0+XG4gIGZldGNoKFwiL2dyYXBocWxcIiwge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVsYXkvaXNzdWVzLzE4MTZcbiAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbi5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgIH0pO1xuXG5jb25zdCBuZXR3b3JrID0gTmV0d29yay5jcmVhdGUoZmV0Y2hRdWVyeSk7XG5jb25zdCBzb3VyY2UgPSBuZXcgUmVjb3JkU291cmNlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShzb3VyY2UpO1xuY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICBuZXR3b3JrLFxuICBzdG9yZSxcbn0pO1xuXG5zZXRFbnZpcm9tZW50KGVudmlyb25tZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuaW1wb3J0IHsgbWFrZVJvdXRlQ29uZmlnLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZGFzaGJvYXJkUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vZGFzaGJvYXJkL2Rhc2hib2FyZENvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgbWVtYmVyUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vZGFzaGJvYXJkL21lbWJlci9tZW1iZXJDb250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIG9uYm9hcmRpbmdQcm9jZXNzUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL29uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBvcmdhbml6YXRpb25Sb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9kYXNoYm9hcmQvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbkNvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgb3JnYW5pemF0aW9uc1JvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2Rhc2hib2FyZC9vcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbnNDb250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGVycm9yUGFnZVJvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGltcHJpbnRSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9mb290ZXIvaW1wcmludENvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyB0ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBsYW5kaW5nUGFnZVJvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcmltYXJ5TGF5b3V0Um91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHNlbGVjdE9yZ2FuaXphdGlvblJvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3NlbGVjdC9zZWxlY3RPcmdhbml6YXRpb25Db250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHNlbGVjdFRlYW1NZW1iZXJzUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vc2VsZWN0L3NlbGVjdFRlYW1NZW1iZXJzQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBzZXR1cENhbGxiYWNrUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vc2V0dXAvc2V0dXBDYWxsYmFja0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgc2V0dXBSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9zZXR1cC9zZXR1cENvbnRhaW5lclwiO1xuaW1wb3J0IHsgSU1hdGNoIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCIgey4uLnByaW1hcnlMYXlvdXRSb3V0ZUNvbmZpZ30+XG4gICAgPFJvdXRlIHsuLi5sYW5kaW5nUGFnZVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSZWRpcmVjdCBmcm9tPVwiKC4qLylcIiB0bz17KHsgbG9jYXRpb24gfTogSU1hdGNoKSA9PiBsb2NhdGlvbi5wYXRobmFtZS5zbGljZSgwLCAtMSl9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgey4uLmRhc2hib2FyZFJvdXRlQ29uZmlnfT5cbiAgICAgIDxSb3V0ZSB7Li4ub3JnYW5pemF0aW9uc1JvdXRlQ29uZmlnfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJvcmdhbml6YXRpb24vOmlkXCIgey4uLm9yZ2FuaXphdGlvblJvdXRlQ29uZmlnfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJvcmdhbml6YXRpb24vOmlkL3RlYW1NZW1iZXIvOmlkXCIgey4uLm1lbWJlclJvdXRlQ29uZmlnfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJvcmdhbml6YXRpb24vOmlkL29uYm9hcmRpbmdQcm9jZXNzXCIgey4uLm9uYm9hcmRpbmdQcm9jZXNzUm91dGVDb25maWd9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgICA8Um91dGUgcGF0aD1cInNldHVwXCIgey4uLnNldHVwUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJzZXR1cENhbGxiYWNrXCIgey4uLnNldHVwQ2FsbGJhY2tSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInNlbGVjdFwiPlxuICAgICAgPFJvdXRlIHsuLi5zZWxlY3RPcmdhbml6YXRpb25Sb3V0ZUNvbmZpZ30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3RlYW1NZW1iZXJzXCIgey4uLnNlbGVjdFRlYW1NZW1iZXJzUm91dGVDb25maWd9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIsIGNyZWF0ZVJlbmRlciB9IGZyb20gXCJmb3VuZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZXJyb3I6IHtcbiAgICBzdGF0dXM6IG51bWJlclxuICAgIGRhdGE6IG51bWJlcixcbiAgfTtcbiAgcm91dGVyOiBhbnk7XG59XG5cbmNvbnN0IFJlbmRlckVycm9yID0gKHsgZXJyb3IsIHJvdXRlciB9OiBJUHJvcHMpID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdGVkUm91dGVyKHtcbiAgcmVuZGVyOiBjcmVhdGVSZW5kZXIoe1xuICAgIHJlbmRlckVycm9yOiBSZW5kZXJFcnJvcixcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IEFjdGlvbnMgYXMgRmFyY2VBY3Rpb25zLCBCcm93c2VyUHJvdG9jb2wsIGNyZWF0ZUhpc3RvcnlFbmhhbmNlcixcbiAgcXVlcnlNaWRkbGV3YXJlIH0gZnJvbSBcImZhcmNlXCI7XG5pbXBvcnQgeyBjcmVhdGVNYXRjaEVuaGFuY2VyLCBmb3VuZFJlZHVjZXIgYXMgZm91bmQsIE1hdGNoZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlQ29uZmlnXCI7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbiAgcHJvdG9jb2w6IG5ldyBCcm93c2VyUHJvdG9jb2woKSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyID0gbmV3IE1hdGNoZXIocm91dGVDb25maWcpO1xuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihtYXRjaGVyKTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAod2luZG93IGFzIGFueSkud2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvcm0sXG4gIGZvdW5kLFxufSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBtaWRkbGVXYXJlKTtcblxuc3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgRGFzaGJvYXJkSGVhZGVyID0gc3R5bGVkKEJveClgXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwICNkMmQyZDI7XG4gIGhlaWdodDogODBweDtcbmA7XG5cbmNvbnN0IERhc2hib2FyZCA9ICh7XG4gIGNoaWxkcmVuLFxufTogSVByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPERhc2hib2FyZEhlYWRlciB3aWR0aD1cIjEwMCVcIiBwPXsxMH0gLz5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IERhc2hib2FyZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggZWE2N2Q0ZDVhYjM1Nzc3MmViM2ZiNDFlMWE2NjM0MDVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBtZW1iZXJDb250YWluZXJRdWVyeVZhcmlhYmxlcyA9IHt8XG4gIGlkOiBzdHJpbmdcbnx9O1xuZXhwb3J0IHR5cGUgbWVtYmVyQ29udGFpbmVyUXVlcnlSZXNwb25zZSA9IHt8XG4gICtub2RlOiA/e3xcbiAgICArbmFtZT86IHN0cmluZyxcbiAgICArYXZhdGFyVXJsPzogc3RyaW5nLFxuICB8fVxufH07XG5leHBvcnQgdHlwZSBtZW1iZXJDb250YWluZXJRdWVyeSA9IHt8XG4gIHZhcmlhYmxlczogbWVtYmVyQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBtZW1iZXJDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBtZW1iZXJDb250YWluZXJRdWVyeShcbiAgJGlkOiBJRCFcbikge1xuICBub2RlKGlkOiAkaWQpIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgLi4uIG9uIE1lbWJlciB7XG4gICAgICBuYW1lXG4gICAgICBhdmF0YXJVcmxcbiAgICB9XG4gICAgaWRcbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgXCJ0eXBlXCI6IFwiSUQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpZFwiLFxuICAgIFwidHlwZVwiOiBcIklEIVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiSW5saW5lRnJhZ21lbnRcIixcbiAgXCJ0eXBlXCI6IFwiTWVtYmVyXCIsXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJhdmF0YXJVcmxcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9XG4gIF1cbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcIm1lbWJlckNvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgbWVtYmVyQ29udGFpbmVyUXVlcnkoXFxuICAkaWQ6IElEIVxcbikge1xcbiAgbm9kZShpZDogJGlkKSB7XFxuICAgIF9fdHlwZW5hbWVcXG4gICAgLi4uIG9uIE1lbWJlciB7XFxuICAgICAgbmFtZVxcbiAgICAgIGF2YXRhclVybFxcbiAgICB9XFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcIm1lbWJlckNvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibm9kZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBudWxsLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwibWVtYmVyQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJub2RlXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IG51bGwsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJfX3R5cGVuYW1lXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc0ZjhkOWMyNDc4NWQ1NTFiMDgwZWExYjQxOGQxNjVmNCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJyZWJhc3NcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElNZW1iZXIge1xuICBtZW1iZXI6IElNZW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbWJlciB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgYXZhdGFyVXJsOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1lbWJlciA9ICh7XG4gICBuYW1lLFxuICAgYXZhdGFyVXJsXG59OiBJUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SW1hZ2Ugc3JjPXthdmF0YXJVcmx9IC8+XG4gICAge25hbWV9XG5cbiAgICA8ZGl2PlxuICAgICAgTW9udGhseSBwcm9ncmVzc1xuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlcjtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5pbXBvcnQgTWVtYmVyIGZyb20gXCIuL21lbWJlclwiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IG1lbWJlckNvbnRhaW5lclF1ZXJ5KFxuICAgICRpZDogSUQhXG4gICkge1xuICAgIG5vZGUoaWQ6ICRpZCkge1xuICAgICAgLi4ub24gTWVtYmVyIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBhdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IENvbXBvbmVudCA9IGNvbXBvc2UoXG4gIGZsYXR0ZW5Qcm9wKFwibm9kZVwiKSxcbikoTWVtYmVyKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQsXG4gIHF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCA0ZDdlN2RkZTY5YWEyMDFmYTcwMjRiNWU1OTljNTc0NVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0ID0ge1xuICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIGFkZFBpcGVsaW5lTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXRcbnx9O1xuZXhwb3J0IHR5cGUgYWRkUGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK2FkZFBpcGVsaW5lOiA/e3xcbiAgICArb3JnYW5pemF0aW9uOiB7fFxuICAgICAgKyRmcmFnbWVudFJlZnM6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWZcbiAgICB8fVxuICB8fVxufH07XG5leHBvcnQgdHlwZSBhZGRQaXBlbGluZU11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiBhZGRQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogYWRkUGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBhZGRQaXBlbGluZU11dGF0aW9uKFxuICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxuKSB7XG4gIGFkZFBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcbiAgICBvcmdhbml6YXRpb24ge1xuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgb3JnYW5pemF0aW9uSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICBpZFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gIH1cbn1cblxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgaWRcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nU3RlcHMge1xuICAgIGlkXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXG4gIH1cbn1cblxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcbiAgb25ib2FyZGluZ1N0ZXBJZFxuICBuYW1lXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZU11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gYWRkUGlwZWxpbmVNdXRhdGlvbihcXG4gICRpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXFxuKSB7XFxuICBhZGRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XFxuICAgIG9yZ2FuaXphdGlvbiB7XFxuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXFxuICAgICAgaWRcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcXG4gIG9yZ2FuaXphdGlvbklkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcXG4gICAgaWRcXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcXG4gIGlkXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1N0ZXBzIHtcXG4gICAgaWRcXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XFxuICBvbmJvYXJkaW5nU3RlcElkXFxuICBuYW1lXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdQaXBlbGluZVBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZU11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBZGRPbmJvYXJkaW5nUGlwZWxpbmVQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uSWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZXNcIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZUlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1N0ZXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdjJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICcyMGI2N2U2OGMzOTkyMGU4MTc2NjMyZTk5MTQzZmUzNSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDZhYTAwOWI0NTk0OGNhODI3MTQyMTY1NWIwODdjZjBhXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBBZGRPbmJvYXJkaW5nU3RlcElucHV0ID0ge1xuICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgcGlwZWxpbmVJZDogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uPzogP3N0cmluZyxcbn07XG5leHBvcnQgdHlwZSBhZGRTdGVwTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogQWRkT25ib2FyZGluZ1N0ZXBJbnB1dFxufH07XG5leHBvcnQgdHlwZSBhZGRTdGVwTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICthZGRTdGVwOiA/e3xcbiAgICArcGlwZWxpbmU6IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmXG4gICAgfH1cbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgYWRkU3RlcE11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiBhZGRTdGVwTXV0YXRpb25WYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBhZGRTdGVwTXV0YXRpb25SZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gYWRkU3RlcE11dGF0aW9uKFxuICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdTdGVwSW5wdXQhXG4pIHtcbiAgYWRkU3RlcChpbnB1dDogJGlucHV0KSB7XG4gICAgcGlwZWxpbmUge1xuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XG4gIGlkXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICBpZFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxuICB9XG59XG5cbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XG4gIG9uYm9hcmRpbmdTdGVwSWRcbiAgbmFtZVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcImFkZFN0ZXBNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIGFkZFN0ZXBNdXRhdGlvbihcXG4gICRpbnB1dDogQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCFcXG4pIHtcXG4gIGFkZFN0ZXAoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBwaXBlbGluZSB7XFxuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xcbiAgb25ib2FyZGluZ1N0ZXBJZFxcbiAgbmFtZVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJhZGRTdGVwTXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhZGRTdGVwXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQWRkT25ib2FyZGluZ1N0ZXBQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImFkZFN0ZXBNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImFkZFN0ZXBcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBZGRPbmJvYXJkaW5nU3RlcFBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdlNWU5Y2ZmMWFhNjFkOTY1ZTNmYzAyYTA0NzUzOWJhOCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDczZDg2NjE1ZjUxZWExMzg5ODAyNWEyNGYxNWYyNjUzXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgRWRpdE9uYm9hcmRpbmdQaXBlbGluZUlucHV0ID0ge1xuICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgaWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIGVkaXRQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzID0ge3xcbiAgaW5wdXQ6IEVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dFxufH07XG5leHBvcnQgdHlwZSBlZGl0UGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK2VkaXRQaXBlbGluZTogP3t8XG4gICAgK29yZ2FuaXphdGlvbjoge3xcbiAgICAgICskZnJhZ21lbnRSZWZzOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmXG4gICAgfH1cbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgZWRpdFBpcGVsaW5lTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IGVkaXRQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogZWRpdFBpcGVsaW5lTXV0YXRpb25SZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gZWRpdFBpcGVsaW5lTXV0YXRpb24oXG4gICRpbnB1dDogRWRpdE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxuKSB7XG4gIGVkaXRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XG4gICAgb3JnYW5pemF0aW9uIHtcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cblxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XG4gIG9yZ2FuaXphdGlvbklkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XG4gICAgaWRcbiAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICB9XG59XG5cbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XG4gIGlkXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICBpZFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxuICB9XG59XG5cbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XG4gIG9uYm9hcmRpbmdTdGVwSWRcbiAgbmFtZVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiRWRpdE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJFZGl0T25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJlZGl0UGlwZWxpbmVNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIGVkaXRQaXBlbGluZU11dGF0aW9uKFxcbiAgJGlucHV0OiBFZGl0T25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXFxuKSB7XFxuICBlZGl0UGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBvcmdhbml6YXRpb24ge1xcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XFxuICBvcmdhbml6YXRpb25JZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XFxuICAgIGlkXFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xcbiAgb25ib2FyZGluZ1N0ZXBJZFxcbiAgbmFtZVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJlZGl0UGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImVkaXRQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkVkaXRPbmJvYXJkaW5nUGlwZWxpbmVQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZWRpdFBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJlZGl0UGlwZWxpbmVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJFZGl0T25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHYyXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnY2ZjYmQ0YjA1YjkyYWEzMzlkZjM0NTc3NDVlYWRhZjQnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCA0ZjkyMTJhMzRlZmFhYTQwMWYwOTI5ZmU3NDIyMWMwNVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgRWRpdE9uYm9hcmRpbmdTdGVwSW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBpZDogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG59O1xuZXhwb3J0IHR5cGUgZWRpdFN0ZXBNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiBFZGl0T25ib2FyZGluZ1N0ZXBJbnB1dFxufH07XG5leHBvcnQgdHlwZSBlZGl0U3RlcE11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArZWRpdFN0ZXA6ID97fFxuICAgICtwaXBlbGluZToge3xcbiAgICAgICskZnJhZ21lbnRSZWZzOiBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWZcbiAgICB8fVxuICB8fVxufH07XG5leHBvcnQgdHlwZSBlZGl0U3RlcE11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiBlZGl0U3RlcE11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogZWRpdFN0ZXBNdXRhdGlvblJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBlZGl0U3RlcE11dGF0aW9uKFxuICAkaW5wdXQ6IEVkaXRPbmJvYXJkaW5nU3RlcElucHV0IVxuKSB7XG4gIGVkaXRTdGVwKGlucHV0OiAkaW5wdXQpIHtcbiAgICBwaXBlbGluZSB7XG4gICAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cblxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgaWRcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nU3RlcHMge1xuICAgIGlkXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXG4gIH1cbn1cblxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcbiAgb25ib2FyZGluZ1N0ZXBJZFxuICBuYW1lXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJFZGl0T25ib2FyZGluZ1N0ZXBJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiRWRpdE9uYm9hcmRpbmdTdGVwSW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJlZGl0U3RlcE11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gZWRpdFN0ZXBNdXRhdGlvbihcXG4gICRpbnB1dDogRWRpdE9uYm9hcmRpbmdTdGVwSW5wdXQhXFxuKSB7XFxuICBlZGl0U3RlcChpbnB1dDogJGlucHV0KSB7XFxuICAgIHBpcGVsaW5lIHtcXG4gICAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcXG4gIGlkXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1N0ZXBzIHtcXG4gICAgaWRcXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XFxuICBvbmJvYXJkaW5nU3RlcElkXFxuICBuYW1lXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImVkaXRTdGVwTXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJlZGl0U3RlcFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkVkaXRPbmJvYXJkaW5nU3RlcFBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZWRpdFN0ZXBNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImVkaXRTdGVwXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRWRpdE9uYm9hcmRpbmdTdGVwUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZUlkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2M1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2M3NzBhOGZjMjY0ZTlhMzllNjQzNzBjZGNlY2I4ZmQ3Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMzE1NDY4MDQyMzgyM2M0NWFhMzdlNWRmYWFlOGYxYzFcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3xcbiAgaWQ6IHN0cmluZ1xufH07XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArbm9kZTogP3t8XG4gICAgKyRmcmFnbWVudFJlZnM6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWZcbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeSA9IHt8XG4gIHZhcmlhYmxlczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeShcbiAgJGlkOiBJRCFcbikge1xuICBub2RlKGlkOiAkaWQpIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgLi4uIG9uIE9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICB9XG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgb3JnYW5pemF0aW9uSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICBpZFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gIH1cbn1cblxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgaWRcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nU3RlcHMge1xuICAgIGlkXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXG4gIH1cbn1cblxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcbiAgb25ib2FyZGluZ1N0ZXBJZFxuICBuYW1lXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICBcInR5cGVcIjogXCJJRCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlkXCIsXG4gICAgXCJ0eXBlXCI6IFwiSUQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeShcXG4gICRpZDogSUQhXFxuKSB7XFxuICBub2RlKGlkOiAkaWQpIHtcXG4gICAgX190eXBlbmFtZVxcbiAgICAuLi4gb24gT3JnYW5pemF0aW9uIHtcXG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cXG4gICAgfVxcbiAgICBpZFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcXG4gIG9yZ2FuaXphdGlvbklkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcXG4gICAgaWRcXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcXG4gIGlkXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1N0ZXBzIHtcXG4gICAgaWRcXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XFxuICBvbmJvYXJkaW5nU3RlcElkXFxuICBuYW1lXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJub2RlXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IG51bGwsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIklubGluZUZyYWdtZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibm9kZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBudWxsLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiX190eXBlbmFtZVwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdjIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiSW5saW5lRnJhZ21lbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHYzXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdkOGQ5ZTE0ODk0Y2E1MjhmMDEyZDgyODY3ZDg5YTM2YSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlRnJhZ21lbnQgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmID0gYW55O1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiA9IHt8XG4gICtvcmdhbml6YXRpb25JZDogbnVtYmVyLFxuICArbmFtZTogc3RyaW5nLFxuICArb25ib2FyZGluZ1BpcGVsaW5lczogJFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2lkOiBzdHJpbmcsXG4gICAgKyRmcmFnbWVudFJlZnM6IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZixcbiAgfH0+LFxuICArJHJlZlR5cGU6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblwiLFxuICBcInR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZXNcIixcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZjBjMjgwZGRhNDY3ODc2MWVjYmQ4YjkwODRhMjNlNTEnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHN0ZXBDb250YWluZXJfc3RlcCRyZWYgPSBhbnk7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZjogRnJhZ21lbnRSZWZlcmVuY2U7XG5leHBvcnQgdHlwZSBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSA9IHt8XG4gICtpZDogc3RyaW5nLFxuICArb25ib2FyZGluZ1BpcGVsaW5lSWQ6IG51bWJlcixcbiAgK25hbWU6IHN0cmluZyxcbiAgK29uYm9hcmRpbmdTdGVwczogJFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2lkOiBzdHJpbmcsXG4gICAgKyRmcmFnbWVudFJlZnM6IHN0ZXBDb250YWluZXJfc3RlcCRyZWYsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVwiLFxuICBcInR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgdjAsXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZUlkXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwc1wiLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1N0ZXBcIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB2MCxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwic3RlcENvbnRhaW5lcl9zdGVwXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzI2MWZiMTIyZWEzOTZlZTBiZDg0NTg2NTYwMGY2NzkyJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMjZhMGYzMzM2YWRiOTQxOTM2NzUyNTVhZTczYzNlM2JcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCA9IHtcbiAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gIGlkOiBudW1iZXIsXG59O1xuZXhwb3J0IHR5cGUgcmVtb3ZlUGlwZWxpbmVNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiBSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dFxufH07XG5leHBvcnQgdHlwZSByZW1vdmVQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArcmVtb3ZlUGlwZWxpbmU6ID97fFxuICAgICtvcmdhbml6YXRpb246IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZlxuICAgIHx9XG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIHJlbW92ZVBpcGVsaW5lTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IHJlbW92ZVBpcGVsaW5lTXV0YXRpb25WYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiByZW1vdmVQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIHJlbW92ZVBpcGVsaW5lTXV0YXRpb24oXG4gICRpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4pIHtcbiAgcmVtb3ZlUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICBvcmdhbml6YXRpb25JZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgIGlkXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgfVxufVxuXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xuICBpZFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgaWRcbiAgICAuLi5zdGVwQ29udGFpbmVyX3N0ZXBcbiAgfVxufVxuXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xuICBvbmJvYXJkaW5nU3RlcElkXG4gIG5hbWVcbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcInJlbW92ZVBpcGVsaW5lTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiByZW1vdmVQaXBlbGluZU11dGF0aW9uKFxcbiAgJGlucHV0OiBSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcXG4pIHtcXG4gIHJlbW92ZVBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcXG4gICAgb3JnYW5pemF0aW9uIHtcXG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xcbiAgb3JnYW5pemF0aW9uSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xcbiAgICBpZFxcbiAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xcbiAgaWRcXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nU3RlcHMge1xcbiAgICBpZFxcbiAgICAuLi5zdGVwQ29udGFpbmVyX3N0ZXBcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcXG4gIG9uYm9hcmRpbmdTdGVwSWRcXG4gIG5hbWVcXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicmVtb3ZlUGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInJlbW92ZVBpcGVsaW5lXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInJlbW92ZVBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJyZW1vdmVQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZVBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcElkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB2MlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2M1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzVjZTM3NDJkYWQ5Y2EwMmJiMDg2MGViOTZkOTllMDAzJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMjg5Nzg1YjU3YjljMTk4NWE1NjhmNDAxMmY4Y2MyYjhcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIFJlbW92ZU9uYm9hcmRpbmdTdGVwSW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBpZDogbnVtYmVyLFxufTtcbmV4cG9ydCB0eXBlIHJlbW92ZVN0ZXBNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiBSZW1vdmVPbmJvYXJkaW5nU3RlcElucHV0XG58fTtcbmV4cG9ydCB0eXBlIHJlbW92ZVN0ZXBNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK3JlbW92ZVN0ZXA6ID97fFxuICAgICtwaXBlbGluZToge3xcbiAgICAgICskZnJhZ21lbnRSZWZzOiBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWZcbiAgICB8fVxuICB8fVxufH07XG5leHBvcnQgdHlwZSByZW1vdmVTdGVwTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IHJlbW92ZVN0ZXBNdXRhdGlvblZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IHJlbW92ZVN0ZXBNdXRhdGlvblJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiByZW1vdmVTdGVwTXV0YXRpb24oXG4gICRpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1N0ZXBJbnB1dCFcbikge1xuICByZW1vdmVTdGVwKGlucHV0OiAkaW5wdXQpIHtcbiAgICBwaXBlbGluZSB7XG4gICAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cblxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgaWRcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nU3RlcHMge1xuICAgIGlkXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXG4gIH1cbn1cblxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcbiAgb25ib2FyZGluZ1N0ZXBJZFxuICBuYW1lXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJSZW1vdmVPbmJvYXJkaW5nU3RlcElucHV0IVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJSZW1vdmVPbmJvYXJkaW5nU3RlcElucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwicmVtb3ZlU3RlcE11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gcmVtb3ZlU3RlcE11dGF0aW9uKFxcbiAgJGlucHV0OiBSZW1vdmVPbmJvYXJkaW5nU3RlcElucHV0IVxcbikge1xcbiAgcmVtb3ZlU3RlcChpbnB1dDogJGlucHV0KSB7XFxuICAgIHBpcGVsaW5lIHtcXG4gICAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcXG4gIGlkXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1N0ZXBzIHtcXG4gICAgaWRcXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XFxuICBvbmJvYXJkaW5nU3RlcElkXFxuICBuYW1lXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInJlbW92ZVN0ZXBNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInJlbW92ZVN0ZXBcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJSZW1vdmVPbmJvYXJkaW5nU3RlcFBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwicmVtb3ZlU3RlcE11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicmVtb3ZlU3RlcFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlJlbW92ZU9uYm9hcmRpbmdTdGVwUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZUlkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2M1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzlhNThhYTY0YjYxZTI0MDNkYzRjYmJmZjRiZjI5Njc5Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBzdGVwQ29udGFpbmVyX3N0ZXAkcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIHN0ZXBDb250YWluZXJfc3RlcCA9IHt8XG4gICtvbmJvYXJkaW5nU3RlcElkOiBudW1iZXIsXG4gICtuYW1lOiBzdHJpbmcsXG4gICskcmVmVHlwZTogc3RlcENvbnRhaW5lcl9zdGVwJHJlZixcbnx9O1xuKi9cblxuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlRnJhZ21lbnQqLyA9IHtcbiAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgXCJuYW1lXCI6IFwic3RlcENvbnRhaW5lcl9zdGVwXCIsXG4gIFwidHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcElkXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH1cbiAgXVxufTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnNGYyNDdiODQ4ZTFhMzIxNTA3YmJjNTRlZDQ0OTA1NjYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY3JlYXRlTXV0YXRpb24gfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG4gIG11dGF0aW9uIGFkZFBpcGVsaW5lTXV0YXRpb24oXG4gICAgJGlucHV0OiBBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcbiAgKSB7XG4gICAgYWRkUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgb3JnYW5pemF0aW9uIHtcbiAgICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdGlvbklucHV0IHtcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBvcmdhbml6YXRpb25JZCwgbmFtZSB9OiBJTXV0YXRpb25JbnB1dCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIG9yZ2FuaXphdGlvbklkLFxuICAgICAgbmFtZSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY3JlYXRlTXV0YXRpb24gfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG4gIG11dGF0aW9uIGFkZFN0ZXBNdXRhdGlvbihcbiAgICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdTdGVwSW5wdXQhXG4gICkge1xuICAgIGFkZFN0ZXAoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgcGlwZWxpbmUge1xuICAgICAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIElNdXRhdGlvbklucHV0IHtcbiAgcGlwZWxpbmVJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBwaXBlbGluZUlkLCBuYW1lLCBkZXNjcmlwdGlvbiB9OiBJTXV0YXRpb25JbnB1dCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIHBpcGVsaW5lSWQsXG4gICAgICBuYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBlZGl0UGlwZWxpbmVNdXRhdGlvbihcbiAgICAkaW5wdXQ6IEVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcbiAgKSB7XG4gICAgZWRpdFBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgaWQsIG5hbWUgfTogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBlZGl0U3RlcE11dGF0aW9uKFxuICAgICRpbnB1dDogRWRpdE9uYm9hcmRpbmdTdGVwSW5wdXQhXG4gICkge1xuICAgIGVkaXRTdGVwKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHBpcGVsaW5lIHtcbiAgICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0aW9uSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlkLCBuYW1lIH06IElNdXRhdGlvbklucHV0KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zaGFyZWQvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IEZpZWxkSW5wdXQgZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dFwiO1xuaW1wb3J0IHsgRmllbGQsIEluamVjdGVkRm9ybVByb3BzIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCB7IFBpcGVsaW5lQ29sdW1uIH0gZnJvbSBcIi4vcGlwZWxpbmVcIjtcbmltcG9ydCBjcmVhdGVGaWVsZFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9jcmVhdGVGaWVsZFZhbGlkYXRvclwiO1xuXG5jb25zdCBhZGRQaXBlbGluZVZhbGlkYXRvciA9IGNyZWF0ZUZpZWxkVmFsaWRhdG9yKFtcInJlcXVpcmVkXCJdKTtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEluamVjdGVkRm9ybVByb3BzIHtcbiAgYWRkUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICBpc0FkZGluZ1BpcGVsaW5lOiBib29sZWFuO1xufVxuXG5jb25zdCBFbXB0eVBpcGVsaW5lID0gKHtcbiAgdG9nZ2xlUGlwZWxpbmUsXG4gIGlzQWRkaW5nUGlwZWxpbmUsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgYWRkUGlwZWxpbmUsXG59OiBJUHJvcHMpID0+IChcbiAgPFBpcGVsaW5lQ29sdW1uIHB4PXswfT5cbiAgICB7aXNBZGRpbmdQaXBlbGluZSA/IChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWRkUGlwZWxpbmUpfSBhY3Rpb249XCJcIj5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpcGVsaW5lIG5hbWVcIlxuICAgICAgICAgIHZhbGlkYXRlPXthZGRQaXBlbGluZVZhbGlkYXRvcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBtdD17MTB9PlxuICAgICAgICAgIDxCdXR0b24gbXI9ezEwfT5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVQaXBlbGluZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgICAgKSA6IChcbiAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlUGlwZWxpbmV9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5BZGQgYSBwaXBlbGluZS48L0J1dHRvbj5cbiAgICApfVxuICA8L1BpcGVsaW5lQ29sdW1uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRW1wdHlQaXBlbGluZTtcbiIsImltcG9ydCBFbXB0eVBpcGVsaW5lIGZyb20gXCIuL2VtcHR5UGlwZWxpbmVcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZUhhbmRsZXJzLCB3aXRoSGFuZGxlcnMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IGFkZFBpcGVsaW5lTXV0YXRpb24gZnJvbSBcIi4vYWRkUGlwZWxpbmVNdXRhdGlvblwiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpc0FkZGluZ1BpcGVsaW5lOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJQWRkUGlwZWxpbmVJbnB1dCB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIGFkZFBpcGVsaW5lOiAoeyBvcmdhbml6YXRpb25JZCwgdG9nZ2xlUGlwZWxpbmUgfTogSVByb3BzKSA9PiAoaW5wdXQ6IElBZGRQaXBlbGluZUlucHV0KSA9PiB7XG4gICAgYWRkUGlwZWxpbmVNdXRhdGlvbih7IG9yZ2FuaXphdGlvbklkLCAuLi5pbnB1dCB9KSxcbiAgICB0b2dnbGVQaXBlbGluZSgpO1xuICB9LFxufTtcblxuY29uc3Qgc3RhdGVIYW5kbGVycyA9IHtcbiAgdG9nZ2xlUGlwZWxpbmU6ICh7IGlzQWRkaW5nUGlwZWxpbmUgfTogSVN0YXRlKSA9PiAoKSA9PiAoe1xuICAgIGlzQWRkaW5nUGlwZWxpbmU6ICFpc0FkZGluZ1BpcGVsaW5lLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKHsgaXNBZGRpbmdQaXBlbGluZTogZmFsc2UgfSwgc3RhdGVIYW5kbGVycyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogXCJhZGRQaXBlbGluZVwiLFxuICB9KSxcbikoRW1wdHlQaXBlbGluZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFRleHQsIFJvdywgQ29sdW1uLCBCb3gsIEJ1dHRvblRyYW5zcGFyZW50LCBNb2RhbCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IElPcmdhbml6YXRpb24gfSBmcm9tIFwiLi4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NoYXJlZC9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgRmllbGRJbnB1dCBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9maWVsZElucHV0XCI7XG5pbXBvcnQgeyBGaWVsZCwgSW5qZWN0ZWRGb3JtUHJvcHMgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL2Nyb3NzLnN2Z1wiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi4vLi4vLi4vd3d3cm9vdC9hc3NldHMvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJncmlkLXN0eWxlZFwiO1xuaW1wb3J0IHsgUG9ydGFsV2l0aFN0YXRlIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IEVtcHR5UGlwZWxpbmUgZnJvbSBcIi4vZW1wdHlQaXBlbGluZUNvbnRhaW5lclwiO1xuaW1wb3J0IFBpcGVsaW5lIGZyb20gXCIuL3BpcGVsaW5lQ29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJbmplY3RlZEZvcm1Qcm9wcyB7XG4gIG9yZ2FuaXphdGlvbjogSU9yZ2FuaXphdGlvbjtcbiAgYWRkUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHJlbW92ZVBpcGVsaW5lOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgZWRpdFBpcGVsaW5lOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIGlzQWRkaW5nUGlwZWxpbmU6IGJvb2xlYW47XG4gIHJlbW92aW5nTmFtZUNvbmZpcm1WYWx1ZTogc3RyaW5nO1xufVxuXG5jb25zdCBQaXBlbGluZVJvdyA9IHN0eWxlZChSb3cpYFxuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBoZWlnaHQ6IDcwMHB4O1xuYDtcblxuY29uc3QgT25ib2FyZGluZ1Byb2Nlc3MgPSAoe1xuICBvcmdhbml6YXRpb24sXG59OiBJUHJvcHMpID0+IChcbiAgPENvbnRhaW5lciBtYXhXaWR0aD1cIjEwMCVcIj5cbiAgICA8VGV4dCBtdD17MjB9IG1iPXs0MH0gZm9udFNpemU9ezIwfT5cbiAgICAgIDxUZXh0IGlzPVwic3BhblwiIGRpc3BsYXk9XCJpbmxpbmVcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICB7b3JnYW5pemF0aW9uLm5hbWV9XG4gICAgICA8L1RleHQ+IG9uLWJvYXJkaW5nIHByb2Nlc3NcbiAgICA8L1RleHQ+XG4gICAgPFBpcGVsaW5lUm93PlxuICAgICAge29yZ2FuaXphdGlvbi5vbmJvYXJkaW5nUGlwZWxpbmVzLm1hcCgocGlwZWxpbmUsIGkpID0+XG4gICAgICAgIDxQaXBlbGluZVxuICAgICAgICAgIGtleT17cGlwZWxpbmUuaWR9XG4gICAgICAgICAgZm9ybT17YHBpcGVsaW5lXyR7aX1gfVxuICAgICAgICAgIHBpcGVsaW5lPXtwaXBlbGluZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8RW1wdHlQaXBlbGluZSBvcmdhbml6YXRpb25JZD17b3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbklkfSAvPlxuICAgIDwvUGlwZWxpbmVSb3c+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT25ib2FyZGluZ1Byb2Nlc3M7XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjb21wb3NlLCByZW5hbWVQcm9wIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IE9uYm9hcmRpbmdQcm9jZXNzIGZyb20gXCIuL29uYm9hcmRpbmdQcm9jZXNzXCI7XG5pbXBvcnQgeyBJT3JnYW5pemF0aW9uIH0gZnJvbSBcIi4uL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb25cIjtcbmltcG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5KFxuICAgICRpZDogSUQhXG4gICkge1xuICAgIG5vZGUoXG4gICAgICBpZDogJGlkXG4gICAgKSB7XG4gICAgICAuLi5vbiBPcmdhbml6YXRpb24ge1xuICAgICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICAgIG9yZ2FuaXphdGlvbklkXG4gICAgbmFtZVxuICAgIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgICAgaWRcbiAgICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb3JnYW5pemF0aW9uOiBJT3JnYW5pemF0aW9uO1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBjb21wb3NlKFxuICByZW5hbWVQcm9wKFwibm9kZVwiLCBcIm9yZ2FuaXphdGlvblwiKSxcbiAgZnJhZ21lbnQoZnJhZ21lbnRzKSxcbikoT25ib2FyZGluZ1Byb2Nlc3MpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudCxcbiAgcXVlcnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0LCBDb2x1bW4sIEJveCwgQnV0dG9uVHJhbnNwYXJlbnQsIE1vZGFsIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vc2hhcmVkL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCBGaWVsZElucHV0IGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXRcIjtcbmltcG9ydCB7IEZpZWxkLCBJbmplY3RlZEZvcm1Qcm9wcyB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL2Nyb3NzLnN2Z1wiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi4vLi4vLi4vd3d3cm9vdC9hc3NldHMvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJncmlkLXN0eWxlZFwiO1xuaW1wb3J0IHsgUG9ydGFsV2l0aFN0YXRlIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yXCI7XG5pbXBvcnQgU3RlcCBmcm9tIFwiLi9zdGVwQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBJU3RlcCB9IGZyb20gXCIuL3N0ZXBcIjtcblxuZXhwb3J0IGNvbnN0IFBpcGVsaW5lQ29sdW1uID0gc3R5bGVkKENvbHVtbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1heC13aWR0aDogMjYycHg7XG5gO1xuXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvblRyYW5zcGFyZW50KWBcbiAgcGFkZGluZzogNXB4O1xuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJUGlwbGluZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgb25ib2FyZGluZ1N0ZXBzOiBJU3RlcFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElFZGl0UGlwZWxpbmVJbnB1dCB7XG4gIHBpcGVsaW5lTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBZGRPbmJvYXJkaW5nU3RlcElucHV0IHtcbiAgb25ib2FyZGluZ1N0ZXBOYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG50eXBlIEZvcm1EYXRhID0gSUVkaXRQaXBlbGluZUlucHV0IHwgSUFkZE9uYm9hcmRpbmdTdGVwSW5wdXQ7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJbmplY3RlZEZvcm1Qcm9wczxGb3JtRGF0YT4ge1xuICBvcmdhbml6YXRpb246IElPcmdhbml6YXRpb247XG4gIGFkZFBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICByZW1vdmVQaXBlbGluZTogKCkgPT4gdm9pZDtcbiAgZWRpdFBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVQaXBlbGluZTogKCkgPT4gdm9pZDtcbiAgaXNFZGl0aW5nUGlwZWxpbmU6IGJvb2xlYW47XG4gIHJlbW92aW5nTmFtZUNvbmZpcm1WYWx1ZTogc3RyaW5nO1xuICBvbmJvYXJkaW5nUGlwZWxpbmVJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9uYm9hcmRpbmdTdGVwczogSVN0ZXBbXTtcbiAgYWRkU3RlcDogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlU3RlcDogKCkgPT4gdm9pZDtcbiAgaXNBZGRpbmdTdGVwOiBib29sZWFuO1xufVxuXG5jb25zdCBlZGl0UGlwZWxpbmVWYWxpZGF0b3IgPSBjcmVhdGVGaWVsZFZhbGlkYXRvcihbXCJyZXF1aXJlZFwiXSk7XG5jb25zdCBhZGRTdGVwVmFsaWRhdG9yID0gY3JlYXRlRmllbGRWYWxpZGF0b3IoW1wicmVxdWlyZWRcIl0pO1xuXG5jb25zdCBQaXBlbGluZSA9ICh7XG4gIHRvZ2dsZVBpcGVsaW5lLFxuICBpc0VkaXRpbmdQaXBlbGluZSxcbiAgaGFuZGxlU3VibWl0LFxuICBlZGl0UGlwZWxpbmUsXG4gIHJlbW92ZVBpcGVsaW5lLFxuICByZW1vdmluZ05hbWVDb25maXJtVmFsdWUsXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkLFxuICBuYW1lLFxuICBhZGRTdGVwLFxuICBpc0FkZGluZ1N0ZXAsXG4gIHRvZ2dsZVN0ZXAsXG4gIG9uYm9hcmRpbmdTdGVwcyxcbn06IElQcm9wcykgPT4gKFxuICA8UGlwZWxpbmVDb2x1bW4ga2V5PXtvbmJvYXJkaW5nUGlwZWxpbmVJZH0gcD17MTZ9PlxuICAgIDxCb3ggcGI9ezE2fT5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAge2lzRWRpdGluZ1BpcGVsaW5lID8gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoZWRpdFBpcGVsaW5lKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxuICAgICAgICAgICAgICBuYW1lPVwicGlwZWxpbmVOYW1lXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGU9e2VkaXRQaXBlbGluZVZhbGlkYXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94IG10PXsxMH0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXI9ezEwfT5FZGl0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZVBpcGVsaW5lfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPXsxOH0+e25hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBtbD1cImF1dG9cIiBvbkNsaWNrPXt0b2dnbGVQaXBlbGluZX0+XG4gICAgICAgICAgICAgICAgPFBlbmNpbCAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDxQb3J0YWxXaXRoU3RhdGUgY2xvc2VPbkVzYz17dHJ1ZX0gY2xvc2VPbk91dHNpZGVDbGljaz17dHJ1ZX0+XG4gICAgICAgICAgICAgIHsoeyBvcGVuUG9ydGFsLCBjbG9zZVBvcnRhbCwgcG9ydGFsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b3BlblBvcnRhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgPENyb3NzIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge3BvcnRhbChcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgdG9wPVwiMzAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHJlbW92ZVBpcGVsaW5lKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RmllbGRJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVtb3ZpbmdOYW1lQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BUeXBlIHRoZSBwaXBlbGluZSBuYW1lICcke25hbWV9JyB0byBkZWxldGUuYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYj17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbXI9ezEwfSBkaXNhYmxlZD17cmVtb3ZpbmdOYW1lQ29uZmlybVZhbHVlICE9PSBuYW1lfT5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VQb3J0YWx9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUG9ydGFsV2l0aFN0YXRlPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvRmxleD5cbiAgICA8L0JveD5cbiAgICB7b25ib2FyZGluZ1N0ZXBzLm1hcCgoc3RlcCwgaSkgPT4gKFxuICAgICAgPFN0ZXBcbiAgICAgICAga2V5PXtzdGVwLmlkfVxuICAgICAgICBmb3JtPXtgc3RlcF8ke2l9YH1cbiAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgIC8+XG4gICAgKSl9XG4gICAge2lzQWRkaW5nU3RlcCA/IChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWRkU3RlcCl9IGFjdGlvbj1cIlwiPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e0ZpZWxkSW5wdXR9XG4gICAgICAgICAgbmFtZT1cIm9uYm9hcmRpbmdTdGVwTmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEFzc2lnbiBhIG1lbnRvclwiXG4gICAgICAgICAgdmFsaWRhdGU9e2FkZFN0ZXBWYWxpZGF0b3J9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggbXQ9ezEwfT5cbiAgICAgICAgICA8QnV0dG9uIG1yPXsxMH0+Q3JlYXRlPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlU3RlcH0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgICkgOiAoXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVN0ZXB9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5BZGQgYW4gb25ib2FyZGluZyBzdGVwLjwvQnV0dG9uPlxuICAgICl9XG4gIDwvUGlwZWxpbmVDb2x1bW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQaXBlbGluZTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhIYW5kbGVycywgd2l0aFN0YXRlSGFuZGxlcnMsIHdpdGhQcm9wcywgZmxhdHRlblByb3AgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgeyByZWR1eEZvcm0sIGZvcm1WYWx1ZVNlbGVjdG9yIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcbmltcG9ydCByZW1vdmVQaXBlbGluZU11dGF0aW9uIGZyb20gXCIuL3JlbW92ZVBpcGVsaW5lTXV0YXRpb25cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBlZGl0UGlwZWxpbmVNdXRhdGlvbiBmcm9tIFwiLi9lZGl0UGlwZWxpbmVNdXRhdGlvblwiO1xuaW1wb3J0IFBpcGVsaW5lLCB7IElFZGl0UGlwZWxpbmVJbnB1dCwgSUFkZE9uYm9hcmRpbmdTdGVwSW5wdXQgfSBmcm9tIFwiLi9waXBlbGluZVwiO1xuaW1wb3J0IGFkZFN0ZXBNdXRhdGlvbiBmcm9tIFwiLi9hZGRTdGVwTXV0YXRpb25cIjtcblxuY29uc3QgZnJhZ21lbnRzID0gZ3JhcGhxbGBcbiAgZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgICBpZFxuICAgIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gICAgbmFtZVxuICAgIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgICBpZFxuICAgICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBmb3JtOiBzdHJpbmc7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVTdGVwOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNFZGl0aW5nUGlwZWxpbmU6IGJvb2xlYW47XG4gIGlzQWRkaW5nU3RlcDogYm9vbGVhbjtcbn1cblxuY29uc3Qgc3RhdGVIYW5kbGVycyA9IHtcbiAgdG9nZ2xlUGlwZWxpbmU6ICh7IGlzRWRpdGluZ1BpcGVsaW5lIH06IElTdGF0ZSkgPT4gKCkgPT4gKHtcbiAgICBpc0VkaXRpbmdQaXBlbGluZTogIWlzRWRpdGluZ1BpcGVsaW5lLFxuICB9KSxcbiAgdG9nZ2xlU3RlcDogKHsgaXNBZGRpbmdTdGVwIH06IElTdGF0ZSkgPT4gKCkgPT4gKHtcbiAgICBpc0FkZGluZ1N0ZXA6ICFpc0FkZGluZ1N0ZXAsXG4gIH0pLFxufTtcblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIHJlbW92ZVBpcGVsaW5lOiAoeyBvbmJvYXJkaW5nUGlwZWxpbmVJZCB9OiBJUHJvcHMpID0+ICgpID0+XG4gICAgcmVtb3ZlUGlwZWxpbmVNdXRhdGlvbih7IGlkOiBvbmJvYXJkaW5nUGlwZWxpbmVJZCB9KSxcbiAgZWRpdFBpcGVsaW5lOiAoeyBvbmJvYXJkaW5nUGlwZWxpbmVJZCwgdG9nZ2xlUGlwZWxpbmUgfTogSVByb3BzKSA9PiAoaW5wdXQ6IElFZGl0UGlwZWxpbmVJbnB1dCkgPT4ge1xuICAgIGVkaXRQaXBlbGluZU11dGF0aW9uKHtcbiAgICAgIGlkOiBvbmJvYXJkaW5nUGlwZWxpbmVJZCxcbiAgICAgIG5hbWU6IGlucHV0LnBpcGVsaW5lTmFtZSxcbiAgICB9KSxcbiAgICB0b2dnbGVQaXBlbGluZSgpO1xuICB9LFxuICBhZGRTdGVwOiAoeyBvbmJvYXJkaW5nUGlwZWxpbmVJZCwgdG9nZ2xlU3RlcCB9OiBJUHJvcHMpID0+IChpbnB1dDogSUFkZE9uYm9hcmRpbmdTdGVwSW5wdXQpID0+IHtcbiAgICBhZGRTdGVwTXV0YXRpb24oe1xuICAgICAgcGlwZWxpbmVJZDogb25ib2FyZGluZ1BpcGVsaW5lSWQsXG4gICAgICBuYW1lOiBpbnB1dC5vbmJvYXJkaW5nU3RlcE5hbWUsXG4gICAgfSksXG4gICAgdG9nZ2xlU3RlcCgpO1xuICB9LFxufTtcblxuY29uc3QgQ29tcG9uZW50ID0gY29tcG9zZShcbiAgd2l0aFByb3BzKCh7IGZvcm0gfTogSVByb3BzKSA9PiAoe1xuICAgIHNlbGVjdG9yOiBmb3JtVmFsdWVTZWxlY3Rvcihmb3JtKSxcbiAgfSkpLFxuICBmcmFnbWVudChmcmFnbWVudHMpLFxuICBmbGF0dGVuUHJvcChcInBpcGVsaW5lXCIpLFxuICB3aXRoU3RhdGVIYW5kbGVycyh7XG4gICAgaXNFZGl0aW5nUGlwZWxpbmU6IGZhbHNlLFxuICAgIGlzQWRkaW5nU3RlcDogZmFsc2UsXG4gIH0sIHN0YXRlSGFuZGxlcnMpLFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuICB3aXRoUHJvcHMoKHsgbmFtZSB9OiBJUHJvcHMpID0+ICh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgcGlwZWxpbmVOYW1lOiBuYW1lLFxuICAgIH0sXG4gIH0pKSxcbiAgcmVkdXhGb3JtKHt9KSxcbiAgY29ubmVjdCgoc3RhdGUsIHsgc2VsZWN0b3IgfTogYW55KSA9PiAoe1xuICAgIHJlbW92aW5nTmFtZUNvbmZpcm1WYWx1ZTogc2VsZWN0b3Ioc3RhdGUsIFwicmVtb3ZpbmdOYW1lQ29uZmlybVwiKSxcbiAgfSkpLFxuKShQaXBlbGluZSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiByZW1vdmVQaXBlbGluZU11dGF0aW9uKFxuICAgICRpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4gICkge1xuICAgIHJlbW92ZVBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlkIH06IElNdXRhdGlvbklucHV0KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiByZW1vdmVTdGVwTXV0YXRpb24oXG4gICAgJGlucHV0OiBSZW1vdmVPbmJvYXJkaW5nU3RlcElucHV0IVxuICApIHtcbiAgICByZW1vdmVTdGVwKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHBpcGVsaW5lIHtcbiAgICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0aW9uSW5wdXQge1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBpZCB9OiBJTXV0YXRpb25JbnB1dCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uVHJhbnNwYXJlbnQsIE1vZGFsLCBUZXh0LCBGbGV4IH0gZnJvbSBcInJlYmFzc1wiO1xyXG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL2Nyb3NzLnN2Z1wiO1xyXG5pbXBvcnQgUGVuY2lsIGZyb20gXCIuLi8uLi8uLi93d3dyb290L2Fzc2V0cy9wZW5jaWwuc3ZnXCI7XHJcbmltcG9ydCBGaWVsZElucHV0IGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXRcIjtcclxuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBJbmplY3RlZEZvcm1Qcm9wcyB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NoYXJlZC9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCB7IFBvcnRhbFdpdGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcclxuXHJcbmNvbnN0IFN0ZXBCb3ggPSBzdHlsZWQoQm94KWBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvblRyYW5zcGFyZW50KWBcclxuICBwYWRkaW5nOiA1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRWRpdFN0ZXBJbnB1dCB7XHJcbiAgc3RlcE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEluamVjdGVkRm9ybVByb3BzPEZvcm1EYXRhPiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJlbW92ZVN0ZXA6ICgpID0+IHZvaWQ7XHJcbiAgZWRpdFN0ZXA6ICgpID0+IHZvaWQ7XHJcbiAgaXNFZGl0aW5nU3RlcDogYm9vbGVhbjtcclxuICByZW1vdmluZ05hbWVDb25maXJtVmFsdWU6IHN0cmluZztcclxuICB0b2dnbGVTdGVwOiAoKSA9PiB2b2lkO1xyXG4gIGlzQWRkaW5nU3RlcDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgZWRpdFN0ZXBWYWxpZGF0b3IgPSBjcmVhdGVGaWVsZFZhbGlkYXRvcihbXCJyZXF1aXJlZFwiXSk7XHJcblxyXG5jb25zdCBTdGVwID0gKHtcclxuICB0b2dnbGVTdGVwLFxyXG4gIG5hbWUsXHJcbiAgaXNFZGl0aW5nU3RlcCxcclxuICBlZGl0U3RlcCxcclxuICBoYW5kbGVTdWJtaXQsXHJcbiAgcmVtb3ZlU3RlcCxcclxuICByZW1vdmluZ05hbWVDb25maXJtVmFsdWUsXHJcbn06IElQcm9wcykgPT4gKFxyXG4gIDxTdGVwQm94PlxyXG4gICAge2lzRWRpdGluZ1N0ZXAgPyAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoZWRpdFN0ZXApfSBhY3Rpb249XCJcIj5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIGNvbXBvbmVudD17RmllbGRJbnB1dH1cclxuICAgICAgICAgIG5hbWU9XCJzdGVwTmFtZVwiXHJcbiAgICAgICAgICB2YWxpZGF0ZT17ZWRpdFN0ZXBWYWxpZGF0b3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Qm94IG10PXsxMH0+XHJcbiAgICAgICAgICA8QnV0dG9uIG1yPXsxMH0+RWRpdDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlU3RlcH0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Qm94IGJnPVwid2hpdGVcIiBweD1cIjhweFwiIHB5PVwiNXB4XCI+XHJcbiAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUZXh0PntuYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gbWw9XCJhdXRvXCIgb25DbGljaz17dG9nZ2xlU3RlcH0+XHJcbiAgICAgICAgICAgICAgPFBlbmNpbCAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxQb3J0YWxXaXRoU3RhdGUgY2xvc2VPbkVzYz17dHJ1ZX0gY2xvc2VPbk91dHNpZGVDbGljaz17dHJ1ZX0+XHJcbiAgICAgICAgICAgIHsoeyBvcGVuUG9ydGFsLCBjbG9zZVBvcnRhbCwgcG9ydGFsIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b3BlblBvcnRhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENyb3NzIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge3BvcnRhbChcclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwgdG9wPVwiMzAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHJlbW92ZVN0ZXApfSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZW1vdmluZ05hbWVDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFR5cGUgdGhlIHN0ZXAgbmFtZSAnJHtuYW1lfScgdG8gZGVsZXRlLmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWI9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG1yPXsxMH0gZGlzYWJsZWQ9e3JlbW92aW5nTmFtZUNvbmZpcm1WYWx1ZSAhPT0gbmFtZX0+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlUG9ydGFsfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1BvcnRhbFdpdGhTdGF0ZT5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0JveD5cclxuICAgICl9XHJcbiAgPC9TdGVwQm94PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcDtcclxuIiwiaW1wb3J0IFN0ZXAsIHsgSUVkaXRTdGVwSW5wdXQgfSBmcm9tIFwiLi9zdGVwXCI7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGVIYW5kbGVycywgd2l0aEhhbmRsZXJzLCBmbGF0dGVuUHJvcCwgd2l0aFByb3BzIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgZnJhZ21lbnQgfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBmb3JtVmFsdWVTZWxlY3RvciB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgcmVtb3ZlU3RlcE11dGF0aW9uIGZyb20gXCIuL3JlbW92ZVN0ZXBNdXRhdGlvblwiO1xuaW1wb3J0IGVkaXRTdGVwTXV0YXRpb24gZnJvbSBcIi4vZWRpdFN0ZXBNdXRhdGlvblwiO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xuICAgIG9uYm9hcmRpbmdTdGVwSWRcbiAgICBuYW1lXG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvbmJvYXJkaW5nU3RlcElkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZm9ybTogc3RyaW5nO1xuICB0b2dnbGVTdGVwOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNFZGl0aW5nU3RlcDogYm9vbGVhbjtcbn1cblxuY29uc3Qgc3RhdGVIYW5kbGVycyA9IHtcbiAgdG9nZ2xlU3RlcDogKHsgaXNFZGl0aW5nU3RlcCB9OiBJU3RhdGUpID0+ICgpID0+ICh7XG4gICAgaXNFZGl0aW5nU3RlcDogIWlzRWRpdGluZ1N0ZXAsXG4gIH0pLFxufTtcblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIHJlbW92ZVN0ZXA6ICh7IG9uYm9hcmRpbmdTdGVwSWQgfTogSVByb3BzKSA9PiAoKSA9PlxuICAgIHJlbW92ZVN0ZXBNdXRhdGlvbih7IGlkOiBvbmJvYXJkaW5nU3RlcElkIH0pLFxuICBlZGl0U3RlcDogKHsgb25ib2FyZGluZ1N0ZXBJZCwgdG9nZ2xlU3RlcCB9OiBJUHJvcHMpID0+IChpbnB1dDogSUVkaXRTdGVwSW5wdXQpID0+IHtcbiAgICBlZGl0U3RlcE11dGF0aW9uKHtcbiAgICAgIGlkOiBvbmJvYXJkaW5nU3RlcElkLFxuICAgICAgbmFtZTogaW5wdXQuc3RlcE5hbWUsXG4gICAgfSksXG4gICAgdG9nZ2xlU3RlcCgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFByb3BzKCh7IGZvcm0gfTogSVByb3BzKSA9PiAoe1xuICAgIHNlbGVjdG9yOiBmb3JtVmFsdWVTZWxlY3Rvcihmb3JtKSxcbiAgfSkpLFxuICBmcmFnbWVudChmcmFnbWVudHMpLFxuICBmbGF0dGVuUHJvcChcInN0ZXBcIiksXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKHtcbiAgICBpc0VkaXRpbmdTdGVwOiBmYWxzZSxcbiAgfSwgc3RhdGVIYW5kbGVycyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4gIHdpdGhQcm9wcygoeyBuYW1lIH06IElQcm9wcykgPT4gKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBzdGVwTmFtZTogbmFtZSxcbiAgICB9LFxuICB9KSksXG4gIHJlZHV4Rm9ybSh7fSksXG4gIGNvbm5lY3QoKHN0YXRlLCB7IHNlbGVjdG9yIH06IGFueSkgPT4gKHtcbiAgICByZW1vdmluZ05hbWVDb25maXJtVmFsdWU6IHNlbGVjdG9yKHN0YXRlLCBcInJlbW92aW5nTmFtZUNvbmZpcm1cIiksXG4gIH0pKSxcbikoU3RlcCk7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIGNmYTNmNmJkMGQyZWU2N2YzMWYyYTQ3NTA4ODhlNGMxXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICBpZDogc3RyaW5nXG58fTtcbmV4cG9ydCB0eXBlIG9yZ2FuaXphdGlvbkNvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArbm9kZTogP3t8XG4gICAgK25hbWU/OiBzdHJpbmdcbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IG9yZ2FuaXphdGlvbkNvbnRhaW5lclF1ZXJ5VmFyaWFibGVzLFxuICByZXNwb25zZTogb3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgb3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnkoXG4gICRpZDogSUQhXG4pIHtcbiAgbm9kZShpZDogJGlkKSB7XG4gICAgX190eXBlbmFtZVxuICAgIC4uLiBvbiBPcmdhbml6YXRpb24ge1xuICAgICAgbmFtZVxuICAgIH1cbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICBcInR5cGVcIjogXCJJRCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlkXCIsXG4gICAgXCJ0eXBlXCI6IFwiSUQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJJbmxpbmVGcmFnbWVudFwiLFxuICBcInR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH1cbiAgXVxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBvcmdhbml6YXRpb25Db250YWluZXJRdWVyeShcXG4gICRpZDogSUQhXFxuKSB7XFxuICBub2RlKGlkOiAkaWQpIHtcXG4gICAgX190eXBlbmFtZVxcbiAgICAuLi4gb24gT3JnYW5pemF0aW9uIHtcXG4gICAgICBuYW1lXFxuICAgIH1cXG4gICAgaWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJub2RlXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IG51bGwsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25Db250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcIm5vZGVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogbnVsbCxcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIl9fdHlwZW5hbWVcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzYzZDJlM2QxZTQxYTJlNjRkMTQ1ZGI4NTc2ZTdiN2MyJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSU1lbWJlciB9IGZyb20gXCIuLi9tZW1iZXIvbWVtYmVyXCI7XG5pbXBvcnQgeyBJUGlwbGluZSB9IGZyb20gXCIuLi9vbmJvYXJkaW5nUHJvY2Vzcy9waXBlbGluZVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSVJvdXRlLCBJT3JnYW5pemF0aW9uIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9yZ2FuaXphdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG9yZ2FuaXphdGlvbklkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgYXZhdGFyVXJsOiBzdHJpbmc7XG4gIG1lbWJlcnM6IElNZW1iZXJbXTtcbiAgb25ib2FyZGluZ1BpcGVsaW5lczogSVBpcGxpbmVbXTtcbn1cblxuY29uc3QgT3JnYW5pemF0aW9uID0gKHtcbiAgb25ib2FyZGluZ1N0ZXBzLFxuICBuYW1lLFxufTogSVByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPE9uQm9hcmRpbmdTdGVwcyBvcmdhbml6YXRpb25OYW1lPXtuYW1lfSBvbmJvYXJkaW5nU3RlcHM9e29uYm9hcmRpbmdTdGVwc30gLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb247XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjb21wb3NlLCBmbGF0dGVuUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBPcmdhbml6YXRpb24gZnJvbSBcIi4vb3JnYW5pemF0aW9uXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgb3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnkoXG4gICAgJGlkOiBJRCFcbiAgKSB7XG4gICAgbm9kZShcbiAgICAgIGlkOiAkaWRcbiAgICApIHtcbiAgICAgIC4uLm9uIE9yZ2FuaXphdGlvbiB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IENvbXBvbmVudCA9IGNvbXBvc2UoXG4gIGZsYXR0ZW5Qcm9wKFwibm9kZVwiKSxcbikoT3JnYW5pemF0aW9uKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQsXG4gIHF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCA0Y2UwMDU0Njg1NDM3YjdiM2MxN2I1NDU5ZGJmYzI4N1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmV4cG9ydCB0eXBlIG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVZhcmlhYmxlcyA9IHt8fH07XG5leHBvcnQgdHlwZSBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlSZXNwb25zZSA9IHt8XG4gICtvcmdhbml6YXRpb25zOiAkUmVhZE9ubHlBcnJheTw/e3xcbiAgICAraWQ6IHN0cmluZyxcbiAgICArbmFtZTogc3RyaW5nLFxuICAgICthdmF0YXJVcmw6IHN0cmluZyxcbiAgfH0+XG58fTtcbmV4cG9ydCB0eXBlIG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeSA9IHt8XG4gIHZhcmlhYmxlczogb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzLFxuICByZXNwb25zZTogb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeSB7XG4gIG9yZ2FuaXphdGlvbnMge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIGF2YXRhclVybFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zXCIsXG4gICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgXCJhcmdzXCI6IG51bGwsXG4gICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImF2YXRhclVybFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeSB7XFxuICBvcmdhbml6YXRpb25zIHtcXG4gICAgaWRcXG4gICAgbmFtZVxcbiAgICBhdmF0YXJVcmxcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MFxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MFxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMzJkMTQ4MDg5NjdmOWIwODdlNzAxMjZmYTcxN2EyOTYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJncmlkLXN0eWxlZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFja2dyb3VuZEltYWdlLCBTdWJoZWFkLCBUZXh0IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgbmFtZU1hcmdpbiwgU2VsZWN0Q2FyZCB9IGZyb20gXCIuLi8uLi9zZWxlY3Qvc3R5bGVzXCI7XG5pbXBvcnQgeyBJUm91dGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IElPcmdhbml6YXRpb24gfSBmcm9tIFwiLi4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvblwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSVJvdXRlIHtcbiAgb3JnYW5pemF0aW9uczogSU9yZ2FuaXphdGlvbltdO1xufVxuXG5jb25zdCBPcmdhbml6YXRpb25zID0gKHtcbiAgb3JnYW5pemF0aW9ucyxcbiAgbWF0Y2gsXG59OiBJUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8VGV4dCBteT17MzB9PlxuICAgICAgQ2hvb3NlIGFuIG9yZ2FuaXphdGlvblxuICAgIDwvVGV4dD5cblxuICAgIDxGbGV4IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAge29yZ2FuaXphdGlvbnMubWFwKChvcmdhbml6YXRpb24pID0+IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAga2V5PXtvcmdhbml6YXRpb24uaWR9XG4gICAgICAgICAgICB0bz17YCR7bWF0Y2gubG9jYXRpb24ucGF0aG5hbWV9L29yZ2FuaXphdGlvbi8ke29yZ2FuaXphdGlvbi5pZH0vb25ib2FyZGluZ1Byb2Nlc3NgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZWxlY3RDYXJkXG4gICAgICAgICAgICAgIG09e2NhcmRNYXJnaW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2Ugd2lkdGg9ezIwMH0gc3JjPXtvcmdhbml6YXRpb24uYXZhdGFyVXJsfSByYXRpbz17MX0gLz5cbiAgICAgICAgICAgICAgPFN1YmhlYWQgdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9e25hbWVNYXJnaW59Pntvcmdhbml6YXRpb24ubmFtZX08L1N1YmhlYWQ+XG4gICAgICAgICAgICA8L1NlbGVjdENhcmQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9GbGV4PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE9yZ2FuaXphdGlvbnM7XG4iLCJpbXBvcnQgeyBSZWRpcmVjdEV4Y2VwdGlvbiB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuXG5pbXBvcnQgeyBJUm91dGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBPcmdhbml6YXRpb25zIGZyb20gXCIuL29yZ2FuaXphdGlvbnNcIjtcblxuY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkge1xuICAgIG9yZ2FuaXphdGlvbnMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGF2YXRhclVybFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IE9yZ2FuaXphdGlvbnMsXG4gIHF1ZXJ5LFxuICByZW5kZXI6IChyb3V0ZTogSVJvdXRlKSA9PiB7XG4gICAgaWYgKHJvdXRlLnByb3BzKSB7XG4gICAgICBpZiAocm91dGUucHJvcHMub3JnYW5pemF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+WW91IG11c3QgYmVsb25nIHRvIGF0bGVhc3Qgb25lIEdpdEh1YiBvcmdhbml6YXRpb24gZm9yIG9uYm9hcmRvciB0byB3b3JrPC9kaXY+O1xuICAgICAgfVxuXG4gICAgICBpZiAocm91dGUucHJvcHMub3JnYW5pemF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlZGlyZWN0RXhjZXB0aW9uKFxuICAgICAgICAgIGAke3JvdXRlLm1hdGNoLmxvY2F0aW9uLnBhdGhuYW1lfS9vcmdhbml6YXRpb24vJHtyb3V0ZS5wcm9wcy5vcmdhbml6YXRpb25zWzBdLmlkfS9vbmJvYXJkaW5nUHJvY2Vzc2BcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDxPcmdhbml6YXRpb25zIHsuLi5yb3V0ZS5wcm9wc30gLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9ucztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgVGV4dCB9IGZyb20gXCJyZWJhc3NcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzLCBlcnJvciA9IFwiQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJlZC5cIiB9OiBJUHJvcHMpID0+IChcbiAgPENvbnRhaW5lciBtdD17MTAwfT5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPntgRXJyb3IgJHtzdGF0dXN9YH08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgICA8L0hlbG1ldD5cbiAgICA8VGV4dCBmb250U2l6ZT17NjB9IHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXsyNX0+RXJyb3Ige3N0YXR1c308L1RleHQ+XG4gICAgPFRleHQgZm9udFNpemU9ezI1fSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBsaW5lSGVpZ2h0PXsxLjZ9PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgICBXZSBoYXZlIGJlZW4gbm90aWZpZWQgb2YgdGhlIGVycm9yIMKvXFxfKOODhClfL8KvLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxuICAgIDwvVGV4dD5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5cbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwiLi9lcnJvclBhZ2VcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBlcnJvcjogc3RyaW5nO1xufVxuXG5jb25zdCBjcmVhdGVQcm9wcyA9ICh7IHN0YXR1cywgZXJyb3IgfTogSVByb3BzKSA9PiB7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6XG4gICAgICByZXR1cm4geyBlcnJvcjogXCJUaGUgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQuXCIgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxufTtcblxuY29uc3QgRXJyb3JQYWdlQ29udGFpbmVyID0gY29tcG9zZTxJUHJvcHMsIElQcm9wcz4oXG4gIHdpdGhQcm9wcyhjcmVhdGVQcm9wcyksXG4pKEVycm9yUGFnZSk7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcmVuZGVyOiAocm91dGU6IElSb3V0ZSkgPT4gcm91dGUucHJvcHMgJiYgKFxuICAgIDxFcnJvclBhZ2VDb250YWluZXJcbiAgICAgIHN0YXR1cz17cGFyc2VJbnQocm91dGUucHJvcHMucGFyYW1zLnN0YXR1cyBhcyBzdHJpbmcsIDEwKX1cbiAgICAgIGVycm9yPXtyb3V0ZS5wcm9wcy5sb2NhdGlvbi5zdGF0ZS5lcnJvcn1cbiAgICAvPlxuICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgRGV0YWlsID0gc3R5bGVkKFRleHQpYFxuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xuYDtcblxuY29uc3QgSW1wcmludCA9ICgpID0+IChcbiAgPENvbnRhaW5lciBwdD17NDB9IHdpZHRoPXtbXCIxMDAlXCIsIFwiODAlXCIsIFwiNjAlXCJdfT5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPkltcHJpbnQ8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnRhY3QgaW5mb3JtYXRpb24gZm9yIG9uYm9hcmRvci5jb20uXCIgLz5cbiAgICA8L0hlbG1ldD5cbiAgICA8SGVhZGluZyBtYj17NDB9IGlzPVwiaDFcIj5JbXByaW50PC9IZWFkaW5nPlxuICAgIDxEZXRhaWw+Q29tcGFueSBOYW1lOiBGT1pFTiBMSU1JVEVEPC9EZXRhaWw+XG4gICAgPERldGFpbD5Db21wYW55IERpcmVjdG9yOiBNYXJ0aW4gRGF3c29uPC9EZXRhaWw+XG4gICAgPERldGFpbD5BZGRyZXNzOiAyNiBDYWxkZXJWaWV3LCBSYXN0cmljaywgQnJpZ2hvdXNlLCBIRDYzRFEgVW5pdGVkIEtpbmdkb208L0RldGFpbD5cbiAgICA8RGV0YWlsPlRlbGVwaG9uZTogKyg0NCk3NDczNTkxMDk3PC9EZXRhaWw+XG4gICAgPERldGFpbD5FbWFpbCBhZGRyZXNzOiB1MTM1Njc3MEBnbWFpbC5jb208L0RldGFpbD5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50O1xuIiwiaW1wb3J0IEltcHJpbnQgZnJvbSBcIi4vaW1wcmludFwiO1xuXG5jb25zdCBJbXByaW50Q29udGFpbmVyID0gSW1wcmludDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEltcHJpbnRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50Q29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWxtZXQ+XG4gICAgICA8dGl0bGU+UHJpdmFjeSBQb2xpY3k8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk91ciBwcml2YWN5IHBvbGljeSBleHBsYWluaW5nIHdoYXQgZGF0YSB3ZSBjb2xsZWN0LlwiIC8+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBKdW5lIDExdGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBiZWVuIGNvbXBpbGVkIHRvIGJldHRlciBzZXJ2ZSB0aG9zZSB3aG8gYXJlIGNvbmNlcm5lZCB3aXRoIGhvdyB0aGVpclxuICAgICAgJmFwb3M7UGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24mYXBvczsgKFBJSSkgaXMgYmVpbmcgdXNlZCBvbmxpbmUuXG4gICAgICBQSUksIGFzIGRlc2NyaWJlZCBpbiBVUyBwcml2YWN5IGxhdyBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHksIGlzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAgICAgIG9uIGl0cyBvd24gb3Igd2l0aCBvdGhlciBpbmZvcm1hdGlvbiB0byBpZGVudGlmeSwgY29udGFjdCwgb3IgbG9jYXRlIGEgc2luZ2xlIHBlcnNvbiwgb3IgdG9cbiAgICAgIGlkZW50aWZ5IGFuIGluZGl2aWR1YWwgaW4gY29udGV4dC4gUGxlYXNlIHJlYWQgb3VyIHByaXZhY3kgcG9saWN5IGNhcmVmdWxseSB0byBnZXQgYSBjbGVhclxuICAgICAgdW5kZXJzdGFuZGluZyBvZiBob3cgd2UgY29sbGVjdCwgdXNlLCBwcm90ZWN0IG9yIG90aGVyd2lzZSBoYW5kbGVcbiAgICAgIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIG91ciB3ZWJzaXRlLlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGF0IHBlcnNvbmFsIGluZm9ybWF0aW9uIGRvIHdlIGNvbGxlY3Q/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiByZWdpc3RlcmluZyBmb3Igb3VyIG5ld3NsZXR0ZXIsIHlvdSB3aWxsIGJlIGFza2VkIHRvIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICBUaGlzIGlzIHRvIGhlbHAgdXMgaW5kZW50aWZ5IHlvdSBhbmQga2VlcCB5b3UgdXBkYXRlZC5cbiAgICAgICAgICBXZSB3aWxsIG5vdCBzZW5kIHlvdSBhbnkgZW1haWxzIHRoYXQgeW91IGRvIG5vdCByZXF1ZXN0LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hlbiBkbyB3ZSBjb2xsZWN0IGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGNvbGxlY3QgY2VydGFpbiBpbmZvcm1hdGlvbiBmcm9tIHlvdSB3aGVuIHlvdSByZWdpc3RlciBmb3Igb3VyIG5ld3NsZXR0ZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Ib3cgZG8gd2UgcHJvdGVjdCB5b3VyIGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCB1c2UgdnVsbmVyYWJpbGl0eSBzY2FubmluZyBhbmQvb3Igc2Nhbm5pbmcgdG8gUENJIHN0YW5kYXJkcy5cbiAgICAgICAgICBXZSBuZXZlciBhc2sgZm9yIGNyZWRpdCBjYXJkIG51bWJlcnMuIFdlIHVzZSByZWd1bGFyIE1hbHdhcmUgU2Nhbm5pbmcuXG4gICAgICAgICAgWW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBjb250YWluZWQgYmVoaW5kIHNlY3VyZWQgbmV0d29ya3MgYW5kIGlzIG9ubHkgYWNjZXNzaWJsZVxuICAgICAgICAgIGJ5IGEgbGltaXRlZCBudW1iZXIgb2YgcGVyc29ucyB3aG8gaGF2ZSBzcGVjaWFsIGFjY2VzcyByaWdodHMgdG8gc3VjaCBzeXN0ZW1zLCBhbmQgYXJlXG4gICAgICAgICAgcmVxdWlyZWQgdG8ga2VlcCB0aGUgaW5mb3JtYXRpb24gY29uZmlkZW50aWFsLiBJbiBhZGRpdGlvbiwgYWxsIHNlbnNpdGl2ZSBpbmZvcm1hdGlvblxuICAgICAgICAgIHlvdSBzdXBwbHkgaXMgZW5jcnlwdGVkIHZpYSBTZWN1cmUgU29ja2V0IExheWVyIChTU0wpIHRlY2hub2xvZ3kuXG4gICAgICAgICAgV2UgaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBzZWN1cml0eSBtZWFzdXJlcyB3aGVuIGEgdXNlciBlbnRlcnMsIHN1Ym1pdHMsIG9yIGFjY2Vzc2VzIHRoZWlyXG4gICAgICAgICAgaW5mb3JtYXRpb24gdG8gbWFpbnRhaW4gdGhlIHNhZmV0eSBvZiB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG8gd2UgdXNlICZhcG9zO2Nvb2tpZXMmYXBvczs/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWWVzLiBDb29raWVzIGFyZSBzbWFsbCBmaWxlcyB0aGF0IGEgc2l0ZSBvciBpdHMgc2VydmljZSBwcm92aWRlciB0cmFuc2ZlcnMgdG8geW91clxuICAgICAgICAgIGNvbXB1dGVyJmFwb3M7cyBoYXJkIGRyaXZlIHRocm91Z2ggeW91ciBXZWIgYnJvd3NlciB0aGF0IGVuYWJsZXMgdGhlXG4gICAgICAgICAgc2l0ZSZhcG9zO3Mgb3Igc2VydmljZSBwcm92aWRlciZhcG9zO3Mgc3lzdGVtcyB0byByZWNvZ25pemUgeW91ciBicm93c2VyIGFuZCBjYXB0dXJlXG4gICAgICAgICAgYW5kIHJlbWVtYmVyIGNlcnRhaW4gaW5mb3JtYXRpb24uIFRoZXkgYXJlIHVzZWQgdG8gaGVscCB1cyB1bmRlcnN0YW5kIHlvdXIgcHJlZmVyZW5jZXNcbiAgICAgICAgICBiYXNlZCBvbiBwcmV2aW91cyBvciBjdXJyZW50IHNpdGUgYWN0aXZpdHksIHdoaWNoIGVuYWJsZXMgdXMgdG8gcHJvdmlkZVxuICAgICAgICAgIHlvdSB3aXRoIGltcHJvdmVkIHNlcnZpY2VzLiBXZSBhbHNvIHVzZSBjb29raWVzIHRvIGhlbHAgdXMgY29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dFxuICAgICAgICAgIHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbiBzbyB0aGF0IHdlIGNhbiBvZmZlciBiZXR0ZXIgc2l0ZVxuICAgICAgICAgIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2UgdXNlIGNvb2tpZXMgdG86PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5VbmRlcnN0YW5kIGFuZCBzYXZlIHVzZXImYXBvcztzIHByZWZlcmVuY2VzIGZvciBmdXR1cmUgdmlzaXRzLjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQ29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dCBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb25zXG4gICAgICAgICAgICBpbiBvcmRlciB0byBvZmZlciBiZXR0ZXIgc2l0ZSBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIFdlIG1heSBhbHNvIHVzZSB0cnVzdGVkIHRoaXJkLXBhcnR5IHNlcnZpY2VzIHRoYXQgdHJhY2sgdGhpc1xuICAgICAgICAgICAgaW5mb3JtYXRpb24gb24gb3VyIGJlaGFsZlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENvb2tpZXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIG91ciB3ZWJzaXRlIGFuZCB0aGUgd2Vic2l0ZSB3aWxsIG5vdCB3b3JrXG4gICAgICAgICAgd2l0aG91dCBoYXZpbmcgdGhlbSBlbmFibGVkLiBCeSB1c2luZyBvdXIgc2l0ZSB5b3UgYWxsb3cgdXMgdG8gdXNlIGNvb2tpZXMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBkaXNjbG9zdXJlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHNlbGwsIHRyYWRlLCBvciBvdGhlcndpc2UgdHJhbnNmZXIgdG8gb3V0c2lkZVxuICAgICAgICAgIHBhcnRpZXMgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgbWF5IGJlIHRoaXJkLXBhcnR5IGxpbmtzIHRvIHJhZGlvIHN0YXRpb24gd2Vic2l0ZXMgdGhyb3VnaG91dCBvdXJcbiAgICAgICAgICB3ZWJzaXRlLiBUaGVzZSB0aGlyZC1wYXJ0eSBzaXRlcyBoYXZlIHNlcGFyYXRlIGFuZCBpbmRlcGVuZGVudCBwcml2YWN5IHBvbGljaWVzLlxuICAgICAgICAgIFdlIHRoZXJlZm9yZSBoYXZlIG5vIHJlc3BvbnNpYmlsaXR5IG9yIGxpYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQgYW5kXG4gICAgICAgICAgYWN0aXZpdGllcyBvZiB0aGVzZSBsaW5rZWQgc2l0ZXMuIE5vbmV0aGVsZXNzLCB3ZSBzZWVrIHRvIHByb3RlY3RcbiAgICAgICAgICB0aGUgaW50ZWdyaXR5IG9mIG91ciBzaXRlIGFuZCB3ZWxjb21lIGFueSBmZWVkYmFjayBhYm91dCB0aGVzZSBzaXRlcy5cbiAgICAgICAgICBBbnkgbGluayBvbiBvdXIgc2l0ZSB0byBhIHRoaXJkIHBhcnQgd2Vic2l0ZSB0aGF0IGlzIG5vdCByZWxldmFudFxuICAgICAgICAgIG9yIGlmIHdlIGRlZW0gaXQgaW5hcHByb3ByaWF0ZSwgbWF5IGJlIHJlbW92ZWQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb29nbGU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBHb29nbGUmYXBvcztzIGFkdmVydGlzaW5nIHJlcXVpcmVtZW50cyBjYW4gYmUgc3VtbWVkIHVwIGJ5XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBBZHZlcnRpc2luZyBQcmluY2lwbGVzLiBUaGV5IGFyZSBwdXQgaW4gcGxhY2UgdG9cbiAgICAgICAgICBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Fkd29yZHNwb2xpY3kvYW5zd2VyLzEzMTY1NDg/aGw9ZW5cblxuICAgICAgICAgIFdlIGhhdmUgbm90IGVuYWJsZWQgR29vZ2xlIEFkU2Vuc2Ugb24gb3VyIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DYWxpZm9ybmlhIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ2FsT1BQQSBpcyB0aGUgZmlyc3Qgc3RhdGUgbGF3IGluIHRoZSBuYXRpb24gdG8gcmVxdWlyZSBjb21tZXJjaWFsXG4gICAgICAgICAgd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyB0byBwb3N0IGEgcHJpdmFjeSBwb2xpY3kuXG4gICAgICAgICAgVGhlIGxhdyZhcG9zO3MgcmVhY2ggc3RyZXRjaGVzIHdlbGwgYmV5b25kIENhbGlmb3JuaWEgdG8gcmVxdWlyZSBhbnkgcGVyc29uIG9yIGNvbXBhbnlcbiAgICAgICAgICBpbiB0aGUgVW5pdGVkIFN0YXRlcyAoYW5kIGNvbmNlaXZhYmx5IHRoZSB3b3JsZCkgdGhhdCBvcGVyYXRlcyB3ZWJzaXRlcyBjb2xsZWN0aW5nXG4gICAgICAgICAgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gZnJvbSBDYWxpZm9ybmlhIGNvbnN1bWVycyB0byBwb3N0IGEgY29uc3BpY3VvdXNcbiAgICAgICAgICBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmRcbiAgICAgICAgICB0aG9zZSBpbmRpdmlkdWFscyBvciBjb21wYW5pZXMgd2l0aCB3aG9tIGl0IGlzIGJlaW5nIHNoYXJlZC4gLSBTZWUgbW9yZSBhdDpcbiAgICAgICAgICBodHRwOi8vY29uc3VtZXJjYWwub3JnL2NhbGlmb3JuaWEtb25saW5lLXByaXZhY3ktcHJvdGVjdGlvbi1hY3QtY2Fsb3BwYS8jc3RoYXNoLjBGZFJiVDUxLmRwdWZcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkFjY29yZGluZyB0byBDYWxPUFBBLCB3ZSBhZ3JlZSB0byB0aGUgZm9sbG93aW5nOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFVzZXJzIGNhbiB2aXNpdCBvdXIgc2l0ZSBhbm9ueW1vdXNseS5cbiAgICAgICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBhIGxpbmsgdG8gaXQgZnJvbSBvdXIgaG9tZSBwYWdlIGluIHRoZSBoZWFkZXIuXG4gICAgICAgICAgT3VyIFByaXZhY3kgUG9saWN5IGxpbmsgaW5jbHVkZXMgdGhlIHdvcmQgJmFwb3M7UHJpdmFjeSZhcG9zOyBhbmQgY2FuIGVhc2lseVxuICAgICAgICAgIGJlIGZvdW5kIG9uIHRoZSBwYWdlIHNwZWNpZmllZCBhYm92ZS5cblxuICAgICAgICAgIFlvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIGFueSBQcml2YWN5IFBvbGljeSBjaGFuZ2VzOlxuICAgICAgICAgICAgICAgIOKAoiBPbiBvdXIgUHJpdmFjeSBQb2xpY3kgUGFnZVxuICAgICAgICAgIENhbiBjaGFuZ2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICDigKIgVGhyb3VnaCBvdXIgd2Vic2l0ZVxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG9lcyBvdXIgc2l0ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEl0JmFwb3M7cyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmdcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNPUFBBIChDaGlsZHJlbiBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdCk8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIGl0IGNvbWVzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW5cbiAgICAgICAgICB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZCwgdGhlIENoaWxkcmVuJmFwb3M7cyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uXG4gICAgICAgICAgQWN0IChDT1BQQSkgcHV0cyBwYXJlbnRzIGluIGNvbnRyb2wuIFRoZSBGZWRlcmFsIFRyYWRlIENvbW1pc3Npb24sIFVuaXRlZCBTdGF0ZXMmYXBvcztcbiAgICAgICAgICBjb25zdW1lciBwcm90ZWN0aW9uIGFnZW5jeSwgZW5mb3JjZXMgdGhlIENPUFBBIFJ1bGUsIHdoaWNoIHNwZWxscyBvdXQgd2hhdFxuICAgICAgICAgIG9wZXJhdG9ycyBvZiB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIG11c3QgZG8gdG8gcHJvdGVjdCBjaGlsZHJlbiZhcG9zO3NcbiAgICAgICAgICBwcml2YWN5IGFuZCBzYWZldHkgb25saW5lLlxuXG4gICAgICAgICAgV2UgZG8gbm90IHNwZWNpZmljYWxseSBtYXJrZXQgdG8gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5GYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyBQcmluY2lwbGVzIGZvcm0gdGhlIGJhY2tib25lIG9mIHByaXZhY3lcbiAgICAgICAgICBsYXcgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgYW5kIHRoZSBjb25jZXB0cyB0aGV5IGluY2x1ZGUgaGF2ZSBwbGF5ZWQgYSBzaWduaWZpY2FudFxuICAgICAgICAgIHJvbGUgaW4gdGhlIGRldmVsb3BtZW50IG9mIGRhdGEgcHJvdGVjdGlvbiBsYXdzIGFyb3VuZCB0aGUgZ2xvYmUuIFVuZGVyc3RhbmRpbmdcbiAgICAgICAgICB0aGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZSBQcmluY2lwbGVzIGFuZCBob3cgdGhleSBzaG91bGQgYmUgaW1wbGVtZW50ZWQgaXNcbiAgICAgICAgICBjcml0aWNhbCB0byBjb21wbHkgd2l0aCB0aGUgdmFyaW91cyBwcml2YWN5IGxhd3MgdGhhdCBwcm90ZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuXG4gICAgICAgICAgSW4gb3JkZXIgdG8gYmUgaW4gbGluZSB3aXRoIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIHdlIHdpbGwgdGFrZSB0aGVcbiAgICAgICAgICBmb2xsb3dpbmcgcmVzcG9uc2l2ZSBhY3Rpb24sIHNob3VsZCBhIGRhdGEgYnJlYWNoIG9jY3VyOlxuXG4gICAgICAgICAgV2Ugd2lsbCBub3RpZnkgeW91IHZpYSBlbWFpbCB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLiBXZSB3aWxsIGFsc29cbiAgICAgICAgICBub3RpZnkgdXNlcnMgdmlhIGFuIGluLXNpdGUgbm90aWZpY2F0aW9uIG9uIHRoZSBob21lIHBhZ2Ugd2l0aGluIDcgYnVzaW5lc3MgZGF5cy5cblxuICAgICAgICAgIFdlIGFsc28gYWdyZWUgdG8gdGhlIEluZGl2aWR1YWwgUmVkcmVzcyBQcmluY2lwbGUgd2hpY2ggcmVxdWlyZXMgdGhhdCBpbmRpdmlkdWFsc1xuICAgICAgICAgIGhhdmUgdGhlIHJpZ2h0IHRvIGxlZ2FsbHkgcHVyc3VlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgY29sbGVjdG9yc1xuICAgICAgICAgIGFuZCBwcm9jZXNzb3JzIHdobyBmYWlsIHRvIGFkaGVyZSB0byB0aGUgbGF3LiBUaGlzIHByaW5jaXBsZSByZXF1aXJlcyBub3Qgb25seVxuICAgICAgICAgIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIHVzZXJzLCBidXQgYWxzbyB0aGF0XG4gICAgICAgICAgaW5kaXZpZHVhbHMgaGF2ZSByZWNvdXJzZSB0byBjb3VydHMgb3IgZ292ZXJubWVudCBhZ2VuY2llcyB0byBpbnZlc3RpZ2F0ZVxuICAgICAgICAgIGFuZC9vciBwcm9zZWN1dGUgbm9uLWNvbXBsaWFuY2UgYnkgZGF0YSBwcm9jZXNzb3JzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcbiIsImltcG9ydCBQcml2YWN5UG9saWN5IGZyb20gXCIuL3ByaXZhY3lQb2xpY3lcIjtcblxuY29uc3QgUHJpdmFjeVBvbGljeUNvbnRhaW5lciA9IFByaXZhY3lQb2xpY3k7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcml2YWN5UG9saWN5Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeUNvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWxtZXQ+XG4gICAgICA8dGl0bGU+VGVybXMgYW5kIENvbmRpdGlvbnM8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk91ciB0ZXJtcyBhbmQgY29uZGl0aW9ucyB0aGF0IHlvdSBhZ3JlZSB0byB3aGVuIHVzaW5nIG91ciBzaXRlLlwiIC8+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPlRlcm1zIGFuZCBDb25kaXRpb25zPC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBKdW5lIDExdGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICAmcXVvdDtZb3UmcXVvdDsgYW5kICZxdW90O3lvdXImcXVvdDsgcmVmZXIgdG8geW91LCBhcyBhIHVzZXIgb2YgdGhlIFNpdGUuXG4gICAgICBBICZxdW90O3VzZXImcXVvdDsgaXMgc29tZW9uZSB3aG8gYWNjZXNzZXMsYnJvd3NlcywgY3Jhd2xzLCBzY3JhcGVzLCBvciBpbiBhbnlcbiAgICAgIHdheSB1c2VzIHRoZSBTaXRlLiAmcXVvdDtXZSwmcXVvdDsgJnF1b3Q7dXMsJnF1b3Q7IGFuZCAmcXVvdDtvdXImcXVvdDsgcmVmZXIgdG8gb25ib2FyZG9yLlxuICAgICAgJnF1b3Q7Q29udGVudCZxdW90OyBtZWFucyB0ZXh0LCBpbWFnZXMsIHBob3RvcywgYXVkaW8sIHZpZGVvLCBsb2NhdGlvbiBkYXRhLFxuICAgICAgYW5kIGFsbCBvdGhlciBmb3JtcyBvZiBkYXRhIG9yIGNvbW11bmljYXRpb24uXG4gICAgICAmcXVvdDtZb3VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHlvdSBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsIG9yIGluXG4gICAgICBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUsIHN1Y2ggYXMgcmF0aW5ncywgcmV2aWV3cywgY29tcGxpbWVudHMsIGludml0YXRpb25zLFxuICAgICAgY2hlY2staW5zLCBtZXNzYWdlcywgYW5kIGluZm9ybWF0aW9uIHRoYXQgeW91IHB1YmxpY2x5IGRpc3BsYXkgb3IgZGlzcGxheWVkIGluXG4gICAgICB5b3VyIGFjY291bnQgcHJvZmlsZS5cbiAgICAgICZxdW90O1VzZXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgdXNlcnMgc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLFxuICAgICAgb3IgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLiAmcXVvdDtvbmJvYXJkb3IgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXRcbiAgICAgIHdlIGNyZWF0ZSBhbmQgbWFrZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7VGhpcmQgUGFydHkgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgb3JpZ2luYXRlcyBmcm9tIHBhcnRpZXMgb3RoZXJcbiAgICAgIHRoYW4gb25ib2FyZG9yIG9yIGl0cyB1c2Vycywgd2hpY2ggaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7U2l0ZSBDb250ZW50JnF1b3Q7IG1lYW5zIGFsbCBvZiB0aGUgQ29udGVudCB0aGF0IGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb25cbiAgICAgIHdpdGggdGhlIFNpdGUsIGluY2x1ZGluZyBZb3VyIENvbnRlbnQsIFVzZXIgQ29udGVudCwgVGhpcmQgUGFydHkgQ29udGVudCxcbiAgICAgIGFuZCBvbmJvYXJkb3IgQ29udGVudC5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGVybXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCeSBhY2Nlc3NpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5IHRoZXNlIHdlYnNpdGUgVGVybXNcbiAgICAgICAgICBhbmQgQ29uZGl0aW9ucyBvZiBVc2UsIGFsbCBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLCBhbmQgYWdyZWUgdGhhdCB5b3VcbiAgICAgICAgICBhcmUgcmVzcG9uc2libGUgZm9yIGNvbXBsaWFuY2Ugd2l0aCBhbnkgYXBwbGljYWJsZSBsb2NhbCBsYXdzLlxuICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgd2l0aCBhbnkgb2YgdGhlc2UgdGVybXMsIHlvdSBhcmUgcHJvaGliaXRlZCBmcm9tIHVzaW5nIG9yXG4gICAgICAgICAgYWNjZXNzaW5nIHRoaXMgc2l0ZS4gVGhlIG1hdGVyaWFscyBjb250YWluZWQgaW4gdGhpcyB3ZWJzaXRlIGFyZSBwcm90ZWN0ZWRcbiAgICAgICAgICBieSBhcHBsaWNhYmxlIGNvcHlyaWdodCBhbmQgdHJhZGUgbWFyayBsYXcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EaXNjbGFpbWVyPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBvbiB0aGUgb25ib2FyZG9yIHdlYnNpdGUgYXJlIHByb3ZpZGVkICZxdW90O2FzIHNob3duJnF1b3Q7LlxuICAgICAgICAgIG9uYm9hcmRvciBtYWtlcyBubyB3YXJyYW50aWVzLCBleHByZXNzZWQgb3IgaW1wbGllZCwgYW5kIGhlcmVieSBkaXNjbGFpbXNcbiAgICAgICAgICBhbmQgbmVnYXRlcyBhbGwgb3RoZXIgd2FycmFudGllcywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgaW1wbGllZFxuICAgICAgICAgIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhclxuICAgICAgICAgIHB1cnBvc2UsIG9yIG5vbi1pbmZyaW5nZW1lbnQgb2YgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHZpb2xhdGlvbiBvZiByaWdodHMuXG4gICAgICAgICAgRnVydGhlciwgb25ib2FyZG9yIGRvZXMgbm90IHdhcnJhbnQgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb25zIGNvbmNlcm5pbmcgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgIGxpa2VseSByZXN1bHRzLCBvciByZWxpYWJpbGl0eSBvZiB0aGUgdXNlIG9mIHRoZSBtYXRlcmlhbHMgb24gaXRzIGludGVybmV0XG4gICAgICAgICAgd2Vic2l0ZSBvciBvdGhlcndpc2UgcmVsYXRpbmcgdG8gc3VjaCBtYXRlcmlhbHMgb3Igb24gYW55IHNpdGVzIGxpbmtlZCB0byB0aGlzIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW1pdGF0aW9uczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIG5vIGV2ZW50IHNoYWxsIG9uYm9hcmRvciBvciBpdHMgc3VwcGxpZXJzIGJlIGxpYWJsZSBmb3IgYW55IGRhbWFnZXMgKGluY2x1ZGluZywgd2l0aG91dFxuICAgICAgICAgIGxpbWl0YXRpb24sIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZGF0YSBvciBwcm9maXQsIG9yIGR1ZSB0byBidXNpbmVzcyBpbnRlcnJ1cHRpb24pXG4gICAgICAgICAgYXJpc2luZyBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZSBtYXRlcmlhbHMgb24gb3VyIGludGVybmV0IHNpdGUgb3JcbiAgICAgICAgICBvZmZlcmVkIHNlcnZpY2VzLCBldmVuIGlmIHdlIG9yIGFuIGF1dGhvcml6ZWQgcmVwcmVzZW50YXRpdmUgaGFzIGJlZW4gbm90aWZpZWRcbiAgICAgICAgICBvcmFsbHkgb3IgaW4gd3JpdGluZyBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2UuIEJlY2F1c2Ugc29tZSBqdXJpc2RpY3Rpb25zXG4gICAgICAgICAgZG8gbm90IGFsbG93IGxpbWl0YXRpb25zIG9uIGltcGxpZWQgd2FycmFudGllcywgb3IgbGltaXRhdGlvbnMgb2YgbGlhYmlsaXR5IGZvclxuICAgICAgICAgIGNvbnNlcXVlbnRpYWwgb3IgaW5jaWRlbnRhbCBkYW1hZ2VzLCB0aGVzZSBsaW1pdGF0aW9ucyBtYXkgbm90IGFwcGx5IHRvIHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlJldmlzaW9ucyBhbmQgRXJyb3JzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBhcHBlYXJpbmcgb24gb3VyIHdlYnNpdGUgY291bGQgaW5jbHVkZSB0ZWNobmljYWwsIHR5cG9ncmFwaGljYWwsXG4gICAgICAgICAgb3IgcGhvdG9ncmFwaGljIGVycm9ycy4gb25ib2FyZG9yIGRvZXMgbm90IHdhcnJhbnQgdGhhdCBhbnkgb2YgdGhlIG1hdGVyaWFscyBvblxuICAgICAgICAgIGl0cyB3ZWJzaXRlIGFyZSBhY2N1cmF0ZSwgY29tcGxldGUsIG9yIGN1cnJlbnQuIFdlIG1heSBtYWtlIGNoYW5nZXMgdG8gdGhlXG4gICAgICAgICAgbWF0ZXJpYWxzIGNvbnRhaW5lZCBvbiBpdHMgd2Vic2l0ZSBhdCBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgb25ib2FyZG9yIGhhcyBub3QgcmV2aWV3ZWQgYWxsIG9mIHRoZSBzaXRlcyBsaW5rZWQgdG8gaXRzIGludGVybmV0IHdlYnNpdGVcbiAgICAgICAgICBhbmQgaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29udGVudHMgb2YgYW55IHN1Y2ggbGlua2VkIHNpdGUuXG4gICAgICAgICAgVGhlIGluY2x1c2lvbiBvZiBhbnkgbGluayBkb2VzIG5vdCBpbXBseSBlbmRvcnNlbWVudCBieSB1cyBvZiB0aGUgc2l0ZS5cbiAgICAgICAgICBVc2Ugb2YgYW55IHN1Y2ggbGlua2VkIHdlYnNpdGUgaXMgYXQgdGhlIHVzZXImcXVvdDtzIG93biByaXNrLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R292ZXJuaW5nIExhdzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFueSBjbGFpbSByZWxhdGluZyB0byB0aGUgb25ib2FyZG9yIHdlYnNpdGUgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3NcbiAgICAgICAgICBvZiB0aGUgY291bnRyeSBvZiBub3RlIHdpdGhvdXQgcmVnYXJkIHRvIGl0cyBjb25mbGljdCBvZiBsYXcgcHJvdmlzaW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkVuZ2xpc2ggTGFuZ3VhZ2U8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiB0aGUgZXZlbnQgb2YgYSBjb25mbGljdCBiZXR3ZWVuIHRoZXNlIFRlcm1zIGFuZCBhIGZvcmVpZ24gbGFuZ3VhZ2UgdmVyc2lvblxuICAgICAgICAgIG9mIG91ciBUZXJtcyBvZiBVc2UsIHRoZSBFbmdsaXNoIGxhbmd1YWdlIHZlcnNpb24gb2YgdGhlc2UgVGVybXMgZ292ZXJucy5cbiAgICAgICAgICBBbGwgZGlzcHV0ZXMsIGNsYWltcyBhbmQgY2F1c2VzIG9mIGFjdGlvbiAoYW5kIHJlbGF0ZWQgcHJvY2VlZGluZ3MpIHdpbGwgYmVcbiAgICAgICAgICBjb21tdW5pY2F0ZWQgaW4gRW5nbGlzaC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNvcHlyaWdodCBwb2xpY3ksIG5vdGljZSBhbmQgY2xhaW0gaW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbGwgbWF0ZXJpYWxzIG9uIHRoaXMgc2l0ZSwgd2hldGhlciBzZXBhcmF0ZSBvciBjb21waWxlZCwgaW5jbHVkaW5nLFxuICAgICAgICAgIGJ1dCBub3QgbGltaXRlZCB0bywgdGV4dCwgZ3JhcGhpY3MsIGF1ZGlvIGNsaXBzLCBsb2dvcywgYnV0dG9ucywgaW1hZ2VzLFxuICAgICAgICAgIGRpZ2l0YWwgZG93bmxvYWRzLCBkYXRhIGNvbXBpbGF0aW9ucywgc29mdHdhcmUsIGljb25zLCBodG1sIGNvZGUgYW5kIHhtbCBjb2RlLFxuICAgICAgICAgIGFzIHdlbGwgYXMgYWxsIGNvcHlyaWdodCwgcGF0ZW50LCB0cmFkZW1hcmssIHRyYWRlIGRyZXNzLCBhbmQgb3RoZXIgcmlnaHRzXG4gICAgICAgICAgdGhlcmVpbiwgYXJlIG93bmVkIG9yIGxpY2Vuc2VkIGJ5IG9uYm9hcmRvciBhbmQgaXRzIHRoaXJkLXBhcnR5IGluZm9ybWF0aW9uIHByb3ZpZGVycyxcbiAgICAgICAgICBhbmQgYXJlIHByb3RlY3RlZCBieSBpbnRlcm5hdGlvbmFsIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBsYXdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zO1xuIiwiaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tIFwiLi90ZXJtc0FuZENvbmRpdGlvbnNcIjtcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyID0gVGVybXNBbmRDb25kaXRpb25zO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0LCBBYnNvbHV0ZSwgUmVsYXRpdmUsIEltYWdlIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgQm94LCBGbGV4LCB0aGVtZSB9IGZyb20gXCJncmlkLXN0eWxlZFwiO1xuaW1wb3J0IFN1YnNjcmliZU1haWxpbmdMaXN0IGZyb20gXCIuLi9zaGFyZWQvZm9ybS9zdWJzY3JpYmVNYWlsaW5nTGlzdENvbnRhaW5lclwiO1xuaW1wb3J0IHN0eWxlZCwgeyB3aXRoVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElTdHlsZVByb3BzLCBJVGhlbWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBCYWNrZ3JvdW5kQmx1ZSBmcm9tIFwiLi4vLi4vd3d3cm9vdC9hc3NldHMvYmFja2dyb3VuZEJsdWUuc3ZnXCI7XG5pbXBvcnQgQmFja2dyb3VuZEdyZXkgZnJvbSBcIi4uLy4uL3d3d3Jvb3QvYXNzZXRzL2JhY2tncm91bmRHcmV5LnN2Z1wiO1xuaW1wb3J0IENoZWNrIGZyb20gXCIuLi8uLi93d3dyb290L2Fzc2V0cy9jaGVjay5zdmdcIjtcbmltcG9ydCBib2FyZCBmcm9tIFwiLi4vLi4vd3d3cm9vdC9hc3NldHMvYm9hcmQucG5nXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJU3R5bGVQcm9wcyB7fVxuXG5jb25zdCBHcmVlbkNoZWNrID0gc3R5bGVkKENoZWNrKWBcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGZpbGw6ICR7KHsgdGhlbWUgfTogSVN0eWxlUHJvcHMpID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fVxuYDtcblxuY29uc3QgU3R5bGVkU3RlcEZsZXggPSBzdHlsZWQoRmxleClgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogSVN0eWxlUHJvcHMpID0+IHRoZW1lLmJyZWFrcG9pbnRzWzBdfXB4KSB7XG4gICAgPiBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdGVwRmxleCA9ICh7IC4uLnByb3BzIH0pID0+IDxTdHlsZWRTdGVwRmxleCB7Li4ucHJvcHN9IG1iPXtbNDAsIDQwLCAwXX0ganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz17W1wiY2VudGVyXCIsIFwiY2VudGVyXCIsIFwic3RyZXRjaFwiXX0gZmxleERpcmVjdGlvbj17W1wiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwicm93XCJdfSAvPjtcbmNvbnN0IFN0ZXBDb250YWluZXIgPSAoeyAuLi5wcm9wcyB9KSA9PiA8Qm94IHsuLi5wcm9wc30gd2lkdGg9e1sxLCAxLCAzNzBdfSBtdD17WzAsIDAsIDQ0XX0gb3JkZXI9e1stMSwgLTEsIDBdfSAvPjtcbmNvbnN0IFN0ZXBDb250ZW50ID0gKHsgLi4ucHJvcHMgfSkgPT4gPEJveCBpcz1cInVsXCIgey4uLnByb3BzfSBteD17W1wiYXV0b1wiLCBcImF1dG9cIiwgXCJub25lXCJdfSBmb250U2l6ZT17MTh9IC8+O1xuY29uc3QgU3RlcEl0ZW0gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogeyBjaGlsZHJlbjogc3RyaW5nfSkgPT4gKFxuICA8Qm94IGlzPVwibGlcIiB3aWR0aD17W1wiaW5pdGlhbFwiLCBcIjYwJVwiLCBcIjEwMCVcIl19IG14PXtbXCI1JVwiLCBcIjIwJVwiLCAwXX0gbXk9ezEyfSB7Li4ucHJvcHN9PlxuICAgIDxGbGV4PlxuICAgICAgPEdyZWVuQ2hlY2sgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPXsyMX0+e2NoaWxkcmVufTwvVGV4dD5cbiAgICA8L0ZsZXg+XG4gIDwvQm94PlxuKTtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoe1xuICB0aGVtZSxcbn06IElQcm9wcykgPT4gKFxuICA8UmVsYXRpdmUgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICA8QWJzb2x1dGUgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiOTklXCIgfX0gekluZGV4PXstMX0+PEJhY2tncm91bmRCbHVlIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiAvPjwvQWJzb2x1dGU+XG4gICAgPEFic29sdXRlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjk5JVwiIH19IHpJbmRleD17LTF9PjxCYWNrZ3JvdW5kR3JleSBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgLz48L0Fic29sdXRlPlxuICAgIDxDb250YWluZXIgcHQ9ezUwfSBtYXhXaWR0aD17MTEwMH0+XG4gICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17MzR9IGZvbnRTaXplPXtbMjUsIDMwXX0gY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICBTZXR1cCB5b3VyIHRlYW1zIG9uLWJvYXJkaW5nIHByb2Nlc3MgZGlyZWN0bHkgdGhyb3VnaCBHaXRIdWJcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCb3ggbXQ9ezM0fSBtYj17MzR9PlxuICAgICAgICA8U3RlcEZsZXg+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2JvYXJkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFN0ZXBDb250YWluZXIgbWw9e1swLCAwLCAzMF19PlxuICAgICAgICAgICAgPFN0ZXBDb250ZW50PlxuICAgICAgICAgICAgICA8U3RlcEl0ZW0+NSBtaW51dGUgc2V0dXAuPC9TdGVwSXRlbT5cbiAgICAgICAgICAgICAgPFN0ZXBJdGVtPlVzZXMgYSBmYW1pbGlhciBHaXRIdWIgaXNzdWUgYm9hcmQgZm9yIHlvdXIgb24tYm9hcmRpbmcgc2V0dXA8L1N0ZXBJdGVtPlxuICAgICAgICAgICAgICA8U3RlcEl0ZW0+QXV0b21hdGljYWxseSBpbnRlZ3JhdGVzIHlvdXIgdGVhbSBtZW1iZXJzIGZyb20geW91ciBvcmdhbml6YXRpb248L1N0ZXBJdGVtPlxuICAgICAgICAgICAgICA8U3RlcEl0ZW0+UHJvdmlkZXMgYSBzZXQgb2YgcHJlLWRlZmluZWQgb24tYm9hcmRpbmcgYmVzdCBwcmFjdGljZXMgZm9yIHlvdTwvU3RlcEl0ZW0+XG4gICAgICAgICAgICA8L1N0ZXBDb250ZW50PlxuICAgICAgICAgIDwvU3RlcENvbnRhaW5lcj5cbiAgICAgICAgPC9TdGVwRmxleD5cbiAgICAgIDwvQm94PlxuICAgICAgPFN1YnNjcmliZU1haWxpbmdMaXN0IC8+XG4gICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17MjB9IG1iPXs0NX0gY29sb3I9e3RoZW1lLmNvbG9ycy5wcmltYXJ5Mn0+XG4gICAgICAgIC1Db21pbmcgdGhpcyBTZXB0ZW1iZXItXG4gICAgICA8L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gIDwvUmVsYXRpdmU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTGFuZGluZ1BhZ2UpO1xuIiwiaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL2xhbmRpbmdQYWdlXCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBMYW5kaW5nUGFnZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBmcm9tIFwiLi9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGhlbWU6IElUaGVtZTtcbn1cblxuY29uc3QgUHJpbWFyeUxheW91dCA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aGVtZSxcbn06IElQcm9wcykgPT4gKFxuICA8UHJpbWFyeUxheW91dEVycm9yQm91bmRhcnk+XG4gICAgPFJvb3Qgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fSBjb2xvcj17dGhlbWUuY29sb3JzLmdyZXl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUm9vdD5cbiAgPC9QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShQcmltYXJ5TGF5b3V0KTtcbiIsImltcG9ydCBQcmltYXJ5TGF5b3V0IGZyb20gXCIuL3ByaW1hcnlMYXlvdXRcIjtcblxuY29uc3QgUHJpbWFyeUxheW91dENvbnRhaW5lciA9IFByaW1hcnlMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcmltYXJ5TGF5b3V0Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dENvbnRhaW5lcjtcbiIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNsYXNzIFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAvLyBjb21wb25lbnREaWRDYXRjaCgpIHtcbiAgLy8gICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvZXJyb3IvNTAwJyk7XG4gIC8vIH1cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZTxJUHJvcHMsIElQcm9wcz4oXG4gIHdpdGhSb3V0ZXIsXG4pKFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5KTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggNjcwZDkzMzQ5ZDM3MzJjMzMyOWUyODg3YTM3NDNlZDRcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBzZWxlY3RPcmdhbml6YXRpb25Db250YWluZXJRdWVyeVZhcmlhYmxlcyA9IHt8fH07XG5leHBvcnQgdHlwZSBzZWxlY3RPcmdhbml6YXRpb25Db250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK29yZ2FuaXphdGlvbnM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICtuYW1lOiBzdHJpbmcsXG4gICAgK2F2YXRhclVybDogc3RyaW5nLFxuICB8fT5cbnx9O1xuZXhwb3J0IHR5cGUgc2VsZWN0T3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IHNlbGVjdE9yZ2FuaXphdGlvbkNvbnRhaW5lclF1ZXJ5VmFyaWFibGVzLFxuICByZXNwb25zZTogc2VsZWN0T3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgc2VsZWN0T3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnkge1xuICBvcmdhbml6YXRpb25zIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICBhdmF0YXJVcmxcbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc1wiLFxuICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgIFwiYXJnc1wiOiBudWxsLFxuICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhdmF0YXJVcmxcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJzZWxlY3RPcmdhbml6YXRpb25Db250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHNlbGVjdE9yZ2FuaXphdGlvbkNvbnRhaW5lclF1ZXJ5IHtcXG4gIG9yZ2FuaXphdGlvbnMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIGF2YXRhclVybFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJzZWxlY3RPcmdhbml6YXRpb25Db250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogdjBcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInNlbGVjdE9yZ2FuaXphdGlvbkNvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MFxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnNTcyODIyODRhMDM5YmZkMTc3ODQ5NTg0YWRmNzFjZmEnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCAwY2M0OWI0MjJhZWYyNGNmMjQ4YzcyNDllNGFjYzc3Y1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmV4cG9ydCB0eXBlIFNldE9uYm9hcmRpbmdNZW1iZXJzSW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBtZW1iZXJJZHM6ICRSZWFkT25seUFycmF5PD9udW1iZXI+LFxufTtcbmV4cG9ydCB0eXBlIHNldE9uYm9hcmRpbmdNZW1iZXJzTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogU2V0T25ib2FyZGluZ01lbWJlcnNJbnB1dFxufH07XG5leHBvcnQgdHlwZSBzZXRPbmJvYXJkaW5nTWVtYmVyc011dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArc2V0T25ib2FyZGluZ01lbWJlcnM6ID97fFxuICAgICtjbGllbnRNdXRhdGlvbklkOiA/c3RyaW5nXG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIHNldE9uYm9hcmRpbmdNZW1iZXJzTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IHNldE9uYm9hcmRpbmdNZW1iZXJzTXV0YXRpb25WYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBzZXRPbmJvYXJkaW5nTWVtYmVyc011dGF0aW9uUmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIHNldE9uYm9hcmRpbmdNZW1iZXJzTXV0YXRpb24oXG4gICRpbnB1dDogU2V0T25ib2FyZGluZ01lbWJlcnNJbnB1dCFcbikge1xuICBzZXRPbmJvYXJkaW5nTWVtYmVycyhpbnB1dDogJGlucHV0KSB7XG4gICAgY2xpZW50TXV0YXRpb25JZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJTZXRPbmJvYXJkaW5nTWVtYmVyc0lucHV0IVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgXCJuYW1lXCI6IFwic2V0T25ib2FyZGluZ01lbWJlcnNcIixcbiAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICBcImFyZ3NcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgICAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgICAgIFwidHlwZVwiOiBcIlNldE9uYm9hcmRpbmdNZW1iZXJzSW5wdXQhXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU2V0T25ib2FyZGluZ01lbWJlcnNQYXlsb2FkXCIsXG4gICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJjbGllbnRNdXRhdGlvbklkXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwic2V0T25ib2FyZGluZ01lbWJlcnNNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIHNldE9uYm9hcmRpbmdNZW1iZXJzTXV0YXRpb24oXFxuICAkaW5wdXQ6IFNldE9uYm9hcmRpbmdNZW1iZXJzSW5wdXQhXFxuKSB7XFxuICBzZXRPbmJvYXJkaW5nTWVtYmVycyhpbnB1dDogJGlucHV0KSB7XFxuICAgIGNsaWVudE11dGF0aW9uSWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwic2V0T25ib2FyZGluZ01lbWJlcnNNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogdjFcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInNldE9uYm9hcmRpbmdNZW1iZXJzTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYxXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc4YjM0MjM3MjgzNWM3NTdlOGI4ZjUyOTk0N2EzZTYyMCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgeyBGbGV4IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2UsIFN1YmhlYWQsIFRleHQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tIFwiLi4vc2hhcmVkL2J1dHRvbi9saW5rQnV0dG9uXCI7XG5pbXBvcnQgeyBJTWVtYmVyIH0gZnJvbSBcIi4vc2VsZWN0VGVhbU1lbWJlcnNcIjtcbmltcG9ydCB7IGNhcmRNYXJnaW4sIG5hbWVNYXJnaW4sIFNlbGVjdENhcmQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICBvcmdhbml6YXRpb25zOiBJT3JnYW5pemF0aW9uW107XG4gIHNlbGVjdGVkT3JnYW5pemF0aW9uSWQ6IHN0cmluZyB8IG51bGw7XG4gIHNlbGVjdE9yZ2FuaXphdGlvbjogKG9yZ2FuaXphdGlvbjogSU9yZ2FuaXphdGlvbikgPT4gdm9pZDtcbn1cblxuY29uc3QgU2VsZWN0T3JnYW5pemF0aW9uID0gKHtcbiAgb3JnYW5pemF0aW9ucyxcbiAgc2VsZWN0ZWRPcmdhbml6YXRpb25JZCxcbiAgc2VsZWN0T3JnYW5pemF0aW9uLFxufTogSVByb3BzKSA9PiAoXG4gIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgcHQ9ezMwfT5cbiAgICA8VGV4dCBteT17MzB9PlxuICAgICAgU2VsZWN0IHRoZSBvcmdhbml6YXRpb24gdGhhdCB5b3Ugd2FudCB0byBzdGFydCBvbmJvYXJkaW5nIGZvci5cbiAgICA8L1RleHQ+XG4gICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICB7b3JnYW5pemF0aW9ucy5tYXAoKG9yZ2FuaXphdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IG9yZ2FuaXphdGlvbi5pZCA9PT0gc2VsZWN0ZWRPcmdhbml6YXRpb25JZDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGbGV4IGtleT17b3JnYW5pemF0aW9uLmlkfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFNlbGVjdENhcmRcbiAgICAgICAgICAgICAga2V5PXtvcmdhbml6YXRpb24uaWR9XG4gICAgICAgICAgICAgIG09e2NhcmRNYXJnaW59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbGVjdE9yZ2FuaXphdGlvbihvcmdhbml6YXRpb24pfVxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2Ugd2lkdGg9ezIwMH0gc3JjPXtvcmdhbml6YXRpb24uYXZhdGFyVXJsfSByYXRpbz17MX0gLz5cbiAgICAgICAgICAgICAgPFN1YmhlYWQgdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9e25hbWVNYXJnaW59Pntvcmdhbml6YXRpb24ubmFtZX08L1N1YmhlYWQ+XG4gICAgICAgICAgICA8L1NlbGVjdENhcmQ+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9GbGV4PlxuICAgIDxMaW5rQnV0dG9uXG4gICAgICB0bz17YC9zZWxlY3QvdGVhbU1lbWJlcnM/b3JnYW5pemF0aW9uSWQ9JHtzZWxlY3RlZE9yZ2FuaXphdGlvbklkfWB9XG4gICAgICBteD1cImF1dG9cIlxuICAgICAgbXQ9ezUwfVxuICAgICAgZm9udFNpemU9ezI1fVxuICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICA+XG4gICAgICBDb250aW51ZVxuICAgIDwvTGlua0J1dHRvbj5cbiAgPC9GbGV4PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0T3JnYW5pemF0aW9uO1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFN0YXRlSGFuZGxlcnMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5cbmltcG9ydCBTZWxlY3RPcmdhbml6YXRpb24sIHsgSU9yZ2FuaXphdGlvbiwgSVByb3BzIH0gZnJvbSBcIi4vc2VsZWN0T3JnYW5pemF0aW9uXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgc2VsZWN0T3JnYW5pemF0aW9uQ29udGFpbmVyUXVlcnkge1xuICAgIG9yZ2FuaXphdGlvbnMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGF2YXRhclVybFxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNlbGVjdGVkT3JnYW5pemF0aW9uSWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IHN0YXRlSGFuZGxlcnMgPSB7XG4gIHNlbGVjdE9yZ2FuaXphdGlvbjogKHsgc2VsZWN0ZWRPcmdhbml6YXRpb25JZCB9OiBJU3RhdGUpID0+IChvcmdhbml6YXRpb246IElPcmdhbml6YXRpb24pID0+ICh7XG4gICAgc2VsZWN0ZWRPcmdhbml6YXRpb25JZDogc2VsZWN0ZWRPcmdhbml6YXRpb25JZCA/IG51bGwgOiBvcmdhbml6YXRpb24uaWQsXG4gIH0pLFxufTtcblxuY29uc3QgQ29tcG9uZW50ID0gY29tcG9zZShcbiAgd2l0aFN0YXRlSGFuZGxlcnM8SVN0YXRlLCB7fT4oe1xuICAgIHNlbGVjdGVkT3JnYW5pemF0aW9uSWQ6IG51bGwsXG4gIH0sIHN0YXRlSGFuZGxlcnMpLFxuKShTZWxlY3RPcmdhbml6YXRpb24pO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIHF1ZXJ5LFxuICBDb21wb25lbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBGbGV4IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2UsIFN1YmhlYWQsIFRleHQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9zaGFyZWQvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuL3NlbGVjdE9yZ2FuaXphdGlvblwiO1xuaW1wb3J0IHsgY2FyZE1hcmdpbiwgbmFtZU1hcmdpbiwgU2VsZWN0Q2FyZCB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gIG9yZ2FuaXphdGlvbjogSU9yZ2FuaXphdGlvbjtcbiAgc2VsZWN0VGVhbU1lbWJlcjogKHRlYW1NZW1iZXI6IElNZW1iZXIpID0+IHZvaWQ7XG4gIHByb2NlZWQ6ICgpID0+IHZvaWQ7XG4gIHNlbGVjdGVkVGVhbU1lbWJlcnM6IElNZW1iZXJbXTtcbn1cblxuY29uc3QgU2VsZWN0VGVhbU1lbWJlcnMgPSAoe1xuICBvcmdhbml6YXRpb24sXG4gIHNlbGVjdFRlYW1NZW1iZXIsXG4gIHByb2NlZWQsXG4gIHNlbGVjdGVkVGVhbU1lbWJlcnMsXG59OiBJUHJvcHMpID0+IChcbiAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwdD17MzB9PlxuICAgIDxUZXh0IG15PXszMH0+XG4gICAgICBTZWxlY3QgeW91ciB0ZWFtIG1lbWJlcnMgdGhhdCB5b3Ugd2FudCB0byBzdGFydCBvbmJvYXJkaW5nIGZvciA8VGV4dCBpcz1cInNwYW5cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICB7b3JnYW5pemF0aW9uLm5hbWV9XG4gICAgICA8L1RleHQ+LlxuICAgIDwvVGV4dD5cbiAgICA8RmxleCBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgIHtvcmdhbml6YXRpb24ubWVtYmVycy5tYXAoKG1lbWJlcikgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkVGVhbU1lbWJlcnMuc29tZSgoc2VsZWN0ZWRUZWFtTWVtYmVyKSA9PiBzZWxlY3RlZFRlYW1NZW1iZXIuaWQgPT09IG1lbWJlci5pZCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U2VsZWN0Q2FyZFxuICAgICAgICAgICAga2V5PXttZW1iZXIuaWR9XG4gICAgICAgICAgICBtPXtjYXJkTWFyZ2lufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VsZWN0VGVhbU1lbWJlcihtZW1iZXIpfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2Ugd2lkdGg9ezIwMH0gc3JjPXttZW1iZXIuYXZhdGFyVXJsfSByYXRpbz17MX0gLz5cbiAgICAgICAgICAgIDxTdWJoZWFkIHRleHRBbGlnbj1cImNlbnRlclwiIG10PXtuYW1lTWFyZ2lufT57bWVtYmVyLm5hbWV9PC9TdWJoZWFkPlxuICAgICAgICAgIDwvU2VsZWN0Q2FyZD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvRmxleD5cbiAgICA8QnV0dG9uIG14PVwiYXV0b1wiIG10PXs1MH0gZm9udFNpemU9ezI1fSBkaXNwbGF5PVwiYmxvY2tcIiBvbkNsaWNrPXtwcm9jZWVkfT5cbiAgICAgIENvbnRpbnVlXG4gICAgPC9CdXR0b24+XG4gIDwvRmxleD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFRlYW1NZW1iZXJzO1xuIiwiXG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoSGFuZGxlcnMsIHdpdGhTdGF0ZUhhbmRsZXJzIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5pbXBvcnQgc2VsZWN0VGVhbU1lbWJlcnMsIHsgSU1lbWJlciB9IGZyb20gXCIuL3NlbGVjdFRlYW1NZW1iZXJzXCI7XG5pbXBvcnQgc2V0T25ib2FyZGluZ01lbWJlcnNNdXRhdGlvbiBmcm9tIFwiLi9zZXRPbmJvYXJkaW5nTWVtYmVyc011dGF0aW9uXCI7XG5cbi8vIGNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbi8vICAgcXVlcnkgc2VsZWN0VGVhbU1lbWJlcnNDb250YWluZXJRdWVyeShcbi8vICAgICAkb3JnYW5pemF0aW9uSWQ6IElEIVxuLy8gICApIHtcbi8vICAgICBub2RlKFxuLy8gICAgICAgaWQ6ICRvcmdhbml6YXRpb25JZFxuLy8gICAgICkge1xuLy8gICAgICAgbmFtZVxuLy8gICAgICAgbWVtYmVycyB7XG4vLyAgICAgICAgIGlkXG4vLyAgICAgICAgIG5hbWVcbi8vICAgICAgICAgYXZhdGFyVXJsXG4vLyAgICAgICAgIGlzQmVpbmdPbmJvYXJkZWRcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzZWxlY3RlZFRlYW1NZW1iZXJzOiBJTWVtYmVyW107XG59XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBwcm9jZWVkOiAoeyByb3V0ZXIsIHNlbGVjdGVkVGVhbU1lbWJlcnMgfTogSVN0YXRlKSA9PiAoKSA9PiB7XG4gICAgc2V0T25ib2FyZGluZ01lbWJlcnNNdXRhdGlvbih7IG1lbWJlcklkczogc2VsZWN0ZWRUZWFtTWVtYmVycy5tYXAoKHgpID0+IHguaWQpIH0pO1xuXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9XG59O1xuXG5jb25zdCBzdGF0ZUhhbmRsZXJzID0ge1xuICBzZWxlY3RUZWFtTWVtYmVyOiAoeyBzZWxlY3RlZFRlYW1NZW1iZXJzIH06IElTdGF0ZSkgPT4gKHRlYW1NZW1iZXI6IElNZW1iZXIpID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1RlYW1NZW1iZXJJbmRleCA9IHNlbGVjdGVkVGVhbU1lbWJlcnMuZmluZEluZGV4KFxuICAgICAgKHNlbGVjdGVkVGVhbU1lbWJlcikgPT4gc2VsZWN0ZWRUZWFtTWVtYmVyLmlkID09PSB0ZWFtTWVtYmVyLmlkXG4gICAgKTtcbiAgICBjb25zdCBuZXdTZWxlY3RlZFRlYW1NZW1iZXJzID0gWy4uLnNlbGVjdGVkVGVhbU1lbWJlcnNdO1xuXG4gICAgaWYgKGV4aXN0aW5nVGVhbU1lbWJlckluZGV4ID09PSAtMSkge1xuICAgICAgbmV3U2VsZWN0ZWRUZWFtTWVtYmVycy5wdXNoKHRlYW1NZW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTZWxlY3RlZFRlYW1NZW1iZXJzLnNwbGljZShleGlzdGluZ1RlYW1NZW1iZXJJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2VsZWN0ZWRUZWFtTWVtYmVyczogbmV3U2VsZWN0ZWRUZWFtTWVtYmVycyB9O1xuICB9LFxufTtcblxuY29uc3QgQ29tcG9uZW50ID0gY29tcG9zZShcbiAgd2l0aFN0YXRlSGFuZGxlcnM8SVN0YXRlLCB7fT4oe1xuICAgIHNlbGVjdGVkVGVhbU1lbWJlcnM6IFtdLFxuICB9LCBzdGF0ZUhhbmRsZXJzKSxcbiAgd2l0aEhhbmRsZXJzKGhhbmRsZXJzKSxcbikoc2VsZWN0VGVhbU1lbWJlcnMpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBzZXRPbmJvYXJkaW5nTWVtYmVyc011dGF0aW9uKFxuICAgICRpbnB1dDogU2V0T25ib2FyZGluZ01lbWJlcnNJbnB1dCFcbiAgKSB7XG4gICAgc2V0T25ib2FyZGluZ01lbWJlcnMoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgY2xpZW50TXV0YXRpb25JZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIG1lbWJlcklkczogbnVtYmVyW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IChpbnB1dDogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElTdHlsZVByb3BzIHtcbiAgdGhlbWU6IElUaGVtZTtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0Q2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7KHsgc2VsZWN0ZWQsIHRoZW1lIH06IElTdHlsZVByb3BzKSA9PiBzZWxlY3RlZCAmJiBgXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlZWUsIDAgMCA3cHggM3B4ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGNhcmRNYXJnaW4gPSAxMTtcbmV4cG9ydCBjb25zdCBuYW1lTWFyZ2luID0gNztcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMzEzMmM1YmY5NTJjZjk4Y2ZlYzBjNTliZjA2ZmY2ZmJcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBzZXR1cENhbGxiYWNrQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICBjb2RlOiBzdHJpbmcsXG4gIHN0YXRlOiBzdHJpbmcsXG58fTtcbmV4cG9ydCB0eXBlIHNldHVwQ2FsbGJhY2tDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK3NldHVwQ2FsbGJhY2s6IGJvb2xlYW5cbnx9O1xuZXhwb3J0IHR5cGUgc2V0dXBDYWxsYmFja0NvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBzZXR1cENhbGxiYWNrQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBzZXR1cENhbGxiYWNrQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgc2V0dXBDYWxsYmFja0NvbnRhaW5lclF1ZXJ5KFxuICAkY29kZTogU3RyaW5nIVxuICAkc3RhdGU6IFN0cmluZyFcbikge1xuICBzZXR1cENhbGxiYWNrKGNvZGU6ICRjb2RlLCBzdGF0ZTogJHN0YXRlKVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImNvZGVcIixcbiAgICBcInR5cGVcIjogXCJTdHJpbmchXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9LFxuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcInN0YXRlXCIsXG4gICAgXCJ0eXBlXCI6IFwiU3RyaW5nIVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgXCJuYW1lXCI6IFwic2V0dXBDYWxsYmFja1wiLFxuICAgIFwiYXJnc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcImNvZGVcIixcbiAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJjb2RlXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIlN0cmluZyFcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICBcInR5cGVcIjogXCJTdHJpbmchXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcInNldHVwQ2FsbGJhY2tDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHNldHVwQ2FsbGJhY2tDb250YWluZXJRdWVyeShcXG4gICRjb2RlOiBTdHJpbmchXFxuICAkc3RhdGU6IFN0cmluZyFcXG4pIHtcXG4gIHNldHVwQ2FsbGJhY2soY29kZTogJGNvZGUsIHN0YXRlOiAkc3RhdGUpXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInNldHVwQ2FsbGJhY2tDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogdjFcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInNldHVwQ2FsbGJhY2tDb250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogdjFcbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzVkNGVlMjRjMmU2ZTE5M2ExYTZlOTBhZTgyOTcyOTU0Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggZWE3NDQ0YjNiYjhjODUyNjUzZjYzNWE4MzQ4OGUzZmZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBzZXR1cENvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3x8fTtcbmV4cG9ydCB0eXBlIHNldHVwQ29udGFpbmVyUXVlcnlSZXNwb25zZSA9IHt8XG4gICtzZXR1cDogP3N0cmluZ1xufH07XG5leHBvcnQgdHlwZSBzZXR1cENvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBzZXR1cENvbnRhaW5lclF1ZXJ5VmFyaWFibGVzLFxuICByZXNwb25zZTogc2V0dXBDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBzZXR1cENvbnRhaW5lclF1ZXJ5IHtcbiAgc2V0dXBcbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgXCJhbGlhc1wiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcInNldHVwXCIsXG4gICAgXCJhcmdzXCI6IG51bGwsXG4gICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgfVxuXTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwic2V0dXBDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHNldHVwQ29udGFpbmVyUXVlcnkge1xcbiAgc2V0dXBcXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwic2V0dXBDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogdjBcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInNldHVwQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc4YmExMTA3ODJlNWEyMDYwOGUwMWI3NjEzNTJiODcyNic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgeyBGbGV4IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFRleHQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiLi4vLi4vd3d3cm9vdC9hc3NldHMvZ2l0SHViLnN2Z1wiO1xuaW1wb3J0IEFuY2hvckJ1dHRvbiBmcm9tIFwiLi4vc2hhcmVkL2J1dHRvbi9hbmNob3JCdXR0b25cIjtcblxuY29uc3QgQ3VzdG9tR2l0SHViSWNvbiA9IHN0eWxlZChHaXRIdWJJY29uKWBcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmlsbDogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB1cmw6IHN0cmluZztcbn1cblxuY29uc3QgU2V0dXAgPSAoe1xuICB1cmwsXG59OiBJUHJvcHMpID0+IChcbiAgPENvbnRhaW5lciBtdD17MTMwfT5cbiAgICA8VGV4dCBtYj17MjB9IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPVwiY2VudGVyXCI+SW5zdGFsbCB3aXRoIEdpdEh1YiB0byB1c2Ugb25ib2FyZG9yPC9UZXh0PlxuICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICA8QW5jaG9yQnV0dG9uXG4gICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDdXN0b21HaXRIdWJJY29uIC8+XG4gICAgICAgIEluc3RhbGwgb25ib2FyZG9yXG4gICAgICA8L0FuY2hvckJ1dHRvbj5cbiAgICA8L0ZsZXg+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XG4iLCJpbXBvcnQgeyBSZWRpcmVjdEV4Y2VwdGlvbiB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuXG5pbXBvcnQgeyBJTWF0Y2gsIElSb3V0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IHNldHVwQ2FsbGJhY2tDb250YWluZXJRdWVyeShcbiAgICAkY29kZTogU3RyaW5nIVxuICAgICRzdGF0ZTogU3RyaW5nIVxuICApIHtcbiAgICBzZXR1cENhbGxiYWNrKFxuICAgICAgY29kZTogJGNvZGVcbiAgICAgIHN0YXRlOiAkc3RhdGVcbiAgICApXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcHJlcGFyZVZhcmlhYmxlczogKF86IGFueSwgeyBsb2NhdGlvbiB9OiBJTWF0Y2gpID0+ICh7XG4gICAgY29kZTogbG9jYXRpb24ucXVlcnkuY29kZSxcbiAgICBzdGF0ZTogbG9jYXRpb24ucXVlcnkuc3RhdGUsXG4gIH0pLFxuICBxdWVyeSxcbiAgcmVuZGVyOiAocm91dGU6IElSb3V0ZSk6IG51bGwgPT4ge1xuICAgIGlmIChyb3V0ZS5wcm9wcykge1xuICAgICAgaWYgKHJvdXRlLnByb3BzLnNldHVwQ2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgcmVkaXJlY3RVcmwgPSByb3V0ZS5tYXRjaC5sb2NhdGlvbi5xdWVyeS5yZWRpcmVjdFVybDtcblxuICAgICAgICBpZiAocmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0VXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBSZWRpcmVjdEV4Y2VwdGlvbihcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuXG5pbXBvcnQgeyBJTWF0Y2gsIElSb3V0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFNldHVwIGZyb20gXCIuL3NldHVwXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgc2V0dXBDb250YWluZXJRdWVyeSB7XG4gICAgc2V0dXBcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBxdWVyeSxcbiAgcmVuZGVyOiAocm91dGU6IElSb3V0ZSk6IFJlYWN0LlJlYWN0Tm9kZSA9PiByb3V0ZS5wcm9wcyAmJiA8U2V0dXAgdXJsPXtyb3V0ZS5wcm9wcy5zZXR1cH0gLz4sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmxvY2tMaW5rLCBMaW5rUHJvcHMgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgc3R5bGVkLCB7IHdpdGhUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSVRoZW1lIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBMaW5rUHJvcHMge1xuICB0aGVtZTogSVRoZW1lO1xufVxuXG5jb25zdCBBbmNob3JCdXR0b24gPSBzdHlsZWQoKHsgdGhlbWUsIC4uLnByb3BzIH06IElQcm9wcykgPT5cbiAgPEJsb2NrTGluayB7Li4ucHJvcHN9IHA9ezE1fSBjb2xvcj1cIndoaXRlXCIgYmc9e3RoZW1lLmNvbG9ycy5wcmltYXJ5fSAvPilgXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShBbmNob3JCdXR0b24pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIGFzIFJlYmFzc0J1dHRvbiwgQnV0dG9uUHJvcHMgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyByZW5hbWVQcm9wIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHN0eWxlZCwgeyB3aXRoVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElUaGVtZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMge1xuICBhcHBUaGVtZTogSVRoZW1lO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZCgoeyBhcHBUaGVtZSwgLi4ucHJvcHMgfTogSVByb3BzKSA9PlxuICA8UmViYXNzQnV0dG9uIGJnPXthcHBUaGVtZS5jb2xvcnMucHJpbWFyeX0gey4uLnByb3BzfSAvPilgXG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogaW5pdGlhbDtcbiAgfVxuICAmOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZTx7fSwgSVByb3BzPihcbiAgd2l0aFRoZW1lLFxuICByZW5hbWVQcm9wKFwidGhlbWVcIiwgXCJhcHBUaGVtZVwiKSxcbikoQnV0dG9uKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmFtZVByb3AgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCBzdHlsZWQsIHsgd2l0aFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IElUaGVtZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSVN0eWxlUHJvcHMge1xuICB0aGVtZTogSVRoZW1lO1xufVxuY29uc3QgQ3VzdG9tTGluayA9IHN0eWxlZChMaW5rKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBJU3R5bGVQcm9wcykgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFRoZW1lLFxuKShDdXN0b21MaW5rKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHN1Ym1pdFN1Y2NlZWRlZDogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgc3VibWl0U3VjY2VlZGVkTWVzc2FnZTogUmVhY3QuUmVhY3ROb2RlO1xuICBvblN1Ym1pdDogKGU6IGFueSkgPT4gdm9pZDtcbn1cblxuY29uc3QgRm9ybSA9ICh7XG4gIHN1Ym1pdFN1Y2NlZWRlZCxcbiAgc3VibWl0U3VjY2VlZGVkTWVzc2FnZSxcbiAgY2hpbGRyZW4sXG4gIG9uU3VibWl0LFxufTogSVByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAge3N1Ym1pdFN1Y2NlZWRlZCA/IChcbiAgICAgIHN1Ym1pdFN1Y2NlZWRlZE1lc3NhZ2VcbiAgICApIDogKFxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICBhY3Rpb249XCJcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Zvcm0+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCAyN2ZhYjdhN2ViNzk5NTc0N2M0ZmI0MzY1MGJjOThiZVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmV4cG9ydCB0eXBlIFN1YnNjcmliZU1haWxpbmdMaXN0SW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBlbWFpbDogc3RyaW5nLFxuICByZWNhcHRjaGE6IHN0cmluZyxcbn07XG5leHBvcnQgdHlwZSBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uVmFyaWFibGVzID0ge3xcbiAgaW5wdXQ6IFN1YnNjcmliZU1haWxpbmdMaXN0SW5wdXRcbnx9O1xuZXhwb3J0IHR5cGUgc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK3N1YnNjcmliZU1haWxpbmdMaXN0OiA/e3xcbiAgICArY2xpZW50TXV0YXRpb25JZDogP3N0cmluZ1xuICB8fVxufH07XG5leHBvcnQgdHlwZSBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvblJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uKFxuICAkaW5wdXQ6IFN1YnNjcmliZU1haWxpbmdMaXN0SW5wdXQhXG4pIHtcbiAgc3Vic2NyaWJlTWFpbGluZ0xpc3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGNsaWVudE11dGF0aW9uSWRcbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3Vic2NyaWJlTWFpbGluZ0xpc3RJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgXCJhbGlhc1wiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcInN1YnNjcmliZU1haWxpbmdMaXN0XCIsXG4gICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgXCJhcmdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgICAgICBcInR5cGVcIjogXCJTdWJzY3JpYmVNYWlsaW5nTGlzdElucHV0IVwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1YnNjcmliZU1haWxpbmdMaXN0UGF5bG9hZFwiLFxuICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiY2xpZW50TXV0YXRpb25JZFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcInN1YnNjcmliZU1haWxpbmdMaXN0TXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uKFxcbiAgJGlucHV0OiBTdWJzY3JpYmVNYWlsaW5nTGlzdElucHV0IVxcbikge1xcbiAgc3Vic2NyaWJlTWFpbGluZ0xpc3QoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBjbGllbnRNdXRhdGlvbklkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInN1YnNjcmliZU1haWxpbmdMaXN0TXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYxXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnYjc3NzQ3MDVhNTIyYzYxZWFjMjg2YjBiYTRmNDZjOTknO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IHsgQm94LCBGbGV4IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWJzb2x1dGUsIFJlbGF0aXZlLCBMYWJlbCwgVGV4dCB9IGZyb20gXCJyZWJhc3NcIjtcclxuaW1wb3J0IHsgRmllbGQsIEluamVjdGVkRm9ybVByb3BzIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcclxuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gXCIuLi9pbnB1dHMvY3JlYXRlRmllbGRWYWxpZGF0b3JcIjtcclxuaW1wb3J0IEVtYWlsSWNvbiBmcm9tIFwiLi4vLi4vLi4vd3d3cm9vdC9hc3NldHMvZW1haWwtZ3JlZW4uc3ZnXCI7XHJcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBJU3R5bGVQcm9wcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIjtcclxuaW1wb3J0IEZpZWxkSW5wdXQgZnJvbSBcIi4uL2lucHV0cy9maWVsZElucHV0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSW5qZWN0ZWRGb3JtUHJvcHMsIElTdHlsZVByb3BzIHtcclxuICBvblN1Ym1pdDogKGU6IGFueSkgPT4gdm9pZDtcclxuICBzZXRSZWNhcHRjaGE6ICgpID0+IFJlQ0FQVENIQTtcclxuICByZWNhcHRjaGE6IFJlQ0FQVENIQTtcclxufVxyXG5cclxuY29uc3QgU3VibWl0U3VjY2VlZGVkTWVzc2FnZSA9ICgpID0+IDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPXsxOH0gY29sb3I9XCJ3aGl0ZVwiPlRoYW5rIHlvdSBmb3Igc3Vic2NyaWJpbmcuIFdlIHdpbGwgdXBkYXRlIHlvdSBvbmNlIHdlIGFyZSBsaXZlITwvVGV4dD47XHJcblxyXG5jb25zdCBlbWFpbFZhbGlkYXRvciA9IGNyZWF0ZUZpZWxkVmFsaWRhdG9yKFtcInJlcXVpcmVkXCIsIFwiZW1haWxcIl0pO1xyXG5cclxuY29uc3QgU3Vic2NyaWJlTWFpbGluZ0xpc3QgPSAoe1xyXG4gIGhhbmRsZVN1Ym1pdCxcclxuICBvblN1Ym1pdCxcclxuICBzZXRSZWNhcHRjaGEsXHJcbiAgcmVjYXB0Y2hhLFxyXG4gIHN1Ym1pdFN1Y2NlZWRlZCxcclxufTogSVByb3BzKSA9PiAoXHJcbiAgPEJveCBteD1cImF1dG9cIj5cclxuICAgIDxGb3JtXHJcbiAgICAgIHN1Ym1pdFN1Y2NlZWRlZD17c3VibWl0U3VjY2VlZGVkfVxyXG4gICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmVjYXB0Y2hhICYmIHJlY2FwdGNoYS5leGVjdXRlKCk7fVxyXG4gICAgICB9XHJcbiAgICAgIHN1Ym1pdFN1Y2NlZWRlZE1lc3NhZ2U9ezxTdWJtaXRTdWNjZWVkZWRNZXNzYWdlIC8+fVxyXG4gICAgPlxyXG4gICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgIDxSZWxhdGl2ZT5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e0ZpZWxkSW5wdXR9XHJcbiAgICAgICAgICAgIHB4PXs2M31cclxuICAgICAgICAgICAgcHk9ezI3fVxyXG4gICAgICAgICAgICBmb250U2l6ZT17MTd9XHJcbiAgICAgICAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsaWRhdGU9e2VtYWlsVmFsaWRhdG9yfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBYnNvbHV0ZSB0b3A9XCI1MCVcIiBsZWZ0PXszMH0gc3R5bGU9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIiB9fT5cclxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIG1iPXswfT5cclxuICAgICAgICAgICAgICA8RW1haWxJY29uIC8+XHJcbiAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8L0Fic29sdXRlPlxyXG4gICAgICAgIDwvUmVsYXRpdmU+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgbWw9ezE1fVxyXG4gICAgICAgICAgZm9udFNpemU9ezE3fVxyXG4gICAgICAgICAgcHg9e1syMCwgNzZdfVxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEpvaW4gTGlzdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxSZUNBUFRDSEFcclxuICAgICAgICByZWY9e3NldFJlY2FwdGNoYX1cclxuICAgICAgICBzaXplPVwiaW52aXNpYmxlXCJcclxuICAgICAgICBzaXRla2V5PXtwcm9jZXNzLmVudi5SRUNBUFRDSEFfU0lURV9LRVkgYXMgc3RyaW5nfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsocmVjYXB0Y2hhKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQoKHByb3BzKSA9PiBvblN1Ym1pdCh7IC4uLnByb3BzLCByZWNhcHRjaGEgfSkpKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICA8L0JveD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTdWJzY3JpYmVNYWlsaW5nTGlzdCk7XHJcbiIsImltcG9ydCB7IGNvbXBvc2UsIHdpdGhIYW5kbGVycywgd2l0aFN0YXRlSGFuZGxlcnMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IFJlQ0FQVENIQSBmcm9tIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYVwiO1xuXG5pbXBvcnQgU3Vic2NyaWJlTWFpbGluZ0xpc3QsIHsgSVByb3BzIH0gZnJvbSBcIi4vc3Vic2NyaWJlTWFpbGluZ0xpc3RcIjtcbmltcG9ydCBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uLCB7IElNdXRhdGlvbklucHV0IH0gZnJvbSBcIi4vc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvblwiO1xuaW1wb3J0IGxvZ0Vycm9ycyBmcm9tIFwiLi4vbG9nRXJyb3JzXCI7XG5cbmNvbnN0IHN0YXRlSGFuZGxlcnMgPSB7XG4gIHNldFJlY2FwdGNoYTogKCkgPT4gKHJlY2FwdGNoYTogUmVDQVBUQ0hBKSA9PiAoe1xuICAgIHJlY2FwdGNoYVxuICB9KSxcbn07XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBvblN1Ym1pdDogKCkgPT4gYXN5bmMgKGlucHV0OiBJTXV0YXRpb25JbnB1dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbihpbnB1dCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0Vycm9ycyhlcnJvcik7XG5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U8SVByb3BzLCB7fT4oXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKG51bGwsIHN0YXRlSGFuZGxlcnMpLFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06IFwic3Vic2NyaWJlTWFpbGluZ0xpc3RcIixcbiAgfSksXG4pKFN1YnNjcmliZU1haWxpbmdMaXN0KTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uKFxuICAgICRpbnB1dDogU3Vic2NyaWJlTWFpbGluZ0xpc3RJbnB1dCFcbiAgKSB7XG4gICAgc3Vic2NyaWJlTWFpbGluZ0xpc3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgY2xpZW50TXV0YXRpb25JZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHJlY2FwdGNoYTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBlbWFpbCwgcmVjYXB0Y2hhIH06IElNdXRhdGlvbklucHV0KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgZW1haWwsXG4gICAgICByZWNhcHRjaGEsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcbiIsImNvbnN0IGRlZmF1bHRFcnJvck1lc3NhZ2VzID0ge1xuICBlbWFpbDogXCJFbWFpbCBtdXN0IGNvbnRhaW4gYW4gJ0AnIGFuZCBhICcuJyB0byBiZSB2YWxpZFwiLFxuICByZXF1aXJlZDogXCJUaGlzIGlucHV0IGlzIHJlcXVpcmVkXCIsXG59O1xuXG5jb25zdCBSVUxFUzogSVJ1bGUgPSB7XG4gIGVtYWlsOiAvLitALitcXC4uKy9pLFxuICByZXF1aXJlZDogKHZhbHVlKSA9PiAoXG4gICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gXCJib29sZWFuXCIgfHwgdmFsdWUgPT09IHRydWUpICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCB2YWx1ZS5sZW5ndGggPiAwKSAmJlxuICAgICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID4gMCkgJiZcbiAgICAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwKVxuICApLFxufTtcblxuaW50ZXJmYWNlIElSdWxlIHtcbiAgZW1haWw6IFJlZ0V4cDtcbiAgcmVxdWlyZWQ6ICh2YWx1ZTogYW55KSA9PiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSU1hdGNoZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRlc3Q6ICh2YWx1ZTogYW55KSA9PiBib29sZWFuO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0TWF0Y2hlciA9IChuYW1lOiBrZXlvZihJUnVsZSksIGVycm9yTWVzc2FnZSA9IGRlZmF1bHRFcnJvck1lc3NhZ2VzW25hbWVdKTogSU1hdGNoZXIgPT4ge1xuICBjb25zdCBydWxlID0gUlVMRVNbbmFtZV07XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBydWxlIGZvciBuYW1lIFwiJHtuYW1lfVwiIGRlZmluZWRgKTtcbiAgfVxuXG4gIGNvbnN0IHRlc3QgPSB0eXBlb2YgcnVsZSA9PT0gXCJmdW5jdGlvblwiID8gcnVsZSA6ICh2YWx1ZTogYW55KSA9PiBydWxlLnRlc3QodmFsdWUpO1xuXG4gIHJldHVybiB7IG5hbWUsIHRlc3QsIGVycm9yTWVzc2FnZSB9O1xufTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdGUgPSAobWF0Y2hlcnM6IElNYXRjaGVyW10sIHZhbHVlOiBhbnkpID0+IHtcbiAgY29uc3QgaW52YWxpZE1hdGNoZXIgPSBtYXRjaGVycy5maW5kKChtYXRjaGVyKSA9PiAhbWF0Y2hlci50ZXN0KHZhbHVlKSk7XG5cbiAgaWYgKCFpbnZhbGlkTWF0Y2hlcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gaW52YWxpZE1hdGNoZXIuZXJyb3JNZXNzYWdlIHx8IHRydWU7XG59O1xuXG50eXBlIHZhbGlkYXRpb24gPSBBcnJheTxrZXlvZihJUnVsZSkgfCB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nLFxuICB9PjtcblxuZXhwb3J0IGRlZmF1bHQgKHZhbGlkYXRpb25zOiB2YWxpZGF0aW9uID0gW10pID0+ICh2YWx1ZTogYW55KSA9PiB7XG4gIGxldCBtYXRjaGVyczogSU1hdGNoZXJbXSA9IFtdO1xuXG4gIHZhbGlkYXRpb25zLmZvckVhY2goKHZhbGlkYXRpb24pID0+IHtcbiAgICBpZiAodmFsaWRhdGlvbiAmJiB0eXBlb2YgdmFsaWRhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdmFsaWRhdGlvbk1hdGNoZXJzID0gZ2V0TWF0Y2hlcih2YWxpZGF0aW9uKTtcblxuICAgICAgbWF0Y2hlcnMgPSBtYXRjaGVycy5jb25jYXQodmFsaWRhdGlvbk1hdGNoZXJzKTtcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24gJiYgdHlwZW9mIHZhbGlkYXRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25NYXRjaGVycyA9IE9iamVjdC5rZXlzKHZhbGlkYXRpb24pLm1hcChcbiAgICAgICAgKHJ1bGVOYW1lOiBrZXlvZihJUnVsZSkpID0+IGdldE1hdGNoZXIocnVsZU5hbWUsIHZhbGlkYXRpb25bcnVsZU5hbWVdKSxcbiAgICAgICk7XG5cbiAgICAgIG1hdGNoZXJzID0gbWF0Y2hlcnMuY29uY2F0KHZhbGlkYXRpb25NYXRjaGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInZhbGlkYXRpb25zIG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIHR5cGUgWydydWxlJ10gb3IgW3sgcnVsZU5hbWU6ICdlcnJvck1lc3NhZ2UnIH1dXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNyZWF0ZVZhbGlkYXRlKG1hdGNoZXJzLCB2YWx1ZSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBXcmFwcGVkRmllbGRQcm9wcyB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkSW5wdXRQcm9wcyB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBXcmFwcGVkRmllbGRQcm9wcywgSUZpZWxkSW5wdXRQcm9wcyB7fVxuXG5jb25zdCBGaWVsZElucHV0ID0gKHtcbiAgaW5wdXQsXG4gIG5hbWUsXG4gIG1ldGEsXG4gIC4uLnByb3BzXG59OiBJUHJvcHMpID0+IChcbiAgPElucHV0XG4gICAgey4uLmlucHV0fVxuICAgIHsuLi5wcm9wc31cbiAgICBuYW1lPXtuYW1lfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRmllbGRJbnB1dDtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgKGVycm9yOiAoRXJyb3IgfCBFcnJvcltdKSkgPT4ge1xuICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJhdmVuID0gKHdpbmRvdyBhcyBhbnkpLlJhdmVuO1xuICAgIGNvbnN0IGVycm9ycyA9IEFycmF5LmlzQXJyYXkoZXJyb3IpID8gZXJyb3IgOiBbZXJyb3JdO1xuXG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIChyYXZlbikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmF2ZW4uY2FwdHVyZU1lc3NhZ2UoZXJyb3IubWVzc2FnZSwgeyBzdGFja1RyYWNlOiBlcnJvci5zdGFjayB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbiIsImNvbnN0IHJhdmVuID0gKHdpbmRvdyBhcyBhbnkpLlJhdmVuO1xyXG5cclxuaWYgKHR5cGVvZiByYXZlbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudi5TRU5UUllfRFNOX0NMSUVOVCkge1xyXG4gIHJhdmVuLmNvbmZpZyhwcm9jZXNzLmVudi5TRU5UUllfRFNOX0NMSUVOVCwge1xyXG4gICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxyXG4gIH0pLmluc3RhbGwoKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvbnRzOiB7XG4gICAgc2FuczogXCJNb250c2VycmF0LCBzYW5zLXNlcmlmXCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgNzY4LFxuICAgIDk5MixcbiAgICAxMjAwXG4gIF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgbm9ybWFsOiA0MDAsXG4gICAgYm9sZDogNjAwXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIGRhcmtHcmV5OiBcIiMyMTIxMjFcIixcbiAgICBlcnJvcjogXCIjZmYzYjNiXCIsXG4gICAgZ3JleTogXCIjNEE0QTRBXCIsXG4gICAgbGlnaHRHcmV5OiBcIiM3MzczNzNcIixcbiAgICBwcmltYXJ5OiBcIiM0M2NlYTJcIixcbiAgICBwcmltYXJ5MjogXCIjMmZkYmFiXCIsXG4gICAgc2Vjb25kYXJ5OiBcIiMzZDlkZmZcIlxuICB9XG59O1xuIiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBzdHlsZXMgPSB7fVxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInN0eWxlc1wiXSk7XG5cbiAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgdmlld0JveD1cIjAgMCAxNjAwIDk2NC4zNzVcIiB7Li4ucHJvcHN9PjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImFcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4MT1cIjgzLjUzN1wiIHgyPVwiMTUxNi40NjNcIiB5Mj1cIjk2NC4zNzVcIj48c3RvcCBvZmZzZXQ9XCIuMTY1XCIgc3RvcENvbG9yPVwiIzI1MjliN1wiIC8+PHN0b3Agb2Zmc2V0PVwiLjgwOFwiIHN0b3BDb2xvcj1cIiMzNjliZmZcIiAvPjxzdG9wIG9mZnNldD1cIi44MzVcIiBzdG9wQ29sb3I9XCIjMzY5YmZmXCIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPVwiTTAgOTI5LjczNlMzNTQgMTA0MCA4MDAgODY3YzQzNy4wMjItMTY5LjUxOCA2MjMuMzMzLTEyMy42NjcgODAwLTgyLjE1M0MxNjAxLjk3OCA4MjEuMjggMTYwMC0xIDE2MDAtMUgtLjAwMUwwIDkyOS43MzZ6XCIgZmlsbD1cInVybCgjYSlcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiAvPjwvc3ZnPjtcbn0pOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTYwMCA3MTguNzVcIiB7Li4ucHJvcHN9PjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImFcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4MT1cIjI2Ni4wMTlcIiB4Mj1cIjEzMzMuOTgxXCIgeTI9XCI3MTguNzVcIj48c3RvcCBvZmZzZXQ9XCIuMTY1XCIgc3RvcENvbG9yPVwiIzI1MjliN1wiIC8+PHN0b3Agb2Zmc2V0PVwiLjgzNVwiIHN0b3BDb2xvcj1cIiM0NjU2ZmZcIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9XCJNMCA2NzQuNzM2czMwMC4xNzcgMTIzLjM5OSA3ODMuNTEtNDIuOTY4QzEyMDcgNDg2IDE0MTEgNTI0IDE2MDAgNjA5Ljg0N1YwSC0uMDAxTDAgNjc0LjczNnpcIiBmaWxsPVwidXJsKCNhKVwiIG9wYWNpdHk9XCIuMDRcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiAvPjwvc3ZnPjtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInd3d3Jvb3QvYXNzZXRzL2JvYXJkLnBuZ1wiOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCI4XCIgdmlld0JveD1cIjAgMCAxMSA4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+PHRpdGxlPmljb25zL2NoZWNrPC90aXRsZT48cGF0aCBkPVwiTTMuOTggNy4yNEwuMTYgMy40MmEuNTIuNTIgMCAwIDEgMC0uNzVsLjM3NC0uMzczYS41MTguNTE4IDAgMCAxIC43NDggMEw0LjM1NSA1LjM3IDkuNTY1LjE2YS41MTcuNTE3IDAgMCAxIC43NDcgMGwuMzc0LjM3NGEuNTE2LjUxNiAwIDAgMSAwIC43NDhMNC43MyA3LjI0YS41Mi41MiAwIDAgMS0uNzUgMHpcIiAvPjwvc3ZnPjtcbn0pOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT48dGl0bGU+Y3Jvc3M8L3RpdGxlPjxwYXRoIGQ9XCJNMTMuOTU3IDMuNDU3bC0xLjQxNC0xLjQxNEw4IDYuNTg2IDMuNDU3IDIuMDQzIDIuMDQzIDMuNDU3IDYuNTg2IDhsLTQuNTQzIDQuNTQzIDEuNDE0IDEuNDE0TDggOS40MTRsNC41NDMgNC41NDMgMS40MTQtMS40MTRMOS40MTQgOHpcIiAvPjwvc3ZnPjtcbn0pOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDIwIDE0XCIgey4uLnByb3BzfT48cGF0aCBkPVwiTTEwLjExIDcuOTE0Yy0xLjA3MyAwLTIuMDg5LS41NTgtMy4wNzMtMS4yN0wuODg1IDEzLjk5Ni45NTYgMTRoMTguMzA4bC4wNDQtLjAwMi01LjkzNC03LjM1M2MtMS4xODguODQyLTIuMTc1IDEuMjY5LTMuMjY0IDEuMjY5em01LjE3Mi0yLjc5NGMtLjM0OS4zLS42NzguNTc2LS45OTEuODI4bDUuNjE2IDcuMTc3Yy4wNi0uMTM1LjA5My0uMjg0LjA5My0uNDQxVi43NDhjMC0uMDktLjAxMi0uMTc3LS4wMzMtLjI2MS0uNzQ2LjY4NC0xLjE4MSAxLjQxOC0xLjkxOCAyLjEwMS0xLjI0NSAxLjE1NC0yLjMyMSAyLjE1LTIuNzY3IDIuNTMyem0tOS41MDYuNTQybC0uNDA4LS4zMjhDNC44MDUgNC44ODYgMi4zMyAyLjU3OC4wMjEuNTM5QTEuMDI5IDEuMDI5IDAgMCAwIDAgLjc0OHYxMS45MzZjMCAuMTQ4LjAzLjI4OS4wODQuNDE4bDYuMDQtNy4xNi0uMzQ4LS4yOHptLjcyMS0uODk2YzEuMjIuOTgyIDIuNDggMS45OTggMy42MTMgMS45OTggMS4yNTkgMCAyLjQ3OC0uODQ3IDQuNDI0LTIuNTE2LjQyOS0uMzY4IDEuNDk3LTEuMzU4IDIuNzM1LTIuNTA0LjcyMS0uNjY5IDEuNDk3LTEuMDQzIDIuMjMyLTEuNzE4QTEuMTQ3IDEuMTQ3IDAgMCAwIDE5LjI2NCAwSC45NTZDLjg1NCAwIC43NTcuMDE0LjY2NC4wNGMyLjE4MiAxLjkyNyA0Ljg4MiAzLjk2NiA1LjQyMSA0LjM5NWwuNDEyLjMzMXpcIiBmaWxsPVwiIzJlZDBhMFwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIC8+PC9zdmc+O1xufSk7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBzdHlsZXMgPSB7fVxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInN0eWxlc1wiXSk7XG5cbiAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9Pjx0aXRsZT5naXRodWI8L3RpdGxlPjxwYXRoIGQ9XCJNOCAuMTk4YTggOCAwIDAgMC0yLjUyOSAxNS41OTFjLjQuMDc0LjU0Ny0uMTc0LjU0Ny0uMzg1IDAtLjE5MS0uMDA4LS44MjEtLjAxMS0xLjQ4OS0yLjIyNi40ODQtMi42OTUtLjk0NC0yLjY5NS0uOTQ0LS4zNjQtLjkyNS0uODg4LTEuMTcxLS44ODgtMS4xNzEtLjcyNi0uNDk3LjA1NS0uNDg2LjA1NS0uNDg2LjgwMy4wNTYgMS4yMjYuODI0IDEuMjI2LjgyNC43MTQgMS4yMjMgMS44NzIuODY5IDIuMzI4LjY2NS4wNzItLjUxNy4yNzktLjg3LjUwOC0xLjA3LTEuNzc3LS4yMDItMy42NDUtLjg4OC0zLjY0NS0zLjk1NCAwLS44NzMuMzEzLTEuNTg3LjgyNC0yLjE0Ny0uMDgzLS4yMDItLjM1Ny0xLjAxNS4wNzctMi4xMTcgMCAwIC42NzItLjIxNSAyLjIwMS44MkE3LjY3MiA3LjY3MiAwIDAgMSA4IDQuMDY2Yy42OC4wMDMgMS4zNjUuMDkyIDIuMDA0LjI2OSAxLjUyNy0xLjAzNSAyLjE5OC0uODIgMi4xOTgtLjgyLjQzNSAxLjEwMi4xNjIgMS45MTYuMDc5IDIuMTE3LjUxMy41Ni44MjMgMS4yNzQuODIzIDIuMTQ3IDAgMy4wNzMtMS44NzIgMy43NDktMy42NTMgMy45NDcuMjg3LjI0OC41NDMuNzM1LjU0MyAxLjQ4MSAwIDEuMDctLjAwOSAxLjkzMi0uMDA5IDIuMTk1IDAgLjIxMy4xNDQuNDYyLjU1LjM4NEE4IDggMCAwIDAgOC4wMDEuMTk2elwiIC8+PC9zdmc+O1xufSk7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBzdHlsZXMgPSB7fVxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInN0eWxlc1wiXSk7XG5cbiAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9Pjx0aXRsZT5wZW5jaWw8L3RpdGxlPjxwYXRoIGQ9XCJNMTEuNDQ1LjA1NUwyLjUgOUg0djFoMXYxaDF2MWgxdjEuNDk1bDguOTQ1LTguOTM5Yy41LTItMi41LTUtNC41LTQuNXpNNiAxM0g1di0xSDR2LTFIM3YtMWgtLjg1N0wwIDE2bDYtMi4xNDR6XCIgLz48L3N2Zz47XG59KTsiXSwic291cmNlUm9vdCI6IiJ9