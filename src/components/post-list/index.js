import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import g from 'glamorous';

import colors from '../../styles/colors';

const Li = g.li({
  display: 'flex',
  fontFamily: 'Montserrat, sans-serif',
  borderBottom: '1px solid rgba(0, 0, 0, .1)',
  padding: '1em 0',

  ':last-child': {
    border: '0',
  },
});

const PostLink = g(Link)({
  textDecoration: 'none',
  color: colors.dark(),
  fontWeight: 'bold',
  fontSize: '1.5em',

  ':hover': {
    textDecoration: 'underline',
  },
});

const PostList = ({ listTitle, items }) => (
  <Fragment>
    {listTitle && (
      <g.H2
        textAlign="center"
        color={colors.secondary('0.5')}
        fontFamily="Montserrat, sans-serif"
        margin="2em 0 1em"
      >
        {listTitle}
      </g.H2>
    )}
    <g.Ul margin="0" padding="0" listStyle="none">
      {items.edges.map(({ node: { frontmatter: { title, path, date } } }) => (
        <Li key={path}>
          <PostLink to={path}>{title}</PostLink>
          <g.Div marginLeft="auto" color={colors.primary()} fontSize="0.8em">
            {date}
          </g.Div>
        </Li>
      ))}
    </g.Ul>
  </Fragment>
);

export const AllMarkdownRemarkType = PropTypes.shape({
  edges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  })),
});

PostList.propTypes = {
  listTitle: PropTypes.string,
  items: AllMarkdownRemarkType.isRequired,
};

PostList.defaultProps = {
  listTitle: '',
};

export default PostList;

export const query = graphql`
  fragment markdownRemarkFields on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
          path
          date
          type
        }
      }
    }
  }
`;
