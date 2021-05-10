import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

interface Props extends ContainerProps {
  children: React.ReactElement;
}

const AppLayout = (props: Props) => {
  return <Container maxW="container.xl" px={4} {...props} />;
};

export default AppLayout;
