// <==========> <==========> <==========>
// <===== DELIVERY_METHOD MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Delivery_Method = sequelize.define(
    "Delivery_Method",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "delivery_methods", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Delivery_Method.associate = (models) => {
    Delivery_Method.hasMany(models.Booking, {
      foreignKey: "delivery_method_id",
      as: "bookings",
      onDelete: "RESTRICT",
    });
  };

  return Delivery_Method;
};
