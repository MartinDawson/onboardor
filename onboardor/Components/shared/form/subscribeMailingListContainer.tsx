import { withRouter } from "found";
import { compose, withHandlers } from "recompose";
import { reduxForm } from "redux-form";

import { Route } from "../../types/index";
import SubscribeMailingList from "./subscribeMailingList";
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

interface IProps {
  className?: string;
}

export default compose<IProps, IProps>(
  withRouter,
  withHandlers(handlers),
  reduxForm({
    form: "subscribeMailingList",
  }),
)(SubscribeMailingList);
