/**
 * @flow
 * @relayHash fdfdc33f686c6bcbe7736c2eff1190d4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type organizationContainerQueryVariables = {|
  id: string
|};
export type organizationContainerQueryResponse = {|
  +node: ?{|
    +onboardingSteps?: $ReadOnlyArray<?{|
      +step: string
    |}>
  |}
|};
*/


/*
query organizationContainerQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Organization {
      onboardingSteps {
        step
        id
      }
    }
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
  "name": "step",
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
  "operationKind": "query",
  "name": "organizationContainerQuery",
  "id": null,
  "text": "query organizationContainerQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Organization {\n      onboardingSteps {\n        step\n        id\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "organizationContainerQuery",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingSteps",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingStep",
                "plural": true,
                "selections": [
                  v2
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "organizationContainerQuery",
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
          v3,
          {
            "kind": "InlineFragment",
            "type": "Organization",
            "selections": [
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
(node/*: any*/).hash = 'd83f7d52790881a0b791a5057b299a5a';
module.exports = node;
