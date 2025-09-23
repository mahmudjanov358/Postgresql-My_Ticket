// <==========> <==========> <==========>
// <===== TICKET_STATUS VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE TICKET_STATUS VALIDATION =====>
exports.createTicket_StatusValidation = Joi.object({
  name: Joi.string()
    .valid("Available", "Sold", "Reserved", "Cancelled", "Refunded")
    .required()
    .messages({
      "any.only":
        "Chipta holati faqat quyidagilardan biri bo‘lishi mumkin: Available, Sold, Reserved, Cancelled, Refunded",
      "any.required": "Chipta holati nomi majburiy",
    }),
});

// <===== UPDATE TICKET_STATUS VALIDATION =====>
exports.updateTicket_StatusValidation = Joi.object({
  name: Joi.string()
    .optional()
    .valid("Available", "Sold", "Reserved", "Cancelled", "Refunded")
    .messages({
      "any.only":
        "Chipta holati faqat quyidagilardan biri bo‘lishi mumkin: Available, Sold, Reserved, Cancelled, Refunded",
    }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
