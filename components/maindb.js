"use strict";
const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.MAIN_DB_NAME, null, null, {
    dialect: 'postgres',
    logging: false,
    timezone: '+07:00',
    replication: {
        read: [
            { host: process.env.MAIN_DB_HOST_READ, port: process.env.MAIN_DB_PORT_READ, username: process.env.MAIN_DB_USER_READ, password: process.env.MAIN_DB_PASS_READ }
        ],
        write: { host: process.env.MAIN_DB_HOST_WRITE, port: process.env.MAIN_DB_PORT_WRITE, username: process.env.MAIN_DB_USER_WRITE, password: process.env.MAIN_DB_PASS_WRITE }
    }
});


db.authenticate()
    .then(() => console.log(`Connected to Main Database : ${process.env.MAIN_DB_HOST_WRITE}:${process.env.MAIN_DB_PORT_WRITE}`))
    .catch(() => console.error(`Unable to connect to the Main database!`));

module.exports = db;