// <==========> <==========> <==========>
// <===== SEAT_TYPE MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Seat_Type = sequelize.define(
    "Seat_Type",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "seat_types", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Seat_Type.associate = (models) => {
    Seat_Type.hasMany(models.Seat, {
      foreignKey: "seat_type_id",
      as: "seats",
      onDelete: "RESTRICT",
    });
  };

  return Seat_Type;
};
