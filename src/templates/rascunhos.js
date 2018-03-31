/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';

import appendTitle from '../utils/append-title';
import postImage from '../assets/img/home-background.jpeg';

const DraftsTemplate = ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <Page
    pageTitle={appendTitle(frontmatter.title, 'Rascunhos')}
    title={frontmatter.title}
    subtitle={frontmatter.date}
    image={postImage}
  >
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Page>
);

DraftsTemplate.propTypes = {
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

export default DraftsTemplate;

export const query = graphql`
  query DraftsTemplateQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
        title
      }
    }
  }
`;
