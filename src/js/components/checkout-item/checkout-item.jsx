import React from 'react';
// import PropTypes from 'prop-types';

import './checkout-item.module.scss';

const CheckoutItem = ({
  cartItem: {
    name, imageUrl, price, quantity,
  },
}) => pug`
  .checkout-item
    .image-container
      img(alt="item" src=imageUrl)
    span.name=name
    span.quantity=quantity
    span.price=price
    .remove-button &#10005;
`;
// checkout-item.propTypes = {}

export default CheckoutItem;
