import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <div>
        <SEO title="404: Not Found" />
        <h1>Página não encontrada =(</h1>
        <p>Não fique triste.</p>
      </div>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
