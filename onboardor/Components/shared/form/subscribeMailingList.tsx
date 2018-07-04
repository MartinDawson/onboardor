import React from "react";

import { FormState } from "../../types/index";
import FormSpinnerButton from "../button/formSpinnerButtonContainer";
import FieldInput from "../inputs/fieldInputContainer";
import InvisibleRecpatcha from "../inputs/invisibleRecaptchaContainer";
import styles from "./subscribeMailingList.scss";

interface IProps {
  handleSubmit: (input: object) => any;
  form: keyof(FormState);
  className?: string;
}

const SubscribeMailingList = ({
  className,
  handleSubmit,
  form,
}: IProps) => (
  <form className={className} onSubmit={handleSubmit} action="">
    <div className={styles.email}>
      <FieldInput
        name="email"
        id="email"
        placeholder="email"
        type="email"
        validations={["email"]}
        required={true}
      />
      <FormSpinnerButton formName={form}>
        Join List
      </FormSpinnerButton>
    </div>
    <InvisibleRecpatcha name="recaptcha" />
  </form>
);

export default SubscribeMailingList;
