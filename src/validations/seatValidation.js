// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE SEAT VALIDATION =====>
exports.createSeatValidation = Joi.object({
  sector: Joi.number().integer().positive().required().messages({
    "number.base": "Sector raqam bo‘lishi kerak",
    "number.integer": "Sector butun son bo‘lishi kerak",
    "number.positive": "Sector musbat son bo‘lishi kerak",
    "any.required": "Sector majburiy maydon",
  }),
  row_number: Joi.number().integer().positive().required().messages({
    "number.base": "Qator raqami raqam bo‘lishi kerak",
    "number.integer": "Qator raqami butun son bo‘lishi kerak",
    "number.positive": "Qator raqami musbat son bo‘lishi kerak",
    "any.required": "Qator raqami majburiy",
  }),
  number: Joi.number().integer().positive().required().messages({
    "number.base": "O‘rindiq raqami raqam bo‘lishi kerak",
    "number.integer": "O‘rindiq raqami butun son bo‘lishi kerak",
    "number.positive": "O‘rindiq raqami musbat son bo‘lishi kerak",
    "any.required": "O‘rindiq raqami majburiy",
  }),
  venue_id: Joi.number().integer().positive().required().messages({
    "number.base": "Venue ID raqam bo‘lishi kerak",
    "number.integer": "Venue ID butun son bo‘lishi kerak",
    "number.positive": "Venue ID musbat son bo‘lishi kerak",
    "any.required": "Venue ID majburiy",
  }),
  seat_type_id: Joi.number().integer().positive().required().messages({
    "number.base": "Seat_Type ID raqam bo‘lishi kerak",
    "number.integer": "Seat_Type ID butun son bo‘lishi kerak",
    "number.positive": "Seat_Type ID musbat son bo‘lishi kerak",
    "any.required": "Seat_Type ID majburiy",
  }),
});

// <===== UPDATE SEAT VALIDATION =====>
exports.updateSeatValidation = Joi.object({
  sector: Joi.number().integer().positive().optional().messages({
    "number.base": "Sector raqam bo‘lishi kerak",
    "number.integer": "Sector butun son bo‘lishi kerak",
    "number.positive": "Sector musbat son bo‘lishi kerak",
  }),
  row_number: Joi.number().integer().positive().optional().messages({
    "number.base": "Qator raqami raqam bo‘lishi kerak",
    "number.integer": "Qator raqami butun son bo‘lishi kerak",
    "number.positive": "Qator raqami musbat son bo‘lishi kerak",
  }),
  number: Joi.number().integer().positive().optional().messages({
    "number.base": "O‘rindiq raqami raqam bo‘lishi kerak",
    "number.integer": "O‘rindiq raqami butun son bo‘lishi kerak",
    "number.positive": "O‘rindiq raqami musbat son bo‘lishi kerak",
  }),
  venue_id: Joi.number().integer().positive().optional().messages({
    "number.base": "Venue ID raqam bo‘lishi kerak",
    "number.integer": "Venue ID butun son bo‘lishi kerak",
    "number.positive": "Venue ID musbat son bo‘lishi kerak",
  }),
  seat_type_id: Joi.number().integer().positive().optional().messages({
    "number.base": "Seat_Type ID raqam bo‘lishi kerak",
    "number.integer": "Seat_Type ID butun son bo‘lishi kerak",
    "number.positive": "Seat_Type ID musbat son bo‘lishi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
