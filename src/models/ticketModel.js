// <==========> <==========> <==========>
// <===== TICKET MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "Ticket",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      event_id: { type: DataTypes.INTEGER, allowNull: false },
      seat_id: { type: DataTypes.INTEGER, allowNull: false },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0 },
      },
      service_fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0 },
      },
      ticket_status_id: { type: DataTypes.INTEGER, allowNull: false },
      ticket_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: "tickets", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
      onDelete: "CASCADE",
    });
    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "seat",
      onDelete: "CASCADE",
    });
    Ticket.belongsTo(models.Ticket_Status, {
      foreignKey: "ticket_status_id",
      as: "ticket_status",
      onDelete: "RESTRICT",
    });
    Ticket.hasMany(models.Cart_Item, {
      foreignKey: "ticket_id",
      as: "cart_items",
      onDelete: "CASCADE",
    });
  };

  return Ticket;
};
