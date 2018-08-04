/**
 * @flow
 * @relayHash fca5a1abd0d16286767836c21a82a5b0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateOnboardingProcessInput = {
  clientMutationId?: ?string,
  organizationId: number,
  steps: $ReadOnlyArray<?string>,
};
export type createOnboardingProcessMutationVariables = {|
  input: CreateOnboardingProcessInput
|};
export type createOnboardingProcessMutationResponse = {|
  +createOnboardingProcess: ?{|
    +clientMutationId: ?string
  |}
|};
export type createOnboardingProcessMutation = {|
  variables: createOnboardingProcessMutationVariables,
  response: createOnboardingProcessMutationResponse,
|};
*/


/*
mutation createOnboardingProcessMutation(
  $input: CreateOnboardingProcessInput!
) {
  createOnboardingProcess(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateOnboardingProcessInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createOnboardingProcess",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateOnboardingProcessInput!"
      }
    ],
    "concreteType": "CreateOnboardingProcessPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "createOnboardingProcessMutation",
  "id": null,
  "text": "mutation createOnboardingProcessMutation(\n  $input: CreateOnboardingProcessInput!\n) {\n  createOnboardingProcess(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "createOnboardingProcessMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "createOnboardingProcessMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '674123a7d65d0239165e40216dc0dbea';
module.exports = node;
