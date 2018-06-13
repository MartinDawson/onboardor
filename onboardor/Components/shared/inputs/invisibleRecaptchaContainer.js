import { compose, withProps, withHandlers } from 'recompose';
import { Field } from 'redux-form';

import createFieldValidator from './createFieldValidator';
import InvisibleRecpatcha from './invisibleRecaptcha';

export default compose(
  withProps(() => ({ component: InvisibleRecpatcha })),
  withHandlers({ validate: createFieldValidator }),
)(Field);
