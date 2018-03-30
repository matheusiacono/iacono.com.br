import React from 'react';
import g from 'glamorous';

import colors from '../../styles/colors';
import ChildrenType from '../../utils/children-type';

const Content = g.div({
  position: 'relative',
  backgroundColor: '#FFF',
  minHeight: '100vh',
  zIndex: '1',
  padding: '90px 0',

  lineHeight: '1.8em',
  fontSize: '1.2em',
  color: colors.text(),
  fontFamily: 'Lora',
});

const Container = g.div({
  margin: '0 auto',
  maxWidth: '700px',
  padding: '0 20px',
});

const PostContent = ({ children }) => (
  <Content>
    <Container>{children}</Container>
  </Content>
);

PostContent.propTypes = {
  children: ChildrenType.isRequired,
};

export default PostContent;
