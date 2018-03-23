import React from 'react';

import Main from '../containers/main';
import QueryFrontMatter, { FrontMatterType } from '../components/query-frontmatter';

const DraftsPage = ({ data }) => (
  <QueryFrontMatter data={data}>
    {({ title }) => <Main title={title}>Rascunhos</Main>}
  </QueryFrontMatter>
);

DraftsPage.propTypes = {
  data: FrontMatterType.isRequired,
};

export default DraftsPage;

export const frontmatter = {
  title: 'Drafts',
  author: 'Matheus Iácono',
  path: '/rascunhos/',
};

export const query = graphql`
  query draftsPage($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...frontMatterFields
    }
  }
`;
