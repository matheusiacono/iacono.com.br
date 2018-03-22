import React from 'react';
import PropTypes from 'prop-types';
import g, { Hr, H1 } from 'glamorous';

const Header = ({ menu }) => {
  const Menu = menu;
  Menu.displayName = menu.displayName;
  return (
    <g.Header flexShrink="0">
      <H1 display="flex" justifyContent="center" margin="0" padding="1rem 0">Matheus Iácono | Desenvolvedor Front End</H1>
      <Hr margin="0" />
      <Menu />
    </g.Header>
  );
};

Header.propTypes = {
  menu: PropTypes.func.isRequired,
};

export default Header;
