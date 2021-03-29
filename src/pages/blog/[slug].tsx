import React from 'react';

import client from '@/utils/contentful';

import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

import { Box } from '@chakra-ui/react';

const BlogPost = ({ post }) => {
  const { title, subtitle, banner, content } = post.fields;

  const contentHTML = marked(content);
  const sanitizedHTML = sanitizeHtml(contentHTML);

  return (
    <Box as="article" className="prose sm:prose" mx="auto">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </Box>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
  });

  return {
    paths: items.map((item) => ({ params: { slug: item.sys.id } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await client.getEntry({
    entry_id: params.slug,
  });

  // Pass post data to the page via props
  return { props: { post } };
}
