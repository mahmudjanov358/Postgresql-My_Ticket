// <==========> <==========> <==========>
// <===== CUSTOMER_CARD CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Customer_Card, Customer } = require("../models/main");

// <===== CREATE CUSTOMER_CARD =====>
exports.createCustomer_Card = async (req, res) => {
  try {
    const customer_card = await Customer_Card.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Mijoz karta muvaffaqiyatli yaratildi!",
      customer_card,
    });
  } catch (error) {
    console.error("Mijoz kartasini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL CUSTOMER_CARDS =====>
exports.getAllCustomer_Cards = async (req, res) => {
  try {
    const customer_cards = await Customer_Card.findAll();
    return res.status(200).json({
      success: true,
      message: "Mijoz kartalari ro'yxati muvaffaqiyatli olingan",
      customer_cards,
    });
  } catch (error) {
    console.error("Mijoz kartalarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET CUSTOMER_CARD BY PK =====>
exports.getCustomer_CardByPk = async (req, res) => {
  try {
    const customer_card = await Customer_Card.findByPk(req.params.id, {
      include: [{ model: Customer, as: "customer" }],
    });
    if (!customer_card) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz karta topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Mijoz karta ma'lumotlari muvaffaqiyatli topildi",
      customer_card,
    });
  } catch (error) {
    console.error("Mijoz kartasini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE CUSTOMER_CARD =====>
exports.updateCustomer_Card = async (req, res) => {
  try {
    const customer_card = await Customer_Card.findByPk(req.params.id);
    if (!customer_card) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz karta topilmadi!" });
    }
    await customer_card.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Mijoz karta muvaffaqiyatli yangilandi!",
      customer_card,
    });
  } catch (error) {
    console.error("Mijoz kartasini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE CUSTOMER_CARD =====>
exports.deleteCustomer_Card = async (req, res) => {
  try {
    const customer_card = await Customer_Card.findByPk(req.params.id);
    if (!customer_card) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz karta topilmadi!" });
    }
    await customer_card.destroy();
    return res.status(200).json({
      success: true,
      message: "Mijoz karta muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("Mijoz kartasini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
