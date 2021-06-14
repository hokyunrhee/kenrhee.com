import React from 'react';

import { client } from '@/utils/contentful';

import { VStack } from '@chakra-ui/react';

import Greeting from '@/components/modules/Greeting';
import RecentPosts from '@/components/modules/RecentPosts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = ({ recentPosts }: any) => {
  return (
    <VStack spacing={16} alignItems="flex-start">
      <Greeting />
      <RecentPosts recentPosts={recentPosts} />
    </VStack>
  );
};

export default Home;

export async function getStaticProps() {
  const { items } = await client.getEntries({ content_type: 'blogPost', order: '-sys.createdAt', limit: 5 });

  return {
    props: {
      recentPosts: items,
    },
    revalidate: 600,
  };
}
