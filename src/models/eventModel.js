// <==========> <==========> <==========>
// <===== EVENT MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      photo: { type: DataTypes.STRING, allowNull: false },
      start_date: { type: DataTypes.DATE, allowNull: false },
      start_time: { type: DataTypes.TIME, allowNull: false },
      finish_date: { type: DataTypes.DATE, allowNull: false },
      finish_time: { type: DataTypes.TIME, allowNull: false },
      info: { type: DataTypes.TEXT, allowNull: true },
      event_type_id: { type: DataTypes.INTEGER, allowNull: false },
      human_category_id: { type: DataTypes.INTEGER, allowNull: false },
      venue_id: { type: DataTypes.INTEGER, allowNull: false },
      lang_id: { type: DataTypes.INTEGER, allowNull: false },
      release_date: { type: DataTypes.DATE, allowNull: false },
    },
    { tableName: "events", timestamps: true, underscored: true }
  );

  Event.associate = (models) => {
    Event.hasMany(models.Ticket, {
      foreignKey: "event_id",
      as: "tickets",
      onDelete: "CASCADE",
    });
    Event.belongsTo(models.Event_Type, {
      foreignKey: "event_type_id",
      as: "event_type",
      onDelete: "SET NULL",
    });
    Event.belongsTo(models.Human_Category, {
      foreignKey: "human_category_id",
      as: "human_category",
      onDelete: "SET NULL",
    });
    Event.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
      onDelete: "SET NULL",
    });
    Event.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
      onDelete: "SET NULL",
    });
  };

  return Event;
};
