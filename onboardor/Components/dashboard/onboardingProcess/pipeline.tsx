import React from "react";
import { Text, Column, Box, ButtonTransparent, Modal } from "rebass";
import { IOrganization } from "../organization/organization";
import styled from "styled-components";
import Button from "../../shared/button/button";
import FieldInput from "../../shared/inputs/fieldInput";
import { Field, InjectedFormProps } from "redux-form";
import Cross from "../../../wwwroot/assets/cross.svg";
import Pencil from "../../../wwwroot/assets/Pencil.svg";
import { Flex } from "grid-styled";
import { PortalWithState } from "react-portal";
import createFieldValidator from "../../shared/inputs/createFieldValidator";

export const PipelineColumn = styled(Column)`
  background-color: #F4F4F4;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 5px;
  max-width: 262px;
`;

const Step = styled(ButtonTransparent)`
  width: 100%;
  border-radius: 4px;
  text-align: left;
  margin: 5px 0;
  padding: 0;
`;

const IconButton = styled(ButtonTransparent)`
  padding: 5px;
`;

export interface IPipline {
  id: string;
  onboardingPipelineId: number;
  name: string;
  onboardingSteps: {
    id: string;
    name: string;
    description?: string;
  }[]
}

export interface IEditPipelineInput {
  pipelineName: string;
}

export interface IAddOnboardingStepInput {
  onboardingStepName: string;
  description?: string;
}

type FormData = IEditPipelineInput | IAddOnboardingStepInput;

interface IProps extends InjectedFormProps<FormData> {
  organization: IOrganization;
  addPipeline: () => void;
  removePipeline: () => void;
  editPipeline: () => void;
  togglePipeline: () => void;
  isEditingPipeline: boolean;
  removingNameConfirmValue: string;
  pipeline: IPipline;
  addOnboardingStep: () => void;
  toggleOnboardingStep: () => void;
  isAddingOnboardingStep: boolean;
}

const editPipelineValidator = createFieldValidator(["required"]);
const onboardingStepValidator = createFieldValidator(["required"]);

const Pipeline = ({
  togglePipeline,
  isEditingPipeline,
  handleSubmit,
  editPipeline,
  removePipeline,
  removingNameConfirmValue,
  pipeline,
  addOnboardingStep,
  isAddingOnboardingStep,
  toggleOnboardingStep,
}: IProps) => (
  <PipelineColumn key={pipeline.onboardingPipelineId} p={16}>
    <Box pb={16}>
      <Flex alignItems="center">
        {isEditingPipeline ? (
          <form onSubmit={handleSubmit(editPipeline)} action="">
            <Field
              component={FieldInput}
              name="pipelineName"
              validate={editPipelineValidator}
            />
            <Box mt={10}>
              <Button mr={10}>Edit</Button>
              <Button type="button" onClick={togglePipeline}>Cancel</Button>
            </Box>
          </form>
          ) : (
            <React.Fragment>
              <Text fontWeight="bold" fontSize={18}>{pipeline.name}</Text>
              <IconButton ml="auto" onClick={togglePipeline}>
                <Pencil />
              </IconButton>
              <PortalWithState closeOnEsc closeOnOutsideClick>
              {({ openPortal, closePortal, portal }) => (
                  <React.Fragment>
                    <IconButton onClick={openPortal}>
                      <Cross />
                    </IconButton>
                    {portal(
                      <Modal top="30%">
                        <form onSubmit={handleSubmit(removePipeline)} action="">
                          <Field
                            component={FieldInput}
                            name="removingNameConfirm"
                            placeholder={`Type the pipeline name '${pipeline.name}' to delete.`}
                            mb={10}
                          />
                          <Button mr={10} disabled={removingNameConfirmValue !== pipeline.name}>Remove</Button>
                          <Button type="button" onClick={closePortal}>Cancel</Button>
                        </form>
                      </Modal>
                    )}
                  </React.Fragment>
                )}
              </PortalWithState>
            </React.Fragment>
        )}
      </Flex>
    </Box>
    {pipeline.onboardingSteps.map((step) => (
      <Step key={step.id}>
        <Box bg="white" p={10} br={4}>
          {step.name}
        </Box>
      </Step>
    ))}
    {isAddingOnboardingStep ? (
      <form onSubmit={handleSubmit(addOnboardingStep)} action="">
        <Field
          component={FieldInput}
          name="onboardingStepName"
          placeholder="e.g. Assign a mentor"
          validate={onboardingStepValidator}
        />
        <Box mt={10}>
          <Button mr={10}>Create</Button>
          <Button type="button" onClick={toggleOnboardingStep}>Cancel</Button>
        </Box>
      </form>
    ) : (
      <Button onClick={toggleOnboardingStep} style={{ width: "100%" }}>Add an onboarding step.</Button>
    )}
  </PipelineColumn>
);

export default Pipeline;
