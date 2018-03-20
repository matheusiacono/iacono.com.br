import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, menu }) => {
  const Menu = menu;
  Menu.displayName = menu.displayName;
  return (
    <header>
      <h1>{title} | Desenvolvedor Front End</h1>
      <Menu />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.func.isRequired,
};

export default Header;
