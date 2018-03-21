import React from 'react';

import ChildrenType from '../../utils/children-type';

const PageContent = ({ children }) => (
  <main>
    {children}
  </main>
);

PageContent.propTypes = {
  children: ChildrenType.isRequired,
};

export default PageContent;
