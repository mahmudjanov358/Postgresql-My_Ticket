// <==========> <==========> <==========>
// <===== TICKET CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Ticket, Event, Seat, Ticket_Status } = require("../models/main");

// <===== CREATE TICKET =====>
exports.createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Chipta muvaffaqiyatli yaratildi!",
      ticket,
    });
  } catch (error) {
    console.error("Chipta yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL TICKETS =====>
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    return res.status(200).json({
      success: true,
      message: "Chiptalar ro'yxati muvaffaqiyatli olingan",
      tickets,
    });
  } catch (error) {
    console.error("Chiptalarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET TICKET BY PK =====>
exports.getTicketByPk = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        { model: Event, as: "event" },
        { model: Seat, as: "seat" },
        { model: Ticket_Status, as: "ticket_status" },
      ],
    });
    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Chipta topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Chipta ma'lumotlari muvaffaqiyatli topildi",
      ticket,
    });
  } catch (error) {
    console.error("Chiptani ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE TICKET =====>
exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Chipta topilmadi!" });
    }
    await ticket.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Chipta muvaffaqiyatli yangilandi!",
      ticket,
    });
  } catch (error) {
    console.error("Chiptani yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE TICKET =====>
exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Chipta topilmadi!" });
    }
    await ticket.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Chipta muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Chiptani o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
