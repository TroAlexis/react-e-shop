import React from 'react';
import PropTypes from 'prop-types';

import './menu-item.module.scss';

const MenuItem = ({
  title, subtitle, imageUrl, size,
}) => {
  const backgroundImage = `url(${imageUrl})`;
  return pug`
    .menu-item(styleName=size style={backgroundImage: backgroundImage})
      .content
        h1.title=title
        span.subtitle=subtitle
`;
};

MenuItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
};

export default MenuItem;
