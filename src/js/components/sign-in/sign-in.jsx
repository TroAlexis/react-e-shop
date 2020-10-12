import React from 'react';
import PropTypes from 'prop-types';

import './sign-in.module.scss';
import FormInput from 'Components/form-input/form-input';
import CustomButton from 'Components/custom-button/custom-button';

import { auth, signInWithGoogle } from '~/firebase/firebase.utils';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return pug`
      .sign-in
        h2.title I already have an account
        
        span.subtitle Sign in with your #[i email and password]
        
        form(onSubmit=this.handleSubmit)
          FormInput(
            name="email" 
            type="email" 
            value=email
            handleChange=this.handleChange
            label="Email"
            required)
          
          FormInput(name="password" 
            type="password" 
            value=password
            handleChange =this.handleChange
            label="Password"
            required)
          
          .buttons
            CustomButton(type="submit") Sign in
            
            CustomButton(onClick=signInWithGoogle isGoogleSignIn) Sign in with Google
    `;
  }
}

SignIn.propTypes = {};
