// <==========> <==========> <==========>
// <===== DISTRICT CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { District, Region } = require("../models/main");

// <===== CREATE DISTRICT =====>
exports.createDistrict = async (req, res) => {
  try {
    const district = await District.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Tuman muvaffaqiyatli yaratildi!",
      district,
    });
  } catch (error) {
    console.error("Tuman yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL DISTRICTS =====>
exports.getAllDistricts = async (req, res) => {
  try {
    const districts = await District.findAll();
    return res.status(200).json({
      success: true,
      message: "Tumanlar ro'yxati muvaffaqiyatli olingan",
      districts,
    });
  } catch (error) {
    console.error("Tumanlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET DISTRICT BY PK =====>
exports.getDistrictByPk = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id, {
      include: [{ model: Region, as: "region" }],
    });
    if (!district) {
      return res
        .status(404)
        .json({ success: false, message: "Tuman topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Tuman ma'lumotlari muvaffaqiyatli topildi",
      district,
    });
  } catch (error) {
    console.error("Tuman ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE DISTRICT =====>
exports.updateDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) {
      return res
        .status(404)
        .json({ success: false, message: "Tuman topilmadi!" });
    }
    await district.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Tuman muvaffaqiyatli yangilandi!",
      district,
    });
  } catch (error) {
    console.error("Tuman yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE DISTRICT =====>
exports.deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) {
      return res
        .status(404)
        .json({ success: false, message: "Tuman topilmadi!" });
    }
    await district.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Tuman muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Tuman o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
