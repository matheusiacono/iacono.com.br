const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile(filter: { sourceInstanceName: { eq: "main-pages" } }) {
          edges {
            node {
              absolutePath
              relativePath
              sourceInstanceName
            }
          }
        }
        artigos: allJavascriptFrontmatter(
          filter: { node: { sourceInstanceName: { eq: "artigos" } } }
        ) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                path
              }
            }
          }
        }
        rascunhos: allJavascriptFrontmatter(
          filter: { node: { sourceInstanceName: { eq: "rascunhos" } } }
        ) {
          edges {
            node {
              fileAbsolutePath
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

      result.data.allFile.edges.forEach((edge) => {
        let slug;
        const parsedFilePath = path.parse(edge.node.relativePath);

        if (parsedFilePath.name !== 'index') {
          if (parsedFilePath.dir !== '') {
            slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
          } else {
            slug = `/${parsedFilePath.name}/`;
          }
        } else if (parsedFilePath.dir !== '') {
          slug = `/${parsedFilePath.dir}/`;
        } else {
          slug = '/';
        }

        createPage({
          path: slug,
          component: path.resolve(edge.node.absolutePath),
        });
      });

      const createPageFromEdge = (edge) => {
        createPage({
          path: edge.node.frontmatter.path,
          component: path.resolve(edge.node.fileAbsolutePath),
        });
      };

      if (result.data.artigos) {
        result.data.artigos.edges.forEach(createPageFromEdge);
      }

      if (result.data.rascunhos) {
        result.data.rascunhos.edges.forEach(createPageFromEdge);
      }

      resolve();
    });
  });
};
