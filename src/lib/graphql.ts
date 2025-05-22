import { GraphQLClient } from 'graphql-request';

const STATAMIC_API_URL = import.meta.env.PUBLIC_STATAMIC_API_URL;
const STATAMIC_API_TOKEN = import.meta.env.STATAMIC_API_TOKEN;

if (!STATAMIC_API_URL) {
  throw new Error('PUBLIC_STATAMIC_API_URL environment variable is not set');
}

if (!STATAMIC_API_TOKEN) {
  throw new Error('STATAMIC_API_TOKEN environment variable is not set');
}

export const graphqlClient = new GraphQLClient(STATAMIC_API_URL, {
  headers: {
    Authorization: `Bearer ${STATAMIC_API_TOKEN}`,
  },
}); 