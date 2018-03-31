import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';
import PostList, { AllMarkdownRemarkType } from '../components/post-list';

import postImage from '../assets/img/rascunhos-background.jpeg';

const DraftsPage = ({ data }) => (
  <Page pageTitle="Rascunhos" title="Rascunhos" image={postImage}>
    <PostList items={data.rascunhos} />
  </Page>
);

DraftsPage.propTypes = {
  data: PropTypes.shape({
    rascunhos: AllMarkdownRemarkType,
  }).isRequired,
};

export default DraftsPage;

export const query = graphql`
  query DraftsPageQuery {
    rascunhos: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "rascunhos" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...markdownRemarkFields
    }
  }
`;
