// eslint-disable-next-line
const contentful = require('contentful');

let client;

if (!client) {
  client = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENT_DELIVERY_TOKEN,
  });
}

export default client;
