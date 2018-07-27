import { Box, Flex } from "grid-styled";
import React from "react";
import { Absolute, Relative, Label } from "rebass";

import { Field, InjectedFormProps } from "redux-form";
import createFieldValidator from "../inputs/createFieldValidator";
import FieldInput from "../inputs/fieldInput";
import InvisibleRecpatcha from "../inputs/invisibleRecaptcha";
import EmailIcon from "../../../wwwroot/assets/email-green.svg";
import { withTheme } from "styled-components";
import { IStyleProps } from "../../types";
import Button from "../button/button";

export interface IProps extends InjectedFormProps, IStyleProps {}

const SubscribeMailingList = ({
  handleSubmit,
  theme,
}: IProps) => (
  <Box mx="auto">
    <form onSubmit={handleSubmit} action="">
      <Flex justifyContent="center">
        <Relative>
          <Absolute top="50%" left={30} style={{ transform: "translateY(-50%)" }}>
            <Label htmlFor="email" mb={0}>
              <EmailIcon />
            </Label>
          </Absolute>
          <Field
            component={FieldInput}
            px={63}
            py={27}
            fontSize={17}
            bg="white"
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            validations={["email"]}
            required={true}
          />
        </Relative>
        <Button
          ml={15}
          fontSize={17}
          px={[20, 76]}
          style={{ textTransform: "uppercase", whiteSpace: "nowrap" }}
        >
          Join List
        </Button>
      </Flex>
      <Field
        component={InvisibleRecpatcha}
        name="recaptcha"
      />
    </form>
  </Box>
);

export default withTheme(SubscribeMailingList);
