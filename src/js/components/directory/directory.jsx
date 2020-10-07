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
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          size: 'small',
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          subtitle: 'SHOP NOW',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          size: 'small',
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          subtitle: 'SHOP NOW',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          size: 'small',
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          subtitle: 'SHOP NOW',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          subtitle: 'SHOP NOW',
          imageUrl: 'https://i.ibb.co/GCCdy8t/men.png',
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
          - const { title, subtitle, imageUrl, id, size } = section;
          MenuItem(key=id, title=title, subtitle=subtitle, imageUrl=imageUrl, size=size)
    `;
  }
}

Directory.propTypes = {
};
