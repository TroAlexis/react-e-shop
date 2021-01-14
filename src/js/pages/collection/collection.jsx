import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import CollectionItem from 'Components/collection-item/collection-item';

import './collection.module.scss';
import { selectCollection } from '~/js/redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return pug`
    .collection-page
      h2.title= title
      .items
        each item in items
          CollectionItem(key=item.id item=item).collection-item
  `;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
// collection.propTypes = {}

export default connect(mapStateToProps)(CollectionPage);
