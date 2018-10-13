/**
 * @flow
 * @relayHash d11156730f41e221fc4cb4cb930e08ff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type memberOnboardingProcessContainer_member$ref = any;
type onboardingProcessContainer_organization$ref = any;
export type stepContainerRefetchQueryVariables = {|
  organizationId: string,
  memberId: string,
|};
export type stepContainerRefetchQueryResponse = {|
  +organizationNode: ?{|
    +$fragmentRefs: onboardingProcessContainer_organization$ref
  |},
  +memberNode: ?{|
    +$fragmentRefs: memberOnboardingProcessContainer_member$ref
  |},
|};
export type stepContainerRefetchQuery = {|
  variables: stepContainerRefetchQueryVariables,
  response: stepContainerRefetchQueryResponse,
|};
*/


/*
query stepContainerRefetchQuery(
  $organizationId: ID!
  $memberId: ID!
) {
  organizationNode: node(id: $organizationId) {
    __typename
    ... on Organization {
      ...onboardingProcessContainer_organization
    }
    id
  }
  memberNode: node(id: $memberId) {
    __typename
    ... on Member {
      ...memberOnboardingProcessContainer_member
    }
    id
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
    "name": "organizationId",
    "type": "ID!",
    "defaultValue": null
  },
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
    "variableName": "organizationId",
    "type": "ID!"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "memberId",
    "type": "ID!"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
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
  "name": "organizationId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberId",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingProcessId",
  "args": null,
  "storageKey": null
},
v9 = [
  v4
],
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingPipelineId",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isClosed",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingStepId",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "issueNumber",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organization",
  "storageKey": null,
  "args": null,
  "concreteType": "Organization",
  "plural": false,
  "selections": [
    v4,
    v6
  ]
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "onboardingSteps",
  "storageKey": null,
  "args": null,
  "concreteType": "OnboardingStep",
  "plural": true,
  "selections": [
    v4,
    v11,
    v12,
    v6,
    v13,
    v14
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "stepContainerRefetchQuery",
  "id": null,
  "text": "query stepContainerRefetchQuery(\n  $organizationId: ID!\n  $memberId: ID!\n) {\n  organizationNode: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      ...onboardingProcessContainer_organization\n    }\n    id\n  }\n  memberNode: node(id: $memberId) {\n    __typename\n    ... on Member {\n      ...memberOnboardingProcessContainer_member\n    }\n    id\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  members {\n    id\n    memberId\n    avatarUrl\n    name\n  }\n  onboardingProcesses {\n    id\n    onboardingProcessId\n    name\n    organization {\n      id\n    }\n  }\n  onboardingPipelines {\n    id\n    onboardingPipelineId\n    onboardingProcess {\n      id\n    }\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment memberOnboardingProcessContainer_member on Member {\n  memberId\n  id\n  name\n  onboardingProcess {\n    onboardingProcessId\n    name\n    onboardingPipelines {\n      id\n      ...pipelineContainer_pipeline\n    }\n    closedSteps {\n      id\n      ...stepContainer_step\n    }\n    organization {\n      organizationId\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n  organization {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "stepContainerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "organizationNode",
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
                "name": "onboardingProcessContainer_organization",
                "args": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "memberNode",
        "name": "node",
        "storageKey": null,
        "args": v2,
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
    "name": "stepContainerRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "organizationNode",
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v3,
          v4,
          {
            "kind": "InlineFragment",
            "type": "Organization",
            "selections": [
              v5,
              v6,
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
                  v7,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "avatarUrl",
                    "args": null,
                    "storageKey": null
                  },
                  v6
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
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organization",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": false,
                    "selections": v9
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
                  v10,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingProcess",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingProcess",
                    "plural": false,
                    "selections": v9
                  },
                  v6,
                  v15
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "memberNode",
        "name": "node",
        "storageKey": null,
        "args": v2,
        "concreteType": null,
        "plural": false,
        "selections": [
          v3,
          v4,
          {
            "kind": "InlineFragment",
            "type": "Member",
            "selections": [
              v7,
              v6,
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
                  v6,
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
                      v10,
                      v6,
                      v15
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
                      v12,
                      v6,
                      v13,
                      v11,
                      v14
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
                      v5,
                      v6,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '4348de20e544216d9ebc07392b7625f3';
module.exports = node;
