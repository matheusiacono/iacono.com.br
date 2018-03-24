import React from 'react';
import { Main } from 'glamorous';

import colors from '../../styles/colors';
import ChildrenType from '../../utils/children-type';

const PageContent = ({ children }) => (
  <Main
    flexGrow="1"
    flexShrink="0"
    border={`solid ${colors.secondary}`}
    borderTop="0"
    borderBottom="0"
    borderLeftWidth="4rem"
    borderRightWidth="4rem"
  >
    {children}
  </Main>
);

PageContent.propTypes = {
  children: ChildrenType.isRequired,
};

export default PageContent;
