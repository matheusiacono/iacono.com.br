import React from 'react';
import PropTypes from 'prop-types';
import { Hr, H1 } from 'glamorous';

const Header = ({ menu }) => {
  const Menu = menu;
  Menu.displayName = menu.displayName;
  return (
    <header>
      <H1 display="flex" justifyContent="center">Matheus Iácono | Desenvolvedor Front End</H1>
      <Hr margin="0" />
      <Menu />
    </header>
  );
};

Header.propTypes = {
  menu: PropTypes.func.isRequired,
};

export default Header;
