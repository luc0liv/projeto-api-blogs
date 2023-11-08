"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: (_a = process.env.MYSQL_USER) !== null && _a !== void 0 ? _a : 'root',
    password: (_b = process.env.MYSQL_PASSWORD) !== null && _b !== void 0 ? _b : '123456',
    database: process.env.MYSQL_DATABASE,
    host: (_c = process.env.MYSQL_HOST) !== null && _c !== void 0 ? _c : 'localhost',
    port: (_d = Number(process.env.MYSQL_PORT)) !== null && _d !== void 0 ? _d : 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
module.exports = config;
