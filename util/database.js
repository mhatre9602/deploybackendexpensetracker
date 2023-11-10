const Sequelize = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

module.exports = sequelize;
