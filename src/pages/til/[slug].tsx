/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Head from 'next/head';

import { client } from '@/utils/contentful';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { options } from '@/utils/rich-text-react-renderer-options';

import UtterancesComments from '@/components/modules/UtterancesComments';

import { Box, Heading } from '@chakra-ui/react';

const Post = ({ post }: any) => {
  const {
    fields: {
      content: { content },
      title,
      subtitle,
    },
  } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box className="post">
        <Heading as="h1" size="xl" lineHeight={1.5} mb={6}>
          {title}
        </Heading>
        <Heading as="h2" size="sm" fontWeight="normal" mb={6}>
          {subtitle}
        </Heading>
        {content.map((item: any, index: number) => (
          <React.Fragment key={index}>{documentToReactComponents(item, options)}</React.Fragment>
        ))}
        <UtterancesComments />
      </Box>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const { items } = await client.getEntries({ content_type: 'til', limit: 100 });

  const paths = items.map((item: any) => ({ params: { slug: item.fields.slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

type Params = {
  params: {
    slug: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const { items } = await client.getEntries({ content_type: 'til', 'fields.slug': params.slug });

  if (!items.length) {
    return {
      redirect: {
        destination: '/til',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: items[0],
    },
    revalidate: 600,
  };
}
