import React from 'react';
import PropTypes from 'prop-types';

import './shop.module.scss';

import CollectionPreview from 'Components/collection-preview/collection-preview';
import SHOP_DATA from './shop.data';

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return pug`
      div
        each collection in collections
          - const { id, ...otherCollectionProps } = collection
          CollectionPreview(key=id ...otherCollectionProps)
    `;
  }
}

ShopPage.propTypes = {};
