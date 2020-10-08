import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './menu-item.module.scss';

const MenuItem = ({
  title, subtitle, imageUrl, size, history, linkUrl, match,
}) => {
  const backgroundImage = `url(${imageUrl})`;
  return pug`
    .menu-item(styleName=size onClick=() => history.push(match.url+linkUrl))
      .background-image(style={backgroundImage: backgroundImage})
      .content
        h1.title=title.toUpperCase()
        span.subtitle=subtitle
`;
};

MenuItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any),
  linkUrl: PropTypes.string,
  match: PropTypes.objectOf(PropTypes.any),
};

MenuItem.defaultProps = {
  size: '',
};

export default withRouter(MenuItem);
