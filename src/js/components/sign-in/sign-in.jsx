import React from 'react';
import PropTypes from 'prop-types';

import './sign-in.module.scss';
import FormInput from 'Components/form-input/form-input';
import CustomButton from 'Components/custom-button/custom-button';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
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
          
          CustomButton(type="submit") Sign in
    `;
  }
}

SignIn.propTypes = {};
