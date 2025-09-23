// <==========> <==========> <==========>
// <===== CUSTOMER_ADDRESS VALIDATION FILE =====>
// <==========> <==========> <==========>

// <===== Joi =====>
const Joi = require("joi");

// <===== CREATE CUSTOMER_ADDRESS VALIDATION =====>
exports.createCustomer_AddressValidation = Joi.object({
  customer_id: Joi.number().integer().positive().required().messages({
    "any.required": "Mijoz ID majburiy",
    "number.base": "Mijoz ID raqam bo‘lishi kerak",
    "number.integer": "Mijoz ID butun son bo‘lishi kerak",
    "number.positive": "Mijoz ID musbat bo‘lishi kerak",
  }),
  name: Joi.string().min(2).max(100).required().messages({
    "any.required": "Manzil nomi majburiy",
    "string.min": "Manzil nomi kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Manzil nomi 100 ta belgidan oshmasligi kerak",
  }),
  region_id: Joi.number().integer().positive().required().messages({
    "any.required": "Viloyat ID majburiy",
    "number.base": "Viloyat ID raqam bo‘lishi kerak",
    "number.integer": "Viloyat ID butun son bo‘lishi kerak",
    "number.positive": "Viloyat ID musbat bo‘lishi kerak",
  }),
  district_id: Joi.number().integer().positive().required().messages({
    "any.required": "Tuman ID majburiy",
    "number.base": "Tuman ID raqam bo‘lishi kerak",
    "number.integer": "Tuman ID butun son bo‘lishi kerak",
    "number.positive": "Tuman ID musbat bo‘lishi kerak",
  }),
  street: Joi.string().min(2).max(255).required().messages({
    "any.required": "Ko'cha nomi majburiy",
    "string.min": "Ko'cha nomi kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Ko'cha nomi 255 ta belgidan oshmasligi kerak",
  }),
  house: Joi.string().min(1).max(50).required().messages({
    "any.required": "Uy raqami majburiy",
    "string.min": "Uy raqami kamida 1 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Uy raqami 50 ta belgidan oshmasligi kerak",
  }),
  flat: Joi.number().integer().min(0).optional().allow(null).messages({
    "number.base": "Kvartira raqami faqat raqam bo‘lishi kerak",
    "number.integer": "Kvartira raqami butun son bo‘lishi kerak",
    "number.min": "Kvartira raqami 0 yoki undan katta bo‘lishi kerak",
  }),
  location: Joi.string().max(255).optional().allow(null, "").messages({
    "string.max": "Joylashuv 255 ta belgidan oshmasligi kerak",
  }),
  post_index: Joi.string().max(20).optional().allow(null, "").messages({
    "string.max": "Pochta indeksi 20 ta belgidan oshmasligi kerak",
  }),
  info: Joi.string().max(500).optional().allow(null, "").messages({
    "string.max": "Qo'shimcha ma'lumot 500 ta belgidan oshmasligi kerak",
  }),
});

// <===== UPDATE CUSTOMER_ADDRESS VALIDATION =====>
exports.updateCustomer_AddressValidation = Joi.object({
  name: Joi.string().min(2).max(100).optional().messages({
    "string.min": "Manzil nomi kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Manzil nomi 100 ta belgidan oshmasligi kerak",
  }),
  street: Joi.string().min(2).max(255).optional().messages({
    "string.min": "Ko'cha nomi kamida 2 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Ko'cha nomi 255 ta belgidan oshmasligi kerak",
  }),
  house: Joi.string().min(1).max(50).optional().messages({
    "string.min": "Uy raqami kamida 1 ta belgidan iborat bo‘lishi kerak",
    "string.max": "Uy raqami 50 ta belgidan oshmasligi kerak",
  }),
  flat: Joi.number().integer().min(0).optional().allow(null).messages({
    "number.base": "Kvartira raqami faqat raqam bo‘lishi kerak",
    "number.integer": "Kvartira raqami butun son bo‘lishi kerak",
    "number.min": "Kvartira raqami 0 yoki undan katta bo‘lishi kerak",
  }),
  location: Joi.string().max(255).optional().allow(null, "").messages({
    "string.max": "Joylashuv 255 ta belgidan oshmasligi kerak",
  }),
  post_index: Joi.string().max(20).optional().allow(null, "").messages({
    "string.max": "Pochta indeksi 20 ta belgidan oshmasligi kerak",
  }),
  info: Joi.string().max(500).optional().allow(null, "").messages({
    "string.max": "Qo'shimcha ma'lumot 500 ta belgidan oshmasligi kerak",
  }),
})
  .min(1)
  .messages({
    "object.min": "Kamida bitta maydon yangilanishi kerak",
  });
