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

/***/ "./Components/dashboard/onboardingProcess/StepContainer.tsx":
/*!******************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/StepContainer.tsx ***!
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

/***/ "./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js":
/*!*********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/addPipelineMutation.graphql.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
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
    "text": "mutation addPipelineMutation(\n  $input: AddOnboardingPipelineInput!\n) {\n  addPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
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
            "selections": [v3, {
              "kind": "ScalarField",
              "alias": null,
              "name": "onboardingPipelineId",
              "args": null,
              "storageKey": null
            }, v2, {
              "kind": "LinkedField",
              "alias": null,
              "name": "onboardingSteps",
              "storageKey": null,
              "args": null,
              "concreteType": "OnboardingStep",
              "plural": true,
              "selections": [v3, {
                "kind": "ScalarField",
                "alias": null,
                "name": "onboardingStepId",
                "args": null,
                "storageKey": null
              }, v2]
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

/***/ "./Components/dashboard/onboardingProcess/__generated__/addStepMutation.graphql.js":
/*!*****************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/addStepMutation.graphql.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
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

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddOnboardingStepInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddOnboardingStepInput!"
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
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "addStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingStepPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "pipeline",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "pipelineContainer_pipeline",
            "args": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "addStepMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "addStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingStepPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "pipeline",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
          "plural": false,
          "selections": [v2, {
            "kind": "ScalarField",
            "alias": null,
            "name": "onboardingPipelineId",
            "args": null,
            "storageKey": null
          }, v3, {
            "kind": "LinkedField",
            "alias": null,
            "name": "onboardingSteps",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingStep",
            "plural": true,
            "selections": [v2, {
              "kind": "ScalarField",
              "alias": null,
              "name": "onboardingStepId",
              "args": null,
              "storageKey": null
            }, v3]
          }]
        }]
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = 'e5e9cff1aa61d965e3fc02a047539ba8';
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
 * 
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

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditOnboardingPipelineInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "EditOnboardingPipelineInput!"
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
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "editPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingPipelinePayload",
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
      "name": "editPipelineMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "editPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingPipelinePayload",
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
            "selections": [v3, {
              "kind": "ScalarField",
              "alias": null,
              "name": "onboardingPipelineId",
              "args": null,
              "storageKey": null
            }, v2, {
              "kind": "LinkedField",
              "alias": null,
              "name": "onboardingSteps",
              "storageKey": null,
              "args": null,
              "concreteType": "OnboardingStep",
              "plural": true,
              "selections": [v3, {
                "kind": "ScalarField",
                "alias": null,
                "name": "onboardingStepId",
                "args": null,
                "storageKey": null
              }, v2]
            }]
          }, v3]
        }]
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = 'cfcbd4b05b92aa339df3457745eadaf4';
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
 * 
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

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditOnboardingStepInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "EditOnboardingStepInput!"
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
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "editStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingStepPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "pipeline",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "pipelineContainer_pipeline",
            "args": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "editStepMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "editStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "EditOnboardingStepPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "pipeline",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
          "plural": false,
          "selections": [v2, {
            "kind": "ScalarField",
            "alias": null,
            "name": "onboardingPipelineId",
            "args": null,
            "storageKey": null
          }, v3, {
            "kind": "LinkedField",
            "alias": null,
            "name": "onboardingSteps",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingStep",
            "plural": true,
            "selections": [v2, {
              "kind": "ScalarField",
              "alias": null,
              "name": "onboardingStepId",
              "args": null,
              "storageKey": null
            }, v3]
          }]
        }]
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = 'c770a8fc264e9a39e64370cdcecb8fd7';
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
    "text": "query onboardingProcessContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Organization {\n      ...onboardingProcessContainer_organization\n    }\n    id\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n}\n",
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
            "selections": [v2, {
              "kind": "ScalarField",
              "alias": null,
              "name": "onboardingPipelineId",
              "args": null,
              "storageKey": null
            }, v3, {
              "kind": "LinkedField",
              "alias": null,
              "name": "onboardingSteps",
              "storageKey": null,
              "args": null,
              "concreteType": "OnboardingStep",
              "plural": true,
              "selections": [v2, {
                "kind": "ScalarField",
                "alias": null,
                "name": "onboardingStepId",
                "args": null,
                "storageKey": null
              }, v3]
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

var node /*: ConcreteFragment*/ = {
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
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "name": "onboardingPipelines",
    "storageKey": null,
    "args": null,
    "concreteType": "OnboardingPipeline",
    "plural": true,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "FragmentSpread",
      "name": "pipelineContainer_pipeline",
      "args": null
    }]
  }]
};
// prettier-ignore
node /*: any*/.hash = 'f0c280dda4678761ecbd8b9084a23e51';
module.exports = node;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js":
/*!****************************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var node /*: ConcreteFragment*/ = function () {
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
    "selections": [v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "onboardingPipelineId",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingSteps",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingStep",
      "plural": true,
      "selections": [v0, {
        "kind": "FragmentSpread",
        "name": "stepContainer_step",
        "args": null
      }]
    }]
  };
}();
// prettier-ignore
node /*: any*/.hash = '261fb122ea396ee0bd845865600f6792';
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
 * 
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

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveOnboardingPipelineInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveOnboardingPipelineInput!"
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
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "removePipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingPipelinePayload",
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
      "name": "removePipelineMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "removePipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingPipelinePayload",
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
            "selections": [v3, {
              "kind": "ScalarField",
              "alias": null,
              "name": "onboardingPipelineId",
              "args": null,
              "storageKey": null
            }, v2, {
              "kind": "LinkedField",
              "alias": null,
              "name": "onboardingSteps",
              "storageKey": null,
              "args": null,
              "concreteType": "OnboardingStep",
              "plural": true,
              "selections": [v3, {
                "kind": "ScalarField",
                "alias": null,
                "name": "onboardingStepId",
                "args": null,
                "storageKey": null
              }, v2]
            }]
          }, v3]
        }]
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '5ce3742dad9ca02bb0860eb96d99e003';
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
 * 
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

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveOnboardingStepInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveOnboardingStepInput!"
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
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingStepPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "pipeline",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
          "plural": false,
          "selections": [{
            "kind": "FragmentSpread",
            "name": "pipelineContainer_pipeline",
            "args": null
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "removeStepMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveOnboardingStepPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "pipeline",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
          "plural": false,
          "selections": [v2, {
            "kind": "ScalarField",
            "alias": null,
            "name": "onboardingPipelineId",
            "args": null,
            "storageKey": null
          }, v3, {
            "kind": "LinkedField",
            "alias": null,
            "name": "onboardingSteps",
            "storageKey": null,
            "args": null,
            "concreteType": "OnboardingStep",
            "plural": true,
            "selections": [v2, {
              "kind": "ScalarField",
              "alias": null,
              "name": "onboardingStepId",
              "args": null,
              "storageKey": null
            }, v3]
          }]
        }]
      }]
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '9a58aa64b61e2403dc4cbbff4bf29679';
module.exports = node;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/__generated__/stepContainer_step.graphql.js":
/*!********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/stepContainer_step.graphql.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "stepContainer_step",
  "type": "OnboardingStep",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "onboardingStepId",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }]
};
// prettier-ignore
node /*: any*/.hash = '4f247b848e1a321507bbc54ed4490566';
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

var _Pencil = __webpack_require__(/*! ../../../wwwroot/assets/Pencil.svg */ "./wwwroot/assets/Pencil.svg");

var _Pencil2 = _interopRequireDefault(_Pencil);

var _gridStyled = __webpack_require__(/*! grid-styled */ "./node_modules/grid-styled/dist/index.js");

var _reactPortal = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");

var _createFieldValidator = __webpack_require__(/*! ../../shared/inputs/createFieldValidator */ "./Components/shared/inputs/createFieldValidator.tsx");

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _StepContainer = __webpack_require__(/*! ./StepContainer */ "./Components/dashboard/onboardingProcess/StepContainer.tsx");

