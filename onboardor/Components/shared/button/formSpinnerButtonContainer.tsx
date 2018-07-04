import { connect } from "react-redux";
import { compose, mapProps } from "recompose";
import { Dispatch } from "redux";

import { FormState } from "../../types/index";
import ButtonWithSpinner from "./spinnerButtonContainer";

interface IState {
  form: FormState;
}

interface IProps {
  formName: keyof(FormState);
  dispatch: Dispatch<any>;
}

const mapStateToProps = ({ form }: IState, { formName }: IProps) => ({
  isLoading: form[formName] && form[formName].submitting,
});

const propsMapper = (props: IProps) => {
  const {
    formName,
    dispatch,
    ...newProps
  } = props;

  return newProps;
};

interface IOuter {
  formName: keyof(FormState);
}

export default compose<{}, IOuter>(
  connect(mapStateToProps),
  mapProps(propsMapper),
)(ButtonWithSpinner);
