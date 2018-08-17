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

/***/ "./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js":
/*!*********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash f27f7f7452e49207b07f6cfd588acf10
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
    name
    onboardingSteps {
      id
      name
      description
    }
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddOnboardingPipelineInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddOnboardingPipelineInput!"
  }],
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
    "text": "mutation addPipelineMutation(\n  $input: AddOnboardingPipelineInput!\n) {\n  addPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    name\n    onboardingSteps {\n      id\n      name\n      description\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "addPipelineMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "addPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingPipelinePayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "organization",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "onboardingProcessContainer_organization",
            "args": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "addPipelineMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "addPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingPipelinePayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "organization",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "organizationId",
            "args": null,
            "storageKey": null
          }, v2, {
            "kind": "LinkedField",
            "alias": null,
            "name": "onboardingPipelines",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": true,
            "selections": [v3, v2, {
              "kind": "LinkedField",
              "alias": null,
              "name": "onboardingSteps",
              "storageKey": null,
              "args": null,
              "concreteType": "OnboardingStep",
              "plural": true,
              "selections": [v3, v2, {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              }]
            }]
          }, v3]
        }]
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '20b67e68c39920e8176632e99143fe35';
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
 * 
 * @relayHash efda7a4c730ab076292d25ef4f68300f
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
    name
    onboardingSteps {
      id
      name
      description
    }
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }],
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
    "text": "query onboardingProcessContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Organization {\n      ...onboardingProcessContainer_organization\n    }\n    id\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    name\n    onboardingSteps {\n      id\n      name\n      description\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "onboardingProcessContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [{
          "kind": "InlineFragment",
          "type": "Organization",
          "selections": [{
            "kind": "FragmentSpread",
            "name": "onboardingProcessContainer_organization",
            "args": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "onboardingProcessContainerQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "__typename",
          "args": null,
          "storageKey": null
        }, v2, {
          "kind": "InlineFragment",
          "type": "Organization",
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "organizationId",
            "args": null,
            "storageKey": null
          }, v3, {
            "kind": "LinkedField",
            "alias": null,
            "name": "onboardingPipelines",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingPipeline",
            "plural": true,
            "selections": [v2, v3, {
              "kind": "LinkedField",
              "alias": null,
              "name": "onboardingSteps",
              "storageKey": null,
              "args": null,
              "concreteType": "OnboardingStep",
              "plural": true,
              "selections": [v2, v3, {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              }]
            }]
          }]
        }]
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = 'd8d9e14894ca528f012d82867d89a36a';
module.exports = node;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainer_organization.graphql.js":
/*!*****************************************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainer_organization.graphql.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type onboardingProcessContainer_organization$ref: FragmentReference;
export type onboardingProcessContainer_organization = {|
  +organizationId: number,
  +name: string,
  +onboardingPipelines: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +onboardingSteps: $ReadOnlyArray<?{|
      +id: string,
      +name: string,
      +description: ?string,
    |}>,
  |}>,
  +$refType: onboardingProcessContainer_organization$ref,
|};
*/

