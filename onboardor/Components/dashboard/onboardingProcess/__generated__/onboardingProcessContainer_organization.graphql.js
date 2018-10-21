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
  +id: string,
  +organizationId: number,
  +name: string,
  +avatarUrl: string,
  +members: $ReadOnlyArray<?{|
    +id: string,
    +memberId: number,
    +avatarUrl: string,
    +name: string,
    +isBeingOnboarded: boolean,
    +onboardingProcess: ?{|
      +id: string
    |},
  |}>,
  +onboardingProcesses: $ReadOnlyArray<?{|
    +id: string,
    +onboardingProcessId: number,
    +name: string,
    +organization: ?{|
      +id: string
    |},
  |}>,
  +onboardingPipelines: $ReadOnlyArray<?{|
    +id: string,
    +onboardingPipelineId: number,
    +onboardingProcess: ?{|
      +id: string
    |},
    +$fragmentRefs: pipelineContainer_pipeline$ref,
  |}>,
  +$refType: onboardingProcessContainer_organization$ref,
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
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
},
v3 = [
  v0
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "onboardingProcess",
  "storageKey": null,
  "args": null,
  "concreteType": "OnboardingProcess",
  "plural": false,
  "selections": v3
};
return {
  "kind": "Fragment",
  "name": "onboardingProcessContainer_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "organizationId",
      "args": null,
      "storageKey": null
    },
    v1,
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "members",
      "storageKey": null,
      "args": null,
      "concreteType": "Member",
      "plural": true,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "memberId",
          "args": null,
          "storageKey": null
        },
        v2,
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isBeingOnboarded",
          "args": null,
          "storageKey": null
        },
        v4
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "onboardingProcesses",
      "storageKey": null,
      "args": null,
      "concreteType": "OnboardingProcess",
      "plural": true,
      "selections": [
        v0,
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
          "name": "organization",
          "storageKey": null,
          "args": null,
          "concreteType": "Organization",
          "plural": false,
          "selections": v3
        }
      ]
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
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "onboardingPipelineId",
          "args": null,
          "storageKey": null
        },
        v4,
        {
          "kind": "FragmentSpread",
          "name": "pipelineContainer_pipeline",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'baadea846709b590de55f4aa2752e688';
module.exports = node;
