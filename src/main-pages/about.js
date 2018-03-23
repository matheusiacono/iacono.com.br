import React from 'react';

import Main from '../containers/main';
import QueryFrontMatter, { FrontMatterType } from '../components/query-frontmatter';

const AboutPage = ({ data }) => (
  <QueryFrontMatter data={data}>
    {({ title }) => (<Main title={title}>Sobre</Main>)}
  </QueryFrontMatter>
);

AboutPage.propTypes = {
  data: FrontMatterType.isRequired,
};

export default AboutPage;

export const frontmatter = {
  title: 'Sobre',
  author: 'Matheus Iácono',
  path: '/sobre/',
};

export const query = graphql`
  query aboutPage($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug }}) {
      ...frontMatterFields
    }
  }
`;
