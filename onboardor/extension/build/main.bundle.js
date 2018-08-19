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

/***/ "./Components/dashboard/onboardingProcess/__generated__/addOnboardingStepMutation.graphql.js":
/*!***************************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/addOnboardingStepMutation.graphql.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash f9090a124a3ae3a07f05f96e7d04d0e1
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
export type addOnboardingStepMutationVariables = {|
  input: AddOnboardingStepInput
|};
export type addOnboardingStepMutationResponse = {|
  +addOnboardingStep: ?{|
    +pipeline: {|
      +$fragmentRefs: pipelineContainer_pipeline$ref
    |}
  |}
|};
export type addOnboardingStepMutation = {|
  variables: addOnboardingStepMutationVariables,
  response: addOnboardingStepMutationResponse,
|};
*/

/*
mutation addOnboardingStepMutation(
  $input: AddOnboardingStepInput!
) {
  addOnboardingStep(input: $input) {
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
    name
    description
  }
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
    "name": "addOnboardingStepMutation",
    "id": null,
    "text": "mutation addOnboardingStepMutation(\n  $input: AddOnboardingStepInput!\n) {\n  addOnboardingStep(input: $input) {\n    pipeline {\n      ...pipelineContainer_pipeline\n      id\n    }\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    name\n    description\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "addOnboardingStepMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "addOnboardingStep",
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
      "name": "addOnboardingStepMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "addOnboardingStep",
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
    }
  };
}();
// prettier-ignore
node /*: any*/.hash = '57aa5cc357f93db22fb387ff50864e98';
module.exports = node;

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
 * @relayHash 3a5f6a34f51baa283a6988d85788624c
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
    name
    description
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
    "text": "mutation addPipelineMutation(\n  $input: AddOnboardingPipelineInput!\n) {\n  addPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    name\n    description\n  }\n}\n",
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

/***/ "./Components/dashboard/onboardingProcess/__generated__/editPipelineMutation.graphql.js":
/*!**********************************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/__generated__/editPipelineMutation.graphql.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 464846442a90213114c46b75cf90dbc0
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type onboardingProcessContainer_organization$ref = any;
export type EditOnboardingPipelineInput = {
  clientMutationId?: ?string,
  organizationId: number,
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
    name
    description
  }
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
    "text": "mutation editPipelineMutation(\n  $input: EditOnboardingPipelineInput!\n) {\n  editPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    name\n    description\n  }\n}\n",
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
node /*: any*/.hash = 'cfcbd4b05b92aa339df3457745eadaf4';
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
 * @relayHash 393e8fa2c3afd6067041e8c02dd3afb0
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
    name
    description
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
    "text": "query onboardingProcessContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Organization {\n      ...onboardingProcessContainer_organization\n    }\n    id\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    name\n    description\n  }\n}\n",
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
import type { FragmentReference } from "relay-runtime";
declare export opaque type pipelineContainer_pipeline$ref: FragmentReference;
export type pipelineContainer_pipeline = {|
  +id: string,
  +onboardingPipelineId: number,
  +name: string,
  +onboardingSteps: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +description: ?string,
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
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
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
    }, v1, {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingSteps",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingStep",
      "plural": true,
      "selections": [v0, v1, {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      }]
    }]
  };
}();
// prettier-ignore
node /*: any*/.hash = '16784690dc93a1f044f3f0892208b671';
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
 * @relayHash fa57c0fd7e37f2408fa16f8f4e93eeb6
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type onboardingProcessContainer_organization$ref = any;
export type RemoveOnboardingPipelineInput = {
  clientMutationId?: ?string,
  organizationId: number,
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
    name
    description
  }
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
    "text": "mutation removePipelineMutation(\n  $input: RemoveOnboardingPipelineInput!\n) {\n  removePipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    name\n    description\n  }\n}\n",
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
node /*: any*/.hash = '5ce3742dad9ca02bb0860eb96d99e003';
module.exports = node;

/***/ }),

/***/ "./Components/dashboard/onboardingProcess/addOnboardingStepMutation.tsx":
/*!******************************************************************************!*\
  !*** ./Components/dashboard/onboardingProcess/addOnboardingStepMutation.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");

var _relayCompose = __webpack_require__(/*! relay-compose */ "./node_modules/relay-compose/lib/index.js");

