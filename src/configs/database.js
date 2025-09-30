// <==========> <==========> <==========>
// <===== DATABASE CONFIG FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Sequelize } = require("sequelize");
require("dotenv").config();

// <===== SEQUELIZE =====>
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

// <===== EXPORTS =====>
module.exports = sequelize;