var _StepContainer2 = _interopRequireDefault(_StepContainer);

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
    return _react2.default.createElement(PipelineColumn, { key: onboardingPipelineId, p: 16 }, _react2.default.createElement(_rebass.Box, { pb: 16 }, _react2.default.createElement(_gridStyled.Flex, { alignItems: "center" }, isEditingPipeline ? _react2.default.createElement("form", { onSubmit: handleSubmit(editPipeline), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "pipelineName", validate: editPipelineValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Edit"), _react2.default.createElement(_button2.default, { type: "button", onClick: togglePipeline }, "Cancel"))) : _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_rebass.Text, { fontWeight: "bold", fontSize: 18 }, name), _react2.default.createElement(IconButton, { ml: "auto", onClick: togglePipeline }, _react2.default.createElement(_Pencil2.default, null)), _react2.default.createElement(_reactPortal.PortalWithState, { closeOnEsc: true, closeOnOutsideClick: true }, function (_ref2) {
        var openPortal = _ref2.openPortal,
            closePortal = _ref2.closePortal,
            portal = _ref2.portal;
        return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(IconButton, { onClick: openPortal }, _react2.default.createElement(_cross2.default, null)), portal(_react2.default.createElement(_rebass.Modal, { top: "30%" }, _react2.default.createElement("form", { onSubmit: handleSubmit(removePipeline), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "removingNameConfirm", placeholder: "Type the pipeline name '" + name + "' to delete.", mb: 10 }), _react2.default.createElement(_button2.default, { mr: 10, disabled: removingNameConfirmValue !== name }, "Remove"), _react2.default.createElement(_button2.default, { type: "button", onClick: closePortal }, "Cancel")))));
    })))), onboardingSteps.map(function (step, i) {
        return _react2.default.createElement(_StepContainer2.default, { key: step.id, form: "step_" + i, step: step });
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

var _Pencil = __webpack_require__(/*! ../../../wwwroot/assets/Pencil.svg */ "./wwwroot/assets/Pencil.svg");

var _Pencil2 = _interopRequireDefault(_Pencil);

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
    return _react2.default.createElement(StepBox, null, isEditingStep ? _react2.default.createElement("form", { onSubmit: handleSubmit(editStep), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "stepName", validate: editStepValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Edit"), _react2.default.createElement(_button2.default, { type: "button", onClick: toggleStep }, "Cancel"))) : _react2.default.createElement(_rebass.Box, { bg: "white", px: "8px", py: "5px" }, _react2.default.createElement(_rebass.Flex, { alignItems: "center" }, _react2.default.createElement(_rebass.Text, null, name), _react2.default.createElement(IconButton, { ml: "auto", onClick: toggleStep }, _react2.default.createElement(_Pencil2.default, null)), _react2.default.createElement(_reactPortal.PortalWithState, { closeOnEsc: true, closeOnOutsideClick: true }, function (_ref2) {
        var openPortal = _ref2.openPortal,
            closePortal = _ref2.closePortal,
            portal = _ref2.portal;
        return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(IconButton, { onClick: openPortal }, _react2.default.createElement(_cross2.default, null)), portal(_react2.default.createElement(_rebass.Modal, { top: "30%" }, _react2.default.createElement("form", { onSubmit: handleSubmit(removeStep), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "removingNameConfirm", placeholder: "Type the step name '" + name + "' to delete.", mb: 10 }), _react2.default.createElement(_button2.default, { mr: 10, disabled: removingNameConfirmValue !== name }, "Remove"), _react2.default.createElement(_button2.default, { type: "button", onClick: closePortal }, "Cancel")))));
    }))));
};
exports.default = Step;

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
})(["&:disabled{cursor:initial;}&:not(:disabled){cursor:pointer;}&:focus{box-shadow:none;}"]);
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

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

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
    form: _reduxForm.reducer,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvU3RlcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9hZGRQaXBlbGluZU11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9hZGRTdGVwTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9fX2dlbmVyYXRlZF9fL2VkaXRQaXBlbGluZU11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9lZGl0U3RlcE11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9fX2dlbmVyYXRlZF9fL3BpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9yZW1vdmVQaXBlbGluZU11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9yZW1vdmVTdGVwTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9fX2dlbmVyYXRlZF9fL3N0ZXBDb250YWluZXJfc3RlcC5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2FkZFBpcGVsaW5lTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2FkZFN0ZXBNdXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvZWRpdFBpcGVsaW5lTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2VkaXRTdGVwTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2VtcHR5UGlwZWxpbmUudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2VtcHR5UGlwZWxpbmVDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL29uYm9hcmRpbmdQcm9jZXNzLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvcGlwZWxpbmUudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL3BpcGVsaW5lQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9yZW1vdmVQaXBlbGluZU11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9yZW1vdmVTdGVwTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL3N0ZXAudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvX19nZW5lcmF0ZWRfXy9vcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vcmdhbml6YXRpb25zL29yZ2FuaXphdGlvbnMudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9uc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2VsZWN0L3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmcudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9fX2dlbmVyYXRlZF9fL3ByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L19fZ2VuZXJhdGVkX18vbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L25hdkxpbmsudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL25hdi9uYXZMaW5rQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9uYXYvb0F1dGhOYXZMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXIudHN4Iiwid2VicGFjazovLy8uL3d3d3Jvb3QvYXNzZXRzL1BlbmNpbC5zdmciLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9hc3NldHMvY3Jvc3Muc3ZnIl0sIm5hbWVzIjpbIm5vZGUiLCJ2MCIsInYxIiwidjIiLCJ2MyIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwib2JqIiwia2V5cyIsInRhcmdldCIsImkiLCJpbmRleE9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX3JlZiIsInN0eWxlcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFOO0FBa0JBLElBQU0sZ0JBQWdCO0FBQ3BCLGdCQUFZO0FBQUEsWUFBRyxhQUFILFFBQUcsYUFBSDtBQUFBLGVBQStCO0FBQUEsbUJBQU87QUFDaEQsK0JBQWUsQ0FBQztBQURnQyxhQUFQO0FBQUEsU0FBL0I7QUFBQTtBQURRLENBQXRCO0FBTUEsSUFBTSxXQUFXO0FBQ2YsZ0JBQVk7QUFBQSxZQUFHLGdCQUFILFNBQUcsZ0JBQUg7QUFBQSxlQUFrQztBQUFBLG1CQUM1QyxrQ0FBbUIsRUFBRSxJQUFJLGdCQUFOLEVBQW5CLENBRDRDO0FBQUEsU0FBbEM7QUFBQSxLQURHO0FBR2YsY0FBVTtBQUFBLFlBQUcsZ0JBQUgsU0FBRyxnQkFBSDtBQUFBLFlBQXFCLFVBQXJCLFNBQXFCLFVBQXJCO0FBQUEsZUFBOEMsVUFBQyxLQUFELEVBQTBCO0FBQ2hGLDRDQUFpQjtBQUNmLG9CQUFJLGdCQURXO0FBRWYsc0JBQU0sTUFBTTtBQUZHLGFBQWpCLEdBSUEsWUFKQTtBQUtELFNBTlM7QUFBQTtBQUhLLENBQWpCO2tCQVllLHdCQUNiLDBCQUFVO0FBQUEsUUFBRyxJQUFILFNBQUcsSUFBSDtBQUFBLFdBQXVCO0FBQy9CLGtCQUFVLGtDQUFrQixJQUFsQjtBQURxQixLQUF2QjtBQUFBLENBQVYsQ0FEYSxFQUliLDRCQUFTLFNBQVQsQ0FKYSxFQUtiLDRCQUFZLE1BQVosQ0FMYSxFQU1iLGtDQUFrQjtBQUNoQixtQkFBZTtBQURDLENBQWxCLEVBRUcsYUFGSCxDQU5hLEVBU2IsNkJBQWEsUUFBYixDQVRhLEVBVWIsMEJBQVU7QUFBQSxRQUFHLElBQUgsU0FBRyxJQUFIO0FBQUEsV0FBdUI7QUFDL0IsdUJBQWU7QUFDYixzQkFBVTtBQURHO0FBRGdCLEtBQXZCO0FBQUEsQ0FBVixDQVZhLEVBZWIsMEJBQVUsRUFBVixDQWZhLEVBZ0JiLHlCQUFRLFVBQUMsS0FBRDtBQUFBLFFBQVUsUUFBVixTQUFVLFFBQVY7QUFBQSxXQUErQjtBQUNyQyxrQ0FBMEIsU0FBUyxLQUFULEVBQWdCLHFCQUFoQjtBQURXLEtBQS9CO0FBQUEsQ0FBUixDQWhCYSxFQW1CYixjQW5CYSxDOzs7Ozs7Ozs7Ozs7QUM3Q2Y7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSxJQUFNQSxLQUFJLHFCQUFKLEdBQTZCLFlBQVU7QUFDN0MsTUFBSUMsS0FBSyxDQUNQO0FBQ0UsWUFBUSxlQURWO0FBRUUsWUFBUSxPQUZWO0FBR0UsWUFBUSw2QkFIVjtBQUlFLG9CQUFnQjtBQUpsQixHQURPLENBQVQ7QUFBQSxNQVFBQyxLQUFLLENBQ0g7QUFDRSxZQUFRLFVBRFY7QUFFRSxZQUFRLE9BRlY7QUFHRSxvQkFBZ0IsT0FIbEI7QUFJRSxZQUFRO0FBSlYsR0FERyxDQVJMO0FBQUEsTUFnQkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7QUFFSCxhQUFTLElBRk47QUFHSCxZQUFRLE1BSEw7QUFJSCxZQUFRLElBSkw7QUFLSCxrQkFBYztBQUxYLEdBaEJMO0FBQUEsTUF1QkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7QUFFSCxhQUFTLElBRk47QUFHSCxZQUFRLElBSEw7QUFJSCxZQUFRLElBSkw7QUFLSCxrQkFBYztBQUxYLEdBdkJMO0FBOEJBLFNBQU87QUFDTCxZQUFRLFNBREg7QUFFTCxxQkFBaUIsVUFGWjtBQUdMLFlBQVEscUJBSEg7QUFJTCxVQUFNLElBSkQ7QUFLTCxZQUFRLCttQkFMSDtBQU1MLGdCQUFZLEVBTlA7QUFPTCxnQkFBWTtBQUNWLGNBQVEsVUFERTtBQUVWLGNBQVEscUJBRkU7QUFHVixjQUFRLFVBSEU7QUFJVixrQkFBWSxJQUpGO0FBS1YsNkJBQXVCSCxFQUxiO0FBTVYsb0JBQWMsQ0FDWjtBQUNFLGdCQUFRLGFBRFY7QUFFRSxpQkFBUyxJQUZYO0FBR0UsZ0JBQVEsYUFIVjtBQUlFLHNCQUFjLElBSmhCO0FBS0UsZ0JBQVFDLEVBTFY7QUFNRSx3QkFBZ0IsOEJBTmxCO0FBT0Usa0JBQVUsS0FQWjtBQVFFLHNCQUFjLENBQ1o7QUFDRSxrQkFBUSxhQURWO0FBRUUsbUJBQVMsSUFGWDtBQUdFLGtCQUFRLGNBSFY7QUFJRSx3QkFBYyxJQUpoQjtBQUtFLGtCQUFRLElBTFY7QUFNRSwwQkFBZ0IsY0FObEI7QUFPRSxvQkFBVSxLQVBaO0FBUUUsd0JBQWMsQ0FDWjtBQUNFLG9CQUFRLGdCQURWO0FBRUUsb0JBQVEseUNBRlY7QUFHRSxvQkFBUTtBQUhWLFdBRFk7QUFSaEIsU0FEWTtBQVJoQixPQURZO0FBTkosS0FQUDtBQTJDTCxpQkFBYTtBQUNYLGNBQVEsV0FERztBQUVYLGNBQVEscUJBRkc7QUFHWCw2QkFBdUJELEVBSFo7QUFJWCxvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxhQUhWO0FBSUUsc0JBQWMsSUFKaEI7QUFLRSxnQkFBUUMsRUFMVjtBQU1FLHdCQUFnQiw4QkFObEI7QUFPRSxrQkFBVSxLQVBaO0FBUUUsc0JBQWMsQ0FDWjtBQUNFLGtCQUFRLGFBRFY7QUFFRSxtQkFBUyxJQUZYO0FBR0Usa0JBQVEsY0FIVjtBQUlFLHdCQUFjLElBSmhCO0FBS0Usa0JBQVEsSUFMVjtBQU1FLDBCQUFnQixjQU5sQjtBQU9FLG9CQUFVLEtBUFo7QUFRRSx3QkFBYyxDQUNaO0FBQ0Usb0JBQVEsYUFEVjtBQUVFLHFCQUFTLElBRlg7QUFHRSxvQkFBUSxnQkFIVjtBQUlFLG9CQUFRLElBSlY7QUFLRSwwQkFBYztBQUxoQixXQURZLEVBUVpDLEVBUlksRUFTWjtBQUNFLG9CQUFRLGFBRFY7QUFFRSxxQkFBUyxJQUZYO0FBR0Usb0JBQVEscUJBSFY7QUFJRSwwQkFBYyxJQUpoQjtBQUtFLG9CQUFRLElBTFY7QUFNRSw0QkFBZ0Isb0JBTmxCO0FBT0Usc0JBQVUsSUFQWjtBQVFFLDBCQUFjLENBQ1pDLEVBRFksRUFFWjtBQUNFLHNCQUFRLGFBRFY7QUFFRSx1QkFBUyxJQUZYO0FBR0Usc0JBQVEsc0JBSFY7QUFJRSxzQkFBUSxJQUpWO0FBS0UsNEJBQWM7QUFMaEIsYUFGWSxFQVNaRCxFQVRZLEVBVVo7QUFDRSxzQkFBUSxhQURWO0FBRUUsdUJBQVMsSUFGWDtBQUdFLHNCQUFRLGlCQUhWO0FBSUUsNEJBQWMsSUFKaEI7QUFLRSxzQkFBUSxJQUxWO0FBTUUsOEJBQWdCLGdCQU5sQjtBQU9FLHdCQUFVLElBUFo7QUFRRSw0QkFBYyxDQUNaQyxFQURZLEVBRVo7QUFDRSx3QkFBUSxhQURWO0FBRUUseUJBQVMsSUFGWDtBQUdFLHdCQUFRLGtCQUhWO0FBSUUsd0JBQVEsSUFKVjtBQUtFLDhCQUFjO0FBTGhCLGVBRlksRUFTWkQsRUFUWTtBQVJoQixhQVZZO0FBUmhCLFdBVFksRUFpRFpDLEVBakRZO0FBUmhCLFNBRFk7QUFSaEIsT0FEWTtBQUpIO0FBM0NSLEdBQVA7QUEwSEMsQ0F6SmlDLEVBQWxDO0FBMEpBO0FBQ0NKLElBQUQsQ0FBSyxTQUFMLENBQWdCSyxJQUFoQixHQUF1QixrQ0FBdkI7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIsQzs7Ozs7Ozs7Ozs7O0FDbk9BOzs7OztBQUtBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLElBQU1BLEtBQUkscUJBQUosR0FBNkIsWUFBVTtBQUM3QyxNQUFJQyxLQUFLLENBQ1A7QUFDRSxZQUFRLGVBRFY7QUFFRSxZQUFRLE9BRlY7QUFHRSxZQUFRLHlCQUhWO0FBSUUsb0JBQWdCO0FBSmxCLEdBRE8sQ0FBVDtBQUFBLE1BUUFDLEtBQUssQ0FDSDtBQUNFLFlBQVEsVUFEVjtBQUVFLFlBQVEsT0FGVjtBQUdFLG9CQUFnQixPQUhsQjtBQUlFLFlBQVE7QUFKVixHQURHLENBUkw7QUFBQSxNQWdCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsSUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0FoQkw7QUFBQSxNQXVCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsTUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0F2Qkw7QUE4QkEsU0FBTztBQUNMLFlBQVEsU0FESDtBQUVMLHFCQUFpQixVQUZaO0FBR0wsWUFBUSxpQkFISDtBQUlMLFVBQU0sSUFKRDtBQUtMLFlBQVEsc2FBTEg7QUFNTCxnQkFBWSxFQU5QO0FBT0wsZ0JBQVk7QUFDVixjQUFRLFVBREU7QUFFVixjQUFRLGlCQUZFO0FBR1YsY0FBUSxVQUhFO0FBSVYsa0JBQVksSUFKRjtBQUtWLDZCQUF1QkgsRUFMYjtBQU1WLG9CQUFjLENBQ1o7QUFDRSxnQkFBUSxhQURWO0FBRUUsaUJBQVMsSUFGWDtBQUdFLGdCQUFRLFNBSFY7QUFJRSxzQkFBYyxJQUpoQjtBQUtFLGdCQUFRQyxFQUxWO0FBTUUsd0JBQWdCLDBCQU5sQjtBQU9FLGtCQUFVLEtBUFo7QUFRRSxzQkFBYyxDQUNaO0FBQ0Usa0JBQVEsYUFEVjtBQUVFLG1CQUFTLElBRlg7QUFHRSxrQkFBUSxVQUhWO0FBSUUsd0JBQWMsSUFKaEI7QUFLRSxrQkFBUSxJQUxWO0FBTUUsMEJBQWdCLG9CQU5sQjtBQU9FLG9CQUFVLEtBUFo7QUFRRSx3QkFBYyxDQUNaO0FBQ0Usb0JBQVEsZ0JBRFY7QUFFRSxvQkFBUSw0QkFGVjtBQUdFLG9CQUFRO0FBSFYsV0FEWTtBQVJoQixTQURZO0FBUmhCLE9BRFk7QUFOSixLQVBQO0FBMkNMLGlCQUFhO0FBQ1gsY0FBUSxXQURHO0FBRVgsY0FBUSxpQkFGRztBQUdYLDZCQUF1QkQsRUFIWjtBQUlYLG9CQUFjLENBQ1o7QUFDRSxnQkFBUSxhQURWO0FBRUUsaUJBQVMsSUFGWDtBQUdFLGdCQUFRLFNBSFY7QUFJRSxzQkFBYyxJQUpoQjtBQUtFLGdCQUFRQyxFQUxWO0FBTUUsd0JBQWdCLDBCQU5sQjtBQU9FLGtCQUFVLEtBUFo7QUFRRSxzQkFBYyxDQUNaO0FBQ0Usa0JBQVEsYUFEVjtBQUVFLG1CQUFTLElBRlg7QUFHRSxrQkFBUSxVQUhWO0FBSUUsd0JBQWMsSUFKaEI7QUFLRSxrQkFBUSxJQUxWO0FBTUUsMEJBQWdCLG9CQU5sQjtBQU9FLG9CQUFVLEtBUFo7QUFRRSx3QkFBYyxDQUNaQyxFQURZLEVBRVo7QUFDRSxvQkFBUSxhQURWO0FBRUUscUJBQVMsSUFGWDtBQUdFLG9CQUFRLHNCQUhWO0FBSUUsb0JBQVEsSUFKVjtBQUtFLDBCQUFjO0FBTGhCLFdBRlksRUFTWkMsRUFUWSxFQVVaO0FBQ0Usb0JBQVEsYUFEVjtBQUVFLHFCQUFTLElBRlg7QUFHRSxvQkFBUSxpQkFIVjtBQUlFLDBCQUFjLElBSmhCO0FBS0Usb0JBQVEsSUFMVjtBQU1FLDRCQUFnQixnQkFObEI7QUFPRSxzQkFBVSxJQVBaO0FBUUUsMEJBQWMsQ0FDWkQsRUFEWSxFQUVaO0FBQ0Usc0JBQVEsYUFEVjtBQUVFLHVCQUFTLElBRlg7QUFHRSxzQkFBUSxrQkFIVjtBQUlFLHNCQUFRLElBSlY7QUFLRSw0QkFBYztBQUxoQixhQUZZLEVBU1pDLEVBVFk7QUFSaEIsV0FWWTtBQVJoQixTQURZO0FBUmhCLE9BRFk7QUFKSDtBQTNDUixHQUFQO0FBc0dDLENBcklpQyxFQUFsQztBQXNJQTtBQUNDSixJQUFELENBQUssU0FBTCxDQUFnQkssSUFBaEIsR0FBdUIsa0NBQXZCO0FBQ0FDLE9BQU9DLE9BQVAsR0FBaUJQLElBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3ZNQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBLElBQU1BLEtBQUkscUJBQUosR0FBNkIsWUFBVTtBQUM3QyxNQUFJQyxLQUFLLENBQ1A7QUFDRSxZQUFRLGVBRFY7QUFFRSxZQUFRLE9BRlY7QUFHRSxZQUFRLDhCQUhWO0FBSUUsb0JBQWdCO0FBSmxCLEdBRE8sQ0FBVDtBQUFBLE1BUUFDLEtBQUssQ0FDSDtBQUNFLFlBQVEsVUFEVjtBQUVFLFlBQVEsT0FGVjtBQUdFLG9CQUFnQixPQUhsQjtBQUlFLFlBQVE7QUFKVixHQURHLENBUkw7QUFBQSxNQWdCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsTUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0FoQkw7QUFBQSxNQXVCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsSUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0F2Qkw7QUE4QkEsU0FBTztBQUNMLFlBQVEsU0FESDtBQUVMLHFCQUFpQixVQUZaO0FBR0wsWUFBUSxzQkFISDtBQUlMLFVBQU0sSUFKRDtBQUtMLFlBQVEsa25CQUxIO0FBTUwsZ0JBQVksRUFOUDtBQU9MLGdCQUFZO0FBQ1YsY0FBUSxVQURFO0FBRVYsY0FBUSxzQkFGRTtBQUdWLGNBQVEsVUFIRTtBQUlWLGtCQUFZLElBSkY7QUFLViw2QkFBdUJILEVBTGI7QUFNVixvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxjQUhWO0FBSUUsc0JBQWMsSUFKaEI7QUFLRSxnQkFBUUMsRUFMVjtBQU1FLHdCQUFnQiwrQkFObEI7QUFPRSxrQkFBVSxLQVBaO0FBUUUsc0JBQWMsQ0FDWjtBQUNFLGtCQUFRLGFBRFY7QUFFRSxtQkFBUyxJQUZYO0FBR0Usa0JBQVEsY0FIVjtBQUlFLHdCQUFjLElBSmhCO0FBS0Usa0JBQVEsSUFMVjtBQU1FLDBCQUFnQixjQU5sQjtBQU9FLG9CQUFVLEtBUFo7QUFRRSx3QkFBYyxDQUNaO0FBQ0Usb0JBQVEsZ0JBRFY7QUFFRSxvQkFBUSx5Q0FGVjtBQUdFLG9CQUFRO0FBSFYsV0FEWTtBQVJoQixTQURZO0FBUmhCLE9BRFk7QUFOSixLQVBQO0FBMkNMLGlCQUFhO0FBQ1gsY0FBUSxXQURHO0FBRVgsY0FBUSxzQkFGRztBQUdYLDZCQUF1QkQsRUFIWjtBQUlYLG9CQUFjLENBQ1o7QUFDRSxnQkFBUSxhQURWO0FBRUUsaUJBQVMsSUFGWDtBQUdFLGdCQUFRLGNBSFY7QUFJRSxzQkFBYyxJQUpoQjtBQUtFLGdCQUFRQyxFQUxWO0FBTUUsd0JBQWdCLCtCQU5sQjtBQU9FLGtCQUFVLEtBUFo7QUFRRSxzQkFBYyxDQUNaO0FBQ0Usa0JBQVEsYUFEVjtBQUVFLG1CQUFTLElBRlg7QUFHRSxrQkFBUSxjQUhWO0FBSUUsd0JBQWMsSUFKaEI7QUFLRSxrQkFBUSxJQUxWO0FBTUUsMEJBQWdCLGNBTmxCO0FBT0Usb0JBQVUsS0FQWjtBQVFFLHdCQUFjLENBQ1o7QUFDRSxvQkFBUSxhQURWO0FBRUUscUJBQVMsSUFGWDtBQUdFLG9CQUFRLGdCQUhWO0FBSUUsb0JBQVEsSUFKVjtBQUtFLDBCQUFjO0FBTGhCLFdBRFksRUFRWkMsRUFSWSxFQVNaO0FBQ0Usb0JBQVEsYUFEVjtBQUVFLHFCQUFTLElBRlg7QUFHRSxvQkFBUSxxQkFIVjtBQUlFLDBCQUFjLElBSmhCO0FBS0Usb0JBQVEsSUFMVjtBQU1FLDRCQUFnQixvQkFObEI7QUFPRSxzQkFBVSxJQVBaO0FBUUUsMEJBQWMsQ0FDWkMsRUFEWSxFQUVaO0FBQ0Usc0JBQVEsYUFEVjtBQUVFLHVCQUFTLElBRlg7QUFHRSxzQkFBUSxzQkFIVjtBQUlFLHNCQUFRLElBSlY7QUFLRSw0QkFBYztBQUxoQixhQUZZLEVBU1pELEVBVFksRUFVWjtBQUNFLHNCQUFRLGFBRFY7QUFFRSx1QkFBUyxJQUZYO0FBR0Usc0JBQVEsaUJBSFY7QUFJRSw0QkFBYyxJQUpoQjtBQUtFLHNCQUFRLElBTFY7QUFNRSw4QkFBZ0IsZ0JBTmxCO0FBT0Usd0JBQVUsSUFQWjtBQVFFLDRCQUFjLENBQ1pDLEVBRFksRUFFWjtBQUNFLHdCQUFRLGFBRFY7QUFFRSx5QkFBUyxJQUZYO0FBR0Usd0JBQVEsa0JBSFY7QUFJRSx3QkFBUSxJQUpWO0FBS0UsOEJBQWM7QUFMaEIsZUFGWSxFQVNaRCxFQVRZO0FBUmhCLGFBVlk7QUFSaEIsV0FUWSxFQWlEWkMsRUFqRFk7QUFSaEIsU0FEWTtBQVJoQixPQURZO0FBSkg7QUEzQ1IsR0FBUDtBQTBIQyxDQXpKaUMsRUFBbEM7QUEwSkE7QUFDQ0osSUFBRCxDQUFLLFNBQUwsQ0FBZ0JLLElBQWhCLEdBQXVCLGtDQUF2QjtBQUNBQyxPQUFPQyxPQUFQLEdBQWlCUCxJQUFqQixDOzs7Ozs7Ozs7Ozs7QUNuT0E7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSxJQUFNQSxLQUFJLHFCQUFKLEdBQTZCLFlBQVU7QUFDN0MsTUFBSUMsS0FBSyxDQUNQO0FBQ0UsWUFBUSxlQURWO0FBRUUsWUFBUSxPQUZWO0FBR0UsWUFBUSwwQkFIVjtBQUlFLG9CQUFnQjtBQUpsQixHQURPLENBQVQ7QUFBQSxNQVFBQyxLQUFLLENBQ0g7QUFDRSxZQUFRLFVBRFY7QUFFRSxZQUFRLE9BRlY7QUFHRSxvQkFBZ0IsT0FIbEI7QUFJRSxZQUFRO0FBSlYsR0FERyxDQVJMO0FBQUEsTUFnQkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7QUFFSCxhQUFTLElBRk47QUFHSCxZQUFRLElBSEw7QUFJSCxZQUFRLElBSkw7QUFLSCxrQkFBYztBQUxYLEdBaEJMO0FBQUEsTUF1QkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7QUFFSCxhQUFTLElBRk47QUFHSCxZQUFRLE1BSEw7QUFJSCxZQUFRLElBSkw7QUFLSCxrQkFBYztBQUxYLEdBdkJMO0FBOEJBLFNBQU87QUFDTCxZQUFRLFNBREg7QUFFTCxxQkFBaUIsVUFGWjtBQUdMLFlBQVEsa0JBSEg7QUFJTCxVQUFNLElBSkQ7QUFLTCxZQUFRLHlhQUxIO0FBTUwsZ0JBQVksRUFOUDtBQU9MLGdCQUFZO0FBQ1YsY0FBUSxVQURFO0FBRVYsY0FBUSxrQkFGRTtBQUdWLGNBQVEsVUFIRTtBQUlWLGtCQUFZLElBSkY7QUFLViw2QkFBdUJILEVBTGI7QUFNVixvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxVQUhWO0FBSUUsc0JBQWMsSUFKaEI7QUFLRSxnQkFBUUMsRUFMVjtBQU1FLHdCQUFnQiwyQkFObEI7QUFPRSxrQkFBVSxLQVBaO0FBUUUsc0JBQWMsQ0FDWjtBQUNFLGtCQUFRLGFBRFY7QUFFRSxtQkFBUyxJQUZYO0FBR0Usa0JBQVEsVUFIVjtBQUlFLHdCQUFjLElBSmhCO0FBS0Usa0JBQVEsSUFMVjtBQU1FLDBCQUFnQixvQkFObEI7QUFPRSxvQkFBVSxLQVBaO0FBUUUsd0JBQWMsQ0FDWjtBQUNFLG9CQUFRLGdCQURWO0FBRUUsb0JBQVEsNEJBRlY7QUFHRSxvQkFBUTtBQUhWLFdBRFk7QUFSaEIsU0FEWTtBQVJoQixPQURZO0FBTkosS0FQUDtBQTJDTCxpQkFBYTtBQUNYLGNBQVEsV0FERztBQUVYLGNBQVEsa0JBRkc7QUFHWCw2QkFBdUJELEVBSFo7QUFJWCxvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxVQUhWO0FBSUUsc0JBQWMsSUFKaEI7QUFLRSxnQkFBUUMsRUFMVjtBQU1FLHdCQUFnQiwyQkFObEI7QUFPRSxrQkFBVSxLQVBaO0FBUUUsc0JBQWMsQ0FDWjtBQUNFLGtCQUFRLGFBRFY7QUFFRSxtQkFBUyxJQUZYO0FBR0Usa0JBQVEsVUFIVjtBQUlFLHdCQUFjLElBSmhCO0FBS0Usa0JBQVEsSUFMVjtBQU1FLDBCQUFnQixvQkFObEI7QUFPRSxvQkFBVSxLQVBaO0FBUUUsd0JBQWMsQ0FDWkMsRUFEWSxFQUVaO0FBQ0Usb0JBQVEsYUFEVjtBQUVFLHFCQUFTLElBRlg7QUFHRSxvQkFBUSxzQkFIVjtBQUlFLG9CQUFRLElBSlY7QUFLRSwwQkFBYztBQUxoQixXQUZZLEVBU1pDLEVBVFksRUFVWjtBQUNFLG9CQUFRLGFBRFY7QUFFRSxxQkFBUyxJQUZYO0FBR0Usb0JBQVEsaUJBSFY7QUFJRSwwQkFBYyxJQUpoQjtBQUtFLG9CQUFRLElBTFY7QUFNRSw0QkFBZ0IsZ0JBTmxCO0FBT0Usc0JBQVUsSUFQWjtBQVFFLDBCQUFjLENBQ1pELEVBRFksRUFFWjtBQUNFLHNCQUFRLGFBRFY7QUFFRSx1QkFBUyxJQUZYO0FBR0Usc0JBQVEsa0JBSFY7QUFJRSxzQkFBUSxJQUpWO0FBS0UsNEJBQWM7QUFMaEIsYUFGWSxFQVNaQyxFQVRZO0FBUmhCLFdBVlk7QUFSaEIsU0FEWTtBQVJoQixPQURZO0FBSkg7QUEzQ1IsR0FBUDtBQXNHQyxDQXJJaUMsRUFBbEM7QUFzSUE7QUFDQ0osSUFBRCxDQUFLLFNBQUwsQ0FBZ0JLLElBQWhCLEdBQXVCLGtDQUF2QjtBQUNBQyxPQUFPQyxPQUFQLEdBQWlCUCxJQUFqQixDOzs7Ozs7Ozs7Ozs7QUN0TUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSxJQUFNQSxLQUFJLHFCQUFKLEdBQTZCLFlBQVU7QUFDN0MsTUFBSUMsS0FBSyxDQUNQO0FBQ0UsWUFBUSxlQURWO0FBRUUsWUFBUSxJQUZWO0FBR0UsWUFBUSxLQUhWO0FBSUUsb0JBQWdCO0FBSmxCLEdBRE8sQ0FBVDtBQUFBLE1BUUFDLEtBQUssQ0FDSDtBQUNFLFlBQVEsVUFEVjtBQUVFLFlBQVEsSUFGVjtBQUdFLG9CQUFnQixJQUhsQjtBQUlFLFlBQVE7QUFKVixHQURHLENBUkw7QUFBQSxNQWdCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsSUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0FoQkw7QUFBQSxNQXVCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsTUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0F2Qkw7QUE4QkEsU0FBTztBQUNMLFlBQVEsU0FESDtBQUVMLHFCQUFpQixPQUZaO0FBR0wsWUFBUSxpQ0FISDtBQUlMLFVBQU0sSUFKRDtBQUtMLFlBQVEscW1CQUxIO0FBTUwsZ0JBQVksRUFOUDtBQU9MLGdCQUFZO0FBQ1YsY0FBUSxVQURFO0FBRVYsY0FBUSxpQ0FGRTtBQUdWLGNBQVEsT0FIRTtBQUlWLGtCQUFZLElBSkY7QUFLViw2QkFBdUJILEVBTGI7QUFNVixvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxNQUhWO0FBSUUsc0JBQWMsSUFKaEI7QUFLRSxnQkFBUUMsRUFMVjtBQU1FLHdCQUFnQixJQU5sQjtBQU9FLGtCQUFVLEtBUFo7QUFRRSxzQkFBYyxDQUNaO0FBQ0Usa0JBQVEsZ0JBRFY7QUFFRSxrQkFBUSxjQUZWO0FBR0Usd0JBQWMsQ0FDWjtBQUNFLG9CQUFRLGdCQURWO0FBRUUsb0JBQVEseUNBRlY7QUFHRSxvQkFBUTtBQUhWLFdBRFk7QUFIaEIsU0FEWTtBQVJoQixPQURZO0FBTkosS0FQUDtBQXNDTCxpQkFBYTtBQUNYLGNBQVEsV0FERztBQUVYLGNBQVEsaUNBRkc7QUFHWCw2QkFBdUJELEVBSFo7QUFJWCxvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxNQUhWO0FBSUUsc0JBQWMsSUFKaEI7QUFLRSxnQkFBUUMsRUFMVjtBQU1FLHdCQUFnQixJQU5sQjtBQU9FLGtCQUFVLEtBUFo7QUFRRSxzQkFBYyxDQUNaO0FBQ0Usa0JBQVEsYUFEVjtBQUVFLG1CQUFTLElBRlg7QUFHRSxrQkFBUSxZQUhWO0FBSUUsa0JBQVEsSUFKVjtBQUtFLHdCQUFjO0FBTGhCLFNBRFksRUFRWkMsRUFSWSxFQVNaO0FBQ0Usa0JBQVEsZ0JBRFY7QUFFRSxrQkFBUSxjQUZWO0FBR0Usd0JBQWMsQ0FDWjtBQUNFLG9CQUFRLGFBRFY7QUFFRSxxQkFBUyxJQUZYO0FBR0Usb0JBQVEsZ0JBSFY7QUFJRSxvQkFBUSxJQUpWO0FBS0UsMEJBQWM7QUFMaEIsV0FEWSxFQVFaQyxFQVJZLEVBU1o7QUFDRSxvQkFBUSxhQURWO0FBRUUscUJBQVMsSUFGWDtBQUdFLG9CQUFRLHFCQUhWO0FBSUUsMEJBQWMsSUFKaEI7QUFLRSxvQkFBUSxJQUxWO0FBTUUsNEJBQWdCLG9CQU5sQjtBQU9FLHNCQUFVLElBUFo7QUFRRSwwQkFBYyxDQUNaRCxFQURZLEVBRVo7QUFDRSxzQkFBUSxhQURWO0FBRUUsdUJBQVMsSUFGWDtBQUdFLHNCQUFRLHNCQUhWO0FBSUUsc0JBQVEsSUFKVjtBQUtFLDRCQUFjO0FBTGhCLGFBRlksRUFTWkMsRUFUWSxFQVVaO0FBQ0Usc0JBQVEsYUFEVjtBQUVFLHVCQUFTLElBRlg7QUFHRSxzQkFBUSxpQkFIVjtBQUlFLDRCQUFjLElBSmhCO0FBS0Usc0JBQVEsSUFMVjtBQU1FLDhCQUFnQixnQkFObEI7QUFPRSx3QkFBVSxJQVBaO0FBUUUsNEJBQWMsQ0FDWkQsRUFEWSxFQUVaO0FBQ0Usd0JBQVEsYUFEVjtBQUVFLHlCQUFTLElBRlg7QUFHRSx3QkFBUSxrQkFIVjtBQUlFLHdCQUFRLElBSlY7QUFLRSw4QkFBYztBQUxoQixlQUZZLEVBU1pDLEVBVFk7QUFSaEIsYUFWWTtBQVJoQixXQVRZO0FBSGhCLFNBVFk7QUFSaEIsT0FEWTtBQUpIO0FBdENSLEdBQVA7QUF1SEMsQ0F0SmlDLEVBQWxDO0FBdUpBO0FBQ0NKLElBQUQsQ0FBSyxTQUFMLENBQWdCSyxJQUFoQixHQUF1QixrQ0FBdkI7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUN0TkE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTUEsS0FBSSxzQkFBSixHQUE2QjtBQUNqQyxVQUFRLFVBRHlCO0FBRWpDLFVBQVEseUNBRnlCO0FBR2pDLFVBQVEsY0FIeUI7QUFJakMsY0FBWSxJQUpxQjtBQUtqQyx5QkFBdUIsRUFMVTtBQU1qQyxnQkFBYyxDQUNaO0FBQ0UsWUFBUSxhQURWO0FBRUUsYUFBUyxJQUZYO0FBR0UsWUFBUSxnQkFIVjtBQUlFLFlBQVEsSUFKVjtBQUtFLGtCQUFjO0FBTGhCLEdBRFksRUFRWjtBQUNFLFlBQVEsYUFEVjtBQUVFLGFBQVMsSUFGWDtBQUdFLFlBQVEsTUFIVjtBQUlFLFlBQVEsSUFKVjtBQUtFLGtCQUFjO0FBTGhCLEdBUlksRUFlWjtBQUNFLFlBQVEsYUFEVjtBQUVFLGFBQVMsSUFGWDtBQUdFLFlBQVEscUJBSFY7QUFJRSxrQkFBYyxJQUpoQjtBQUtFLFlBQVEsSUFMVjtBQU1FLG9CQUFnQixvQkFObEI7QUFPRSxjQUFVLElBUFo7QUFRRSxrQkFBYyxDQUNaO0FBQ0UsY0FBUSxhQURWO0FBRUUsZUFBUyxJQUZYO0FBR0UsY0FBUSxJQUhWO0FBSUUsY0FBUSxJQUpWO0FBS0Usb0JBQWM7QUFMaEIsS0FEWSxFQVFaO0FBQ0UsY0FBUSxnQkFEVjtBQUVFLGNBQVEsNEJBRlY7QUFHRSxjQUFRO0FBSFYsS0FSWTtBQVJoQixHQWZZO0FBTm1CLENBQW5DO0FBOENBO0FBQ0NBLElBQUQsQ0FBSyxTQUFMLENBQWdCSyxJQUFoQixHQUF1QixrQ0FBdkI7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQU1BLEtBQUksc0JBQUosR0FBOEIsWUFBVTtBQUM5QyxNQUFJQyxLQUFLO0FBQ1AsWUFBUSxhQUREO0FBRVAsYUFBUyxJQUZGO0FBR1AsWUFBUSxJQUhEO0FBSVAsWUFBUSxJQUpEO0FBS1Asa0JBQWM7QUFMUCxHQUFUO0FBT0EsU0FBTztBQUNMLFlBQVEsVUFESDtBQUVMLFlBQVEsNEJBRkg7QUFHTCxZQUFRLG9CQUhIO0FBSUwsZ0JBQVksSUFKUDtBQUtMLDJCQUF1QixFQUxsQjtBQU1MLGtCQUFjLENBQ1pBLEVBRFksRUFFWjtBQUNFLGNBQVEsYUFEVjtBQUVFLGVBQVMsSUFGWDtBQUdFLGNBQVEsc0JBSFY7QUFJRSxjQUFRLElBSlY7QUFLRSxvQkFBYztBQUxoQixLQUZZLEVBU1o7QUFDRSxjQUFRLGFBRFY7QUFFRSxlQUFTLElBRlg7QUFHRSxjQUFRLE1BSFY7QUFJRSxjQUFRLElBSlY7QUFLRSxvQkFBYztBQUxoQixLQVRZLEVBZ0JaO0FBQ0UsY0FBUSxhQURWO0FBRUUsZUFBUyxJQUZYO0FBR0UsY0FBUSxpQkFIVjtBQUlFLG9CQUFjLElBSmhCO0FBS0UsY0FBUSxJQUxWO0FBTUUsc0JBQWdCLGdCQU5sQjtBQU9FLGdCQUFVLElBUFo7QUFRRSxvQkFBYyxDQUNaQSxFQURZLEVBRVo7QUFDRSxnQkFBUSxnQkFEVjtBQUVFLGdCQUFRLG9CQUZWO0FBR0UsZ0JBQVE7QUFIVixPQUZZO0FBUmhCLEtBaEJZO0FBTlQsR0FBUDtBQXlDQyxDQWpEa0MsRUFBbkM7QUFrREE7QUFDQ0QsSUFBRCxDQUFLLFNBQUwsQ0FBZ0JLLElBQWhCLEdBQXVCLGtDQUF2QjtBQUNBQyxPQUFPQyxPQUFQLEdBQWlCUCxJQUFqQixDOzs7Ozs7Ozs7Ozs7QUM5RUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBLElBQU1BLEtBQUkscUJBQUosR0FBNkIsWUFBVTtBQUM3QyxNQUFJQyxLQUFLLENBQ1A7QUFDRSxZQUFRLGVBRFY7QUFFRSxZQUFRLE9BRlY7QUFHRSxZQUFRLGdDQUhWO0FBSUUsb0JBQWdCO0FBSmxCLEdBRE8sQ0FBVDtBQUFBLE1BUUFDLEtBQUssQ0FDSDtBQUNFLFlBQVEsVUFEVjtBQUVFLFlBQVEsT0FGVjtBQUdFLG9CQUFnQixPQUhsQjtBQUlFLFlBQVE7QUFKVixHQURHLENBUkw7QUFBQSxNQWdCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsTUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0FoQkw7QUFBQSxNQXVCQUMsS0FBSztBQUNILFlBQVEsYUFETDtBQUVILGFBQVMsSUFGTjtBQUdILFlBQVEsSUFITDtBQUlILFlBQVEsSUFKTDtBQUtILGtCQUFjO0FBTFgsR0F2Qkw7QUE4QkEsU0FBTztBQUNMLFlBQVEsU0FESDtBQUVMLHFCQUFpQixVQUZaO0FBR0wsWUFBUSx3QkFISDtBQUlMLFVBQU0sSUFKRDtBQUtMLFlBQVEsd25CQUxIO0FBTUwsZ0JBQVksRUFOUDtBQU9MLGdCQUFZO0FBQ1YsY0FBUSxVQURFO0FBRVYsY0FBUSx3QkFGRTtBQUdWLGNBQVEsVUFIRTtBQUlWLGtCQUFZLElBSkY7QUFLViw2QkFBdUJILEVBTGI7QUFNVixvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxnQkFIVjtBQUlFLHNCQUFjLElBSmhCO0FBS0UsZ0JBQVFDLEVBTFY7QUFNRSx3QkFBZ0IsaUNBTmxCO0FBT0Usa0JBQVUsS0FQWjtBQVFFLHNCQUFjLENBQ1o7QUFDRSxrQkFBUSxhQURWO0FBRUUsbUJBQVMsSUFGWDtBQUdFLGtCQUFRLGNBSFY7QUFJRSx3QkFBYyxJQUpoQjtBQUtFLGtCQUFRLElBTFY7QUFNRSwwQkFBZ0IsY0FObEI7QUFPRSxvQkFBVSxLQVBaO0FBUUUsd0JBQWMsQ0FDWjtBQUNFLG9CQUFRLGdCQURWO0FBRUUsb0JBQVEseUNBRlY7QUFHRSxvQkFBUTtBQUhWLFdBRFk7QUFSaEIsU0FEWTtBQVJoQixPQURZO0FBTkosS0FQUDtBQTJDTCxpQkFBYTtBQUNYLGNBQVEsV0FERztBQUVYLGNBQVEsd0JBRkc7QUFHWCw2QkFBdUJELEVBSFo7QUFJWCxvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLGlCQUFTLElBRlg7QUFHRSxnQkFBUSxnQkFIVjtBQUlFLHNCQUFjLElBSmhCO0FBS0UsZ0JBQVFDLEVBTFY7QUFNRSx3QkFBZ0IsaUNBTmxCO0FBT0Usa0JBQVUsS0FQWjtBQVFFLHNCQUFjLENBQ1o7QUFDRSxrQkFBUSxhQURWO0FBRUUsbUJBQVMsSUFGWDtBQUdFLGtCQUFRLGNBSFY7QUFJRSx3QkFBYyxJQUpoQjtBQUtFLGtCQUFRLElBTFY7QUFNRSwwQkFBZ0IsY0FObEI7QUFPRSxvQkFBVSxLQVBaO0FBUUUsd0JBQWMsQ0FDWjtBQUNFLG9CQUFRLGFBRFY7QUFFRSxxQkFBUyxJQUZYO0FBR0Usb0JBQVEsZ0JBSFY7QUFJRSxvQkFBUSxJQUpWO0FBS0UsMEJBQWM7QUFMaEIsV0FEWSxFQVFaQyxFQVJZLEVBU1o7QUFDRSxvQkFBUSxhQURWO0FBRUUscUJBQVMsSUFGWDtBQUdFLG9CQUFRLHFCQUhWO0FBSUUsMEJBQWMsSUFKaEI7QUFLRSxvQkFBUSxJQUxWO0FBTUUsNEJBQWdCLG9CQU5sQjtBQU9FLHNCQUFVLElBUFo7QUFRRSwwQkFBYyxDQUNaQyxFQURZLEVBRVo7QUFDRSxzQkFBUSxhQURWO0FBRUUsdUJBQVMsSUFGWDtBQUdFLHNCQUFRLHNCQUhWO0FBSUUsc0JBQVEsSUFKVjtBQUtFLDRCQUFjO0FBTGhCLGFBRlksRUFTWkQsRUFUWSxFQVVaO0FBQ0Usc0JBQVEsYUFEVjtBQUVFLHVCQUFTLElBRlg7QUFHRSxzQkFBUSxpQkFIVjtBQUlFLDRCQUFjLElBSmhCO0FBS0Usc0JBQVEsSUFMVjtBQU1FLDhCQUFnQixnQkFObEI7QUFPRSx3QkFBVSxJQVBaO0FBUUUsNEJBQWMsQ0FDWkMsRUFEWSxFQUVaO0FBQ0Usd0JBQVEsYUFEVjtBQUVFLHlCQUFTLElBRlg7QUFHRSx3QkFBUSxrQkFIVjtBQUlFLHdCQUFRLElBSlY7QUFLRSw4QkFBYztBQUxoQixlQUZZLEVBU1pELEVBVFk7QUFSaEIsYUFWWTtBQVJoQixXQVRZLEVBaURaQyxFQWpEWTtBQVJoQixTQURZO0FBUmhCLE9BRFk7QUFKSDtBQTNDUixHQUFQO0FBMEhDLENBekppQyxFQUFsQztBQTBKQTtBQUNDSixJQUFELENBQUssU0FBTCxDQUFnQkssSUFBaEIsR0FBdUIsa0NBQXZCO0FBQ0FDLE9BQU9DLE9BQVAsR0FBaUJQLElBQWpCLEM7Ozs7Ozs7Ozs7OztBQ2xPQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsSUFBTUEsS0FBSSxxQkFBSixHQUE2QixZQUFVO0FBQzdDLE1BQUlDLEtBQUssQ0FDUDtBQUNFLFlBQVEsZUFEVjtBQUVFLFlBQVEsT0FGVjtBQUdFLFlBQVEsNEJBSFY7QUFJRSxvQkFBZ0I7QUFKbEIsR0FETyxDQUFUO0FBQUEsTUFRQUMsS0FBSyxDQUNIO0FBQ0UsWUFBUSxVQURWO0FBRUUsWUFBUSxPQUZWO0FBR0Usb0JBQWdCLE9BSGxCO0FBSUUsWUFBUTtBQUpWLEdBREcsQ0FSTDtBQUFBLE1BZ0JBQyxLQUFLO0FBQ0gsWUFBUSxhQURMO0FBRUgsYUFBUyxJQUZOO0FBR0gsWUFBUSxJQUhMO0FBSUgsWUFBUSxJQUpMO0FBS0gsa0JBQWM7QUFMWCxHQWhCTDtBQUFBLE1BdUJBQyxLQUFLO0FBQ0gsWUFBUSxhQURMO0FBRUgsYUFBUyxJQUZOO0FBR0gsWUFBUSxNQUhMO0FBSUgsWUFBUSxJQUpMO0FBS0gsa0JBQWM7QUFMWCxHQXZCTDtBQThCQSxTQUFPO0FBQ0wsWUFBUSxTQURIO0FBRUwscUJBQWlCLFVBRlo7QUFHTCxZQUFRLG9CQUhIO0FBSUwsVUFBTSxJQUpEO0FBS0wsWUFBUSwrYUFMSDtBQU1MLGdCQUFZLEVBTlA7QUFPTCxnQkFBWTtBQUNWLGNBQVEsVUFERTtBQUVWLGNBQVEsb0JBRkU7QUFHVixjQUFRLFVBSEU7QUFJVixrQkFBWSxJQUpGO0FBS1YsNkJBQXVCSCxFQUxiO0FBTVYsb0JBQWMsQ0FDWjtBQUNFLGdCQUFRLGFBRFY7QUFFRSxpQkFBUyxJQUZYO0FBR0UsZ0JBQVEsWUFIVjtBQUlFLHNCQUFjLElBSmhCO0FBS0UsZ0JBQVFDLEVBTFY7QUFNRSx3QkFBZ0IsNkJBTmxCO0FBT0Usa0JBQVUsS0FQWjtBQVFFLHNCQUFjLENBQ1o7QUFDRSxrQkFBUSxhQURWO0FBRUUsbUJBQVMsSUFGWDtBQUdFLGtCQUFRLFVBSFY7QUFJRSx3QkFBYyxJQUpoQjtBQUtFLGtCQUFRLElBTFY7QUFNRSwwQkFBZ0Isb0JBTmxCO0FBT0Usb0JBQVUsS0FQWjtBQVFFLHdCQUFjLENBQ1o7QUFDRSxvQkFBUSxnQkFEVjtBQUVFLG9CQUFRLDRCQUZWO0FBR0Usb0JBQVE7QUFIVixXQURZO0FBUmhCLFNBRFk7QUFSaEIsT0FEWTtBQU5KLEtBUFA7QUEyQ0wsaUJBQWE7QUFDWCxjQUFRLFdBREc7QUFFWCxjQUFRLG9CQUZHO0FBR1gsNkJBQXVCRCxFQUhaO0FBSVgsb0JBQWMsQ0FDWjtBQUNFLGdCQUFRLGFBRFY7QUFFRSxpQkFBUyxJQUZYO0FBR0UsZ0JBQVEsWUFIVjtBQUlFLHNCQUFjLElBSmhCO0FBS0UsZ0JBQVFDLEVBTFY7QUFNRSx3QkFBZ0IsNkJBTmxCO0FBT0Usa0JBQVUsS0FQWjtBQVFFLHNCQUFjLENBQ1o7QUFDRSxrQkFBUSxhQURWO0FBRUUsbUJBQVMsSUFGWDtBQUdFLGtCQUFRLFVBSFY7QUFJRSx3QkFBYyxJQUpoQjtBQUtFLGtCQUFRLElBTFY7QUFNRSwwQkFBZ0Isb0JBTmxCO0FBT0Usb0JBQVUsS0FQWjtBQVFFLHdCQUFjLENBQ1pDLEVBRFksRUFFWjtBQUNFLG9CQUFRLGFBRFY7QUFFRSxxQkFBUyxJQUZYO0FBR0Usb0JBQVEsc0JBSFY7QUFJRSxvQkFBUSxJQUpWO0FBS0UsMEJBQWM7QUFMaEIsV0FGWSxFQVNaQyxFQVRZLEVBVVo7QUFDRSxvQkFBUSxhQURWO0FBRUUscUJBQVMsSUFGWDtBQUdFLG9CQUFRLGlCQUhWO0FBSUUsMEJBQWMsSUFKaEI7QUFLRSxvQkFBUSxJQUxWO0FBTUUsNEJBQWdCLGdCQU5sQjtBQU9FLHNCQUFVLElBUFo7QUFRRSwwQkFBYyxDQUNaRCxFQURZLEVBRVo7QUFDRSxzQkFBUSxhQURWO0FBRUUsdUJBQVMsSUFGWDtBQUdFLHNCQUFRLGtCQUhWO0FBSUUsc0JBQVEsSUFKVjtBQUtFLDRCQUFjO0FBTGhCLGFBRlksRUFTWkMsRUFUWTtBQVJoQixXQVZZO0FBUmhCLFNBRFk7QUFSaEIsT0FEWTtBQUpIO0FBM0NSLEdBQVA7QUFzR0MsQ0FySWlDLEVBQWxDO0FBc0lBO0FBQ0NKLElBQUQsQ0FBSyxTQUFMLENBQWdCSyxJQUFoQixHQUF1QixrQ0FBdkI7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUNqTUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBWUEsSUFBTUEsS0FBSSxzQkFBSixHQUE2QjtBQUNqQyxVQUFRLFVBRHlCO0FBRWpDLFVBQVEsb0JBRnlCO0FBR2pDLFVBQVEsZ0JBSHlCO0FBSWpDLGNBQVksSUFKcUI7QUFLakMseUJBQXVCLEVBTFU7QUFNakMsZ0JBQWMsQ0FDWjtBQUNFLFlBQVEsYUFEVjtBQUVFLGFBQVMsSUFGWDtBQUdFLFlBQVEsa0JBSFY7QUFJRSxZQUFRLElBSlY7QUFLRSxrQkFBYztBQUxoQixHQURZLEVBUVo7QUFDRSxZQUFRLGFBRFY7QUFFRSxhQUFTLElBRlg7QUFHRSxZQUFRLE1BSFY7QUFJRSxZQUFRLElBSlY7QUFLRSxrQkFBYztBQUxoQixHQVJZO0FBTm1CLENBQW5DO0FBdUJBO0FBQ0NBLElBQUQsQ0FBSyxTQUFMLENBQWdCSyxJQUFoQixHQUF1QixrQ0FBdkI7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7O0FBRUEsSUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLENBQU47O2tCQWlCZSxnQkFBNkM7QUFBQSxNQUExQyxjQUEwQyxRQUExQyxjQUEwQztBQUFBLE1BQTFCLElBQTBCLFFBQTFCLElBQTBCOztBQUMxRCxNQUFNLFlBQVk7QUFDaEIsV0FBTztBQUNMLG9DQURLO0FBRUw7QUFGSztBQURTLEdBQWxCO0FBT0EsU0FBTyxrQ0FDTCxRQURLLEVBRUwsU0FGSyxDQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7O0FBRUEsSUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLENBQU47O2tCQWtCZSxnQkFBc0Q7QUFBQSxNQUFuRCxVQUFtRCxRQUFuRCxVQUFtRDtBQUFBLE1BQXZDLElBQXVDLFFBQXZDLElBQXVDO0FBQUEsTUFBakMsV0FBaUMsUUFBakMsV0FBaUM7O0FBQ25FLE1BQU0sWUFBWTtBQUNoQixXQUFPO0FBQ0wsNEJBREs7QUFFTCxnQkFGSztBQUdMO0FBSEs7QUFEUyxHQUFsQjtBQVFBLFNBQU8sa0NBQ0wsUUFESyxFQUVMLFNBRkssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEOztBQUVBLElBQU07QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxDQUFOOztrQkFpQmUsZ0JBQWlDO0FBQUEsTUFBOUIsRUFBOEIsUUFBOUIsRUFBOEI7QUFBQSxNQUExQixJQUEwQixRQUExQixJQUEwQjs7QUFDOUMsTUFBTSxZQUFZO0FBQ2hCLFdBQU87QUFDTCxZQURLO0FBRUw7QUFGSztBQURTLEdBQWxCO0FBT0EsU0FBTyxrQ0FDTCxRQURLLEVBRUwsU0FGSyxDQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7O0FBRUEsSUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLENBQU47O2tCQWlCZSxnQkFBaUM7QUFBQSxNQUE5QixFQUE4QixRQUE5QixFQUE4QjtBQUFBLE1BQTFCLElBQTBCLFFBQTFCLElBQTBCOztBQUM5QyxNQUFNLFlBQVk7QUFDaEIsV0FBTztBQUNMLFlBREs7QUFFTDtBQUZLO0FBRFMsR0FBbEI7QUFPQSxTQUFPLGtDQUNMLFFBREssRUFFTCxTQUZLLENBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JEOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTSx1QkFBdUIsb0NBQXFCLENBQUMsVUFBRCxDQUFyQixDQUE3QjtBQVFBLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCO0FBQUEsUUFDcEIsY0FEb0IsUUFDcEIsY0FEb0I7QUFBQSxRQUVwQixnQkFGb0IsUUFFcEIsZ0JBRm9CO0FBQUEsUUFHcEIsWUFIb0IsUUFHcEIsWUFIb0I7QUFBQSxRQUlwQixXQUpvQixRQUlwQixXQUpvQjtBQUFBLFdBTXBCLDhCQUFDLHdCQUFELEVBQWUsRUFBQyxJQUFJLENBQUwsRUFBZixFQUNHLG1CQUNDLHdDQUFNLFVBQVUsYUFBYSxXQUFiLENBQWhCLEVBQTJDLFFBQU8sRUFBbEQsSUFDRSw4QkFBQyxnQkFBRCxFQUFNLEVBQ0osV0FBVyxvQkFEUCxFQUVKLE1BQUssTUFGRCxFQUdKLGFBQVksZUFIUixFQUlKLFVBQVUsb0JBSk4sRUFBTixDQURGLEVBT0UsOEJBQUMsV0FBRCxFQUFJLEVBQUMsSUFBSSxFQUFMLEVBQUosRUFDRSw4QkFBQyxnQkFBRCxFQUFPLEVBQUMsSUFBSSxFQUFMLEVBQVAsRUFBYyxRQUFkLENBREYsRUFFRSw4QkFBQyxnQkFBRCxFQUFPLEVBQUMsTUFBSyxRQUFOLEVBQWUsU0FBUyxjQUF4QixFQUFQLEVBQTZDLFFBQTdDLENBRkYsQ0FQRixDQURELEdBY0MsOEJBQUMsZ0JBQUQsRUFBTyxFQUFDLFNBQVMsY0FBVixFQUEwQixPQUFPLEVBQUUsT0FBTyxNQUFULEVBQWpDLEVBQVAsRUFBeUQsaUJBQXpELENBZkosQ0FOb0I7QUFBQSxDQUF0QjtrQkEwQmUsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2Y7O0FBQ0E7O0FBQ0E7Ozs7OztBQWdCQSxJQUFNLFdBQVc7QUFDZixpQkFBYTtBQUFBLFlBQUcsY0FBSCxRQUFHLGNBQUg7QUFBQSxZQUFtQixjQUFuQixRQUFtQixjQUFuQjtBQUFBLGVBQWdELFVBQUMsS0FBRCxFQUE2QjtBQUN4RiwrQ0FBbUIsd0JBQUcsOEJBQUgsSUFBc0IsS0FBdEIsQ0FBbkIsR0FDQSxnQkFEQTtBQUVELFNBSFk7QUFBQTtBQURFLENBQWpCO0FBT0EsSUFBTSxnQkFBZ0I7QUFDcEIsb0JBQWdCO0FBQUEsWUFBRyxnQkFBSCxTQUFHLGdCQUFIO0FBQUEsZUFBa0M7QUFBQSxtQkFBTztBQUN2RCxrQ0FBa0IsQ0FBQztBQURvQyxhQUFQO0FBQUEsU0FBbEM7QUFBQTtBQURJLENBQXRCO2tCQU1lLHdCQUNiLGtDQUFrQixFQUFFLGtCQUFrQixLQUFwQixFQUFsQixFQUErQyxhQUEvQyxDQURhLEVBRWIsNkJBQWEsUUFBYixDQUZhLEVBR2IsMEJBQVU7QUFDUixVQUFNO0FBREUsQ0FBVixDQUhhLEVBTWIsdUJBTmEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CZjs7QUFFQTs7OztBQVNBOzs7O0FBQ0E7Ozs7OztBQVlBLElBQU0sY0FBYyxnQ0FBTyxXQUFQLENBQWQ7QUFBQTtBQUFBLHdEQUFOO0FBTUEsSUFBTSxvQkFBb0IsU0FBcEIsaUJBQW9CO0FBQUEsUUFDeEIsWUFEd0IsUUFDeEIsWUFEd0I7QUFBQSxXQUd4Qiw4QkFBQyxpQkFBRCxFQUFVLEVBQUMsVUFBUyxNQUFWLEVBQVYsRUFDRSw4QkFBQyxZQUFELEVBQUssRUFBQyxJQUFJLEVBQUwsRUFBUyxJQUFJLEVBQWIsRUFBaUIsVUFBVSxFQUEzQixFQUFMLEVBQ0UsOEJBQUMsWUFBRCxFQUFLLEVBQUMsSUFBRyxNQUFKLEVBQVcsU0FBUSxRQUFuQixFQUE0QixZQUFXLE1BQXZDLEVBQUwsRUFDRyxhQUFhLElBRGhCLENBREYsRUFJTyxzQkFKUCxDQURGLEVBTUUsOEJBQUMsV0FBRCxFQUFZLElBQVosRUFDRyxhQUFhLG1CQUFiLENBQWlDLEdBQWpDLENBQXFDLFVBQUMsUUFBRCxFQUFXLENBQVg7QUFBQSxlQUNwQyw4QkFBQywyQkFBRCxFQUFTLEVBQ1AsS0FBSyxTQUFTLEVBRFAsRUFFUCxvQkFBa0IsQ0FGWCxFQUdQLFVBQVUsUUFISCxFQUFULENBRG9DO0FBQUEsS0FBckMsQ0FESCxFQVFFLDhCQUFDLGdDQUFELEVBQWMsRUFBQyxnQkFBZ0IsYUFBYSxjQUE5QixFQUFkLENBUkYsQ0FORixDQUh3QjtBQUFBLENBQTFCO2tCQXNCZSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERmOztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsQ0FBTjtBQWNBLElBQU07QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBTjtBQWdCQSxJQUFNLFlBQVksd0JBQ2hCLDJCQUFXLE1BQVgsRUFBbUIsY0FBbkIsQ0FEZ0IsRUFFaEIsNEJBQVMsU0FBVCxDQUZnQixFQUdoQiwyQkFIZ0IsQ0FBbEI7QUFLTyxJQUFNLG9DQUFjO0FBQ3pCLHNCQUR5QjtBQUV6QjtBQUZ5QixDQUFwQjtrQkFLUSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR08sSUFBTSwwQ0FBaUIsZ0NBQU8sY0FBUCxDQUFqQjtBQUFBO0FBQUEsb0dBQU47QUFRUCxJQUFNLGFBQWEsZ0NBQU8seUJBQVAsQ0FBYjtBQUFBO0FBQUEsb0JBQU47QUFzQ0EsSUFBTSx3QkFBd0Isb0NBQXFCLENBQUMsVUFBRCxDQUFyQixDQUE5QjtBQUNBLElBQU0sbUJBQW1CLG9DQUFxQixDQUFDLFVBQUQsQ0FBckIsQ0FBekI7QUFFQSxJQUFNLFdBQVcsU0FBWCxRQUFXO0FBQUEsUUFDZixjQURlLFFBQ2YsY0FEZTtBQUFBLFFBRWYsaUJBRmUsUUFFZixpQkFGZTtBQUFBLFFBR2YsWUFIZSxRQUdmLFlBSGU7QUFBQSxRQUlmLFlBSmUsUUFJZixZQUplO0FBQUEsUUFLZixjQUxlLFFBS2YsY0FMZTtBQUFBLFFBTWYsd0JBTmUsUUFNZix3QkFOZTtBQUFBLFFBT2Ysb0JBUGUsUUFPZixvQkFQZTtBQUFBLFFBUWYsSUFSZSxRQVFmLElBUmU7QUFBQSxRQVNmLE9BVGUsUUFTZixPQVRlO0FBQUEsUUFVZixZQVZlLFFBVWYsWUFWZTtBQUFBLFFBV2YsVUFYZSxRQVdmLFVBWGU7QUFBQSxRQVlmLGVBWmUsUUFZZixlQVplO0FBQUEsV0FjZiw4QkFBQyxjQUFELEVBQWUsRUFBQyxLQUFLLG9CQUFOLEVBQTRCLEdBQUcsRUFBL0IsRUFBZixFQUNFLDhCQUFDLFdBQUQsRUFBSSxFQUFDLElBQUksRUFBTCxFQUFKLEVBQ0UsOEJBQUMsZ0JBQUQsRUFBSyxFQUFDLFlBQVcsUUFBWixFQUFMLEVBQ0csb0JBQ0Msd0NBQU0sVUFBVSxhQUFhLFlBQWIsQ0FBaEIsRUFBNEMsUUFBTyxFQUFuRCxJQUNFLDhCQUFDLGdCQUFELEVBQU0sRUFDSixXQUFXLG9CQURQLEVBRUosTUFBSyxjQUZELEVBR0osVUFBVSxxQkFITixFQUFOLENBREYsRUFNRSw4QkFBQyxXQUFELEVBQUksRUFBQyxJQUFJLEVBQUwsRUFBSixFQUNFLDhCQUFDLGdCQUFELEVBQU8sRUFBQyxJQUFJLEVBQUwsRUFBUCxFQUFjLE1BQWQsQ0FERixFQUVFLDhCQUFDLGdCQUFELEVBQU8sRUFBQyxNQUFLLFFBQU4sRUFBZSxTQUFTLGNBQXhCLEVBQVAsRUFBNkMsUUFBN0MsQ0FGRixDQU5GLENBREQsR0FhRyw4QkFBQyxnQkFBTSxRQUFQLEVBQWUsSUFBZixFQUNFLDhCQUFDLFlBQUQsRUFBSyxFQUFDLFlBQVcsTUFBWixFQUFtQixVQUFVLEVBQTdCLEVBQUwsRUFBdUMsSUFBdkMsQ0FERixFQUVFLDhCQUFDLFVBQUQsRUFBVyxFQUFDLElBQUcsTUFBSixFQUFXLFNBQVMsY0FBcEIsRUFBWCxFQUNFLDhCQUFDLGdCQUFELEVBQU8sSUFBUCxDQURGLENBRkYsRUFLRSw4QkFBQyw0QkFBRCxFQUFnQixFQUFDLFlBQVUsSUFBWCxFQUFZLHFCQUFtQixJQUEvQixFQUFoQixFQUNDO0FBQUEsWUFBRyxVQUFILFNBQUcsVUFBSDtBQUFBLFlBQWUsV0FBZixTQUFlLFdBQWY7QUFBQSxZQUE0QixNQUE1QixTQUE0QixNQUE1QjtBQUFBLGVBQ0csOEJBQUMsZ0JBQU0sUUFBUCxFQUFlLElBQWYsRUFDRSw4QkFBQyxVQUFELEVBQVcsRUFBQyxTQUFTLFVBQVYsRUFBWCxFQUNFLDhCQUFDLGVBQUQsRUFBTSxJQUFOLENBREYsQ0FERixFQUlHLE9BQ0MsOEJBQUMsYUFBRCxFQUFNLEVBQUMsS0FBSSxLQUFMLEVBQU4sRUFDRSx3Q0FBTSxVQUFVLGFBQWEsY0FBYixDQUFoQixFQUE4QyxRQUFPLEVBQXJELElBQ0UsOEJBQUMsZ0JBQUQsRUFBTSxFQUNKLFdBQVcsb0JBRFAsRUFFSixNQUFLLHFCQUZELEVBR0osMENBQXdDLElBQXhDLGlCQUhJLEVBSUosSUFBSSxFQUpBLEVBQU4sQ0FERixFQU9FLDhCQUFDLGdCQUFELEVBQU8sRUFBQyxJQUFJLEVBQUwsRUFBUyxVQUFVLDZCQUE2QixJQUFoRCxFQUFQLEVBQTJELFFBQTNELENBUEYsRUFRRSw4QkFBQyxnQkFBRCxFQUFPLEVBQUMsTUFBSyxRQUFOLEVBQWUsU0FBUyxXQUF4QixFQUFQLEVBQTBDLFFBQTFDLENBUkYsQ0FERixDQURELENBSkgsQ0FESDtBQUFBLEtBREQsQ0FMRixDQWROLENBREYsQ0FERixFQWdERyxnQkFBZ0IsR0FBaEIsQ0FBb0IsVUFBQyxJQUFELEVBQU8sQ0FBUDtBQUFBLGVBQ25CLDhCQUFDLHVCQUFELEVBQUssRUFDSCxLQUFLLEtBQUssRUFEUCxFQUVILGdCQUFjLENBRlgsRUFHSCxNQUFNLElBSEgsRUFBTCxDQURtQjtBQUFBLEtBQXBCLENBaERILEVBdURHLGVBQ0Msd0NBQU0sVUFBVSxhQUFhLE9BQWIsQ0FBaEIsRUFBdUMsUUFBTyxFQUE5QyxJQUNFLDhCQUFDLGdCQUFELEVBQU0sRUFDSixXQUFXLG9CQURQLEVBRUosTUFBSyxvQkFGRCxFQUdKLGFBQVksc0JBSFIsRUFJSixVQUFVLGdCQUpOLEVBQU4sQ0FERixFQU9FLDhCQUFDLFdBQUQsRUFBSSxFQUFDLElBQUksRUFBTCxFQUFKLEVBQ0UsOEJBQUMsZ0JBQUQsRUFBTyxFQUFDLElBQUksRUFBTCxFQUFQLEVBQWMsUUFBZCxDQURGLEVBRUUsOEJBQUMsZ0JBQUQsRUFBTyxFQUFDLE1BQUssUUFBTixFQUFlLFNBQVMsVUFBeEIsRUFBUCxFQUF5QyxRQUF6QyxDQUZGLENBUEYsQ0FERCxHQWNDLDhCQUFDLGdCQUFELEVBQU8sRUFBQyxTQUFTLFVBQVYsRUFBc0IsT0FBTyxFQUFFLE9BQU8sTUFBVCxFQUE3QixFQUFQLEVBQXFELHlCQUFyRCxDQXJFSixDQWRlO0FBQUEsQ0FBakI7a0JBd0ZlLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpmOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLENBQU47QUEwQkEsSUFBTSxnQkFBZ0I7QUFDcEIsb0JBQWdCO0FBQUEsWUFBRyxpQkFBSCxRQUFHLGlCQUFIO0FBQUEsZUFBbUM7QUFBQSxtQkFBTztBQUN4RCxtQ0FBbUIsQ0FBQztBQURvQyxhQUFQO0FBQUEsU0FBbkM7QUFBQSxLQURJO0FBSXBCLGdCQUFZO0FBQUEsWUFBRyxZQUFILFNBQUcsWUFBSDtBQUFBLGVBQThCO0FBQUEsbUJBQU87QUFDL0MsOEJBQWMsQ0FBQztBQURnQyxhQUFQO0FBQUEsU0FBOUI7QUFBQTtBQUpRLENBQXRCO0FBU0EsSUFBTSxXQUFXO0FBQ2Ysb0JBQWdCO0FBQUEsWUFBRyxvQkFBSCxTQUFHLG9CQUFIO0FBQUEsZUFBc0M7QUFBQSxtQkFDcEQsc0NBQXVCLEVBQUUsSUFBSSxvQkFBTixFQUF2QixDQURvRDtBQUFBLFNBQXRDO0FBQUEsS0FERDtBQUdmLGtCQUFjO0FBQUEsWUFBRyxvQkFBSCxTQUFHLG9CQUFIO0FBQUEsWUFBeUIsY0FBekIsU0FBeUIsY0FBekI7QUFBQSxlQUFzRCxVQUFDLEtBQUQsRUFBOEI7QUFDaEcsZ0RBQXFCO0FBQ25CLG9CQUFJLG9CQURlO0FBRW5CLHNCQUFNLE1BQU07QUFGTyxhQUFyQixHQUlBLGdCQUpBO0FBS0QsU0FOYTtBQUFBLEtBSEM7QUFVZixhQUFTO0FBQUEsWUFBRyxvQkFBSCxTQUFHLG9CQUFIO0FBQUEsWUFBeUIsVUFBekIsU0FBeUIsVUFBekI7QUFBQSxlQUFrRCxVQUFDLEtBQUQsRUFBbUM7QUFDNUYsMkNBQWdCO0FBQ2QsNEJBQVksb0JBREU7QUFFZCxzQkFBTSxNQUFNO0FBRkUsYUFBaEIsR0FJQSxZQUpBO0FBS0QsU0FOUTtBQUFBO0FBVk0sQ0FBakI7QUFtQkEsSUFBTSxZQUFZLHdCQUNoQiwwQkFBVTtBQUFBLFFBQUcsSUFBSCxTQUFHLElBQUg7QUFBQSxXQUF1QjtBQUMvQixrQkFBVSxrQ0FBa0IsSUFBbEI7QUFEcUIsS0FBdkI7QUFBQSxDQUFWLENBRGdCLEVBSWhCLDRCQUFTLFNBQVQsQ0FKZ0IsRUFLaEIsNEJBQVksVUFBWixDQUxnQixFQU1oQixrQ0FBa0I7QUFDaEIsdUJBQW1CLEtBREg7QUFFaEIsa0JBQWM7QUFGRSxDQUFsQixFQUdHLGFBSEgsQ0FOZ0IsRUFVaEIsNkJBQWEsUUFBYixDQVZnQixFQVdoQiwwQkFBVTtBQUFBLFFBQUcsSUFBSCxTQUFHLElBQUg7QUFBQSxXQUF1QjtBQUMvQix1QkFBZTtBQUNiLDBCQUFjO0FBREQ7QUFEZ0IsS0FBdkI7QUFBQSxDQUFWLENBWGdCLEVBZ0JoQiwwQkFBVSxFQUFWLENBaEJnQixFQWlCaEIseUJBQVEsVUFBQyxLQUFEO0FBQUEsUUFBVSxRQUFWLFNBQVUsUUFBVjtBQUFBLFdBQStCO0FBQ3JDLGtDQUEwQixTQUFTLEtBQVQsRUFBZ0IscUJBQWhCO0FBRFcsS0FBL0I7QUFBQSxDQUFSLENBakJnQixFQW9CaEIsa0JBcEJnQixDQUFsQjtrQkFzQmUsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7O0FBRUEsSUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLENBQU47O2tCQWdCZSxnQkFBMkI7QUFBQSxNQUF4QixFQUF3QixRQUF4QixFQUF3Qjs7QUFDeEMsTUFBTSxZQUFZO0FBQ2hCLFdBQU87QUFDTDtBQURLO0FBRFMsR0FBbEI7QUFNQSxTQUFPLGtDQUNMLFFBREssRUFFTCxTQUZLLENBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDs7QUFFQSxJQUFNO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsQ0FBTjs7a0JBZ0JlLGdCQUEyQjtBQUFBLE1BQXhCLEVBQXdCLFFBQXhCLEVBQXdCOztBQUN4QyxNQUFNLFlBQVk7QUFDaEIsV0FBTztBQUNMO0FBREs7QUFEUyxHQUFsQjtBQU1BLFNBQU8sa0NBQ0wsUUFESyxFQUVMLFNBRkssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNLFVBQVUsZ0NBQU8sV0FBUCxDQUFWO0FBQUE7QUFBQSw0RUFBTjtBQVFBLElBQU0sYUFBYSxnQ0FBTyx5QkFBUCxDQUFiO0FBQUE7QUFBQSxvQkFBTjtBQXdCQSxJQUFNLG9CQUFvQixvQ0FBcUIsQ0FBQyxVQUFELENBQXJCLENBQTFCO0FBRUEsSUFBTSxPQUFPLFNBQVAsSUFBTztBQUFBLFFBQ1gsVUFEVyxRQUNYLFVBRFc7QUFBQSxRQUVYLElBRlcsUUFFWCxJQUZXO0FBQUEsUUFHWCxhQUhXLFFBR1gsYUFIVztBQUFBLFFBSVgsUUFKVyxRQUlYLFFBSlc7QUFBQSxRQUtYLFlBTFcsUUFLWCxZQUxXO0FBQUEsUUFNWCxVQU5XLFFBTVgsVUFOVztBQUFBLFFBT1gsd0JBUFcsUUFPWCx3QkFQVztBQUFBLFdBU1gsOEJBQUMsT0FBRCxFQUFRLElBQVIsRUFDRyxnQkFDQyx3Q0FBTSxVQUFVLGFBQWEsUUFBYixDQUFoQixFQUF3QyxRQUFPLEVBQS9DLElBQ0UsOEJBQUMsZ0JBQUQsRUFBTSxFQUNKLFdBQVcsb0JBRFAsRUFFSixNQUFLLFVBRkQsRUFHSixVQUFVLGlCQUhOLEVBQU4sQ0FERixFQU1FLDhCQUFDLFdBQUQsRUFBSSxFQUFDLElBQUksRUFBTCxFQUFKLEVBQ0UsOEJBQUMsZ0JBQUQsRUFBTyxFQUFDLElBQUksRUFBTCxFQUFQLEVBQWMsTUFBZCxDQURGLEVBRUUsOEJBQUMsZ0JBQUQsRUFBTyxFQUFDLE1BQUssUUFBTixFQUFlLFNBQVMsVUFBeEIsRUFBUCxFQUF5QyxRQUF6QyxDQUZGLENBTkYsQ0FERCxHQWFHLDhCQUFDLFdBQUQsRUFBSSxFQUFDLElBQUcsT0FBSixFQUFZLElBQUcsS0FBZixFQUFxQixJQUFHLEtBQXhCLEVBQUosRUFDRSw4QkFBQyxZQUFELEVBQUssRUFBQyxZQUFXLFFBQVosRUFBTCxFQUNFLDhCQUFDLFlBQUQsRUFBSyxJQUFMLEVBQU8sSUFBUCxDQURGLEVBRUUsOEJBQUMsVUFBRCxFQUFXLEVBQUMsSUFBRyxNQUFKLEVBQVcsU0FBUyxVQUFwQixFQUFYLEVBQ0UsOEJBQUMsZ0JBQUQsRUFBTyxJQUFQLENBREYsQ0FGRixFQUtFLDhCQUFDLDRCQUFELEVBQWdCLEVBQUMsWUFBVSxJQUFYLEVBQVkscUJBQW1CLElBQS9CLEVBQWhCLEVBQ0M7QUFBQSxZQUFHLFVBQUgsU0FBRyxVQUFIO0FBQUEsWUFBZSxXQUFmLFNBQWUsV0FBZjtBQUFBLFlBQTRCLE1BQTVCLFNBQTRCLE1BQTVCO0FBQUEsZUFDRyw4QkFBQyxnQkFBTSxRQUFQLEVBQWUsSUFBZixFQUNFLDhCQUFDLFVBQUQsRUFBVyxFQUFDLFNBQVMsVUFBVixFQUFYLEVBQ0UsOEJBQUMsZUFBRCxFQUFNLElBQU4sQ0FERixDQURGLEVBSUcsT0FDQyw4QkFBQyxhQUFELEVBQU0sRUFBQyxLQUFJLEtBQUwsRUFBTixFQUNFLHdDQUFNLFVBQVUsYUFBYSxVQUFiLENBQWhCLEVBQTBDLFFBQU8sRUFBakQsSUFDRSw4QkFBQyxnQkFBRCxFQUFNLEVBQ0osV0FBVyxvQkFEUCxFQUVKLE1BQUsscUJBRkQsRUFHSixzQ0FBb0MsSUFBcEMsaUJBSEksRUFJSixJQUFJLEVBSkEsRUFBTixDQURGLEVBT0UsOEJBQUMsZ0JBQUQsRUFBTyxFQUFDLElBQUksRUFBTCxFQUFTLFVBQVUsNkJBQTZCLElBQWhELEVBQVAsRUFBMkQsUUFBM0QsQ0FQRixFQVFFLDhCQUFDLGdCQUFELEVBQU8sRUFBQyxNQUFLLFFBQU4sRUFBZSxTQUFTLFdBQXhCLEVBQVAsRUFBMEMsUUFBMUMsQ0FSRixDQURGLENBREQsQ0FKSCxDQURIO0FBQUEsS0FERCxDQUxGLENBREYsQ0FkTixDQVRXO0FBQUEsQ0FBYjtrQkEwRGUsSTs7Ozs7Ozs7Ozs7O0FDdkdmOzs7OztBQUtBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7O0FBVUEsSUFBTUEsS0FBSSxxQkFBSixHQUE2QixZQUFVO0FBQzdDLE1BQUlDLEtBQUssQ0FDUDtBQUNFLFlBQVEsYUFEVjtBQUVFLGFBQVMsSUFGWDtBQUdFLFlBQVEsZUFIVjtBQUlFLGtCQUFjLElBSmhCO0FBS0UsWUFBUSxJQUxWO0FBTUUsb0JBQWdCLGNBTmxCO0FBT0UsY0FBVSxJQVBaO0FBUUUsa0JBQWMsQ0FDWjtBQUNFLGNBQVEsYUFEVjtBQUVFLGVBQVMsSUFGWDtBQUdFLGNBQVEsSUFIVjtBQUlFLGNBQVEsSUFKVjtBQUtFLG9CQUFjO0FBTGhCLEtBRFksRUFRWjtBQUNFLGNBQVEsYUFEVjtBQUVFLGVBQVMsSUFGWDtBQUdFLGNBQVEsTUFIVjtBQUlFLGNBQVEsSUFKVjtBQUtFLG9CQUFjO0FBTGhCLEtBUlksRUFlWjtBQUNFLGNBQVEsYUFEVjtBQUVFLGVBQVMsSUFGWDtBQUdFLGNBQVEsV0FIVjtBQUlFLGNBQVEsSUFKVjtBQUtFLG9CQUFjO0FBTGhCLEtBZlk7QUFSaEIsR0FETyxDQUFUO0FBa0NBLFNBQU87QUFDTCxZQUFRLFNBREg7QUFFTCxxQkFBaUIsT0FGWjtBQUdMLFlBQVEsNkJBSEg7QUFJTCxVQUFNLElBSkQ7QUFLTCxZQUFRLG1HQUxIO0FBTUwsZ0JBQVksRUFOUDtBQU9MLGdCQUFZO0FBQ1YsY0FBUSxVQURFO0FBRVYsY0FBUSw2QkFGRTtBQUdWLGNBQVEsT0FIRTtBQUlWLGtCQUFZLElBSkY7QUFLViw2QkFBdUIsRUFMYjtBQU1WLG9CQUFjQTtBQU5KLEtBUFA7QUFlTCxpQkFBYTtBQUNYLGNBQVEsV0FERztBQUVYLGNBQVEsNkJBRkc7QUFHWCw2QkFBdUIsRUFIWjtBQUlYLG9CQUFjQTtBQUpIO0FBZlIsR0FBUDtBQXNCQyxDQXpEaUMsRUFBbEM7QUEwREE7QUFDQ0QsSUFBRCxDQUFLLFNBQUwsQ0FBZ0JLLElBQWhCLEdBQXVCLGtDQUF2QjtBQUNBQyxPQUFPQyxPQUFQLEdBQWlCUCxJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBUUEsSUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0I7QUFBQSxRQUNwQixhQURvQixRQUNwQixhQURvQjtBQUFBLFFBRXBCLEtBRm9CLFFBRXBCLEtBRm9CO0FBQUEsV0FJcEIsMkNBQ0UsOEJBQUMsWUFBRCxFQUFLLEVBQUMsSUFBSSxFQUFMLEVBQUwsRUFBWSx3QkFBWixDQURGLEVBS0UsOEJBQUMsZ0JBQUQsRUFBSyxFQUFDLFVBQVMsTUFBVixFQUFMLEVBQ0csY0FBYyxHQUFkLENBQWtCLFVBQUMsWUFBRDtBQUFBLGVBQ2YsOEJBQUMsV0FBRCxFQUFLLEVBQ0gsS0FBSyxhQUFhLEVBRGYsRUFFSCxJQUFPLE1BQU0sUUFBTixDQUFlLFFBQXRCLHNCQUErQyxhQUFhLEVBQTVELHVCQUZHLEVBQUwsRUFJRSw4QkFBQyxrQkFBRCxFQUFXLEVBQ1QsR0FBRyxVQURNLEVBQVgsRUFHRSw4QkFBQyx1QkFBRCxFQUFnQixFQUFDLE9BQU8sR0FBUixFQUFhLEtBQUssYUFBYSxTQUEvQixFQUEwQyxPQUFPLENBQWpELEVBQWhCLENBSEYsRUFJRSw4QkFBQyxlQUFELEVBQVEsRUFBQyxXQUFVLFFBQVgsRUFBb0IsSUFBSSxrQkFBeEIsRUFBUixFQUE2QyxhQUFhLElBQTFELENBSkYsQ0FKRixDQURlO0FBQUEsS0FBbEIsQ0FESCxDQUxGLENBSm9CO0FBQUEsQ0FBdEI7a0JBMkJlLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2Y7Ozs7QUFDQTs7QUFHQTs7Ozs7O0FBRUEsSUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLENBQU47QUFVTyxJQUFNLG9DQUFjO0FBQ3pCLGVBQVcsdUJBRGM7QUFFekIsZ0JBRnlCO0FBR3pCLFlBQVEsZ0JBQUMsS0FBRCxFQUFrQjtBQUN4QixZQUFJLE1BQU0sS0FBVixFQUFpQjtBQUNmLGdCQUFJLE1BQU0sS0FBTixDQUFZLGFBQVosQ0FBMEIsTUFBMUIsS0FBcUMsQ0FBekMsRUFBNEM7QUFDMUMsc0JBQU0sSUFBSSx3QkFBSixDQUNELE1BQU0sS0FBTixDQUFZLFFBQVosQ0FBcUIsUUFEcEIsc0JBQzZDLE1BQU0sS0FBTixDQUFZLGFBQVosQ0FBMEIsQ0FBMUIsRUFBNkIsRUFEMUUsd0JBQU47QUFHRDtBQUVELG1CQUFPLDhCQUFDLHVCQUFELEVBQWMsMEJBQUssTUFBTSxLQUFYLENBQWQsQ0FBUDtBQUNEO0FBQ0QsZUFBTyxJQUFQO0FBQ0Q7QUFkd0IsQ0FBcEI7a0JBaUJRLHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNmOzs7O0FBQ0E7Ozs7SUFPQSwwQjs7Ozs7Ozs7Ozs7QUFDRTtBQUNBO0FBQ0E7aUNBQ2E7QUFDWCxtQkFDRSxLQUFLLEtBQUwsQ0FBVyxRQURiO0FBR0Q7OztFQVJzQyxnQkFBTSxTOztrQkFXaEMsd0JBQ2IsaUJBRGEsRUFFYiwwQkFGYSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmY7Ozs7OztBQVFPLElBQU0sa0NBQWEsZ0NBQU8sWUFBUCxDQUFiO0FBQUE7QUFBQSw0QkFHVDtBQUFBLE1BQUcsUUFBSCxRQUFHLFFBQUg7QUFBQSxNQUFhLEtBQWIsUUFBYSxLQUFiO0FBQUEsU0FBc0MscUVBQ1UsTUFBTSxNQUFOLENBQWEsT0FEdkIsVUFBdEM7QUFBQSxDQUhTLENBQU47QUFRQSxJQUFNLGtDQUFhLEVBQW5CO0FBQ0EsSUFBTSxrQ0FBYSxDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCUDs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLFNBQVMsZ0NBQU8sVUFBQyxFQUFELEVBQW1DO0FBQWxDLFFBQUUsUUFBRixHQUFVLEVBQVYsQ0FBRSxRQUFGO0FBQUEsUUFBWSxLQUFaLEdBQVksd0JBQVo7QUFDckIseUNBQUMsY0FBRCxFQUFhLHdCQUFDLElBQUksU0FBUyxNQUFULENBQWdCLE9BQXJCLElBQWtDLEtBQWxDLENBQWI7QUFBd0QsQ0FEM0MsQ0FBVDtBQUFBO0FBQUEsNkZBQU47a0JBYWUsb0JBQ2IsMkJBRGEsRUFFYiwyQkFBVyxPQUFYLEVBQW9CLFVBQXBCLENBRmEsRUFHYixNQUhhLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmYsSUFBTSx1QkFBdUI7QUFDM0IsV0FBTyxpREFEb0I7QUFFM0IsY0FBVTtBQUZpQixDQUE3QjtBQUtBLElBQU0sUUFBZTtBQUNuQixXQUFPLFlBRFk7QUFFbkIsY0FBVSxrQkFBQyxLQUFEO0FBQUEsZUFDUixVQUFVLFNBQVYsSUFDQSxVQUFVLElBRFYsS0FFQyxPQUFPLEtBQVAsS0FBaUIsU0FBakIsSUFBOEIsVUFBVSxJQUZ6QyxNQUdDLE9BQU8sS0FBUCxLQUFpQixRQUFqQixJQUE2QixNQUFNLE1BQU4sR0FBZSxDQUg3QyxNQUlDLENBQUMsTUFBTSxPQUFOLENBQWMsS0FBZCxDQUFELElBQXlCLE1BQU0sTUFBTixHQUFlLENBSnpDLE1BS0MsUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBakIsSUFBNkIsb0JBQVksS0FBWixFQUFtQixNQUFuQixHQUE0QixDQUwxRCxDQURRO0FBQUE7QUFGUyxDQUFyQjtBQXVCQSxJQUFNLGFBQWEsU0FBYixVQUFhLENBQUMsSUFBRCxFQUE0RTtBQUFBLFFBQXZELFlBQXVELHVFQUF4QyxxQkFBcUIsSUFBckIsQ0FBd0M7O0FBQzdGLFFBQU0sT0FBTyxNQUFNLElBQU4sQ0FBYjtBQUVBLFFBQUksQ0FBQyxJQUFMLEVBQVc7QUFDVCxjQUFNLElBQUksS0FBSix5QkFBK0IsSUFBL0IsZ0JBQU47QUFDRDtBQUVELFFBQU0sT0FBTyxPQUFPLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkIsSUFBN0IsR0FBb0MsVUFBQyxLQUFEO0FBQUEsZUFBZ0IsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFoQjtBQUFBLEtBQWpEO0FBRUEsV0FBTyxFQUFFLFVBQUYsRUFBUSxVQUFSLEVBQWMsMEJBQWQsRUFBUDtBQUNELENBVkQ7QUFZQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLFFBQUQsRUFBdUIsS0FBdkIsRUFBcUM7QUFDMUQsUUFBTSxpQkFBaUIsU0FBUyxJQUFULENBQWMsVUFBQyxPQUFEO0FBQUEsZUFBYSxDQUFDLFFBQVEsSUFBUixDQUFhLEtBQWIsQ0FBZDtBQUFBLEtBQWQsQ0FBdkI7QUFFQSxRQUFJLENBQUMsY0FBTCxFQUFxQjtBQUNuQixlQUFPLFNBQVA7QUFDRDtBQUVELFdBQU8sZUFBZSxZQUFmLElBQStCLElBQXRDO0FBQ0QsQ0FSRDs7a0JBY2U7QUFBQSxRQUFDLFdBQUQsdUVBQTJCLEVBQTNCO0FBQUEsV0FBa0MsVUFBQyxLQUFELEVBQWU7QUFDOUQsWUFBSSxXQUF1QixFQUEzQjtBQUVBLG9CQUFZLE9BQVosQ0FBb0IsVUFBQyxVQUFELEVBQWU7QUFDakMsZ0JBQUksY0FBYyxPQUFPLFVBQVAsS0FBc0IsUUFBeEMsRUFBa0Q7QUFDaEQsb0JBQU0scUJBQXFCLFdBQVcsVUFBWCxDQUEzQjtBQUVBLDJCQUFXLFNBQVMsTUFBVCxDQUFnQixrQkFBaEIsQ0FBWDtBQUNELGFBSkQsTUFJTyxJQUFJLGNBQWMsUUFBTyxVQUFQLHVEQUFPLFVBQVAsT0FBc0IsUUFBeEMsRUFBa0Q7QUFDdkQsb0JBQU0sc0JBQXFCLG9CQUFZLFVBQVosRUFBd0IsR0FBeEIsQ0FDekIsVUFBQyxRQUFEO0FBQUEsMkJBQTRCLFdBQVcsUUFBWCxFQUFxQixXQUFXLFFBQVgsQ0FBckIsQ0FBNUI7QUFBQSxpQkFEeUIsQ0FBM0I7QUFJQSwyQkFBVyxTQUFTLE1BQVQsQ0FBZ0IsbUJBQWhCLENBQVg7QUFDRCxhQU5NLE1BTUE7QUFDTCxzQkFBTSxJQUFJLEtBQUosQ0FBVSxxRkFBVixDQUFOO0FBQ0Q7QUFDRixTQWREO0FBZ0JBLGVBQU8sZUFBZSxRQUFmLEVBQXlCLEtBQXpCLENBQVA7QUFDRCxLQXBCYztBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERmOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFXQSxJQUFNLGFBQWEsU0FBYixVQUFhLENBQUMsRUFBRCxFQUtOO0FBQUEsUUFKWCxLQUlXLEdBRlAsRUFFTyxDQUpYLEtBSVc7QUFBQSxRQUhYLElBR1csR0FGUCxFQUVPLENBSFgsSUFHVztBQUFBLFFBRlgsSUFFVyxHQUZQLEVBRU8sQ0FGWCxJQUVXO0FBQUEsUUFEWCxLQUNXLEdBRFgscUNBQ1c7O0FBQUMsV0FDWiw4QkFBQyxhQUFELEVBQU0sMEJBQ0EsS0FEQSxFQUVBLEtBRkEsRUFFSyxFQUNULE1BQU0sSUFERyxFQUZMLENBQU4sQ0FEWTtBQU1iLENBWEQ7a0JBYWUsVTs7Ozs7Ozs7Ozs7Ozs7QUN6QmYsSUFBTSxRQUFTLE9BQWUsS0FBOUI7QUFFQSxJQUFJLE9BQU8sS0FBUCxLQUFpQixXQUFqQixJQUFnQyw0REFBcEMsRUFBbUU7QUFDakUsVUFBTSxNQUFOLENBQWEsNERBQWIsRUFBNEM7QUFDMUMscUJBQWEsYUFBWTtBQURpQixLQUE1QyxFQUVHLE9BRkg7QUFHRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNOYztBQUNiLFdBQU87QUFDTCxjQUFNO0FBREQsS0FETTtBQUliLGlCQUFhLENBQ1gsR0FEVyxFQUVYLEdBRlcsRUFHWCxJQUhXLENBSkE7QUFTYixpQkFBYTtBQUNYLGdCQUFRLEdBREc7QUFFWCxjQUFNO0FBRkssS0FUQTtBQWFiLFlBQVE7QUFDTixrQkFBVSxTQURKO0FBRU4sZUFBTyxTQUZEO0FBR04sY0FBTSxTQUhBO0FBSU4sbUJBQVcsU0FKTDtBQUtOLGlCQUFTLFNBTEg7QUFNTixrQkFBVSxTQU5KO0FBT04sbUJBQVc7QUFQTDtBQWJLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDZjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTSxXQUFXLElBQUksb0JBQUosQ0FBYSxxQkFBYixDQUFqQjtBQUVBLElBQU0sTUFBTSxTQUFOLEdBQU07QUFBQSxXQUNWLDhCQUFDLG9CQUFELEVBQVMsRUFBQyxPQUFPLGVBQVIsRUFBVCxFQUNFLDhCQUFDLGdCQUFELEVBQWUsRUFDYixPQUFPLGVBRE0sRUFBZixFQUdFLDhCQUFDLGdCQUFELEVBQU8sRUFBQyxjQUFjLEVBQUUsc0JBQUYsRUFBZixFQUEwQixVQUFVLFFBQXBDLEVBQVAsQ0FIRixDQURGLENBRFU7QUFBQSxDQUFaO2tCQVVlLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZjs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNLE1BQU0sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFFQSxJQUFJLFlBQUosQ0FBaUIsSUFBakIsRUFBdUIsV0FBdkI7QUFFQSxTQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLEdBQTFCO0FBRUEsbUJBQVMsTUFBVCxDQUFnQiw4QkFBQyxhQUFELEVBQUksSUFBSixDQUFoQixFQUF5QixHQUF6QjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7O0FBRUEsSUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLFNBQUQsRUFBOEIsU0FBOUI7QUFBQSxXQUNqQixNQUFTLHlCQUFULGVBQXdDO0FBQ3RDLGNBQU0seUJBQWU7QUFDbkIsbUJBQU8sVUFBVSxJQURFO0FBRW5CO0FBRm1CLFNBQWYsQ0FEZ0M7QUFLdEMsaUJBQVM7QUFDUCxzQkFBVSxrQkFESDtBQUVQLDRCQUFnQjtBQUZULFNBTDZCO0FBU3RDLGdCQUFRO0FBVDhCLEtBQXhDLEVBVUcsSUFWSCxDQVVRLFVBQUMsUUFBRDtBQUFBLGVBQWMsU0FBUyxJQUFULEVBQWQ7QUFBQSxLQVZSLEVBV0csSUFYSCxDQVdRLFVBQUMsSUFBRCxFQUFTO0FBQ2I7QUFDQSxZQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNmLG1CQUFPLGtCQUFRLE1BQVIsQ0FBZSxLQUFLLE1BQXBCLENBQVA7QUFDRDtBQUVELGVBQU8sa0JBQVEsT0FBUixDQUFnQixJQUFoQixDQUFQO0FBQ0QsS0FsQkgsQ0FEaUI7QUFBQSxDQUFuQjtBQXFCQSxJQUFNLFVBQVUsc0JBQVEsTUFBUixDQUFlLFVBQWYsQ0FBaEI7QUFDQSxJQUFNLFNBQVMsSUFBSSwwQkFBSixFQUFmO0FBQ0EsSUFBTSxRQUFRLElBQUksbUJBQUosQ0FBVSxNQUFWLENBQWQ7QUFDQSxJQUFNLGNBQWMsSUFBSSx5QkFBSixDQUFnQjtBQUNsQyxvQkFEa0M7QUFFbEM7QUFGa0MsQ0FBaEIsQ0FBcEI7QUFLQSxpQ0FBYyxXQUFkO2tCQUVlLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2Y7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7a0JBRWUsNEJBQ2IsOEJBQUMsWUFBRCxFQUFNLHdCQUFDLE1BQUssR0FBTixJQUFjLG1DQUFkLENBQU4sRUFDRSw4QkFBQyxZQUFELEVBQU0sd0JBQUMsTUFBSyxZQUFOLElBQXVCLCtCQUF2QixDQUFOLEVBQ0UsOEJBQUMsWUFBRCxFQUFNLDBCQUFLLG1DQUFMLENBQU4sQ0FERixFQUVFLDhCQUFDLFlBQUQsRUFBTSx3QkFBQyxNQUFLLG9DQUFOLElBQStDLHVDQUEvQyxDQUFOLENBRkYsQ0FERixDQURhLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmY7Ozs7OztrQkFRZSxrQ0FBc0I7QUFDbkMsWUFBUSx5QkFBYTtBQUNuQixxQkFBYTtBQUFBLGdCQUFHLEtBQUgsUUFBRyxLQUFIO0FBQUEsbUJBQ1gsMkNBQ0csTUFBTSxNQUFOLEtBQWlCLEdBQWpCLEdBQXVCLFdBQXZCLEdBQXFDLE9BRHhDLENBRFc7QUFBQTtBQURNLEtBQWI7QUFEMkIsQ0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxrQkFBa0Isa0NBQXNCO0FBQzVDLGlCQUFhLENBQUMsc0JBQUQsQ0FEK0I7QUFFNUMsY0FBVSxJQUFJLG1CQUFKO0FBRmtDLENBQXRCLENBQXhCO0FBS0EsSUFBTSxVQUFVLElBQUksY0FBSixDQUFZLHFCQUFaLENBQWhCO0FBQ0EsSUFBTSxrQkFBa0IsZ0NBQW9CLE9BQXBCLENBQXhCO0FBQ0EsSUFBTSxtQkFBb0IsT0FBZSxNQUFmLENBQXNCLG9DQUF0QixJQUE4RCxjQUF4RjtBQUVBLElBQU0sYUFBYSxpQkFDakIsZUFEaUIsRUFFakIsZUFGaUIsQ0FBbkI7QUFLQSxJQUFNLFdBQVcsNEJBQWdCO0FBQy9CLDRCQUQrQjtBQUUvQjtBQUYrQixDQUFoQixDQUFqQjtBQUtBLElBQU0sUUFBUSx3QkFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLFVBQTFCLENBQWQ7QUFFQSxNQUFNLFFBQU4sQ0FBZSxlQUFhLElBQWIsRUFBZjtrQkFFZSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmOzs7Ozs7QUFNQSxJQUFNLFlBQVksU0FBWixTQUFZO0FBQUEsTUFDaEIsUUFEZ0IsUUFDaEIsUUFEZ0I7QUFBQSxTQUdoQiw4QkFBQyx3QkFBRCxFQUFlLEVBQUMsTUFBTSxTQUFTLHNCQUFULENBQWdDLG9CQUFoQyxFQUFzRCxDQUF0RCxDQUFQLEVBQWYsRUFDRyxRQURILENBSGdCO0FBQUEsQ0FBbEI7a0JBUWUsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JSLElBQU0sb0NBQWM7QUFDekIsZUFBVztBQURjLENBQXBCO2tCQUlRLG1COzs7Ozs7Ozs7Ozs7QUNOZjs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7QUFZQSxJQUFNQSxLQUFJLHFCQUFKLEdBQTZCLFlBQVU7QUFDN0MsTUFBSUMsS0FBSyxDQUNQO0FBQ0UsWUFBUSxlQURWO0FBRUUsWUFBUSxhQUZWO0FBR0UsWUFBUSxRQUhWO0FBSUUsb0JBQWdCO0FBSmxCLEdBRE8sQ0FBVDtBQVFBLFNBQU87QUFDTCxZQUFRLFNBREg7QUFFTCxxQkFBaUIsT0FGWjtBQUdMLFlBQVEsNkJBSEg7QUFJTCxVQUFNLElBSkQ7QUFLTCxZQUFRLDRMQUxIO0FBTUwsZ0JBQVksRUFOUDtBQU9MLGdCQUFZO0FBQ1YsY0FBUSxVQURFO0FBRVYsY0FBUSw2QkFGRTtBQUdWLGNBQVEsT0FIRTtBQUlWLGtCQUFZLElBSkY7QUFLViw2QkFBdUJBLEVBTGI7QUFNVixvQkFBYyxDQUNaO0FBQ0UsZ0JBQVEsZ0JBRFY7QUFFRSxnQkFBUSwwQkFGVjtBQUdFLGdCQUFRO0FBSFYsT0FEWTtBQU5KLEtBUFA7QUFxQkwsaUJBQWE7QUFDWCxjQUFRLFdBREc7QUFFWCxjQUFRLDZCQUZHO0FBR1gsNkJBQXVCQSxFQUhaO0FBSVgsb0JBQWMsQ0FDWjtBQUNFLGdCQUFRLGFBRFY7QUFFRSxpQkFBUyxJQUZYO0FBR0UsZ0JBQVEsT0FIVjtBQUlFLGdCQUFRLENBQ047QUFDRSxrQkFBUSxVQURWO0FBRUUsa0JBQVEsYUFGVjtBQUdFLDBCQUFnQixhQUhsQjtBQUlFLGtCQUFRO0FBSlYsU0FETSxDQUpWO0FBWUUsc0JBQWM7QUFaaEIsT0FEWTtBQUpIO0FBckJSLEdBQVA7QUEyQ0MsQ0FwRGlDLEVBQWxDO0FBcURBO0FBQ0NELElBQUQsQ0FBSyxTQUFMLENBQWdCSyxJQUFoQixHQUF1QixrQ0FBdkI7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQlAsSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQU9BLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsRUFBRCxFQUlUO0FBQUEsUUFIWCxRQUdXLEdBRk4sRUFFTSxDQUhYLFFBR1c7QUFBQSxRQUZYLEtBRVcsR0FGTixFQUVNLENBRlgsS0FFVztBQUFBLFFBRFgsS0FDVyxHQURYLGlDQUNXOztBQUFDLFdBQ1osOEJBQUMsb0NBQUQsRUFBMkIsSUFBM0IsRUFDRSw4QkFBQyxZQUFELEVBQUssRUFBQyxPQUFPLE1BQU0sTUFBTixDQUFhLElBQXJCLEVBQUwsRUFDRSw4QkFBQywwQkFBRCxFQUFRLEVBQUMsU0FBUyxLQUFWLEVBQVIsQ0FERixFQUVHLFFBRkgsQ0FERixDQURZO0FBT2IsQ0FYRDtrQkFhZSxpQ0FBVSxhQUFWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBRUEsSUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLENBQU47QUFRQSxJQUFNLHlCQUF5Qix1QkFBL0I7QUFFTyxJQUFNLG9DQUFjO0FBQ3pCLG9CQUFrQjtBQUFBLFdBQU87QUFDdkIsd0JBQWdCLFNBQVMsTUFBekIsR0FBa0MsU0FBUyxRQUEzQztBQUR1QixLQUFQO0FBQUEsR0FETztBQUl6QixjQUp5QjtBQUt6QixhQUFXO0FBTGMsQ0FBcEI7a0JBUVEsc0I7Ozs7Ozs7Ozs7Ozs7O0FDakJmOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBV0EsSUFBTUEsS0FBSSxzQkFBSixHQUE2QjtBQUNqQyxVQUFRLFVBRHlCO0FBRWpDLFVBQVEsMEJBRnlCO0FBR2pDLFVBQVEsT0FIeUI7QUFJakMsY0FBWSxJQUpxQjtBQUtqQyx5QkFBdUIsQ0FDckI7QUFDRSxZQUFRLGNBRFY7QUFFRSxZQUFRLGFBRlY7QUFHRSxZQUFRO0FBSFYsR0FEcUIsQ0FMVTtBQVlqQyxnQkFBYyxDQUNaO0FBQ0UsWUFBUSxhQURWO0FBRUUsYUFBUyxJQUZYO0FBR0UsWUFBUSxPQUhWO0FBSUUsWUFBUSxDQUNOO0FBQ0UsY0FBUSxVQURWO0FBRUUsY0FBUSxhQUZWO0FBR0Usc0JBQWdCLGFBSGxCO0FBSUUsY0FBUTtBQUpWLEtBRE0sQ0FKVjtBQVlFLGtCQUFjO0FBWmhCLEdBRFk7QUFabUIsQ0FBbkM7QUE2QkE7QUFDQ0EsSUFBRCxDQUFLLFNBQUwsQ0FBZ0JLLElBQWhCLEdBQXVCLGtDQUF2QjtBQUNBQyxPQUFPQyxPQUFQLEdBQWlCUCxJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBa0JBLElBQU0sU0FBUyxnQ0FBTyxXQUFQLENBQVQ7QUFBQTtBQUFBLGFBQ0YsVUFBQyxLQUFEO0FBQUEsV0FBeUIsTUFBTSxRQUFOLHdEQUVQLE1BQU0sS0FBTixDQUFZLE1BQVosQ0FBbUIsT0FGWiw0Q0FBekI7QUFBQSxDQURFLENBQU47QUFRQSxJQUFNLEtBQUssb0JBQVg7O0lBRUEsTzs7O0FBQ0UscUJBQVksS0FBWixFQUFrQyxRQUFsQyxFQUE0RDtBQUFBOztBQUFBLDRJQUNwRCxLQURvRDs7QUFBMUI7QUFHaEMsY0FBSyxLQUFMLEdBQWE7QUFDWCxzQkFBVTtBQURDLFNBQWI7QUFIMEQ7QUFNM0Q7Ozs7b0RBQ3dCO0FBQ3ZCLGdCQUFJLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsUUFBakIsQ0FBMEIsUUFBMUIsQ0FBbUMsUUFBbkMsQ0FBNEMsWUFBNUMsQ0FBSixFQUErRDtBQUM3RCxvQkFBTSxlQUFlLFNBQVMsYUFBVCxzQ0FBMEQsRUFBMUQsU0FBckI7QUFFQSxvQkFBSSxZQUFKLEVBQWtCO0FBQ2hCLGlDQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsVUFBOUI7QUFDRDtBQUVELHFCQUFLLFFBQUwsQ0FBYyxFQUFFLFVBQVUsSUFBWixFQUFkO0FBQ0QsYUFSRCxNQVFPO0FBQ0wscUJBQUssUUFBTCxDQUFjLEVBQUUsVUFBVSxLQUFaLEVBQWQ7QUFDRDtBQUNGOzs7aUNBQ0s7QUFDSixtQkFDRSw4QkFBQyxtQkFBRCxFQUFPLEVBQUMsTUFBTSxTQUFTLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLENBQVAsRUFBUCxFQUNFLDhCQUFDLE1BQUQsRUFBTyxFQUNMLElBQUksS0FBSyxLQUFMLENBQVcsRUFEVixFQUVMLElBQUcsWUFGRSxFQUdMLFdBQVcsMEJBQVcsY0FBWCxFQUEyQixLQUFLLEtBQUwsQ0FBVyxRQUFYLElBQXVCLFVBQWxELENBSE4sRUFJTCxVQUFVLEtBQUssS0FBTCxDQUFXLFFBSmhCLEVBS0wsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUxmLEVBQVAsRUFLNkIsV0FMN0IsQ0FERixDQURGO0FBYUQ7OztFQW5DbUIsZ0JBQU0sUzs7a0JBc0NiLHVCQUFXLE9BQVgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFZjs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFOO0FBWUEsSUFBTSxtQkFBbUIsd0JBQ3ZCLDRCQUFTLFNBQVQsQ0FEdUIsRUFFdkIsNEJBQVksU0FBWixDQUZ1QixFQUd2Qix1QkFDRSxVQUFDLEtBQUQ7QUFBQSxTQUFtQixDQUFDLENBQUMsTUFBTSxLQUEzQjtBQUFBLENBREYsRUFFRSxnQ0FBZ0Isc0JBQWhCLENBRkYsQ0FIdUIsRUFPdEIsaUJBUHNCLENBQXpCO2tCQVNlLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNmOzs7O0FBRUEsSUFBTSxLQUFLLG9CQUFYO0FBTUEsSUFBTSxlQUFlLFNBQWYsWUFBZTtBQUFBLFFBQ25CLEtBRG1CLFFBQ25CLEtBRG1CO0FBQUEsV0FHbkIsOEJBQUMsbUJBQUQsRUFBTyxFQUFDLE1BQU0sU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxFQUEyQyxDQUEzQyxDQUFQLEVBQVAsRUFDRSxxQ0FDRSxJQUFJLEVBRE4sRUFFRSxNQUFNLEtBRlIsRUFHRSxXQUFVLGNBSFosSUFHMEIsV0FIMUIsQ0FERixDQUhtQjtBQUFBLENBQXJCO2tCQWNlLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmY7Ozs7OztJQUVBLGM7Ozs7Ozs7Ozs7NkNBQ29CO0FBQ2hCLGdCQUFJLEtBQUssS0FBTCxDQUFXLElBQWYsRUFBcUI7QUFDbkIscUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsU0FBaEIsR0FBNEIsRUFBNUI7QUFDRDtBQUNGOzs7aUNBQ0s7QUFDSixtQkFDRSw4QkFBQyxtQkFBRCxFQUFPLEVBQUMsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFsQixFQUFQLEVBQ0csS0FBSyxLQUFMLENBQVcsUUFEZCxDQURGO0FBS0Q7OztFQVowQixnQkFBTSxTOztrQkFlcEIsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZjs7Ozs7O0FBRkEsU0FBU1Esd0JBQVQsQ0FBa0NDLEdBQWxDLEVBQXVDQyxJQUF2QyxFQUE2QztBQUFFLE1BQUlDLFNBQVMsRUFBYixDQUFpQixLQUFLLElBQUlDLENBQVQsSUFBY0gsR0FBZCxFQUFtQjtBQUFFLFFBQUlDLEtBQUtHLE9BQUwsQ0FBYUQsQ0FBYixLQUFtQixDQUF2QixFQUEwQixTQUFVLElBQUksQ0FBQ0UsT0FBT0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixHQUFyQyxFQUEwQ0csQ0FBMUMsQ0FBTCxFQUFtRCxTQUFVRCxPQUFPQyxDQUFQLElBQVlILElBQUlHLENBQUosQ0FBWjtBQUFxQixHQUFDLE9BQU9ELE1BQVA7QUFBZ0I7O2tCQUc1TSxVQUFDTyxJQUFELEVBQVU7QUFBQSxvQkFHcEJBLElBSG9CLENBRXRCQyxNQUZzQjtBQUFBLE1BRXRCQSxNQUZzQiwrQkFFYixFQUZhO0FBQUEsTUFJcEJDLEtBSm9CLEdBSVpaLHlCQUF5QlUsSUFBekIsRUFBK0IsQ0FBQyxRQUFELENBQS9CLENBSlk7O0FBTXhCLFNBQU87QUFBQTtBQUFBLDZCQUFLLE9BQU0sNEJBQVgsRUFBd0MsT0FBTSxJQUE5QyxFQUFtRCxRQUFPLElBQTFELEVBQStELFNBQVEsV0FBdkUsSUFBdUZFLEtBQXZGO0FBQThGO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOUY7QUFBbUgsNENBQU0sR0FBRSwrR0FBUjtBQUFuSCxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEOzs7Ozs7QUFGQSxTQUFTWix3QkFBVCxDQUFrQ0MsR0FBbEMsRUFBdUNDLElBQXZDLEVBQTZDO0FBQUUsTUFBSUMsU0FBUyxFQUFiLENBQWlCLEtBQUssSUFBSUMsQ0FBVCxJQUFjSCxHQUFkLEVBQW1CO0FBQUUsUUFBSUMsS0FBS0csT0FBTCxDQUFhRCxDQUFiLEtBQW1CLENBQXZCLEVBQTBCLFNBQVUsSUFBSSxDQUFDRSxPQUFPQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLEdBQXJDLEVBQTBDRyxDQUExQyxDQUFMLEVBQW1ELFNBQVVELE9BQU9DLENBQVAsSUFBWUgsSUFBSUcsQ0FBSixDQUFaO0FBQXFCLEdBQUMsT0FBT0QsTUFBUDtBQUFnQjs7a0JBRzVNLFVBQUNPLElBQUQsRUFBVTtBQUFBLG9CQUdwQkEsSUFIb0IsQ0FFdEJDLE1BRnNCO0FBQUEsTUFFdEJBLE1BRnNCLCtCQUViLEVBRmE7QUFBQSxNQUlwQkMsS0FKb0IsR0FJWloseUJBQXlCVSxJQUF6QixFQUErQixDQUFDLFFBQUQsQ0FBL0IsQ0FKWTs7QUFNeEIsU0FBTztBQUFBO0FBQUEsNkJBQUssT0FBTSw0QkFBWCxFQUF3QyxPQUFNLElBQTlDLEVBQW1ELFFBQU8sSUFBMUQsRUFBK0QsU0FBUSxXQUF2RSxJQUF1RkUsS0FBdkY7QUFBOEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE5RjtBQUFrSCw0Q0FBTSxHQUFFLHNJQUFSO0FBQWxILEdBQVA7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgU3RlcCwgeyBJRWRpdFN0ZXBJbnB1dCB9IGZyb20gXCIuL3N0ZXBcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZUhhbmRsZXJzLCB3aXRoSGFuZGxlcnMsIGZsYXR0ZW5Qcm9wLCB3aXRoUHJvcHMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZWR1eEZvcm0sIGZvcm1WYWx1ZVNlbGVjdG9yIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCByZW1vdmVTdGVwTXV0YXRpb24gZnJvbSBcIi4vcmVtb3ZlU3RlcE11dGF0aW9uXCI7XG5pbXBvcnQgZWRpdFN0ZXBNdXRhdGlvbiBmcm9tIFwiLi9lZGl0U3RlcE11dGF0aW9uXCI7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XG4gICAgb25ib2FyZGluZ1N0ZXBJZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG9uYm9hcmRpbmdTdGVwSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBmb3JtOiBzdHJpbmc7XG4gIHRvZ2dsZVN0ZXA6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpc0VkaXRpbmdTdGVwOiBib29sZWFuO1xufVxuXG5jb25zdCBzdGF0ZUhhbmRsZXJzID0ge1xuICB0b2dnbGVTdGVwOiAoeyBpc0VkaXRpbmdTdGVwIH06IElTdGF0ZSkgPT4gKCkgPT4gKHtcbiAgICBpc0VkaXRpbmdTdGVwOiAhaXNFZGl0aW5nU3RlcCxcbiAgfSksXG59O1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgcmVtb3ZlU3RlcDogKHsgb25ib2FyZGluZ1N0ZXBJZCB9OiBJUHJvcHMpID0+ICgpID0+XG4gICAgcmVtb3ZlU3RlcE11dGF0aW9uKHsgaWQ6IG9uYm9hcmRpbmdTdGVwSWQgfSksXG4gIGVkaXRTdGVwOiAoeyBvbmJvYXJkaW5nU3RlcElkLCB0b2dnbGVTdGVwIH06IElQcm9wcykgPT4gKGlucHV0OiBJRWRpdFN0ZXBJbnB1dCkgPT4ge1xuICAgIGVkaXRTdGVwTXV0YXRpb24oe1xuICAgICAgaWQ6IG9uYm9hcmRpbmdTdGVwSWQsXG4gICAgICBuYW1lOiBpbnB1dC5zdGVwTmFtZSxcbiAgICB9KSxcbiAgICB0b2dnbGVTdGVwKCk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUHJvcHMoKHsgZm9ybSB9OiBJUHJvcHMpID0+ICh7XG4gICAgc2VsZWN0b3I6IGZvcm1WYWx1ZVNlbGVjdG9yKGZvcm0pLFxuICB9KSksXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4gIGZsYXR0ZW5Qcm9wKFwic3RlcFwiKSxcbiAgd2l0aFN0YXRlSGFuZGxlcnMoe1xuICAgIGlzRWRpdGluZ1N0ZXA6IGZhbHNlLFxuICB9LCBzdGF0ZUhhbmRsZXJzKSxcbiAgd2l0aEhhbmRsZXJzKGhhbmRsZXJzKSxcbiAgd2l0aFByb3BzKCh7IG5hbWUgfTogSVByb3BzKSA9PiAoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIHN0ZXBOYW1lOiBuYW1lLFxuICAgIH0sXG4gIH0pKSxcbiAgcmVkdXhGb3JtKHt9KSxcbiAgY29ubmVjdCgoc3RhdGUsIHsgc2VsZWN0b3IgfTogYW55KSA9PiAoe1xuICAgIHJlbW92aW5nTmFtZUNvbmZpcm1WYWx1ZTogc2VsZWN0b3Ioc3RhdGUsIFwicmVtb3ZpbmdOYW1lQ29uZmlybVwiKSxcbiAgfSkpLFxuKShTdGVwKTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggNGQ3ZTdkZGU2OWFhMjAxZmE3MDI0YjVlNTk5YzU3NDVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCA9IHtcbiAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gIG9yZ2FuaXphdGlvbklkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZyxcbn07XG5leHBvcnQgdHlwZSBhZGRQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzID0ge3xcbiAgaW5wdXQ6IEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0XG58fTtcbmV4cG9ydCB0eXBlIGFkZFBpcGVsaW5lTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICthZGRQaXBlbGluZTogP3t8XG4gICAgK29yZ2FuaXphdGlvbjoge3xcbiAgICAgICskZnJhZ21lbnRSZWZzOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmXG4gICAgfH1cbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgYWRkUGlwZWxpbmVNdXRhdGlvbiA9IHt8XG4gIHZhcmlhYmxlczogYWRkUGlwZWxpbmVNdXRhdGlvblZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IGFkZFBpcGVsaW5lTXV0YXRpb25SZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gYWRkUGlwZWxpbmVNdXRhdGlvbihcbiAgJGlucHV0OiBBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcbikge1xuICBhZGRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XG4gICAgb3JnYW5pemF0aW9uIHtcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cblxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XG4gIG9yZ2FuaXphdGlvbklkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XG4gICAgaWRcbiAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICB9XG59XG5cbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XG4gIGlkXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICBpZFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxuICB9XG59XG5cbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XG4gIG9uYm9hcmRpbmdTdGVwSWRcbiAgbmFtZVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIGFkZFBpcGVsaW5lTXV0YXRpb24oXFxuICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxcbikge1xcbiAgYWRkUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBvcmdhbml6YXRpb24ge1xcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XFxuICBvcmdhbml6YXRpb25JZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XFxuICAgIGlkXFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xcbiAgb25ib2FyZGluZ1N0ZXBJZFxcbiAgbmFtZVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZU11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBZGRPbmJvYXJkaW5nUGlwZWxpbmVQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHYyXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMjBiNjdlNjhjMzk5MjBlODE3NjYzMmU5OTE0M2ZlMzUnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCA2YWEwMDliNDU5NDhjYTgyNzE0MjE2NTViMDg3Y2YwYVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCA9IHtcbiAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gIHBpcGVsaW5lSWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICBkZXNjcmlwdGlvbj86ID9zdHJpbmcsXG59O1xuZXhwb3J0IHR5cGUgYWRkU3RlcE11dGF0aW9uVmFyaWFibGVzID0ge3xcbiAgaW5wdXQ6IEFkZE9uYm9hcmRpbmdTdGVwSW5wdXRcbnx9O1xuZXhwb3J0IHR5cGUgYWRkU3RlcE11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArYWRkU3RlcDogP3t8XG4gICAgK3BpcGVsaW5lOiB7fFxuICAgICAgKyRmcmFnbWVudFJlZnM6IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZlxuICAgIHx9XG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIGFkZFN0ZXBNdXRhdGlvbiA9IHt8XG4gIHZhcmlhYmxlczogYWRkU3RlcE11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogYWRkU3RlcE11dGF0aW9uUmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIGFkZFN0ZXBNdXRhdGlvbihcbiAgJGlucHV0OiBBZGRPbmJvYXJkaW5nU3RlcElucHV0IVxuKSB7XG4gIGFkZFN0ZXAoaW5wdXQ6ICRpbnB1dCkge1xuICAgIHBpcGVsaW5lIHtcbiAgICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xuICBpZFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgaWRcbiAgICAuLi5zdGVwQ29udGFpbmVyX3N0ZXBcbiAgfVxufVxuXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xuICBvbmJvYXJkaW5nU3RlcElkXG4gIG5hbWVcbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdTdGVwSW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdTdGVwSW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJhZGRTdGVwTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBhZGRTdGVwTXV0YXRpb24oXFxuICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdTdGVwSW5wdXQhXFxuKSB7XFxuICBhZGRTdGVwKGlucHV0OiAkaW5wdXQpIHtcXG4gICAgcGlwZWxpbmUge1xcbiAgICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXFxuICAgICAgaWRcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xcbiAgaWRcXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nU3RlcHMge1xcbiAgICBpZFxcbiAgICAuLi5zdGVwQ29udGFpbmVyX3N0ZXBcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcXG4gIG9uYm9hcmRpbmdTdGVwSWRcXG4gIG5hbWVcXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiYWRkU3RlcE11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiYWRkU3RlcFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdTdGVwUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJhZGRTdGVwTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhZGRTdGVwXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQWRkT25ib2FyZGluZ1N0ZXBQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lSWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1N0ZXBcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcElkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHYzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZTVlOWNmZjFhYTYxZDk2NWUzZmMwMmEwNDc1MzliYTgnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCA3M2Q4NjYxNWY1MWVhMTM4OTgwMjVhMjRmMTVmMjY1M1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIEVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCA9IHtcbiAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gIGlkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZyxcbn07XG5leHBvcnQgdHlwZSBlZGl0UGlwZWxpbmVNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiBFZGl0T25ib2FyZGluZ1BpcGVsaW5lSW5wdXRcbnx9O1xuZXhwb3J0IHR5cGUgZWRpdFBpcGVsaW5lTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICtlZGl0UGlwZWxpbmU6ID97fFxuICAgICtvcmdhbml6YXRpb246IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZlxuICAgIHx9XG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIGVkaXRQaXBlbGluZU11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiBlZGl0UGlwZWxpbmVNdXRhdGlvblZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IGVkaXRQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIGVkaXRQaXBlbGluZU11dGF0aW9uKFxuICAkaW5wdXQ6IEVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcbikge1xuICBlZGl0UGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICBvcmdhbml6YXRpb25JZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgIGlkXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgfVxufVxuXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xuICBpZFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgaWRcbiAgICAuLi5zdGVwQ29udGFpbmVyX3N0ZXBcbiAgfVxufVxuXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xuICBvbmJvYXJkaW5nU3RlcElkXG4gIG5hbWVcbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiRWRpdE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwiZWRpdFBpcGVsaW5lTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBlZGl0UGlwZWxpbmVNdXRhdGlvbihcXG4gICRpbnB1dDogRWRpdE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxcbikge1xcbiAgZWRpdFBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcXG4gICAgb3JnYW5pemF0aW9uIHtcXG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xcbiAgb3JnYW5pemF0aW9uSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xcbiAgICBpZFxcbiAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xcbiAgaWRcXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nU3RlcHMge1xcbiAgICBpZFxcbiAgICAuLi5zdGVwQ29udGFpbmVyX3N0ZXBcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcXG4gIG9uYm9hcmRpbmdTdGVwSWRcXG4gIG5hbWVcXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiZWRpdFBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJlZGl0UGlwZWxpbmVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJFZGl0T25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImVkaXRQaXBlbGluZU11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiZWRpdFBpcGVsaW5lXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRWRpdE9uYm9hcmRpbmdQaXBlbGluZVBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcElkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB2MlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2M1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2NmY2JkNGIwNWI5MmFhMzM5ZGYzNDU3NzQ1ZWFkYWY0Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggNGY5MjEyYTM0ZWZhYWE0MDFmMDkyOWZlNzQyMjFjMDVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIEVkaXRPbmJvYXJkaW5nU3RlcElucHV0ID0ge1xuICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgaWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIGVkaXRTdGVwTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogRWRpdE9uYm9hcmRpbmdTdGVwSW5wdXRcbnx9O1xuZXhwb3J0IHR5cGUgZWRpdFN0ZXBNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK2VkaXRTdGVwOiA/e3xcbiAgICArcGlwZWxpbmU6IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmXG4gICAgfH1cbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgZWRpdFN0ZXBNdXRhdGlvbiA9IHt8XG4gIHZhcmlhYmxlczogZWRpdFN0ZXBNdXRhdGlvblZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IGVkaXRTdGVwTXV0YXRpb25SZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gZWRpdFN0ZXBNdXRhdGlvbihcbiAgJGlucHV0OiBFZGl0T25ib2FyZGluZ1N0ZXBJbnB1dCFcbikge1xuICBlZGl0U3RlcChpbnB1dDogJGlucHV0KSB7XG4gICAgcGlwZWxpbmUge1xuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XG4gIGlkXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICBpZFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxuICB9XG59XG5cbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XG4gIG9uYm9hcmRpbmdTdGVwSWRcbiAgbmFtZVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiRWRpdE9uYm9hcmRpbmdTdGVwSW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkVkaXRPbmJvYXJkaW5nU3RlcElucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwiZWRpdFN0ZXBNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIGVkaXRTdGVwTXV0YXRpb24oXFxuICAkaW5wdXQ6IEVkaXRPbmJvYXJkaW5nU3RlcElucHV0IVxcbikge1xcbiAgZWRpdFN0ZXAoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBwaXBlbGluZSB7XFxuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xcbiAgb25ib2FyZGluZ1N0ZXBJZFxcbiAgbmFtZVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJlZGl0U3RlcE11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiZWRpdFN0ZXBcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJFZGl0T25ib2FyZGluZ1N0ZXBQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImVkaXRTdGVwTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJlZGl0U3RlcFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkVkaXRPbmJvYXJkaW5nU3RlcFBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdjNzcwYThmYzI2NGU5YTM5ZTY0MzcwY2RjZWNiOGZkNyc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDMxNTQ2ODA0MjM4MjNjNDVhYTM3ZTVkZmFhZThmMWMxXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVZhcmlhYmxlcyA9IHt8XG4gIGlkOiBzdHJpbmdcbnx9O1xuZXhwb3J0IHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK25vZGU6ID97fFxuICAgICskZnJhZ21lbnRSZWZzOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmXG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnkoXG4gICRpZDogSUQhXG4pIHtcbiAgbm9kZShpZDogJGlkKSB7XG4gICAgX190eXBlbmFtZVxuICAgIC4uLiBvbiBPcmdhbml6YXRpb24ge1xuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgfVxuICAgIGlkXG4gIH1cbn1cblxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XG4gIG9yZ2FuaXphdGlvbklkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XG4gICAgaWRcbiAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICB9XG59XG5cbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XG4gIGlkXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICBpZFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxuICB9XG59XG5cbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XG4gIG9uYm9hcmRpbmdTdGVwSWRcbiAgbmFtZVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgXCJ0eXBlXCI6IFwiSUQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpZFwiLFxuICAgIFwidHlwZVwiOiBcIklEIVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnkoXFxuICAkaWQ6IElEIVxcbikge1xcbiAgbm9kZShpZDogJGlkKSB7XFxuICAgIF9fdHlwZW5hbWVcXG4gICAgLi4uIG9uIE9yZ2FuaXphdGlvbiB7XFxuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXFxuICAgIH1cXG4gICAgaWRcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XFxuICBvcmdhbml6YXRpb25JZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XFxuICAgIGlkXFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xcbiAgb25ib2FyZGluZ1N0ZXBJZFxcbiAgbmFtZVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibm9kZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBudWxsLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJJbmxpbmVGcmFnbWVudFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcIm5vZGVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogbnVsbCxcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIl9fdHlwZW5hbWVcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHYyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIklubGluZUZyYWdtZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcElkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB2M1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZDhkOWUxNDg5NGNhNTI4ZjAxMmQ4Mjg2N2Q4OWEzNmEnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZiA9IGFueTtcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuZGVjbGFyZSBleHBvcnQgb3BhcXVlIHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZjogRnJhZ21lbnRSZWZlcmVuY2U7XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gPSB7fFxuICArb3JnYW5pemF0aW9uSWQ6IG51bWJlcixcbiAgK25hbWU6IHN0cmluZyxcbiAgK29uYm9hcmRpbmdQaXBlbGluZXM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICskZnJhZ21lbnRSZWZzOiBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWYsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgXCJ0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2YwYzI4MGRkYTQ2Nzg3NjFlY2JkOGI5MDg0YTIzZTUxJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBzdGVwQ29udGFpbmVyX3N0ZXAkcmVmID0gYW55O1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgPSB7fFxuICAraWQ6IHN0cmluZyxcbiAgK29uYm9hcmRpbmdQaXBlbGluZUlkOiBudW1iZXIsXG4gICtuYW1lOiBzdHJpbmcsXG4gICtvbmJvYXJkaW5nU3RlcHM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICskZnJhZ21lbnRSZWZzOiBzdGVwQ29udGFpbmVyX3N0ZXAkcmVmLFxuICB8fT4sXG4gICskcmVmVHlwZTogcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgXCJuYW1lXCI6IFwicGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcIixcbiAgXCJ0eXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHYwLFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgdjAsXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcInN0ZXBDb250YWluZXJfc3RlcFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICcyNjFmYjEyMmVhMzk2ZWUwYmQ4NDU4NjU2MDBmNjc5Mic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDI2YTBmMzMzNmFkYjk0MTkzNjc1MjU1YWU3M2MzZTNiXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBpZDogbnVtYmVyLFxufTtcbmV4cG9ydCB0eXBlIHJlbW92ZVBpcGVsaW5lTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXRcbnx9O1xuZXhwb3J0IHR5cGUgcmVtb3ZlUGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK3JlbW92ZVBpcGVsaW5lOiA/e3xcbiAgICArb3JnYW5pemF0aW9uOiB7fFxuICAgICAgKyRmcmFnbWVudFJlZnM6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWZcbiAgICB8fVxuICB8fVxufH07XG5leHBvcnQgdHlwZSByZW1vdmVQaXBlbGluZU11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiByZW1vdmVQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogcmVtb3ZlUGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiByZW1vdmVQaXBlbGluZU11dGF0aW9uKFxuICAkaW5wdXQ6IFJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxuKSB7XG4gIHJlbW92ZVBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcbiAgICBvcmdhbml6YXRpb24ge1xuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgb3JnYW5pemF0aW9uSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICBpZFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gIH1cbn1cblxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgaWRcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nU3RlcHMge1xuICAgIGlkXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXG4gIH1cbn1cblxuZnJhZ21lbnQgc3RlcENvbnRhaW5lcl9zdGVwIG9uIE9uYm9hcmRpbmdTdGVwIHtcbiAgb25ib2FyZGluZ1N0ZXBJZFxuICBuYW1lXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJyZW1vdmVQaXBlbGluZU11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gcmVtb3ZlUGlwZWxpbmVNdXRhdGlvbihcXG4gICRpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXFxuKSB7XFxuICByZW1vdmVQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XFxuICAgIG9yZ2FuaXphdGlvbiB7XFxuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXFxuICAgICAgaWRcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcXG4gIG9yZ2FuaXphdGlvbklkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcXG4gICAgaWRcXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcXG4gIGlkXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1N0ZXBzIHtcXG4gICAgaWRcXG4gICAgLi4uc3RlcENvbnRhaW5lcl9zdGVwXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XFxuICBvbmJvYXJkaW5nU3RlcElkXFxuICBuYW1lXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInJlbW92ZVBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJyZW1vdmVQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZVBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJyZW1vdmVQaXBlbGluZU11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicmVtb3ZlUGlwZWxpbmVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uSWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZXNcIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZUlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1N0ZXBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdjJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc1Y2UzNzQyZGFkOWNhMDJiYjA4NjBlYjk2ZDk5ZTAwMyc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDI4OTc4NWI1N2I5YzE5ODVhNTY4ZjQwMTJmOGNjMmI4XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBSZW1vdmVPbmJvYXJkaW5nU3RlcElucHV0ID0ge1xuICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgaWQ6IG51bWJlcixcbn07XG5leHBvcnQgdHlwZSByZW1vdmVTdGVwTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1N0ZXBJbnB1dFxufH07XG5leHBvcnQgdHlwZSByZW1vdmVTdGVwTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICtyZW1vdmVTdGVwOiA/e3xcbiAgICArcGlwZWxpbmU6IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmXG4gICAgfH1cbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgcmVtb3ZlU3RlcE11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiByZW1vdmVTdGVwTXV0YXRpb25WYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiByZW1vdmVTdGVwTXV0YXRpb25SZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gcmVtb3ZlU3RlcE11dGF0aW9uKFxuICAkaW5wdXQ6IFJlbW92ZU9uYm9hcmRpbmdTdGVwSW5wdXQhXG4pIHtcbiAgcmVtb3ZlU3RlcChpbnB1dDogJGlucHV0KSB7XG4gICAgcGlwZWxpbmUge1xuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XG4gIGlkXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICBpZFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxuICB9XG59XG5cbmZyYWdtZW50IHN0ZXBDb250YWluZXJfc3RlcCBvbiBPbmJvYXJkaW5nU3RlcCB7XG4gIG9uYm9hcmRpbmdTdGVwSWRcbiAgbmFtZVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiUmVtb3ZlT25ib2FyZGluZ1N0ZXBJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiUmVtb3ZlT25ib2FyZGluZ1N0ZXBJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcInJlbW92ZVN0ZXBNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIHJlbW92ZVN0ZXBNdXRhdGlvbihcXG4gICRpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1N0ZXBJbnB1dCFcXG4pIHtcXG4gIHJlbW92ZVN0ZXAoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBwaXBlbGluZSB7XFxuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIC4uLnN0ZXBDb250YWluZXJfc3RlcFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBzdGVwQ29udGFpbmVyX3N0ZXAgb24gT25ib2FyZGluZ1N0ZXAge1xcbiAgb25ib2FyZGluZ1N0ZXBJZFxcbiAgbmFtZVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJyZW1vdmVTdGVwTXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJyZW1vdmVTdGVwXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUmVtb3ZlT25ib2FyZGluZ1N0ZXBQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInJlbW92ZVN0ZXBNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInJlbW92ZVN0ZXBcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJSZW1vdmVPbmJvYXJkaW5nU3RlcFBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdTdGVwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc5YTU4YWE2NGI2MWUyNDAzZGM0Y2JiZmY0YmYyOTY3OSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlRnJhZ21lbnQgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuZGVjbGFyZSBleHBvcnQgb3BhcXVlIHR5cGUgc3RlcENvbnRhaW5lcl9zdGVwJHJlZjogRnJhZ21lbnRSZWZlcmVuY2U7XG5leHBvcnQgdHlwZSBzdGVwQ29udGFpbmVyX3N0ZXAgPSB7fFxuICArb25ib2FyZGluZ1N0ZXBJZDogbnVtYmVyLFxuICArbmFtZTogc3RyaW5nLFxuICArJHJlZlR5cGU6IHN0ZXBDb250YWluZXJfc3RlcCRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcInN0ZXBDb250YWluZXJfc3RlcFwiLFxuICBcInR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBJZFwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9XG4gIF1cbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzRmMjQ3Yjg0OGUxYTMyMTUwN2JiYzU0ZWQ0NDkwNTY2Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBhZGRQaXBlbGluZU11dGF0aW9uKFxuICAgICRpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4gICkge1xuICAgIGFkZFBpcGVsaW5lKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIG9yZ2FuaXphdGlvbklkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgb3JnYW5pemF0aW9uSWQsIG5hbWUgfTogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBvcmdhbml6YXRpb25JZCxcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBhZGRTdGVwTXV0YXRpb24oXG4gICAgJGlucHV0OiBBZGRPbmJvYXJkaW5nU3RlcElucHV0IVxuICApIHtcbiAgICBhZGRTdGVwKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHBpcGVsaW5lIHtcbiAgICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIHBpcGVsaW5lSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgcGlwZWxpbmVJZCwgbmFtZSwgZGVzY3JpcHRpb24gfTogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBwaXBlbGluZUlkLFxuICAgICAgbmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gZWRpdFBpcGVsaW5lTXV0YXRpb24oXG4gICAgJGlucHV0OiBFZGl0T25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4gICkge1xuICAgIGVkaXRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBvcmdhbml6YXRpb24ge1xuICAgICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0aW9uSW5wdXQge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlkLCBuYW1lIH06IElNdXRhdGlvbklucHV0KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gZWRpdFN0ZXBNdXRhdGlvbihcbiAgICAkaW5wdXQ6IEVkaXRPbmJvYXJkaW5nU3RlcElucHV0IVxuICApIHtcbiAgICBlZGl0U3RlcChpbnB1dDogJGlucHV0KSB7XG4gICAgICBwaXBlbGluZSB7XG4gICAgICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdGlvbklucHV0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBpZCwgbmFtZSB9OiBJTXV0YXRpb25JbnB1dCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vc2hhcmVkL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCBGaWVsZElucHV0IGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXRcIjtcbmltcG9ydCB7IEZpZWxkLCBJbmplY3RlZEZvcm1Qcm9wcyB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgeyBQaXBlbGluZUNvbHVtbiB9IGZyb20gXCIuL3BpcGVsaW5lXCI7XG5pbXBvcnQgY3JlYXRlRmllbGRWYWxpZGF0b3IgZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnB1dHMvY3JlYXRlRmllbGRWYWxpZGF0b3JcIjtcblxuY29uc3QgYWRkUGlwZWxpbmVWYWxpZGF0b3IgPSBjcmVhdGVGaWVsZFZhbGlkYXRvcihbXCJyZXF1aXJlZFwiXSk7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJbmplY3RlZEZvcm1Qcm9wcyB7XG4gIGFkZFBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVQaXBlbGluZTogKCkgPT4gdm9pZDtcbiAgaXNBZGRpbmdQaXBlbGluZTogYm9vbGVhbjtcbn1cblxuY29uc3QgRW1wdHlQaXBlbGluZSA9ICh7XG4gIHRvZ2dsZVBpcGVsaW5lLFxuICBpc0FkZGluZ1BpcGVsaW5lLFxuICBoYW5kbGVTdWJtaXQsXG4gIGFkZFBpcGVsaW5lLFxufTogSVByb3BzKSA9PiAoXG4gIDxQaXBlbGluZUNvbHVtbiBweD17MH0+XG4gICAge2lzQWRkaW5nUGlwZWxpbmUgPyAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFkZFBpcGVsaW5lKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGNvbXBvbmVudD17RmllbGRJbnB1dH1cbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaXBlbGluZSBuYW1lXCJcbiAgICAgICAgICB2YWxpZGF0ZT17YWRkUGlwZWxpbmVWYWxpZGF0b3J9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggbXQ9ezEwfT5cbiAgICAgICAgICA8QnV0dG9uIG1yPXsxMH0+Q3JlYXRlPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlUGlwZWxpbmV9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvZm9ybT5cbiAgICAgICkgOiAoXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBpcGVsaW5lfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+QWRkIGEgcGlwZWxpbmUuPC9CdXR0b24+XG4gICAgKX1cbiAgPC9QaXBlbGluZUNvbHVtbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5UGlwZWxpbmU7XG4iLCJpbXBvcnQgRW1wdHlQaXBlbGluZSBmcm9tIFwiLi9lbXB0eVBpcGVsaW5lXCI7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGVIYW5kbGVycywgd2l0aEhhbmRsZXJzIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCBhZGRQaXBlbGluZU11dGF0aW9uIGZyb20gXCIuL2FkZFBpcGVsaW5lTXV0YXRpb25cIjtcbmltcG9ydCB7IElPcmdhbml6YXRpb24gfSBmcm9tIFwiLi4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvblwiO1xuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNBZGRpbmdQaXBlbGluZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG9yZ2FuaXphdGlvbklkOiBudW1iZXI7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSUFkZFBpcGVsaW5lSW5wdXQge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBhZGRQaXBlbGluZTogKHsgb3JnYW5pemF0aW9uSWQsIHRvZ2dsZVBpcGVsaW5lIH06IElQcm9wcykgPT4gKGlucHV0OiBJQWRkUGlwZWxpbmVJbnB1dCkgPT4ge1xuICAgIGFkZFBpcGVsaW5lTXV0YXRpb24oeyBvcmdhbml6YXRpb25JZCwgLi4uaW5wdXQgfSksXG4gICAgdG9nZ2xlUGlwZWxpbmUoKTtcbiAgfSxcbn07XG5cbmNvbnN0IHN0YXRlSGFuZGxlcnMgPSB7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoeyBpc0FkZGluZ1BpcGVsaW5lIH06IElTdGF0ZSkgPT4gKCkgPT4gKHtcbiAgICBpc0FkZGluZ1BpcGVsaW5lOiAhaXNBZGRpbmdQaXBlbGluZSxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3RhdGVIYW5kbGVycyh7IGlzQWRkaW5nUGlwZWxpbmU6IGZhbHNlIH0sIHN0YXRlSGFuZGxlcnMpLFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06IFwiYWRkUGlwZWxpbmVcIixcbiAgfSksXG4pKEVtcHR5UGlwZWxpbmUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0LCBSb3csIENvbHVtbiwgQm94LCBCdXR0b25UcmFuc3BhcmVudCwgTW9kYWwgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBJT3JnYW5pemF0aW9uIH0gZnJvbSBcIi4uL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zaGFyZWQvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IEZpZWxkSW5wdXQgZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dFwiO1xuaW1wb3J0IHsgRmllbGQsIEluamVjdGVkRm9ybVByb3BzIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCBjcmVhdGVGaWVsZFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9jcmVhdGVGaWVsZFZhbGlkYXRvclwiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuLi8uLi8uLi93d3dyb290L2Fzc2V0cy9jcm9zcy5zdmdcIjtcbmltcG9ydCBQZW5jaWwgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL1BlbmNpbC5zdmdcIjtcbmltcG9ydCB7IEZsZXggfSBmcm9tIFwiZ3JpZC1zdHlsZWRcIjtcbmltcG9ydCB7IFBvcnRhbFdpdGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcbmltcG9ydCBFbXB0eVBpcGVsaW5lIGZyb20gXCIuL2VtcHR5UGlwZWxpbmVDb250YWluZXJcIjtcbmltcG9ydCBQaXBlbGluZSBmcm9tIFwiLi9waXBlbGluZUNvbnRhaW5lclwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSW5qZWN0ZWRGb3JtUHJvcHMge1xuICBvcmdhbml6YXRpb246IElPcmdhbml6YXRpb247XG4gIGFkZFBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICByZW1vdmVQaXBlbGluZTogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gIGVkaXRQaXBlbGluZTogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICBpc0FkZGluZ1BpcGVsaW5lOiBib29sZWFuO1xuICByZW1vdmluZ05hbWVDb25maXJtVmFsdWU6IHN0cmluZztcbn1cblxuY29uc3QgUGlwZWxpbmVSb3cgPSBzdHlsZWQoUm93KWBcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbiAgaGVpZ2h0OiA3MDBweDtcbmA7XG5cbmNvbnN0IE9uYm9hcmRpbmdQcm9jZXNzID0gKHtcbiAgb3JnYW5pemF0aW9uLFxufTogSVByb3BzKSA9PiAoXG4gIDxDb250YWluZXIgbWF4V2lkdGg9XCIxMDAlXCI+XG4gICAgPFRleHQgbXQ9ezIwfSBtYj17NDB9IGZvbnRTaXplPXsyMH0+XG4gICAgICA8VGV4dCBpcz1cInNwYW5cIiBkaXNwbGF5PVwiaW5saW5lXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAge29yZ2FuaXphdGlvbi5uYW1lfVxuICAgICAgPC9UZXh0PiBvbi1ib2FyZGluZyBwcm9jZXNzXG4gICAgPC9UZXh0PlxuICAgIDxQaXBlbGluZVJvdz5cbiAgICAgIHtvcmdhbml6YXRpb24ub25ib2FyZGluZ1BpcGVsaW5lcy5tYXAoKHBpcGVsaW5lLCBpKSA9PlxuICAgICAgICA8UGlwZWxpbmVcbiAgICAgICAgICBrZXk9e3BpcGVsaW5lLmlkfVxuICAgICAgICAgIGZvcm09e2BwaXBlbGluZV8ke2l9YH1cbiAgICAgICAgICBwaXBlbGluZT17cGlwZWxpbmV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPEVtcHR5UGlwZWxpbmUgb3JnYW5pemF0aW9uSWQ9e29yZ2FuaXphdGlvbi5vcmdhbml6YXRpb25JZH0gLz5cbiAgICA8L1BpcGVsaW5lUm93PlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE9uYm9hcmRpbmdQcm9jZXNzO1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY29tcG9zZSwgcmVuYW1lUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBPbmJvYXJkaW5nUHJvY2VzcyBmcm9tIFwiLi9vbmJvYXJkaW5nUHJvY2Vzc1wiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeShcbiAgICAkaWQ6IElEIVxuICApIHtcbiAgICBub2RlKFxuICAgICAgaWQ6ICRpZFxuICAgICkge1xuICAgICAgLi4ub24gT3JnYW5pemF0aW9uIHtcbiAgICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgICBvcmdhbml6YXRpb25JZFxuICAgIG5hbWVcbiAgICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICAgIGlkXG4gICAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG9yZ2FuaXphdGlvbjogSU9yZ2FuaXphdGlvbjtcbn1cblxuXG5jb25zdCBDb21wb25lbnQgPSBjb21wb3NlKFxuICByZW5hbWVQcm9wKFwibm9kZVwiLCBcIm9yZ2FuaXphdGlvblwiKSxcbiAgZnJhZ21lbnQoZnJhZ21lbnRzKSxcbikoT25ib2FyZGluZ1Byb2Nlc3MpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudCxcbiAgcXVlcnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0LCBDb2x1bW4sIEJveCwgQnV0dG9uVHJhbnNwYXJlbnQsIE1vZGFsIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vc2hhcmVkL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCBGaWVsZElucHV0IGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXRcIjtcbmltcG9ydCB7IEZpZWxkLCBJbmplY3RlZEZvcm1Qcm9wcyB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL2Nyb3NzLnN2Z1wiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi4vLi4vLi4vd3d3cm9vdC9hc3NldHMvUGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJncmlkLXN0eWxlZFwiO1xuaW1wb3J0IHsgUG9ydGFsV2l0aFN0YXRlIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yXCI7XG5pbXBvcnQgU3RlcCBmcm9tIFwiLi9TdGVwQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBJU3RlcCB9IGZyb20gXCIuL3N0ZXBcIjtcblxuZXhwb3J0IGNvbnN0IFBpcGVsaW5lQ29sdW1uID0gc3R5bGVkKENvbHVtbilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1heC13aWR0aDogMjYycHg7XG5gO1xuXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvblRyYW5zcGFyZW50KWBcbiAgcGFkZGluZzogNXB4O1xuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJUGlwbGluZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgb25ib2FyZGluZ1N0ZXBzOiBJU3RlcFtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVkaXRQaXBlbGluZUlucHV0IHtcbiAgcGlwZWxpbmVOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFkZE9uYm9hcmRpbmdTdGVwSW5wdXQge1xuICBvbmJvYXJkaW5nU3RlcE5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbnR5cGUgRm9ybURhdGEgPSBJRWRpdFBpcGVsaW5lSW5wdXQgfCBJQWRkT25ib2FyZGluZ1N0ZXBJbnB1dDtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEluamVjdGVkRm9ybVByb3BzPEZvcm1EYXRhPiB7XG4gIG9yZ2FuaXphdGlvbjogSU9yZ2FuaXphdGlvbjtcbiAgYWRkUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHJlbW92ZVBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICBlZGl0UGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICBpc0VkaXRpbmdQaXBlbGluZTogYm9vbGVhbjtcbiAgcmVtb3ZpbmdOYW1lQ29uZmlybVZhbHVlOiBzdHJpbmc7XG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgb25ib2FyZGluZ1N0ZXBzOiBJU3RlcFtdXG4gIGFkZFN0ZXA6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZVN0ZXA6ICgpID0+IHZvaWQ7XG4gIGlzQWRkaW5nU3RlcDogYm9vbGVhbjtcbn1cblxuY29uc3QgZWRpdFBpcGVsaW5lVmFsaWRhdG9yID0gY3JlYXRlRmllbGRWYWxpZGF0b3IoW1wicmVxdWlyZWRcIl0pO1xuY29uc3QgYWRkU3RlcFZhbGlkYXRvciA9IGNyZWF0ZUZpZWxkVmFsaWRhdG9yKFtcInJlcXVpcmVkXCJdKTtcblxuY29uc3QgUGlwZWxpbmUgPSAoe1xuICB0b2dnbGVQaXBlbGluZSxcbiAgaXNFZGl0aW5nUGlwZWxpbmUsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgZWRpdFBpcGVsaW5lLFxuICByZW1vdmVQaXBlbGluZSxcbiAgcmVtb3ZpbmdOYW1lQ29uZmlybVZhbHVlLFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZCxcbiAgbmFtZSxcbiAgYWRkU3RlcCxcbiAgaXNBZGRpbmdTdGVwLFxuICB0b2dnbGVTdGVwLFxuICBvbmJvYXJkaW5nU3RlcHMsXG59OiBJUHJvcHMpID0+IChcbiAgPFBpcGVsaW5lQ29sdW1uIGtleT17b25ib2FyZGluZ1BpcGVsaW5lSWR9IHA9ezE2fT5cbiAgICA8Qm94IHBiPXsxNn0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIHtpc0VkaXRpbmdQaXBlbGluZSA/IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGVkaXRQaXBlbGluZSl9IGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RmllbGRJbnB1dH1cbiAgICAgICAgICAgICAgbmFtZT1cInBpcGVsaW5lTmFtZVwiXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtlZGl0UGlwZWxpbmVWYWxpZGF0b3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJveCBtdD17MTB9PlxuICAgICAgICAgICAgICA8QnV0dG9uIG1yPXsxMH0+RWRpdDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVQaXBlbGluZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT17MTh9PntuYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gbWw9XCJhdXRvXCIgb25DbGljaz17dG9nZ2xlUGlwZWxpbmV9PlxuICAgICAgICAgICAgICAgIDxQZW5jaWwgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8UG9ydGFsV2l0aFN0YXRlIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljaz5cbiAgICAgICAgICAgICAgeyh7IG9wZW5Qb3J0YWwsIGNsb3NlUG9ydGFsLCBwb3J0YWwgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtvcGVuUG9ydGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q3Jvc3MgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7cG9ydGFsKFxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbCB0b3A9XCIzMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVtb3ZlUGlwZWxpbmUpfSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZW1vdmluZ05hbWVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFR5cGUgdGhlIHBpcGVsaW5lIG5hbWUgJyR7bmFtZX0nIHRvIGRlbGV0ZS5gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1iPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBtcj17MTB9IGRpc2FibGVkPXtyZW1vdmluZ05hbWVDb25maXJtVmFsdWUgIT09IG5hbWV9PlJlbW92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZVBvcnRhbH0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Qb3J0YWxXaXRoU3RhdGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICAgIHtvbmJvYXJkaW5nU3RlcHMubWFwKChzdGVwLCBpKSA9PiAoXG4gICAgICA8U3RlcFxuICAgICAgICBrZXk9e3N0ZXAuaWR9XG4gICAgICAgIGZvcm09e2BzdGVwXyR7aX1gfVxuICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgLz5cbiAgICApKX1cbiAgICB7aXNBZGRpbmdTdGVwID8gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChhZGRTdGVwKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGNvbXBvbmVudD17RmllbGRJbnB1dH1cbiAgICAgICAgICBuYW1lPVwib25ib2FyZGluZ1N0ZXBOYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQXNzaWduIGEgbWVudG9yXCJcbiAgICAgICAgICB2YWxpZGF0ZT17YWRkU3RlcFZhbGlkYXRvcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBtdD17MTB9PlxuICAgICAgICAgIDxCdXR0b24gbXI9ezEwfT5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVTdGVwfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L2Zvcm0+XG4gICAgKSA6IChcbiAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlU3RlcH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PkFkZCBhbiBvbmJvYXJkaW5nIHN0ZXAuPC9CdXR0b24+XG4gICAgKX1cbiAgPC9QaXBlbGluZUNvbHVtbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBpcGVsaW5lO1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aEhhbmRsZXJzLCB3aXRoU3RhdGVIYW5kbGVycywgd2l0aFByb3BzLCBmbGF0dGVuUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCB7IHJlZHV4Rm9ybSwgZm9ybVZhbHVlU2VsZWN0b3IgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IHsgZnJhZ21lbnQgfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuaW1wb3J0IHJlbW92ZVBpcGVsaW5lTXV0YXRpb24gZnJvbSBcIi4vcmVtb3ZlUGlwZWxpbmVNdXRhdGlvblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGVkaXRQaXBlbGluZU11dGF0aW9uIGZyb20gXCIuL2VkaXRQaXBlbGluZU11dGF0aW9uXCI7XG5pbXBvcnQgUGlwZWxpbmUsIHsgSUVkaXRQaXBlbGluZUlucHV0LCBJQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCB9IGZyb20gXCIuL3BpcGVsaW5lXCI7XG5pbXBvcnQgYWRkU3RlcE11dGF0aW9uIGZyb20gXCIuL2FkZFN0ZXBNdXRhdGlvblwiO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xuICAgIGlkXG4gICAgb25ib2FyZGluZ1BpcGVsaW5lSWRcbiAgICBuYW1lXG4gICAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICAgIGlkXG4gICAgICAuLi5zdGVwQ29udGFpbmVyX3N0ZXBcbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xuICBvbmJvYXJkaW5nUGlwZWxpbmVJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZvcm06IHN0cmluZztcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZVN0ZXA6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpc0VkaXRpbmdQaXBlbGluZTogYm9vbGVhbjtcbiAgaXNBZGRpbmdTdGVwOiBib29sZWFuO1xufVxuXG5jb25zdCBzdGF0ZUhhbmRsZXJzID0ge1xuICB0b2dnbGVQaXBlbGluZTogKHsgaXNFZGl0aW5nUGlwZWxpbmUgfTogSVN0YXRlKSA9PiAoKSA9PiAoe1xuICAgIGlzRWRpdGluZ1BpcGVsaW5lOiAhaXNFZGl0aW5nUGlwZWxpbmUsXG4gIH0pLFxuICB0b2dnbGVTdGVwOiAoeyBpc0FkZGluZ1N0ZXAgfTogSVN0YXRlKSA9PiAoKSA9PiAoe1xuICAgIGlzQWRkaW5nU3RlcDogIWlzQWRkaW5nU3RlcCxcbiAgfSksXG59O1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgcmVtb3ZlUGlwZWxpbmU6ICh7IG9uYm9hcmRpbmdQaXBlbGluZUlkIH06IElQcm9wcykgPT4gKCkgPT5cbiAgICByZW1vdmVQaXBlbGluZU11dGF0aW9uKHsgaWQ6IG9uYm9hcmRpbmdQaXBlbGluZUlkIH0pLFxuICBlZGl0UGlwZWxpbmU6ICh7IG9uYm9hcmRpbmdQaXBlbGluZUlkLCB0b2dnbGVQaXBlbGluZSB9OiBJUHJvcHMpID0+IChpbnB1dDogSUVkaXRQaXBlbGluZUlucHV0KSA9PiB7XG4gICAgZWRpdFBpcGVsaW5lTXV0YXRpb24oe1xuICAgICAgaWQ6IG9uYm9hcmRpbmdQaXBlbGluZUlkLFxuICAgICAgbmFtZTogaW5wdXQucGlwZWxpbmVOYW1lLFxuICAgIH0pLFxuICAgIHRvZ2dsZVBpcGVsaW5lKCk7XG4gIH0sXG4gIGFkZFN0ZXA6ICh7IG9uYm9hcmRpbmdQaXBlbGluZUlkLCB0b2dnbGVTdGVwIH06IElQcm9wcykgPT4gKGlucHV0OiBJQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCkgPT4ge1xuICAgIGFkZFN0ZXBNdXRhdGlvbih7XG4gICAgICBwaXBlbGluZUlkOiBvbmJvYXJkaW5nUGlwZWxpbmVJZCxcbiAgICAgIG5hbWU6IGlucHV0Lm9uYm9hcmRpbmdTdGVwTmFtZSxcbiAgICB9KSxcbiAgICB0b2dnbGVTdGVwKCk7XG4gIH0sXG59O1xuXG5jb25zdCBDb21wb25lbnQgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoKHsgZm9ybSB9OiBJUHJvcHMpID0+ICh7XG4gICAgc2VsZWN0b3I6IGZvcm1WYWx1ZVNlbGVjdG9yKGZvcm0pLFxuICB9KSksXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4gIGZsYXR0ZW5Qcm9wKFwicGlwZWxpbmVcIiksXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKHtcbiAgICBpc0VkaXRpbmdQaXBlbGluZTogZmFsc2UsXG4gICAgaXNBZGRpbmdTdGVwOiBmYWxzZSxcbiAgfSwgc3RhdGVIYW5kbGVycyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4gIHdpdGhQcm9wcygoeyBuYW1lIH06IElQcm9wcykgPT4gKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBwaXBlbGluZU5hbWU6IG5hbWUsXG4gICAgfSxcbiAgfSkpLFxuICByZWR1eEZvcm0oe30pLFxuICBjb25uZWN0KChzdGF0ZSwgeyBzZWxlY3RvciB9OiBhbnkpID0+ICh7XG4gICAgcmVtb3ZpbmdOYW1lQ29uZmlybVZhbHVlOiBzZWxlY3RvcihzdGF0ZSwgXCJyZW1vdmluZ05hbWVDb25maXJtXCIpLFxuICB9KSksXG4pKFBpcGVsaW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY3JlYXRlTXV0YXRpb24gfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG4gIG11dGF0aW9uIHJlbW92ZVBpcGVsaW5lTXV0YXRpb24oXG4gICAgJGlucHV0OiBSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcbiAgKSB7XG4gICAgcmVtb3ZlUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgb3JnYW5pemF0aW9uIHtcbiAgICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNdXRhdGlvbklucHV0IHtcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgaWQgfTogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuaW1wb3J0IHsgY3JlYXRlTXV0YXRpb24gfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG4gIG11dGF0aW9uIHJlbW92ZVN0ZXBNdXRhdGlvbihcbiAgICAkaW5wdXQ6IFJlbW92ZU9uYm9hcmRpbmdTdGVwSW5wdXQhXG4gICkge1xuICAgIHJlbW92ZVN0ZXAoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgcGlwZWxpbmUge1xuICAgICAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlkIH06IElNdXRhdGlvbklucHV0KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvblRyYW5zcGFyZW50LCBNb2RhbCwgVGV4dCwgRmxleCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCBDcm9zcyBmcm9tIFwiLi4vLi4vLi4vd3d3cm9vdC9hc3NldHMvY3Jvc3Muc3ZnXCI7XG5pbXBvcnQgUGVuY2lsIGZyb20gXCIuLi8uLi8uLi93d3dyb290L2Fzc2V0cy9QZW5jaWwuc3ZnXCI7XG5pbXBvcnQgRmllbGRJbnB1dCBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9maWVsZElucHV0XCI7XG5pbXBvcnQgY3JlYXRlRmllbGRWYWxpZGF0b3IgZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnB1dHMvY3JlYXRlRmllbGRWYWxpZGF0b3JcIjtcbmltcG9ydCB7IEZpZWxkLCBJbmplY3RlZEZvcm1Qcm9wcyB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zaGFyZWQvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IHsgUG9ydGFsV2l0aFN0YXRlIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuXG5jb25zdCBTdGVwQm94ID0gc3R5bGVkKEJveClgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDA7XG5gO1xuXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvblRyYW5zcGFyZW50KWBcbiAgcGFkZGluZzogNXB4O1xuYDtcblxuZXhwb3J0IGludGVyZmFjZSBJU3RlcCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVkaXRTdGVwSW5wdXQge1xuICBzdGVwTmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSW5qZWN0ZWRGb3JtUHJvcHM8Rm9ybURhdGE+IHtcbiAgbmFtZTogc3RyaW5nO1xuICByZW1vdmVTdGVwOiAoKSA9PiB2b2lkO1xuICBlZGl0U3RlcDogKCkgPT4gdm9pZDtcbiAgaXNFZGl0aW5nU3RlcDogYm9vbGVhbjtcbiAgcmVtb3ZpbmdOYW1lQ29uZmlybVZhbHVlOiBzdHJpbmc7XG4gIHRvZ2dsZVN0ZXA6ICgpID0+IHZvaWQ7XG4gIGlzQWRkaW5nU3RlcDogYm9vbGVhbjtcbn1cblxuY29uc3QgZWRpdFN0ZXBWYWxpZGF0b3IgPSBjcmVhdGVGaWVsZFZhbGlkYXRvcihbXCJyZXF1aXJlZFwiXSk7XG5cbmNvbnN0IFN0ZXAgPSAoe1xuICB0b2dnbGVTdGVwLFxuICBuYW1lLFxuICBpc0VkaXRpbmdTdGVwLFxuICBlZGl0U3RlcCxcbiAgaGFuZGxlU3VibWl0LFxuICByZW1vdmVTdGVwLFxuICByZW1vdmluZ05hbWVDb25maXJtVmFsdWUsXG59OiBJUHJvcHMpID0+IChcbiAgPFN0ZXBCb3g+XG4gICAge2lzRWRpdGluZ1N0ZXAgPyAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGVkaXRTdGVwKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGNvbXBvbmVudD17RmllbGRJbnB1dH1cbiAgICAgICAgICBuYW1lPVwic3RlcE5hbWVcIlxuICAgICAgICAgIHZhbGlkYXRlPXtlZGl0U3RlcFZhbGlkYXRvcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBtdD17MTB9PlxuICAgICAgICAgIDxCdXR0b24gbXI9ezEwfT5FZGl0PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlU3RlcH0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJveCBiZz1cIndoaXRlXCIgcHg9XCI4cHhcIiBweT1cIjVweFwiPlxuICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxUZXh0PntuYW1lfTwvVGV4dD5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG1sPVwiYXV0b1wiIG9uQ2xpY2s9e3RvZ2dsZVN0ZXB9PlxuICAgICAgICAgICAgICA8UGVuY2lsIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8UG9ydGFsV2l0aFN0YXRlIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljaz5cbiAgICAgICAgICAgIHsoeyBvcGVuUG9ydGFsLCBjbG9zZVBvcnRhbCwgcG9ydGFsIH0pID0+IChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtvcGVuUG9ydGFsfT5cbiAgICAgICAgICAgICAgICAgICAgPENyb3NzIC8+XG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICB7cG9ydGFsKFxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwgdG9wPVwiMzAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChyZW1vdmVTdGVwKX0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVtb3ZpbmdOYW1lQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgVHlwZSB0aGUgc3RlcCBuYW1lICcke25hbWV9JyB0byBkZWxldGUuYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWI9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbXI9ezEwfSBkaXNhYmxlZD17cmVtb3ZpbmdOYW1lQ29uZmlybVZhbHVlICE9PSBuYW1lfT5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlUG9ydGFsfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1BvcnRhbFdpdGhTdGF0ZT5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICl9XG4gIDwvU3RlcEJveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXA7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDRjZTAwNTQ2ODU0MzdiN2IzYzE3YjU0NTlkYmZjMjg3XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3x8fTtcbmV4cG9ydCB0eXBlIG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK29yZ2FuaXphdGlvbnM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICtuYW1lOiBzdHJpbmcsXG4gICAgK2F2YXRhclVybDogc3RyaW5nLFxuICB8fT5cbnx9O1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5IHtcbiAgb3JnYW5pemF0aW9ucyB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgYXZhdGFyVXJsXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgXCJhbGlhc1wiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbnNcIixcbiAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICBcImFyZ3NcIjogbnVsbCxcbiAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiYXZhdGFyVXJsXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5IHtcXG4gIG9yZ2FuaXphdGlvbnMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIGF2YXRhclVybFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICczMmQxNDgwODk2N2Y5YjA4N2U3MDEyNmZhNzE3YTI5Nic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2UsIFN1YmhlYWQsIFRleHQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBuYW1lTWFyZ2luLCBTZWxlY3RDYXJkIH0gZnJvbSBcIi4uLy4uL3NlbGVjdC9zdHlsZXNcIjtcbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJUm91dGUge1xuICBvcmdhbml6YXRpb25zOiBJT3JnYW5pemF0aW9uW107XG59XG5cbmNvbnN0IE9yZ2FuaXphdGlvbnMgPSAoe1xuICBvcmdhbml6YXRpb25zLFxuICBtYXRjaCxcbn06IElQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxUZXh0IG15PXszMH0+XG4gICAgICBDaG9vc2UgYW4gb3JnYW5pemF0aW9uXG4gICAgPC9UZXh0PlxuXG4gICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICB7b3JnYW5pemF0aW9ucy5tYXAoKG9yZ2FuaXphdGlvbikgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e29yZ2FuaXphdGlvbi5pZH1cbiAgICAgICAgICAgIHRvPXtgJHttYXRjaC5sb2NhdGlvbi5wYXRobmFtZX0vb3JnYW5pemF0aW9uLyR7b3JnYW5pemF0aW9uLmlkfS9vbmJvYXJkaW5nUHJvY2Vzc2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNlbGVjdENhcmRcbiAgICAgICAgICAgICAgbT17Y2FyZE1hcmdpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZSB3aWR0aD17MjAwfSBzcmM9e29yZ2FuaXphdGlvbi5hdmF0YXJVcmx9IHJhdGlvPXsxfSAvPlxuICAgICAgICAgICAgICA8U3ViaGVhZCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17bmFtZU1hcmdpbn0+e29yZ2FuaXphdGlvbi5uYW1lfTwvU3ViaGVhZD5cbiAgICAgICAgICAgIDwvU2VsZWN0Q2FyZD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L0ZsZXg+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9ucztcbiIsImltcG9ydCB7IFJlZGlyZWN0RXhjZXB0aW9uIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5cbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSBcIi4vb3JnYW5pemF0aW9uc1wiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeSB7XG4gICAgb3JnYW5pemF0aW9ucyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXZhdGFyVXJsXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogT3JnYW5pemF0aW9ucyxcbiAgcXVlcnksXG4gIHJlbmRlcjogKHJvdXRlOiBJUm91dGUpID0+IHtcbiAgICBpZiAocm91dGUucHJvcHMpIHtcbiAgICAgIGlmIChyb3V0ZS5wcm9wcy5vcmdhbml6YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgUmVkaXJlY3RFeGNlcHRpb24oXG4gICAgICAgICAgYCR7cm91dGUubWF0Y2gubG9jYXRpb24ucGF0aG5hbWV9L29yZ2FuaXphdGlvbi8ke3JvdXRlLnByb3BzLm9yZ2FuaXphdGlvbnNbMF0uaWR9L29uYm9hcmRpbmdQcm9jZXNzYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gPE9yZ2FuaXphdGlvbnMgey4uLnJvdXRlLnByb3BzfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25zO1xuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY2xhc3MgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG4gIC8vIGNvbXBvbmVudERpZENhdGNoKCkge1xuICAvLyAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9lcnJvci81MDAnKTtcbiAgLy8gfVxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlPElQcm9wcywgSVByb3BzPihcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuIiwiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElTdHlsZVByb3BzIHtcbiAgdGhlbWU6IElUaGVtZTtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0Q2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7KHsgc2VsZWN0ZWQsIHRoZW1lIH06IElTdHlsZVByb3BzKSA9PiBzZWxlY3RlZCAmJiBgXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlZWUsIDAgMCA3cHggM3B4ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGNhcmRNYXJnaW4gPSAxMTtcbmV4cG9ydCBjb25zdCBuYW1lTWFyZ2luID0gNztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiBhcyBSZWJhc3NCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgcmVuYW1lUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBzdHlsZWQsIHsgd2l0aFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEJ1dHRvblByb3BzIHtcbiAgYXBwVGhlbWU6IElUaGVtZTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoKHsgYXBwVGhlbWUsIC4uLnByb3BzIH06IElQcm9wcykgPT5cbiAgPFJlYmFzc0J1dHRvbiBiZz17YXBwVGhlbWUuY29sb3JzLnByaW1hcnl9IHsuLi5wcm9wc30gLz4pYFxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGluaXRpYWw7XG4gIH1cbiAgJjpub3QoOmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U8e30sIElQcm9wcz4oXG4gIHdpdGhUaGVtZSxcbiAgcmVuYW1lUHJvcChcInRoZW1lXCIsIFwiYXBwVGhlbWVcIiksXG4pKEJ1dHRvbik7XG4iLCJjb25zdCBkZWZhdWx0RXJyb3JNZXNzYWdlcyA9IHtcbiAgZW1haWw6IFwiRW1haWwgbXVzdCBjb250YWluIGFuICdAJyBhbmQgYSAnLicgdG8gYmUgdmFsaWRcIixcbiAgcmVxdWlyZWQ6IFwiVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiLFxufTtcblxuY29uc3QgUlVMRVM6IElSdWxlID0ge1xuICBlbWFpbDogLy4rQC4rXFwuLisvaSxcbiAgcmVxdWlyZWQ6ICh2YWx1ZSkgPT4gKFxuICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICh0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiIHx8IHZhbHVlID09PSB0cnVlKSAmJlxuICAgICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgdmFsdWUubGVuZ3RoID4gMCkgJiZcbiAgICAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+IDApICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMClcbiAgKSxcbn07XG5cbmludGVyZmFjZSBJUnVsZSB7XG4gIGVtYWlsOiBSZWdFeHA7XG4gIHJlcXVpcmVkOiAodmFsdWU6IGFueSkgPT4gYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElNYXRjaGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0ZXN0OiAodmFsdWU6IGFueSkgPT4gYm9vbGVhbjtcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldE1hdGNoZXIgPSAobmFtZToga2V5b2YoSVJ1bGUpLCBlcnJvck1lc3NhZ2UgPSBkZWZhdWx0RXJyb3JNZXNzYWdlc1tuYW1lXSk6IElNYXRjaGVyID0+IHtcbiAgY29uc3QgcnVsZSA9IFJVTEVTW25hbWVdO1xuXG4gIGlmICghcnVsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gcnVsZSBmb3IgbmFtZSBcIiR7bmFtZX1cIiBkZWZpbmVkYCk7XG4gIH1cblxuICBjb25zdCB0ZXN0ID0gdHlwZW9mIHJ1bGUgPT09IFwiZnVuY3Rpb25cIiA/IHJ1bGUgOiAodmFsdWU6IGFueSkgPT4gcnVsZS50ZXN0KHZhbHVlKTtcblxuICByZXR1cm4geyBuYW1lLCB0ZXN0LCBlcnJvck1lc3NhZ2UgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVZhbGlkYXRlID0gKG1hdGNoZXJzOiBJTWF0Y2hlcltdLCB2YWx1ZTogYW55KSA9PiB7XG4gIGNvbnN0IGludmFsaWRNYXRjaGVyID0gbWF0Y2hlcnMuZmluZCgobWF0Y2hlcikgPT4gIW1hdGNoZXIudGVzdCh2YWx1ZSkpO1xuXG4gIGlmICghaW52YWxpZE1hdGNoZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGludmFsaWRNYXRjaGVyLmVycm9yTWVzc2FnZSB8fCB0cnVlO1xufTtcblxudHlwZSB2YWxpZGF0aW9uID0gQXJyYXk8a2V5b2YoSVJ1bGUpIHwge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyxcbiAgfT47XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWxpZGF0aW9uczogdmFsaWRhdGlvbiA9IFtdKSA9PiAodmFsdWU6IGFueSkgPT4ge1xuICBsZXQgbWF0Y2hlcnM6IElNYXRjaGVyW10gPSBbXTtcblxuICB2YWxpZGF0aW9ucy5mb3JFYWNoKCh2YWxpZGF0aW9uKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRpb24gJiYgdHlwZW9mIHZhbGlkYXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25NYXRjaGVycyA9IGdldE1hdGNoZXIodmFsaWRhdGlvbik7XG5cbiAgICAgIG1hdGNoZXJzID0gbWF0Y2hlcnMuY29uY2F0KHZhbGlkYXRpb25NYXRjaGVycyk7XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uICYmIHR5cGVvZiB2YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCB2YWxpZGF0aW9uTWF0Y2hlcnMgPSBPYmplY3Qua2V5cyh2YWxpZGF0aW9uKS5tYXAoXG4gICAgICAgIChydWxlTmFtZToga2V5b2YoSVJ1bGUpKSA9PiBnZXRNYXRjaGVyKHJ1bGVOYW1lLCB2YWxpZGF0aW9uW3J1bGVOYW1lXSksXG4gICAgICApO1xuXG4gICAgICBtYXRjaGVycyA9IG1hdGNoZXJzLmNvbmNhdCh2YWxpZGF0aW9uTWF0Y2hlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2YWxpZGF0aW9ucyBuZWVkcyB0byBiZSBhbiBhcnJheSBvZiB0eXBlIFsncnVsZSddIG9yIFt7IHJ1bGVOYW1lOiAnZXJyb3JNZXNzYWdlJyB9XVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjcmVhdGVWYWxpZGF0ZShtYXRjaGVycywgdmFsdWUpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgV3JhcHBlZEZpZWxkUHJvcHMgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWVsZElucHV0UHJvcHMge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgV3JhcHBlZEZpZWxkUHJvcHMsIElGaWVsZElucHV0UHJvcHMge31cblxuY29uc3QgRmllbGRJbnB1dCA9ICh7XG4gIGlucHV0LFxuICBuYW1lLFxuICBtZXRhLFxuICAuLi5wcm9wc1xufTogSVByb3BzKSA9PiAoXG4gIDxJbnB1dFxuICAgIHsuLi5pbnB1dH1cbiAgICB7Li4ucHJvcHN9XG4gICAgbmFtZT17bmFtZX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkSW5wdXQ7XG4iLCJjb25zdCByYXZlbiA9ICh3aW5kb3cgYXMgYW55KS5SYXZlbjtcblxuaWYgKHR5cGVvZiByYXZlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuU0VOVFJZX0RTTl9DTElFTlQpIHtcbiAgcmF2ZW4uY29uZmlnKHByb2Nlc3MuZW52LlNFTlRSWV9EU05fQ0xJRU5ULCB7XG4gICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KS5pbnN0YWxsKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvbnRzOiB7XG4gICAgc2FuczogXCJNb250c2VycmF0LCBzYW5zLXNlcmlmXCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgNzY4LFxuICAgIDk5MixcbiAgICAxMjAwXG4gIF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgbm9ybWFsOiA0MDAsXG4gICAgYm9sZDogNjAwXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIGRhcmtHcmV5OiBcIiMyMTIxMjFcIixcbiAgICBlcnJvcjogXCIjZmYzYjNiXCIsXG4gICAgZ3JleTogXCIjNEE0QTRBXCIsXG4gICAgbGlnaHRHcmV5OiBcIiM3MzczNzNcIixcbiAgICBwcmltYXJ5OiBcIiM0M2NlYTJcIixcbiAgICBwcmltYXJ5MjogXCIjMmZkYmFiXCIsXG4gICAgc2Vjb25kYXJ5OiBcIiMzZDlkZmZcIlxuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tIFwiZm91bmQtcmVsYXlcIjtcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9yb3V0aW5nL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmViYXNzUHJvdmlkZXIgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihlbnZpcm9ubWVudCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJlYmFzc1Byb3ZpZGVyXG4gICAgICB0aGVtZT17dGhlbWV9XG4gICAgPlxuICAgICAgPFJvdXRlciBtYXRjaENvbnRleHQ9e3sgc3RvcmUgfX0gcmVzb2x2ZXI9e3Jlc29sdmVyfSAvPlxuICAgIDwvUmViYXNzUHJvdmlkZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmdcIjtcbmltcG9ydCByZW5kZXJOYXYgZnJvbSBcIi4uL25hdi9uYXZMaW5rQ29udGFpbmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25ib2FyZG9yXCIpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkaXYpO1xuXG4vLyByZW5kZXJBcHAoKTtcblxuLy8gY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4vLyAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmJvYXJkb3JcIikgJiZcbi8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNvbmJvYXJkb3JcIikge1xuLy8gICAgIHJlbmRlckFwcCgpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuLy8gICBzdWJ0cmVlOiB0cnVlLFxuLy8gICBjaGlsZExpc3Q6IHRydWUsXG4vLyB9KVxuXG4vLyByZW5kZXJOYXYoKTtcbiIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uOiB7IHRleHQ6IHN0cmluZyB9LCB2YXJpYWJsZXM6IGFueSkgPT5cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBQX1VSTH0vZ3JhcGhxbGAsIHtcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcbiIsIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG5pbXBvcnQgeyBtYWtlUm91dGVDb25maWcsIFJvdXRlIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBkYXNoYm9hcmRSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9kYXNoYm9hcmQvZGFzaGJvYXJkQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBvcmdhbml6YXRpb25zUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBvbmJvYXJkaW5nUHJvY2Vzc1JvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL29uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcmltYXJ5TGF5b3V0Q29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCIgey4uLnByaW1hcnlMYXlvdXRDb250YWluZXJ9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL29uYm9hcmRvclwiIHsuLi5kYXNoYm9hcmRSb3V0ZUNvbmZpZ30+XG4gICAgICA8Um91dGUgey4uLm9yZ2FuaXphdGlvbnNSb3V0ZUNvbmZpZ30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwib3JnYW5pemF0aW9uLzppZC9vbmJvYXJkaW5nUHJvY2Vzc1wiIHsuLi5vbmJvYXJkaW5nUHJvY2Vzc1JvdXRlQ29uZmlnfSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGU+LFxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbm5lY3RlZFJvdXRlciwgY3JlYXRlUmVuZGVyIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBlcnJvcjoge1xuICAgIHN0YXR1czogbnVtYmVyXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7XG4gIHJlbmRlcjogY3JlYXRlUmVuZGVyKHtcbiAgICByZW5kZXJFcnJvcjogKHsgZXJyb3IgfTogSVByb3BzKSA9PiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7ZXJyb3Iuc3RhdHVzID09PSA0MDQgPyAnTm90IGZvdW5kJyA6ICdFcnJvcid9XG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgQWN0aW9ucyBhcyBGYXJjZUFjdGlvbnMsIEhhc2hQcm90b2NvbCwgY3JlYXRlSGlzdG9yeUVuaGFuY2VyLFxuICBxdWVyeU1pZGRsZXdhcmUgfSBmcm9tIFwiZmFyY2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1hdGNoRW5oYW5jZXIsIGZvdW5kUmVkdWNlciBhcyBmb3VuZCwgTWF0Y2hlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlQ29uZmlnXCI7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbiAgcHJvdG9jb2w6IG5ldyBIYXNoUHJvdG9jb2woKSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyID0gbmV3IE1hdGNoZXIocm91dGVDb25maWcpO1xuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihtYXRjaGVyKTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAod2luZG93IGFzIGFueSkud2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZUVuaGFuY2VycyhcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvcm0sXG4gIGZvdW5kLFxufSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBtaWRkbGVXYXJlKTtcblxuc3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcnRhbFJlcGxhY2VyIGZyb20gXCIuLi91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXJcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IERhc2hib2FyZCA9ICh7XG4gIGNoaWxkcmVuLFxufTogSVByb3BzKSA9PiAoXG4gIDxQb3J0YWxSZXBsYWNlciBub2RlPXtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXBvc2l0b3J5LWNvbnRlbnQnKVswXX0+XG4gICAge2NoaWxkcmVufVxuICA8L1BvcnRhbFJlcGxhY2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IERhc2hib2FyZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggYWY5M2JjNmU2MzM1NGU2ZWM1ZjIxMGVkMzQ1M2IzODZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICByZWRpcmVjdFVybD86ID9zdHJpbmdcbnx9O1xuZXhwb3J0IHR5cGUgcHJpbWFyeUxheW91dENvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArJGZyYWdtZW50UmVmczogbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rJHJlZlxufH07XG5leHBvcnQgdHlwZSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnkoXG4gICRyZWRpcmVjdFVybDogU3RyaW5nXG4pIHtcbiAgLi4ubmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rXG59XG5cbmZyYWdtZW50IG5hdkxpbmtDb250YWluZXJfbmF2TGluayBvbiBRdWVyeSB7XG4gIHNldHVwKHJlZGlyZWN0VXJsOiAkcmVkaXJlY3RVcmwpXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicmVkaXJlY3RVcmxcIixcbiAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeShcXG4gICRyZWRpcmVjdFVybDogU3RyaW5nXFxuKSB7XFxuICAuLi5uYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcXG59XFxuXFxuZnJhZ21lbnQgbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rIG9uIFF1ZXJ5IHtcXG4gIHNldHVwKHJlZGlyZWN0VXJsOiAkcmVkaXJlY3RVcmwpXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJuYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJzZXR1cFwiLFxuICAgICAgICBcImFyZ3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMjc5NDM0ZjhkZmEzMzAzN2ZjYmJhYjQ0MTNlOTY0ZGYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy90eXBlc1wiO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4uLy4uL25hdi9uYXZMaW5rQ29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aGVtZTogSVRoZW1lO1xufVxuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRoZW1lLFxuICAuLi5wcm9wc1xufTogSVByb3BzKSA9PiAoXG4gIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbiAgICA8Um9vdCBjb2xvcj17dGhlbWUuY29sb3JzLmdyZXl9PlxuICAgICAgPE5hdkxpbmsgbmF2TGluaz17cHJvcHN9IC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Sb290PlxuICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFByaW1hcnlMYXlvdXQpO1xuIiwiaW1wb3J0IFByaW1hcnlMYXlvdXQgZnJvbSBcIi4vcHJpbWFyeUxheW91dFwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeShcbiAgICAkcmVkaXJlY3RVcmw6IFN0cmluZ1xuICApIHtcbiAgICAuLi5uYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcbiAgfVxuYDtcblxuY29uc3QgUHJpbWFyeUxheW91dENvbnRhaW5lciA9IFByaW1hcnlMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcHJlcGFyZVZhcmlhYmxlczogKCkgPT4gKHtcbiAgICByZWRpcmVjdFVybDogYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9JTIzL29uYm9hcmRvcmBcbiAgfSksXG4gIHF1ZXJ5LFxuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rID0ge3xcbiAgK3NldHVwOiA/c3RyaW5nLFxuICArJHJlZlR5cGU6IG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcIm5hdkxpbmtDb250YWluZXJfbmF2TGlua1wiLFxuICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiUm9vdEFyZ3VtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCJcbiAgICB9XG4gIF0sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcInNldHVwXCIsXG4gICAgICBcImFyZ3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicmVkaXJlY3RVcmxcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9XG4gIF1cbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzFhMmQyYTU5ODdlMjBjNDBiMmY0Yzc1OWUwZWVlMWZjJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IHsgTGluaywgd2l0aFJvdXRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IHsgSU1hdGNoLCBJU3R5bGVQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBtYXRjaDogSU1hdGNoO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSUFuY2hvclByb3BzIGV4dGVuZHMgSVN0eWxlUHJvcHMge1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuY29uc3QgQW5jaG9yID0gc3R5bGVkKExpbmspYFxuICAkeyhwcm9wczogSUFuY2hvclByb3BzKSA9PiBwcm9wcy5zZWxlY3RlZCAmJiAoXG4gICAgYCYucmVwb25hdi1pdGVtLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX0gcmdiKDIyOSwgMjI5LCAyMjkpIHRyYW5zcGFyZW50O1xuICAgIH1gXG4gICl9XG5gO1xuXG5jb25zdCBpZCA9IFwib25ib2FyZG9yLW5hdi1saW5rXCI7XG5cbmNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgcHVibGljIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvb25ib2FyZG9yXCIpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmVwb25hdi1pdGVtLnNlbGVjdGVkOm5vdChbaWQ9JyR7aWR9J10pYCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgbm9kZT17ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlcG9uYXZcIilbMF19PlxuICAgICAgICA8QW5jaG9yXG4gICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgdG89XCIvb25ib2FyZG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJyZXBvbmF2LWl0ZW1cIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZCAmJiBcInNlbGVjdGVkXCIpfVxuICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIG9uYm9hcmRvclxuICAgICAgICA8L0FuY2hvcj5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZMaW5rKTtcbiIsImltcG9ydCBOYXZMaW5rIGZyb20gXCIuL25hdkxpbmtcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50LCBmbGF0dGVuUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBvQXV0aE5hdkxpbmsgZnJvbSBcIi4vb0F1dGhOYXZMaW5rXCI7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuLy8gICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25ib2FyZG9yLW5hdi1saW5rXCIpKSB7XG4vLyAgICAgcmVuZGVyTmF2KCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4vLyAgIHN1YnRyZWU6IHRydWUsXG4vLyAgIGNoaWxkTGlzdDogdHJ1ZSxcbi8vIH0pO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBuYXZMaW5rQ29udGFpbmVyX25hdkxpbmsgb24gUXVlcnkge1xuICAgIHNldHVwKFxuICAgICAgcmVkaXJlY3RVcmw6ICRyZWRpcmVjdFVybFxuICAgIClcbiAgfVxuYDtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNldHVwOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkxpbmtDb250YWluZXIgPSBjb21wb3NlKFxuICBmcmFnbWVudChmcmFnbWVudHMpLFxuICBmbGF0dGVuUHJvcCgnbmF2TGluaycpLFxuICBicmFuY2goXG4gICAgKHByb3BzOiBJUHJvcHMpID0+ICEhcHJvcHMuc2V0dXAsXG4gICAgcmVuZGVyQ29tcG9uZW50KG9BdXRoTmF2TGluayksXG4gICksXG4pKChOYXZMaW5rKSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbmtDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tIFwicmVhY3QtcG9ydGFsXCI7XG5cbmNvbnN0IGlkID0gXCJvbmJvYXJkb3ItbmF2LWxpbmtcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNldHVwOiBzdHJpbmc7XG59XG5cbmNvbnN0IE9BdXRoTmF2TGluayA9ICh7XG4gIHNldHVwLFxufTogSVByb3BzKSA9PiAoXG4gIDxQb3J0YWwgbm9kZT17ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlcG9uYXZcIilbMF19PlxuICAgIDxhXG4gICAgICBpZD17aWR9XG4gICAgICBocmVmPXtzZXR1cH1cbiAgICAgIGNsYXNzTmFtZT1cInJlcG9uYXYtaXRlbVwiXG4gICAgPlxuICAgICAgb25ib2FyZG9yXG4gICAgPC9hPlxuICA8L1BvcnRhbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE9BdXRoTmF2TGluaztcbiIsImltcG9ydCB7IFBvcnRhbCwgUG9ydGFsUHJvcHMgfSBmcm9tIFwicmVhY3QtcG9ydGFsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFBvcnRhbFJlcGxhY2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBvcnRhbFByb3BzPiB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ub2RlKSB7XG4gICAgICB0aGlzLnByb3BzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIG5vZGU9e3RoaXMucHJvcHMubm9kZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWxSZXBsYWNlcjtcbiIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT48dGl0bGU+cGVuY2lsPC90aXRsZT48cGF0aCBkPVwiTTExLjQ0NS4wNTVMMi41IDlINHYxaDF2MWgxdjFoMXYxLjQ5NWw4Ljk0NS04LjkzOWMuNS0yLTIuNS01LTQuNS00LjV6TTYgMTNINXYtMUg0di0xSDN2LTFoLS44NTdMMCAxNmw2LTIuMTQ0elwiIC8+PC9zdmc+O1xufSk7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBzdHlsZXMgPSB7fVxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInN0eWxlc1wiXSk7XG5cbiAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9Pjx0aXRsZT5jcm9zczwvdGl0bGU+PHBhdGggZD1cIk0xMy45NTcgMy40NTdsLTEuNDE0LTEuNDE0TDggNi41ODYgMy40NTcgMi4wNDMgMi4wNDMgMy40NTcgNi41ODYgOGwtNC41NDMgNC41NDMgMS40MTQgMS40MTRMOCA5LjQxNGw0LjU0MyA0LjU0MyAxLjQxNC0xLjQxNEw5LjQxNCA4elwiIC8+PC9zdmc+O1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==