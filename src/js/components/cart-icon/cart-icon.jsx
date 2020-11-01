import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { ReactComponent as ShoppingIcon } from 'Images/icons/shopping-bag.svg';
import { toggleCartHidden } from '~/js/redux/cart/cart.actions';

import './cart-icon.module.scss';
import { selectCartItemsCount } from '~/js/redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => pug`
  .cart-icon(onClick=toggleCartHidden)
    ShoppingIcon.shopping-icon
    span.item-count=itemCount
`;

// cart-icon.propTypes = {}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