var mutation = function mutation() {
  var node = __webpack_require__(/*! ./__generated__/addOnboardingStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/addOnboardingStepMutation.graphql.js");

  if (node.hash && node.hash !== "57aa5cc357f93db22fb387ff50864e98") {
    console.error("The definition of 'addOnboardingStepMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return __webpack_require__(/*! ./__generated__/addOnboardingStepMutation.graphql */ "./Components/dashboard/onboardingProcess/__generated__/addOnboardingStepMutation.graphql.js");
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
      organizationId = _ref.organizationId,
      name = _ref.name;

  var variables = {
    input: {
      id: id,
      organizationId: organizationId,
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
        return _react2.default.createElement(_pipelineContainer2.default, { key: pipeline.id, form: "pipeline_" + i, pipeline: pipeline, organizationId: organization.organizationId });
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PipelineColumn = exports.PipelineColumn = (0, _styledComponents2.default)(_rebass.Column).withConfig({
    displayName: "pipeline__PipelineColumn"
})(["background-color:#F4F4F4;border-radius:4px;margin-left:5px;margin-right:5px;max-width:262px;"]);
var Step = (0, _styledComponents2.default)(_rebass.ButtonTransparent).withConfig({
    displayName: "pipeline__Step"
})(["width:100%;border-radius:4px;text-align:left;margin:5px 0;padding:0;"]);
var IconButton = (0, _styledComponents2.default)(_rebass.ButtonTransparent).withConfig({
    displayName: "pipeline__IconButton"
})(["padding:5px;"]);
var editPipelineValidator = (0, _createFieldValidator2.default)(["required"]);
var onboardingStepValidator = (0, _createFieldValidator2.default)(["required"]);
var Pipeline = function Pipeline(_ref) {
    var togglePipeline = _ref.togglePipeline,
        isEditingPipeline = _ref.isEditingPipeline,
        handleSubmit = _ref.handleSubmit,
        editPipeline = _ref.editPipeline,
        removePipeline = _ref.removePipeline,
        removingNameConfirmValue = _ref.removingNameConfirmValue,
        pipeline = _ref.pipeline,
        addOnboardingStep = _ref.addOnboardingStep,
        isAddingOnboardingStep = _ref.isAddingOnboardingStep,
        toggleOnboardingStep = _ref.toggleOnboardingStep;
    return _react2.default.createElement(PipelineColumn, { key: pipeline.onboardingPipelineId, p: 16 }, _react2.default.createElement(_rebass.Box, { pb: 16 }, _react2.default.createElement(_gridStyled.Flex, { alignItems: "center" }, isEditingPipeline ? _react2.default.createElement("form", { onSubmit: handleSubmit(editPipeline), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "pipelineName", validate: editPipelineValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Edit"), _react2.default.createElement(_button2.default, { type: "button", onClick: togglePipeline }, "Cancel"))) : _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_rebass.Text, { fontWeight: "bold", fontSize: 18 }, pipeline.name), _react2.default.createElement(IconButton, { ml: "auto", onClick: togglePipeline }, _react2.default.createElement(_Pencil2.default, null)), _react2.default.createElement(_reactPortal.PortalWithState, { closeOnEsc: true, closeOnOutsideClick: true }, function (_ref2) {
        var openPortal = _ref2.openPortal,
            closePortal = _ref2.closePortal,
            portal = _ref2.portal;
        return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(IconButton, { onClick: openPortal }, _react2.default.createElement(_cross2.default, null)), portal(_react2.default.createElement(_rebass.Modal, { top: "30%" }, _react2.default.createElement("form", { onSubmit: handleSubmit(removePipeline), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "removingNameConfirm", placeholder: "Type the pipeline name '" + pipeline.name + "' to delete.", mb: 10 }), _react2.default.createElement(_button2.default, { mr: 10, disabled: removingNameConfirmValue !== pipeline.name }, "Remove"), _react2.default.createElement(_button2.default, { type: "button", onClick: closePortal }, "Cancel")))));
    })))), pipeline.onboardingSteps.map(function (step) {
        return _react2.default.createElement(Step, { key: step.id }, _react2.default.createElement(_rebass.Box, { bg: "white", p: 10, br: 4 }, step.name));
    }), isAddingOnboardingStep ? _react2.default.createElement("form", { onSubmit: handleSubmit(addOnboardingStep), action: "" }, _react2.default.createElement(_reduxForm.Field, { component: _fieldInput2.default, name: "onboardingStepName", placeholder: "e.g. Assign a mentor", validate: onboardingStepValidator }), _react2.default.createElement(_rebass.Box, { mt: 10 }, _react2.default.createElement(_button2.default, { mr: 10 }, "Create"), _react2.default.createElement(_button2.default, { type: "button", onClick: toggleOnboardingStep }, "Cancel"))) : _react2.default.createElement(_button2.default, { onClick: toggleOnboardingStep, style: { width: "100%" } }, "Add an onboarding step."));
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

var _addOnboardingStepMutation = __webpack_require__(/*! ./addOnboardingStepMutation */ "./Components/dashboard/onboardingProcess/addOnboardingStepMutation.tsx");

var _addOnboardingStepMutation2 = _interopRequireDefault(_addOnboardingStepMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
    pipeline: function pipeline() {
        var node = __webpack_require__(/*! ./__generated__/pipelineContainer_pipeline.graphql */ "./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js");

        if (node.hash && node.hash !== "16784690dc93a1f044f3f0892208b671") {
            console.error("The definition of 'pipelineContainer_pipeline' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
        }

        return __webpack_require__(/*! ./__generated__/pipelineContainer_pipeline.graphql */ "./Components/dashboard/onboardingProcess/__generated__/pipelineContainer_pipeline.graphql.js");
    }
};
var handlers = {
    removePipeline: function removePipeline(_ref) {
        var pipeline = _ref.pipeline,
            organizationId = _ref.organizationId;
        return function () {
            return (0, _removePipelineMutation2.default)({ id: pipeline.onboardingPipelineId, organizationId: organizationId });
        };
    },
    editPipeline: function editPipeline(_ref2) {
        var pipeline = _ref2.pipeline,
            organizationId = _ref2.organizationId,
            togglePipeline = _ref2.togglePipeline;
        return function (input) {
            (0, _editPipelineMutation2.default)({
                id: pipeline.onboardingPipelineId,
                organizationId: organizationId,
                name: input.pipelineName
            }), togglePipeline();
        };
    },
    addOnboardingStep: function addOnboardingStep(_ref3) {
        var pipeline = _ref3.pipeline,
            toggleOnboardingStep = _ref3.toggleOnboardingStep;
        return function (input) {
            (0, _addOnboardingStepMutation2.default)({
                pipelineId: pipeline.onboardingPipelineId,
                name: input.onboardingStepName
            }), toggleOnboardingStep();
        };
    }
};
var stateHandlers = {
    togglePipeline: function togglePipeline(_ref4) {
        var isEditingPipeline = _ref4.isEditingPipeline;
        return function () {
            return {
                isEditingPipeline: !isEditingPipeline
            };
        };
    },
    toggleOnboardingStep: function toggleOnboardingStep(_ref5) {
        var isAddingOnboardingStep = _ref5.isAddingOnboardingStep;
        return function () {
            return {
                isAddingOnboardingStep: !isAddingOnboardingStep
            };
        };
    }
};
var Component = (0, _recompose.compose)((0, _recompose.withProps)(function (_ref6) {
    var form = _ref6.form;
    return {
        selector: (0, _reduxForm.formValueSelector)(form)
    };
}), (0, _relayCompose.fragment)(fragments), (0, _recompose.withStateHandlers)({
    isEditingPipeline: false,
    isAddingOnboardingStep: false
}, stateHandlers), (0, _recompose.withHandlers)(handlers), (0, _recompose.withProps)(function (_ref7) {
    var pipeline = _ref7.pipeline;
    return {
        initialValues: {
            pipelineName: pipeline.name
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
  var id = _ref.id,
      organizationId = _ref.organizationId;

  var variables = {
    input: {
      id: id,
      organizationId: organizationId
    }
  };
  return (0, _relayCompose.createMutation)(mutation, variables);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9hZGRPbmJvYXJkaW5nU3RlcE11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9hZGRQaXBlbGluZU11dGF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9lZGl0UGlwZWxpbmVNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvX19nZW5lcmF0ZWRfXy9waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL19fZ2VuZXJhdGVkX18vcmVtb3ZlUGlwZWxpbmVNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2FkZE9uYm9hcmRpbmdTdGVwTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2FkZFBpcGVsaW5lTXV0YXRpb24udHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL2VkaXRQaXBlbGluZU11dGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9lbXB0eVBpcGVsaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9lbXB0eVBpcGVsaW5lQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9vbmJvYXJkaW5nUHJvY2Vzcy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3Mvb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL3BpcGVsaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Rhc2hib2FyZC9vbmJvYXJkaW5nUHJvY2Vzcy9waXBlbGluZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb25ib2FyZGluZ1Byb2Nlc3MvcmVtb3ZlUGlwZWxpbmVNdXRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb3JnYW5pemF0aW9ucy9fX2dlbmVyYXRlZF9fL29yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29yZ2FuaXphdGlvbnMvb3JnYW5pemF0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25zQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zZWxlY3Qvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvY3JlYXRlRmllbGRWYWxpZGF0b3IudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9maWVsZElucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9zZXR1cEVycm9yTG9nZ2luZy50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvdXRpbGl0aWVzL3RoZW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvYXBwQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L19fZ2VuZXJhdGVkX18vcHJpbWFyeUxheW91dENvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9uYXYvX19nZW5lcmF0ZWRfXy9uYXZMaW5rQ29udGFpbmVyX25hdkxpbmsuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vQ29tcG9uZW50cy9uYXYvbmF2TGluay50c3giLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL0NvbXBvbmVudHMvbmF2L25hdkxpbmtDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL25hdi9vQXV0aE5hdkxpbmsudHN4Iiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9Db21wb25lbnRzL3V0aWxpdGllcy9wb3J0YWxSZXBsYWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9hc3NldHMvUGVuY2lsLnN2ZyIsIndlYnBhY2s6Ly8vLi93d3dyb290L2Fzc2V0cy9jcm9zcy5zdmciXSwibmFtZXMiOlsibm9kZSIsInYwIiwidjEiLCJ2MiIsInYzIiwiaGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJvYmoiLCJrZXlzIiwidGFyZ2V0IiwiaSIsImluZGV4T2YiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfcmVmIiwic3R5bGVzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTtB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eUJVLElBQXpCLEVBQStCLENBQUMsUUFBRCxDQUEvQixDQUpZOztBQU14QixTQUFPO0FBQUE7QUFBQSw2QkFBSyxPQUFNLDRCQUFYLEVBQXdDLE9BQU0sSUFBOUMsRUFBbUQsUUFBTyxJQUExRCxFQUErRCxTQUFRLFdBQXZFLElBQXVGRSxLQUF2RjtBQUE4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTlGO0FBQWtILDRDQUFNLEdBQUUsc0lBQVI7QUFBbEgsR0FBUDtBQUNELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggZjkwOTBhMTI0YTNhZTNhMDdmMDVmOTZlN2QwNGQwZTFcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIEFkZE9uYm9hcmRpbmdTdGVwSW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBwaXBlbGluZUlkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb24/OiA/c3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIGFkZE9uYm9hcmRpbmdTdGVwTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDogQWRkT25ib2FyZGluZ1N0ZXBJbnB1dFxufH07XG5leHBvcnQgdHlwZSBhZGRPbmJvYXJkaW5nU3RlcE11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArYWRkT25ib2FyZGluZ1N0ZXA6ID97fFxuICAgICtwaXBlbGluZToge3xcbiAgICAgICskZnJhZ21lbnRSZWZzOiBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWZcbiAgICB8fVxuICB8fVxufH07XG5leHBvcnQgdHlwZSBhZGRPbmJvYXJkaW5nU3RlcE11dGF0aW9uID0ge3xcbiAgdmFyaWFibGVzOiBhZGRPbmJvYXJkaW5nU3RlcE11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogYWRkT25ib2FyZGluZ1N0ZXBNdXRhdGlvblJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBhZGRPbmJvYXJkaW5nU3RlcE11dGF0aW9uKFxuICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdTdGVwSW5wdXQhXG4pIHtcbiAgYWRkT25ib2FyZGluZ1N0ZXAoaW5wdXQ6ICRpbnB1dCkge1xuICAgIHBpcGVsaW5lIHtcbiAgICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xuICBpZFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcImFkZE9uYm9hcmRpbmdTdGVwTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBhZGRPbmJvYXJkaW5nU3RlcE11dGF0aW9uKFxcbiAgJGlucHV0OiBBZGRPbmJvYXJkaW5nU3RlcElucHV0IVxcbikge1xcbiAgYWRkT25ib2FyZGluZ1N0ZXAoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBwaXBlbGluZSB7XFxuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIG5hbWVcXG4gICAgZGVzY3JpcHRpb25cXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiYWRkT25ib2FyZGluZ1N0ZXBNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImFkZE9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQWRkT25ib2FyZGluZ1N0ZXBQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImFkZE9uYm9hcmRpbmdTdGVwTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhZGRPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdTdGVwUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGlwZWxpbmVcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdQaXBlbGluZVwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZUlkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc1N2FhNWNjMzU3ZjkzZGIyMmZiMzg3ZmY1MDg2NGU5OCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDNhNWY2YTM0ZjUxYmFhMjgzYTY5ODhkODU3ODg2MjRjXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQgPSB7XG4gIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICBvcmdhbml6YXRpb25JZDogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG59O1xuZXhwb3J0IHR5cGUgYWRkUGlwZWxpbmVNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiBBZGRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dFxufH07XG5leHBvcnQgdHlwZSBhZGRQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArYWRkUGlwZWxpbmU6ID97fFxuICAgICtvcmdhbml6YXRpb246IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZlxuICAgIHx9XG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIGFkZFBpcGVsaW5lTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IGFkZFBpcGVsaW5lTXV0YXRpb25WYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBhZGRQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIGFkZFBpcGVsaW5lTXV0YXRpb24oXG4gICRpbnB1dDogQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4pIHtcbiAgYWRkUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICBvcmdhbml6YXRpb25JZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgIGlkXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgfVxufVxuXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xuICBpZFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIGFkZFBpcGVsaW5lTXV0YXRpb24oXFxuICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxcbikge1xcbiAgYWRkUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBvcmdhbml6YXRpb24ge1xcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XFxuICBvcmdhbml6YXRpb25JZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XFxuICAgIGlkXFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIG5hbWVcXG4gICAgZGVzY3JpcHRpb25cXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiYWRkUGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQWRkT25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImFkZFBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJhZGRQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFkZE9uYm9hcmRpbmdQaXBlbGluZVBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICcyMGI2N2U2OGMzOTkyMGU4MTc2NjMyZTk5MTQzZmUzNSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDQ2NDg0NjQ0MmE5MDIxMzExNGM0NmI3NWNmOTBkYmMwXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgRWRpdE9uYm9hcmRpbmdQaXBlbGluZUlucHV0ID0ge1xuICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcixcbiAgaWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIGVkaXRQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzID0ge3xcbiAgaW5wdXQ6IEVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dFxufH07XG5leHBvcnQgdHlwZSBlZGl0UGlwZWxpbmVNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK2VkaXRQaXBlbGluZTogP3t8XG4gICAgK29yZ2FuaXphdGlvbjoge3xcbiAgICAgICskZnJhZ21lbnRSZWZzOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmXG4gICAgfH1cbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgZWRpdFBpcGVsaW5lTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IGVkaXRQaXBlbGluZU11dGF0aW9uVmFyaWFibGVzLFxuICByZXNwb25zZTogZWRpdFBpcGVsaW5lTXV0YXRpb25SZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gZWRpdFBpcGVsaW5lTXV0YXRpb24oXG4gICRpbnB1dDogRWRpdE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxuKSB7XG4gIGVkaXRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XG4gICAgb3JnYW5pemF0aW9uIHtcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cblxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XG4gIG9yZ2FuaXphdGlvbklkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XG4gICAgaWRcbiAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxuICB9XG59XG5cbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XG4gIGlkXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gIG5hbWVcbiAgb25ib2FyZGluZ1N0ZXBzIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICBkZXNjcmlwdGlvblxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJFZGl0T25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIkVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcImVkaXRQaXBlbGluZU11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gZWRpdFBpcGVsaW5lTXV0YXRpb24oXFxuICAkaW5wdXQ6IEVkaXRPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCFcXG4pIHtcXG4gIGVkaXRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XFxuICAgIG9yZ2FuaXphdGlvbiB7XFxuICAgICAgLi4ub25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXFxuICAgICAgaWRcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcXG4gIG9yZ2FuaXphdGlvbklkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcXG4gICAgaWRcXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcXG4gIGlkXFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1N0ZXBzIHtcXG4gICAgaWRcXG4gICAgbmFtZVxcbiAgICBkZXNjcmlwdGlvblxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJlZGl0UGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImVkaXRQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkVkaXRPbmJvYXJkaW5nUGlwZWxpbmVQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZWRpdFBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJlZGl0UGlwZWxpbmVcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJFZGl0T25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2M1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2NmY2JkNGIwNWI5MmFhMzM5ZGYzNDU3NzQ1ZWFkYWY0Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMzkzZThmYTJjM2FmZDYwNjcwNDFlOGMwMmRkM2FmYjBcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3xcbiAgaWQ6IHN0cmluZ1xufH07XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArbm9kZTogP3t8XG4gICAgKyRmcmFnbWVudFJlZnM6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWZcbiAgfH1cbnx9O1xuZXhwb3J0IHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeSA9IHt8XG4gIHZhcmlhYmxlczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeVZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJRdWVyeShcbiAgJGlkOiBJRCFcbikge1xuICBub2RlKGlkOiAkaWQpIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgLi4uIG9uIE9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICB9XG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gb24gT3JnYW5pemF0aW9uIHtcbiAgb3JnYW5pemF0aW9uSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nUGlwZWxpbmVzIHtcbiAgICBpZFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXG4gIH1cbn1cblxuZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgaWRcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcbiAgbmFtZVxuICBvbmJvYXJkaW5nU3RlcHMge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIGRlc2NyaXB0aW9uXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgIFwidHlwZVwiOiBcIklEIVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaWRcIixcbiAgICBcInR5cGVcIjogXCJJRCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5KFxcbiAgJGlkOiBJRCFcXG4pIHtcXG4gIG5vZGUoaWQ6ICRpZCkge1xcbiAgICBfX3R5cGVuYW1lXFxuICAgIC4uLiBvbiBPcmdhbml6YXRpb24ge1xcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxcbiAgICB9XFxuICAgIGlkXFxuICB9XFxufVxcblxcbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xcbiAgb3JnYW5pemF0aW9uSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xcbiAgICBpZFxcbiAgICAuLi5waXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xcbiAgaWRcXG4gIG9uYm9hcmRpbmdQaXBlbGluZUlkXFxuICBuYW1lXFxuICBvbmJvYXJkaW5nU3RlcHMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIGRlc2NyaXB0aW9uXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJub2RlXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IG51bGwsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIklubGluZUZyYWdtZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibm9kZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBudWxsLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiX190eXBlbmFtZVwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdjIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiSW5saW5lRnJhZ21lbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbklkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nU3RlcHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9uYm9hcmRpbmdTdGVwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZDhkOWUxNDg5NGNhNTI4ZjAxMmQ4Mjg2N2Q4OWEzNmEnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lJHJlZiA9IGFueTtcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuZGVjbGFyZSBleHBvcnQgb3BhcXVlIHR5cGUgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZjogRnJhZ21lbnRSZWZlcmVuY2U7XG5leHBvcnQgdHlwZSBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24gPSB7fFxuICArb3JnYW5pemF0aW9uSWQ6IG51bWJlcixcbiAgK25hbWU6IHN0cmluZyxcbiAgK29uYm9hcmRpbmdQaXBlbGluZXM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICskZnJhZ21lbnRSZWZzOiBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWYsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb24kcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cIixcbiAgXCJ0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJvbmJvYXJkaW5nUGlwZWxpbmVzXCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2YwYzI4MGRkYTQ2Nzg3NjFlY2JkOGI5MDg0YTIzZTUxJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gXCJyZWxheS1ydW50aW1lXCI7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgPSB7fFxuICAraWQ6IHN0cmluZyxcbiAgK29uYm9hcmRpbmdQaXBlbGluZUlkOiBudW1iZXIsXG4gICtuYW1lOiBzdHJpbmcsXG4gICtvbmJvYXJkaW5nU3RlcHM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICtuYW1lOiBzdHJpbmcsXG4gICAgK2Rlc2NyaXB0aW9uOiA/c3RyaW5nLFxuICB8fT4sXG4gICskcmVmVHlwZTogcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUkcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjEgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZVwiLFxuICBcInR5cGVcIjogXCJPbmJvYXJkaW5nUGlwZWxpbmVcIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgdjAsXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm9uYm9hcmRpbmdQaXBlbGluZUlkXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfSxcbiAgICB2MSxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgIHYwLFxuICAgICAgICB2MSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbn0pKCk7XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzE2Nzg0NjkwZGM5M2ExZjA0NGYzZjA4OTIyMDhiNjcxJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggZmE1N2MwZmQ3ZTM3ZjI0MDhmYTE2ZjhmNGU5M2VlYjZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dCA9IHtcbiAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gIG9yZ2FuaXphdGlvbklkOiBudW1iZXIsXG4gIGlkOiBudW1iZXIsXG59O1xuZXhwb3J0IHR5cGUgcmVtb3ZlUGlwZWxpbmVNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiBSZW1vdmVPbmJvYXJkaW5nUGlwZWxpbmVJbnB1dFxufH07XG5leHBvcnQgdHlwZSByZW1vdmVQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArcmVtb3ZlUGlwZWxpbmU6ID97fFxuICAgICtvcmdhbml6YXRpb246IHt8XG4gICAgICArJGZyYWdtZW50UmVmczogb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uJHJlZlxuICAgIHx9XG4gIHx9XG58fTtcbmV4cG9ydCB0eXBlIHJlbW92ZVBpcGVsaW5lTXV0YXRpb24gPSB7fFxuICB2YXJpYWJsZXM6IHJlbW92ZVBpcGVsaW5lTXV0YXRpb25WYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiByZW1vdmVQaXBlbGluZU11dGF0aW9uUmVzcG9uc2UsXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIHJlbW92ZVBpcGVsaW5lTXV0YXRpb24oXG4gICRpbnB1dDogUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4pIHtcbiAgcmVtb3ZlUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIG9yZ2FuaXphdGlvbiB7XG4gICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvbiBvbiBPcmdhbml6YXRpb24ge1xuICBvcmdhbml6YXRpb25JZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdQaXBlbGluZXMge1xuICAgIGlkXG4gICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgfVxufVxuXG5mcmFnbWVudCBwaXBlbGluZUNvbnRhaW5lcl9waXBlbGluZSBvbiBPbmJvYXJkaW5nUGlwZWxpbmUge1xuICBpZFxuICBvbmJvYXJkaW5nUGlwZWxpbmVJZFxuICBuYW1lXG4gIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwicmVtb3ZlUGlwZWxpbmVNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIHJlbW92ZVBpcGVsaW5lTXV0YXRpb24oXFxuICAkaW5wdXQ6IFJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxcbikge1xcbiAgcmVtb3ZlUGlwZWxpbmUoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBvcmdhbml6YXRpb24ge1xcbiAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XFxuICBvcmdhbml6YXRpb25JZFxcbiAgbmFtZVxcbiAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XFxuICAgIGlkXFxuICAgIC4uLnBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHBpcGVsaW5lQ29udGFpbmVyX3BpcGVsaW5lIG9uIE9uYm9hcmRpbmdQaXBlbGluZSB7XFxuICBpZFxcbiAgb25ib2FyZGluZ1BpcGVsaW5lSWRcXG4gIG5hbWVcXG4gIG9uYm9hcmRpbmdTdGVwcyB7XFxuICAgIGlkXFxuICAgIG5hbWVcXG4gICAgZGVzY3JpcHRpb25cXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicmVtb3ZlUGlwZWxpbmVNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInJlbW92ZVBpcGVsaW5lXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUmVtb3ZlT25ib2FyZGluZ1BpcGVsaW5lUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInJlbW92ZVBpcGVsaW5lTXV0YXRpb25cIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJyZW1vdmVQaXBlbGluZVwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZVBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25JZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lc1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiT25ib2FyZGluZ1BpcGVsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1BpcGVsaW5lSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25ib2FyZGluZ1N0ZXBzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJPbmJvYXJkaW5nU3RlcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc1Y2UzNzQyZGFkOWNhMDJiYjA4NjBlYjk2ZDk5ZTAwMyc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5pbXBvcnQgeyBJQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCB9IGZyb20gXCIuL3BpcGVsaW5lXCI7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gYWRkT25ib2FyZGluZ1N0ZXBNdXRhdGlvbihcbiAgICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdTdGVwSW5wdXQhXG4gICkge1xuICAgIGFkZE9uYm9hcmRpbmdTdGVwKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIHBpcGVsaW5lIHtcbiAgICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJTXV0YXRpb25JbnB1dCB7XG4gIHBpcGVsaW5lSWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgcGlwZWxpbmVJZCwgbmFtZSwgZGVzY3JpcHRpb24gfTogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBwaXBlbGluZUlkLFxuICAgICAgbmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gYWRkUGlwZWxpbmVNdXRhdGlvbihcbiAgICAkaW5wdXQ6IEFkZE9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxuICApIHtcbiAgICBhZGRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBvcmdhbml6YXRpb24ge1xuICAgICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0aW9uSW5wdXQge1xuICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IG9yZ2FuaXphdGlvbklkLCBuYW1lIH06IElNdXRhdGlvbklucHV0KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgb3JnYW5pemF0aW9uSWQsXG4gICAgICBuYW1lLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gZWRpdFBpcGVsaW5lTXV0YXRpb24oXG4gICAgJGlucHV0OiBFZGl0T25ib2FyZGluZ1BpcGVsaW5lSW5wdXQhXG4gICkge1xuICAgIGVkaXRQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBvcmdhbml6YXRpb24ge1xuICAgICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0aW9uSW5wdXQge1xuICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlkLCBvcmdhbml6YXRpb25JZCwgbmFtZSB9OiBJTXV0YXRpb25JbnB1dCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIGlkLFxuICAgICAgb3JnYW5pemF0aW9uSWQsXG4gICAgICBuYW1lLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zaGFyZWQvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IEZpZWxkSW5wdXQgZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dFwiO1xuaW1wb3J0IHsgRmllbGQsIEluamVjdGVkRm9ybVByb3BzIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCB7IFBpcGVsaW5lQ29sdW1uIH0gZnJvbSBcIi4vcGlwZWxpbmVcIjtcbmltcG9ydCBjcmVhdGVGaWVsZFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9jcmVhdGVGaWVsZFZhbGlkYXRvclwiO1xuXG5jb25zdCBhZGRQaXBlbGluZVZhbGlkYXRvciA9IGNyZWF0ZUZpZWxkVmFsaWRhdG9yKFtcInJlcXVpcmVkXCJdKTtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEluamVjdGVkRm9ybVByb3BzIHtcbiAgYWRkUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoKSA9PiB2b2lkO1xuICBpc0FkZGluZ1BpcGVsaW5lOiBib29sZWFuO1xufVxuXG5jb25zdCBFbXB0eVBpcGVsaW5lID0gKHtcbiAgdG9nZ2xlUGlwZWxpbmUsXG4gIGlzQWRkaW5nUGlwZWxpbmUsXG4gIGhhbmRsZVN1Ym1pdCxcbiAgYWRkUGlwZWxpbmUsXG59OiBJUHJvcHMpID0+IChcbiAgPFBpcGVsaW5lQ29sdW1uIHB4PXswfT5cbiAgICB7aXNBZGRpbmdQaXBlbGluZSA/IChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYWRkUGlwZWxpbmUpfSBhY3Rpb249XCJcIj5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBpcGVsaW5lIG5hbWVcIlxuICAgICAgICAgIHZhbGlkYXRlPXthZGRQaXBlbGluZVZhbGlkYXRvcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBtdD17MTB9PlxuICAgICAgICAgIDxCdXR0b24gbXI9ezEwfT5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVQaXBlbGluZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgICAgKSA6IChcbiAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlUGlwZWxpbmV9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5BZGQgYSBwaXBlbGluZS48L0J1dHRvbj5cbiAgICApfVxuICA8L1BpcGVsaW5lQ29sdW1uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRW1wdHlQaXBlbGluZTtcbiIsImltcG9ydCBFbXB0eVBpcGVsaW5lIGZyb20gXCIuL2VtcHR5UGlwZWxpbmVcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZUhhbmRsZXJzLCB3aXRoSGFuZGxlcnMgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IGFkZFBpcGVsaW5lTXV0YXRpb24gZnJvbSBcIi4vYWRkUGlwZWxpbmVNdXRhdGlvblwiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpc0FkZGluZ1BpcGVsaW5lOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb3JnYW5pemF0aW9uSWQ6IG51bWJlcjtcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJQWRkUGlwZWxpbmVJbnB1dCB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIGFkZFBpcGVsaW5lOiAoeyBvcmdhbml6YXRpb25JZCwgdG9nZ2xlUGlwZWxpbmUgfTogSVByb3BzKSA9PiAoaW5wdXQ6IElBZGRQaXBlbGluZUlucHV0KSA9PiB7XG4gICAgYWRkUGlwZWxpbmVNdXRhdGlvbih7IG9yZ2FuaXphdGlvbklkLCAuLi5pbnB1dCB9KSxcbiAgICB0b2dnbGVQaXBlbGluZSgpO1xuICB9LFxufTtcblxuY29uc3Qgc3RhdGVIYW5kbGVycyA9IHtcbiAgdG9nZ2xlUGlwZWxpbmU6ICh7IGlzQWRkaW5nUGlwZWxpbmUgfTogSVN0YXRlKSA9PiAoKSA9PiAoe1xuICAgIGlzQWRkaW5nUGlwZWxpbmU6ICFpc0FkZGluZ1BpcGVsaW5lLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKHsgaXNBZGRpbmdQaXBlbGluZTogZmFsc2UgfSwgc3RhdGVIYW5kbGVycyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogXCJhZGRQaXBlbGluZVwiLFxuICB9KSxcbikoRW1wdHlQaXBlbGluZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFRleHQsIFJvdywgQ29sdW1uLCBCb3gsIEJ1dHRvblRyYW5zcGFyZW50LCBNb2RhbCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IElPcmdhbml6YXRpb24gfSBmcm9tIFwiLi4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NoYXJlZC9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgRmllbGRJbnB1dCBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9maWVsZElucHV0XCI7XG5pbXBvcnQgeyBGaWVsZCwgSW5qZWN0ZWRGb3JtUHJvcHMgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gXCIuLi8uLi9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yXCI7XG5pbXBvcnQgQ3Jvc3MgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL2Nyb3NzLnN2Z1wiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi4vLi4vLi4vd3d3cm9vdC9hc3NldHMvUGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJncmlkLXN0eWxlZFwiO1xuaW1wb3J0IHsgUG9ydGFsV2l0aFN0YXRlIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IEVtcHR5UGlwZWxpbmUgZnJvbSBcIi4vZW1wdHlQaXBlbGluZUNvbnRhaW5lclwiO1xuaW1wb3J0IFBpcGVsaW5lIGZyb20gXCIuL3BpcGVsaW5lQ29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJbmplY3RlZEZvcm1Qcm9wcyB7XG4gIG9yZ2FuaXphdGlvbjogSU9yZ2FuaXphdGlvbjtcbiAgYWRkUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHJlbW92ZVBpcGVsaW5lOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgZWRpdFBpcGVsaW5lOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIGlzQWRkaW5nUGlwZWxpbmU6IGJvb2xlYW47XG4gIHJlbW92aW5nTmFtZUNvbmZpcm1WYWx1ZTogc3RyaW5nO1xufVxuXG5jb25zdCBQaXBlbGluZVJvdyA9IHN0eWxlZChSb3cpYFxuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBoZWlnaHQ6IDcwMHB4O1xuYDtcblxuY29uc3QgT25ib2FyZGluZ1Byb2Nlc3MgPSAoe1xuICBvcmdhbml6YXRpb24sXG59OiBJUHJvcHMpID0+IChcbiAgPENvbnRhaW5lciBtYXhXaWR0aD1cIjEwMCVcIj5cbiAgICA8VGV4dCBtdD17MjB9IG1iPXs0MH0gZm9udFNpemU9ezIwfT5cbiAgICAgIDxUZXh0IGlzPVwic3BhblwiIGRpc3BsYXk9XCJpbmxpbmVcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICB7b3JnYW5pemF0aW9uLm5hbWV9XG4gICAgICA8L1RleHQ+IG9uLWJvYXJkaW5nIHByb2Nlc3NcbiAgICA8L1RleHQ+XG4gICAgPFBpcGVsaW5lUm93PlxuICAgICAge29yZ2FuaXphdGlvbi5vbmJvYXJkaW5nUGlwZWxpbmVzLm1hcCgocGlwZWxpbmUsIGkpID0+XG4gICAgICAgIDxQaXBlbGluZVxuICAgICAgICAgIGtleT17cGlwZWxpbmUuaWR9XG4gICAgICAgICAgZm9ybT17YHBpcGVsaW5lXyR7aX1gfVxuICAgICAgICAgIHBpcGVsaW5lPXtwaXBlbGluZX1cbiAgICAgICAgICBvcmdhbml6YXRpb25JZD17b3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbklkfVxuICAgICAgICAvPilcbiAgICAgIH1cbiAgICAgIDxFbXB0eVBpcGVsaW5lIG9yZ2FuaXphdGlvbklkPXtvcmdhbml6YXRpb24ub3JnYW5pemF0aW9uSWR9IC8+XG4gICAgPC9QaXBlbGluZVJvdz5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPbmJvYXJkaW5nUHJvY2VzcztcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHJlbmFtZVByb3AgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgT25ib2FyZGluZ1Byb2Nlc3MgZnJvbSBcIi4vb25ib2FyZGluZ1Byb2Nlc3NcIjtcbmltcG9ydCB7IElPcmdhbml6YXRpb24gfSBmcm9tIFwiLi4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvblwiO1xuaW1wb3J0IHsgZnJhZ21lbnQgfSBmcm9tIFwicmVsYXktY29tcG9zZVwiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IG9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyUXVlcnkoXG4gICAgJGlkOiBJRCFcbiAgKSB7XG4gICAgbm9kZShcbiAgICAgIGlkOiAkaWRcbiAgICApIHtcbiAgICAgIC4uLm9uIE9yZ2FuaXphdGlvbiB7XG4gICAgICAgIC4uLm9uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyX29yZ2FuaXphdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgZnJhZ21lbnRzID0gZ3JhcGhxbGBcbiAgZnJhZ21lbnQgb25ib2FyZGluZ1Byb2Nlc3NDb250YWluZXJfb3JnYW5pemF0aW9uIG9uIE9yZ2FuaXphdGlvbiB7XG4gICAgb3JnYW5pemF0aW9uSWRcbiAgICBuYW1lXG4gICAgb25ib2FyZGluZ1BpcGVsaW5lcyB7XG4gICAgICBpZFxuICAgICAgLi4ucGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmVcbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvcmdhbml6YXRpb246IElPcmdhbml6YXRpb247XG59XG5cblxuY29uc3QgQ29tcG9uZW50ID0gY29tcG9zZShcbiAgcmVuYW1lUHJvcChcIm5vZGVcIiwgXCJvcmdhbml6YXRpb25cIiksXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4pKE9uYm9hcmRpbmdQcm9jZXNzKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQsXG4gIHF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dCwgQ29sdW1uLCBCb3gsIEJ1dHRvblRyYW5zcGFyZW50LCBNb2RhbCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IElPcmdhbml6YXRpb24gfSBmcm9tIFwiLi4vb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3NoYXJlZC9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgRmllbGRJbnB1dCBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9maWVsZElucHV0XCI7XG5pbXBvcnQgeyBGaWVsZCwgSW5qZWN0ZWRGb3JtUHJvcHMgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IENyb3NzIGZyb20gXCIuLi8uLi8uLi93d3dyb290L2Fzc2V0cy9jcm9zcy5zdmdcIjtcbmltcG9ydCBQZW5jaWwgZnJvbSBcIi4uLy4uLy4uL3d3d3Jvb3QvYXNzZXRzL1BlbmNpbC5zdmdcIjtcbmltcG9ydCB7IEZsZXggfSBmcm9tIFwiZ3JpZC1zdHlsZWRcIjtcbmltcG9ydCB7IFBvcnRhbFdpdGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1wb3J0YWxcIjtcbmltcG9ydCBjcmVhdGVGaWVsZFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vc2hhcmVkL2lucHV0cy9jcmVhdGVGaWVsZFZhbGlkYXRvclwiO1xuXG5leHBvcnQgY29uc3QgUGlwZWxpbmVDb2x1bW4gPSBzdHlsZWQoQ29sdW1uKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWF4LXdpZHRoOiAyNjJweDtcbmA7XG5cbmNvbnN0IFN0ZXAgPSBzdHlsZWQoQnV0dG9uVHJhbnNwYXJlbnQpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAwO1xuYDtcblxuY29uc3QgSWNvbkJ1dHRvbiA9IHN0eWxlZChCdXR0b25UcmFuc3BhcmVudClgXG4gIHBhZGRpbmc6IDVweDtcbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBpcGxpbmUge1xuICBpZDogc3RyaW5nO1xuICBvbmJvYXJkaW5nUGlwZWxpbmVJZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG9uYm9hcmRpbmdTdGVwczoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICB9W11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRWRpdFBpcGVsaW5lSW5wdXQge1xuICBwaXBlbGluZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCB7XG4gIG9uYm9hcmRpbmdTdGVwTmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxudHlwZSBGb3JtRGF0YSA9IElFZGl0UGlwZWxpbmVJbnB1dCB8IElBZGRPbmJvYXJkaW5nU3RlcElucHV0O1xuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSW5qZWN0ZWRGb3JtUHJvcHM8Rm9ybURhdGE+IHtcbiAgb3JnYW5pemF0aW9uOiBJT3JnYW5pemF0aW9uO1xuICBhZGRQaXBlbGluZTogKCkgPT4gdm9pZDtcbiAgcmVtb3ZlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIGVkaXRQaXBlbGluZTogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIGlzRWRpdGluZ1BpcGVsaW5lOiBib29sZWFuO1xuICByZW1vdmluZ05hbWVDb25maXJtVmFsdWU6IHN0cmluZztcbiAgcGlwZWxpbmU6IElQaXBsaW5lO1xuICBhZGRPbmJvYXJkaW5nU3RlcDogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlT25ib2FyZGluZ1N0ZXA6ICgpID0+IHZvaWQ7XG4gIGlzQWRkaW5nT25ib2FyZGluZ1N0ZXA6IGJvb2xlYW47XG59XG5cbmNvbnN0IGVkaXRQaXBlbGluZVZhbGlkYXRvciA9IGNyZWF0ZUZpZWxkVmFsaWRhdG9yKFtcInJlcXVpcmVkXCJdKTtcbmNvbnN0IG9uYm9hcmRpbmdTdGVwVmFsaWRhdG9yID0gY3JlYXRlRmllbGRWYWxpZGF0b3IoW1wicmVxdWlyZWRcIl0pO1xuXG5jb25zdCBQaXBlbGluZSA9ICh7XG4gIHRvZ2dsZVBpcGVsaW5lLFxuICBpc0VkaXRpbmdQaXBlbGluZSxcbiAgaGFuZGxlU3VibWl0LFxuICBlZGl0UGlwZWxpbmUsXG4gIHJlbW92ZVBpcGVsaW5lLFxuICByZW1vdmluZ05hbWVDb25maXJtVmFsdWUsXG4gIHBpcGVsaW5lLFxuICBhZGRPbmJvYXJkaW5nU3RlcCxcbiAgaXNBZGRpbmdPbmJvYXJkaW5nU3RlcCxcbiAgdG9nZ2xlT25ib2FyZGluZ1N0ZXAsXG59OiBJUHJvcHMpID0+IChcbiAgPFBpcGVsaW5lQ29sdW1uIGtleT17cGlwZWxpbmUub25ib2FyZGluZ1BpcGVsaW5lSWR9IHA9ezE2fT5cbiAgICA8Qm94IHBiPXsxNn0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIHtpc0VkaXRpbmdQaXBlbGluZSA/IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGVkaXRQaXBlbGluZSl9IGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RmllbGRJbnB1dH1cbiAgICAgICAgICAgICAgbmFtZT1cInBpcGVsaW5lTmFtZVwiXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtlZGl0UGlwZWxpbmVWYWxpZGF0b3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJveCBtdD17MTB9PlxuICAgICAgICAgICAgICA8QnV0dG9uIG1yPXsxMH0+RWRpdDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVQaXBlbGluZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT17MTh9PntwaXBlbGluZS5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gbWw9XCJhdXRvXCIgb25DbGljaz17dG9nZ2xlUGlwZWxpbmV9PlxuICAgICAgICAgICAgICAgIDxQZW5jaWwgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8UG9ydGFsV2l0aFN0YXRlIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljaz5cbiAgICAgICAgICAgICAgeyh7IG9wZW5Qb3J0YWwsIGNsb3NlUG9ydGFsLCBwb3J0YWwgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtvcGVuUG9ydGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q3Jvc3MgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7cG9ydGFsKFxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbCB0b3A9XCIzMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQocmVtb3ZlUGlwZWxpbmUpfSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWVsZElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZW1vdmluZ05hbWVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFR5cGUgdGhlIHBpcGVsaW5lIG5hbWUgJyR7cGlwZWxpbmUubmFtZX0nIHRvIGRlbGV0ZS5gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1iPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBtcj17MTB9IGRpc2FibGVkPXtyZW1vdmluZ05hbWVDb25maXJtVmFsdWUgIT09IHBpcGVsaW5lLm5hbWV9PlJlbW92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZVBvcnRhbH0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Qb3J0YWxXaXRoU3RhdGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICAgIHtwaXBlbGluZS5vbmJvYXJkaW5nU3RlcHMubWFwKChzdGVwKSA9PiAoXG4gICAgICA8U3RlcCBrZXk9e3N0ZXAuaWR9PlxuICAgICAgICA8Qm94IGJnPVwid2hpdGVcIiBwPXsxMH0gYnI9ezR9PlxuICAgICAgICAgIHtzdGVwLm5hbWV9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TdGVwPlxuICAgICkpfVxuICAgIHtpc0FkZGluZ09uYm9hcmRpbmdTdGVwID8gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChhZGRPbmJvYXJkaW5nU3RlcCl9IGFjdGlvbj1cIlwiPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e0ZpZWxkSW5wdXR9XG4gICAgICAgICAgbmFtZT1cIm9uYm9hcmRpbmdTdGVwTmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEFzc2lnbiBhIG1lbnRvclwiXG4gICAgICAgICAgdmFsaWRhdGU9e29uYm9hcmRpbmdTdGVwVmFsaWRhdG9yfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94IG10PXsxMH0+XG4gICAgICAgICAgPEJ1dHRvbiBtcj17MTB9PkNyZWF0ZTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU9uYm9hcmRpbmdTdGVwfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L2Zvcm0+XG4gICAgKSA6IChcbiAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlT25ib2FyZGluZ1N0ZXB9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5BZGQgYW4gb25ib2FyZGluZyBzdGVwLjwvQnV0dG9uPlxuICAgICl9XG4gIDwvUGlwZWxpbmVDb2x1bW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQaXBlbGluZTtcbiIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhIYW5kbGVycywgd2l0aFN0YXRlSGFuZGxlcnMsIHdpdGhQcm9wcywgc2V0UHJvcFR5cGVzIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBmb3JtVmFsdWVTZWxlY3RvciB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XG5pbXBvcnQgeyBJT3JnYW5pemF0aW9uIH0gZnJvbSBcIi4uL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb25cIjtcbmltcG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcInJlbGF5LWNvbXBvc2VcIjtcbmltcG9ydCByZW1vdmVQaXBlbGluZU11dGF0aW9uIGZyb20gXCIuL3JlbW92ZVBpcGVsaW5lTXV0YXRpb25cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBlZGl0UGlwZWxpbmVNdXRhdGlvbiBmcm9tIFwiLi9lZGl0UGlwZWxpbmVNdXRhdGlvblwiO1xuaW1wb3J0IFBpcGVsaW5lLCB7IElFZGl0UGlwZWxpbmVJbnB1dCwgSVBpcGxpbmUsIElBZGRPbmJvYXJkaW5nU3RlcElucHV0IH0gZnJvbSBcIi4vcGlwZWxpbmVcIjtcbmltcG9ydCBhZGRPbmJvYXJkaW5nU3RlcE11dGF0aW9uIGZyb20gXCIuL2FkZE9uYm9hcmRpbmdTdGVwTXV0YXRpb25cIjtcblxuY29uc3QgZnJhZ21lbnRzID0gZ3JhcGhxbGBcbiAgZnJhZ21lbnQgcGlwZWxpbmVDb250YWluZXJfcGlwZWxpbmUgb24gT25ib2FyZGluZ1BpcGVsaW5lIHtcbiAgICBpZFxuICAgIG9uYm9hcmRpbmdQaXBlbGluZUlkXG4gICAgbmFtZVxuICAgIG9uYm9hcmRpbmdTdGVwcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xuICBwaXBlbGluZTogSVBpcGxpbmU7XG4gIGZvcm06IHN0cmluZztcbiAgdG9nZ2xlUGlwZWxpbmU6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZU9uYm9hcmRpbmdTdGVwOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNFZGl0aW5nUGlwZWxpbmU6IGJvb2xlYW47XG4gIGlzQWRkaW5nT25ib2FyZGluZ1N0ZXA6IGJvb2xlYW47XG59XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICByZW1vdmVQaXBlbGluZTogKHsgcGlwZWxpbmUsIG9yZ2FuaXphdGlvbklkIH06IElQcm9wcykgPT4gKCkgPT5cbiAgICByZW1vdmVQaXBlbGluZU11dGF0aW9uKHsgaWQ6IHBpcGVsaW5lLm9uYm9hcmRpbmdQaXBlbGluZUlkLCBvcmdhbml6YXRpb25JZCB9KSxcbiAgZWRpdFBpcGVsaW5lOiAoeyBwaXBlbGluZSwgb3JnYW5pemF0aW9uSWQsIHRvZ2dsZVBpcGVsaW5lIH06IElQcm9wcykgPT4gKGlucHV0OiBJRWRpdFBpcGVsaW5lSW5wdXQpID0+IHtcbiAgICBlZGl0UGlwZWxpbmVNdXRhdGlvbih7XG4gICAgICBpZDogcGlwZWxpbmUub25ib2FyZGluZ1BpcGVsaW5lSWQsXG4gICAgICBvcmdhbml6YXRpb25JZCxcbiAgICAgIG5hbWU6IGlucHV0LnBpcGVsaW5lTmFtZSxcbiAgICB9KSxcbiAgICB0b2dnbGVQaXBlbGluZSgpO1xuICB9LFxuICBhZGRPbmJvYXJkaW5nU3RlcDogKHsgcGlwZWxpbmUsIHRvZ2dsZU9uYm9hcmRpbmdTdGVwIH06IElQcm9wcykgPT4gKGlucHV0OiBJQWRkT25ib2FyZGluZ1N0ZXBJbnB1dCkgPT4ge1xuICAgIGFkZE9uYm9hcmRpbmdTdGVwTXV0YXRpb24oe1xuICAgICAgcGlwZWxpbmVJZDogcGlwZWxpbmUub25ib2FyZGluZ1BpcGVsaW5lSWQsXG4gICAgICBuYW1lOiBpbnB1dC5vbmJvYXJkaW5nU3RlcE5hbWUsXG4gICAgfSksXG4gICAgdG9nZ2xlT25ib2FyZGluZ1N0ZXAoKTtcbiAgfSxcbn07XG5cbmNvbnN0IHN0YXRlSGFuZGxlcnMgPSB7XG4gIHRvZ2dsZVBpcGVsaW5lOiAoeyBpc0VkaXRpbmdQaXBlbGluZSB9OiBJU3RhdGUpID0+ICgpID0+ICh7XG4gICAgaXNFZGl0aW5nUGlwZWxpbmU6ICFpc0VkaXRpbmdQaXBlbGluZSxcbiAgfSksXG4gIHRvZ2dsZU9uYm9hcmRpbmdTdGVwOiAoeyBpc0FkZGluZ09uYm9hcmRpbmdTdGVwIH06IElTdGF0ZSkgPT4gKCkgPT4gKHtcbiAgICBpc0FkZGluZ09uYm9hcmRpbmdTdGVwOiAhaXNBZGRpbmdPbmJvYXJkaW5nU3RlcCxcbiAgfSksXG59O1xuXG5jb25zdCBDb21wb25lbnQgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoKHsgZm9ybSB9OiBJUHJvcHMpID0+ICh7XG4gICAgc2VsZWN0b3I6IGZvcm1WYWx1ZVNlbGVjdG9yKGZvcm0pLFxuICB9KSksXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKHtcbiAgICBpc0VkaXRpbmdQaXBlbGluZTogZmFsc2UsXG4gICAgaXNBZGRpbmdPbmJvYXJkaW5nU3RlcDogZmFsc2UsXG4gIH0sIHN0YXRlSGFuZGxlcnMpLFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuICB3aXRoUHJvcHMoKHsgcGlwZWxpbmUgfTogSVByb3BzKSA9PiAoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIHBpcGVsaW5lTmFtZTogcGlwZWxpbmUubmFtZSxcbiAgICB9LFxuICB9KSksXG4gIHJlZHV4Rm9ybSh7fSksXG4gIGNvbm5lY3QoKHN0YXRlLCB7IHNlbGVjdG9yIH06IGFueSkgPT4gKHtcbiAgICByZW1vdmluZ05hbWVDb25maXJtVmFsdWU6IHNlbGVjdG9yKHN0YXRlLCBcInJlbW92aW5nTmFtZUNvbmZpcm1cIiksXG4gIH0pKSxcbikoUGlwZWxpbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gcmVtb3ZlUGlwZWxpbmVNdXRhdGlvbihcbiAgICAkaW5wdXQ6IFJlbW92ZU9uYm9hcmRpbmdQaXBlbGluZUlucHV0IVxuICApIHtcbiAgICByZW1vdmVQaXBlbGluZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBvcmdhbml6YXRpb24ge1xuICAgICAgICAuLi5vbmJvYXJkaW5nUHJvY2Vzc0NvbnRhaW5lcl9vcmdhbml6YXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11dGF0aW9uSW5wdXQge1xuICBvcmdhbml6YXRpb25JZDogbnVtYmVyO1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBpZCwgb3JnYW5pemF0aW9uSWQgfTogSU11dGF0aW9uSW5wdXQpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBpZCxcbiAgICAgIG9yZ2FuaXphdGlvbklkLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG4iLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDRjZTAwNTQ2ODU0MzdiN2IzYzE3YjU0NTlkYmZjMjg3XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3x8fTtcbmV4cG9ydCB0eXBlIG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK29yZ2FuaXphdGlvbnM6ICRSZWFkT25seUFycmF5PD97fFxuICAgICtpZDogc3RyaW5nLFxuICAgICtuYW1lOiBzdHJpbmcsXG4gICAgK2F2YXRhclVybDogc3RyaW5nLFxuICB8fT5cbnx9O1xuZXhwb3J0IHR5cGUgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5ID0ge3xcbiAgdmFyaWFibGVzOiBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMsXG4gIHJlc3BvbnNlOiBvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlSZXNwb25zZSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5IHtcbiAgb3JnYW5pemF0aW9ucyB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgYXZhdGFyVXJsXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgXCJhbGlhc1wiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcIm9yZ2FuaXphdGlvbnNcIixcbiAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICBcImFyZ3NcIjogbnVsbCxcbiAgICBcImNvbmNyZXRlVHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiYXZhdGFyVXJsXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwib3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgb3JnYW5pemF0aW9uc0NvbnRhaW5lclF1ZXJ5IHtcXG4gIG9yZ2FuaXphdGlvbnMge1xcbiAgICBpZFxcbiAgICBuYW1lXFxuICAgIGF2YXRhclVybFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJvcmdhbml6YXRpb25zQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IHYwXG4gIH1cbn07XG59KSgpO1xuLy8gcHJldHRpZXItaWdub3JlXG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICczMmQxNDgwODk2N2Y5YjA4N2U3MDEyNmZhNzE3YTI5Nic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcImdyaWQtc3R5bGVkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2UsIFN1YmhlYWQsIFRleHQgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgeyBuYW1lTWFyZ2luLCBTZWxlY3RDYXJkIH0gZnJvbSBcIi4uLy4uL3NlbGVjdC9zdHlsZXNcIjtcbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gXCIuLi9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uXCI7XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJUm91dGUge1xuICBvcmdhbml6YXRpb25zOiBJT3JnYW5pemF0aW9uW107XG59XG5cbmNvbnN0IE9yZ2FuaXphdGlvbnMgPSAoe1xuICBvcmdhbml6YXRpb25zLFxuICBtYXRjaCxcbn06IElQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxUZXh0IG15PXszMH0+XG4gICAgICBDaG9vc2UgYW4gb3JnYW5pemF0aW9uXG4gICAgPC9UZXh0PlxuXG4gICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICB7b3JnYW5pemF0aW9ucy5tYXAoKG9yZ2FuaXphdGlvbikgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e29yZ2FuaXphdGlvbi5pZH1cbiAgICAgICAgICAgIHRvPXtgJHttYXRjaC5sb2NhdGlvbi5wYXRobmFtZX0vb3JnYW5pemF0aW9uLyR7b3JnYW5pemF0aW9uLmlkfS9vbmJvYXJkaW5nUHJvY2Vzc2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNlbGVjdENhcmRcbiAgICAgICAgICAgICAgbT17Y2FyZE1hcmdpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZSB3aWR0aD17MjAwfSBzcmM9e29yZ2FuaXphdGlvbi5hdmF0YXJVcmx9IHJhdGlvPXsxfSAvPlxuICAgICAgICAgICAgICA8U3ViaGVhZCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17bmFtZU1hcmdpbn0+e29yZ2FuaXphdGlvbi5uYW1lfTwvU3ViaGVhZD5cbiAgICAgICAgICAgIDwvU2VsZWN0Q2FyZD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L0ZsZXg+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9ucztcbiIsImltcG9ydCB7IFJlZGlyZWN0RXhjZXB0aW9uIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LXJlbGF5XCI7XG5cbmltcG9ydCB7IElSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IE9yZ2FuaXphdGlvbnMgZnJvbSBcIi4vb3JnYW5pemF0aW9uc1wiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IG9yZ2FuaXphdGlvbnNDb250YWluZXJRdWVyeSB7XG4gICAgb3JnYW5pemF0aW9ucyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXZhdGFyVXJsXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogT3JnYW5pemF0aW9ucyxcbiAgcXVlcnksXG4gIHJlbmRlcjogKHJvdXRlOiBJUm91dGUpID0+IHtcbiAgICBpZiAocm91dGUucHJvcHMpIHtcbiAgICAgIGlmIChyb3V0ZS5wcm9wcy5vcmdhbml6YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgUmVkaXJlY3RFeGNlcHRpb24oXG4gICAgICAgICAgYCR7cm91dGUubWF0Y2gubG9jYXRpb24ucGF0aG5hbWV9L29yZ2FuaXphdGlvbi8ke3JvdXRlLnByb3BzLm9yZ2FuaXphdGlvbnNbMF0uaWR9L29uYm9hcmRpbmdQcm9jZXNzYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gPE9yZ2FuaXphdGlvbnMgey4uLnJvdXRlLnByb3BzfSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25zO1xuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY2xhc3MgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG4gIC8vIGNvbXBvbmVudERpZENhdGNoKCkge1xuICAvLyAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9lcnJvci81MDAnKTtcbiAgLy8gfVxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlPElQcm9wcywgSVByb3BzPihcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuIiwiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElTdHlsZVByb3BzIHtcbiAgdGhlbWU6IElUaGVtZTtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0Q2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7KHsgc2VsZWN0ZWQsIHRoZW1lIH06IElTdHlsZVByb3BzKSA9PiBzZWxlY3RlZCAmJiBgXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlZWUsIDAgMCA3cHggM3B4ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGNhcmRNYXJnaW4gPSAxMTtcbmV4cG9ydCBjb25zdCBuYW1lTWFyZ2luID0gNztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiBhcyBSZWJhc3NCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgcmVuYW1lUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBzdHlsZWQsIHsgd2l0aFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIEJ1dHRvblByb3BzIHtcbiAgYXBwVGhlbWU6IElUaGVtZTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoKHsgYXBwVGhlbWUsIC4uLnByb3BzIH06IElQcm9wcykgPT5cbiAgPFJlYmFzc0J1dHRvbiBiZz17YXBwVGhlbWUuY29sb3JzLnByaW1hcnl9IHsuLi5wcm9wc30gLz4pYFxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGluaXRpYWw7XG4gIH1cbiAgJjpub3QoOmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U8e30sIElQcm9wcz4oXG4gIHdpdGhUaGVtZSxcbiAgcmVuYW1lUHJvcChcInRoZW1lXCIsIFwiYXBwVGhlbWVcIiksXG4pKEJ1dHRvbik7XG4iLCJjb25zdCBkZWZhdWx0RXJyb3JNZXNzYWdlcyA9IHtcbiAgZW1haWw6IFwiRW1haWwgbXVzdCBjb250YWluIGFuICdAJyBhbmQgYSAnLicgdG8gYmUgdmFsaWRcIixcbiAgcmVxdWlyZWQ6IFwiVGhpcyBpbnB1dCBpcyByZXF1aXJlZFwiLFxufTtcblxuY29uc3QgUlVMRVM6IElSdWxlID0ge1xuICBlbWFpbDogLy4rQC4rXFwuLisvaSxcbiAgcmVxdWlyZWQ6ICh2YWx1ZSkgPT4gKFxuICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICh0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiIHx8IHZhbHVlID09PSB0cnVlKSAmJlxuICAgICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgdmFsdWUubGVuZ3RoID4gMCkgJiZcbiAgICAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+IDApICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMClcbiAgKSxcbn07XG5cbmludGVyZmFjZSBJUnVsZSB7XG4gIGVtYWlsOiBSZWdFeHA7XG4gIHJlcXVpcmVkOiAodmFsdWU6IGFueSkgPT4gYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElNYXRjaGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0ZXN0OiAodmFsdWU6IGFueSkgPT4gYm9vbGVhbjtcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldE1hdGNoZXIgPSAobmFtZToga2V5b2YoSVJ1bGUpLCBlcnJvck1lc3NhZ2UgPSBkZWZhdWx0RXJyb3JNZXNzYWdlc1tuYW1lXSk6IElNYXRjaGVyID0+IHtcbiAgY29uc3QgcnVsZSA9IFJVTEVTW25hbWVdO1xuXG4gIGlmICghcnVsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gcnVsZSBmb3IgbmFtZSBcIiR7bmFtZX1cIiBkZWZpbmVkYCk7XG4gIH1cblxuICBjb25zdCB0ZXN0ID0gdHlwZW9mIHJ1bGUgPT09IFwiZnVuY3Rpb25cIiA/IHJ1bGUgOiAodmFsdWU6IGFueSkgPT4gcnVsZS50ZXN0KHZhbHVlKTtcblxuICByZXR1cm4geyBuYW1lLCB0ZXN0LCBlcnJvck1lc3NhZ2UgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVZhbGlkYXRlID0gKG1hdGNoZXJzOiBJTWF0Y2hlcltdLCB2YWx1ZTogYW55KSA9PiB7XG4gIGNvbnN0IGludmFsaWRNYXRjaGVyID0gbWF0Y2hlcnMuZmluZCgobWF0Y2hlcikgPT4gIW1hdGNoZXIudGVzdCh2YWx1ZSkpO1xuXG4gIGlmICghaW52YWxpZE1hdGNoZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGludmFsaWRNYXRjaGVyLmVycm9yTWVzc2FnZSB8fCB0cnVlO1xufTtcblxudHlwZSB2YWxpZGF0aW9uID0gQXJyYXk8a2V5b2YoSVJ1bGUpIHwge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyxcbiAgfT47XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWxpZGF0aW9uczogdmFsaWRhdGlvbiA9IFtdKSA9PiAodmFsdWU6IGFueSkgPT4ge1xuICBsZXQgbWF0Y2hlcnM6IElNYXRjaGVyW10gPSBbXTtcblxuICB2YWxpZGF0aW9ucy5mb3JFYWNoKCh2YWxpZGF0aW9uKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRpb24gJiYgdHlwZW9mIHZhbGlkYXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25NYXRjaGVycyA9IGdldE1hdGNoZXIodmFsaWRhdGlvbik7XG5cbiAgICAgIG1hdGNoZXJzID0gbWF0Y2hlcnMuY29uY2F0KHZhbGlkYXRpb25NYXRjaGVycyk7XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uICYmIHR5cGVvZiB2YWxpZGF0aW9uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCB2YWxpZGF0aW9uTWF0Y2hlcnMgPSBPYmplY3Qua2V5cyh2YWxpZGF0aW9uKS5tYXAoXG4gICAgICAgIChydWxlTmFtZToga2V5b2YoSVJ1bGUpKSA9PiBnZXRNYXRjaGVyKHJ1bGVOYW1lLCB2YWxpZGF0aW9uW3J1bGVOYW1lXSksXG4gICAgICApO1xuXG4gICAgICBtYXRjaGVycyA9IG1hdGNoZXJzLmNvbmNhdCh2YWxpZGF0aW9uTWF0Y2hlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2YWxpZGF0aW9ucyBuZWVkcyB0byBiZSBhbiBhcnJheSBvZiB0eXBlIFsncnVsZSddIG9yIFt7IHJ1bGVOYW1lOiAnZXJyb3JNZXNzYWdlJyB9XVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjcmVhdGVWYWxpZGF0ZShtYXRjaGVycywgdmFsdWUpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcInJlYmFzc1wiO1xuaW1wb3J0IHsgV3JhcHBlZEZpZWxkUHJvcHMgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaWVsZElucHV0UHJvcHMge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgV3JhcHBlZEZpZWxkUHJvcHMsIElGaWVsZElucHV0UHJvcHMge31cblxuY29uc3QgRmllbGRJbnB1dCA9ICh7XG4gIGlucHV0LFxuICBuYW1lLFxuICBtZXRhLFxuICAuLi5wcm9wc1xufTogSVByb3BzKSA9PiAoXG4gIDxJbnB1dFxuICAgIHsuLi5pbnB1dH1cbiAgICB7Li4ucHJvcHN9XG4gICAgbmFtZT17bmFtZX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkSW5wdXQ7XG4iLCJjb25zdCByYXZlbiA9ICh3aW5kb3cgYXMgYW55KS5SYXZlbjtcblxuaWYgKHR5cGVvZiByYXZlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuU0VOVFJZX0RTTl9DTElFTlQpIHtcbiAgcmF2ZW4uY29uZmlnKHByb2Nlc3MuZW52LlNFTlRSWV9EU05fQ0xJRU5ULCB7XG4gICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KS5pbnN0YWxsKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZvbnRzOiB7XG4gICAgc2FuczogXCJNb250c2VycmF0LCBzYW5zLXNlcmlmXCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgNzY4LFxuICAgIDk5MixcbiAgICAxMjAwXG4gIF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgbm9ybWFsOiA0MDAsXG4gICAgYm9sZDogNjAwXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIGRhcmtHcmV5OiBcIiMyMTIxMjFcIixcbiAgICBlcnJvcjogXCIjZmYzYjNiXCIsXG4gICAgZ3JleTogXCIjNEE0QTRBXCIsXG4gICAgbGlnaHRHcmV5OiBcIiM3MzczNzNcIixcbiAgICBwcmltYXJ5OiBcIiM0M2NlYTJcIixcbiAgICBwcmltYXJ5MjogXCIjMmZkYmFiXCIsXG4gICAgc2Vjb25kYXJ5OiBcIiMzZDlkZmZcIlxuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tIFwiZm91bmQtcmVsYXlcIjtcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9yb3V0aW5nL3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmViYXNzUHJvdmlkZXIgfSBmcm9tIFwicmViYXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy90aGVtZVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihlbnZpcm9ubWVudCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJlYmFzc1Byb3ZpZGVyXG4gICAgICB0aGVtZT17dGhlbWV9XG4gICAgPlxuICAgICAgPFJvdXRlciBtYXRjaENvbnRleHQ9e3sgc3RvcmUgfX0gcmVzb2x2ZXI9e3Jlc29sdmVyfSAvPlxuICAgIDwvUmViYXNzUHJvdmlkZXI+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vQ29tcG9uZW50cy9zaGFyZWQvc2V0dXBFcnJvckxvZ2dpbmdcIjtcbmltcG9ydCByZW5kZXJOYXYgZnJvbSBcIi4uL25hdi9uYXZMaW5rQ29udGFpbmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25ib2FyZG9yXCIpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkaXYpO1xuXG4vLyByZW5kZXJBcHAoKTtcblxuLy8gY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4vLyAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbmJvYXJkb3JcIikgJiZcbi8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNvbmJvYXJkb3JcIikge1xuLy8gICAgIHJlbmRlckFwcCgpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuLy8gICBzdWJ0cmVlOiB0cnVlLFxuLy8gICBjaGlsZExpc3Q6IHRydWUsXG4vLyB9KVxuXG4vLyByZW5kZXJOYXYoKTtcbiIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tIFwicmVsYXktcnVudGltZVwiO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uOiB7IHRleHQ6IHN0cmluZyB9LCB2YXJpYWJsZXM6IGFueSkgPT5cbiAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBQX1VSTH0vZ3JhcGhxbGAsIHtcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcbiIsIi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG5pbXBvcnQgeyBtYWtlUm91dGVDb25maWcsIFJvdXRlIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBkYXNoYm9hcmRSb3V0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9kYXNoYm9hcmQvZGFzaGJvYXJkQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBvcmdhbml6YXRpb25zUm91dGVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy9kYXNoYm9hcmQvb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBvbmJvYXJkaW5nUHJvY2Vzc1JvdXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvZGFzaGJvYXJkL29uYm9hcmRpbmdQcm9jZXNzL29uYm9hcmRpbmdQcm9jZXNzQ29udGFpbmVyXCI7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcmltYXJ5TGF5b3V0Q29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCIgey4uLnByaW1hcnlMYXlvdXRDb250YWluZXJ9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL29uYm9hcmRvclwiIHsuLi5kYXNoYm9hcmRSb3V0ZUNvbmZpZ30+XG4gICAgICA8Um91dGUgey4uLm9yZ2FuaXphdGlvbnNSb3V0ZUNvbmZpZ30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwib3JnYW5pemF0aW9uLzppZC9vbmJvYXJkaW5nUHJvY2Vzc1wiIHsuLi5vbmJvYXJkaW5nUHJvY2Vzc1JvdXRlQ29uZmlnfSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGU+LFxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbm5lY3RlZFJvdXRlciwgY3JlYXRlUmVuZGVyIH0gZnJvbSBcImZvdW5kXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBlcnJvcjoge1xuICAgIHN0YXR1czogbnVtYmVyXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7XG4gIHJlbmRlcjogY3JlYXRlUmVuZGVyKHtcbiAgICByZW5kZXJFcnJvcjogKHsgZXJyb3IgfTogSVByb3BzKSA9PiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7ZXJyb3Iuc3RhdHVzID09PSA0MDQgPyAnTm90IGZvdW5kJyA6ICdFcnJvcid9XG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IHsgQWN0aW9ucyBhcyBGYXJjZUFjdGlvbnMsIEhhc2hQcm90b2NvbCwgY3JlYXRlSGlzdG9yeUVuaGFuY2VyLFxuICBxdWVyeU1pZGRsZXdhcmUgfSBmcm9tIFwiZmFyY2VcIjtcbmltcG9ydCB7IGNyZWF0ZU1hdGNoRW5oYW5jZXIsIGZvdW5kUmVkdWNlciBhcyBmb3VuZCwgTWF0Y2hlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gXCIuLi9yb3V0aW5nL3JvdXRlQ29uZmlnXCI7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbiAgcHJvdG9jb2w6IG5ldyBIYXNoUHJvdG9jb2woKSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyID0gbmV3IE1hdGNoZXIocm91dGVDb25maWcpO1xuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihtYXRjaGVyKTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAod2luZG93IGFzIGFueSkud2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZUVuaGFuY2VycyhcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvcm0sXG4gIGZvdW5kLFxufSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBtaWRkbGVXYXJlKTtcblxuc3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcnRhbFJlcGxhY2VyIGZyb20gXCIuLi91dGlsaXRpZXMvcG9ydGFsUmVwbGFjZXJcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IERhc2hib2FyZCA9ICh7XG4gIGNoaWxkcmVuLFxufTogSVByb3BzKSA9PiAoXG4gIDxQb3J0YWxSZXBsYWNlciBub2RlPXtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXBvc2l0b3J5LWNvbnRlbnQnKVswXX0+XG4gICAge2NoaWxkcmVufVxuICA8L1BvcnRhbFJlcGxhY2VyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwiaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IERhc2hib2FyZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggYWY5M2JjNmU2MzM1NGU2ZWM1ZjIxMGVkMzQ1M2IzODZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICByZWRpcmVjdFVybD86ID9zdHJpbmdcbnx9O1xuZXhwb3J0IHR5cGUgcHJpbWFyeUxheW91dENvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArJGZyYWdtZW50UmVmczogbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rJHJlZlxufH07XG5leHBvcnQgdHlwZSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnkgPSB7fFxuICB2YXJpYWJsZXM6IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVZhcmlhYmxlcyxcbiAgcmVzcG9uc2U6IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVJlc3BvbnNlLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnkoXG4gICRyZWRpcmVjdFVybDogU3RyaW5nXG4pIHtcbiAgLi4ubmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rXG59XG5cbmZyYWdtZW50IG5hdkxpbmtDb250YWluZXJfbmF2TGluayBvbiBRdWVyeSB7XG4gIHNldHVwKHJlZGlyZWN0VXJsOiAkcmVkaXJlY3RVcmwpXG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicmVkaXJlY3RVcmxcIixcbiAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeShcXG4gICRyZWRpcmVjdFVybDogU3RyaW5nXFxuKSB7XFxuICAuLi5uYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcXG59XFxuXFxuZnJhZ21lbnQgbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rIG9uIFF1ZXJ5IHtcXG4gIHNldHVwKHJlZGlyZWN0VXJsOiAkcmVkaXJlY3RVcmwpXFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJuYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJwcmltYXJ5TGF5b3V0Q29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJzZXR1cFwiLFxuICAgICAgICBcImFyZ3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMjc5NDM0ZjhkZmEzMzAzN2ZjYmJhYjQ0MTNlOTY0ZGYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm9vdCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSBcIi4uLy4uLy4uLy4uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBJVGhlbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQ29tcG9uZW50cy90eXBlc1wiO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSBcIi4uLy4uL25hdi9uYXZMaW5rQ29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aGVtZTogSVRoZW1lO1xufVxuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRoZW1lLFxuICAuLi5wcm9wc1xufTogSVByb3BzKSA9PiAoXG4gIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbiAgICA8Um9vdCBjb2xvcj17dGhlbWUuY29sb3JzLmdyZXl9PlxuICAgICAgPE5hdkxpbmsgbmF2TGluaz17cHJvcHN9IC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Sb290PlxuICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFByaW1hcnlMYXlvdXQpO1xuIiwiaW1wb3J0IFByaW1hcnlMYXlvdXQgZnJvbSBcIi4vcHJpbWFyeUxheW91dFwiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1yZWxheVwiO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IHByaW1hcnlMYXlvdXRDb250YWluZXJRdWVyeShcbiAgICAkcmVkaXJlY3RVcmw6IFN0cmluZ1xuICApIHtcbiAgICAuLi5uYXZMaW5rQ29udGFpbmVyX25hdkxpbmtcbiAgfVxuYDtcblxuY29uc3QgUHJpbWFyeUxheW91dENvbnRhaW5lciA9IFByaW1hcnlMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcHJlcGFyZVZhcmlhYmxlczogKCkgPT4gKHtcbiAgICByZWRpcmVjdFVybDogYCR7bG9jYXRpb24ub3JpZ2lufSR7bG9jYXRpb24ucGF0aG5hbWV9JTIzL29uYm9hcmRvcmBcbiAgfSksXG4gIHF1ZXJ5LFxuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSBcInJlbGF5LXJ1bnRpbWVcIjtcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgbmF2TGlua0NvbnRhaW5lcl9uYXZMaW5rID0ge3xcbiAgK3NldHVwOiA/c3RyaW5nLFxuICArJHJlZlR5cGU6IG5hdkxpbmtDb250YWluZXJfbmF2TGluayRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcIm5hdkxpbmtDb250YWluZXJfbmF2TGlua1wiLFxuICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiUm9vdEFyZ3VtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCJcbiAgICB9XG4gIF0sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcInNldHVwXCIsXG4gICAgICBcImFyZ3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJyZWRpcmVjdFVybFwiLFxuICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicmVkaXJlY3RVcmxcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9XG4gIF1cbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzFhMmQyYTU5ODdlMjBjNDBiMmY0Yzc1OWUwZWVlMWZjJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSBcInJlYWN0LXBvcnRhbFwiO1xuaW1wb3J0IHsgTGluaywgd2l0aFJvdXRlciB9IGZyb20gXCJmb3VuZFwiO1xuaW1wb3J0IHsgSU1hdGNoLCBJU3R5bGVQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBtYXRjaDogSU1hdGNoO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSUFuY2hvclByb3BzIGV4dGVuZHMgSVN0eWxlUHJvcHMge1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuY29uc3QgQW5jaG9yID0gc3R5bGVkKExpbmspYFxuICAkeyhwcm9wczogSUFuY2hvclByb3BzKSA9PiBwcm9wcy5zZWxlY3RlZCAmJiAoXG4gICAgYCYucmVwb25hdi1pdGVtLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX0gcmdiKDIyOSwgMjI5LCAyMjkpIHRyYW5zcGFyZW50O1xuICAgIH1gXG4gICl9XG5gO1xuXG5jb25zdCBpZCA9IFwib25ib2FyZG9yLW5hdi1saW5rXCI7XG5cbmNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgcHVibGljIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvb25ib2FyZG9yXCIpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmVwb25hdi1pdGVtLnNlbGVjdGVkOm5vdChbaWQ9JyR7aWR9J10pYCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWwgbm9kZT17ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlcG9uYXZcIilbMF19PlxuICAgICAgICA8QW5jaG9yXG4gICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgdG89XCIvb25ib2FyZG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJyZXBvbmF2LWl0ZW1cIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZCAmJiBcInNlbGVjdGVkXCIpfVxuICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIG9uYm9hcmRvclxuICAgICAgICA8L0FuY2hvcj5cbiAgICAgIDwvUG9ydGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZMaW5rKTtcbiIsImltcG9ydCBOYXZMaW5rIGZyb20gXCIuL25hdkxpbmtcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtcmVsYXlcIjtcbmltcG9ydCB7IGNvbXBvc2UsIGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50LCBmbGF0dGVuUHJvcCB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBvQXV0aE5hdkxpbmsgZnJvbSBcIi4vb0F1dGhOYXZMaW5rXCI7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCJyZWxheS1jb21wb3NlXCI7XG5cbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuLy8gICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib25ib2FyZG9yLW5hdi1saW5rXCIpKSB7XG4vLyAgICAgcmVuZGVyTmF2KCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG4vLyAgIHN1YnRyZWU6IHRydWUsXG4vLyAgIGNoaWxkTGlzdDogdHJ1ZSxcbi8vIH0pO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBuYXZMaW5rQ29udGFpbmVyX25hdkxpbmsgb24gUXVlcnkge1xuICAgIHNldHVwKFxuICAgICAgcmVkaXJlY3RVcmw6ICRyZWRpcmVjdFVybFxuICAgIClcbiAgfVxuYDtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNldHVwOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkxpbmtDb250YWluZXIgPSBjb21wb3NlKFxuICBmcmFnbWVudChmcmFnbWVudHMpLFxuICBmbGF0dGVuUHJvcCgnbmF2TGluaycpLFxuICBicmFuY2goXG4gICAgKHByb3BzOiBJUHJvcHMpID0+ICEhcHJvcHMuc2V0dXAsXG4gICAgcmVuZGVyQ29tcG9uZW50KG9BdXRoTmF2TGluayksXG4gICksXG4pKChOYXZMaW5rKSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbmtDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tIFwicmVhY3QtcG9ydGFsXCI7XG5cbmNvbnN0IGlkID0gXCJvbmJvYXJkb3ItbmF2LWxpbmtcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNldHVwOiBzdHJpbmc7XG59XG5cbmNvbnN0IE9BdXRoTmF2TGluayA9ICh7XG4gIHNldHVwLFxufTogSVByb3BzKSA9PiAoXG4gIDxQb3J0YWwgbm9kZT17ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlcG9uYXZcIilbMF19PlxuICAgIDxhXG4gICAgICBpZD17aWR9XG4gICAgICBocmVmPXtzZXR1cH1cbiAgICAgIGNsYXNzTmFtZT1cInJlcG9uYXYtaXRlbVwiXG4gICAgPlxuICAgICAgb25ib2FyZG9yXG4gICAgPC9hPlxuICA8L1BvcnRhbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE9BdXRoTmF2TGluaztcbiIsImltcG9ydCB7IFBvcnRhbCwgUG9ydGFsUHJvcHMgfSBmcm9tIFwicmVhY3QtcG9ydGFsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFBvcnRhbFJlcGxhY2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBvcnRhbFByb3BzPiB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ub2RlKSB7XG4gICAgICB0aGlzLnByb3BzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UG9ydGFsIG5vZGU9e3RoaXMucHJvcHMubm9kZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Qb3J0YWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWxSZXBsYWNlcjtcbiIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgc3R5bGVzID0ge31cbiAgfSA9IF9yZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzdHlsZXNcIl0pO1xuXG4gIHJldHVybiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT48dGl0bGU+cGVuY2lsPC90aXRsZT48cGF0aCBkPVwiTTExLjQ0NS4wNTVMMi41IDlINHYxaDF2MWgxdjFoMXYxLjQ5NWw4Ljk0NS04LjkzOWMuNS0yLTIuNS01LTQuNS00LjV6TTYgMTNINXYtMUg0di0xSDN2LTFoLS44NTdMMCAxNmw2LTIuMTQ0elwiIC8+PC9zdmc+O1xufSk7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBzdHlsZXMgPSB7fVxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInN0eWxlc1wiXSk7XG5cbiAgcmV0dXJuIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9Pjx0aXRsZT5jcm9zczwvdGl0bGU+PHBhdGggZD1cIk0xMy45NTcgMy40NTdsLTEuNDE0LTEuNDE0TDggNi41ODYgMy40NTcgMi4wNDMgMi4wNDMgMy40NTcgNi41ODYgOGwtNC41NDMgNC41NDMgMS40MTQgMS40MTRMOCA5LjQxNGw0LjU0MyA0LjU0MyAxLjQxNC0xLjQxNEw5LjQxNCA4elwiIC8+PC9zdmc+O1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==