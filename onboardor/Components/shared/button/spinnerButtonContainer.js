import PropTypes from 'prop-types';
import { compose, setPropTypes, branch, renderComponent, mapProps } from 'recompose';

import Button from './button';
import SpinnerButton from './spinnerButton';

const propTypes = {
  isLoading: PropTypes.bool,
};

const propsMapper = (props) => {
  const {
    isLoading,
    ...newProps
  } = props;

  return newProps;
};

const enhance = compose(
  setPropTypes(propTypes),
  mapProps(propsMapper),
  branch(
    props => !props.isLoading,
    renderComponent(Button),
  ),
);

export default enhance(SpinnerButton);
