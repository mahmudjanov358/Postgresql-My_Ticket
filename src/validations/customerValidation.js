// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE CUSTOMER VALIDATION =====>
exports.createCustomerValidation = Joi.object({
  first_name: Joi.string().min(2).max(50).optional().messages({
    "string.min": "Ism kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Ism 50 ta belgidan oshmasligi kerak",
  }),
  last_name: Joi.string().min(2).max(50).optional().messages({
    "string.min": "Familiya kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Familiya 50 ta belgidan oshmasligi kerak",
  }),
  phone: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .required()
    .messages({
      "any.required": "Telefon raqami majburiy",
      "string.pattern.base":
        "Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak (masalan: +998901234567)",
    }),
  hashed_password: Joi.string().min(8).max(128).required().messages({
    "any.required": "Parol majburiy",
    "string.min": "Parol kamida 8 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Parol 128 ta belgidan oshmasligi kerak",
  }),
  email: Joi.string().email().optional().messages({
    "string.email": "Email noto‘g‘ri formatda",
  }),
  birth_date: Joi.date().optional().messages({
    "date.base": "Tug‘ilgan sana noto‘g‘ri formatda",
  }),
  gender: Joi.string().valid("Male", "Female", "Other").optional().messages({
    "any.only": "Jins faqat Male, Female yoki Other bo‘lishi mumkin",
  }),
  lang_id: Joi.number().integer().positive().optional().messages({
    "number.base": "Til ID raqam bo‘lishi kerak",
    "number.integer": "Til ID butun son bo‘lishi kerak",
    "number.positive": "Til ID musbat bo‘lishi kerak",
  }),
});

exports.signCustomerValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email majburiy",
    "string.email": "Email noto‘g‘ri formatda",
  }),
  hashed_password: Joi.string().min(8).max(128).required().messages({
    "any.required": "Parol majburiy",
    "string.min": "Parol kamida 8 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Parol 128 ta belgidan oshmasligi kerak",
  }),
});

// <===== UPDATE CUSTOMER VALIDATION =====>
exports.updateCustomerValidation = Joi.object({
  first_name: Joi.string().min(2).max(50).optional().messages({
    "string.min": "Ism kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Ism 50 ta belgidan oshmasligi kerak",
  }),
  last_name: Joi.string().min(2).max(50).optional().messages({
    "string.min": "Familiya kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Familiya 50 ta belgidan oshmasligi kerak",
  }),
  phone: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .optional()
    .messages({
      "string.pattern.base":
        "Telefon raqami +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak (masalan: +998901234567)",
    }),
  hashed_password: Joi.string().min(8).max(128).optional().messages({
    "string.min": "Parol kamida 8 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Parol 128 ta belgidan oshmasligi kerak",
  }),
  email: Joi.string().email().optional().messages({
    "string.email": "Email noto‘g‘ri formatda",
  }),
  birth_date: Joi.date().optional().messages({
    "date.base": "Tug‘ilgan sana noto‘g‘ri formatda",
  }),
  gender: Joi.string().valid("Male", "Female", "Other").optional().messages({
    "any.only": "Jins faqat Male, Female yoki Other bo‘lishi mumkin",
  }),
  lang_id: Joi.number().integer().positive().optional().messages({
    "number.base": "Til ID raqam bo‘lishi kerak",
    "number.integer": "Til ID butun son bo‘lishi kerak",
    "number.positive": "Til ID musbat bo‘lishi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
