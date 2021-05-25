import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import Header from '@/components/modules/Header';
import Footer from '@/components/modules/Footer';

interface Props extends ContainerProps {
  children: React.ReactElement;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container as="main" flexGrow={1} maxW="container.sm" px={4} py={8}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default AppLayout;
