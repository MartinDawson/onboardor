/**
 * @flow
 * @relayHash 977ea2dedac285a7610ade3cedb89df0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type onboardingProcessContainer_organization$ref = any;
export type AddOnboardingProcessInput = {
  clientMutationId?: ?string,
  organizationId: number,
  name: string,
  pipelineIds: $ReadOnlyArray<?number>,
};
export type addOnboardingProcessMutationVariables = {|
  input: AddOnboardingProcessInput
|};
export type addOnboardingProcessMutationResponse = {|
  +addProcess: ?{|
    +organization: {|
      +$fragmentRefs: onboardingProcessContainer_organization$ref
    |}
  |}
|};
export type addOnboardingProcessMutation = {|
  variables: addOnboardingProcessMutationVariables,
  response: addOnboardingProcessMutationResponse,
|};
*/


/*
mutation addOnboardingProcessMutation(
  $input: AddOnboardingProcessInput!
) {
  addProcess(input: $input) {
    organization {
      ...onboardingProcessContainer_organization
      id
    }
  }
}

fragment onboardingProcessContainer_organization on Organization {
  organizationId
  name
  onboardingProcesses {
    id
    ...savedOnboardingProcessContainer_process
  }
  onboardingSteps {
    id
    isClosed
    ...stepContainer_step
  }
  onboardingPipelines {
    id
    onboardingPipelineId
    ...pipelineContainer_pipeline
  }
}

fragment savedOnboardingProcessContainer_process on OnboardingProcess {
  id
  name
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
  issueNumber
  isClosed
  organization {
    id
    name
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    isClosed
    ...stepContainer_step
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddOnboardingProcessInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddOnboardingProcessInput!"
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
},
v4 = [
  v3,
  v2
],
v5 = {
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
      "name": "isClosed",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "onboardingStepId",
      "args": null,
      "storageKey": null
    },
    v2,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "issueNumber",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "organization",
      "storageKey": null,
      "args": null,
      "concreteType": "Organization",
      "plural": false,
      "selections": v4
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addOnboardingProcessMutation",
  "id": null,
  "text": "mutation addOnboardingProcessMutation(\n  $input: AddOnboardingProcessInput!\n) {\n  addProcess(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingProcesses {\n    id\n    ...savedOnboardingProcessContainer_process\n  }\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n  onboardingPipelines {\n    id\n    onboardingPipelineId\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment savedOnboardingProcessContainer_process on OnboardingProcess {\n  id\n  name\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n  organization {\n    id\n    name\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addOnboardingProcessMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addProcess",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingProcessPayload",
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
    "name": "addOnboardingProcessMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addProcess",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingProcessPayload",
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
                "name": "onboardingProcesses",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingProcess",
                "plural": true,
                "selections": v4
              },
              v5,
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
                  v5
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
(node/*: any*/).hash = 'ac9f18fb485e452dcc2baaab5de03ea7';
module.exports = node;
