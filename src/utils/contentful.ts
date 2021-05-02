import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.SPACE_ID as string,
  accessToken: process.env.CONTENT_DELIVERY_TOKEN as string,
});

export default client;
