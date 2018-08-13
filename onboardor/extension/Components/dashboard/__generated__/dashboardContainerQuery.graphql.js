/**
 * @flow
 * @relayHash d7993d160f35c855766affad4be66ae4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type dashboardContainerQueryVariables = {||};
export type dashboardContainerQueryResponse = {|
  +organizations: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +avatarUrl: string,
  |}>
|};
export type dashboardContainerQuery = {|
  variables: dashboardContainerQueryVariables,
  response: dashboardContainerQueryResponse,
|};
*/


/*
query dashboardContainerQuery {
  organizations {
    id
    name
    avatarUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizations",
    "storageKey": null,
    "args": null,
    "concreteType": "Organization",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "avatarUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "dashboardContainerQuery",
  "id": null,
  "text": "query dashboardContainerQuery {\n  organizations {\n    id\n    name\n    avatarUrl\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "dashboardContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "dashboardContainerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e974bb1898298285443a9e5d2734154f';
module.exports = node;
