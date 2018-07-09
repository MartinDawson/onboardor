import { Box } from "grid-styled";
import React from "react";
import { Absolute, Relative } from "rebass";

import Button from "../button/button";
import FieldInput from "../inputs/fieldInputContainer";
import InvisibleRecpatcha from "../inputs/invisibleRecaptchaContainer";

export interface IProps {
  handleSubmit: (input: object) => any;
}

const SubscribeMailingList = ({
  handleSubmit,
}: IProps) => (
  <Box width="70%" mx="auto">
    <form onSubmit={handleSubmit} action="">
      <Relative>
        <FieldInput
          name="email"
          placeholder="email"
          type="email"
          validations={["email"]}
          required={true}
          style={{ paddingRight: "8.1em" }}
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
      <InvisibleRecpatcha name="recaptcha" />
    </form>
  </Box>
);

export default SubscribeMailingList;
