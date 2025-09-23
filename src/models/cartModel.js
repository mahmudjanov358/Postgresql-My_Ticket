// <==========> <==========> <==========>
// <===== CART MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      customer_id: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      finishedAt: { type: DataTypes.DATE, allowNull: true },
    },
    { tableName: "carts", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Cart.associate = (models) => {
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
      onDelete: "RESTRICT",
    });
    Cart.hasMany(models.Booking, {
      foreignKey: "cart_id",
      as: "bookings",
      onDelete: "RESTRICT",
    });
  };

  return Cart;
};
