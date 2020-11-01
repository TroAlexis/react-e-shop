import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import CustomButton from 'Components/custom-button/custom-button';

import CartItem from 'Components/cart-item/cart-item';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '~/js/redux/cart/cart.selectors';

import './cart-dropdown.module.scss';

const CartDropdown = ({ cartItems }) => pug`
  .cart-dropdown
    .cart-items
      each item in cartItems
        CartItem(key=item.id, item=item)
        
    CustomButton GO TO CHECKOUT
`;

// cart-dropdown.propTypes = {}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
