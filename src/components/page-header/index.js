/* globals window */
import React, { Component } from 'react';
import { keyframes, presets } from 'glamor';
import g from 'glamorous';

import Logo from '../logo';
import SocialLinks from '../social-links';
import Menu from '../menu';

import throttle from '../../utils/throttle';
import colors from '../../styles/colors';

const slideDownAnimation = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

const slideUpAnimation = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(-100%)',
  },
});

const Header = g.header(({ slideUp, onTop, notScrolled }) => ({
  position: 'fixed',
  backgroundColor: onTop ? 'transparent' : colors.dark(),
  color: '#FFF',
  width: '100%',
  top: '0',
  zIndex: '4',
  paddingTop: '1rem',
  transition: 'background-color .3s ease',
  willChange: 'transform',
  animationDuration: '.3s',
  animationFillMode: 'both',
  animationName: !notScrolled && (slideUp ? slideDownAnimation : slideUpAnimation),

  display: 'grid',
  gridTemplateColumns: '2rem 128px auto 128px 2rem',
  gridTemplateRows: 'auto auto',

  [presets.Desktop]: {
    paddingTop: '0',
    alignItems: 'center',
    gridTemplateRows: '80px',
  },
}));

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

class PageHeader extends Component {
  constructor() {
    super();

    this.state = {
      scrollY: 0,
      slideUp: false,
      onTop: true,
      notScrolled: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    throttle((cb) => {
      this.setState(prevState => ({
        scrollY: window.scrollY,
        slideUp: window.scrollY <= this.state.scrollY,
        onTop: window.scrollY === 0,
        notScrolled: prevState.scrollY === 0 && window.scrollY !== 0,
      }), cb());
    })();
  }

  render() {
    return (
      <Header
        slideUp={this.state.slideUp}
        notScrolled={this.state.notScrolled}
        onTop={this.state.onTop}
      >
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
  }
}

export default PageHeader;
