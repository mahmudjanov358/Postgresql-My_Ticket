// <==========> <==========> <==========>
// <===== CART VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE CART VALIDATION =====>
exports.createCartValidation = Joi.object({
  customer_id: Joi.number().integer().positive().required().messages({
    "any.required": "customer_id majburiy",
    "number.base": "customer_id raqam bo‘lishi kerak",
    "number.integer": "customer_id butun son bo‘lishi kerak",
    "number.positive": "customer_id musbat bo‘lishi kerak",
  }),
  createdAt: Joi.date().optional(),
  finishedAt: Joi.date().min(Joi.ref("createdAt")).optional().messages({
    "date.min": "finishedAt createdAt dan keyin bo‘lishi kerak",
  }),
});

// <===== UPDATE CART VALIDATION =====>
exports.updateCartValidation = Joi.object({
  finishedAt: Joi.date().min(Joi.ref("createdAt")).optional().messages({
    "date.min": "finishedAt createdAt dan keyin bo‘lishi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
