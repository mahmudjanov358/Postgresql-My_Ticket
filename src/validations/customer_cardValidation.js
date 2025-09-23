// <==========> <==========> <==========>
// <===== CUSTOMER_CARD VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE CUSTOMER_CARD VALIDATION =====>
exports.createCustomer_CardValidation = Joi.object({
  customer_id: Joi.number().integer().positive().required().messages({
    "any.required": "Mijoz ID majburiy",
    "number.base": "Mijoz ID raqam bo‘lishi kerak",
    "number.integer": "Mijoz ID butun son bo‘lishi kerak",
    "number.positive": "Mijoz ID musbat bo‘lishi kerak",
  }),
  name: Joi.string().min(3).max(100).required().messages({
    "any.required": "Karta egasining ismi majburiy",
    "string.min": "Ism kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Ism 100 ta belgidan oshmasligi kerak",
  }),
  phone: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .optional()
    .allow(null, "")
    .messages({
      "string.pattern.base":
        "Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak (masalan: +998901234567)",
    }),
  number: Joi.string()
    .pattern(/^\d{16}$/)
    .required()
    .messages({
      "any.required": "Karta raqami majburiy",
      "string.pattern.base":
        "Karta raqami 16 ta raqamdan iborat bo‘lishi kerak",
    }),
  year: Joi.string()
    .pattern(/^(202[3-9]|203[0-5])$/)
    .required()
    .messages({
      "any.required": "Yil majburiy",
      "string.pattern.base":
        "Yil 2023–2035 oralig‘ida bo‘lishi kerak (masalan: 2025)",
    }),
  month: Joi.string()
    .pattern(/^(0[1-9]|1[0-2])$/)
    .required()
    .messages({
      "any.required": "Oy majburiy",
      "string.pattern.base": "Oy 01–12 oralig‘ida bo‘lishi kerak (masalan: 12)",
    }),
  is_active: Joi.boolean().optional(),
  is_main: Joi.boolean().optional(),
});

// <===== UPDATE CUSTOMER_CARD VALIDATION =====>
exports.updateCustomer_CardValidation = Joi.object({
  name: Joi.string().min(3).max(100).optional().messages({
    "string.min": "Ism kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Ism 100 ta belgidan oshmasligi kerak",
  }),
  phone: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .optional()
    .allow(null, "")
    .messages({
      "string.pattern.base":
        "Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak (masalan: +998901234567)",
    }),
  number: Joi.string()
    .pattern(/^\d{16}$/)
    .optional()
    .messages({
      "string.pattern.base":
        "Karta raqami 16 ta raqamdan iborat bo‘lishi kerak",
    }),
  year: Joi.string()
    .pattern(/^(202[3-9]|203[0-5])$/)
    .optional()
    .messages({
      "string.pattern.base":
        "Yil 2023–2035 oralig‘ida bo‘lishi kerak (masalan: 2025)",
    }),
  month: Joi.string()
    .pattern(/^(0[1-9]|1[0-2])$/)
    .optional()
    .messages({
      "string.pattern.base": "Oy 01–12 oralig‘ida bo‘lishi kerak (masalan: 12)",
    }),
  is_active: Joi.boolean().optional(),
  is_main: Joi.boolean().optional(),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
