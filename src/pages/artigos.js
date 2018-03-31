import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';
import PostList, { AllMarkdownRemarkType } from '../components/post-list';

import postImage from '../assets/img/artigos-background.jpeg';

const ArticlesPage = ({ data }) => (
  <Page pageTitle="Artigos" title="Artigos" image={postImage}>
    <p>
      Front End, Desenvolvimento de Games, Design Patterns, React, Javascript, Cálculo. Um pouco de
      tudo o que estudo.
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
