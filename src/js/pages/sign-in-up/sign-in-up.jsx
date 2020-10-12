import React from 'react';
import PropTypes from 'prop-types';

import './sign-in-up.module.scss';
import SignIn from 'Components/sign-in/sign-in';
import SignUp from 'Components/sign-up/sign-up';

const SignInUp = () => pug`
  .sign-in-upp
    SignIn
    SignUp
`;

SignInUp.propTypes = {};

export default SignInUp;
