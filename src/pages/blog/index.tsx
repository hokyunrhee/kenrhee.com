import React from 'react';

import client from '@/utils/contentful';

import Link from 'next/link';

import Card from '@/components/modules/Card';
import { SimpleGrid } from '@chakra-ui/react';

const Blog = ({ posts }) => {
  return (
    <div>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {posts.map((post) => (
          <Link key={post.sys.id} href={`blog/${post.sys.id}`}>
            <a>
              <Card
                title={post.fields.title}
                subtitle={post.fields.subtitle}
                url={post.fields.banner.fields.file.url}
                tags={post.metadata.tags.map((item) => item.sys.id)}
              />
            </a>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
  });

  return { props: { posts: items } };
}
