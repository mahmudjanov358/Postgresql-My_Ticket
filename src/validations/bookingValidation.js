// <==========> <==========> <==========>
// <===== BOOKING VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE BOOKING VALIDATION =====>
exports.createBookingValidation = Joi.object({
  cart_id: Joi.number().integer().positive().required().messages({
    "any.required": "Cart ID kiritilishi shart",
    "number.base": "Cart ID faqat raqam bo‘lishi kerak",
    "number.positive": "Cart ID musbat butun son bo‘lishi kerak",
  }),
  createdAt: Joi.date().iso().optional(),
  finished: Joi.date().iso().min(Joi.ref("createdAt")).optional().messages({
    "date.min": "finished created_at dan keyin bo‘lishi kerak",
  }),
  payment_method_id: Joi.number().integer().positive().required().messages({
    "any.required": "To‘lov usuli ID majburiy",
    "number.positive": "To‘lov usuli ID musbat butun son bo‘lishi kerak",
  }),
  delivery_method_id: Joi.number().integer().positive().required().messages({
    "any.required": "Yetkazib berish usuli ID majburiy",
    "number.positive":
      "Yetkazib berish usuli ID musbat butun son bo‘lishi kerak",
  }),
});

// <===== UPDATE BOOKING VALIDATION =====>
exports.updateBookingValidation = Joi.object({
  finished: Joi.date().iso().min(Joi.ref("created_at")).optional().messages({
    "date.min": "finished created_at dan keyin bo‘lishi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
