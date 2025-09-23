// <==========> <==========> <==========>
// <===== EVENT CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== EVENT CONTROLLER =====>
const {
  Event,
  Human_Category,
  Lang,
  Venue,
  Event_Type,
} = require("../models/main");

// <===== CREATE EVENT =====>
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Tadbir muvaffaqiyatli yaratildi!",
      event,
    });
  } catch (error) {
    console.error("Tadbir yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL EVENTS =====>
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    return res.status(200).json({
      success: true,
      message: "Tadbirlar ro'yxati muvaffaqiyatli olingan",
      events,
    });
  } catch (error) {
    console.error("Tadbirlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET EVENT BY PK =====>
exports.getEventByPk = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        { model: Event_Type, as: "event_type" },
        { model: Human_Category, as: "human_category" },
        { model: Venue, as: "venue" },
        { model: Lang, as: "lang" },
      ],
    });
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Tadbir topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Tadbir ma'lumotlari muvaffaqiyatli topildi",
      event,
    });
  } catch (error) {
    console.error("Tadbirni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE EVENT =====>
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Tadbir topilmadi!" });
    }
    await event.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Tadbir muvaffaqiyatli yangilandi!",
      event,
    });
  } catch (error) {
    console.error("Tadbirni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE EVENT =====>
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Tadbir topilmadi!" });
    }
    await event.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Tadbir muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Tadbirni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
