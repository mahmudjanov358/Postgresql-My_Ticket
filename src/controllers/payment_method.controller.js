// <==========> <==========> <==========>
// <===== PAYMENT_METHOD CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Payment_Method } = require("../models/main");

// <===== CREATE PAYMENT_METHOD =====>
exports.createPayment_Method = async (req, res) => {
  try {
    const payment_method = await Payment_Method.create(req.body);
    return res.status(201).json({
      success: true,
      message: "To'lov usuli muvaffaqiyatli yaratildi!",
      payment_method,
    });
  } catch (error) {
    console.error("To'lov usulini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL PAYMENT_METHODS =====>
exports.getAllPayment_Methods = async (req, res) => {
  try {
    const payment_methods = await Payment_Method.findAll();
    return res.status(200).json({
      success: true,
      message: "To'lov usullari ro'yxati muvaffaqiyatli olingan",
      payment_methods,
    });
  } catch (error) {
    console.error("To'lov usullarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET PAYMENT_METHOD BY PK =====>
exports.getPayment_MethodByPk = async (req, res) => {
  try {
    const payment_method = await Payment_Method.findByPk(req.params.id);
    if (!payment_method) {
      return res
        .status(404)
        .json({ success: false, message: "To'lov usuli topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "To'lov usuli ma'lumotlari muvaffaqiyatli topildi",
      payment_method,
    });
  } catch (error) {
    console.error("To'lov usulini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE PAYMENT_METHOD =====>
exports.updatePayment_Method = async (req, res) => {
  try {
    const payment_method = await Payment_Method.findByPk(req.params.id);
    if (!payment_method) {
      return res
        .status(404)
        .json({ success: false, message: "To'lov usuli topilmadi!" });
    }
    await payment_method.update(req.body);
    return res.status(200).json({
      success: true,
      message: "To'lov usuli muvaffaqiyatli yangilandi!",
      payment_method,
    });
  } catch (error) {
    console.error("To'lov usulini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE PAYMENT_METHOD =====>
exports.deletePayment_Method = async (req, res) => {
  try {
    const payment_method = await Payment_Method.findByPk(req.params.id);
    if (!payment_method) {
      return res
        .status(404)
        .json({ success: false, message: "To'lov usuli topilmadi!" });
    }
    await payment_method.destroy();
    return res
      .status(200)
      .json({
        success: true,
        message: "To'lov usuli muvaffaqiyatli o'chirildi!",
      });
  } catch (error) {
    console.error("To'lov usulini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
