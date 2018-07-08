import React from "react";
import { Box } from "grid-styled";
import { Relative, Absolute } from "rebass";

import FieldInput from "../inputs/fieldInputContainer";
import InvisibleRecpatcha from "../inputs/invisibleRecaptchaContainer";
import Button from "../button/button";

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
