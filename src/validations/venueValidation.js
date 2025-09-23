// <==========> <==========> <==========>
// <===== VENUE VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE VENUE VALIDATION =====>
exports.createVenueValidation = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.min": "Maydon nomi kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Maydon nomi 100 ta belgidan oshmasligi kerak",
    "any.required": "Maydon nomi majburiy",
  }),
  address: Joi.string().min(5).max(255).required().messages({
    "string.min": "Manzil kamida 5 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Manzil 255 ta belgidan oshmasligi kerak",
    "any.required": "Manzil majburiy",
  }),
  location: Joi.string().min(5).max(255).optional().messages({
    "string.min": "Joylashuv kamida 5 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Joylashuv 255 ta belgidan oshmasligi kerak",
  }),
  site: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .optional()
    .messages({
      "string.uri":
        "Veb-sayt to‘g‘ri URL bo‘lishi kerak (masalan, https://example.com)",
    }),
  phone: Joi.string()
    .pattern(/^(\+998|998)?(9[0-57-9]|6[1-25-9]|7[0-17-9])[0-9]{7}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Telefon raqami O‘zbekiston raqami bo‘lishi kerak (masalan, +998901234567)",
      "any.required": "Telefon raqami majburiy",
    }),
  region_id: Joi.number().integer().positive().required().messages({
    "number.base": "Viloyat ID raqam bo‘lishi kerak",
    "number.integer": "Viloyat ID butun son bo‘lishi kerak",
    "number.positive": "Viloyat ID musbat son bo‘lishi kerak",
    "any.required": "Viloyat ID majburiy",
  }),
  district_id: Joi.number().integer().positive().required().messages({
    "number.base": "Tuman ID raqam bo‘lishi kerak",
    "number.integer": "Tuman ID butun son bo‘lishi kerak",
    "number.positive": "Tuman ID musbat son bo‘lishi kerak",
    "any.required": "Tuman ID majburiy",
  }),
});

// <===== UPDATE VENUE VALIDATION =====>
exports.updateVenueValidation = Joi.object({
  name: Joi.string().min(2).max(100).optional().messages({
    "string.min": "Maydon nomi kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Maydon nomi 100 ta belgidan oshmasligi kerak",
  }),
  address: Joi.string().min(5).max(255).optional().messages({
    "string.min": "Manzil kamida 5 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Manzil 255 ta belgidan oshmasligi kerak",
  }),
  location: Joi.string().min(5).max(255).optional().messages({
    "string.min": "Joylashuv kamida 5 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Joylashuv 255 ta belgidan oshmasligi kerak",
  }),
  site: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .optional()
    .messages({
      "string.uri":
        "Veb-sayt to‘g‘ri URL bo‘lishi kerak (masalan, https://example.com)",
    }),
  phone: Joi.string()
    .pattern(/^(\+998|998)?(9[0-57-9]|6[1-25-9]|7[0-17-9])[0-9]{7}$/)
    .optional()
    .messages({
      "string.pattern.base":
        "Telefon raqami O‘zbekiston raqami bo‘lishi kerak (masalan, +998901234567)",
    }),
  region_id: Joi.number().integer().positive().optional().messages({
    "number.base": "Viloyat ID raqam bo‘lishi kerak",
    "number.integer": "Viloyat ID butun son bo‘lishi kerak",
    "number.positive": "Viloyat ID musbat son bo‘lishi kerak",
  }),
  district_id: Joi.number().integer().positive().optional().messages({
    "number.base": "Tuman ID raqam bo‘lishi kerak",
    "number.integer": "Tuman ID butun son bo‘lishi kerak",
    "number.positive": "Tuman ID musbat son bo‘lishi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
