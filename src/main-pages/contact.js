import React from 'react';

import Main from '../containers/main';
import QueryFrontMatter, { FrontMatterType } from '../components/query-frontmatter';

const ContactPage = ({ data }) => (
  <QueryFrontMatter data={data}>
    {({ title }) => (<Main title={title}>Contato</Main>)}
  </QueryFrontMatter>
);

ContactPage.propTypes = {
  data: FrontMatterType.isRequired,
};

export default ContactPage;

export const frontmatter = {
  title: 'Contato',
  author: 'Matheus Iácono',
  path: '/contato/',
};

export const query = graphql`
  query contactPage($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug }}) {
      ...frontMatterFields
    }
  }
`;
