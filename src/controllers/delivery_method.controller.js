// <==========> <==========> <==========>
// <===== DELIVERY_METHOD CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Delivery_Method } = require("../models/main");

// <===== CREATE DELIVERY_METHOD =====>
exports.createDelivery_Method = async (req, res) => {
  try {
    const delivery_method = await Delivery_Method.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Yetkazib berish usuli muvaffaqiyatli yaratildi!",
      delivery_method,
    });
  } catch (error) {
    console.error("Yetkazib berish usulini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL DELIVERY_METHODS =====>
exports.getAllDelivery_Methods = async (req, res) => {
  try {
    const delivery_methods = await Delivery_Method.findAll();
    return res.status(200).json({
      success: true,
      message: "Yetkazib berish usullari ro'yxati muvaffaqiyatli olingan",
      delivery_methods,
    });
  } catch (error) {
    console.error("Yetkazib berish usullarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET DELIVERY_METHOD BY PK =====>
exports.getDelivery_MethodByPk = async (req, res) => {
  try {
    const delivery_method = await Delivery_Method.findByPk(req.params.id);
    if (!delivery_method) {
      return res
        .status(404)
        .json({ success: false, message: "Yetkazib berish usuli topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Yetkazib berish usuli ma'lumotlari muvaffaqiyatli topildi",
      delivery_method,
    });
  } catch (error) {
    console.error(
      "Yetkazib berish usulini ID bo'yicha olishda xatolik:",
      error
    );
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE DELIVERY_METHOD =====>
exports.updateDelivery_Method = async (req, res) => {
  try {
    const delivery_method = await Delivery_Method.findByPk(req.params.id);
    if (!delivery_method) {
      return res
        .status(404)
        .json({ success: false, message: "Yetkazib berish usuli topilmadi!" });
    }
    await delivery_method.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Yetkazib berish usuli muvaffaqiyatli yangilandi!",
      delivery_method,
    });
  } catch (error) {
    console.error("Yetkazib berish usulini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE DELIVERY_METHOD =====>
exports.deleteDelivery_Method = async (req, res) => {
  try {
    const delivery_method = await Delivery_Method.findByPk(req.params.id);
    if (!delivery_method) {
      return res
        .status(404)
        .json({ success: false, message: "Yetkazib berish usuli topilmadi!" });
    }
    await delivery_method.destroy();
    return res.status(200).json({
      success: true,
      message: "Yetkazib berish usuli muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("Yetkazib berish usulini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
