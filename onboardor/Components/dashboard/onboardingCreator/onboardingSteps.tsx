import React from "react";
import { Field, WrappedFieldArrayProps } from "redux-form";
import { Box } from "grid-styled";
import { Absolute, Relative } from "rebass";

import Button from "../../shared/button/button";
import ValidationInput from "../../shared/inputs/validationInput";
import { compose, withHandlers } from "recompose";

interface IFieldValues {
  _step?: string;
}

interface IProps extends WrappedFieldArrayProps<IFieldValues> {
  inputStepOnEnter: () => void;
  addStep: () => void;
  removeStep: (index: number) => void;
}

const OnboardingSteps = ({
  fields,
  inputStepOnEnter,
  addStep,
  removeStep,
}: IProps) => (
  <div>
    <ul>
      {fields.map((onboardingStep, index) => {
        const value = fields.get(index)._step;

        return (
          <Box key={index} is="li" mb={50}>
            <Relative>
              <Field
                autoFocus
                tabIndex={1}
                component={ValidationInput}
                name={`${onboardingStep}_step`}
                placeholder={index === 0 ? "E.g. 100% ready by day one" : null}
                required={true}
                style={{ paddingRight: "7.1em" }}
                onKeyPress={inputStepOnEnter}
              />
              <Absolute right={1} top={1}>
               {index === fields.length - 1 ? (
                  <Button
                    style={{ width: 102 }}
                    disabled={!value}
                    fontSize={15}
                    type="button"
                    onClick={addStep}
                  >
                    Add step
                  </Button>
                ) : (
                  <Button
                    style={{ width: 102 }}
                    fontSize={15}
                    type="button"
                    onClick={() => removeStep(index)}
                  >
                    Remove
                  </Button>
                )}
              </Absolute>
            </Relative>
          </Box>
        );
      })}
    </ul>
  </div>
);

const handlers = ({
  addStep: ({ fields }: WrappedFieldArrayProps<IFieldValues>) => () => {
    if (!fields.getAll().every(v => !!v._step)) return null;

    fields.push({});
  },
  removeStep: ({ fields }: WrappedFieldArrayProps<IFieldValues>) => (index: number) => {
    fields.remove(index);
  },
});

const handlers2 = {
  inputStepOnEnter: ({ addStep }: { addStep: () => void; }) => (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();

      addStep();
    }
  },
};

export default compose(
  withHandlers(handlers),
  withHandlers(handlers2),
)(OnboardingSteps);
