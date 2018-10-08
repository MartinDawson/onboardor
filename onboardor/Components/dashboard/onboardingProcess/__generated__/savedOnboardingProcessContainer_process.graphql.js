/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type savedOnboardingProcessContainer_process$ref: FragmentReference;
export type savedOnboardingProcessContainer_process = {|
  +id: string,
  +name: string,
  +$refType: savedOnboardingProcessContainer_process$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "savedOnboardingProcessContainer_process",
  "type": "OnboardingProcess",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '75dac15e89ffa695068845014e7cf827';
module.exports = node;
