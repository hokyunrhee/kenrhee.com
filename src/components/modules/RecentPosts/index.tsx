/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import PostCard from '@/components/atoms/PostCard';

const DATA = [
  {
    title: "Don't Solve Problems, Eliminate Them",
    subTitle: 'How eliminating problems can drastically simplify your codebases and life',
    href: 'https://www.kentcdodds.com',
  },
  {
    title: 'Super Simple Start to ESModules in Node.js',
    subTitle: "All supported versions of Node.js support ESModules now. Here's how to get started using them.",
    href: 'https://www.kentcdodds.com',
  },
  { title: 'JavaScript Closures', subTitle: 'How JavaScript Closures work', href: 'https://www.kentcdodds.com' },
  {
    title: 'JavaScript Pass By Value Function Parameters',
    subTitle: 'How it works and how to work with it... and around it',
    href: 'https://www.kentcdodds.com',
  },
];

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
