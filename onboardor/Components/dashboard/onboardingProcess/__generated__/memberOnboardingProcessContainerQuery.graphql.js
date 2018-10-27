/**
 * @flow
 * @relayHash dff501094d5305e5760daba5745e440e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type memberOnboardingProcessContainer_organization$ref = any;
export type memberOnboardingProcessContainerQueryVariables = {|
  organizationId: string,
  memberId: number,
|};
export type memberOnboardingProcessContainerQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: memberOnboardingProcessContainer_organization$ref
  |}
|};
export type memberOnboardingProcessContainerQuery = {|
  variables: memberOnboardingProcessContainerQueryVariables,
  response: memberOnboardingProcessContainerQueryResponse,
|};
*/


/*
query memberOnboardingProcessContainerQuery(
  $organizationId: ID!
  $memberId: Int!
) {
  node(id: $organizationId) {
    __typename
    ... on Organization {
      ...memberOnboardingProcessContainer_organization
    }
    id
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
    "name": "organizationId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "memberId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId",
    "type": "ID!"
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
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organizationId",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isClosed",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingStepId",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "issueNumber",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "memberOnboardingProcessContainerQuery",
  "id": null,
  "text": "query memberOnboardingProcessContainerQuery(\n  $organizationId: ID!\n  $memberId: Int!\n) {\n  node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      ...memberOnboardingProcessContainer_organization\n    }\n    id\n  }\n}\n\nfragment memberOnboardingProcessContainer_organization on Organization {\n  name\n  organizationId\n  id\n  member(id: $memberId) {\n    memberId\n    id\n    name\n    onboardingProcesses {\n      onboardingProcessId\n      name\n      onboardingPipelines {\n        id\n        ...pipelineContainer_pipeline\n      }\n      closedSteps {\n        id\n        ...stepContainer_step\n      }\n      organization {\n        organizationId\n        name\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "memberOnboardingProcessContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Organization",
            "selections": [
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
    "name": "memberOnboardingProcessContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "InlineFragment",
            "type": "Organization",
            "selections": [
              v3,
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "memberId",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  v3,
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
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "onboardingProcessId",
                        "args": null,
                        "storageKey": null
                      },
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
                              v5,
                              v6,
                              v3,
                              v7
                            ]
                          }
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
                          v6,
                          v3,
                          v7,
                          v5
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
                          v4,
                          v3,
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
(node/*: any*/).hash = '6b14a6997fc75df52aa8ea22a6a3f9f3';
module.exports = node;
