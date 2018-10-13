/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
type stepContainer_step$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type memberOnboardingProcessContainer_member$ref: FragmentReference;
export type memberOnboardingProcessContainer_member = {|
  +memberId: number,
  +id: string,
  +name: string,
  +onboardingProcess: {|
    +onboardingProcessId: number,
    +name: string,
    +onboardingPipelines: $ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: pipelineContainer_pipeline$ref,
    |}>,
    +closedSteps: $ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: stepContainer_step$ref,
    |}>,
    +organization: {|
      +organizationId: number,
      +name: string,
    |},
  |},
  +$refType: memberOnboardingProcessContainer_member$ref,
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
  "name": "memberOnboardingProcessContainer_member",
  "type": "Member",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "memberId",
      "args": null,
      "storageKey": null
    },
    v0,
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingProcess",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingProcess",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "onboardingProcessId",
          "args": null,
          "storageKey": null
        },
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "onboardingPipelines",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingPipeline",
          "plural": true,
          "selections": [
            v0,
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
          "name": "closedSteps",
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "organizationId",
              "args": null,
              "storageKey": null
            },
            v1
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2da611157f5fdd9caf99008229895a6a';
module.exports = node;
