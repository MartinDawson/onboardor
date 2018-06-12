import PropTypes from 'prop-types';
import { compose, setPropTypes, branch, renderComponent } from 'recompose';

import Button from './button';
import SpinnerButton from './spinnerButton';

const propTypes = {
  isLoading: PropTypes.bool,
};

const enhance = compose(
  setPropTypes(propTypes),
  branch(
    props => !props.isLoading,
    renderComponent(Button),
  ),
);

export default enhance(SpinnerButton);
