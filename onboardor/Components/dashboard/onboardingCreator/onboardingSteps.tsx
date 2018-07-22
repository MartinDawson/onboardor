import React from "react";
import { Field, WrappedFieldArrayProps } from "redux-form";
import { Absolute, Relative } from "rebass";

import Button from "../../shared/button/button";
import FieldInput from "../../shared/inputs/fieldInput";

interface IProps extends WrappedFieldArrayProps<{}> {}

const OnboardingSteps = ({ fields }: IProps) => (
  <div>
    <ul>
      {fields.map((onboardingStep, index) => (
        <li key={index}>
          {index !== 0 && (
            <Button
              type="button"
              onClick={() => fields.remove(index)}
            >
              Remove
            </Button>
          )}
          <Relative>
            <Field
              autoFocus
              tabIndex={1}
              component={FieldInput}
              name={`${onboardingStep}_step`}
              placeholder="E.g. 100% ready by day one"
              required={true}
              style={{ paddingRight: "7.1em" }}
              onKeyPress={(event: KeyboardEvent) => {
                if (event.key === "Enter") {
                  event.preventDefault();

                  fields.push({});
                }
              }}
            />
            <Absolute right={1} top={1}>
              <Button
                fontSize={15}
                type="button"
                onClick={() => fields.push({})}
              >
                Add step
              </Button>
            </Absolute>
          </Relative>
        </li>
      ))}
    </ul>
  </div>
);

export default OnboardingSteps;
