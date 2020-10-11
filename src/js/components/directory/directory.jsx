import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'Components/menu-item/menu-item';

import './directory.module.scss';

export default class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          subtitle: 'SHOP NOW',
          imageUrl: 'hats',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          subtitle: 'SHOP NOW',
          imageUrl: 'jackets',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          subtitle: 'SHOP NOW',
          imageUrl: 'sneakers',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          subtitle: 'SHOP NOW',
          imageUrl: 'womens',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          subtitle: 'SHOP NOW',
          imageUrl: 'men',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;

    return pug`
      .directory-menu
        each section in sections
          - const { id, ...otherSectionProps} = section;
          MenuItem(key=id ...otherSectionProps)
    `;
  }
}

Directory.propTypes = {
};
