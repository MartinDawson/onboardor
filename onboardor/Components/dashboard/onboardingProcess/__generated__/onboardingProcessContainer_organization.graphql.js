/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type pipelineContainer_pipeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type onboardingProcessContainer_organization$ref: FragmentReference;
export type onboardingProcessContainer_organization = {|
  +organizationId: number,
  +name: string,
  +onboardingPipelines: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: pipelineContainer_pipeline$ref,
  |}>,
  +$refType: onboardingProcessContainer_organization$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "onboardingProcessContainer_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "organizationId",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f0c280dda4678761ecbd8b9084a23e51';
module.exports = node;
