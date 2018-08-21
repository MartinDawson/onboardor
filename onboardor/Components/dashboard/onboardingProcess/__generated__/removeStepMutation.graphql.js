/**
 * @flow
 * @relayHash 289785b57b9c1985a568f4012f8cc2b8
 */

/* eslint-disable */

'use strict';

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
