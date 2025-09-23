// <==========> <==========> <==========>
// <===== LANG VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE LANG VALIDATION =====>
exports.createLangValidation = Joi.object({
  name: Joi.string()
    .trim()
    .valid("Uzbek", "Russian", "English")
    .required()
    .messages({
      "any.only": "Til faqat 'Uzbek', 'Russian' yoki 'English' bo‘lishi mumkin",
      "string.empty": "Til nomi majburiy",
      "any.required": "Til nomi kiritilishi shart",
    }),
});

// <===== UPDATE LANG VALIDATION =====>
exports.updateLangValidation = Joi.object({
  name: Joi.string()
    .trim()
    .valid("Uzbek", "Russian", "English")
    .optional()
    .messages({
      "any.only": "Til faqat 'Uzbek', 'Russian' yoki 'English' bo‘lishi mumkin",
    }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
