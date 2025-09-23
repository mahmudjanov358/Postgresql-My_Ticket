// <==========> <==========> <==========>
// <===== VENUE CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Venue, Region, District } = require("../models/main");

// <===== CREATE VENUE =====>
exports.createVenue = async (req, res) => {
  try {
    const venue = await Venue.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Maydon muvaffaqiyatli yaratildi!",
      venue,
    });
  } catch (error) {
    console.error("Maydon yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL VENUES =====>
exports.getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll();
    return res.status(200).json({
      success: true,
      message: "Maydonlar ro'yxati muvaffaqiyatli olingan",
      venues,
    });
  } catch (error) {
    console.error("Maydonlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET VENUE BY PK =====>
exports.getVenueByPk = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
        { model: Region, as: "region" },
        { model: District, as: "district" },
      ],
    });
    if (!venue) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Maydon ma'lumotlari muvaffaqiyatli topildi",
      venue,
    });
  } catch (error) {
    console.error("Maydonni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE VENUE =====>
exports.updateVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon topilmadi!" });
    }
    await venue.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Maydon muvaffaqiyatli yangilandi!",
      venue,
    });
  } catch (error) {
    console.error("Maydonni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE VENUE =====>
exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon topilmadi!" });
    }
    await venue.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Maydon muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Maydonni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
