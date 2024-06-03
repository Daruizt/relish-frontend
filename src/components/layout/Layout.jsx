import React from 'react';
import { Container } from '@mui/material';

import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;
  
  return (
    <>
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
