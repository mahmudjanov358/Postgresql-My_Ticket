// <==========> <==========> <==========>
// <===== REGION CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Region } = require("../models/main");

// <===== CREATE REGION =====>
exports.createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Viloyat muvaffaqiyatli yaratildi!",
      region,
    });
  } catch (error) {
    console.error("Viloyat yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL REGIONS =====>
exports.getAllRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    return res.status(200).json({
      success: true,
      message: "Viloyatlar ro'yxati muvaffaqiyatli olingan",
      regions,
    });
  } catch (error) {
    console.error("Viloyatlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET REGION BY PK =====>
exports.getRegionByPk = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) {
      return res
        .status(404)
        .json({ success: false, message: "Viloyat topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Viloyat ma'lumotlari muvaffaqiyatli topildi",
      region,
    });
  } catch (error) {
    console.error("Viloyatni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE REGION =====>
exports.updateRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) {
      return res
        .status(404)
        .json({ success: false, message: "Viloyat topilmadi!" });
    }
    await region.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Viloyat muvaffaqiyatli yangilandi!",
      region,
    });
  } catch (error) {
    console.error("Viloyatni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE REGION =====>
exports.deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) {
      return res
        .status(404)
        .json({ success: false, message: "Viloyat topilmadi!" });
    }
    await region.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Viloyat muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Viloyatni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
