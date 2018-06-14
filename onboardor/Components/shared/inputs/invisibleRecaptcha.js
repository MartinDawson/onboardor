import React from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-google-recaptcha';

class InvisibleRecaptcha extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
  //  this.recaptcha.execute();
  }
  setRecaptcha = (e) => {
    this.recaptcha = e;
  }
  render() {
    return (
      <Recaptcha
        ref={this.setRecaptcha}
        size="invisible"
        sitekey={process.env.RECAPTCHA_SITE_KEY}
        onChange={response => this.props.input.onChange(response)}
      />
    );
  }
}

InvisibleRecaptcha.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default InvisibleRecaptcha;
