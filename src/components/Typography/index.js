import { createElement } from 'react'
import PropTypes from 'prop-types';

import './styles.css';

const Typography = ({ component, fontSize, color = 'black', styles, variant = '', children }) => {

  const style = {
    color,
    fontSize,
    ...styles
  };

  const classes = {
    className: `hannah-${component} ${variant}`
  };

  return createElement(component, { style, ...classes }, children);
}

Typography.propTypes = {
  component: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string
};

export default Typography;
