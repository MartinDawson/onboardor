import React from "react";

import ReCAPTCHA from "react-google-recaptcha";
import { WrappedFieldProps } from "redux-form";

class InvisibleRecaptcha extends React.Component<WrappedFieldProps> {
  public recaptcha: ReCAPTCHA;
  public componentDidMount() {
  //  this.recaptcha.execute();
  }
  public setRecaptcha = (e: ReCAPTCHA) => {
    this.recaptcha = e;
  }
  public render() {
    return (
      <ReCAPTCHA
        ref={this.setRecaptcha}
        size="invisible"
        sitekey={process.env.RECAPTCHA_SITE_KEY}
        onChange={(response) => this.props.input.onChange(response)}
      />
    );
  }
}

export default InvisibleRecaptcha;
