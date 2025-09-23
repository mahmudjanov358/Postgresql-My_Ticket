// <==========> <==========> <==========>
// <===== SEAT CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Seat, Seat_Type, Venue } = require("../models/main");

// <===== CREATE SEAT =====>
exports.createSeat = async (req, res) => {
  try {
    const seat = await Seat.create(req.body);
    return res.status(201).json({
      success: true,
      message: "O'rindiq muvaffaqiyatli yaratildi!",
      seat,
    });
  } catch (error) {
    console.error("O'rindiq yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL SEATS =====>
exports.getAllSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    return res.status(200).json({
      success: true,
      message: "O'rindiqlar ro'yxati muvaffaqiyatli olingan",
      seats,
    });
  } catch (error) {
    console.error("O'rindiqlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET SEAT BY PK =====>
exports.getSeatByPk = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        { model: Seat_Type, as: "seat_type" },
        { model: Venue, as: "venue" },
      ],
    });
    if (!seat) {
      return res
        .status(404)
        .json({ success: false, message: "O'rindiq topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "O'rindiq ma'lumotlari muvaffaqiyatli topildi",
      seat,
    });
  } catch (error) {
    console.error("O'rindiqni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE SEAT =====>
exports.updateSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) {
      return res
        .status(404)
        .json({ success: false, message: "O'rindiq topilmadi!" });
    }
    await seat.update(req.body);
    return res.status(200).json({
      success: true,
      message: "O'rindiq muvaffaqiyatli yangilandi!",
      seat,
    });
  } catch (error) {
    console.error("O'rindiqni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE SEAT =====>
exports.deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) {
      return res
        .status(404)
        .json({ success: false, message: "O'rindiq topilmadi!" });
    }
    await seat.destroy();
    return res
      .status(200)
      .json({ success: true, message: "O'rindiq muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("O'rindiqni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
