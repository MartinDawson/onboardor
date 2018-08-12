/**
 * @flow
 * @relayHash ea7444b3bb8c852653f635a83488e3ff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setupContainerQueryVariables = {||};
export type setupContainerQueryResponse = {|
  +setup: ?string
|};
export type setupContainerQuery = {|
  variables: setupContainerQueryVariables,
  response: setupContainerQueryResponse,
|};
*/


/*
query setupContainerQuery {
  setup
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "setup",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "setupContainerQuery",
  "id": null,
  "text": "query setupContainerQuery {\n  setup\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setupContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "setupContainerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ba110782e5a20608e01b761352b8726';
module.exports = node;
