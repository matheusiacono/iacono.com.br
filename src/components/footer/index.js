import React from 'react';
import g from 'glamorous';

const SweepToRight = g.a({
  background: '#999',
  color: '#333',

  display: 'block',
  verticalAlign: 'middle',
  transform: 'perspective(1px) translateZ(0)',
  boxShadow: '0 0 1px transparent',
  transitionProperty: 'color',
  transitionDuration: '0.3s',

  ':before': {
    content: '""',
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: '#333',
    transform: 'scaleX(0)',
    transformOrigin: '0 50%',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-out',
  },

  ':hover,:focus,:active': {
    color: 'white',
  },

  ':hover:before,:focus:before,:active:before': {
    transform: 'scaleX(1)',
  },
});

const ExternalLink = g(SweepToRight)({
  padding: '0.5rem 1rem',
  textDecoration: 'none',
});

const Footer = () => {
  const items = [
    { text: 'Github', path: '//github.com/matheusiacono' },
    { text: 'Twitter', path: '//twitter.com/matheusiacono' },
  ];
  return (
    <g.Footer
      display="flex"
      alignItems="center"
      padding="1rem 4rem"
      backgroundColor="#eee"
      flexShrink="0"
    >
      <p>&copy; 2018 Matheus Iácono</p>
      <g.Ul listStyle="none" display="flex" marginLeft="auto" padding="0">
        {items.map(item => (
          <g.Li flex="1 1 auto" marginRight=".2rem" textDecoration="none" key={item.text}>
            <ExternalLink
              target="_blank"
              rel="noopener noreferrer"
              href={item.path}
              title={item.text}
            >
              {item.text}
            </ExternalLink>
          </g.Li>
        ))}
      </g.Ul>
    </g.Footer>
  );
};

export default Footer;
