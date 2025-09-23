// <==========> <==========> <==========>
// <===== VENUE_TYPES MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Venue_Type = sequelize.define(
    "Venue_Type",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      venue_id: { type: DataTypes.INTEGER, allowNull: false },
      type_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "venue_types", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Venue_Type.associate = (models) => {
    Venue_Type.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
      onDelete: "CASCADE",
    });
    Venue_Type.belongsTo(models.Type, {
      foreignKey: "type_id",
      as: "type",
      onDelete: "CASCADE",
    });
  };

  return Venue_Type;
};
