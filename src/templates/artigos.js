/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';

import appendTitle from '../utils/append-title';
import postImage from '../assets/img/home-background.jpeg';

const ArticlesTemplate = ({
  data: { markdownRemark: { frontmatter: { title, date, attachments }, html } },
}) => (
  <Page
    pageTitle={appendTitle(title, 'Artigos')}
    title={title}
    subtitle={date}
    image={attachments && attachments.length > 0 ? attachments[0].publicURL : postImage}
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
        attachments: PropTypes.arrayOf(PropTypes.shape({
          publicURL: PropTypes.string,
        })),
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
        attachments {
          publicURL
        }
      }
    }
  }
`;
