// <==========> <==========> <==========>
// <===== VENUE_PHOTO VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE VENUE PHOTO VALIDATION =====>
exports.createVenue_PhotoValidation = Joi.object({
  venue_id: Joi.number().integer().positive().required().messages({
    "number.base": "Maydon ID raqam bo‘lishi kerak",
    "number.integer": "Maydon ID butun son bo‘lishi kerak",
    "number.positive": "Maydon ID musbat son bo‘lishi kerak",
    "any.required": "Maydon ID majburiy",
  }),
  url: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .required()
    .messages({
      "string.uri":
        "URL to‘g‘ri veb manzil bo‘lishi kerak (http:// yoki https://)",
      "any.required": "Rasm URL i majburiy",
    }),
});

// <===== UPDATE VENUE PHOTO VALIDATION =====>
exports.updateVenue_PhotoValidation = Joi.object({
  url: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .optional()
    .messages({
      "string.uri":
        "URL to‘g‘ri veb manzil bo‘lishi kerak (http:// yoki https://)",
    }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
