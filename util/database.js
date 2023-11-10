const Sequelize = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    dialectModule: pg,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize;
