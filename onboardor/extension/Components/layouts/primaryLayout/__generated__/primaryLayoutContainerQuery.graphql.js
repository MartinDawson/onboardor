/**
 * @flow
 * @relayHash b52ff7e7e21861c2595dfda7d4f5107c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type navLinkContainer_navLink$ref = any;
export type primaryLayoutContainerQueryVariables = {||};
export type primaryLayoutContainerQueryResponse = {|
  +$fragmentRefs: navLinkContainer_navLink$ref
|};
export type primaryLayoutContainerQuery = {|
  variables: primaryLayoutContainerQueryVariables,
  response: primaryLayoutContainerQueryResponse,
|};
*/


/*
query primaryLayoutContainerQuery {
  ...navLinkContainer_navLink
}

fragment navLinkContainer_navLink on Query {
  setup
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "primaryLayoutContainerQuery",
  "id": null,
  "text": "query primaryLayoutContainerQuery {\n  ...navLinkContainer_navLink\n}\n\nfragment navLinkContainer_navLink on Query {\n  setup\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "primaryLayoutContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "navLinkContainer_navLink",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "primaryLayoutContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "setup",
        "args": null,
        "storageKey": null
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'b857c175dcdc5650374640ef2fa13f4b';
module.exports = node;
