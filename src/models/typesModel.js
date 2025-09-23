module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { tableName: "types", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Type.associate = (models) => {
    Type.hasMany(models.Venue_Type, {
      foreignKey: "type_id",
      as: "venue_types",
      onDelete: "CASCADE",
    });
  };

  return Type;
};
