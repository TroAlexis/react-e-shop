import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.module.scss';

const CustomButton = ({
  children, isGoogleSignIn, inverted, className, ...otherProps
}) => pug`
  button.custom-button(
    styleName=(inverted ? "inverted" : "")
    + (isGoogleSignIn ? "google-sign-in": ""),
    className=className
    ...otherProps)=children
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
