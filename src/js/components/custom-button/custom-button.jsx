import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.module.scss';

const CustomButton = ({ children, ...otherProps }) => pug`
  button.custom-button=children
`;

CustomButton.propTypes = {};

export default CustomButton;
