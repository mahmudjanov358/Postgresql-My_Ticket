// <==========> <==========> <==========>
// <===== MAIN.js MODELS CENTER FILE =====>
// <==========> <==========> <==========>

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const fs = require("fs");
const path = require("path");

// <===== LOAD MODELS =====>
fs.readdirSync(__dirname)
  .filter((file) => file !== "main.js" && file.endsWith("Model.js"))
  .forEach((file) => {
    require(path.join(__dirname, file))(sequelize, DataTypes);
  });

// <===== ASSOCIATIONS =====>
Object.values(sequelize.models).forEach((model) => {
  if (typeof model.associate === "function") {
    model.associate(sequelize.models);
  }
});

// <===== EXPORT MODELS & SEQUELIZE =====>
module.exports = {
  ...sequelize.models,
  sequelize,
};
