import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ menu }) => {
  const Menu = menu;
  Menu.displayName = menu.displayName;
  return (
    <header>
      <h1>Matheus Iácono | Desenvolvedor Front End</h1>
      <Menu />
    </header>
  );
};

Header.propTypes = {
  menu: PropTypes.func.isRequired,
};

export default Header;
