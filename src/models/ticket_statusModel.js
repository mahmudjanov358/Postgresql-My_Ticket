// <==========> <==========> <==========>
// <===== TICKET_STATUS MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Ticket_Status = sequelize.define(
    "Ticket_Status",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "ticket_statuses", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Ticket_Status.associate = (models) => {
    Ticket_Status.hasMany(models.Ticket, {
      foreignKey: "ticket_status_id",
      as: "tickets",
      onDelete: "RESTRICT",
    });
  };

  return Ticket_Status;
};