var node /*: ConcreteFragment*/ = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "onboardingProcessContainer_organization",
    "type": "Organization",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "organizationId",
      "args": null,
      "storageKey": null
    }, v0, {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingPipelines",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingPipeline",
      "plural": true,
      "selections": [v1, v0, {
        "kind": "LinkedField",
        "alias": null,
        "name": "onboardingSteps",
        "storageKey": null,
        "args": null,
        "concreteType": "OnboardingStep",
        "plural": true,
        "selections": [v1, v0, {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  };
}();
// prettier-ignore
node /*: any*/.hash = '2682f2e4e3c576ad52210e7a6d481135';
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

var _button = __webpack_require__(/*! ../../shared/button/button */ "./Components/shared/button/button.tsx");

var _button2 = _interopRequireDefault(_button);

var _fieldInput = __webpack_require__(/*! ../../shared/inputs/fieldInput */ "./Components/shared/inputs/fieldInput.tsx");

var _fieldInput2 = _interopRequireDefault(_fieldInput);

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _createFieldValidator = __webpack_require__(/*! ../../shared/inputs/createFieldValidator */ "./Components/shared/inputs/createFieldValidator.tsx");

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _cross = __webpack_require__(/*! ../../../wwwroot/assets/cross.svg */ "./wwwroot/assets/cross.svg");

var _cross2 = _interopRequireDefault(_cross);

var _Pencil = __webpack_require__(/*! ../../../wwwroot/assets/Pencil.svg */ "./wwwroot/assets/Pencil.svg");

var _Pencil2 = _interopRequireDefault(_Pencil);

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PipelineRow = (0, _styledComponents2.default)(_rebass.Row).withConfig({
    displayName: "onboardingProcess__PipelineRow"
})(["margin-left:-5px;margin-right:-5px;height:700px;"]);
var PipelineColumn = (0, _styledComponents2.default)(_rebass.Column).withConfig({
    displayName: "onboardingProcess__PipelineColumn"
})(["background-color:#F4F4F4;border-radius:4px;margin-left:5px;margin-right:5px;max-width:262px;"]);
var Step = _styledComponents2.default.button.withConfig({
    displayName: "onboardingProcess__Step"
})(["width:100%;border-radius:4px;text-align:left;margin:5px 0;"]);
var IconButton = (0, _styledComponents2.default)(_rebass.ButtonTransparent).withConfig({
    displayName: "onboardingProcess__IconButton"
})(["padding:5px;"]);
var addPipelineValidator = (0, _createFieldValidator2.default)(["required"]);
var OnboardingProcess = function OnboardingProcess(_ref) {
    var organization = _ref.organization,
        togglePipeline = _ref.togglePipeline,
        isAddingPipeline = _ref.isAddingPipeline,
        handleSubmit = _ref.handleSubmit;
    return _react2.default.createElement(_rebass.Container, { maxWidth: "100%" }, _react2.default.createElement(_rebass.Text, { mt: 20, mb: 40, fontSize: 20 }, _react2.default.createElement(_rebass.Text, { is: "span", display: "inline", fontWeight: "bold" }, organization.name), " on-boarding process"), _react2.default.createElement(PipelineRow, null, organization.onboardingPipelines.map(function (pipeline) {
        return _react2.default.createElement(PipelineColumn, { key: pipeline.id, p: 16 }, _react2.default.createElement(_rebass.Box, { pb: 16 }, _react2.default.createElement(_gridStyled.Flex, { alignItems: "center" }, _react2.default.createElement(_rebass.Text, { fontWeight: "bold", fontSize: 18 }, pipeline.name), _react2.default.createElement(IconButton, { ml: "auto" }, _react2.default.createElement(_Pencil2.default, null)), _react2.default.createElement(IconButton, null, _react2.default.createElement(_cross2.default, null)))), pipeline.onboardingSteps.map(function (step) {
            return _react2.default.createElement(Step, { key: step.id }, _react2.default.createElement(_rebass.Box, { bg: "white", p: 10, br: 4 }, step.name));
        }));
    }), _react2.default.createElement(PipelineColumn, { px: 0 }, isAddingPipeline ? _react2.default.createElement("form", { onSubmit: handleSubmit, action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, id: "name", name: "name", placeholder: "Pipeline name", validate: addPipelineValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Create"), _react2.default.createElement(_button2.default, { type: "button", onClick: togglePipeline }, "Cancel"))) : _react2.default.createElement(_button2.default, { onClick: togglePipeline, style: { width: "100%" } }, "Add a pipeline..."))));
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

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _onboardingProcess = __webpack_require__(/*! ./onboardingProcess */ "./Components/dashboard/onboardingProcess/onboardingProcess.tsx");

var _onboardingProcess2 = _interopRequireDefault(_onboardingProcess);

var _addPipelineMutation = __webpack_require__(/*! ./addPipelineMutation */ "./Components/dashboard/onboardingProcess/addPipelineMutation.tsx");

var _addPipelineMutation2 = _interopRequireDefault(_addPipelineMutation);

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

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

    if (node.hash && node.hash !== "2682f2e4e3c576ad52210e7a6d481135") {
      console.error("The definition of 'onboardingProcessContainer_organization' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(/*! ./__generated__/onboardingProcessContainer_organization.graphql */ "./Components/dashboard/onboardingProcess/__generated__/onboardingProcessContainer_organization.graphql.js");
  }
};
var handlers = {
  onSubmit: function onSubmit(_ref) {
    var organization = _ref.organization;
    return function (input) {
      return (0, _addPipelineMutation2.default)((0, _assign2.default)({ organizationId: organization.organizationId }, input));
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
var Component = (0, _recompose.compose)((0, _recompose.renameProp)("node", "organization"), (0, _relayCompose.fragment)(fragments), (0, _recompose.withStateHandlers)({ isAddingPipeline: false }, stateHandlers), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'onboarding'
}))(_onboardingProcess2.default);
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
 * 
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
}();
// prettier-ignore
node /*: any*/.hash = '32d14808967f9b087e70126fa717a296';
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
})(["&:not(:disabled){cursor:pointer;}&:focus{box-shadow:none;}"]);
exports.default = (0, _redux.compose)(_styledComponents.withTheme, (0, _recompose.renameProp)("theme", "appTheme"))(Button);

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

var _organizationsContainer = __webpack_require__(/*! ../../../../Components/dashboard/organizations/organizationsContainer */ "./Components/dashboard/organizations/organizationsContainer.tsx");

var _onboardingProcessContainer = __webpack_require__(/*! ../../../../Components/dashboard/onboardingProcess/onboardingProcessContainer */ "./Components/dashboard/onboardingProcess/onboardingProcessContainer.tsx");

var _primaryLayoutContainer = __webpack_require__(/*! ../../layouts/primaryLayout/primaryLayoutContainer */ "./extension/Components/layouts/primaryLayout/primaryLayoutContainer.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* tslint:disable:max-line-length */
exports.default = (0, _found.makeRouteConfig)(_react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/" }, _primaryLayoutContainer.routeConfig), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "/onboardor" }, _dashboardContainer.routeConfig), _react2.default.createElement(_found.Route, (0, _assign2.default)({}, _organizationsContainer.routeConfig)), _react2.default.createElement(_found.Route, (0, _assign2.default)({ path: "organization/:id/onboardingProcess" }, _onboardingProcessContainer.routeConfig)))));

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _portalReplacer = __webpack_require__(/*! ../utilities/portalReplacer */ "./extension/Components/utilities/portalReplacer.tsx");

var _portalReplacer2 = _interopRequireDefault(_portalReplacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function Dashboard(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_portalReplacer2.default, { node: document.getElementsByClassName('repository-content')[0] }, children);
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

/***/ "./extension/Components/layouts/primaryLayout/__generated__/primaryLayoutContainerQuery.graphql.js":
/*!*********************************************************************************************************!*\
  !*** ./extension/Components/layouts/primaryLayout/__generated__/primaryLayoutContainerQuery.graphql.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash b52ff7e7e21861c2595dfda7d4f5107c
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type navLinkContainer_navLink$ref = any;
export type primaryLayoutContainerQueryVariables = {||};
export type primaryLayoutContainerQueryResponse = {|
  +$fragmentRefs: navLinkContainer_navLink$ref
|};
export type primaryLayoutContainerQuery = {|
  variables: primaryLayoutContainerQueryVariables,
  response: primaryLayoutContainerQueryResponse,
|};
*/

/*
query primaryLayoutContainerQuery {
  ...navLinkContainer_navLink
}

fragment navLinkContainer_navLink on Query {
  setup
}
*/

var node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "primaryLayoutContainerQuery",
  "id": null,
  "text": "query primaryLayoutContainerQuery {\n  ...navLinkContainer_navLink\n}\n\nfragment navLinkContainer_navLink on Query {\n  setup\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "primaryLayoutContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [{
      "kind": "FragmentSpread",
      "name": "navLinkContainer_navLink",
      "args": null
    }]
  },
  "operation": {
    "kind": "Operation",
    "name": "primaryLayoutContainerQuery",
    "argumentDefinitions": [],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "setup",
      "args": null,
      "storageKey": null
    }]
  }
};
// prettier-ignore
node /*: any*/.hash = 'b857c175dcdc5650374640ef2fa13f4b';
module.exports = node;

/***/ }),

/***/ "./extension/Components/layouts/primaryLayout/primaryLayout.tsx":
/*!**********************************************************************!*\
  !*** ./extension/Components/layouts/primaryLayout/primaryLayout.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rebass = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _primaryLayoutErrorBoundary = __webpack_require__(/*! ../../../../Components/layouts/primaryLayout/primaryLayoutErrorBoundary */ "./Components/layouts/primaryLayout/primaryLayoutErrorBoundary.tsx");

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _navLinkContainer = __webpack_require__(/*! ../../nav/navLinkContainer */ "./extension/Components/nav/navLinkContainer.tsx");

var _navLinkContainer2 = _interopRequireDefault(_navLinkContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var PrimaryLayout = function PrimaryLayout(_a) {
    var children = _a.children,
        theme = _a.theme,
        props = __rest(_a, ["children", "theme"]);

    return _react2.default.createElement(_primaryLayoutErrorBoundary2.default, null, _react2.default.createElement(_rebass.Root, { color: theme.colors.grey }, _react2.default.createElement(_navLinkContainer2.default, { navLink: props }), children));
};
exports.default = (0, _styledComponents.withTheme)(PrimaryLayout);

/***/ }),

/***/ "./extension/Components/layouts/primaryLayout/primaryLayoutContainer.tsx":
/*!*******************************************************************************!*\
  !*** ./extension/Components/layouts/primaryLayout/primaryLayoutContainer.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(/*! ./primaryLayout */ "./extension/Components/layouts/primaryLayout/primaryLayout.tsx");

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  var node = __webpack_require__(/*! ./__generated__/primaryLayoutContainerQuery.graphql */ "./extension/Components/layouts/primaryLayout/__generated__/primaryLayoutContainerQuery.graphql.js");

  if (node.hash && node.hash !== "b857c175dcdc5650374640ef2fa13f4b") {
    console.error("The definition of 'primaryLayoutContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/primaryLayoutContainerQuery.graphql */ "./extension/Components/layouts/primaryLayout/__generated__/primaryLayoutContainerQuery.graphql.js");
};
var PrimaryLayoutContainer = _primaryLayout2.default;
var routeConfig = exports.routeConfig = {
  query: query,
  Component: PrimaryLayoutContainer
};
exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ "./extension/Components/nav/__generated__/navLinkContainer_navLink.graphql.js":
/*!************************************************************************************!*\
  !*** ./extension/Components/nav/__generated__/navLinkContainer_navLink.graphql.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type navLinkContainer_navLink$ref: FragmentReference;
export type navLinkContainer_navLink = {|
  +setup: ?string,
  +$refType: navLinkContainer_navLink$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "navLinkContainer_navLink",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "setup",
    "args": null,
    "storageKey": null
  }]
};
// prettier-ignore
node /*: any*/.hash = '82c483ea43bc8849585e16b7fee17ea5';
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
            return _react2.default.createElement(_reactPortal.Portal, { node: document.getElementsByClassName("reponav")[0] }, _react2.default.createElement(Anchor, { id: this.props.id, to: "/onboardor", className: (0, _classnames2.default)("reponav-item", this.props.selected && "selected"), selected: this.props.selected, onClick: this.props.onClick }, "onboardor"));
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

var _navLink = __webpack_require__(/*! ./navLink */ "./extension/Components/nav/navLink.tsx");

var _navLink2 = _interopRequireDefault(_navLink);

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _oAuthNavLink = __webpack_require__(/*! ./oAuthNavLink */ "./extension/Components/nav/oAuthNavLink.tsx");

var _oAuthNavLink2 = _interopRequireDefault(_oAuthNavLink);

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

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
var id = "onboardor-nav-link";
var fragments = {
    navLink: function navLink() {
        var node = __webpack_require__(/*! ./__generated__/navLinkContainer_navLink.graphql */ "./extension/Components/nav/__generated__/navLinkContainer_navLink.graphql.js");

        if (node.hash && node.hash !== "82c483ea43bc8849585e16b7fee17ea5") {
            console.error("The definition of 'navLinkContainer_navLink' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
        }

        return __webpack_require__(/*! ./__generated__/navLinkContainer_navLink.graphql */ "./extension/Components/nav/__generated__/navLinkContainer_navLink.graphql.js");
    }
};
var stateHandlers = {
    onClick: function onClick(_ref) {
        var selected = _ref.selected;
        return function () {
            var selectedItem = document.querySelector(".reponav-item.selected:not([id='" + id + "'])");
            if (selectedItem) {
                selectedItem.classList.remove("selected");
            }
            return {
                selected: !selected
            };
        };
    }
};
var NavLinkContainer = (0, _recompose.compose)((0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)('navLink'), (0, _recompose.branch)(function (props) {
    return !!props.setup;
}, (0, _recompose.renderComponent)(_oAuthNavLink2.default)), (0, _recompose.withStateHandlers)({ selected: false }, stateHandlers), (0, _recompose.withProps)({
    id: id
}))(_navLink2.default);
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
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.location.reload();
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

/***/ "./wwwroot/assets/Pencil.svg":
/*!***********************************!*\
  !*** ./wwwroot/assets/Pencil.svg ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9hZGRQaXBlbGluZU11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9hZGRQaXBlbGluZU11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9vbmJvYXJkaW5nUHJvY2Vzcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3Mvb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvX19nZW5lcmF0ZWRfXy9vcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbnMudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2VsZWN0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmcudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9fX2dlbmVyYXRlZF9fL3ByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L19fZ2VuZXJhdGVkX18vbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L25hdkxpbmsudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL25hdi9uYXZMaW5rQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9uYXYvb0F1dGhOYXZMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXIudHN4Iiwid2VicGFjazovLy8uL3d3d3Jvb3QvYXNzZXRzL1BlbmNpbC5zdmciLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9hc3NldHMvY3Jvc3Muc3ZnIl0sIm5hbWVzIjpbIm5vZGUiLCJ2MCIsInYxIiwidjIiLCJ2MyIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwib2JqIiwia2V5cyIsInRhcmdldCIsImkiLCJpbmRleE9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX3JlZiIsInN0eWxlcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7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LEVBQXdDLE9BQU0sSUFBOUMsRUFBbUQsUUFBTyxJQUExRCxFQUErRCxTQUFRLFdBQXZFLElBQXVGRSxLQUF2RjtBQUE4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTlGO0FBQW1ILDRDQUFNLEdBQUUsK0dBQVI7QUFBbkgsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDs7Ozs7O0FBRkEsU0FBU1osd0JBQVQsQ0FBa0NDLEdBQWxDLEVBQXVDQyxJQUF2QyxFQUE2QztBQUFFLE1BQUlDLFNBQVMsRUFBYixDQUFpQixLQUFLLElBQUlDLENBQVQsSUFBY0gsR0FBZCxFQUFtQjtBQUFFLFFBQUlDLEtBQUtHLE9BQUwsQ0FBYUQsQ0FBYixLQUFtQixDQUF2QixFQUEwQixTQUFVLElBQUksQ0FBQ0UsT0FBT0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixHQUFyQyxFQUEwQ0csQ0FBMUMsQ0FBTCxFQUFtRCxTQUFVRCxPQUFPQyxDQUFQLElBQVlILElBQUlHLENBQUosQ0FBWjtBQUFxQixHQUFDLE9BQU9ELE1BQVA7QUFBZ0I7O2tCQUc1TSxVQUFDTyxJQUFELEVBQVU7QUFBQSxvQkFHcEJBLElBSG9CLENBRXRCQyxNQUZzQjtBQUFBLE1BRXRCQSxNQUZzQiwrQkFFYixFQUZhO0FBQUEsTUFJcEJDLEtBSm9CLEdBSVpaLHlCQUF5QlUsSUFBekIsRUFBK0IsQ0FBQyxRQUFELENBQS9CLENBSlk7O0FBTXhCLFNBQU87QUFBQTtBQUFBLDZCQUFLLE9BQU0sNEJBQVgsRUFBd0MsT0FBTSxJQUE5QyxFQUFtRCxRQUFPLElBQTFELEVBQStELFNBQVEsV0FBdkUsSUFBdUZFLEtBQXZGO0FBQThGO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOUY7QUFBa0gsNENBQU0sR0FBRSxzSUFBUjtBQUFsSCxHQUFQO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCBmMjdmN2Y3NDUyZTQ5MjA3YjA3ZjZjZmQ1ODhhY2YxMFxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0ID0ge1xuICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIGFkZFBpcGVsaW5lTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXRcbnx9O1xuZXhwb3J0IHR5cGUgYWRkUGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK2FkZFBpcGVsaW5lOiA/e3xcbiAgICArb3JnYW5pemF0aW9uOiB7fFxuICAgICAgKyRmcmFnbWVudFJlZnM6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWZcbiAgICB8fVxuICB8fVxufH07XG5leHBvcnQgdHlwZSBhZGRQaXBlbGluZU11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiBhZGRQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogYWRkUGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBhZGRQaXBlbGluZU11dGF0aW9uKFxuICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxuKSB7XG4gIGFkZFBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcbiAgICBvcmdhbml6YXRpb24ge1xuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgb3JnYW5pemF0aW9uSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICBvbmJvYXJkaW5nU3RlcHMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZU11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gYWRkUGlwZWxpbmVNdXRhdGlvbihcXG4gICRpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXFxuKSB7XFxuICBhZGRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XFxuICAgIG9yZ2FuaXphdGlvbiB7XFxuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXFxuICAgICAgaWRcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcXG4gIG9yZ2FuaXphdGlvbklkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcXG4gICAgaWRcXG4gICAgbmFtZVxcbiAgICBvbmJvYXJkaW5nU3RlcHMge1xcbiAgICAgIGlkXFxuICAgICAgbmFtZVxcbiAgICAgIGRlc2NyaXB0aW9uXFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdQaXBlbGluZVBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2M1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzIwYjY3ZTY4YzM5OTIwZTgxNzY2MzJlOTkxNDNmZTM1Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggZWZkYTdhNGM3MzBhYjA3NjI5MmQyNWVmNGY2ODMwMGZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3xcbiAgaWQ6IHN0cmluZ1xufH07XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArbm9kZTogP3t8XG4gICAgKyRmcmFnbWVudFJlZnM6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWZcbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeSA9IHt8XG4gIHZhcmlhYmxlczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeShcbiAgJGlkOiBJRCFcbikge1xuICBub2RlKGlkOiAkaWQpIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgLi4uIG9uIE9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICB9XG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgb3JnYW5pemF0aW9uSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICBvbmJvYXJkaW5nU3RlcHMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfVxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICBcInR5cGVcIjogXCJJRCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlkXCIsXG4gICAgXCJ0eXBlXCI6IFwiSUQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeShcXG4gICRpZDogSUQhXFxuKSB7XFxuICBub2RlKGlkOiAkaWQpIHtcXG4gICAgX190eXBlbmFtZVxcbiAgICAuLi4gb24gT3JnYW5pemF0aW9uIHtcXG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cXG4gICAgfVxcbiAgICBpZFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcXG4gIG9yZ2FuaXphdGlvbklkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcXG4gICAgaWRcXG4gICAgbmFtZVxcbiAgICBvbmJvYXJkaW5nU3RlcHMge1xcbiAgICAgIGlkXFxuICAgICAgbmFtZVxcbiAgICAgIGRlc2NyaXB0aW9uXFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcIm5vZGVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogbnVsbCxcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiSW5saW5lRnJhZ21lbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJub2RlXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IG51bGwsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJfX3R5cGVuYW1lXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJJbmxpbmVGcmFnbWVudFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uSWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZXNcIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2Q4ZDllMTQ4OTRjYTUyOGYwMTJkODI4NjdkODlhMzZhJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiA9IHt8XG4gICtvcmdhbml6YXRpb25JZDogbnVtYmVyLFxuICArbmFtZTogc3RyaW5nLFxuICArb25ib2FyZGluZ1BpcGVsaW5lczogJFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2lkOiBzdHJpbmcsXG4gICAgK25hbWU6IHN0cmluZyxcbiAgICArb25ib2FyZGluZ1N0ZXBzOiAkUmVhZE9ubHlBcnJheTw/e3xcbiAgICAgICtpZDogc3RyaW5nLFxuICAgICAgK25hbWU6IHN0cmluZyxcbiAgICAgICtkZXNjcmlwdGlvbjogP3N0cmluZyxcbiAgICB8fT4sXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MSA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgXCJ0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAgdjAsXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZXNcIixcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgIHYxLFxuICAgICAgICB2MCxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwc1wiLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1N0ZXBcIixcbiAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICB2MSxcbiAgICAgICAgICAgIHYwLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzI2ODJmMmU0ZTNjNTc2YWQ1MjIxMGU3YTZkNDgxMTM1Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBhZGRQaXBlbGluZU11dGF0aW9uKFxuICAgICRpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4gICkge1xuICAgIGFkZFBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIG9yZ2FuaXphdGlvbklkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgb3JnYW5pemF0aW9uSWQsIG5hbWUgfTogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBvcmdhbml6YXRpb25JZCxcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgVGV4dCwgUm93LCBDb2x1bW4sIEJveCwgQnV0dG9uVHJhbnNwYXJlbnQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBJT3JnYW5pemF0aW9uIH0gZnJvbSBcIi4uL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zaGFyZWQvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IEZpZWxkSW5wdXQgZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dFwiO1xuaW1wb3J0IHsgRmllbGQsIEluamVjdGVkRm9ybVByb3BzIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCBjcmVhdGVGaWVsZFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9jcmVhdGVGaWVsZFZhbGlkYXRvclwiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuLi8uLi8uLi93d3dyb290L2Fzc2V0cy9jcm9zcy5zdmdcIjtcbmltcG9ydCBQZW5jaWwgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL1BlbmNpbC5zdmdcIjtcbmltcG9ydCB7IEZsZXggfSBmcm9tIFwiZ3JpZC1zdHlsZWRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEluamVjdGVkRm9ybVByb3BzIHtcbiAgb3JnYW5pemF0aW9uOiBJT3JnYW5pemF0aW9uO1xuICBhZGRQaXBlbGluZTogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIGlzQWRkaW5nUGlwZWxpbmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFBpcGVsaW5lUm93ID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIGhlaWdodDogNzAwcHg7XG5gO1xuXG5jb25zdCBQaXBlbGluZUNvbHVtbiA9IHN0eWxlZChDb2x1bW4pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXgtd2lkdGg6IDI2MnB4O1xuYDtcblxuY29uc3QgU3RlcCA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDA7XG5gO1xuXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvblRyYW5zcGFyZW50KWBcbiAgcGFkZGluZzogNXB4O1xuYDtcblxuY29uc3QgYWRkUGlwZWxpbmVWYWxpZGF0b3IgPSBjcmVhdGVGaWVsZFZhbGlkYXRvcihbXCJyZXF1aXJlZFwiXSk7XG5cbmNvbnN0IE9uYm9hcmRpbmdQcm9jZXNzID0gKHtcbiAgb3JnYW5pemF0aW9uLFxuICB0b2dnbGVQaXBlbGluZSxcbiAgaXNBZGRpbmdQaXBlbGluZSxcbiAgaGFuZGxlU3VibWl0LFxufTogSVByb3BzKSA9PiAoXG4gIDxDb250YWluZXIgbWF4V2lkdGg9XCIxMDAlXCI+XG4gICAgPFRleHQgbXQ9ezIwfSBtYj17NDB9IGZvbnRTaXplPXsyMH0+XG4gICAgICA8VGV4dCBpcz1cInNwYW5cIiBkaXNwbGF5PVwiaW5saW5lXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAge29yZ2FuaXphdGlvbi5uYW1lfVxuICAgICAgPC9UZXh0PiBvbi1ib2FyZGluZyBwcm9jZXNzXG4gICAgPC9UZXh0PlxuICAgIDxQaXBlbGluZVJvdz5cbiAgICAgIHtvcmdhbml6YXRpb24ub25ib2FyZGluZ1BpcGVsaW5lcy5tYXAoKHBpcGVsaW5lKSA9PiAoXG4gICAgICAgIDxQaXBlbGluZUNvbHVtbiBrZXk9e3BpcGVsaW5lLmlkfSBwPXsxNn0+XG4gICAgICAgICAgPEJveCBwYj17MTZ9PlxuICAgICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPXsxOH0+e3BpcGVsaW5lLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBtbD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICA8UGVuY2lsIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPENyb3NzIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7cGlwZWxpbmUub25ib2FyZGluZ1N0ZXBzLm1hcCgoc3RlcCkgPT4gKFxuICAgICAgICAgICAgPFN0ZXAga2V5PXtzdGVwLmlkfT5cbiAgICAgICAgICAgICAgPEJveCBiZz1cIndoaXRlXCIgcD17MTB9IGJyPXs0fT5cbiAgICAgICAgICAgICAgICB7c3RlcC5uYW1lfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9QaXBlbGluZUNvbHVtbj5cbiAgICAgICkpfVxuICAgICAgPFBpcGVsaW5lQ29sdW1uIHB4PXswfT5cbiAgICAgICAge2lzQWRkaW5nUGlwZWxpbmUgPyAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGlwZWxpbmUgbmFtZVwiXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXthZGRQaXBlbGluZVZhbGlkYXRvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94IG10PXsxMH0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXI9ezEwfT5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlUGlwZWxpbmV9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVQaXBlbGluZX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PkFkZCBhIHBpcGVsaW5lLi4uPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1BpcGVsaW5lQ29sdW1uPlxuICAgIDwvUGlwZWxpbmVSb3c+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT25ib2FyZGluZ1Byb2Nlc3M7XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjb21wb3NlLCByZW5hbWVQcm9wLCB3aXRoSGFuZGxlcnMsIHdpdGhTdGF0ZUhhbmRsZXJzIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IE9uYm9hcmRpbmdQcm9jZXNzIGZyb20gXCIuL29uYm9hcmRpbmdQcm9jZXNzXCI7XG5pbXBvcnQgYWRkUGlwZWxpbmVNdXRhdGlvbiBmcm9tIFwiLi9hZGRQaXBlbGluZU11dGF0aW9uXCI7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeShcbiAgICAkaWQ6IElEIVxuICApIHtcbiAgICBub2RlKFxuICAgICAgaWQ6ICRpZFxuICAgICkge1xuICAgICAgLi4ub24gT3JnYW5pemF0aW9uIHtcbiAgICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgICBvcmdhbml6YXRpb25JZFxuICAgIG5hbWVcbiAgICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBvbmJvYXJkaW5nU3RlcHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb3JnYW5pemF0aW9uOiBJT3JnYW5pemF0aW9uO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNBZGRpbmdQaXBlbGluZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElJbnB1dCB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIG9uU3VibWl0OiAoeyBvcmdhbml6YXRpb24gfTogSVByb3BzKSA9PiAoaW5wdXQ6IElJbnB1dCkgPT5cbiAgICBhZGRQaXBlbGluZU11dGF0aW9uKHsgb3JnYW5pemF0aW9uSWQ6IG9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25JZCwgLi4uaW5wdXQgfSksXG59O1xuXG5jb25zdCBzdGF0ZUhhbmRsZXJzID0ge1xuICB0b2dnbGVQaXBlbGluZTogKHsgaXNBZGRpbmdQaXBlbGluZSB9OiBJU3RhdGUpID0+ICgpID0+ICh7XG4gICAgaXNBZGRpbmdQaXBlbGluZTogIWlzQWRkaW5nUGlwZWxpbmUsXG4gIH0pLFxufTtcblxuY29uc3QgQ29tcG9uZW50ID0gY29tcG9zZShcbiAgcmVuYW1lUHJvcChcIm5vZGVcIiwgXCJvcmdhbml6YXRpb25cIiksXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKHsgaXNBZGRpbmdQaXBlbGluZTogZmFsc2UgfSwgc3RhdGVIYW5kbGVycyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ29uYm9hcmRpbmcnLFxuICB9KSxcbikoT25ib2FyZGluZ1Byb2Nlc3MpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudCxcbiAgcXVlcnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDRjZTAwNTQ2ODU0MzdiN2IzYzE3YjU0NTlkYmZjMjg3XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3x8fTtcbmV4cG9ydCB0eXBlIG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK29yZ2FuaXphdGlvbnM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICtuYW1lOiBzdHJpbmcsXG4gICAgK2F2YXRhclVybDogc3RyaW5nLFxuICB8fT5cbnx9O1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5IHtcbiAgb3JnYW5pemF0aW9ucyB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgYXZhdGFyVXJsXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgXCJhbGlhc1wiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbnNcIixcbiAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICBcImFyZ3NcIjogbnVsbCxcbiAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiYXZhdGFyVXJsXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5IHtcXG4gIG9yZ2FuaXphdGlvbnMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIGF2YXRhclVybFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICczMmQxNDgwODk2N2Y5YjA4N2U3MDEyNmZhNzE3YTI5Nic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2UsIFN1YmhlYWQsIFRleHQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBuYW1lTWFyZ2luLCBTZWxlY3RDYXJkIH0gZnJvbSBcIi4uLy4uL3NlbGVjdC9zdHlsZXNcIjtcbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJUm91dGUge1xuICBvcmdhbml6YXRpb25zOiBJT3JnYW5pemF0aW9uW107XG59XG5cbmNvbnN0IE9yZ2FuaXphdGlvbnMgPSAoe1xuICBvcmdhbml6YXRpb25zLFxuICBtYXRjaCxcbn06IElQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxUZXh0IG15PXszMH0+XG4gICAgICBDaG9vc2UgYW4gb3JnYW5pemF0aW9uXG4gICAgPC9UZXh0PlxuXG4gICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICB7b3JnYW5pemF0aW9ucy5tYXAoKG9yZ2FuaXphdGlvbikgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e29yZ2FuaXphdGlvbi5pZH1cbiAgICAgICAgICAgIHRvPXtgJHttYXRjaC5sb2NhdGlvbi5wYXRobmFtZX0vb3JnYW5pemF0aW9uLyR7b3JnYW5pemF0aW9uLmlkfS9vbmJvYXJkaW5nUHJvY2Vzc2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNlbGVjdENhcmRcbiAgICAgICAgICAgICAgbT17Y2FyZE1hcmdpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZSB3aWR0aD17MjAwfSBzcmM9e29yZ2FuaXphdGlvbi5hdmF0YXJVcmx9IHJhdGlvPXsxfSAvPlxuICAgICAgICAgICAgICA8U3ViaGVhZCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17bmFtZU1hcmdpbn0+e29yZ2FuaXphdGlvbi5uYW1lfTwvU3ViaGVhZD5cbiAgICAgICAgICAgIDwvU2VsZWN0Q2FyZD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L0ZsZXg+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9ucztcbiIsImltcG9ydCB7IFJlZGlyZWN0RXhjZXB0aW9uIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5cbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSBcIi4vb3JnYW5pemF0aW9uc1wiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeSB7XG4gICAgb3JnYW5pemF0aW9ucyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXZhdGFyVXJsXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogT3JnYW5pemF0aW9ucyxcbiAgcXVlcnksXG4gIHJlbmRlcjogKHJvdXRlOiBJUm91dGUpID0+IHtcbiAgICBpZiAocm91dGUucHJvcHMpIHtcbiAgICAgIGlmIChyb3V0ZS5wcm9wcy5vcmdhbml6YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgUmVkaXJlY3RFeGNlcHRpb24oXG4gICAgICAgICAgYCR7cm91dGUubWF0Y2gubG9jYXRpb24ucGF0aG5hbWV9L29yZ2FuaXphdGlvbi8ke3JvdXRlLnByb3BzLm9yZ2FuaXphdGlvbnNbMF0uaWR9L29uYm9hcmRpbmdQcm9jZXNzYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gPE9yZ2FuaXphdGlvbnMgey4uLnJvdXRlLnByb3BzfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25zO1xuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY2xhc3MgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG4gIC8vIGNvbXBvbmVudERpZENhdGNoKCkge1xuICAvLyAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9lcnJvci81MDAnKTtcbiAgLy8gfVxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlPElQcm9wcywgSVByb3BzPihcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuIiwiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElTdHlsZVByb3BzIHtcbiAgdGhlbWU6IElUaGVtZTtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0Q2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7KHsgc2VsZWN0ZWQsIHRoZW1lIH06IElTdHlsZVByb3BzKSA9PiBzZWxlY3RlZCAmJiBgXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlZWUsIDAgMCA3cHggM3B4ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGNhcmRNYXJnaW4gPSAxMTtcbmV4cG9ydCBjb25zdCBuYW1lTWFyZ2luID0gNztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiBhcyBSZWJhc3NCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgcmVuYW1lUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBzdHlsZWQsIHsgd2l0aFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEJ1dHRvblByb3BzIHtcbiAgYXBwVGhlbWU6IElUaGVtZTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoKHsgYXBwVGhlbWUsIC4uLnByb3BzIH06IElQcm9wcykgPT5cbiAgPFJlYmFzc0J1dHRvbiBiZz17YXBwVGhlbWUuY29sb3JzLnByaW1hcnl9IHsuLi5wcm9wc30gLz4pYFxuICAmOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZTx7fSwgSVByb3BzPihcbiAgd2l0aFRoZW1lLFxuICByZW5hbWVQcm9wKFwidGhlbWVcIiwgXCJhcHBUaGVtZVwiKSxcbikoQnV0dG9uKTtcbiIsImNvbnN0IGRlZmF1bHRFcnJvck1lc3NhZ2VzID0ge1xuICBlbWFpbDogXCJFbWFpbCBtdXN0IGNvbnRhaW4gYW4gJ0AnIGFuZCBhICcuJyB0byBiZSB2YWxpZFwiLFxuICByZXF1aXJlZDogXCJUaGlzIGlucHV0IGlzIHJlcXVpcmVkXCIsXG59O1xuXG5jb25zdCBSVUxFUzogSVJ1bGUgPSB7XG4gIGVtYWlsOiAvLitALitcXC4uKy9pLFxuICByZXF1aXJlZDogKHZhbHVlKSA9PiAoXG4gICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gXCJib29sZWFuXCIgfHwgdmFsdWUgPT09IHRydWUpICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCB2YWx1ZS5sZW5ndGggPiAwKSAmJlxuICAgICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID4gMCkgJiZcbiAgICAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwKVxuICApLFxufTtcblxuaW50ZXJmYWNlIElSdWxlIHtcbiAgZW1haWw6IFJlZ0V4cDtcbiAgcmVxdWlyZWQ6ICh2YWx1ZTogYW55KSA9PiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSU1hdGNoZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRlc3Q6ICh2YWx1ZTogYW55KSA9PiBib29sZWFuO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0TWF0Y2hlciA9IChuYW1lOiBrZXlvZihJUnVsZSksIGVycm9yTWVzc2FnZSA9IGRlZmF1bHRFcnJvck1lc3NhZ2VzW25hbWVdKTogSU1hdGNoZXIgPT4ge1xuICBjb25zdCBydWxlID0gUlVMRVNbbmFtZV07XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyBydWxlIGZvciBuYW1lIFwiJHtuYW1lfVwiIGRlZmluZWRgKTtcbiAgfVxuXG4gIGNvbnN0IHRlc3QgPSB0eXBlb2YgcnVsZSA9PT0gXCJmdW5jdGlvblwiID8gcnVsZSA6ICh2YWx1ZTogYW55KSA9PiBydWxlLnRlc3QodmFsdWUpO1xuXG4gIHJldHVybiB7IG5hbWUsIHRlc3QsIGVycm9yTWVzc2FnZSB9O1xufTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdGUgPSAobWF0Y2hlcnM6IElNYXRjaGVyW10sIHZhbHVlOiBhbnkpID0+IHtcbiAgY29uc3QgaW52YWxpZE1hdGNoZXIgPSBtYXRjaGVycy5maW5kKChtYXRjaGVyKSA9PiAhbWF0Y2hlci50ZXN0KHZhbHVlKSk7XG5cbiAgaWYgKCFpbnZhbGlkTWF0Y2hlcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gaW52YWxpZE1hdGNoZXIuZXJyb3JNZXNzYWdlIHx8IHRydWU7XG59O1xuXG50eXBlIHZhbGlkYXRpb24gPSBBcnJheTxrZXlvZihJUnVsZSkgfCB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nLFxuICB9PjtcblxuZXhwb3J0IGRlZmF1bHQgKHZhbGlkYXRpb25zOiB2YWxpZGF0aW9uID0gW10pID0+ICh2YWx1ZTogYW55KSA9PiB7XG4gIGxldCBtYXRjaGVyczogSU1hdGNoZXJbXSA9IFtdO1xuXG4gIHZhbGlkYXRpb25zLmZvckVhY2goKHZhbGlkYXRpb24pID0+IHtcbiAgICBpZiAodmFsaWRhdGlvbiAmJiB0eXBlb2YgdmFsaWRhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdmFsaWRhdGlvbk1hdGNoZXJzID0gZ2V0TWF0Y2hlcih2YWxpZGF0aW9uKTtcblxuICAgICAgbWF0Y2hlcnMgPSBtYXRjaGVycy5jb25jYXQodmFsaWRhdGlvbk1hdGNoZXJzKTtcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24gJiYgdHlwZW9mIHZhbGlkYXRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25NYXRjaGVycyA9IE9iamVjdC5rZXlzKHZhbGlkYXRpb24pLm1hcChcbiAgICAgICAgKHJ1bGVOYW1lOiBrZXlvZihJUnVsZSkpID0+IGdldE1hdGNoZXIocnVsZU5hbWUsIHZhbGlkYXRpb25bcnVsZU5hbWVdKSxcbiAgICAgICk7XG5cbiAgICAgIG1hdGNoZXJzID0gbWF0Y2hlcnMuY29uY2F0KHZhbGlkYXRpb25NYXRjaGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInZhbGlkYXRpb25zIG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIHR5cGUgWydydWxlJ10gb3IgW3sgcnVsZU5hbWU6ICdlcnJvck1lc3NhZ2UnIH1dXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNyZWF0ZVZhbGlkYXRlKG1hdGNoZXJzLCB2YWx1ZSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBXcmFwcGVkRmllbGRQcm9wcyB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpZWxkSW5wdXRQcm9wcyB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBXcmFwcGVkRmllbGRQcm9wcywgSUZpZWxkSW5wdXRQcm9wcyB7fVxuXG5jb25zdCBGaWVsZElucHV0ID0gKHtcbiAgaW5wdXQsXG4gIG5hbWUsXG4gIG1ldGEsXG4gIC4uLnByb3BzXG59OiBJUHJvcHMpID0+IChcbiAgPElucHV0XG4gICAgey4uLmlucHV0fVxuICAgIHsuLi5wcm9wc31cbiAgICBuYW1lPXtuYW1lfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRmllbGRJbnB1dDtcbiIsImNvbnN0IHJhdmVuID0gKHdpbmRvdyBhcyBhbnkpLlJhdmVuO1xuXG5pZiAodHlwZW9mIHJhdmVuICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudi5TRU5UUllfRFNOX0NMSUVOVCkge1xuICByYXZlbi5jb25maWcocHJvY2Vzcy5lbnYuU0VOVFJZX0RTTl9DTElFTlQsIHtcbiAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pLmluc3RhbGwoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZm9udHM6IHtcbiAgICBzYW5zOiBcIk1vbnRzZXJyYXQsIHNhbnMtc2VyaWZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IFtcbiAgICA3NjgsXG4gICAgOTkyLFxuICAgIDEyMDBcbiAgXSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBub3JtYWw6IDQwMCxcbiAgICBib2xkOiA2MDBcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgZGFya0dyZXk6IFwiIzIxMjEyMVwiLFxuICAgIGVycm9yOiBcIiNmZjNiM2JcIixcbiAgICBncmV5OiBcIiM0QTRBNEFcIixcbiAgICBsaWdodEdyZXk6IFwiIzczNzM3M1wiLFxuICAgIHByaW1hcnk6IFwiIzQzY2VhMlwiLFxuICAgIHByaW1hcnkyOiBcIiMyZmRiYWJcIixcbiAgICBzZWNvbmRhcnk6IFwiIzNkOWRmZlwiXG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gXCJmb3VuZC1yZWxheVwiO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gXCIuL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL3JvdXRpbmcvcm91dGVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBSZWJhc3NQcm92aWRlciB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy9zaGFyZWQvdXRpbGl0aWVzL3RoZW1lXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmUvc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IHJlc29sdmVyID0gbmV3IFJlc29sdmVyKGVudmlyb25tZW50KTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8UmViYXNzUHJvdmlkZXJcbiAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICA+XG4gICAgICA8Um91dGVyIG1hdGNoQ29udGV4dD17eyBzdG9yZSB9fSByZXNvbHZlcj17cmVzb2x2ZXJ9IC8+XG4gICAgPC9SZWJhc3NQcm92aWRlcj5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9Db21wb25lbnRzL3NoYXJlZC9zZXR1cEVycm9yTG9nZ2luZ1wiO1xuaW1wb3J0IHJlbmRlck5hdiBmcm9tIFwiLi4vbmF2L25hdkxpbmtDb250YWluZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5kaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvbmJvYXJkb3JcIik7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRpdik7XG5cbi8vIHJlbmRlckFwcCgpO1xuXG4vLyBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbi8vICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uYm9hcmRvclwiKSAmJlxuLy8gICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiI29uYm9hcmRvclwiKSB7XG4vLyAgICAgcmVuZGVyQXBwKCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4vLyAgIHN1YnRyZWU6IHRydWUsXG4vLyAgIGNoaWxkTGlzdDogdHJ1ZSxcbi8vIH0pXG5cbi8vIHJlbmRlck5hdigpO1xuIiwiaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE5ldHdvcmssXG4gIFJlY29yZFNvdXJjZSxcbiAgU3RvcmUsXG59IGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5pbXBvcnQgeyBzZXRFbnZpcm9tZW50IH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgZmV0Y2hRdWVyeSA9IChvcGVyYXRpb246IHsgdGV4dDogc3RyaW5nIH0sIHZhcmlhYmxlczogYW55KSA9PlxuICBmZXRjaChgJHtwcm9jZXNzLmVudi5BUFBfVVJMfS9ncmFwaHFsYCwge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlbGF5L2lzc3Vlcy8xODE2XG4gICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24uZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqc29uKTtcbiAgICB9KTtcblxuY29uc3QgbmV0d29yayA9IE5ldHdvcmsuY3JlYXRlKGZldGNoUXVlcnkpO1xuY29uc3Qgc291cmNlID0gbmV3IFJlY29yZFNvdXJjZSgpO1xuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoc291cmNlKTtcbmNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgbmV0d29yayxcbiAgc3RvcmUsXG59KTtcblxuc2V0RW52aXJvbWVudChlbnZpcm9ubWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuIiwiLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbmltcG9ydCB7IG1ha2VSb3V0ZUNvbmZpZywgUm91dGUgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGRhc2hib2FyZFJvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2Rhc2hib2FyZC9kYXNoYm9hcmRDb250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIG9yZ2FuaXphdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbnNDb250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIG9uYm9hcmRpbmdQcm9jZXNzUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3Mvb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJcIjtcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaW1hcnlMYXlvdXRDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4ucHJpbWFyeUxheW91dENvbnRhaW5lcn0+XG4gICAgPFJvdXRlIHBhdGg9XCIvb25ib2FyZG9yXCIgey4uLmRhc2hib2FyZFJvdXRlQ29uZmlnfT5cbiAgICAgIDxSb3V0ZSB7Li4ub3JnYW5pemF0aW9uc1JvdXRlQ29uZmlnfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJvcmdhbml6YXRpb24vOmlkL29uYm9hcmRpbmdQcm9jZXNzXCIgey4uLm9uYm9hcmRpbmdQcm9jZXNzUm91dGVDb25maWd9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZT4sXG4pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGVkUm91dGVyLCBjcmVhdGVSZW5kZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGVycm9yOiB7XG4gICAgc3RhdHVzOiBudW1iZXJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdGVkUm91dGVyKHtcbiAgcmVuZGVyOiBjcmVhdGVSZW5kZXIoe1xuICAgIHJlbmRlckVycm9yOiAoeyBlcnJvciB9OiBJUHJvcHMpID0+IChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvci5zdGF0dXMgPT09IDQwNCA/ICdOb3QgZm91bmQnIDogJ0Vycm9yJ31cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25zIGFzIEZhcmNlQWN0aW9ucywgSGFzaFByb3RvY29sLCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIsXG4gIHF1ZXJ5TWlkZGxld2FyZSB9IGZyb20gXCJmYXJjZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWF0Y2hFbmhhbmNlciwgZm91bmRSZWR1Y2VyIGFzIGZvdW5kLCBNYXRjaGVyIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tIFwiLi4vcm91dGluZy9yb3V0ZUNvbmZpZ1wiO1xuXG5jb25zdCBoaXN0b3J5RW5oYW5jZXIgPSBjcmVhdGVIaXN0b3J5RW5oYW5jZXIoe1xuICBtaWRkbGV3YXJlczogW3F1ZXJ5TWlkZGxld2FyZV0sXG4gIHByb3RvY29sOiBuZXcgSGFzaFByb3RvY29sKCksXG59KTtcblxuY29uc3QgbWF0Y2hlciA9IG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKTtcbmNvbnN0IG1hdGNoZXJFbmhhbmNlciA9IGNyZWF0ZU1hdGNoRW5oYW5jZXIobWF0Y2hlcik7XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gKHdpbmRvdyBhcyBhbnkpLndpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgbWlkZGxlV2FyZSk7XG5cbnN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3J0YWxSZXBsYWNlciBmcm9tIFwiLi4vdXRpbGl0aWVzL3BvcnRhbFJlcGxhY2VyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBEYXNoYm9hcmQgPSAoe1xuICBjaGlsZHJlbixcbn06IElQcm9wcykgPT4gKFxuICA8UG9ydGFsUmVwbGFjZXIgbm9kZT17ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVwb3NpdG9yeS1jb250ZW50JylbMF19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Qb3J0YWxSZXBsYWNlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsImltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBEYXNoYm9hcmQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIGI1MmZmN2U3ZTIxODYxYzI1OTVkZmRhN2Q0ZjUxMDdjXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBuYXZMaW5rQ29udGFpbmVyX25hdkxpbmskcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgcHJpbWFyeUxheW91dENvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3x8fTtcbmV4cG9ydCB0eXBlIHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgKyRmcmFnbWVudFJlZnM6IG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWZcbnx9O1xuZXhwb3J0IHR5cGUgcHJpbWFyeUxheW91dENvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgcHJpbWFyeUxheW91dENvbnRhaW5lclF1ZXJ5IHtcbiAgLi4ubmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rXG59XG5cbmZyYWdtZW50IG5hdkxpbmtDb250YWluZXJfbmF2TGluayBvbiBRdWVyeSB7XG4gIHNldHVwXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeSB7XFxuICAuLi5uYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcXG59XFxuXFxuZnJhZ21lbnQgbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rIG9uIFF1ZXJ5IHtcXG4gIHNldHVwXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJuYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJzZXR1cFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2I4NTdjMTc1ZGNkYzU2NTAzNzQ2NDBlZjJmYTEzZjRiJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvb3QgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeVwiO1xuaW1wb3J0IHsgSVRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvdHlwZXNcIjtcbmltcG9ydCBOYXZMaW5rIGZyb20gXCIuLi8uLi9uYXYvbmF2TGlua0NvbnRhaW5lclwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGhlbWU6IElUaGVtZTtcbn1cblxuY29uc3QgUHJpbWFyeUxheW91dCA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aGVtZSxcbiAgLi4ucHJvcHNcbn06IElQcm9wcykgPT4gKFxuICA8UHJpbWFyeUxheW91dEVycm9yQm91bmRhcnk+XG4gICAgPFJvb3QgY29sb3I9e3RoZW1lLmNvbG9ycy5ncmV5fT5cbiAgICAgIDxOYXZMaW5rIG5hdkxpbms9e3Byb3BzfSAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUm9vdD5cbiAgPC9QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShQcmltYXJ5TGF5b3V0KTtcbiIsImltcG9ydCBQcmltYXJ5TGF5b3V0IGZyb20gXCIuL3ByaW1hcnlMYXlvdXRcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcblxuY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnkge1xuICAgIC4uLm5hdkxpbmtDb250YWluZXJfbmF2TGlua1xuICB9XG5gO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyID0gUHJpbWFyeUxheW91dDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBxdWVyeSxcbiAgQ29tcG9uZW50OiBQcmltYXJ5TGF5b3V0Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dENvbnRhaW5lcjtcbiIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBuYXZMaW5rQ29udGFpbmVyX25hdkxpbmskcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIG5hdkxpbmtDb250YWluZXJfbmF2TGluayA9IHt8XG4gICtzZXR1cDogP3N0cmluZyxcbiAgKyRyZWZUeXBlOiBuYXZMaW5rQ29udGFpbmVyX25hdkxpbmskcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJuYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcIixcbiAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcInNldHVwXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfVxuICBdXG59O1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc4MmM0ODNlYTQzYmM4ODQ5NTg1ZTE2YjdmZWUxN2VhNSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcbmltcG9ydCB7IExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCB7IElNYXRjaCwgSVN0eWxlUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vQ29tcG9uZW50cy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbWF0Y2g6IElNYXRjaDtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQW5jaG9yUHJvcHMgZXh0ZW5kcyBJU3R5bGVQcm9wcyB7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBBbmNob3IgPSBzdHlsZWQoTGluaylgXG4gICR7KHByb3BzOiBJQW5jaG9yUHJvcHMpID0+IHByb3BzLnNlbGVjdGVkICYmIChcbiAgICBgJi5yZXBvbmF2LWl0ZW0uc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fSByZ2IoMjI5LCAyMjksIDIyOSkgdHJhbnNwYXJlbnQ7XG4gICAgfWBcbiAgKX1cbmA7XG5cbmNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIHB1YmxpYyBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgIC8vICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNvbmJvYXJkb3JcIikge1xuICAgIC8vICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmVwb25hdi1pdGVtLnNlbGVjdGVkOm5vdChbaWQ9JyR7aWR9J10pYCk7XG5cbiAgICAvLyAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgIC8vICAgICAgIHNlbGVjdGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHRydWUgfSk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgLy8gICBzdWJ0cmVlOiB0cnVlLFxuICAgIC8vICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIC8vIH0pXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIG5vZGU9e2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZXBvbmF2XCIpWzBdfT5cbiAgICAgICAgPEFuY2hvclxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgIHRvPVwiL29uYm9hcmRvclwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwicmVwb25hdi1pdGVtXCIsIHRoaXMucHJvcHMuc2VsZWN0ZWQgJiYgXCJzZWxlY3RlZFwiKX1cbiAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBvbmJvYXJkb3JcbiAgICAgICAgPC9BbmNob3I+XG4gICAgICA8L1BvcnRhbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2TGluayk7XG4iLCJpbXBvcnQgTmF2TGluayBmcm9tIFwiLi9uYXZMaW5rXCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjb21wb3NlLCBicmFuY2gsIHJlbmRlckNvbXBvbmVudCwgZmxhdHRlblByb3AsIHdpdGhTdGF0ZUhhbmRsZXJzLCB3aXRoUHJvcHMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgb0F1dGhOYXZMaW5rIGZyb20gXCIuL29BdXRoTmF2TGlua1wiO1xuaW1wb3J0IHsgZnJhZ21lbnQgfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG4vLyBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbi8vICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9uYm9hcmRvci1uYXYtbGlua1wiKSkge1xuLy8gICAgIHJlbmRlck5hdigpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuLy8gICBzdWJ0cmVlOiB0cnVlLFxuLy8gICBjaGlsZExpc3Q6IHRydWUsXG4vLyB9KTtcblxuY29uc3QgaWQgPSBcIm9uYm9hcmRvci1uYXYtbGlua1wiO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBuYXZMaW5rQ29udGFpbmVyX25hdkxpbmsgb24gUXVlcnkge1xuICAgIHNldHVwXG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBzZXR1cDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IHN0YXRlSGFuZGxlcnMgPSB7XG4gIG9uQ2xpY2s6ICh7IHNlbGVjdGVkIH06IElTdGF0ZSkgPT4gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5yZXBvbmF2LWl0ZW0uc2VsZWN0ZWQ6bm90KFtpZD0nJHtpZH0nXSlgKTtcblxuICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHNlbGVjdGVkSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkOiAhc2VsZWN0ZWQsXG4gICAgfTtcbiAgfSxcbn07XG5cbmNvbnN0IE5hdkxpbmtDb250YWluZXIgPSBjb21wb3NlKFxuICBmcmFnbWVudChmcmFnbWVudHMpLFxuICBmbGF0dGVuUHJvcCgnbmF2TGluaycpLFxuICBicmFuY2goXG4gICAgKHByb3BzOiBJUHJvcHMpID0+ICEhcHJvcHMuc2V0dXAsXG4gICAgcmVuZGVyQ29tcG9uZW50KG9BdXRoTmF2TGluayksXG4gICksXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKHsgc2VsZWN0ZWQ6IGZhbHNlIH0sIHN0YXRlSGFuZGxlcnMpLFxuICB3aXRoUHJvcHMoe1xuICAgIGlkLFxuICB9KSxcbikoKE5hdkxpbmspKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcblxuY29uc3QgaWQgPSBcIm9uYm9hcmRvci1uYXYtbGlua1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgc2V0dXA6IHN0cmluZztcbn1cblxuY29uc3QgT0F1dGhOYXZMaW5rID0gKHtcbiAgc2V0dXAsXG59OiBJUHJvcHMpID0+IChcbiAgPFBvcnRhbCBub2RlPXtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVwb25hdlwiKVswXX0+XG4gICAgPGFcbiAgICAgIGlkPXtpZH1cbiAgICAgIGhyZWY9e3NldHVwfVxuICAgICAgY2xhc3NOYW1lPVwicmVwb25hdi1pdGVtXCJcbiAgICA+XG4gICAgICBvbmJvYXJkb3JcbiAgICA8L2E+XG4gIDwvUG9ydGFsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT0F1dGhOYXZMaW5rO1xuIiwiaW1wb3J0IHsgUG9ydGFsLCBQb3J0YWxQcm9wcyB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUG9ydGFsUmVwbGFjZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UG9ydGFsUHJvcHM+IHtcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm5vZGUpIHtcbiAgICAgIHRoaXMucHJvcHMubm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIG5vZGU9e3RoaXMucHJvcHMubm9kZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWxSZXBsYWNlcjtcbiIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT48dGl0bGU+cGVuY2lsPC90aXRsZT48cGF0aCBkPVwiTTExLjQ0NS4wNTVMMi41IDlINHYxaDF2MWgxdjFoMXYxLjQ5NWw4Ljk0NS04LjkzOWMuNS0yLTIuNS01LTQuNS00LjV6TTYgMTNINXYtMUg0di0xSDN2LTFoLS44NTdMMCAxNmw2LTIuMTQ0elwiIC8+PC9zdmc+O1xufSk7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBzdHlsZXMgPSB7fVxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInN0eWxlc1wiXSk7XG5cbiAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9Pjx0aXRsZT5jcm9zczwvdGl0bGU+PHBhdGggZD1cIk0xMy45NTcgMy40NTdsLTEuNDE0LTEuNDE0TDggNi41ODYgMy40NTcgMi4wNDMgMi4wNDMgMy40NTcgNi41ODYgOGwtNC41NDMgNC41NDMgMS40MTQgMS40MTRMOCA5LjQxNGw0LjU0MyA0LjU0MyAxLjQxNC0xLjQxNEw5LjQxNCA4elwiIC8+PC9zdmc+O1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==