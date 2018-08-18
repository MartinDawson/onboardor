/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type navLinkContainer_navLink$ref: FragmentReference;
export type navLinkContainer_navLink = {|
  +setup: ?string,
  +$refType: navLinkContainer_navLink$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "navLinkContainer_navLink",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "redirectUrl",
      "type": "String"
    }
  ],
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
};
// prettier-ignore
(node/*: any*/).hash = '1a2d2a5987e20c40b2f4c759e0eee1fc';
module.exports = node;
