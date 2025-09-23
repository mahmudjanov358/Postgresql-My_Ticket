// <==========> <==========> <==========>
// <===== CART CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Cart, Customer } = require("../models/main");

// <===== CREATE CART =====>
exports.createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Savat muvaffaqiyatli yaratildi!",
      cart,
    });
  } catch (error) {
    console.error("Savat yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL CARTS =====>
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    return res.status(200).json({
      success: true,
      message: "Savatlar ro'yxati muvaffaqiyatli olingan",
      carts,
    });
  } catch (error) {
    console.error("Savatlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET CART BY PK =====>
exports.getCartByPk = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [{ model: Customer, as: "customer" }],
    });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Savat topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Savat ma'lumotlari muvaffaqiyatli topildi",
      cart,
    });
  } catch (error) {
    console.error("Savatni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE CART =====>
exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Savat topilmadi!" });
    }
    await cart.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Savat muvaffaqiyatli yangilandi!",
      cart,
    });
  } catch (error) {
    console.error("Savatni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE CART =====>
exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [{ model: Customer, as: "customer" }],
    });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Savat topilmadi!" });
    }
    await cart.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Savat muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Savatni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
