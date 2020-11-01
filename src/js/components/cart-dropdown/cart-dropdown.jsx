import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import CustomButton from 'Components/custom-button/custom-button';

import CartItem from 'Components/cart-item/cart-item';

import './cart-dropdown.module.scss';

const CartDropdown = ({ cartItems }) => pug`
  .cart-dropdown
    .cart-items
      each item in cartItems
        CartItem(key=item.id, item=item)
        
    CustomButton GO TO CHECKOUT
`;

// cart-dropdown.propTypes = {}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
