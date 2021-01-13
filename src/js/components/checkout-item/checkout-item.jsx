import React from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addItem, clearItemFromCart, removeItem } from '~/js/redux/cart/cart.actions';

import './checkout-item.module.scss';

const CheckoutItem = ({
  cartItem, clearItem, addItem, removeItem,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;

  return pug`
    .checkout-item
      .image-container
        img(alt="item" src=imageUrl)

      span.name=name

      .quantity
        .arrow(onClick=() => removeItem(cartItem)) &#10094;
          
        span.value=quantity
      
        .arrow(onClick=() => addItem(cartItem)) &#10095;

      span.price=price

      .remove-button(onClick=() => clearItem(cartItem)) &#10005;
    `;
};
// checkout-item.propTypes = {}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
