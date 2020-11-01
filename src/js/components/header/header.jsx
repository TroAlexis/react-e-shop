import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from 'Images/icons/crown.svg';

import CartIcon from 'Components/cart-icon/cart-icon';
import CartDropdown from 'Components/cart-dropdown/cart-dropdown';
import { selectCartHidden } from '~/js/redux/cart/cart.selectors';
import { selectCurrentUser } from '~/js/redux/user/user.selectors';

import { auth } from '~/firebase/firebase.utils';
import './header.module.scss';

const Header = ({ currentUser, hidden }) => pug`
  .header
    Link(to="/").logo-container
      Logo.logo
      
    .options
      Link.option(to="/shop") SHOP
      
      Link.option(to="/shop") CONTACT
      
      if currentUser
        div.option(onClick=() => auth.signOut()) SIGN OUT
        
      else
        Link.option(to="/signin") SIGN IN
        
      CartIcon
      
    if !hidden
      CartDropdown
`;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
