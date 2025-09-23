// <==========> <==========> <==========>
// <===== PAYMENT_METHOD VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE PAYMENT_METHOD VALIDATION =====>
exports.createPayment_MethodValidation = Joi.object({
  name: Joi.string()
    .trim()
    .valid("Cash", "Card", "Mobile Money")
    .required()
    .messages({
      "any.only":
        "To‘lov turi faqat 'Cash', 'Card' yoki 'Mobile Money' bo‘lishi mumkin",
      "string.empty": "To‘lov turi majburiy",
      "any.required": "To‘lov turi kiritilishi shart",
    }),
});

// <===== UPDATE PAYMENT_METHOD VALIDATION =====>
exports.updatePayment_MethodValidation = Joi.object({
  name: Joi.string()
    .trim()
    .valid("Cash", "Card", "Mobile Money")
    .optional()
    .messages({
      "any.only":
        "To‘lov turi faqat 'Cash', 'Card' yoki 'Mobile Money' bo‘lishi mumkin",
    }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
