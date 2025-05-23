import { getIntrospectionQuery, buildClientSchema, printSchema } from 'graphql';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import { writeFileSync } from 'fs';

// Load environment variables from .env file
dotenv.config();

interface IntrospectionResponse {
  data?: {
    __schema: any;
  };
  errors?: Array<{
    message: string;
    locations?: Array<{
      line: number;
      column: number;
    }>;
  }>;
}

async function introspectSchema() {
  const apiUrl = process.env.PUBLIC_STATAMIC_API_URL;
  
  if (!apiUrl) {
    console.error('PUBLIC_STATAMIC_API_URL is not defined in .env file');
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
    });

    const result = (await response.json()) as IntrospectionResponse;
    
    if (result.errors) {
      console.error('GraphQL Introspection Errors:', result.errors);
      return;
    }

    if (!result.data) {
      console.error('No schema data received');
      return;
    }

    // Convert introspection result to GraphQLSchema
    const schema = buildClientSchema(result.data);
    
    // Convert to SDL
    const sdl = printSchema(schema);

    // Write the schema to a file
    writeFileSync(
      'schema.graphql',
      sdl
    );

    console.log('Schema has been written to schema.graphql');
  } catch (error) {
    console.error('Error introspecting schema:', error);
  }
}

introspectSchema(); 