const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile {
          edges {
            node {
              absolutePath
              relativePath
              sourceInstanceName
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

        let pagePath = '';
        if (edge.node.sourceInstanceName === 'main-pages') {
          pagePath = slug;
        } else {
          pagePath = `/${edge.node.sourceInstanceName}${slug}`;
        }

        createPage({
          path: pagePath,
          component: path.resolve(edge.node.absolutePath),
        });
      });

      resolve();
    });
  });
};
