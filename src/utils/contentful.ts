import { createClient } from 'contentful';

const SPACE_ID = process.env.SPACE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

if (!SPACE_ID) throw new Error('Cannot find SPACE_ID');
if (!ACCESS_TOKEN) throw new Error('Cannot find CONTENT_DELIVERY_TOKEN');

export const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});
