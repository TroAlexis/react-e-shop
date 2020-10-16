import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { ReactComponent as ShoppingIcon } from 'Images/icons/shopping-bag.svg';
import { toggleCartHidden } from '~/js/redux/cart/cart.actions';

import './cart-icon.module.scss';

const CartIcon = ({ toggleCartHidden }) => pug`
  .cart-icon(onClick=toggleCartHidden)
    ShoppingIcon.shopping-icon
    span.item-count 0
`;

// cart-icon.propTypes = {}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
