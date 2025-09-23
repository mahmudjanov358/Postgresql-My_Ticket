// <==========> <==========> <==========>
// <===== HUMAN_CATEGORY VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE HUMAN_CATEGORY VALIDATION =====>
exports.createHuman_CategoryValidation = Joi.object({
  name: Joi.string().trim().min(3).max(50).required().messages({
    "any.required": "Kategoriya nomi majburiy",
    "string.empty": "Kategoriya nomi bo‘sh bo‘lmasligi kerak",
    "string.min": "Kategoriya nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Kategoriya nomi 50 ta belgidan oshmasligi kerak",
  }),
  start_age: Joi.number().integer().min(0).required().messages({
    "any.required": "Boshlanish yoshi majburiy",
    "number.base": "Boshlanish yoshi raqam bo‘lishi kerak",
    "number.integer": "Boshlanish yoshi butun son bo‘lishi kerak",
    "number.min": "Boshlanish yoshi manfiy bo‘lishi mumkin emas",
  }),
  finish_age: Joi.number()
    .integer()
    .min(Joi.ref("start_age"))
    .required()
    .messages({
      "any.required": "Tugash yoshi majburiy",
      "number.base": "Tugash yoshi raqam bo‘lishi kerak",
      "number.integer": "Tugash yoshi butun son bo‘lishi kerak",
      "number.min":
        "Tugash yoshi boshlanish yoshidan kichik bo‘lishi mumkin emas",
    }),
  gender: Joi.string()
    .valid("male", "female", "other")
    .optional()
    .allow(null, "")
    .messages({
      "any.only": "Jins faqat male, female yoki other bo‘lishi mumkin",
    }),
});

// <===== UPDATE HUMAN_CATEGORY VALIDATION =====>
exports.updateHuman_CategoryValidation = Joi.object({
  name: Joi.string().trim().min(3).max(50).optional().messages({
    "string.min": "Kategoriya nomi kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Kategoriya nomi 50 ta belgidan oshmasligi kerak",
  }),
  start_age: Joi.number().integer().min(0).optional().messages({
    "number.base": "Boshlanish yoshi raqam bo‘lishi kerak",
    "number.integer": "Boshlanish yoshi butun son bo‘lishi kerak",
    "number.min": "Boshlanish yoshi manfiy bo‘lishi mumkin emas",
  }),
  finish_age: Joi.number()
    .integer()
    .min(Joi.ref("start_age"))
    .optional()
    .messages({
      "number.base": "Tugash yoshi raqam bo‘lishi kerak",
      "number.integer": "Tugash yoshi butun son bo‘lishi kerak",
      "number.min":
        "Tugash yoshi boshlanish yoshidan kichik bo‘lishi mumkin emas",
    }),
  gender: Joi.string()
    .valid("male", "female", "other")
    .optional()
    .allow(null, "")
    .messages({
      "any.only": "Jins faqat male, female yoki other bo‘lishi mumkin",
    }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
