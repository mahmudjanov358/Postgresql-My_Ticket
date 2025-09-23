// <==========> <==========> <==========>
// <===== LANG MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define(
    "Lang",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: "langs", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Lang.associate = (models) => {
    Lang.hasMany(models.Event, {
      foreignKey: "lang_id",
      as: "events",
      onDelete: "SET NULL",
    });
    Lang.hasMany(models.Customer, {
      foreignKey: "lang_id",
      as: "customers",
      onDelete: "SET NULL",
    });
  };

  return Lang;
};
