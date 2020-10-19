import React from 'react';
import PropTypes from 'prop-types';

import './collection-preview.module.scss';
import CollectionItem from 'Components/collection-item/collection-item';

const CollectionPreview = ({ title, items }) => pug`
  div.collection-preview
    h1.title=title.toUpperCase()
    div.preview
      each item in items.filter((item, index) => index < 4)
        CollectionItem(key=item.id item=item)
`;

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
};

export default CollectionPreview;
