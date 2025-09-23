// <==========> <==========> <==========>
// <===== CART_ITEM CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const {
  Cart_Item,
  Ticket,
  Cart,
  Event,
  Seat,
  Ticket_Status,
} = require("../models/main");

// <===== CREATE CART_ITEM =====>
exports.createCart_Item = async (req, res) => {
  try {
    const cart_item = await Cart_Item.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Savat elementi muvaffaqiyatli yaratildi!",
      cart_item,
    });
  } catch (error) {
    console.error("Savat elementini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL CART_ITEMS =====>
exports.getAllCart_Items = async (req, res) => {
  try {
    const cart_items = await Cart_Item.findAll();
    return res.status(200).json({
      success: true,
      message: "Savat elementlari ro'yxati muvaffaqiyatli olingan",
      cart_items,
    });
  } catch (error) {
    console.error("Savat elementlarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET CART_ITEM BY PK =====>
exports.getCart_ItemByPk = async (req, res) => {
  try {
    const cart_item = await Cart_Item.findByPk(req.params.id, {
      include: [
        { model: Ticket, as: "ticket" },
        { model: Cart, as: "cart" },
      ],
    });
    if (!cart_item) {
      return res
        .status(404)
        .json({ success: false, message: "Savat elementi topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Savat elementi ma'lumotlari muvaffaqiyatli topildi",
      cart_item,
    });
  } catch (error) {
    console.error("Savat elementini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE CART_ITEM =====>
exports.deleteCart_Item = async (req, res) => {
  try {
    const cart_item = await Cart_Item.findByPk(req.params.id, {
      include: [
        { model: Ticket, as: "ticket" },
        { model: Cart, as: "cart" },
      ],
    });
    if (!cart_item) {
      return res
        .status(404)
        .json({ success: false, message: "Savat elementi topilmadi!" });
    }
    await cart_item.destroy();
    return res.status(200).json({
      success: true,
      message: "Savat elementi muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("Savat elementini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
