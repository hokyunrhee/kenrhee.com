import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@/utils/contentful';
import prettier from 'prettier';

const DOMAIN = 'https://www.kenrhee.com';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const localRoutes = ['/', '/blog', '/til'];

    /**
     * externalRoutes: 백엔드 서버로 부터 받아옵니다.
     * 해당 프로젝트에 맞게 수정해야하는 부분입니다. 하나 이상의 api 호출이 필요할 수도 있습니다.
     */
    const { items: posts } = await client.getEntries({ content_type: 'blogPost', limit: 100 });
    const { items: tils } = await client.getEntries({ content_type: 'til', limit: 100 });

    const externalRoutes = [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...posts.map((item: any) => `/blog/${item.fields.slug}`),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...tils.map((item: any) => `/til/${item.fields.slug}`),
    ];

    /**
     * localRoutes와 externalRoutes를 합하여 전체 routes를 구성합니다.
     */
    const routes = [...localRoutes, ...externalRoutes];
    const urlSet = routes
      .map((route) => {
        return `
        <url>
            <loc>${`${DOMAIN}${route}`}</loc>
        </url>
        `;
      })
      .join('');
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urlSet}
    </urlset>
    `;
    const formatted = prettier.format(sitemap, { parser: 'html' });

    // set response content header to xml
    res.setHeader('Content-Type', 'text/xml');

    // write the sitemap
    res.write(formatted);
    res.end();
  } catch (error) {
    res.status(500).json({ error });
  }
};
