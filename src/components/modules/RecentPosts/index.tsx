/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import PostCard from '@/components/atoms/PostCard';

const RecentPosts = ({ recentPosts }: any) => {
  return (
    <Box>
      <Heading as="h3" size="xl" fontWeight="bold" mb={8}>
        Recent Posts
      </Heading>
      <SimpleGrid columns={1} spacing={8}>
        {recentPosts.map((item: any) => (
          <PostCard key={item.sys.id} title={item.fields.title} subTitle={item.fields.subtitle} href={`/blog/${item.fields.slug}`} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecentPosts;
