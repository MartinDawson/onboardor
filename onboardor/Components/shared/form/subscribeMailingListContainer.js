import { compose, withHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import { withRouter } from 'found';

import SubscribeMailingList from './subscribeMailingList';
import subscribeMailingListMutation from './subscribeMailingListMutation';

const handlers = {
  onSubmit: ({ router }) => (input) => {
    try {
      subscribeMailingListMutation(input);
    } catch (error) {
      // log raven here
    }

    router.push('/install');
  },
};

export default compose(
  withRouter,
  withHandlers(handlers),
  reduxForm({
    form: 'subscribeMailingList',
  }),
)(SubscribeMailingList);
