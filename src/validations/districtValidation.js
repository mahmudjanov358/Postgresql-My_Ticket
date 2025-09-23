// <==========> <==========> <==========>
// <===== DISTRICT VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE DISTRICT VALIDATION =====>
exports.createDistrictValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).required().messages({
    "string.base": "Tuman nomi matn ko‘rinishida bo‘lishi kerak",
    "string.empty": "Tuman nomi kiritilishi shart",
    "string.min": "Tuman nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Tuman nomi 100 ta belgidan oshmasligi kerak",
    "any.required": "Tuman nomi majburiy",
  }),
  region_id: Joi.number().integer().positive().required().messages({
    "number.base": "Region ID son bo‘lishi kerak",
    "number.integer": "Region ID butun son bo‘lishi kerak",
    "number.positive": "Region ID musbat son bo‘lishi kerak",
    "any.required": "Region ID majburiy",
  }),
});

// <===== UPDATE DISTRICT VALIDATION =====>
exports.updateDistrictValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).optional().messages({
    "string.base": "Tuman nomi matn ko‘rinishida bo‘lishi kerak",
    "string.min": "Tuman nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Tuman nomi 100 ta belgidan oshmasligi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
