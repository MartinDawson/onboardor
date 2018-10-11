/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type memberOnboardingProcessContainer_member$ref: FragmentReference;
export type memberOnboardingProcessContainer_member = {|
  +name: string,
  +onboardingProcess: {|
    +name: string,
    +onboardingPipelines: $ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: pipelineContainer_pipeline$ref,
    |}>,
    +organization: {|
      +name: string
    |},
  |},
  +$refType: memberOnboardingProcessContainer_member$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "memberOnboardingProcessContainer_member",
  "type": "Member",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingProcess",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingProcess",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "onboardingPipelines",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
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
              "kind": "FragmentSpread",
              "name": "pipelineContainer_pipeline",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "organization",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": [
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f88fa4b4bd957bfa36564db42e132d18';
module.exports = node;
