/**
 * @flow
 * @relayHash f9090a124a3ae3a07f05f96e7d04d0e1
 */

/* eslint-disable */

'use strict';

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
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addOnboardingStep",
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
    "name": "addOnboardingStepMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addOnboardingStep",
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
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "description",
                    "args": null,
                    "storageKey": null
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
(node/*: any*/).hash = '57aa5cc357f93db22fb387ff50864e98';
module.exports = node;
