/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type stepContainer_step$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type pipelineContainer_pipeline$ref: FragmentReference;
export type pipelineContainer_pipeline = {|
  +id: string,
  +onboardingPipelineId: number,
  +name: string,
  +onboardingSteps: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: stepContainer_step$ref,
  |}>,
  +$refType: pipelineContainer_pipeline$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "pipelineContainer_pipeline",
  "type": "OnboardingPipeline",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "onboardingPipelineId",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingSteps",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingStep",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "FragmentSpread",
          "name": "stepContainer_step",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '261fb122ea396ee0bd845865600f6792';
module.exports = node;
