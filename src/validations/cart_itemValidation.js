// <==========> <==========> <==========>
// <===== CART_ITEM VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE CART_ITEM VALIDATION =====>
exports.createCart_ItemValidation = Joi.object({
  ticket_id: Joi.number().integer().positive().required().messages({
    "any.required": "ticket_id majburiy",
    "number.base": "ticket_id raqam bo‘lishi kerak",
    "number.integer": "ticket_id butun son bo‘lishi kerak",
    "number.positive": "ticket_id musbat bo‘lishi kerak",
  }),
  cart_id: Joi.number().integer().positive().required().messages({
    "any.required": "cart_id majburiy",
    "number.base": "cart_id raqam bo‘lishi kerak",
    "number.integer": "cart_id butun son bo‘lishi kerak",
    "number.positive": "cart_id musbat bo‘lishi kerak",
  }),
});
