// <==========> <==========> <==========>
// <===== TYPES VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== ALLOWED TYPES =====>
const ALLOWED_TYPES = ["Simple", "Normal", "Pro", "Premium", "Vip"];

// <===== CREATE TYPES VALIDATION =====>
exports.createTypeValidation = Joi.object({
  name: Joi.string()
    .valid(...ALLOWED_TYPES)
    .required()
    .messages({
      "any.only": `Tur nomi faqat quyidagilardan biri bo‘lishi mumkin: ${ALLOWED_TYPES.join(
        ", "
      )}`,
      "any.required": "Tur nomi majburiy",
    }),
});

// <===== UPDATE TYPES VALIDATION =====>
exports.updateTypeValidation = Joi.object({
  name: Joi.string()
    .valid(...ALLOWED_TYPES)
    .optional()
    .messages({
      "any.only": `Tur nomi faqat quyidagilardan biri bo‘lishi mumkin: ${ALLOWED_TYPES.join(
        ", "
      )}`,
    }),
})
  .min(1)
  .messages({ "object.min": "Kamida bitta maydon yangilanishi kerak" });
