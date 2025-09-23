// <==========> <==========> <==========>
// <===== EVENT VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// Regex for time validation (HH:mm)
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

// <===== CREATE EVENT VALIDATION =====>
exports.createEventValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).required().messages({
    "any.required": "Tadbir nomi majburiy",
    "string.empty": "Tadbir nomi bo‘sh bo‘lmasligi kerak",
    "string.min": "Tadbir nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Tadbir nomi 100 ta belgidan oshmasligi kerak",
  }),
  photo: Joi.string().uri().required().messages({
    "any.required": "Rasm manzili majburiy",
    "string.uri":
      "Rasm manzili to‘g‘ri URL ko‘rinishida bo‘lishi kerak (masalan: https://example.com/photo.jpg)",
  }),
  start_date: Joi.date().required().messages({
    "any.required": "Boshlanish sanasi majburiy",
    "date.base": "Boshlanish sanasi noto‘g‘ri formatda",
  }),
  start_time: Joi.string().pattern(timeRegex).required().messages({
    "any.required": "Boshlanish vaqti majburiy",
    "string.pattern.base":
      "Boshlanish vaqti HH:mm formatida bo‘lishi kerak (masalan: 19:30)",
  }),
  finish_date: Joi.date().required().messages({
    "any.required": "Tugash sanasi majburiy",
    "date.base": "Tugash sanasi noto‘g‘ri formatda",
  }),
  finish_time: Joi.string().pattern(timeRegex).required().messages({
    "any.required": "Tugash vaqti majburiy",
    "string.pattern.base":
      "Tugash vaqti HH:mm formatida bo‘lishi kerak (masalan: 22:00)",
  }),
  info: Joi.string().trim().max(1000).optional().allow(null, "").messages({
    "string.max": "Tavsif 1000 ta belgidan oshmasligi kerak",
  }),
  event_type_id: Joi.number().integer().positive().required().messages({
    "any.required": "Tadbir turi ID majburiy",
    "number.base": "Tadbir turi ID raqam bo‘lishi kerak",
    "number.integer": "Tadbir turi ID butun son bo‘lishi kerak",
    "number.positive": "Tadbir turi ID musbat bo‘lishi kerak",
  }),
  human_category_id: Joi.number().integer().positive().required().messages({
    "any.required": "Odam toifasi ID majburiy",
    "number.base": "Odam toifasi ID raqam bo‘lishi kerak",
    "number.integer": "Odam toifasi ID butun son bo‘lishi kerak",
    "number.positive": "Odam toifasi ID musbat bo‘lishi kerak",
  }),
  venue_id: Joi.number().integer().positive().required().messages({
    "any.required": "Maydon ID majburiy",
    "number.base": "Maydon ID raqam bo‘lishi kerak",
    "number.integer": "Maydon ID butun son bo‘lishi kerak",
    "number.positive": "Maydon ID musbat bo‘lishi kerak",
  }),
  lang_id: Joi.number().integer().positive().required().messages({
    "any.required": "Til ID majburiy",
    "number.base": "Til ID raqam bo‘lishi kerak",
    "number.integer": "Til ID butun son bo‘lishi kerak",
    "number.positive": "Til ID musbat bo‘lishi kerak",
  }),
  release_date: Joi.date().required().messages({
    "any.required": "Chiqarilish sanasi majburiy",
    "date.base": "Chiqarilish sanasi noto‘g‘ri formatda",
  }),
});

// <===== UPDATE EVENT VALIDATION =====>
exports.updateEventValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).optional().messages({
    "string.min": "Tadbir nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Tadbir nomi 100 ta belgidan oshmasligi kerak",
  }),
  photo: Joi.string().uri().optional().messages({
    "string.uri":
      "Rasm manzili to‘g‘ri URL ko‘rinishida bo‘lishi kerak (masalan: https://example.com/photo.jpg)",
  }),
  start_date: Joi.date().optional().messages({
    "date.base": "Boshlanish sanasi noto‘g‘ri formatda",
  }),
  start_time: Joi.string().pattern(timeRegex).optional().messages({
    "string.pattern.base":
      "Boshlanish vaqti HH:mm formatida bo‘lishi kerak (masalan: 19:30)",
  }),
  finish_date: Joi.date().optional().messages({
    "date.base": "Tugash sanasi noto‘g‘ri formatda",
  }),
  finish_time: Joi.string().pattern(timeRegex).optional().messages({
    "string.pattern.base":
      "Tugash vaqti HH:mm formatida bo‘lishi kerak (masalan: 22:00)",
  }),
  info: Joi.string().trim().max(1000).optional().allow(null, "").messages({
    "string.max": "Tavsif 1000 ta belgidan oshmasligi kerak",
  }),
  release_date: Joi.date().optional().messages({
    "date.base": "Chiqarilish sanasi noto‘g‘ri formatda",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
