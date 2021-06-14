import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@/utils/contentful';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { total, skip, limit, items } = await client.getEntries({
      content_type: req.query.content_type,
      order: '-sys.createdAt',
      limit: req.query.limit ?? 100,
      skip: req.query.skip ?? 0,
    });

    const page = skip / limit;

    res.status(200).json({ page, total, skip, limit, items });
  } catch (error) {
    res.status(500).json({ error });
  }
};
