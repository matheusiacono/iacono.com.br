/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';

import appendTitle from '../utils/append-title';
import postImage from '../assets/img/home-background.jpeg';

const DraftsTemplate = ({
  data: { markdownRemark: { frontmatter: { title, date, attachments }, html } },
}) => (
  <Page
    pageTitle={appendTitle(title, 'Rascunhos')}
    title={title}
    subtitle={date}
    image={attachments && attachments.length > 0 ? attachments[0].publicURL : postImage}
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
        attachments: PropTypes.arrayOf(PropTypes.shape({
          publicURL: PropTypes.string,
        })),
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
        attachments {
          publicURL
        }
      }
    }
  }
`;
