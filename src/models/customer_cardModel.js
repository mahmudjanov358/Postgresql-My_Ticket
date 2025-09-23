// <==========> <==========> <==========>
// <===== CUSTOMER_CARD MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Customer_Card = sequelize.define(
    "Customer_Card",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      customer_id: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: true },
      number: { type: DataTypes.STRING, allowNull: false },
      year: { type: DataTypes.STRING, allowNull: false },
      month: { type: DataTypes.STRING, allowNull: false },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_main: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { tableName: "customer_cards", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Customer_Card.associate = (models) => {
    Customer_Card.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
      onDelete: "CASCADE",
    });
  };

  return Customer_Card;
};
