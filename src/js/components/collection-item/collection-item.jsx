import React from 'react';
import PropTypes from 'prop-types';

import './collection-item.module.scss';

const CollectionItem = ({
// eslint-disable-next-line react-pug/prop-types
  name, price, imageUrl,
}) => pug`
  .collection-item
    .image(style={backgroundImage: 'url('+require('Images/shop-img/'+imageUrl+'.png')+')'})
    .collection-footer
      .name=name
      .price=price
  `;
CollectionItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageUrl: PropTypes.string,
};

export default CollectionItem;
