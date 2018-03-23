import React from 'react';

import Main from '../containers/main';
import QueryFrontMatter, { FrontMatterType } from '../components/query-frontmatter';

const GetInvolvedPage = ({ data }) => (
  <QueryFrontMatter data={data}>
    {({ title }) => (<Main title={title}>Participe</Main>)}
  </QueryFrontMatter>
);

GetInvolvedPage.propTypes = {
  data: FrontMatterType.isRequired,
};

export default GetInvolvedPage;

export const frontmatter = {
  title: 'Participe',
  author: 'Matheus Iácono',
  path: '/participe/',
};

export const query = graphql`
  query getInvolvedPage($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug }}) {
      ...frontMatterFields
    }
  }
`;
