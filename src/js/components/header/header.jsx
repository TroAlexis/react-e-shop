import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'Images/icons/crown.svg';

import './header.module.scss';

const Header = () => pug`
  .header
    Link(to="/").logo-container
      Logo.logo
      
    .options
      Link.option(to="/shop") SHOP
      Link.option(to="/shop") CONTACT
`;

export default Header;
