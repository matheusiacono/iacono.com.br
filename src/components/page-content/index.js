import React from 'react';
import Proptypes from 'prop-types';

const PageContent = ({ children }) => (
  <main>
    {children}
  </main>
);

PageContent.propTypes = {
  children: Proptypes.element.isRequired,
};

export default PageContent;
