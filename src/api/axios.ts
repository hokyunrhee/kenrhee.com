import axios from 'axios';

import { Api } from './type';

const BASEURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3009';

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthHeader = (token: string) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = token;
  }
};

export const unsetAuthHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};

const api: Api = {
  queries: {
    entries: async ({ content_type, limit, skip }) => {
      const { data } = await instance.get('/api/entries', { params: { content_type, limit, skip } });
      return data;
    },
  },
};

export default api;
