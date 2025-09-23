// <==========> <==========> <==========>
// <===== EVENT_TYPE CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Event_Type } = require("../models/main");

// <===== CREATE EVENT_TYPE =====>
exports.createEvent_Type = async (req, res) => {
  try {
    const event_type = await Event_Type.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Tadbir turi muvaffaqiyatli yaratildi!",
      event_type,
    });
  } catch (error) {
    console.error("Tadbir turini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL EVENT_TYPES =====>
exports.getAllEvent_Types = async (req, res) => {
  try {
    const event_types = await Event_Type.findAll();
    return res.status(200).json({
      success: true,
      message: "Tadbir turlari ro'yxati muvaffaqiyatli olingan",
      event_types,
    });
  } catch (error) {
    console.error("Tadbir turlarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET EVENT_TYPE BY PK =====>
exports.getEvent_TypeByPk = async (req, res) => {
  try {
    const event_type = await Event_Type.findByPk(req.params.id);
    if (!event_type) {
      return res
        .status(404)
        .json({ success: false, message: "Tadbir turi topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Tadbir turi ma'lumotlari muvaffaqiyatli topildi",
      event_type,
    });
  } catch (error) {
    console.error("Tadbir turini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE EVENT_TYPE =====>
exports.updateEvent_Type = async (req, res) => {
  try {
    const event_type = await Event_Type.findByPk(req.params.id);
    if (!event_type) {
      return res
        .status(404)
        .json({ success: false, message: "Tadbir turi topilmadi!" });
    }
    await event_type.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Tadbir turi muvaffaqiyatli yangilandi!",
      event_type,
    });
  } catch (error) {
    console.error("Tadbir turini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE EVENT_TYPE =====>
exports.deleteEvent_Type = async (req, res) => {
  try {
    const event_type = await Event_Type.findByPk(req.params.id);
    if (!event_type) {
      return res
        .status(404)
        .json({ success: false, message: "Tadbir turi topilmadi!" });
    }
    await event_type.destroy();
    return res
      .status(200)
      .json({
        success: true,
        message: "Tadbir turi muvaffaqiyatli o'chirildi!",
      });
  } catch (error) {
    console.error("Tadbir turini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
