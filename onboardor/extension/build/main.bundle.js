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
 * @relayHash af93bc6e63354e6ec5f210ed3453b386
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type navLinkContainer_navLink$ref = any;
export type primaryLayoutContainerQueryVariables = {|
  redirectUrl?: ?string
|};
export type primaryLayoutContainerQueryResponse = {|
  +$fragmentRefs: navLinkContainer_navLink$ref
|};
export type primaryLayoutContainerQuery = {|
  variables: primaryLayoutContainerQueryVariables,
  response: primaryLayoutContainerQueryResponse,
|};
*/

/*
query primaryLayoutContainerQuery(
  $redirectUrl: String
) {
  ...navLinkContainer_navLink
}

fragment navLinkContainer_navLink on Query {
  setup(redirectUrl: $redirectUrl)
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "redirectUrl",
    "type": "String",
    "defaultValue": null
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "primaryLayoutContainerQuery",
    "id": null,
    "text": "query primaryLayoutContainerQuery(\n  $redirectUrl: String\n) {\n  ...navLinkContainer_navLink\n}\n\nfragment navLinkContainer_navLink on Query {\n  setup(redirectUrl: $redirectUrl)\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "primaryLayoutContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "navLinkContainer_navLink",
        "args": null
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "primaryLayoutContainerQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "setup",
        "args": [{
          "kind": "Variable",
          "name": "redirectUrl",
          "variableName": "redirectUrl",
          "type": "String"
        }],
        "storageKey": null
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '279434f8dfa33037fcbbab4413e964df';
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

  if (node.hash && node.hash !== "279434f8dfa33037fcbbab4413e964df") {
    console.error("The definition of 'primaryLayoutContainerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/primaryLayoutContainerQuery.graphql */ "./extension/Components/layouts/primaryLayout/__generated__/primaryLayoutContainerQuery.graphql.js");
};
var PrimaryLayoutContainer = _primaryLayout2.default;
var routeConfig = exports.routeConfig = {
  prepareVariables: function prepareVariables() {
    return {
      redirectUrl: "" + location.origin + location.pathname + "%23/onboardor"
    };
  },
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
  "argumentDefinitions": [{
    "kind": "RootArgument",
    "name": "redirectUrl",
    "type": "String"
  }],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "setup",
    "args": [{
      "kind": "Variable",
      "name": "redirectUrl",
      "variableName": "redirectUrl",
      "type": "String"
    }],
    "storageKey": null
  }]
};
// prettier-ignore
node /*: any*/.hash = '1a2d2a5987e20c40b2f4c759e0eee1fc';
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
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
            if (this.props.match.location.pathname.includes("/onboardor")) {
                var selectedItem = document.querySelector(".reponav-item.selected:not([id='" + id + "'])");
                if (selectedItem) {
                    selectedItem.classList.remove("selected");
                }
                this.setState({ selected: true });
            } else {
                this.setState({ selected: false });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_reactPortal.Portal, { node: document.getElementsByClassName("reponav")[0] }, _react2.default.createElement(Anchor, { id: this.props.id, to: "/onboardor", className: (0, _classnames2.default)("reponav-item", this.state.selected && "selected"), selected: this.state.selected, onClick: this.props.onClick }, "onboardor"));
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
var fragments = {
  navLink: function navLink() {
    var node = __webpack_require__(/*! ./__generated__/navLinkContainer_navLink.graphql */ "./extension/Components/nav/__generated__/navLinkContainer_navLink.graphql.js");

    if (node.hash && node.hash !== "1a2d2a5987e20c40b2f4c759e0eee1fc") {
      console.error("The definition of 'navLinkContainer_navLink' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(/*! ./__generated__/navLinkContainer_navLink.graphql */ "./extension/Components/nav/__generated__/navLinkContainer_navLink.graphql.js");
  }
};
var NavLinkContainer = (0, _recompose.compose)((0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)('navLink'), (0, _recompose.branch)(function (props) {
  return !!props.setup;
}, (0, _recompose.renderComponent)(_oAuthNavLink2.default)))(_navLink2.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9hZGRQaXBlbGluZU11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9hZGRQaXBlbGluZU11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9vbmJvYXJkaW5nUHJvY2Vzcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3Mvb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvX19nZW5lcmF0ZWRfXy9vcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbnMudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2VsZWN0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmcudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9fX2dlbmVyYXRlZF9fL3ByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L19fZ2VuZXJhdGVkX18vbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L25hdkxpbmsudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL25hdi9uYXZMaW5rQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9uYXYvb0F1dGhOYXZMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXIudHN4Iiwid2VicGFjazovLy8uL3d3d3Jvb3QvYXNzZXRzL1BlbmNpbC5zdmciLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9hc3NldHMvY3Jvc3Muc3ZnIl0sIm5hbWVzIjpbIm5vZGUiLCJ2MCIsInYxIiwidjIiLCJ2MyIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwib2JqIiwia2V5cyIsInRhcmdldCIsImkiLCJpbmRleE9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX3JlZiIsInN0eWxlcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7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eEIsU0FBTztBQUFBO0FBQUEsNkJBQUssT0FBTSw0QkFBWCxFQUF3QyxPQUFNLElBQTlDLEVBQW1ELFFBQU8sSUFBMUQsRUFBK0QsU0FBUSxXQUF2RSxJQUF1RkUsS0FBdkY7QUFBOEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE5RjtBQUFrSCw0Q0FBTSxHQUFFLHNJQUFSO0FBQWxILEdBQVA7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIGYyN2Y3Zjc0NTJlNDkyMDdiMDdmNmNmZDU4OGFjZjEwXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBvcmdhbml6YXRpb25JZDogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG59O1xuZXhwb3J0IHR5cGUgYWRkUGlwZWxpbmVNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiBBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dFxufH07XG5leHBvcnQgdHlwZSBhZGRQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArYWRkUGlwZWxpbmU6ID97fFxuICAgICtvcmdhbml6YXRpb246IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZlxuICAgIHx9XG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIGFkZFBpcGVsaW5lTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IGFkZFBpcGVsaW5lTXV0YXRpb25WYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBhZGRQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIGFkZFBpcGVsaW5lTXV0YXRpb24oXG4gICRpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4pIHtcbiAgYWRkUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICBvcmdhbml6YXRpb25JZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBhZGRQaXBlbGluZU11dGF0aW9uKFxcbiAgJGlucHV0OiBBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcXG4pIHtcXG4gIGFkZFBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcXG4gICAgb3JnYW5pemF0aW9uIHtcXG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xcbiAgb3JnYW5pemF0aW9uSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgICAgaWRcXG4gICAgICBuYW1lXFxuICAgICAgZGVzY3JpcHRpb25cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZU11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBZGRPbmJvYXJkaW5nUGlwZWxpbmVQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1N0ZXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMjBiNjdlNjhjMzk5MjBlODE3NjYzMmU5OTE0M2ZlMzUnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCBlZmRhN2E0YzczMGFiMDc2MjkyZDI1ZWY0ZjY4MzAwZlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICBpZDogc3RyaW5nXG58fTtcbmV4cG9ydCB0eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlSZXNwb25zZSA9IHt8XG4gICtub2RlOiA/e3xcbiAgICArJGZyYWdtZW50UmVmczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZlxuICB8fVxufH07XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzLFxuICByZXNwb25zZTogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5KFxuICAkaWQ6IElEIVxuKSB7XG4gIG5vZGUoaWQ6ICRpZCkge1xuICAgIF9fdHlwZW5hbWVcbiAgICAuLi4gb24gT3JnYW5pemF0aW9uIHtcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgIH1cbiAgICBpZFxuICB9XG59XG5cbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICBvcmdhbml6YXRpb25JZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgIFwidHlwZVwiOiBcIklEIVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaWRcIixcbiAgICBcInR5cGVcIjogXCJJRCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5KFxcbiAgJGlkOiBJRCFcXG4pIHtcXG4gIG5vZGUoaWQ6ICRpZCkge1xcbiAgICBfX3R5cGVuYW1lXFxuICAgIC4uLiBvbiBPcmdhbml6YXRpb24ge1xcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxcbiAgICB9XFxuICAgIGlkXFxuICB9XFxufVxcblxcbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xcbiAgb3JnYW5pemF0aW9uSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgICAgaWRcXG4gICAgICBuYW1lXFxuICAgICAgZGVzY3JpcHRpb25cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibm9kZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBudWxsLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJJbmxpbmVGcmFnbWVudFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcIm5vZGVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogbnVsbCxcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIl9fdHlwZW5hbWVcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHYyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIklubGluZUZyYWdtZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZDhkOWUxNDg5NGNhNTI4ZjAxMmQ4Mjg2N2Q4OWEzNmEnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uID0ge3xcbiAgK29yZ2FuaXphdGlvbklkOiBudW1iZXIsXG4gICtuYW1lOiBzdHJpbmcsXG4gICtvbmJvYXJkaW5nUGlwZWxpbmVzOiAkUmVhZE9ubHlBcnJheTw/e3xcbiAgICAraWQ6IHN0cmluZyxcbiAgICArbmFtZTogc3RyaW5nLFxuICAgICtvbmJvYXJkaW5nU3RlcHM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICAgK2lkOiBzdHJpbmcsXG4gICAgICArbmFtZTogc3RyaW5nLFxuICAgICAgK2Rlc2NyaXB0aW9uOiA/c3RyaW5nLFxuICAgIHx9PixcbiAgfH0+LFxuICArJHJlZlR5cGU6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYxID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblwiLFxuICBcInR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfSxcbiAgICB2MCxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgdjEsXG4gICAgICAgIHYwLFxuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgIHYxLFxuICAgICAgICAgICAgdjAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMjY4MmYyZTRlM2M1NzZhZDUyMjEwZTdhNmQ0ODExMzUnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY3JlYXRlTXV0YXRpb24gfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG4gIG11dGF0aW9uIGFkZFBpcGVsaW5lTXV0YXRpb24oXG4gICAgJGlucHV0OiBBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcbiAgKSB7XG4gICAgYWRkUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgb3JnYW5pemF0aW9uIHtcbiAgICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdGlvbklucHV0IHtcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBvcmdhbml6YXRpb25JZCwgbmFtZSB9OiBJTXV0YXRpb25JbnB1dCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIG9yZ2FuaXphdGlvbklkLFxuICAgICAgbmFtZSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0LCBSb3csIENvbHVtbiwgQm94LCBCdXR0b25UcmFuc3BhcmVudCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IElPcmdhbml6YXRpb24gfSBmcm9tIFwiLi4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NoYXJlZC9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgRmllbGRJbnB1dCBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9maWVsZElucHV0XCI7XG5pbXBvcnQgeyBGaWVsZCwgSW5qZWN0ZWRGb3JtUHJvcHMgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL2Nyb3NzLnN2Z1wiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi4vLi4vLi4vd3d3cm9vdC9hc3NldHMvUGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJncmlkLXN0eWxlZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSW5qZWN0ZWRGb3JtUHJvcHMge1xuICBvcmdhbml6YXRpb246IElPcmdhbml6YXRpb247XG4gIGFkZFBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVQaXBlbGluZTogKCkgPT4gdm9pZDtcbiAgaXNBZGRpbmdQaXBlbGluZTogYm9vbGVhbjtcbn1cblxuY29uc3QgUGlwZWxpbmVSb3cgPSBzdHlsZWQoUm93KWBcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbiAgaGVpZ2h0OiA3MDBweDtcbmA7XG5cbmNvbnN0IFBpcGVsaW5lQ29sdW1uID0gc3R5bGVkKENvbHVtbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1heC13aWR0aDogMjYycHg7XG5gO1xuXG5jb25zdCBTdGVwID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiA1cHggMDtcbmA7XG5cbmNvbnN0IEljb25CdXR0b24gPSBzdHlsZWQoQnV0dG9uVHJhbnNwYXJlbnQpYFxuICBwYWRkaW5nOiA1cHg7XG5gO1xuXG5jb25zdCBhZGRQaXBlbGluZVZhbGlkYXRvciA9IGNyZWF0ZUZpZWxkVmFsaWRhdG9yKFtcInJlcXVpcmVkXCJdKTtcblxuY29uc3QgT25ib2FyZGluZ1Byb2Nlc3MgPSAoe1xuICBvcmdhbml6YXRpb24sXG4gIHRvZ2dsZVBpcGVsaW5lLFxuICBpc0FkZGluZ1BpcGVsaW5lLFxuICBoYW5kbGVTdWJtaXQsXG59OiBJUHJvcHMpID0+IChcbiAgPENvbnRhaW5lciBtYXhXaWR0aD1cIjEwMCVcIj5cbiAgICA8VGV4dCBtdD17MjB9IG1iPXs0MH0gZm9udFNpemU9ezIwfT5cbiAgICAgIDxUZXh0IGlzPVwic3BhblwiIGRpc3BsYXk9XCJpbmxpbmVcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICB7b3JnYW5pemF0aW9uLm5hbWV9XG4gICAgICA8L1RleHQ+IG9uLWJvYXJkaW5nIHByb2Nlc3NcbiAgICA8L1RleHQ+XG4gICAgPFBpcGVsaW5lUm93PlxuICAgICAge29yZ2FuaXphdGlvbi5vbmJvYXJkaW5nUGlwZWxpbmVzLm1hcCgocGlwZWxpbmUpID0+IChcbiAgICAgICAgPFBpcGVsaW5lQ29sdW1uIGtleT17cGlwZWxpbmUuaWR9IHA9ezE2fT5cbiAgICAgICAgICA8Qm94IHBiPXsxNn0+XG4gICAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9ezE4fT57cGlwZWxpbmUubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG1sPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxQZW5jaWwgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8Q3Jvc3MgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHtwaXBlbGluZS5vbmJvYXJkaW5nU3RlcHMubWFwKChzdGVwKSA9PiAoXG4gICAgICAgICAgICA8U3RlcCBrZXk9e3N0ZXAuaWR9PlxuICAgICAgICAgICAgICA8Qm94IGJnPVwid2hpdGVcIiBwPXsxMH0gYnI9ezR9PlxuICAgICAgICAgICAgICAgIHtzdGVwLm5hbWV9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BpcGVsaW5lQ29sdW1uPlxuICAgICAgKSl9XG4gICAgICA8UGlwZWxpbmVDb2x1bW4gcHg9ezB9PlxuICAgICAgICB7aXNBZGRpbmdQaXBlbGluZSA/IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0ZpZWxkSW5wdXR9XG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaXBlbGluZSBuYW1lXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGU9e2FkZFBpcGVsaW5lVmFsaWRhdG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCb3ggbXQ9ezEwfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBtcj17MTB9PkNyZWF0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVQaXBlbGluZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBpcGVsaW5lfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+QWRkIGEgcGlwZWxpbmUuLi48L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvUGlwZWxpbmVDb2x1bW4+XG4gICAgPC9QaXBlbGluZVJvdz5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPbmJvYXJkaW5nUHJvY2VzcztcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHJlbmFtZVByb3AsIHdpdGhIYW5kbGVycywgd2l0aFN0YXRlSGFuZGxlcnMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgT25ib2FyZGluZ1Byb2Nlc3MgZnJvbSBcIi4vb25ib2FyZGluZ1Byb2Nlc3NcIjtcbmltcG9ydCBhZGRQaXBlbGluZU11dGF0aW9uIGZyb20gXCIuL2FkZFBpcGVsaW5lTXV0YXRpb25cIjtcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgeyBJT3JnYW5pemF0aW9uIH0gZnJvbSBcIi4uL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb25cIjtcbmltcG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5KFxuICAgICRpZDogSUQhXG4gICkge1xuICAgIG5vZGUoXG4gICAgICBpZDogJGlkXG4gICAgKSB7XG4gICAgICAuLi5vbiBPcmdhbml6YXRpb24ge1xuICAgICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICAgIG9yZ2FuaXphdGlvbklkXG4gICAgbmFtZVxuICAgIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvcmdhbml6YXRpb246IElPcmdhbml6YXRpb247XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpc0FkZGluZ1BpcGVsaW5lOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSUlucHV0IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgb25TdWJtaXQ6ICh7IG9yZ2FuaXphdGlvbiB9OiBJUHJvcHMpID0+IChpbnB1dDogSUlucHV0KSA9PlxuICAgIGFkZFBpcGVsaW5lTXV0YXRpb24oeyBvcmdhbml6YXRpb25JZDogb3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbklkLCAuLi5pbnB1dCB9KSxcbn07XG5cbmNvbnN0IHN0YXRlSGFuZGxlcnMgPSB7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoeyBpc0FkZGluZ1BpcGVsaW5lIH06IElTdGF0ZSkgPT4gKCkgPT4gKHtcbiAgICBpc0FkZGluZ1BpcGVsaW5lOiAhaXNBZGRpbmdQaXBlbGluZSxcbiAgfSksXG59O1xuXG5jb25zdCBDb21wb25lbnQgPSBjb21wb3NlKFxuICByZW5hbWVQcm9wKFwibm9kZVwiLCBcIm9yZ2FuaXphdGlvblwiKSxcbiAgZnJhZ21lbnQoZnJhZ21lbnRzKSxcbiAgd2l0aFN0YXRlSGFuZGxlcnMoeyBpc0FkZGluZ1BpcGVsaW5lOiBmYWxzZSB9LCBzdGF0ZUhhbmRsZXJzKSxcbiAgd2l0aEhhbmRsZXJzKGhhbmRsZXJzKSxcbiAgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnb25ib2FyZGluZycsXG4gIH0pLFxuKShPbmJvYXJkaW5nUHJvY2Vzcyk7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50LFxuICBxdWVyeSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggNGNlMDA1NDY4NTQzN2I3YjNjMTdiNTQ1OWRiZmMyODdcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fHx9O1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArb3JnYW5pemF0aW9uczogJFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2lkOiBzdHJpbmcsXG4gICAgK25hbWU6IHN0cmluZyxcbiAgICArYXZhdGFyVXJsOiBzdHJpbmcsXG4gIHx9PlxufH07XG5leHBvcnQgdHlwZSBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkge1xuICBvcmdhbml6YXRpb25zIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICBhdmF0YXJVcmxcbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc1wiLFxuICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgIFwiYXJnc1wiOiBudWxsLFxuICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhdmF0YXJVcmxcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkge1xcbiAgb3JnYW5pemF0aW9ucyB7XFxuICAgIGlkXFxuICAgIG5hbWVcXG4gICAgYXZhdGFyVXJsXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogdjBcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogdjBcbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzMyZDE0ODA4OTY3ZjliMDg3ZTcwMTI2ZmE3MTdhMjk2Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCB7IEZsZXggfSBmcm9tIFwiZ3JpZC1zdHlsZWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhY2tncm91bmRJbWFnZSwgU3ViaGVhZCwgVGV4dCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IG5hbWVNYXJnaW4sIFNlbGVjdENhcmQgfSBmcm9tIFwiLi4vLi4vc2VsZWN0L3N0eWxlc1wiO1xuaW1wb3J0IHsgSVJvdXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBJT3JnYW5pemF0aW9uIH0gZnJvbSBcIi4uL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb25cIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElSb3V0ZSB7XG4gIG9yZ2FuaXphdGlvbnM6IElPcmdhbml6YXRpb25bXTtcbn1cblxuY29uc3QgT3JnYW5pemF0aW9ucyA9ICh7XG4gIG9yZ2FuaXphdGlvbnMsXG4gIG1hdGNoLFxufTogSVByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPFRleHQgbXk9ezMwfT5cbiAgICAgIENob29zZSBhbiBvcmdhbml6YXRpb25cbiAgICA8L1RleHQ+XG5cbiAgICA8RmxleCBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgIHtvcmdhbml6YXRpb25zLm1hcCgob3JnYW5pemF0aW9uKSA9PiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17b3JnYW5pemF0aW9uLmlkfVxuICAgICAgICAgICAgdG89e2Ake21hdGNoLmxvY2F0aW9uLnBhdGhuYW1lfS9vcmdhbml6YXRpb24vJHtvcmdhbml6YXRpb24uaWR9L29uYm9hcmRpbmdQcm9jZXNzYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2VsZWN0Q2FyZFxuICAgICAgICAgICAgICBtPXtjYXJkTWFyZ2lufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlIHdpZHRoPXsyMDB9IHNyYz17b3JnYW5pemF0aW9uLmF2YXRhclVybH0gcmF0aW89ezF9IC8+XG4gICAgICAgICAgICAgIDxTdWJoZWFkIHRleHRBbGlnbj1cImNlbnRlclwiIG10PXtuYW1lTWFyZ2lufT57b3JnYW5pemF0aW9uLm5hbWV9PC9TdWJoZWFkPlxuICAgICAgICAgICAgPC9TZWxlY3RDYXJkPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvRmxleD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25zO1xuIiwiaW1wb3J0IHsgUmVkaXJlY3RFeGNlcHRpb24gfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcblxuaW1wb3J0IHsgSVJvdXRlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgT3JnYW5pemF0aW9ucyBmcm9tIFwiLi9vcmdhbml6YXRpb25zXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5IHtcbiAgICBvcmdhbml6YXRpb25zIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBhdmF0YXJVcmxcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBPcmdhbml6YXRpb25zLFxuICBxdWVyeSxcbiAgcmVuZGVyOiAocm91dGU6IElSb3V0ZSkgPT4ge1xuICAgIGlmIChyb3V0ZS5wcm9wcykge1xuICAgICAgaWYgKHJvdXRlLnByb3BzLm9yZ2FuaXphdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBSZWRpcmVjdEV4Y2VwdGlvbihcbiAgICAgICAgICBgJHtyb3V0ZS5tYXRjaC5sb2NhdGlvbi5wYXRobmFtZX0vb3JnYW5pemF0aW9uLyR7cm91dGUucHJvcHMub3JnYW5pemF0aW9uc1swXS5pZH0vb25ib2FyZGluZ1Byb2Nlc3NgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiA8T3JnYW5pemF0aW9ucyB7Li4ucm91dGUucHJvcHN9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZ2FuaXphdGlvbnM7XG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jbGFzcyBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM+IHtcbiAgLy8gY29tcG9uZW50RGlkQ2F0Y2goKSB7XG4gIC8vICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Vycm9yLzUwMCcpO1xuICAvLyB9XG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U8SVByb3BzLCBJUHJvcHM+KFxuICB3aXRoUm91dGVyLFxuKShQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSk7XG4iLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElUaGVtZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSVN0eWxlUHJvcHMge1xuICB0aGVtZTogSVRoZW1lO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RDYXJkID0gc3R5bGVkKENhcmQpYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJHsoeyBzZWxlY3RlZCwgdGhlbWUgfTogSVN0eWxlUHJvcHMpID0+IHNlbGVjdGVkICYmIGBcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2VlZSwgMCAwIDdweCAzcHggJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgY2FyZE1hcmdpbiA9IDExO1xuZXhwb3J0IGNvbnN0IG5hbWVNYXJnaW4gPSA3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIGFzIFJlYmFzc0J1dHRvbiwgQnV0dG9uUHJvcHMgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyByZW5hbWVQcm9wIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHN0eWxlZCwgeyB3aXRoVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IElUaGVtZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMge1xuICBhcHBUaGVtZTogSVRoZW1lO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZCgoeyBhcHBUaGVtZSwgLi4ucHJvcHMgfTogSVByb3BzKSA9PlxuICA8UmViYXNzQnV0dG9uIGJnPXthcHBUaGVtZS5jb2xvcnMucHJpbWFyeX0gey4uLnByb3BzfSAvPilgXG4gICY6bm90KDpkaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlPHt9LCBJUHJvcHM+KFxuICB3aXRoVGhlbWUsXG4gIHJlbmFtZVByb3AoXCJ0aGVtZVwiLCBcImFwcFRoZW1lXCIpLFxuKShCdXR0b24pO1xuIiwiY29uc3QgZGVmYXVsdEVycm9yTWVzc2FnZXMgPSB7XG4gIGVtYWlsOiBcIkVtYWlsIG11c3QgY29udGFpbiBhbiAnQCcgYW5kIGEgJy4nIHRvIGJlIHZhbGlkXCIsXG4gIHJlcXVpcmVkOiBcIlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIixcbn07XG5cbmNvbnN0IFJVTEVTOiBJUnVsZSA9IHtcbiAgZW1haWw6IC8uK0AuK1xcLi4rL2ksXG4gIHJlcXVpcmVkOiAodmFsdWUpID0+IChcbiAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgdmFsdWUgIT09IG51bGwgJiZcbiAgICAodHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PT0gdHJ1ZSkgJiZcbiAgICAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8IHZhbHVlLmxlbmd0aCA+IDApICYmXG4gICAgKCFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPiAwKSAmJlxuICAgICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApXG4gICksXG59O1xuXG5pbnRlcmZhY2UgSVJ1bGUge1xuICBlbWFpbDogUmVnRXhwO1xuICByZXF1aXJlZDogKHZhbHVlOiBhbnkpID0+IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJTWF0Y2hlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdGVzdDogKHZhbHVlOiBhbnkpID0+IGJvb2xlYW47XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRNYXRjaGVyID0gKG5hbWU6IGtleW9mKElSdWxlKSwgZXJyb3JNZXNzYWdlID0gZGVmYXVsdEVycm9yTWVzc2FnZXNbbmFtZV0pOiBJTWF0Y2hlciA9PiB7XG4gIGNvbnN0IHJ1bGUgPSBSVUxFU1tuYW1lXTtcblxuICBpZiAoIXJ1bGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHJ1bGUgZm9yIG5hbWUgXCIke25hbWV9XCIgZGVmaW5lZGApO1xuICB9XG5cbiAgY29uc3QgdGVzdCA9IHR5cGVvZiBydWxlID09PSBcImZ1bmN0aW9uXCIgPyBydWxlIDogKHZhbHVlOiBhbnkpID0+IHJ1bGUudGVzdCh2YWx1ZSk7XG5cbiAgcmV0dXJuIHsgbmFtZSwgdGVzdCwgZXJyb3JNZXNzYWdlIH07XG59O1xuXG5jb25zdCBjcmVhdGVWYWxpZGF0ZSA9IChtYXRjaGVyczogSU1hdGNoZXJbXSwgdmFsdWU6IGFueSkgPT4ge1xuICBjb25zdCBpbnZhbGlkTWF0Y2hlciA9IG1hdGNoZXJzLmZpbmQoKG1hdGNoZXIpID0+ICFtYXRjaGVyLnRlc3QodmFsdWUpKTtcblxuICBpZiAoIWludmFsaWRNYXRjaGVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBpbnZhbGlkTWF0Y2hlci5lcnJvck1lc3NhZ2UgfHwgdHJ1ZTtcbn07XG5cbnR5cGUgdmFsaWRhdGlvbiA9IEFycmF5PGtleW9mKElSdWxlKSB8IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcsXG4gIH0+O1xuXG5leHBvcnQgZGVmYXVsdCAodmFsaWRhdGlvbnM6IHZhbGlkYXRpb24gPSBbXSkgPT4gKHZhbHVlOiBhbnkpID0+IHtcbiAgbGV0IG1hdGNoZXJzOiBJTWF0Y2hlcltdID0gW107XG5cbiAgdmFsaWRhdGlvbnMuZm9yRWFjaCgodmFsaWRhdGlvbikgPT4ge1xuICAgIGlmICh2YWxpZGF0aW9uICYmIHR5cGVvZiB2YWxpZGF0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB2YWxpZGF0aW9uTWF0Y2hlcnMgPSBnZXRNYXRjaGVyKHZhbGlkYXRpb24pO1xuXG4gICAgICBtYXRjaGVycyA9IG1hdGNoZXJzLmNvbmNhdCh2YWxpZGF0aW9uTWF0Y2hlcnMpO1xuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbiAmJiB0eXBlb2YgdmFsaWRhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3QgdmFsaWRhdGlvbk1hdGNoZXJzID0gT2JqZWN0LmtleXModmFsaWRhdGlvbikubWFwKFxuICAgICAgICAocnVsZU5hbWU6IGtleW9mKElSdWxlKSkgPT4gZ2V0TWF0Y2hlcihydWxlTmFtZSwgdmFsaWRhdGlvbltydWxlTmFtZV0pLFxuICAgICAgKTtcblxuICAgICAgbWF0Y2hlcnMgPSBtYXRjaGVycy5jb25jYXQodmFsaWRhdGlvbk1hdGNoZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsaWRhdGlvbnMgbmVlZHMgdG8gYmUgYW4gYXJyYXkgb2YgdHlwZSBbJ3J1bGUnXSBvciBbeyBydWxlTmFtZTogJ2Vycm9yTWVzc2FnZScgfV1cIik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3JlYXRlVmFsaWRhdGUobWF0Y2hlcnMsIHZhbHVlKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IFdyYXBwZWRGaWVsZFByb3BzIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRmllbGRJbnB1dFByb3BzIHtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFdyYXBwZWRGaWVsZFByb3BzLCBJRmllbGRJbnB1dFByb3BzIHt9XG5cbmNvbnN0IEZpZWxkSW5wdXQgPSAoe1xuICBpbnB1dCxcbiAgbmFtZSxcbiAgbWV0YSxcbiAgLi4ucHJvcHNcbn06IElQcm9wcykgPT4gKFxuICA8SW5wdXRcbiAgICB7Li4uaW5wdXR9XG4gICAgey4uLnByb3BzfVxuICAgIG5hbWU9e25hbWV9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZElucHV0O1xuIiwiY29uc3QgcmF2ZW4gPSAod2luZG93IGFzIGFueSkuUmF2ZW47XG5cbmlmICh0eXBlb2YgcmF2ZW4gIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52LlNFTlRSWV9EU05fQ0xJRU5UKSB7XG4gIHJhdmVuLmNvbmZpZyhwcm9jZXNzLmVudi5TRU5UUllfRFNOX0NMSUVOVCwge1xuICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSkuaW5zdGFsbCgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmb250czoge1xuICAgIHNhbnM6IFwiTW9udHNlcnJhdCwgc2Fucy1zZXJpZlwiLFxuICB9LFxuICBicmVha3BvaW50czogW1xuICAgIDc2OCxcbiAgICA5OTIsXG4gICAgMTIwMFxuICBdLFxuICBmb250V2VpZ2h0czoge1xuICAgIG5vcm1hbDogNDAwLFxuICAgIGJvbGQ6IDYwMFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICBkYXJrR3JleTogXCIjMjEyMTIxXCIsXG4gICAgZXJyb3I6IFwiI2ZmM2IzYlwiLFxuICAgIGdyZXk6IFwiIzRBNEE0QVwiLFxuICAgIGxpZ2h0R3JleTogXCIjNzM3MzczXCIsXG4gICAgcHJpbWFyeTogXCIjNDNjZWEyXCIsXG4gICAgcHJpbWFyeTI6IFwiIzJmZGJhYlwiLFxuICAgIHNlY29uZGFyeTogXCIjM2Q5ZGZmXCJcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSBcImZvdW5kLXJlbGF5XCI7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vcm91dGluZy9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlYmFzc1Byb3ZpZGVyIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvdGhlbWVcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSZWJhc3NQcm92aWRlclxuICAgICAgdGhlbWU9e3RoZW1lfVxuICAgID5cbiAgICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgICA8L1JlYmFzc1Byb3ZpZGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBcIi4uLy4uLy4uL0NvbXBvbmVudHMvc2hhcmVkL3NldHVwRXJyb3JMb2dnaW5nXCI7XG5pbXBvcnQgcmVuZGVyTmF2IGZyb20gXCIuLi9uYXYvbmF2TGlua0NvbnRhaW5lclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcblxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uYm9hcmRvclwiKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZGl2KTtcblxuLy8gcmVuZGVyQXBwKCk7XG5cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuLy8gICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25ib2FyZG9yXCIpICYmXG4vLyAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjb25ib2FyZG9yXCIpIHtcbi8vICAgICByZW5kZXJBcHAoKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtcbi8vICAgc3VidHJlZTogdHJ1ZSxcbi8vICAgY2hpbGRMaXN0OiB0cnVlLFxuLy8gfSlcblxuLy8gcmVuZGVyTmF2KCk7XG4iLCJpbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgTmV0d29yayxcbiAgUmVjb3JkU291cmNlLFxuICBTdG9yZSxcbn0gZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBmZXRjaFF1ZXJ5ID0gKG9wZXJhdGlvbjogeyB0ZXh0OiBzdHJpbmcgfSwgdmFyaWFibGVzOiBhbnkpID0+XG4gIGZldGNoKGAke3Byb2Nlc3MuZW52LkFQUF9VUkx9L2dyYXBocWxgLCB7XG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IG9wZXJhdGlvbi50ZXh0LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVsYXkvaXNzdWVzLzE4MTZcbiAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbi5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgIH0pO1xuXG5jb25zdCBuZXR3b3JrID0gTmV0d29yay5jcmVhdGUoZmV0Y2hRdWVyeSk7XG5jb25zdCBzb3VyY2UgPSBuZXcgUmVjb3JkU291cmNlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShzb3VyY2UpO1xuY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICBuZXR3b3JrLFxuICBzdG9yZSxcbn0pO1xuXG5zZXRFbnZpcm9tZW50KGVudmlyb25tZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuaW1wb3J0IHsgbWFrZVJvdXRlQ29uZmlnLCBSb3V0ZSB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZGFzaGJvYXJkUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vZGFzaGJvYXJkL2Rhc2hib2FyZENvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgb3JnYW5pemF0aW9uc1JvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgb25ib2FyZGluZ1Byb2Nlc3NSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpbWFyeUxheW91dENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUm91dGVDb25maWcoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIHsuLi5wcmltYXJ5TGF5b3V0Q29udGFpbmVyfT5cbiAgICA8Um91dGUgcGF0aD1cIi9vbmJvYXJkb3JcIiB7Li4uZGFzaGJvYXJkUm91dGVDb25maWd9PlxuICAgICAgPFJvdXRlIHsuLi5vcmdhbml6YXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIm9yZ2FuaXphdGlvbi86aWQvb25ib2FyZGluZ1Byb2Nlc3NcIiB7Li4ub25ib2FyZGluZ1Byb2Nlc3NSb3V0ZUNvbmZpZ30gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlPixcbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIsIGNyZWF0ZVJlbmRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZXJyb3I6IHtcbiAgICBzdGF0dXM6IG51bWJlclxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6ICh7IGVycm9yIH06IElQcm9wcykgPT4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yLnN0YXR1cyA9PT0gNDA0ID8gJ05vdCBmb3VuZCcgOiAnRXJyb3InfVxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSksXG59KTtcbiIsImltcG9ydCB7IEFjdGlvbnMgYXMgRmFyY2VBY3Rpb25zLCBIYXNoUHJvdG9jb2wsIGNyZWF0ZUhpc3RvcnlFbmhhbmNlcixcbiAgcXVlcnlNaWRkbGV3YXJlIH0gZnJvbSBcImZhcmNlXCI7XG5pbXBvcnQgeyBjcmVhdGVNYXRjaEVuaGFuY2VyLCBmb3VuZFJlZHVjZXIgYXMgZm91bmQsIE1hdGNoZXIgfSBmcm9tIFwiZm91bmRcIjtcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlQ29uZmlnXCI7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbiAgcHJvdG9jb2w6IG5ldyBIYXNoUHJvdG9jb2woKSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyID0gbmV3IE1hdGNoZXIocm91dGVDb25maWcpO1xuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihtYXRjaGVyKTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAod2luZG93IGFzIGFueSkud2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZUVuaGFuY2VycyhcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvdW5kLFxufSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBtaWRkbGVXYXJlKTtcblxuc3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcnRhbFJlcGxhY2VyIGZyb20gXCIuLi91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXJcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IERhc2hib2FyZCA9ICh7XG4gIGNoaWxkcmVuLFxufTogSVByb3BzKSA9PiAoXG4gIDxQb3J0YWxSZXBsYWNlciBub2RlPXtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXBvc2l0b3J5LWNvbnRlbnQnKVswXX0+XG4gICAge2NoaWxkcmVufVxuICA8L1BvcnRhbFJlcGxhY2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IERhc2hib2FyZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggYWY5M2JjNmU2MzM1NGU2ZWM1ZjIxMGVkMzQ1M2IzODZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICByZWRpcmVjdFVybD86ID9zdHJpbmdcbnx9O1xuZXhwb3J0IHR5cGUgcHJpbWFyeUxheW91dENvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArJGZyYWdtZW50UmVmczogbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rJHJlZlxufH07XG5leHBvcnQgdHlwZSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnkoXG4gICRyZWRpcmVjdFVybDogU3RyaW5nXG4pIHtcbiAgLi4ubmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rXG59XG5cbmZyYWdtZW50IG5hdkxpbmtDb250YWluZXJfbmF2TGluayBvbiBRdWVyeSB7XG4gIHNldHVwKHJlZGlyZWN0VXJsOiAkcmVkaXJlY3RVcmwpXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicmVkaXJlY3RVcmxcIixcbiAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeShcXG4gICRyZWRpcmVjdFVybDogU3RyaW5nXFxuKSB7XFxuICAuLi5uYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcXG59XFxuXFxuZnJhZ21lbnQgbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rIG9uIFF1ZXJ5IHtcXG4gIHNldHVwKHJlZGlyZWN0VXJsOiAkcmVkaXJlY3RVcmwpXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJuYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJzZXR1cFwiLFxuICAgICAgICBcImFyZ3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMjc5NDM0ZjhkZmEzMzAzN2ZjYmJhYjQ0MTNlOTY0ZGYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy90eXBlc1wiO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4uLy4uL25hdi9uYXZMaW5rQ29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aGVtZTogSVRoZW1lO1xufVxuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRoZW1lLFxuICAuLi5wcm9wc1xufTogSVByb3BzKSA9PiAoXG4gIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbiAgICA8Um9vdCBjb2xvcj17dGhlbWUuY29sb3JzLmdyZXl9PlxuICAgICAgPE5hdkxpbmsgbmF2TGluaz17cHJvcHN9IC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Sb290PlxuICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFByaW1hcnlMYXlvdXQpO1xuIiwiaW1wb3J0IFByaW1hcnlMYXlvdXQgZnJvbSBcIi4vcHJpbWFyeUxheW91dFwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeShcbiAgICAkcmVkaXJlY3RVcmw6IFN0cmluZ1xuICApIHtcbiAgICAuLi5uYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcbiAgfVxuYDtcblxuY29uc3QgUHJpbWFyeUxheW91dENvbnRhaW5lciA9IFByaW1hcnlMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcHJlcGFyZVZhcmlhYmxlczogKCkgPT4gKHtcbiAgICByZWRpcmVjdFVybDogYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9JTIzL29uYm9hcmRvcmBcbiAgfSksXG4gIHF1ZXJ5LFxuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rID0ge3xcbiAgK3NldHVwOiA/c3RyaW5nLFxuICArJHJlZlR5cGU6IG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcIm5hdkxpbmtDb250YWluZXJfbmF2TGlua1wiLFxuICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiUm9vdEFyZ3VtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCJcbiAgICB9XG4gIF0sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcInNldHVwXCIsXG4gICAgICBcImFyZ3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicmVkaXJlY3RVcmxcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9XG4gIF1cbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzFhMmQyYTU5ODdlMjBjNDBiMmY0Yzc1OWUwZWVlMWZjJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IHsgTGluaywgd2l0aFJvdXRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IHsgSU1hdGNoLCBJU3R5bGVQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBtYXRjaDogSU1hdGNoO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSUFuY2hvclByb3BzIGV4dGVuZHMgSVN0eWxlUHJvcHMge1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuY29uc3QgQW5jaG9yID0gc3R5bGVkKExpbmspYFxuICAkeyhwcm9wczogSUFuY2hvclByb3BzKSA9PiBwcm9wcy5zZWxlY3RlZCAmJiAoXG4gICAgYCYucmVwb25hdi1pdGVtLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX0gcmdiKDIyOSwgMjI5LCAyMjkpIHRyYW5zcGFyZW50O1xuICAgIH1gXG4gICl9XG5gO1xuXG5jb25zdCBpZCA9IFwib25ib2FyZG9yLW5hdi1saW5rXCI7XG5cbmNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgcHVibGljIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvb25ib2FyZG9yXCIpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmVwb25hdi1pdGVtLnNlbGVjdGVkOm5vdChbaWQ9JyR7aWR9J10pYCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgbm9kZT17ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlcG9uYXZcIilbMF19PlxuICAgICAgICA8QW5jaG9yXG4gICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgdG89XCIvb25ib2FyZG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJyZXBvbmF2LWl0ZW1cIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZCAmJiBcInNlbGVjdGVkXCIpfVxuICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIG9uYm9hcmRvclxuICAgICAgICA8L0FuY2hvcj5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZMaW5rKTtcbiIsImltcG9ydCBOYXZMaW5rIGZyb20gXCIuL25hdkxpbmtcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50LCBmbGF0dGVuUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBvQXV0aE5hdkxpbmsgZnJvbSBcIi4vb0F1dGhOYXZMaW5rXCI7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuLy8gICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25ib2FyZG9yLW5hdi1saW5rXCIpKSB7XG4vLyAgICAgcmVuZGVyTmF2KCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4vLyAgIHN1YnRyZWU6IHRydWUsXG4vLyAgIGNoaWxkTGlzdDogdHJ1ZSxcbi8vIH0pO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBuYXZMaW5rQ29udGFpbmVyX25hdkxpbmsgb24gUXVlcnkge1xuICAgIHNldHVwKFxuICAgICAgcmVkaXJlY3RVcmw6ICRyZWRpcmVjdFVybFxuICAgIClcbiAgfVxuYDtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNldHVwOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkxpbmtDb250YWluZXIgPSBjb21wb3NlKFxuICBmcmFnbWVudChmcmFnbWVudHMpLFxuICBmbGF0dGVuUHJvcCgnbmF2TGluaycpLFxuICBicmFuY2goXG4gICAgKHByb3BzOiBJUHJvcHMpID0+ICEhcHJvcHMuc2V0dXAsXG4gICAgcmVuZGVyQ29tcG9uZW50KG9BdXRoTmF2TGluayksXG4gICksXG4pKChOYXZMaW5rKSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbmtDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tIFwicmVhY3QtcG9ydGFsXCI7XG5cbmNvbnN0IGlkID0gXCJvbmJvYXJkb3ItbmF2LWxpbmtcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNldHVwOiBzdHJpbmc7XG59XG5cbmNvbnN0IE9BdXRoTmF2TGluayA9ICh7XG4gIHNldHVwLFxufTogSVByb3BzKSA9PiAoXG4gIDxQb3J0YWwgbm9kZT17ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlcG9uYXZcIilbMF19PlxuICAgIDxhXG4gICAgICBpZD17aWR9XG4gICAgICBocmVmPXtzZXR1cH1cbiAgICAgIGNsYXNzTmFtZT1cInJlcG9uYXYtaXRlbVwiXG4gICAgPlxuICAgICAgb25ib2FyZG9yXG4gICAgPC9hPlxuICA8L1BvcnRhbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE9BdXRoTmF2TGluaztcbiIsImltcG9ydCB7IFBvcnRhbCwgUG9ydGFsUHJvcHMgfSBmcm9tIFwicmVhY3QtcG9ydGFsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFBvcnRhbFJlcGxhY2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBvcnRhbFByb3BzPiB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ub2RlKSB7XG4gICAgICB0aGlzLnByb3BzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIG5vZGU9e3RoaXMucHJvcHMubm9kZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWxSZXBsYWNlcjtcbiIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT48dGl0bGU+cGVuY2lsPC90aXRsZT48cGF0aCBkPVwiTTExLjQ0NS4wNTVMMi41IDlINHYxaDF2MWgxdjFoMXYxLjQ5NWw4Ljk0NS04LjkzOWMuNS0yLTIuNS01LTQuNS00LjV6TTYgMTNINXYtMUg0di0xSDN2LTFoLS44NTdMMCAxNmw2LTIuMTQ0elwiIC8+PC9zdmc+O1xufSk7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBzdHlsZXMgPSB7fVxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInN0eWxlc1wiXSk7XG5cbiAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9Pjx0aXRsZT5jcm9zczwvdGl0bGU+PHBhdGggZD1cIk0xMy45NTcgMy40NTdsLTEuNDE0LTEuNDE0TDggNi41ODYgMy40NTcgMi4wNDMgMi4wNDMgMy40NTcgNi41ODYgOGwtNC41NDMgNC41NDMgMS40MTQgMS40MTRMOCA5LjQxNGw0LjU0MyA0LjU0MyAxLjQxNC0xLjQxNEw5LjQxNCA4elwiIC8+PC9zdmc+O1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==