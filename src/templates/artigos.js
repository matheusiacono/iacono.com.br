/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';

import appendTitle from '../utils/append-title';
import postImage from '../assets/img/home-background.jpeg';

const ArticlesTemplate = ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <Page
    pageTitle={appendTitle(frontmatter.title, 'Artigos')}
    title={frontmatter.title}
    subtitle={frontmatter.date}
    image={postImage}
  >
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Page>
);

ArticlesTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ArticlesTemplate;

export const query = graphql`
  query ArticlesTemplateQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
        title
      }
    }
  }
`;
