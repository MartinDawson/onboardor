import React from 'react';
import PropTypes from 'prop-types';

import InvisibleRecpatcha from '../inputs/invisibleRecaptchaContainer';
import FieldInput from '../inputs/fieldInputContainer';
import FormSpinnerButton from '../button/formSpinnerButtonContainer';
import styles from './subscribeMailingList.scss';

const SubscribeMailingList = ({
  className,
  handleSubmit,
  form,
}) => (
  <form className={className} onSubmit={handleSubmit} action="">
    <div className={styles.email}>
      <FieldInput
        name="email"
        id="email"
        placeholder="email"
        type="email"
        validations={['email']}
        required
      />
      <FormSpinnerButton formName={form}>
        Join List
      </FormSpinnerButton>
    </div>
    <InvisibleRecpatcha
      name="recaptcha"
      sitekey={process.env.RECAPTCHA_SITE_KEY}
    />
  </form>
);

SubscribeMailingList.defaultProps = {
  className: null,
};

SubscribeMailingList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SubscribeMailingList;
