/**
 * @flow
 * @relayHash aaa7c46df3f987cac9036e2254348092
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveOnboardingProcessFromMemberInput = {
  clientMutationId?: ?string,
  memberId: number,
};
export type removeOnboardingProcessFromMemberMutationVariables = {|
  input: RemoveOnboardingProcessFromMemberInput
|};
export type removeOnboardingProcessFromMemberMutationResponse = {|
  +removeOnboardingProcessFromMember: ?{|
    +member: {|
      +id: string
    |}
  |}
|};
export type removeOnboardingProcessFromMemberMutation = {|
  variables: removeOnboardingProcessFromMemberMutationVariables,
  response: removeOnboardingProcessFromMemberMutationResponse,
|};
*/


/*
mutation removeOnboardingProcessFromMemberMutation(
  $input: RemoveOnboardingProcessFromMemberInput!
) {
  removeOnboardingProcessFromMember(input: $input) {
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
    "type": "RemoveOnboardingProcessFromMemberInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeOnboardingProcessFromMember",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RemoveOnboardingProcessFromMemberInput!"
      }
    ],
    "concreteType": "RemoveOnboardingProcessFromMemberPayload",
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
  "name": "removeOnboardingProcessFromMemberMutation",
  "id": null,
  "text": "mutation removeOnboardingProcessFromMemberMutation(\n  $input: RemoveOnboardingProcessFromMemberInput!\n) {\n  removeOnboardingProcessFromMember(input: $input) {\n    member {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "removeOnboardingProcessFromMemberMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "removeOnboardingProcessFromMemberMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7292d70fbde3d0f2692027f64a905e26';
module.exports = node;
