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
declare export opaque type memberOnboardingProcessContainer_organization$ref: FragmentReference;
export type memberOnboardingProcessContainer_organization = {|
  +name: string,
  +organizationId: number,
  +id: string,
  +member: ?{|
    +memberId: number,
    +id: string,
    +name: string,
    +onboardingProcesses: $ReadOnlyArray<?{|
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
      +organization: ?{|
        +organizationId: number,
        +name: string,
      |},
    |}>,
  |},
  +$refType: memberOnboardingProcessContainer_organization$ref,
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
  "name": "memberOnboardingProcessContainer_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "memberId",
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
      "name": "member",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "memberId",
          "type": "Int"
        }
      ],
      "concreteType": "Member",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "memberId",
          "args": null,
          "storageKey": null
        },
        v2,
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "onboardingProcesses",
          "storageKey": null,
          "args": null,
          "concreteType": "OnboardingProcess",
          "plural": true,
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
              "name": "closedSteps",
              "storageKey": null,
              "args": null,
              "concreteType": "OnboardingStep",
              "plural": true,
              "selections": [
                v2,
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
                v1,
                v0
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '07b47b4c42218449c62af5d9f326d6eb';
module.exports = node;
