const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const ArticlesTemplate = path.resolve('src/templates/artigos.js');
  const DraftsTemplate = path.resolve('src/templates/rascunhos.js');

  return new Promise((resolve, reject) => {
    graphql(`
      {
        artigos: allMarkdownRemark(filter: { frontmatter: { type: { eq: "artigos" } } }) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
        rascunhos: allMarkdownRemark(filter: { frontmatter: { type: { eq: "rascunhos" } } }) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      const createPageFromEdge = template => (edge) => {
        createPage({
          path: edge.node.frontmatter.path,
          component: template,
        });
      };

      if (result.data.artigos) {
        result.data.artigos.edges.forEach(createPageFromEdge(ArticlesTemplate));
      }

      if (result.data.rascunhos) {
        result.data.rascunhos.edges.forEach(createPageFromEdge(DraftsTemplate));
      }

      resolve();
    });
  });
};
