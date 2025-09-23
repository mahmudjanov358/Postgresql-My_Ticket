// <==========> <==========> <==========>
// <===== SEAT MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define(
    "Seat",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      sector: { type: DataTypes.INTEGER, allowNull: false },
      row_number: { type: DataTypes.INTEGER, allowNull: false },
      number: { type: DataTypes.INTEGER, allowNull: false },
      venue_id: { type: DataTypes.INTEGER, allowNull: false },
      seat_type_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "seats", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Seat.associate = (models) => {
    Seat.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
      onDelete: "CASCADE",
    });
    Seat.belongsTo(models.Seat_Type, {
      foreignKey: "seat_type_id",
      as: "seat_type",
      onDelete: "CASCADE",
    });
    Seat.hasMany(models.Ticket, {
      foreignKey: "seat_id",
      as: "tickets",
      onDelete: "CASCADE",
    });
  };

  return Seat;
};
