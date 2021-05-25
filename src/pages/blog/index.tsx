import React from 'react';

import { VStack } from '@chakra-ui/react';

import AllPosts from '@/components/modules/AllPosts';

const Blog = () => {
  return (
    <VStack spacing={16} alignItems="flex-start">
      <AllPosts />
    </VStack>
  );
};

export default Blog;
