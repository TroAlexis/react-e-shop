import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.module.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => pug`
  button.custom-button(styleName=isGoogleSignIn ? "google-sign-in": "", ...otherProps)=children
`;

CustomButton.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.array,
    ],
  ),
};

export default CustomButton;
