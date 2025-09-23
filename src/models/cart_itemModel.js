// <==========> <==========> <==========>
// <===== CART_ITEM MODEL FILE =====>
// <==========> <==========> <==========>

module.exports = (sequelize, DataTypes) => {
  const Cart_Item = sequelize.define(
    "Cart_Item",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      ticket_id: { type: DataTypes.INTEGER, allowNull: false },
      cart_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "cart_items", timestamps: true, underscored: true }
  );

  // <===== ASSOCIATIONS =====>
  Cart_Item.associate = (models) => {
    Cart_Item.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
      onDelete: "CASCADE",
    });
    Cart_Item.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cart",
      onDelete: "CASCADE",
    });
  };

  return Cart_Item;
};
