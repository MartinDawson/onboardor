import React from 'react';
import PropTypes from 'prop-types';

import InvisibleRecpatcha from '../inputs/invisibleRecaptchaContainer';
import FieldInput from '../inputs/fieldInputContainer';
import FormSpinnerButton from '../button/formSpinnerButtonContainer';

const SubscribeMailingList = ({
  handleSubmit,
  form,
}) => (
  <form onSubmit={handleSubmit} action="">
    <FieldInput
      name="email"
      id="email"
      placeholder="email address"
      type="email"
      validations={['email']}
      required
    />
    <InvisibleRecpatcha
      name="recaptcha"
      sitekey={process.env.RECAPTCHA_SITE_KEY}
    />
    <FormSpinnerButton formName={form}>
      Join list
    </FormSpinnerButton>
  </form>
);

SubscribeMailingList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
};

export default SubscribeMailingList;
