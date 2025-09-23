// <==========> <==========> <==========>
// <===== HUMAN_CATEGORY MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Human_Category = sequelize.define(
    "Human_Category",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      start_age: { type: DataTypes.INTEGER, allowNull: false },
      finish_age: { type: DataTypes.INTEGER, allowNull: false },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { tableName: "human_categories", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Human_Category.associate = (models) => {
    Human_Category.hasMany(models.Event, {
      foreignKey: "human_category_id",
      as: "events",
      onDelete: "SET NULL",
    });
  };

  return Human_Category;
};
