// <==========> <==========> <==========>
// <===== DISTRICT MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define(
    "District",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      region_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "districts", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
      onDelete: "CASCADE",
    });
    District.hasMany(models.Venue, {
      foreignKey: "district_id",
      as: "venues",
      onDelete: "SET NULL",
    });
    District.hasMany(models.Customer_Address, {
      foreignKey: "district_id",
      as: "customer_addresses",
      onDelete: "SET NULL",
    });
  };

  return District;
};
