// <==========> <==========> <==========>
// <===== VENUE_TYPES CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Venue_Type, Venue, Type } = require("../models/main");

// <===== CREATE VENUE_TYPE =====>
exports.createVenue_Type = async (req, res) => {
  try {
    const venue_type = await Venue_Type.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Maydon turi muvaffaqiyatli yaratildi!",
      venue_type,
    });
  } catch (error) {
    console.error("Maydon turini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL VENUE_TYPES =====>
exports.getAllVenue_Types = async (req, res) => {
  try {
    const venue_types = await Venue_Type.findAll();
    return res.status(200).json({
      success: true,
      message: "Maydon turlari ro'yxati muvaffaqiyatli olingan",
      venue_types,
    });
  } catch (error) {
    console.error("Maydon turlarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET VENUE_TYPE BY PK =====>
exports.getVenue_TypeByPk = async (req, res) => {
  try {
    const venue_type = await Venue_Type.findByPk(req.params.id, {
      include: [
        { model: Venue, as: "venue" },
        { model: Type, as: "type" },
      ],
    });
    if (!venue_type) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon turi topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Maydon turi ma'lumotlari muvaffaqiyatli topildi",
      venue_type,
    });
  } catch (error) {
    console.error("Maydon turini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE VENUE_TYPE =====>
exports.deleteVenue_Type = async (req, res) => {
  try {
    const venue_type = await Venue_Type.findByPk(req.params.id);
    if (!venue_type) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon turi topilmadi!" });
    }
    await venue_type.destroy();
    return res.status(200).json({
      success: true,
      message: "Maydon turi muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("Maydon turini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
