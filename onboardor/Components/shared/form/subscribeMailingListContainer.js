import { compose, withHandlers } from 'recompose';
import { reduxForm, SubmissionError } from 'redux-form';

import SubscribeMailingList from './subscribeMailingList';
import subscribeMailingListMutation from './subscribeMailingListMutation';

const handlers = {
  onSubmit: () => input => subscribeMailingListMutation(input)
    .catch((error) => {
      throw new SubmissionError(error);
    }),
};

export default compose(
  withHandlers(handlers),
  reduxForm({
    form: 'subscribeMailingList',
  }),
)(SubscribeMailingList);
