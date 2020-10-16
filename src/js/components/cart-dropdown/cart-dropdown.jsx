import React from 'react';
// import PropTypes from 'prop-types';

import CustomButton from 'Components/custom-button/custom-button';

import './cart-dropdown.module.scss';

const CartDropdown = () => pug`
  .cart-dropdown
    .cart-items
    CustomButton GO TO CHECKOUT
`;

// cart-dropdown.propTypes = {}

export default CartDropdown;
