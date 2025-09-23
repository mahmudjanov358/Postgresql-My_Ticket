// <==========> <==========> <==========>
// <===== ADMIN MODEL FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      login: { type: DataTypes.STRING, allowNull: false },
      hashed_password: { type: DataTypes.STRING, allowNull: false },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_creator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { tableName: "admins", timestamps: true, underscored: true }
  );

  // <===== BEFORE SAVE =====>
  Admin.beforeSave((admin) => {
    if (admin.changed("hashed_password")) {
      admin.hashed_password = bcrypt.hashSync(admin.hashed_password, 10);
    }
  });

  return Admin;
};
