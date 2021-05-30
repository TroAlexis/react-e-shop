import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';

import CheckoutItem from 'Components/checkout-item/checkout-item';
import { selectCartItems, selectCartTotal } from '~/js/redux/cart/cart.selectors';

import './checkout.module.scss';
import StripeCheckoutButton from 'Components/stripe-button/stripe-button';

const CheckoutPage = ({ cartItems, total }) => pug`
  .checkout-page
    .checkout-header
      .header-block
        span Product
        
      .header-block
        span Description
        
      .header-block
        span Quantity
        
      .header-block
        span Price
        
      .header-block
        span Remove
        
    each item in cartItems
      CheckoutItem(cartItem=item key=item.id)
      
    .total
      span='TOTAL: ' + total + '$'
    .test-warning
      |*Please use the following test credit card for payments*
      br
      | 4242 4242 4242 4242 - Exp: 01/${new Date().getFullYear().toString().slice(2)} - CVV: 123
    
    StripeCheckoutButton(price=total)
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
// checkout.propTypes = {}
