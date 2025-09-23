// <==========> <==========> <==========>
// <===== VENUE_PHOTO MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Venue_Photo = sequelize.define(
    "Venue_Photo",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      venue_id: { type: DataTypes.INTEGER, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "venue_photos", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Venue_Photo.associate = (models) => {
    Venue_Photo.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
      onDelete: "CASCADE",
    });
  };

  return Venue_Photo;
};
