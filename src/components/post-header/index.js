import React from 'react';
import PropTypes from 'prop-types';
import g from 'glamorous';

import PostHeaderTitle from '../post-header-title';
import PostHeaderSubtitle from '../post-header-subtitle';
import PostHeaderImage from '../post-header-image';
import colors from '../../styles/colors';

const Header = g.header({
  fontFamily: 'Montserrat, sans-serif',
  color: '#FFF',
  backgroundColor: colors.dark(),
  minHeight: '600px',
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
  flexDirection: 'column',
});

const PostHeader = ({ title, subtitle, image }) => (
  <Header>
    <PostHeaderTitle>{title}</PostHeaderTitle>
    <PostHeaderSubtitle>{subtitle}</PostHeaderSubtitle>
    <PostHeaderImage image={image} />
  </Header>
);

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
};

PostHeader.defaultProps = {
  subtitle: ' ',
};

export default PostHeader;
