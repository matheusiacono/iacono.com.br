import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import g from 'glamorous';

const RootLink = g(Link)({
  color: 'inherit',
  textDecoration: 'none',
});

const Header = ({ menu }) => {
  const Menu = menu;
  Menu.displayName = menu.displayName;
  return (
    <g.Header flexShrink="0">
      <g.H1 display="flex" fontSize="2.5em" justifyContent="center" margin="0" padding="1rem 0">
        <RootLink to="/">Matheus Iácono - Desenvolvedor Front End</RootLink>
      </g.H1>
      <Menu />
    </g.Header>
  );
};

Header.propTypes = {
  menu: PropTypes.func.isRequired,
};

export default Header;
