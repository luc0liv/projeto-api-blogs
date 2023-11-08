import 'dotenv/config';
import { type Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQL_USER ?? 'root',
  password: process.env.MYSQL_PASSWORD ?? '123456',
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST ?? 'localhost',
  port: Number(process.env.MYSQL_PORT) ?? 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false
}

module.exports = config;
