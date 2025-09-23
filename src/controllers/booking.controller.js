// <==========> <==========> <==========>
// <===== BOOKING CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const {
  Booking,
  Cart,
  Payment_Method,
  Delivery_Method,
} = require("../models/main");

// <===== CREATE BOOKING =====>
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Bron muvaffaqiyatli yaratildi!",
      booking,
    });
  } catch (error) {
    console.error("Bron yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL BOOKINGS =====>
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    return res.status(200).json({
      success: true,
      message: "Bronlar ro'yxati muvaffaqiyatli olingan",
      bookings,
    });
  } catch (error) {
    console.error("Bronlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET BOOKING BY PK =====>
exports.getBookingByPk = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        { model: Cart, as: "cart" },
        { model: Payment_Method, as: "payment_method" },
        { model: Delivery_Method, as: "delivery_method" },
      ],
    });
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Bron topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Bron ma'lumotlari muvaffaqiyatli topildi",
      booking,
    });
  } catch (error) {
    console.error("Bronni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE BOOKING =====>
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Bron topilmadi!" });
    }
    await booking.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Bron muvaffaqiyatli yangilandi!",
      booking,
    });
  } catch (error) {
    console.error("Bronni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE BOOKING =====>
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Bron topilmadi!" });
    }
    await booking.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Bron muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Bronni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
