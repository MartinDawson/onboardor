/**
 * @flow
 * @relayHash 9d53f8c433b6408611ec7a1b9dffc1b5
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
  processId?: ?number,
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
  id
  organizationId
  name
  avatarUrl
  members {
    id
    memberId
    avatarUrl
    name
    onboardingProcesses {
      organization {
        organizationId
        id
      }
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
    onboardingProcesses {
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organizationId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberId",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingProcessId",
  "args": null,
  "storageKey": null
},
v8 = [
  v2
],
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
    v2,
    v10,
    v11,
    v4,
    v12
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addPipelineMutation",
  "id": null,
  "text": "mutation addPipelineMutation(\n  $memberId: Int\n  $input: AddOnboardingPipelineInput!\n) {\n  addPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      ...memberOnboardingProcessContainer_organization\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  id\n  organizationId\n  name\n  avatarUrl\n  members {\n    id\n    memberId\n    avatarUrl\n    name\n    onboardingProcesses {\n      organization {\n        organizationId\n        id\n      }\n      id\n    }\n  }\n  onboardingProcesses {\n    id\n    onboardingProcessId\n    name\n    organization {\n      id\n    }\n  }\n  onboardingPipelines {\n    id\n    onboardingPipelineId\n    onboardingProcess {\n      id\n    }\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment memberOnboardingProcessContainer_organization on Organization {\n  name\n  organizationId\n  id\n  member(id: $memberId) {\n    memberId\n    id\n    name\n    onboardingProcesses {\n      onboardingProcessId\n      name\n      onboardingPipelines {\n        id\n        ...pipelineContainer_pipeline\n      }\n      closedSteps {\n        id\n        ...stepContainer_step\n      }\n      organization {\n        organizationId\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n}\n",
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
              v4,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "Member",
                "plural": true,
                "selections": [
                  v2,
                  v6,
                  v5,
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingProcesses",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingProcess",
                    "plural": true,
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
                          v3,
                          v2
                        ]
                      },
                      v2
                    ]
                  }
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
                  v2,
                  v7,
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organization",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": false,
                    "selections": v8
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
                  v2,
                  v9,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingProcess",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingProcess",
                    "plural": false,
                    "selections": v8
                  },
                  v4,
                  v13
                ]
              },
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
                  v6,
                  v2,
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingProcesses",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingProcess",
                    "plural": true,
                    "selections": [
                      v7,
                      v4,
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
                          v9,
                          v4,
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
                          v2,
                          v11,
                          v4,
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
                          v3,
                          v4,
                          v2
                        ]
                      },
                      v2
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
