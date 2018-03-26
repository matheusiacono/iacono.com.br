import React from 'react';
import { presets } from 'glamor';
import g from 'glamorous';

import Logo from '../logo';
import SocialLinks from '../social-links';
import Menu from '../menu';

const Header = g.header({
  position: 'absolute',
  color: '#FFF',
  width: '100%',
  top: '0',
  zIndex: '4',
  paddingTop: '1rem',

  display: 'grid',
  gridTemplateColumns: '2rem 128px auto 128px 2rem',
  gridTemplateRows: 'auto auto',

  [presets.Desktop]: {
    paddingTop: '0',
    alignItems: 'center',
    gridTemplateRows: '100px',
  },
});

const LogoWrapper = g.div({
  gridColumn: '2',
  gridRow: '1',
});

const Nav = g.nav({
  gridColumn: '1 / span 5',
  gridRow: '2',

  [presets.Desktop]: {
    gridColumn: '3',
    gridRow: '1',
  },
});

const SocialLinksWrapper = g.div({
  gridColumn: '4',
  gridRow: '1',
});

const PageHeader = () => (
  <Header>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <Nav>
      <Menu />
    </Nav>
    <SocialLinksWrapper>
      <SocialLinks />
    </SocialLinksWrapper>
  </Header>
);

export default PageHeader;
