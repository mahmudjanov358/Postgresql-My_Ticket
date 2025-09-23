// <==========> <==========> <==========>
// <===== TYPES CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Type } = require("../models/main");

// <===== CREATE TYPE =====>
exports.createType = async (req, res) => {
  try {
    const type = await Type.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Tur muvaffaqiyatli yaratildi!",
      type,
    });
  } catch (error) {
    console.error("Tur yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL TYPES =====>
exports.getAllTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    return res.status(200).json({
      success: true,
      message: "Turlar ro'yxati muvaffaqiyatli olingan",
      types,
    });
  } catch (error) {
    console.error("Turlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET TYPE BY PK =====>
exports.getTypeByPk = async (req, res) => {
  try {
    const type = await Type.findByPk(req.params.id);
    if (!type) {
      return res
        .status(404)
        .json({ success: false, message: "Tur topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Tur ma'lumotlari muvaffaqiyatli topildi",
      type,
    });
  } catch (error) {
    console.error("Turni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE TYPE =====>
exports.updateType = async (req, res) => {
  try {
    const type = await Type.findByPk(req.params.id);
    if (!type) {
      return res
        .status(404)
        .json({ success: false, message: "Tur topilmadi!" });
    }
    await type.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Tur muvaffaqiyatli yangilandi!",
      type,
    });
  } catch (error) {
    console.error("Turni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE TYPE =====>
exports.deleteType = async (req, res) => {
  try {
    const type = await Type.findByPk(req.params.id);
    if (!type) {
      return res
        .status(404)
        .json({ success: false, message: "Tur topilmadi!" });
    }
    await type.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Tur muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Turni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
