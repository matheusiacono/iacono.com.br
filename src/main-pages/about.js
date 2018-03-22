import React from 'react';

import Main from '../containers/main';
import queryFrontMatter from '../utils/query-frontmatter';
import FrontMatterType from '../utils/frontmatter-type';
import getFrontMatter from '../utils/get-frontmatter';

const AboutPage = ({ data }) => {
  const { title } = getFrontMatter(data);
  return (
    <Main title={title}>Sobre</Main>
  );
};

AboutPage.propTypes = {
  data: FrontMatterType.isRequired,
};

export default AboutPage;

export const frontmatter = {
  title: 'Sobre',
  author: 'Matheus Iácono',
  path: '/sobre/',
};

export const query = queryFrontMatter;
