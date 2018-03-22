import PropTypes from 'prop-types';

const QueryFrontmatter = ({ children, data }) => children(data.javascriptFrontmatter.frontmatter);

export const FrontMatterType = PropTypes.shape({
  javascriptFrontmatter: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
});

QueryFrontmatter.propTypes = {
  children: PropTypes.func.isRequired,
  data: FrontMatterType.isRequired,
};

export default QueryFrontmatter;

export const query = graphql`
  fragment frontMatterFields on JavascriptFrontmatter {
    frontmatter {
      title
    }
  }
`;
