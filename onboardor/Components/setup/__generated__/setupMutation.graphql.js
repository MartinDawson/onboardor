/**
 * @flow
 * @relayHash e77b3bc441901e99cfc4fd23e41d5280
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SetupInput = {
  clientMutationId?: ?string,
  redirectUrl?: ?string,
};
export type setupMutationVariables = {|
  input: SetupInput
|};
export type setupMutationResponse = {|
  +setup: ?{|
    +oAuthLoginUrl: string
  |}
|};
export type setupMutation = {|
  variables: setupMutationVariables,
  response: setupMutationResponse,
|};
*/


/*
mutation setupMutation(
  $input: SetupInput!
) {
  setup(input: $input) {
    oAuthLoginUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SetupInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "setup",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SetupInput!"
      }
    ],
    "concreteType": "SetupPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "oAuthLoginUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "setupMutation",
  "id": null,
  "text": "mutation setupMutation(\n  $input: SetupInput!\n) {\n  setup(input: $input) {\n    oAuthLoginUrl\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "setupMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd6a4ecb88e0a60bb1ca7e7fd2fbc7bbe';
module.exports = node;
