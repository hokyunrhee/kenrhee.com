import React from 'react';

import { Flex, Container } from '@chakra-ui/react';

import Navigation from '@/components/modules/Navigation';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Flex flexGrow={1} bg="gray.900">
      <Navigation />
      <Container maxW="container.xl">{children}</Container>
    </Flex>
  );
};

export default AppLayout;
