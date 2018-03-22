import PropTypes from 'prop-types';

const FrontMatterType = PropTypes.shape({
  javascriptFrontmatter: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
});

export default FrontMatterType;
