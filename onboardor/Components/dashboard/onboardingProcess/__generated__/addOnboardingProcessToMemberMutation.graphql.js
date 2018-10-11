/**
 * @flow
 * @relayHash a2dd7a2b3561daaa53688f249cac1637
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddOnboardingProcessToMemberInput = {
  clientMutationId?: ?string,
  memberId: number,
  processId: number,
};
export type addOnboardingProcessToMemberMutationVariables = {|
  input: AddOnboardingProcessToMemberInput
|};
export type addOnboardingProcessToMemberMutationResponse = {|
  +addOnboardingProcessToMember: ?{|
    +member: {|
      +id: string
    |}
  |}
|};
export type addOnboardingProcessToMemberMutation = {|
  variables: addOnboardingProcessToMemberMutationVariables,
  response: addOnboardingProcessToMemberMutationResponse,
|};
*/


/*
mutation addOnboardingProcessToMemberMutation(
  $input: AddOnboardingProcessToMemberInput!
) {
  addOnboardingProcessToMember(input: $input) {
    member {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddOnboardingProcessToMemberInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addOnboardingProcessToMember",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddOnboardingProcessToMemberInput!"
      }
    ],
    "concreteType": "AddOnboardingProcessToMemberPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "member",
        "storageKey": null,
        "args": null,
        "concreteType": "Member",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addOnboardingProcessToMemberMutation",
  "id": null,
  "text": "mutation addOnboardingProcessToMemberMutation(\n  $input: AddOnboardingProcessToMemberInput!\n) {\n  addOnboardingProcessToMember(input: $input) {\n    member {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addOnboardingProcessToMemberMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "addOnboardingProcessToMemberMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '709c58764dbf9310f826b33b6c3bff2d';
module.exports = node;
