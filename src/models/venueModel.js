// <==========> <==========> <==========>
// <===== VENUE MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define(
    "Venue",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING },
      location: { type: DataTypes.STRING },
      site: { type: DataTypes.STRING },
      phone: { type: DataTypes.STRING },
      region_id: { type: DataTypes.INTEGER, allowNull: false },
      district_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "venues", timestamps: true, underscored: true }
  );

  Venue.associate = (models) => {
    Venue.hasMany(models.Venue_Photo, {
      foreignKey: "venue_id",
      as: "venue_photos",
      onDelete: "CASCADE",
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seats",
      onDelete: "CASCADE",
    });
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "events",
      onDelete: "CASCADE",
    });
    Venue.hasMany(models.Venue_Type, {
      foreignKey: "venue_id",
      as: "venue_types",
      onDelete: "CASCADE",
    });
    Venue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
      onDelete: "CASCADE",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
      onDelete: "CASCADE",
    });
    Venue.belongsToMany(models.Type, {
      through: models.Venue_Type,
      foreignKey: "venue_id",
      as: "types",
    });
  };

  return Venue;
};
