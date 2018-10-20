/**
 * @flow
 * @relayHash 7bed67399e07efa851b33a316f72839b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type savedOnboardingProcessContainer_organization$ref = any;
export type savedOnboardingProcessContainerQueryVariables = {|
  organizationId: string,
  processId: number,
|};
export type savedOnboardingProcessContainerQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: savedOnboardingProcessContainer_organization$ref
  |}
|};
export type savedOnboardingProcessContainerQuery = {|
  variables: savedOnboardingProcessContainerQueryVariables,
  response: savedOnboardingProcessContainerQueryResponse,
|};
*/


/*
query savedOnboardingProcessContainerQuery(
  $organizationId: ID!
  $processId: Int!
) {
  node(id: $organizationId) {
    __typename
    ... on Organization {
      ...savedOnboardingProcessContainer_organization
    }
    id
  }
}

fragment savedOnboardingProcessContainer_organization on Organization {
  name
  organizationId
  id
  onboardingProcess(id: $processId) {
    onboardingProcessId
    name
    onboardingPipelines {
      id
      ...pipelineContainer_pipeline
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
    "name": "processId",
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "savedOnboardingProcessContainerQuery",
  "id": null,
  "text": "query savedOnboardingProcessContainerQuery(\n  $organizationId: ID!\n  $processId: Int!\n) {\n  node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      ...savedOnboardingProcessContainer_organization\n    }\n    id\n  }\n}\n\nfragment savedOnboardingProcessContainer_organization on Organization {\n  name\n  organizationId\n  id\n  onboardingProcess(id: $processId) {\n    onboardingProcessId\n    name\n    onboardingPipelines {\n      id\n      ...pipelineContainer_pipeline\n    }\n    organization {\n      organizationId\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "savedOnboardingProcessContainerQuery",
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
                "name": "savedOnboardingProcessContainer_organization",
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
    "name": "savedOnboardingProcessContainerQuery",
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
                "name": "onboardingProcess",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "processId",
                    "type": "Int"
                  }
                ],
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
                          v3,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "issueNumber",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f1747bcfea5268415af86473a95c774a';
module.exports = node;
