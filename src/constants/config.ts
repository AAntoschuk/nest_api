import { Blog } from 'src/blog/blog.entity';
import { Users } from 'src/users/user.entity';

//TODO: update database url
export const config = () => ({
  database: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Blog, Users],
    synchronize: false,
    ssl: { rejectUnauthorized: false },
    migrations: ['src/migration/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  },
});
