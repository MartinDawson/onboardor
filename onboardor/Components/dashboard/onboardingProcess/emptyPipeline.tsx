import React from "react";
import { Box } from "rebass";
import Button from "../../shared/button/button";
import FieldInput from "../../shared/inputs/fieldInput";
import { Field, InjectedFormProps } from "redux-form";
import { PipelineColumn } from "./pipeline";
import createFieldValidator from "../../shared/inputs/createFieldValidator";

const addPipelineValidator = createFieldValidator(["required"]);

interface IProps extends InjectedFormProps {
  addPipeline: () => void;
  togglePipeline: () => void;
  isAddingPipeline: boolean;
}

const EmptyPipeline = ({
  togglePipeline,
  isAddingPipeline,
  handleSubmit,
  addPipeline,
}: IProps) => (
  <PipelineColumn px={0}>
    {isAddingPipeline ? (
      <form onSubmit={handleSubmit(addPipeline)} action="">
        <Field
          component={FieldInput}
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
      <Button onClick={togglePipeline} style={{ width: "100%" }}>Add a pipeline.</Button>
    )}
  </PipelineColumn>
);

export default EmptyPipeline;
