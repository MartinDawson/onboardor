import React from "react";
import styled from "styled-components";
import { Box, ButtonTransparent, Modal, Text, Flex } from "rebass";
import Cross from "../../../wwwroot/assets/cross.svg";
import Pencil from "../../../wwwroot/assets/Pencil.svg";
import FieldInput from "../../shared/inputs/fieldInput";
import createFieldValidator from "../../shared/inputs/createFieldValidator";
import { Field, InjectedFormProps } from "redux-form";
import Button from "../../shared/button/button";
import { PortalWithState } from "react-portal";

const StepBox = styled(Box)`
  width: 100%;
  border-radius: 4px;
  text-align: left;
  margin: 5px 0;
  padding: 0;
`;

const IconButton = styled(ButtonTransparent)`
  padding: 5px;
`;

export interface IStep {
  id: string;
  name: string;
  description?: string;
}

export interface IEditStepInput {
  stepName: string;
}

interface IProps extends InjectedFormProps<FormData> {
  name: string;
  removeStep: () => void;
  editStep: () => void;
  isEditingStep: boolean;
  removingNameConfirmValue: string;
  toggleStep: () => void;
  isAddingStep: boolean;
}

const editStepValidator = createFieldValidator(["required"]);

const Step = ({
  toggleStep,
  name,
  isEditingStep,
  editStep,
  handleSubmit,
  removeStep,
  removingNameConfirmValue,
}: IProps) => (
  <StepBox>
    {isEditingStep ? (
      <form onSubmit={handleSubmit(editStep)} action="">
        <Field
          component={FieldInput}
          name="stepName"
          validate={editStepValidator}
        />
        <Box mt={10}>
          <Button mr={10}>Edit</Button>
          <Button type="button" onClick={toggleStep}>Cancel</Button>
        </Box>
      </form>
      ) : (
        <Box bg="white" px="8px" py="5px">
          <Flex alignItems="center">
            <Text>{name}</Text>
            <IconButton ml="auto" onClick={toggleStep}>
              <Pencil />
            </IconButton>
            <PortalWithState closeOnEsc={true} closeOnOutsideClick={true}>
            {({ openPortal, closePortal, portal }) => (
                <React.Fragment>
                  <IconButton onClick={openPortal}>
                    <Cross />
                  </IconButton>
                  {portal(
                    <Modal top="30%">
                      <form onSubmit={handleSubmit(removeStep)} action="">
                        <Field
                          component={FieldInput}
                          name="removingNameConfirm"
                          placeholder={`Type the step name '${name}' to delete.`}
                          mb={10}
                        />
                        <Button mr={10} disabled={removingNameConfirmValue !== name}>Remove</Button>
                        <Button type="button" onClick={closePortal}>Cancel</Button>
                      </form>
                    </Modal>
                  )}
                </React.Fragment>
              )}
            </PortalWithState>
          </Flex>
        </Box>
    )}
  </StepBox>
);

export default Step;
