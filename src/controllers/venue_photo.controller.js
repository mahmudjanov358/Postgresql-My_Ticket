// <==========> <==========> <==========>
// <===== VENUE_PHOTO CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Venue_Photo, Venue } = require("../models/main");

// <===== CREATE VENUE_PHOTO =====>
exports.createVenue_Photo = async (req, res) => {
  try {
    const venue_photo = await Venue_Photo.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Maydon rasmi muvaffaqiyatli yaratildi!",
      venue_photo,
    });
  } catch (error) {
    console.error("Maydon rasmini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL VENUE_PHOTOS =====>
exports.getAllVenue_Photo = async (req, res) => {
  try {
    const venue_photos = await Venue_Photo.findAll();
    return res.status(200).json({
      success: true,
      message: "Maydon rasmlari ro'yxati muvaffaqiyatli olingan",
      venue_photos,
    });
  } catch (error) {
    console.error("Maydon rasmlarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET VENUE_PHOTO BY PK =====>
exports.getVenue_PhotoByPk = async (req, res) => {
  try {
    const venue_photo = await Venue_Photo.findByPk(req.params.id, {
      include: [{ model: Venue, as: "venue" }],
    });
    if (!venue_photo) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon rasm topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Maydon rasm ma'lumotlari muvaffaqiyatli topildi",
      venue_photo,
    });
  } catch (error) {
    console.error("Maydon rasmini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE VENUE_PHOTO =====>
exports.updateVenue_Photo = async (req, res) => {
  try {
    const venue_photo = await Venue_Photo.findByPk(req.params.id);
    if (!venue_photo) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon rasm topilmadi!" });
    }
    await venue_photo.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Maydon rasm muvaffaqiyatli yangilandi!",
      venue_photo,
    });
  } catch (error) {
    console.error("Maydon rasmini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE VENUE_PHOTO =====>
exports.deleteVenue_Photo = async (req, res) => {
  try {
    const venue_photo = await Venue_Photo.findByPk(req.params.id);
    if (!venue_photo) {
      return res
        .status(404)
        .json({ success: false, message: "Maydon rasm topilmadi!" });
    }
    await venue_photo.destroy();
    return res.status(200).json({
      success: true,
      message: "Maydon rasm muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("Maydon rasmini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
