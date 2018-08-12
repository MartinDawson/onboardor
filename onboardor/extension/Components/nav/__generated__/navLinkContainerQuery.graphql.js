/**
 * @flow
 * @relayHash 21c853de188d3658a7d9a5d4ddf9e6c5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type navLinkContainerQueryVariables = {||};
export type navLinkContainerQueryResponse = {|
  +setup: ?string
|};
export type navLinkContainerQuery = {|
  variables: navLinkContainerQueryVariables,
  response: navLinkContainerQueryResponse,
|};
*/


/*
query navLinkContainerQuery {
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
  "name": "navLinkContainerQuery",
  "id": null,
  "text": "query navLinkContainerQuery {\n  setup\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "navLinkContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "navLinkContainerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3e090ad559ead70d96fccbbb328b7752';
module.exports = node;
