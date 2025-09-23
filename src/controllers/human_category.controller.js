// <==========> <==========> <==========>
// <===== HUMAN_CATEGORY CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Human_Category } = require("../models/main");

// <===== CREATE HUMAN_CATEGORY =====>
exports.createHuman_Category = async (req, res) => {
  try {
    const human_category = await Human_Category.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Odam toifasi muvaffaqiyatli yaratildi!",
      human_category,
    });
  } catch (error) {
    console.error("Odam toifasini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL HUMAN_CATEGORIES =====>
exports.getAllHuman_Categories = async (req, res) => {
  try {
    const human_categories = await Human_Category.findAll();
    return res.status(200).json({
      success: true,
      message: "Odam toifalari ro'yxati muvaffaqiyatli olingan",
      human_categories,
    });
  } catch (error) {
    console.error("Odam toifalarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET HUMAN_CATEGORY BY PK =====>
exports.getHuman_CategoryByPk = async (req, res) => {
  try {
    const human_category = await Human_Category.findByPk(req.params.id);
    if (!human_category) {
      return res
        .status(404)
        .json({ success: false, message: "Odam toifasi topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Odam toifasi ma'lumotlari muvaffaqiyatli topildi",
      human_category,
    });
  } catch (error) {
    console.error("Odam toifasini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE HUMAN_CATEGORY =====>
exports.updateHuman_Category = async (req, res) => {
  try {
    const human_category = await Human_Category.findByPk(req.params.id);
    if (!human_category) {
      return res
        .status(404)
        .json({ success: false, message: "Odam toifasi topilmadi!" });
    }
    await human_category.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Odam toifasi muvaffaqiyatli yangilandi!",
      human_category,
    });
  } catch (error) {
    console.error("Odam toifasini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE HUMAN_CATEGORY =====>
exports.deleteHuman_Category = async (req, res) => {
  try {
    const human_category = await Human_Category.findByPk(req.params.id);
    if (!human_category) {
      return res
        .status(404)
        .json({ success: false, message: "Odam toifasi topilmadi!" });
    }
    await human_category.destroy();
    return res
      .status(200)
      .json({
        success: true,
        message: "Odam toifasi muvaffaqiyatli o'chirildi!",
      });
  } catch (error) {
    console.error("Odam toifasini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
