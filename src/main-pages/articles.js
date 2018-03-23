import React from 'react';

import Main from '../containers/main';
import QueryFrontMatter, { FrontMatterType } from '../components/query-frontmatter';

const ArticlesPage = ({ data }) => (
  <QueryFrontMatter data={data}>
    {({ title }) => <Main title={title}>Artigos</Main>}
  </QueryFrontMatter>
);

ArticlesPage.propTypes = {
  data: FrontMatterType.isRequired,
};

export default ArticlesPage;

export const frontmatter = {
  title: 'Artigos',
  author: 'Matheus Iácono',
  path: '/artigos/',
};

export const query = graphql`
  query articlesPage($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      ...frontMatterFields
    }
  }
`;
