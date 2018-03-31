import React from 'react';
import { Ul, Li } from 'glamorous';

import githubImg from '../../assets/img/github.png';
import twitterImg from '../../assets/img/twitter.png';

const extLinks = [
  { text: 'Github', img: githubImg, link: '//github.com/matheusiacono' },
  { text: 'Twitter', img: twitterImg, link: '//twitter.com/matheusiacono' },
];

const SocialLinks = () => (
  <Ul
    display="inline-flex"
    listStyle="none"
    padding="0"
    width="8rem"
    justifyContent="space-around"
    margin="0"
  >
    {extLinks.map(item => (
      <Li key={item.text} display="flex" alignItems="center">
        <a
          target="_blank"
          rel="noopener noreferrer nofollow external"
          href={item.link}
          title={item.text}
        >
          <img src={item.img} alt={item.text} />
        </a>
      </Li>
    ))}
  </Ul>
);

export default SocialLinks;
