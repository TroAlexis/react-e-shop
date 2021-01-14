import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuItem from 'Components/menu-item/menu-item';

import './directory.module.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '~/js/redux/directory/directory.selectors';

const Directory = ({ sections }) => pug`
  .directory-menu
    each section in sections
      - const { id, ...otherSectionProps} = section;
      MenuItem(key=id ...otherSectionProps)
    `;

Directory.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
