// <==========> <==========> <==========>
// <===== CUSTOMER_ADDRESS MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Customer_Address = sequelize.define(
    "Customer_Address",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      customer_id: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      region_id: { type: DataTypes.INTEGER, allowNull: false },
      district_id: { type: DataTypes.INTEGER, allowNull: false },
      street: { type: DataTypes.STRING, allowNull: false },
      house: { type: DataTypes.STRING, allowNull: false },
      flat: { type: DataTypes.INTEGER, allowNull: true },
      location: { type: DataTypes.STRING, allowNull: true },
      post_index: { type: DataTypes.STRING, allowNull: true },
      info: { type: DataTypes.TEXT, allowNull: true },
    },
    { tableName: "customer_addresses", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Customer_Address.associate = (models) => {
    Customer_Address.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
      onDelete: "CASCADE",
    });
    Customer_Address.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
      onDelete: "SET NULL",
    });
    Customer_Address.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
      onDelete: "SET NULL",
    });
  };

  return Customer_Address;
};
