module.exports = {
  type: 'postgres',
  port: process.env.PORT,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: {
    migrationDir: 'src/migrations',
  },
};
