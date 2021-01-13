import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';

import CheckoutItem from 'Components/checkout-item/checkout-item';
import { selectCartItems, selectCartTotal } from '~/js/redux/cart/cart.selectors';

import './checkout.module.scss';

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
      span='TOTAL: ' + total
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
// checkout.propTypes = {}
