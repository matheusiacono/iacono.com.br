import React from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

import PostHeaderTitle from '../post-header-title';
import PostHeaderImage from '../post-header-image';
import colors from '../../styles/colors';

const Header = g.header({
  backgroundColor: colors.dark(),
  minHeight: '600px',
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'column',
});

const PostHeader = ({ title, image }) => (
  <Header>
    <PostHeaderTitle>{title}</PostHeaderTitle>
    <PostHeaderImage image={image} />
  </Header>
);

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PostHeader;
