import { Box, Flex } from "grid-styled";
import React from "react";
import { Absolute, Relative, Label, Text } from "rebass";
import { Field, InjectedFormProps } from "redux-form";
import createFieldValidator from "../inputs/createFieldValidator";
import EmailIcon from "../../../wwwroot/assets/email-green.svg";
import { withTheme } from "styled-components";
import { IStyleProps } from "../../types";
import Button from "../button/button";
import ReCAPTCHA from "react-google-recaptcha";
import FieldInput from "../inputs/fieldInput";
import Form from "./Form";

export interface IProps extends InjectedFormProps, IStyleProps {
  onSubmit: (e: any) => void;
  setRecaptcha: () => ReCAPTCHA;
  recaptcha: ReCAPTCHA;
  subscribeText?: string;
  subscribeOnClick: () => void;
}

const SubmitSucceededMessage = () => (
  <Text textAlign="center" fontSize={18} color="white">
    Thank you for subscribing. We will never spam you.
  </Text>
);

const emailValidator = createFieldValidator(["required", "email"]);

const SubscribeMailingList = ({
  handleSubmit,
  onSubmit,
  setRecaptcha,
  recaptcha,
  submitSucceeded,
  subscribeOnClick,
  subscribeText = "Join List",
}: IProps) => (
  <Box mx="auto">
    <Form
      submitSucceeded={submitSucceeded}
      onSubmit={(e) => {
        e.preventDefault();
        recaptcha && recaptcha.execute();}
      }
      submitSucceededMessage={<SubmitSucceededMessage />}
    >
      <Flex justifyContent="center">
        <Relative>
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
            validate={emailValidator}
          />
          <Absolute top="50%" left={30} style={{ transform: "translateY(-50%)" }}>
            <Label htmlFor="email" mb={0}>
              <EmailIcon />
            </Label>
          </Absolute>
        </Relative>
        <Button
          ml={15}
          fontSize={17}
          px={[20, 76]}
          style={{ textTransform: "uppercase", whiteSpace: "nowrap" }}
          onClick={subscribeOnClick}
        >
          {subscribeText}
        </Button>
      </Flex>
      <ReCAPTCHA
        ref={setRecaptcha}
        size="invisible"
        sitekey={process.env.RECAPTCHA_SITE_KEY as string}
        onChange={(recaptcha) => {
          handleSubmit((props) => onSubmit({ ...props, recaptcha }))();
        }}
      />
    </Form>
  </Box>
);

export default withTheme(SubscribeMailingList);
