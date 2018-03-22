import React from 'react';
import PropTypes from 'prop-types';

import MenuList from './menu-list';
import MenuItem from './menu-item';
import MenuLink from './menu-link';

const Menu = ({ menu }) => (
  <MenuList>
    {menu.map(item => (
      <MenuItem key={item.path}>
        <MenuLink to={item.path} title={item.text}>
          {item.text}
        </MenuLink>
      </MenuItem>
    ))}
  </MenuList>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default Menu;
