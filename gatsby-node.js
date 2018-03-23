const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;

  if (node.internal.type === 'JavascriptFrontmatter') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'source', value: fileNode.sourceInstanceName });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allJavascriptFrontmatter {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                title
                author
                path
                error
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      result.data.allJavascriptFrontmatter.edges.forEach((edge) => {
        const { frontmatter } = edge.node;

        if (!frontmatter.error) {
          createPage({
            path: frontmatter.path,
            component: path.resolve(edge.node.fileAbsolutePath),
            context: {
              slug: edge.node.fields.slug,
            },
          });
        }
      });

      resolve();
    });
  });
};
