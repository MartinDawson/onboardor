import { Box } from "grid-styled";
import React from "react";
import { Absolute, Relative } from "rebass";

import { Field } from "redux-form";
import Button from "../button/button";
import createFieldValidator from "../inputs/createFieldValidator";
import FieldInput from "../inputs/fieldInput";
import InvisibleRecpatcha from "../inputs/invisibleRecaptcha";

export interface IProps {
  handleSubmit: (input: object) => any;
}

const SubscribeMailingList = ({
  handleSubmit,
}: IProps) => (
  <Box width="70%" mx="auto">
    <form onSubmit={handleSubmit} action="">
      <Relative>
        <Field
          component={FieldInput}
          validate={createFieldValidator}
          name="email"
          placeholder="email"
          type="email"
          validations={["email"]}
          required={true}
          style={{ paddingRight: "7.1em" }}
        />
        <Absolute right={1} top={1}>
          <Button
            fontSize={15}
            style={{ textTransform: "uppercase" }}
          >
            Join List
          </Button>
        </Absolute>
      </Relative>
      <Field
        component={InvisibleRecpatcha}
        validate={createFieldValidator}
        name="recaptcha"
      />
    </form>
  </Box>
);

export default SubscribeMailingList;
