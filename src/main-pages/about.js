import React from 'react';
import PropTypes from 'prop-types';

import Main from '../containers/main';

const AboutPage = ({ data: { javascriptFrontmatter: { frontmatter: { title } } } }) => (
  <Main title={title}>Sobre</Main>
);

AboutPage.propTypes = {
  data: PropTypes.shape({
    javascriptFrontmatter: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default AboutPage;

export const frontmatter = {
  title: 'Sobre',
  author: 'Matheus Iácono',
  path: '/sobre/',
};

export const pageQuery = graphql`
  query aboutPage($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
      }
    }
  }
`;
