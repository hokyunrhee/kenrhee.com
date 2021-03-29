import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import { Home, Pencil, Me } from '@/components/atoms/Icon';

import Tab from './Tab';

const NavigationRail = () => {
  return (
    <Flex
      as="nav"
      flexDirection="column"
      width="70px"
      height="100vh"
      position="sticky"
      top={0}
      left={0}
      bg="white"
      boxShadow="xl"
    >
      <Tab href="/" width="70px" height="70px">
        <Home w={8} h={8} />
        <Text fontSize="xs" fontWeight="bold">
          Home
        </Text>
      </Tab>

      <Tab href="/blog" width="70px" height="70px">
        <Pencil w={8} h={8} />
        <Text fontSize="xs" fontWeight="bold">
          Blog
        </Text>
      </Tab>

      <Tab href="/about" width="70px" height="70px">
        <Me w={8} h={8} />
        <Text fontSize="xs" fontWeight="bold">
          About
        </Text>
      </Tab>
    </Flex>
  );
};

export default NavigationRail;
