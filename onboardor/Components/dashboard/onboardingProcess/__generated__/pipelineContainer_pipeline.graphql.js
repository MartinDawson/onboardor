/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type pipelineContainer_pipeline$ref: FragmentReference;
export type pipelineContainer_pipeline = {|
  +id: string,
  +onboardingPipelineId: number,
  +name: string,
  +onboardingSteps: $ReadOnlyArray<?{|
    +id: string,
    +name: string,
    +description: ?string,
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
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
    v1,
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
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '16784690dc93a1f044f3f0892208b671';
module.exports = node;
