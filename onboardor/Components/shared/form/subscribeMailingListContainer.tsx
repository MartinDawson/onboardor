import { withRouter } from "found";
import { compose, withHandlers, withStateHandlers } from "recompose";
import { reduxForm } from "redux-form";
import ReCAPTCHA from "react-google-recaptcha";

import { IRoute } from "../../types";
import SubscribeMailingList, { IProps } from "./subscribeMailingList";
import subscribeMailingListMutation, { IMutationInput } from "./subscribeMailingListMutation";
import logErrors from "../logErrors";

const stateHandlers = {
  setRecaptcha: () => (recaptcha : ReCAPTCHA) => ({
    recaptcha
  }),
};

const handlers = {
  onSubmit: ({ router }: IRoute) => async (input: IMutationInput) => {
    try {
      await subscribeMailingListMutation(input);
    } catch (error) {debugger
      logErrors(error)
    }
  },
};

export default compose<IProps, {}>(
  withRouter,
  withStateHandlers(null, stateHandlers),
  withHandlers(handlers),
  reduxForm({
    form: "subscribeMailingList",
  }),
)(SubscribeMailingList);
