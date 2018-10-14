/**
 * @flow
 * @relayHash 1a705cfb18d96a297693cd3688b202cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type memberOnboardingProcessContainer_organization$ref = any;
type onboardingProcessContainer_organization$ref = any;
export type AddOnboardingPipelineInput = {
  clientMutationId?: ?string,
  organizationId: number,
  memberId?: ?number,
  name: string,
};
export type addPipelineMutationVariables = {|
  memberId?: ?number,
  input: AddOnboardingPipelineInput,
|};
export type addPipelineMutationResponse = {|
  +addPipeline: ?{|
    +organization: {|
      +$fragmentRefs: onboardingProcessContainer_organization$ref & memberOnboardingProcessContainer_organization$ref
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
  $memberId: Int
  $input: AddOnboardingPipelineInput!
) {
  addPipeline(input: $input) {
    organization {
      ...onboardingProcessContainer_organization
      ...memberOnboardingProcessContainer_organization
      id
    }
  }
}

fragment onboardingProcessContainer_organization on Organization {
  organizationId
  name
  members {
    id
    memberId
    avatarUrl
    name
    onboardingProcess {
      id
    }
  }
  onboardingProcesses {
    id
    onboardingProcessId
    name
    organization {
      id
    }
  }
  onboardingPipelines {
    id
    onboardingPipelineId
    onboardingProcess {
      id
    }
    ...pipelineContainer_pipeline
  }
}

fragment memberOnboardingProcessContainer_organization on Organization {
  name
  organizationId
  id
  member(id: $memberId) {
    memberId
    id
    name
    onboardingProcess {
      onboardingProcessId
      name
      onboardingPipelines {
        id
        ...pipelineContainer_pipeline
      }
      closedSteps {
        id
        ...stepContainer_step
      }
      organization {
        organizationId
        name
        id
      }
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
    isClosed
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
  issueNumber
  isClosed
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "memberId",
    "type": "Int",
    "defaultValue": null
  },
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
  "name": "organizationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberId",
  "args": null,
  "storageKey": null
},
v6 = [
  v4
],
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "onboardingProcess",
  "storageKey": null,
  "args": null,
  "concreteType": "OnboardingProcess",
  "plural": false,
  "selections": v6
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingProcessId",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingPipelineId",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isClosed",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingStepId",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "issueNumber",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "onboardingSteps",
  "storageKey": null,
  "args": null,
  "concreteType": "OnboardingStep",
  "plural": true,
  "selections": [
    v4,
    v10,
    v11,
    v3,
    v12
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addPipelineMutation",
  "id": null,
  "text": "mutation addPipelineMutation(\n  $memberId: Int\n  $input: AddOnboardingPipelineInput!\n) {\n  addPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      ...memberOnboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  members {\n    id\n    memberId\n    avatarUrl\n    name\n    onboardingProcess {\n      id\n    }\n  }\n  onboardingProcesses {\n    id\n    onboardingProcessId\n    name\n    organization {\n      id\n    }\n  }\n  onboardingPipelines {\n    id\n    onboardingPipelineId\n    onboardingProcess {\n      id\n    }\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment memberOnboardingProcessContainer_organization on Organization {\n  name\n  organizationId\n  id\n  member(id: $memberId) {\n    memberId\n    id\n    name\n    onboardingProcess {\n      onboardingProcessId\n      name\n      onboardingPipelines {\n        id\n        ...pipelineContainer_pipeline\n      }\n      closedSteps {\n        id\n        ...stepContainer_step\n      }\n      organization {\n        organizationId\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n}\n",
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
              },
              {
                "kind": "FragmentSpread",
                "name": "memberOnboardingProcessContainer_organization",
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
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "Member",
                "plural": true,
                "selections": [
                  v4,
                  v5,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "avatarUrl",
                    "args": null,
                    "storageKey": null
                  },
                  v3,
                  v7
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingProcesses",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingProcess",
                "plural": true,
                "selections": [
                  v4,
                  v8,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organization",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": false,
                    "selections": v6
                  }
                ]
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
                  v4,
                  v9,
                  v7,
                  v3,
                  v13
                ]
              },
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "member",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "memberId",
                    "type": "Int"
                  }
                ],
                "concreteType": "Member",
                "plural": false,
                "selections": [
                  v5,
                  v4,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingProcess",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingProcess",
                    "plural": false,
                    "selections": [
                      v8,
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
                          v4,
                          v9,
                          v3,
                          v13
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "closedSteps",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "OnboardingStep",
                        "plural": true,
                        "selections": [
                          v4,
                          v11,
                          v3,
                          v12,
                          v10
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organization",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Organization",
                        "plural": false,
                        "selections": [
                          v2,
                          v3,
                          v4
                        ]
                      },
                      v4
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
(node/*: any*/).hash = '79f2561cd76e380426afe67c0be63a4d';
module.exports = node;
