import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import MenuLink from '../menu-link';

const List = glamorous.ul({
  listStyle: 'none',
  border: '0',
  margin: '0',
  padding: '0',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const MenuList = ({ menu }) => (
  <List>
    {menu.map(item => (
      <li key={item.text}>
        <MenuLink to={item.path} title={item.text}>
          {item.text}
        </MenuLink>
      </li>
    ))}
  </List>
);

MenuList.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default MenuList;
