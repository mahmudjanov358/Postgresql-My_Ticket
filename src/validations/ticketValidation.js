// <==========> <==========> <==========>
// <===== TICKET VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE TICKET VALIDATION =====>
exports.createTicketValidation = Joi.object({
  event_id: Joi.number().integer().positive().required().messages({
    "any.required": "Tadbir ID majburiy",
    "number.base": "Tadbir ID raqam bo‘lishi kerak",
    "number.integer": "Tadbir ID butun son bo‘lishi kerak",
    "number.positive": "Tadbir ID musbat son bo‘lishi kerak",
  }),
  seat_id: Joi.number().integer().positive().required().messages({
    "any.required": "O'rindiq ID majburiy",
    "number.base": "O'rindiq ID raqam bo‘lishi kerak",
    "number.integer": "O'rindiq ID butun son bo‘lishi kerak",
    "number.positive": "O'rindiq ID musbat son bo‘lishi kerak",
  }),
  price: Joi.number().integer().min(0).required().messages({
    "any.required": "Narx majburiy",
    "number.base": "Narx raqam bo‘lishi kerak",
    "number.integer": "Narx butun son bo‘lishi kerak",
    "number.min": "Narx manfiy bo‘lishi mumkin emas",
  }),
  service_fee: Joi.number().integer().min(0).default(0).messages({
    "number.base": "Xizmat haqi raqam bo‘lishi kerak",
    "number.integer": "Xizmat haqi butun son bo‘lishi kerak",
    "number.min": "Xizmat haqi manfiy bo‘lishi mumkin emas",
  }),
  ticket_status_id: Joi.number().integer().positive().required().messages({
    "any.required": "Chipta holati ID majburiy",
    "number.base": "Chipta holati ID raqam bo‘lishi kerak",
    "number.integer": "Chipta holati ID butun son bo‘lishi kerak",
    "number.positive": "Chipta holati ID musbat son bo‘lishi kerak",
  }),
  ticket_type: Joi.string()
    .valid("standard", "vip", "student", "other")
    .default("standard")
    .required()
    .messages({
      "any.only":
        "Chipta turi faqat standard, vip, student yoki other bo‘lishi mumkin",
      "any.required": "Chipta turi majburiy",
    }),
});

// <===== UPDATE TICKET VALIDATION =====>
exports.updateTicketValidation = Joi.object({
  price: Joi.number().integer().min(0).optional().messages({
    "number.base": "Narx raqam bo‘lishi kerak",
    "number.integer": "Narx butun son bo‘lishi kerak",
    "number.min": "Narx manfiy bo‘lishi mumkin emas",
  }),
  service_fee: Joi.number().integer().min(0).optional().messages({
    "number.base": "Xizmat haqi raqam bo‘lishi kerak",
    "number.integer": "Xizmat haqi butun son bo‘lishi kerak",
    "number.min": "Xizmat haqi manfiy bo‘lishi mumkin emas",
  }),
  ticket_status_id: Joi.number().integer().positive().optional().messages({
    "number.base": "Chipta holati ID raqam bo‘lishi kerak",
    "number.integer": "Chipta holati ID butun son bo‘lishi kerak",
    "number.positive": "Chipta holati ID musbat son bo‘lishi kerak",
  }),
  ticket_type: Joi.string()
    .valid("standard", "vip", "student", "other")
    .optional()
    .messages({
      "any.only":
        "Chipta turi faqat standard, vip, student yoki other bo‘lishi mumkin",
    }),
})
  .or("price", "service_fee", "ticket_status_id", "ticket_type")
  .messages({
    "object.missing":
      "Kamida bitta maydon (price, service_fee, ticket_status_id, ticket_type) yangilanishi kerak",
  });
