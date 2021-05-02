import React from 'react';

import client from '@/utils/contentful';

import Link from 'next/link';

import Card from '@/components/modules/Card';

const TIL = ({ posts }: any) => {
  return (
    <section>
      {posts.map((post: any) => (
        <Link key={post.sys.id} href={`/til/${post.sys.id}`}>
          <a>
            <Card
              title={post.fields.title}
              subtitle={post.fields.subtitle}
              tags={post.metadata.tags.map((item: any) => item.sys.id)}
            />
          </a>
        </Link>
      ))}
    </section>
  );
};

export default TIL;

export async function getStaticProps() {
  const { items } = await client.getEntries({
    content_type: 'til',
  });

  return { props: { posts: items }, revalidate: 60 };
}
