import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

import CustomButton from 'Components/custom-button/custom-button';

import CartItem from 'Components/cart-item/cart-item';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '~/js/redux/cart/cart.selectors';
import './cart-dropdown.module.scss';
import { toggleCartHidden } from '~/js/redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => pug`
  .cart-dropdown
    .cart-items
      if cartItems.length
        each item in cartItems
          CartItem(key=item.id, item=item)
        
      else
        span.empty-message Your cart is empty
        
    CustomButton(onClick= () => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }) GO TO CHECKOUT
`;

// cart-dropdown.propTypes = {}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
