/**
 * @flow
 * @relayHash fa57c0fd7e37f2408fa16f8f4e93eeb6
 */

/* eslint-disable */

'use strict';

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
  "text": "mutation removePipelineMutation(\n  $input: RemoveOnboardingPipelineInput!\n) {\n  removePipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    name\n    description\n  }\n}\n",
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
                      v2,
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
