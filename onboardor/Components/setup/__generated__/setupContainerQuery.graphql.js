/**
 * @flow
 * @relayHash 66faa03c9fe0defe390057e2cf5ed17c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setupContainerQueryVariables = {|
  installationId: number,
|};
export type setupContainerQueryResponse = {|
  +setup: ?boolean,
|};
*/


/*
query setupContainerQuery(
  $installationId: Int!
) {
  setup(installationId: $installationId)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "installationId",
    "type": "Int!",
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
        "name": "installationId",
        "variableName": "installationId",
        "type": "Int!"
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
  "text": "query setupContainerQuery(\n  $installationId: Int!\n) {\n  setup(installationId: $installationId)\n}\n",
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
(node/*: any*/).hash = '9d21e39b0848879e6e76f47c822d29c1';
module.exports = node;
