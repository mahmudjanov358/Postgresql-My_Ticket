// <==========> <==========> <==========>
// <===== ADMIN VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE ADMIN VALIDATION =====>
exports.createAdminValidation = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Ism bo‘sh bo‘lishi mumkin emas",
    "string.min": "Ism kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Ism 50 ta belgidan oshmasligi kerak",
  }),
  login: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Login bo‘sh bo‘lishi mumkin emas",
    "string.min": "Login kamida 3 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Login 30 ta belgidan oshmasligi kerak",
  }),
  hashed_password: Joi.string()
    .pattern(/^\d{4,16}$/)
    .required()
    .messages({
      "string.empty": "Parol bo‘sh bo‘lishi mumkin emas",
      "string.pattern.base":
        "Parol faqat raqamlardan iborat bo‘lishi va 4–16 belgidan iborat bo‘lishi kerak",
    }),
  is_active: Joi.boolean().required().valid(true, false).messages({
    "any.required": "is_active maydoni majburiy",
    "boolean.base": "is_active maydoni boolean bo‘lishi kerak",
  }),
  is_creator: Joi.boolean().required().valid(true, false).messages({
    "any.required": "is_creator maydoni majburiy",
    "boolean.base": "is_creator maydoni boolean bo‘lishi kerak",
  }),
});

// <===== SIGN ADMIN VALIDATION =====>
exports.signAdminValidation = Joi.object({
  login: Joi.string().min(3).required().messages({
    "string.empty": "Login kiritilishi shart",
    "string.min": "Login kamida 3 ta belgidan iborat bo‘lishi kerak",
  }),
  hashed_password: Joi.string()
    .pattern(/^\d{4,16}$/)
    .required()
    .messages({
      "string.empty": "Parol kiritilishi shart",
      "string.pattern.base":
        "Parol faqat raqamlardan iborat bo‘lishi va 4–16 belgidan iborat bo‘lishi kerak",
    }),
});

// <===== UPDATE ADMIN VALIDATION =====>
exports.updateAdminValidation = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  login: Joi.string().min(3).max(30).optional(),
  hashed_password: Joi.string()
    .pattern(/^\d{4,16}$/)
    .messages({
      "string.pattern.base":
        "Parol faqat raqamlardan iborat bo‘lishi va 4–16 belgidan iborat bo‘lishi kerak",
    })
    .optional(),
  is_active: Joi.boolean().optional().valid(true, false).messages({
    "boolean.base": "is_active maydoni boolean bo‘lishi kerak",
  }),
  is_creator: Joi.boolean().optional().valid(true, false).messages({
    "boolean.base": "is_creator maydoni boolean bo‘lishi kerak",
  }),
});
