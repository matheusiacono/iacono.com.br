import React from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

import PostHeader from '../post-header';
import PostContent from '../post-content';

import ChildrenType from '../../utils/children-type';
import colors from '../../styles/colors';

const Main = g.main({
  backgroundColor: colors.dark(),
  overflow: 'hidden',
});

const Post = ({ children, title, image }) => (
  <Main>
    <PostHeader title={title} image={image} />
    {children && <PostContent>{children}</PostContent>}
  </Main>
);

Post.propTypes = {
  children: ChildrenType,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Post.defaultProps = {
  children: undefined,
};

export default Post;
