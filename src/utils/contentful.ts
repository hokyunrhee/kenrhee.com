import { createClient } from 'contentful';

const SPACE_ID = process.env.SPACE_ID;
const CONTENT_DELIVERY_TOKEN = process.env.CONTENT_DELIVERY_TOKEN;

if (!SPACE_ID) throw new Error('Cannot find SPACE_ID');
if (!CONTENT_DELIVERY_TOKEN) throw new Error('Cannot find CONTENT_DELIVERY_TOKEN');

const client = createClient({
  space: SPACE_ID,
  accessToken: CONTENT_DELIVERY_TOKEN,
});

export default client;
