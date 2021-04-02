import React from 'react';

import client from '@/utils/contentful';

import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

const BlogPost = ({ post }) => {
  const {
    fields: { title, subtitle, content },
  } = post;

  const contentHTML = marked(content);
  const sanitizedHTML = sanitizeHtml(contentHTML);

  return (
    <article className="prose mx-auto">
      <h1>{title}</h1>
      <p className="italic font-semibold">{subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </article>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
  });

  return {
    paths: items.map((item) => ({ params: { slug: item.sys.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await client.getEntry({
    entry_id: params.slug,
  });

  return { props: { post } };
}
