import { branch, compose, mapProps, renderComponent, setPropTypes } from "recompose";

import Button from "./button";
import SpinnerButton from "./spinnerButton";

interface IProps {
  isLoading?: boolean;
}

const propsMapper = (props: IProps): IProps => {
  const {
    isLoading,
    ...newProps
  } = props;

  return newProps;
};

const enhance = compose(
  mapProps(propsMapper),
  branch<IProps>(
    (props) => !props.isLoading,
    renderComponent(Button),
  ),
);

export default enhance(SpinnerButton);
