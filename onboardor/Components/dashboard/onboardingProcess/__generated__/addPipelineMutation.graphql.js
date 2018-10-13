/**
 * @flow
 * @relayHash 1807cb4e133c183510d5f865d7be2ed0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type memberOnboardingProcessContainer_member$ref = any;
type onboardingProcessContainer_organization$ref = any;
export type AddOnboardingPipelineInput = {
  clientMutationId?: ?string,
  organizationId: number,
  memberId?: ?number,
  name: string,
};
export type addPipelineMutationVariables = {|
  input: AddOnboardingPipelineInput
|};
export type addPipelineMutationResponse = {|
  +addPipeline: ?{|
    +organization: {|
      +$fragmentRefs: onboardingProcessContainer_organization$ref
    |},
    +member: ?{|
      +$fragmentRefs: memberOnboardingProcessContainer_member$ref
    |},
  |}
|};
export type addPipelineMutation = {|
  variables: addPipelineMutationVariables,
  response: addPipelineMutationResponse,
|};
*/


/*
mutation addPipelineMutation(
  $input: AddOnboardingPipelineInput!
) {
  addPipeline(input: $input) {
    organization {
      ...onboardingProcessContainer_organization
      id
    }
    member {
      ...memberOnboardingProcessContainer_member
      id
    }
  }
}

fragment onboardingProcessContainer_organization on Organization {
  organizationId
  name
  members {
    id
    memberId
    avatarUrl
    name
  }
  onboardingProcesses {
    id
    onboardingProcessId
    name
    organization {
      id
    }
  }
  onboardingPipelines {
    id
    onboardingPipelineId
    onboardingProcess {
      id
    }
    ...pipelineContainer_pipeline
  }
}

fragment memberOnboardingProcessContainer_member on Member {
  memberId
  id
  name
  onboardingProcess {
    onboardingProcessId
    name
    onboardingPipelines {
      id
      ...pipelineContainer_pipeline
    }
    closedSteps {
      id
      ...stepContainer_step
    }
    organization {
      organizationId
      name
      id
    }
    id
  }
}

fragment pipelineContainer_pipeline on OnboardingPipeline {
  id
  onboardingPipelineId
  name
  onboardingSteps {
    id
    isClosed
    ...stepContainer_step
  }
}

fragment stepContainer_step on OnboardingStep {
  onboardingStepId
  name
  issueNumber
  isClosed
  organization {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddOnboardingPipelineInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddOnboardingPipelineInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "organizationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingProcessId",
  "args": null,
  "storageKey": null
},
v7 = [
  v4
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingPipelineId",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isClosed",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "onboardingStepId",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "issueNumber",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "organization",
  "storageKey": null,
  "args": null,
  "concreteType": "Organization",
  "plural": false,
  "selections": [
    v4,
    v3
  ]
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "onboardingSteps",
  "storageKey": null,
  "args": null,
  "concreteType": "OnboardingStep",
  "plural": true,
  "selections": [
    v4,
    v9,
    v10,
    v3,
    v11,
    v12
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addPipelineMutation",
  "id": null,
  "text": "mutation addPipelineMutation(\n  $input: AddOnboardingPipelineInput!\n) {\n  addPipeline(input: $input) {\n    organization {\n      ...onboardingProcessContainer_organization\n      id\n    }\n    member {\n      ...memberOnboardingProcessContainer_member\n      id\n    }\n  }\n}\n\nfragment onboardingProcessContainer_organization on Organization {\n  organizationId\n  name\n  members {\n    id\n    memberId\n    avatarUrl\n    name\n  }\n  onboardingProcesses {\n    id\n    onboardingProcessId\n    name\n    organization {\n      id\n    }\n  }\n  onboardingPipelines {\n    id\n    onboardingPipelineId\n    onboardingProcess {\n      id\n    }\n    ...pipelineContainer_pipeline\n  }\n}\n\nfragment memberOnboardingProcessContainer_member on Member {\n  memberId\n  id\n  name\n  onboardingProcess {\n    onboardingProcessId\n    name\n    onboardingPipelines {\n      id\n      ...pipelineContainer_pipeline\n    }\n    closedSteps {\n      id\n      ...stepContainer_step\n    }\n    organization {\n      organizationId\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment pipelineContainer_pipeline on OnboardingPipeline {\n  id\n  onboardingPipelineId\n  name\n  onboardingSteps {\n    id\n    isClosed\n    ...stepContainer_step\n  }\n}\n\nfragment stepContainer_step on OnboardingStep {\n  onboardingStepId\n  name\n  issueNumber\n  isClosed\n  organization {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addPipelineMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingPipelinePayload",
        "plural": false,
        "selections": [
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
                "kind": "FragmentSpread",
                "name": "onboardingProcessContainer_organization",
                "args": null
              }
            ]
          },
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
                "kind": "FragmentSpread",
                "name": "memberOnboardingProcessContainer_member",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "addPipelineMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addPipeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddOnboardingPipelinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "members",
                "storageKey": null,
                "args": null,
                "concreteType": "Member",
                "plural": true,
                "selections": [
                  v4,
                  v5,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "avatarUrl",
                    "args": null,
                    "storageKey": null
                  },
                  v3
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
                  v4,
                  v6,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organization",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organization",
                    "plural": false,
                    "selections": v7
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
                  v4,
                  v8,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingProcess",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingProcess",
                    "plural": false,
                    "selections": v7
                  },
                  v3,
                  v13
                ]
              },
              v4
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "member",
            "storageKey": null,
            "args": null,
            "concreteType": "Member",
            "plural": false,
            "selections": [
              v5,
              v4,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "onboardingProcess",
                "storageKey": null,
                "args": null,
                "concreteType": "OnboardingProcess",
                "plural": false,
                "selections": [
                  v6,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "onboardingPipelines",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OnboardingPipeline",
                    "plural": true,
                    "selections": [
                      v4,
                      v8,
                      v3,
                      v13
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
                      v4,
                      v10,
                      v3,
                      v11,
                      v9,
                      v12
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
                      v2,
                      v3,
                      v4
                    ]
                  },
                  v4
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e9e13d46091b7a1fc62c618fce8bdc7';
module.exports = node;
