// <==========> <==========> <==========>
// <===== BOOKING MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      cart_id: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      finished: { type: DataTypes.DATE, allowNull: true },
      payment_method_id: { type: DataTypes.INTEGER, allowNull: false },
      delivery_method_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "bookings", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Booking.associate = (models) => {
    Booking.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cart",
      onDelete: "CASCADE",
    });
    Booking.belongsTo(models.Payment_Method, {
      foreignKey: "payment_method_id",
      as: "payment_method",
      onDelete: "SET NULL",
    });
    Booking.belongsTo(models.Delivery_Method, {
      foreignKey: "delivery_method_id",
      as: "delivery_method",
      onDelete: "SET NULL",
    });
  };

  return Booking;
};
