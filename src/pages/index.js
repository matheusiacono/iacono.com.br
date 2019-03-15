import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class SiteIndex extends React.Component {
  render() {
    return (
      <div>
        <SEO
          title="Blog"
          keywords={[
            'blog',
            'desenvolvimento',
            'software',
            'javascript',
            'react',
          ]}
        />
        Matheus Iácono
        <ul>
          <li>
            <a href="https://blog.iacono.dev">blog</a>
          </li>
          <li>
            <a
              href="https://twitter.com/matheusiacono"
              target="_blank"
              rel="nofollow, noreferrer, noopener, external"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/matheusiacono"
              target="_blank"
              rel="nofollow, noreferrer, noopener, external"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/matheusiacono"
              target="_blank"
              rel="nofollow, noreferrer, noopener, external"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SiteIndex;
