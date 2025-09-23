// <==========> <==========> <==========>
// <===== SEAT_TYPE CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Seat_Type } = require("../models/main");

// <===== CREATE SEAT_TYPE =====>
exports.createSeat_Type = async (req, res) => {
  try {
    const seat_type = await Seat_Type.create(req.body);
    return res.status(201).json({
      success: true,
      message: "O'rindiq turi muvaffaqiyatli yaratildi!",
      seat_type,
    });
  } catch (error) {
    console.error("O'rindiq turini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL SEAT_TYPES =====>
exports.getAllSeat_Types = async (req, res) => {
  try {
    const seat_types = await Seat_Type.findAll();
    return res.status(200).json({
      success: true,
      message: "O'rindiq turlari ro'yxati muvaffaqiyatli olingan",
      seat_types,
    });
  } catch (error) {
    console.error("O'rindiq turlarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET SEAT_TYPE BY PK =====>
exports.getSeat_TypeByPk = async (req, res) => {
  try {
    const seat_type = await Seat_Type.findByPk(req.params.id);
    if (!seat_type) {
      return res
        .status(404)
        .json({ success: false, message: "O'rindiq turi topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "O'rindiq turi ma'lumotlari muvaffaqiyatli topildi",
      seat_type,
    });
  } catch (error) {
    console.error("O'rindiq turini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE SEAT_TYPE =====>
exports.updateSeat_Type = async (req, res) => {
  try {
    const seat_type = await Seat_Type.findByPk(req.params.id);
    if (!seat_type) {
      return res
        .status(404)
        .json({ success: false, message: "O'rindiq turi topilmadi!" });
    }
    await seat_type.update(req.body);
    return res.status(200).json({
      success: true,
      message: "O'rindiq turi muvaffaqiyatli yangilandi!",
      seat_type,
    });
  } catch (error) {
    console.error("O'rindiq turini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE SEAT_TYPE =====>
exports.deleteSeat_Type = async (req, res) => {
  try {
    const seat_type = await Seat_Type.findByPk(req.params.id);
    if (!seat_type) {
      return res
        .status(404)
        .json({ success: false, message: "O'rindiq turi topilmadi!" });
    }
    await seat_type.destroy();
    return res.status(200).json({
      success: true,
      message: "O'rindiq turi muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("O'rindiq turini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
