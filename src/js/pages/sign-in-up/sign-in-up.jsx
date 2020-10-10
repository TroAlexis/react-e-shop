import React from 'react';
import PropTypes from 'prop-types';

import './sign-in-up.module.scss';
import SignIn from 'Components/sign-in/sign-in';

const SignInUp = () => pug`
  .sign-in-up
    SignIn
`;

SignInUp.propTypes = {};

export default SignInUp;
