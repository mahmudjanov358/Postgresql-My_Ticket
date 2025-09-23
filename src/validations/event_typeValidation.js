// <==========> <==========> <==========>
// <===== EVENT_TYPE VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE EVENT_TYPE VALIDATION =====>
exports.createEvent_TypeValidation = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    "string.base": "Tadbir turi nomi matn bo‘lishi kerak",
    "string.empty": "Tadbir turi nomi kiritilishi shart",
    "string.min": "Tadbir turi nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Tadbir turi nomi 50 ta belgidan oshmasligi kerak",
    "any.required": "Tadbir turi nomi majburiy",
  }),
});

// <===== UPDATE EVENT_TYPE VALIDATION =====>
exports.updateEvent_TypeValidation = Joi.object({
  name: Joi.string().trim().min(3).max(50).optional().messages({
    "string.base": "Tadbir turi nomi matn bo‘lishi kerak",
    "string.min": "Tadbir turi nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Tadbir turi nomi 50 ta belgidan oshmasligi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
