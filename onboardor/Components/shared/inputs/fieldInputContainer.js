import { compose, withProps, withHandlers } from 'recompose';
import { Field } from 'redux-form';

import createFieldValidator from './createFieldValidator';
import FieldInput from './fieldInput';

export default compose(
  withHandlers({ validate: createFieldValidator }),
  withProps(() => ({ component: FieldInput })),
)(Field);
