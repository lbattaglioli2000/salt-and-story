import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'https://your-statamic-cms-url/graphql': {
      headers: {
        // Add your Statamic API token here
        Authorization: 'Bearer YOUR_API_TOKEN',
      },
    },
  },
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        rawRequest: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config; 