// <==========> <==========> <==========>
// <===== SEAT_TYPE VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// Enum qiymatlarni alohida constantda saqlash
const seatTypes = ["Simple", "Normal", "Soft"];

// <===== CREATE SEAT_TYPE VALIDATION =====>
exports.createSeat_TypeValidation = Joi.object({
  name: Joi.string()
    .trim()
    .valid(...seatTypes)
    .required()
    .messages({
      "any.only": `O'rindiq turi faqat quyidagi qiymatlardan biri bo‘lishi kerak: ${seatTypes.join(
        ", "
      )}`,
      "string.empty": "O'rindiq turi nomi majburiy",
      "any.required": "O'rindiq turi kiritilishi shart",
    }),
});

// <===== UPDATE SEAT_TYPE VALIDATION =====>
exports.updateSeat_TypeValidation = Joi.object({
  name: Joi.string()
    .trim()
    .valid(...seatTypes)
    .optional()
    .messages({
      "any.only": `O'rindiq turi faqat quyidagi qiymatlardan biri bo‘lishi kerak: ${seatTypes.join(
        ", "
      )}`,
    }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
