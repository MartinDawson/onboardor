import React from "react";
import { Container, Text, Row, Column, Box, ButtonTransparent } from "rebass";
import { IOrganization } from "../organization/organization";
import styled from "styled-components";
import Button from "../../shared/button/button";
import FieldInput from "../../shared/inputs/fieldInput";
import { Field, InjectedFormProps } from "redux-form";
import createFieldValidator from "../../shared/inputs/createFieldValidator";
import Cross from "../../../wwwroot/assets/cross.svg";
import Pencil from "../../../wwwroot/assets/Pencil.svg";
import { Flex } from "grid-styled";

interface IProps extends InjectedFormProps {
  organization: IOrganization;
  addPipeline: () => void;
  togglePipeline: () => void;
  isAddingPipeline: boolean;
}

const PipelineRow = styled(Row)`
  margin-left: -5px;
  margin-right: -5px;
  height: 700px;
`;

const PipelineColumn = styled(Column)`
  background-color: #F4F4F4;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 5px;
  max-width: 262px;
`;

const Step = styled.button`
  width: 100%;
  border-radius: 4px;
  text-align: left;
  margin: 5px 0;
`;

const IconButton = styled(ButtonTransparent)`
  padding: 5px;
`;

const addPipelineValidator = createFieldValidator(["required"]);

const OnboardingProcess = ({
  organization,
  togglePipeline,
  isAddingPipeline,
  handleSubmit,
}: IProps) => (
  <Container maxWidth="100%">
    <Text mt={20} mb={40} fontSize={20}>
      <Text is="span" display="inline" fontWeight="bold">
        {organization.name}
      </Text> on-boarding process
    </Text>
    <PipelineRow>
      {organization.onboardingPipelines.map((pipeline) => (
        <PipelineColumn key={pipeline.id} p={16}>
          <Box pb={16}>
            <Flex alignItems="center">
              <Text fontWeight="bold" fontSize={18}>{pipeline.name}</Text>
              <IconButton ml="auto">
                <Pencil />
              </IconButton>
              <IconButton>
                <Cross />
              </IconButton>
            </Flex>
          </Box>
          {pipeline.onboardingSteps.map((step) => (
            <Step key={step.id}>
              <Box bg="white" p={10} br={4}>
                {step.name}
              </Box>
            </Step>
          ))}
        </PipelineColumn>
      ))}
      <PipelineColumn px={0}>
        {isAddingPipeline ? (
          <form onSubmit={handleSubmit} action="">
            <Field
              component={FieldInput}
              id="name"
              name="name"
              placeholder="Pipeline name"
              validate={addPipelineValidator}
            />
            <Box mt={10}>
              <Button mr={10}>Create</Button>
              <Button type="button" onClick={togglePipeline}>Cancel</Button>
            </Box>
          </form>
          ) : (
          <Button onClick={togglePipeline} style={{ width: "100%" }}>Add a pipeline...</Button>
        )}
      </PipelineColumn>
    </PipelineRow>
  </Container>
);

export default OnboardingProcess;
