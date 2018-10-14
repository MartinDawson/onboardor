/**
 * @flow
 * @relayHash 6f89264e56492936177fdc0dfcc96728
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setupContainerQueryVariables = {|
  redirectUrl?: ?string
|};
export type setupContainerQueryResponse = {|
  +setup: string
|};
export type setupContainerQuery = {|
  variables: setupContainerQueryVariables,
  response: setupContainerQueryResponse,
|};
*/


/*
query setupContainerQuery(
  $redirectUrl: String
) {
  setup(redirectUrl: $redirectUrl)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "redirectUrl",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "setup",
    "args": [
      {
        "kind": "Variable",
        "name": "redirectUrl",
        "variableName": "redirectUrl",
        "type": "String"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "setupContainerQuery",
  "id": null,
  "text": "query setupContainerQuery(\n  $redirectUrl: String\n) {\n  setup(redirectUrl: $redirectUrl)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setupContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "setupContainerQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e319b7e12fd1523dd872c64e8f1b4b66';
module.exports = node;
