// <==========> <==========> <==========>
// <===== REGION VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE REGION VALIDATION =====>
exports.createRegionValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).required().messages({
    "any.required": "Viloyat nomi majburiy",
    "string.empty": "Viloyat nomi bo‘sh bo‘lmasligi kerak",
    "string.min": "Viloyat nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Viloyat nomi 100 ta belgidan oshmasligi kerak",
  }),
});

// <===== UPDATE REGION VALIDATION =====>
exports.updateRegionValidation = Joi.object({
  name: Joi.string().trim().min(3).max(100).optional().messages({
    "string.min": "Viloyat nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Viloyat nomi 100 ta belgidan oshmasligi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
