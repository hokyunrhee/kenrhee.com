import Head from 'next/head';

import client from '@/utils/contentful';

import marked from 'marked';
import sanitizeHtml from 'sanitize-html';

import UtterancesComments from '@/components/modules/UtterancesComments';

const BlogPost = ({ post }: any) => {
  const {
    fields: { title, subtitle, content },
  } = post;

  const contentHTML = marked(content);
  const sanitizedHTML = sanitizeHtml(contentHTML);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="prose mx-auto">
        <h1>{title}</h1>
        <p className="italic font-semibold">{subtitle}</p>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        <UtterancesComments />
      </article>
    </>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: 'til',
  });

  return {
    paths: items.map((item) => ({ params: { slug: item.sys.id } })),
    fallback: false,
  };
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await client.getEntry(params.slug);

  return { props: { post }, revalidate: 60 };
}
