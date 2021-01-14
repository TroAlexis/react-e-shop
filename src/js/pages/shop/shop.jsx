import React from 'react';
import { Route } from 'react-router-dom';

// import PropTypes from 'prop-types';

import './shop.module.scss';
import CollectionsOverview from 'Components/collections-overview/collections-overview';
import CollectionPage from '~/js/pages/collection/collection';

const ShopPage = ({ match }) => (pug`
  div.shop-page
    Route(exact path=match.path component=CollectionsOverview)
    Route(path=${`${match.path}/:collectionId`} component=CollectionPage)
`);

// ShopPage.propTypes = {};

export default ShopPage;
