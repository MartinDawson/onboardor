/**
 * @flow
 * @relayHash 4a8cc7341538856564a05320c65b8a4d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SetOnboardingMembersInput = {
  clientMutationId?: ?string,
  memberIds: $ReadOnlyArray<?number>,
};
export type setOnboardingMembersMutationVariables = {|
  input: SetOnboardingMembersInput
|};
export type setOnboardingMembersMutationResponse = {|
  +setOnboardingMembers: ?{|
    +clientMutationId: ?string
  |}
|};
*/


/*
mutation setOnboardingMembersMutation(
  $input: SetOnboardingMembersInput!
) {
  setOnboardingMembers(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SetOnboardingMembersInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "setOnboardingMembers",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SetOnboardingMembersInput!"
      }
    ],
    "concreteType": "SetOnboardingMembersPayload",
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
  "name": "setOnboardingMembersMutation",
  "id": null,
  "text": "mutation setOnboardingMembersMutation(\n  $input: SetOnboardingMembersInput!\n) {\n  setOnboardingMembers(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "setOnboardingMembersMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "setOnboardingMembersMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b342372835c757e8b8f529947a3e620';
module.exports = node;
