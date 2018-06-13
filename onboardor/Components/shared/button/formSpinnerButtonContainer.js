import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, setPropTypes, mapProps } from 'recompose';

import ButtonWithSpinner from './spinnerButtonContainer';

const mapStateToProps = ({ form }, { formName }) => ({
  isLoading: form[formName].submitting,
});

const propTypes = {
  formName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const propsMapper = (props) => {
  const {
    formName,
    dispatch,
    ...newProps
  } = props;

  return newProps;
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  mapProps(propsMapper),
)(ButtonWithSpinner);
