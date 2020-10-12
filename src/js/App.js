import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.module.scss';

import Header from 'Components/header/header';
import HomePage from '~/js/pages/homepage/homepage';
import ShopPage from '~/js/pages/shop/shop';
import SignInUp from '~/js/pages/sign-in-up/sign-in-up';

import { auth, createUserProfileDocument } from '~/firebase/firebase.utils';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          }, () => console.log(this.state));
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = () => {};

  render() {
    return pug`
      div
        Header(currentUser=this.state.currentUser)
        Switch
          Route(exact path="/" component=HomePage)
          
          Route(path="/shop" component=ShopPage)
          
          Route(path="/signin" component=SignInUp)
    `;
  }
}
