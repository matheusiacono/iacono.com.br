import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import g from 'glamorous';

import colors from '../../utils/colors';

const RootLink = g(Link)({
  color: 'inherit',
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  },
});

const Header = ({ menu }) => {
  const Menu = menu;
  Menu.displayName = menu.displayName;
  return (
    <g.Header flexShrink="0" backgroundColor={colors.secondary}>
      <g.H1
        display="flex"
        fontFamily="Montserrat, sans-serif"
        fontSize="2.5em"
        justifyContent="center"
        margin="0"
        padding="1rem 0"
        color={colors.terciary}
      >
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
