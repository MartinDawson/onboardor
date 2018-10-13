/**
 * @flow
 * @relayHash d0187dcf7aaa888dbd1c3318905b3284
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type memberOnboardingProcessContainer_member$ref = any;
export type memberOnboardingProcessContainerQueryVariables = {|
  memberId: string
|};
export type memberOnboardingProcessContainerQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: memberOnboardingProcessContainer_member$ref
  |}
|};
export type memberOnboardingProcessContainerQuery = {|
  variables: memberOnboardingProcessContainerQueryVariables,
  response: memberOnboardingProcessContainerQueryResponse,
|};
*/


/*
query memberOnboardingProcessContainerQuery(
  $memberId: ID!
) {
  node(id: $memberId) {
    __typename
    ... on Member {
      ...memberOnboardingProcessContainer_member
    }
    id
  }
}

fragment memberOnboardingProcessContainer_member on Member {
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
  organization {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "memberId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "memberId",
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
  "name": "isClosed",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingStepId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "issueNumber",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organization",
  "storageKey": null,
  "args": null,
  "concreteType": "Organization",
  "plural": false,
  "selections": [
    v2,
    v3
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "memberOnboardingProcessContainerQuery",
  "id": null,
  "text": "query memberOnboardingProcessContainerQuery(\n  $memberId: ID!\n) {\n  node(id: $memberId) {\n    __typename\n    ... on Member {\n      ...memberOnboardingProcessContainer_member\n    }\n    id\n  }\n}\n\nfragment memberOnboardingProcessContainer_member on Member {\n  memberId\n  id\n  name\n  onboardingProcess {\n    onboardingProcessId\n    name\n    onboardingPipelines {\n      id\n      ...pipelineContainer_pipeline\n    }\n    closedSteps {\n      id\n      ...stepContainer_step\n    }\n    organization {\n      organizationId\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n  organization {\n    id\n    name\n  }\n}\n",
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
            "type": "Member",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "memberOnboardingProcessContainer_member",
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
            "type": "Member",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "memberId",
                "args": null,
                "storageKey": null
              },
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
                          v4,
                          v5,
                          v3,
                          v6,
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
                      v5,
                      v3,
                      v6,
                      v4,
                      v7
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "organizationId",
                        "args": null,
                        "storageKey": null
                      },
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9de5479016efc507c185311901d96b9';
module.exports = node;
