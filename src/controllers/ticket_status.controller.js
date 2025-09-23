// <==========> <==========> <==========>
// <===== TICKET_STATUS CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Ticket_Status } = require("../models/main");

// <===== CREATE TICKET_STATUS =====>
exports.createTicket_Status = async (req, res) => {
  try {
    const ticket_status = await Ticket_Status.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Chipta holati muvaffaqiyatli yaratildi!",
      ticket_status,
    });
  } catch (error) {
    console.error("Chipta holatini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL TICKET_STATUS =====>
exports.getAllTicket_Status = async (req, res) => {
  try {
    const ticket_statuses = await Ticket_Status.findAll();
    return res.status(200).json({
      success: true,
      message: "Chipta holatlari ro'yxati muvaffaqiyatli olingan",
      ticket_statuses,
    });
  } catch (error) {
    console.error("Chipta holatlarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET TICKET_STATUS BY PK =====>
exports.getTicket_StatusByPk = async (req, res) => {
  try {
    const ticket_status = await Ticket_Status.findByPk(req.params.id);
    if (!ticket_status) {
      return res
        .status(404)
        .json({ success: false, message: "Chipta holati topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Chipta holati ma'lumotlari muvaffaqiyatli topildi",
      ticket_status,
    });
  } catch (error) {
    console.error("Chipta holatini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE TICKET_STATUS =====>
exports.updateTicket_Status = async (req, res) => {
  try {
    const ticket_status = await Ticket_Status.findByPk(req.params.id);
    if (!ticket_status) {
      return res
        .status(404)
        .json({ success: false, message: "Chipta holati topilmadi!" });
    }
    await ticket_status.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Chipta holati muvaffaqiyatli yangilandi!",
      ticket_status,
    });
  } catch (error) {
    console.error("Chipta holatini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE TICKET_STATUS =====>
exports.deleteTicket_Status = async (req, res) => {
  try {
    const ticket_status = await Ticket_Status.findByPk(req.params.id);
    if (!ticket_status) {
      return res
        .status(404)
        .json({ success: false, message: "Chipta holati topilmadi!" });
    }
    await ticket_status.destroy();
    return res
      .status(200)
      .json({
        success: true,
        message: "Chipta holati muvaffaqiyatli o'chirildi!",
      });
  } catch (error) {
    console.error("Chipta holatini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
