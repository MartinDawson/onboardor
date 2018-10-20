/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type savedOnboardingProcessContainer_organization$ref: FragmentReference;
export type savedOnboardingProcessContainer_organization = {|
  +name: string,
  +organizationId: number,
  +id: string,
  +onboardingProcess: ?{|
    +onboardingProcessId: number,
    +name: string,
    +onboardingPipelines: $ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: pipelineContainer_pipeline$ref,
    |}>,
    +organization: ?{|
      +organizationId: number,
      +name: string,
    |},
  |},
  +$refType: savedOnboardingProcessContainer_organization$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organizationId",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "savedOnboardingProcessContainer_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "processId",
      "type": "Int"
    }
  ],
  "selections": [
    v0,
    v1,
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingProcess",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "processId",
          "type": "Int"
        }
      ],
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
            v2,
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
            v1,
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb9fe1be7adf20e24476c035252151fb';
module.exports = node;
