import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

import ValidationField from './validationField';

class InvisibleRecaptcha extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.recaptcha.execute();
  }
  setRecaptcha = (e) => {
    this.recaptcha = e;
  }
  render() {
    return (
      <ValidationField
        touched={this.props.meta.touched}
        error={this.props.meta.error}
      >
        <Recaptcha
          ref={this.setRecaptcha}
          size="invisible"
          sitekey={process.env.RECAPTCHA_SITE_KEY}
          verifyCallback={response => this.props.input.onChange(response)}
        />
      </ValidationField>
    );
  }
}

InvisibleRecaptcha.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
};

export default InvisibleRecaptcha;
