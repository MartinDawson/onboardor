import { compose, withHandlers } from 'recompose';
import { reduxForm, SubmissionError } from 'redux-form';

import SubscribeMailingList from './subscribeMailingList';

const handlers = {
  onSubmit: () => input => SubscribeMailingList(input)
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
