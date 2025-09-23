// <==========> <==========> <==========>
// <===== PAYMENT_METHOD ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const paymentMethodValidation = require("../validations/payment_methodValidation");
const paymentMethodController = require("../controllers/payment_method.controller");
const router = express.Router();

// <===== CREATE PAYMENT_METHOD ROUTE =====>
/**
 * @swagger
 * /payment_method/create:
 *  post:
 *    tags: [Payment_Method]
 *    summary: Yangi to'lov usulini yaratish
 *    description: Yangi to'lov usulini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Naqd pul
 *    responses:
 *      201:
 *        description: To'lov usuli muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(paymentMethodValidation.createPayment_MethodValidation),
  paymentMethodController.createPayment_Method
);

// <===== GET ALL PAYMENT_METHODS ROUTE =====>
/**
 * @swagger
 * /payment_method/all:
 *  get:
 *    tags: [Payment_Method]
 *    summary: Barcha to'lov usullarini olish
 *    description: Tizimdagi barcha to'lov usullarini olish
 *    responses:
 *      200:
 *        description: To'lov usullari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", paymentMethodController.getAllPayment_Methods);

// <===== GET PAYMENT_METHOD BY PK ROUTE =====>
/**
 * @swagger
 * /payment_method/by_pk/{id}:
 *  get:
 *    tags: [Payment_Method]
 *    summary: ID orqali to'lov usulini olish
 *    description: Berilgan ID bo'yicha to'lov usulini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: To'lov usulining unikal identifikatori
 *    responses:
 *      200:
 *        description: To'lov usuli ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha to'lov usuli topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", paymentMethodController.getPayment_MethodByPk);

// <===== UPDATE PAYMENT_METHOD ROUTE =====>
/**
 * @swagger
 * /payment_method/update/{id}:
 *  put:
 *    tags: [Payment_Method]
 *    summary: To'lov usulini yangilash
 *    description: Berilgan ID bo'yicha to'lov usulini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: To'lov usulining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Bank kartasi
 *    responses:
 *      200:
 *        description: To'lov usuli muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha to'lov usuli topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(paymentMethodValidation.updatePayment_MethodValidation),
  paymentMethodController.updatePayment_Method
);

// <===== DELETE PAYMENT_METHOD ROUTE =====>
/**
 * @swagger
 * /payment_method/delete/{id}:
 *  delete:
 *    tags: [Payment_Method]
 *    summary: To'lov usulini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha to'lov usulini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: To'lov usulining unikal identifikatori
 *    responses:
 *      200:
 *        description: To'lov usuli muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha to'lov usuli topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", paymentMethodController.deletePayment_Method);

// <===== EXPORT ROUTER =====>
module.exports = router;
