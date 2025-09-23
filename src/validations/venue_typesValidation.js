// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE VENUE_TYPE VALIDATION =====>
exports.createVenue_TypeValidation = Joi.object({
  venue_id: Joi.number().integer().positive().required().messages({
    "number.base": "Maydon ID raqam bo‘lishi kerak",
    "number.integer": "Maydon ID butun son bo‘lishi kerak",
    "number.positive": "Maydon ID musbat son bo‘lishi kerak",
    "any.required": "Maydon ID majburiy",
  }),
  type_id: Joi.number().integer().positive().required().messages({
    "number.base": "Tur ID raqam bo‘lishi kerak",
    "number.integer": "Tur ID butun son bo‘lishi kerak",
    "number.positive": "Tur ID musbat son bo‘lishi kerak",
    "any.required": "Tur ID majburiy",
  }),
});
