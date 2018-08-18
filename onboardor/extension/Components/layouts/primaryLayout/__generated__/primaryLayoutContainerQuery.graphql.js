/**
 * @flow
 * @relayHash af93bc6e63354e6ec5f210ed3453b386
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type navLinkContainer_navLink$ref = any;
export type primaryLayoutContainerQueryVariables = {|
  redirectUrl?: ?string
|};
export type primaryLayoutContainerQueryResponse = {|
  +$fragmentRefs: navLinkContainer_navLink$ref
|};
export type primaryLayoutContainerQuery = {|
  variables: primaryLayoutContainerQueryVariables,
  response: primaryLayoutContainerQueryResponse,
|};
*/


/*
query primaryLayoutContainerQuery(
  $redirectUrl: String
) {
  ...navLinkContainer_navLink
}

fragment navLinkContainer_navLink on Query {
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "primaryLayoutContainerQuery",
  "id": null,
  "text": "query primaryLayoutContainerQuery(\n  $redirectUrl: String\n) {\n  ...navLinkContainer_navLink\n}\n\nfragment navLinkContainer_navLink on Query {\n  setup(redirectUrl: $redirectUrl)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "primaryLayoutContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
    "argumentDefinitions": v0,
    "selections": [
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '279434f8dfa33037fcbbab4413e964df';
module.exports = node;
