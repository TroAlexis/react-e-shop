import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'Images/icons/crown.svg';

import { auth } from '~/firebase/firebase.utils';

import './header.module.scss';

const Header = ({ currentUser }) => pug`
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
`;

export default Header;
