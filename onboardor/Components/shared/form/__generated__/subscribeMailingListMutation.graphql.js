/**
 * @flow
 * @relayHash 27fab7a7eb7995747c4fb43650bc98be
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubscribeMailingListInput = {
  clientMutationId?: ?string,
  email: string,
  recaptcha: string,
};
export type subscribeMailingListMutationVariables = {|
  input: SubscribeMailingListInput
|};
export type subscribeMailingListMutationResponse = {|
  +subscribeMailingList: ?{|
    +clientMutationId: ?string
  |}
|};
export type subscribeMailingListMutation = {|
  variables: subscribeMailingListMutationVariables,
  response: subscribeMailingListMutationResponse,
|};
*/


/*
mutation subscribeMailingListMutation(
  $input: SubscribeMailingListInput!
) {
  subscribeMailingList(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubscribeMailingListInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "subscribeMailingList",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SubscribeMailingListInput!"
      }
    ],
    "concreteType": "SubscribeMailingListPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "subscribeMailingListMutation",
  "id": null,
  "text": "mutation subscribeMailingListMutation(\n  $input: SubscribeMailingListInput!\n) {\n  subscribeMailingList(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "subscribeMailingListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "subscribeMailingListMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b7774705a522c61eac286b0ba4f46c99';
module.exports = node;
