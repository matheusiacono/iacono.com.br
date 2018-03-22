import React from 'react';
import { Main } from 'glamorous';

import ChildrenType from '../../utils/children-type';

const PageContent = ({ children }) => <Main flexGrow="1" flexShrink="0">{children}</Main>;

PageContent.propTypes = {
  children: ChildrenType.isRequired,
};

export default PageContent;
