import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/page';
import PostList, { AllMarkdownRemarkType } from '../components/post-list';

import postImage from '../assets/img/home-background.jpeg';

const IndexPage = ({ data }) => (
  <Page title="Sempre Aprendendo" image={postImage}>
    <p>
      Olá, me chamo Matheus Iácono, sou desenvolvedor front end e moro em São Paulo. Antes de mudar
      para cá, morava em Aracaju onde passei a maior parte da minha vida. Gosto de estar
      constantemente estudando e de compartilhar o conhecimento com outras pessoas.
    </p>

    <PostList listTitle="Artigos Recentes" items={data.artigos} />
    <PostList listTitle="Rascunhos Recentes" items={data.rascunhos} />
  </Page>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    artigos: AllMarkdownRemarkType,
    rascunhos: AllMarkdownRemarkType,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    artigos: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "artigos" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      ...markdownRemarkFields
    }

    rascunhos: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "rascunhos" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      ...markdownRemarkFields
    }
  }
`;
