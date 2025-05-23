import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../graphql/generated/graphql';

console.log('Initializing GraphQL client...');

const client = new GraphQLClient("https://salt-and-story.laravel.cloud/graphql", {
  requestMiddleware: (request) => {
    console.log('GraphQL Request:', request);
    return request;
  },
  responseMiddleware: (response) => {
    console.log('GraphQL Response:', response);
    return response;
  }
});

// Test the client immediately
client.request(`
  query Test {
    __schema {
      types {
        name
      }
    }
  }
`).then(result => {
  console.log('Test query successful:', result);
}).catch(error => {
  console.error('Test query failed:', error);
});

export const graphqlClient = client;
export const sdk = getSdk(graphqlClient); 