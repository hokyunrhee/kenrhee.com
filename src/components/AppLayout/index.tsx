import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

import NavigationRail from '@/components/modules/NavigationRail';
// import Navigation from '@/components/modules/Navigation';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Flex flexGrow={1} bg="gray.50">
      <NavigationRail />
      {/* <Navigation /> */}

      <Box flexGrow={1} p={5}>
        {children}
      </Box>
    </Flex>
  );
};

export default AppLayout;
