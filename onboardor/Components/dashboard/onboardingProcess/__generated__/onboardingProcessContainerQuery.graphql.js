/**
 * @flow
 * @relayHash 0c34e9fd118a34264e1ec482c5549c29
 */

/* eslint-disable */

'use strict';

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
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
  issueNumber
  organization {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "onboardingProcessContainerQuery",
  "id": null,
  "text": "query onboardingProcessContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Organization {\n      ...onboardingProcessContainer_organization\n    }\n    id\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  onboardingPipelines {\n    id\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  organization {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "onboardingProcessContainerQuery",
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
    "name": "onboardingProcessContainerQuery",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "organizationId",
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "onboardingStepId",
                        "args": null,
                        "storageKey": null
                      },
                      v3,
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
                        "selections": [
                          v3,
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd8d9e14894ca528f012d82867d89a36a';
module.exports = node;
