import React, { useEffect } from 'react';

import { client } from '@/utils/contentful';

import { VStack, Spinner } from '@chakra-ui/react';

import AllContents from '@/components/modules/AllContents';

import api from '@/api/axios';

import { useInfiniteQuery } from 'react-query';

import useInView from 'hooks/useInView';

const CONTENT_TYPE = 'blogPost';
const LIMIT = 5;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Blog = ({ initialData }: any) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetching, isFetchingNextPage } = useInfiniteQuery(
    ['posts'],
    ({ pageParam = 0 }) => api.queries.entries({ content_type: CONTENT_TYPE, limit: LIMIT, skip: pageParam * LIMIT }),
    {
      initialData,
      refetchOnMount: false,
      getNextPageParam: (lastPage) => (lastPage.total > lastPage.skip + lastPage.limit ? lastPage.page + 1 : false),
    },
  );

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error has occurred</div>;
  }

  const contents = data?.pages.map((content) => content.items).reduce((acc, cur) => [...acc, ...cur], []) ?? [];

  return (
    <VStack spacing={16} alignItems="flex-start">
      <AllContents heading="All Posts" route="/blog" contents={contents} />
      {isFetching && <Spinner mx="auto" />}
      <div ref={ref} />
    </VStack>
  );
};

export default Blog;

export async function getStaticProps() {
  const { total, skip, limit, items } = await client.getEntries({ content_type: CONTENT_TYPE, order: 'sys.createdAt', limit: LIMIT });
  const page = skip / limit;

  const initialData = {
    pageParams: [0],
    pages: [{ page, total, skip, limit, items }],
  };

  return {
    props: {
      initialData,
    },
    revalidate: 600,
  };
}
