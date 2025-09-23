// <==========> <==========> <==========>
// <===== DELIVERY_METHOD VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE DELIVERY_METHOD VALIDATION =====>
exports.createDelivery_MethodValidation = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.base": "Yetkazib berish usuli matn ko‘rinishida bo‘lishi kerak",
    "string.empty": "Yetkazib berish usuli nomi kiritilishi shart",
    "string.min":
      "Yetkazib berish usuli nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Yetkazib berish usuli nomi 50 ta belgidan oshmasligi kerak",
    "any.required": "Yetkazib berish usuli nomi majburiy",
  }),
});

// <===== UPDATE DELIVERY_METHOD VALIDATION =====>
exports.updateDelivery_MethodValidation = Joi.object({
  name: Joi.string().min(3).max(50).optional().messages({
    "string.base": "Yetkazib berish usuli matn ko‘rinishida bo‘lishi kerak",
    "string.min":
      "Yetkazib berish usuli nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Yetkazib berish usuli nomi 50 ta belgidan oshmasligi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
