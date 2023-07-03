import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env['POSTGRES_URL'] as string,
    host: process.env['POSTGRES_HOST'] || 'localhost',
    port: parseInt(process.env['POSTGRES_PORT'] || '5432'),
    user: process.env['POSTGRES_USER'] || 'postgres',
    password: process.env['POSTGRES_PASSWORD'] || 'postgres',
    database: process.env['POSTGRES_DATABASE'] || 'postgres',
  },
  schema: './src/database/schema.ts',
  out: './src/database/migrations',
} satisfies Config;
