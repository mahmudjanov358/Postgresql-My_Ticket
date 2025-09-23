// <==========> <==========> <==========>
// <===== PAYMENT_METHOD MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Payment_Method = sequelize.define(
    "Payment_Method",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "payment_methods", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Payment_Method.associate = (models) => {
    Payment_Method.hasMany(models.Booking, {
      foreignKey: "payment_method_id",
      as: "bookings",
      onDelete: "RESTRICT",
    });
  };

  return Payment_Method;
};
