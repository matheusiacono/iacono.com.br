import React from 'react';
import g from 'glamorous';

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
      <g.Ul listStyle="none" display="flex" marginLeft="auto">
        {items.map(item => (
          <li>
            <a target="_blank" rel="noopener noreferrer" href={item.path} title={item.text}>
              {item.text}
            </a>
          </li>
        ))}
      </g.Ul>
    </g.Footer>
  );
};

export default Footer;
