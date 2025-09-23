// <==========> <==========> <==========>
// <===== REGION MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "Region",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "regions", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Region.associate = (models) => {
    Region.hasMany(models.Customer_Address, {
      foreignKey: "region_id",
      as: "customer_addresses",
      onDelete: "CASCADE",
    });
    Region.hasMany(models.District, {
      foreignKey: "region_id",
      as: "districts",
      onDelete: "CASCADE",
    });
    Region.hasMany(models.Venue, {
      foreignKey: "region_id",
      as: "venues",
      onDelete: "CASCADE",
    });
  };

  return Region;
};
