import { withRouter } from "found";
import { compose, withHandlers } from "recompose";
import { reduxForm } from "redux-form";

import { Route } from "../../types/index";
import SubscribeMailingList, { IProps } from "./subscribeMailingList";
import subscribeMailingListMutation, { IMutationInput } from "./subscribeMailingListMutation";

const handlers = {
  onSubmit: ({ router }: Route) => (input: IMutationInput) => {
    try {
      subscribeMailingListMutation(input);
    } catch (error) {
      // log raven here
    }

    router.push("/install");
  },
};

export default compose<IProps, {}>(
  withRouter,
  withHandlers(handlers),
  reduxForm({
    form: "subscribeMailingList",
  }),
)(SubscribeMailingList);
