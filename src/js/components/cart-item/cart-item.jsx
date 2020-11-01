import React from 'react';
// import PropTypes from 'prop-types';

import './cart-item.module.scss';

const CartItem = ({
  item: {
    imageUrl, price, name, quantity,
  },
}) => pug`
  .cart-item
    img(src=imageUrl alt="item")
    .item-details
      span.name=name
      span=${`${quantity} x ${price}`}
`;

export default CartItem;

// cart-item.propTypes = {}
