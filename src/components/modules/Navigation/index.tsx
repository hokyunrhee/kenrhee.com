import React from 'react';

import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { Sun, Moon } from '@/components/atoms/Icon';

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex position="absolute" top={5} right={5}>
      <IconButton
        aria-label="toggle color mode"
        icon={colorMode === 'light' ? <Sun /> : <Moon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navigation;
