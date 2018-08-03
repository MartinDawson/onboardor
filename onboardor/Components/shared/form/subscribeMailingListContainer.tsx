import { compose, withHandlers, withStateHandlers } from "recompose";
import { reduxForm } from "redux-form";
import ReCAPTCHA from "react-google-recaptcha";

import SubscribeMailingList, { IProps } from "./subscribeMailingList";
import subscribeMailingListMutation, { IMutationInput } from "./subscribeMailingListMutation";
import logErrors from "../logErrors";

const stateHandlers = {
  setRecaptcha: () => (recaptcha : ReCAPTCHA) => ({
    recaptcha
  }),
};

const handlers = {
  onSubmit: () => async (input: IMutationInput) => {
    try {
      return subscribeMailingListMutation(input);
    } catch (error) {
      logErrors(error);

      throw error;
    }
  },
};

export default compose<IProps, {}>(
  withStateHandlers(null, stateHandlers),
  withHandlers(handlers),
  reduxForm({
    form: "subscribeMailingList",
  }),
)(SubscribeMailingList);
