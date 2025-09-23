// <==========> <==========> <==========>
// <===== CUSTOMER MODEL FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      first_name: { type: DataTypes.STRING, allowNull: true },
      last_name: { type: DataTypes.STRING, allowNull: true },
      phone: { type: DataTypes.STRING, allowNull: false },
      hashed_password: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: true },
      birth_date: { type: DataTypes.DATE, allowNull: true },
      gender: { type: DataTypes.STRING, allowNull: true },
      lang_id: { type: DataTypes.INTEGER, allowNull: true },
    },
    { tableName: "customers", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Customer.associate = (models) => {
    Customer.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
      onDelete: "SET NULL",
    });
    Customer.hasMany(models.Cart, {
      foreignKey: "customer_id",
      as: "carts",
      onDelete: "CASCADE",
    });
    Customer.hasMany(models.Customer_Address, {
      foreignKey: "customer_id",
      as: "addresses",
      onDelete: "CASCADE",
    });
    Customer.hasMany(models.Customer_Card, {
      foreignKey: "customer_id",
      as: "cards",
      onDelete: "CASCADE",
    });
  };

  // <===== BEFORE SAVE =====>
  Customer.beforeSave((customer) => {
    if (customer.changed("hashed_password")) {
      customer.hashed_password = bcrypt.hashSync(customer.hashed_password, 10);
    }
  });

  return Customer;
};
