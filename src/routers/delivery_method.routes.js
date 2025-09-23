// <==========> <==========> <==========>
// <===== DELIVERY_METHOD ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const deliveryMethodValidation = require("../validations/delivery_methodValidation");
const deliveryMethodController = require("../controllers/delivery_method.controller");
const router = express.Router();

// <===== CREATE DELIVERY_METHOD ROUTE =====>
/**
 * @swagger
 * /delivery_method/create:
 *  post:
 *    tags: [Delivery_Method]
 *    summary: Yangi yetkazib berish usulini yaratish
 *    description: Yangi yetkazib berish usulini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Olib ketish
 *    responses:
 *      201:
 *        description: Yetkazib berish usuli muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(deliveryMethodValidation.createDelivery_MethodValidation),
  deliveryMethodController.createDelivery_Method
);

// <===== GET ALL DELIVERY_METHODS ROUTE =====>
/**
 * @swagger
 * /delivery_method/all:
 *  get:
 *    tags: [Delivery_Method]
 *    summary: Barcha yetkazib berish usullarini olish
 *    description: Tizimdagi barcha yetkazib berish usullarini olish
 *    responses:
 *      200:
 *        description: Yetkazib berish usullari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", deliveryMethodController.getAllDelivery_Methods);

// <===== GET DELIVERY_METHOD BY PK ROUTE =====>
/**
 * @swagger
 * /delivery_method/by_pk/{id}:
 *  get:
 *    tags: [Delivery_Method]
 *    summary: ID orqali yetkazib berish usulini olish
 *    description: Berilgan ID bo'yicha yetkazib berish usulini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Yetkazib berish usulining unikal identifikatori
 *    responses:
 *      200:
 *        description: Yetkazib berish usuli ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha yetkazib berish usuli topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", deliveryMethodController.getDelivery_MethodByPk);

// <===== UPDATE DELIVERY_METHOD ROUTE =====>
/**
 * @swagger
 * /delivery_method/update/{id}:
 *  put:
 *    tags: [Delivery_Method]
 *    summary: Yetkazib berish usulini yangilash
 *    description: Berilgan ID bo'yicha yetkazib berish usulini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Yetkazib berish usulining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Yetkazib berish
 *    responses:
 *      200:
 *        description: Yetkazib berish usuli muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha yetkazib berish usuli topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(deliveryMethodValidation.updateDelivery_MethodValidation),
  deliveryMethodController.updateDelivery_Method
);

// <===== DELETE DELIVERY_METHOD ROUTE =====>
/**
 * @swagger
 * /delivery_method/delete/{id}:
 *  delete:
 *    tags: [Delivery_Method]
 *    summary: Yetkazib berish usulini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha yetkazib berish usulini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Yetkazib berish usulining unikal identifikatori
 *    responses:
 *      200:
 *        description: Yetkazib berish usuli muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha yetkazib berish usuli topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", deliveryMethodController.deleteDelivery_Method);

// <===== EXPORT ROUTER =====>
module.exports = router;
