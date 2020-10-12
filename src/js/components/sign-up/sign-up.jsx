import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'Components/form-input/form-input';
import CustomButton from 'Components/custom-button/custom-button';

import { auth, createUserProfileDocument } from '~/firebase/firebase.utils';

import './sign-up.module.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName, email, password, confirmPasword,
    } = this.state;

    if (password !== confirmPasword) {
      alert('Password don\'t match');
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      displayName, email, password, confirmPassword,
    } = this.state;

    return pug`
      .sign-up
        h2.title I do not have an account
        
        span.subtitle Sign up with your #[i email and password]
        
        form(onSubmit=this.handleSubmit)
          FormInput(
          type="text"
          name="displayName"
          value=displayName
          onChange=this.handleChange
          label="Display Name"
          required
          )
          
          FormInput(
          type="email"
          name="email"
          value=email
          onChange=this.handleChange
          label="Email"
          required
          )
          
          FormInput(
          type="password"
          name="password"
          value=password
          onChange=this.handleChange
          label="Password"
          required
          )
          
          FormInput(
          type="password"
          name="confirmPassword"
          value=confirmPassword
          onChange=this.handleChange
          label="Confirm Password"
          required
          )
          
          CustomButton(
          type="submit"
          ) SIGN UP
    `;
  }
}

SignUp.propTypes = {};

export default SignUp;
