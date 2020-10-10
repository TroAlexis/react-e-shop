import React from 'react';
import PropTypes from 'prop-types';

import './form-input.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => pug`
  .group
    input.input(onChange=handleChange ...otherProps)
    if label
      label.label(styleName=otherProps.value.length ? "shrink" : "")=label
`;

FormInput.propTypes = {};

export default FormInput;
