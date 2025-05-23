import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'https://salt-and-story.laravel.cloud/graphql': {},
  },
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        {
          'typescript-graphql-request': {
            rawRequest: true,
            dedupeFragments: true,
            useTypeImports: true
          }
        }
      ],
    },
  },
};

export default config; 