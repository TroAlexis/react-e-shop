import React from 'react';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';
import './collections-overview.module.scss';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from 'Components/collection-preview/collection-preview';
import { selectCollectionsForPreview } from '~/js/redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => pug`
  .collections-overview
    each collection in collections
      - const { id, ...otherCollectionProps } = collection
      CollectionPreview(key=id ...otherCollectionProps)
`;

// collections-overview.propTypes = {}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
