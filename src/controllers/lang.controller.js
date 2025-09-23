// <==========> <==========> <==========>
// <===== LANG CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Lang } = require("../models/main");

// <===== CREATE LANG =====>
exports.createLang = async (req, res) => {
  try {
    const lang = await Lang.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Til muvaffaqiyatli yaratildi!",
      lang,
    });
  } catch (error) {
    console.error("Til yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL LANGS =====>
exports.getAllLangs = async (req, res) => {
  try {
    const langs = await Lang.findAll();
    return res.status(200).json({
      success: true,
      message: "Tillar ro'yxati muvaffaqiyatli olingan",
      langs,
    });
  } catch (error) {
    console.error("Tillarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET LANG BY PK =====>
exports.getLangByPk = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) {
      return res
        .status(404)
        .json({ success: false, message: "Til topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Til ma'lumotlari muvaffaqiyatli topildi",
      lang,
    });
  } catch (error) {
    console.error("Tilni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE LANG =====>
exports.updateLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) {
      return res
        .status(404)
        .json({ success: false, message: "Til topilmadi!" });
    }
    await lang.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Til muvaffaqiyatli yangilandi!",
      lang,
    });
  } catch (error) {
    console.error("Tilni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE LANG =====>
exports.deleteLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) {
      return res
        .status(404)
        .json({ success: false, message: "Til topilmadi!" });
    }
    await lang.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Til muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Tilni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
