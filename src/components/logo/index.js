import React from 'react';
import Link from 'gatsby-link';

import logo from '../../assets/img/logo.png';

const Logo = () => (
  <Link to="/" title="Início">
    <img src={logo} alt="MITO" />
  </Link>
);

export default Logo;
