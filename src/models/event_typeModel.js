// <==========> <==========> <==========>
// <===== EVENT_TYPE MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Event_Type = sequelize.define(
    "Event_Type",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "event_types", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Event_Type.associate = (models) => {
    Event_Type.hasMany(models.Event, {
      foreignKey: "event_type_id",
      as: "events",
      onDelete: "SET NULL",
    });
  };

  return Event_Type;
};
