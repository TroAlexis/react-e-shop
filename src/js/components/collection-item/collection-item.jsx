import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomButton from 'Components/custom-button/custom-button';

import { addItem } from '~/js/redux/cart/cart.actions';

import './collection-item.module.scss';

const CollectionItem = ({
// eslint-disable-next-line react-pug/prop-types
  item, addItem, className,
}) => {
  const { name, price, imageUrl } = item;

  return pug`
    .collection-item(className=className)
      .image(style={backgroundImage: 'url(' + imageUrl + ')'})
      .collection-footer
        .name=name
        .price=price

      CustomButton.button(onClick=() => addItem(item) inverted) Add to cart
  `;
};
CollectionItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageUrl: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
