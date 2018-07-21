/**
 * @flow
 * @relayHash a549fecf5191a1479ce6d40d4a689c79
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setupCallbackContainerQueryVariables = {|
  code: string,
  state: string,
|};
export type setupCallbackContainerQueryResponse = {|
  +setupCallback: boolean,
|};
*/


/*
query setupCallbackContainerQuery(
  $code: String!
  $state: String!
) {
  setupCallback(code: $code, state: $state)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "code",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "state",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "setupCallback",
    "args": [
      {
        "kind": "Variable",
        "name": "code",
        "variableName": "code",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "state",
        "variableName": "state",
        "type": "String!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "setupCallbackContainerQuery",
  "id": null,
  "text": "query setupCallbackContainerQuery(\n  $code: String!\n  $state: String!\n) {\n  setupCallback(code: $code, state: $state)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setupCallbackContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "setupCallbackContainerQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '5d4ee24c2e6e193a1a6e90ae82972954';
module.exports = node;
