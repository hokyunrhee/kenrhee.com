/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import PostCard from '@/components/atoms/PostCard';

interface Props {
  heading: string;
  route: string;
  contents: any[];
}

const AllContents = ({ heading, route, contents }: Props) => {
  return (
    <Box>
      <Heading as="h3" size="xl" fontWeight="bold" mb={8}>
        {heading}
      </Heading>
      <SimpleGrid columns={1} spacing={8}>
        {contents.map((item: any) => (
          <PostCard key={item.sys.id} title={item.fields.title} subTitle={item.fields.subtitle} href={`${route}/${item.fields.slug}`} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AllContents;
