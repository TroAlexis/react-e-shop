import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.module.scss';

import Header from 'Components/header/header';
import HomePage from '~/js/pages/homepage/homepage';
import ShopPage from '~/js/pages/shop/shop';
import SignInUp from '~/js/pages/sign-in-up/sign-in-up';

import { auth, createUserProfileDocument } from '~/firebase/firebase.utils';

import { selectCurrentUser } from '~/js/redux/user/user.selectors';

import { setCurrentUser } from '~/js/redux/user/user.actions';

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = () => {};

  render() {
    const { currentUser } = this.props;

    return pug`
      div
        Header
        Switch
          Route(exact path="/" component=HomePage)
          
          Route(path="/shop" component=ShopPage)
          
          Route(exact path="/signin" render=${() => (currentUser ? pug`Redirect(to="/")` : pug`SignInUp`)})
    `;
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
