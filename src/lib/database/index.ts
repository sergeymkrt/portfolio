import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

const db = drizzle(sql);

// migrate(db, { migrationsFolder: './src/database/migrations' }).then((r) =>
//   console.log('Migrations complete:', r),
// );
// const result = await db.select().from(...);

export default db;
