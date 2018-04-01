import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';
import PostList, { AllMarkdownRemarkType } from '../components/post-list';

import postImage from '../assets/img/artigos-background.jpeg';

const ArticlesPage = ({ data }) => (
  <Page pageTitle="Artigos" title="Artigos" image={postImage}>
    <p>
      Javascript, React, Front End em geral, Desenvolvimento de Games, Design Patterns, um pouco de
      Matemática, um pouco de Filosofia. Um apanhado geral do que estou estudando.
    </p>
    <PostList items={data.artigos} />
  </Page>
);

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    artigos: AllMarkdownRemarkType,
  }).isRequired,
};

export default ArticlesPage;

export const query = graphql`
  query ArticlesPageQuery {
    artigos: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "artigos" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...markdownRemarkFields
    }
  }
`;
