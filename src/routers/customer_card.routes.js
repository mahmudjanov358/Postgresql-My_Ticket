// <==========> <==========> <==========>
// <===== CUSTOMER_CARD ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const customerCardValidation = require("../validations/customer_cardValidation");
const customerCardController = require("../controllers/customer_card.controller");
const router = express.Router();

// <===== CREATE CUSTOMER_CARD ROUTE =====>
/**
 * @swagger
 * /customer_card/create:
 *  post:
 *    tags: [Customer_Card]
 *    summary: Yangi mijoz kartasini yaratish
 *    description: Yangi mijoz kartasini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              customer_id:
 *                type: integer
 *                example: 1
 *              name:
 *                type: string
 *                example: Visa Platinum
 *              phone:
 *                type: string
 *                example: +998901234567
 *              number:
 *                type: string
 *                example: 1234567890123456
 *              year:
 *                type: string
 *                example: 2027
 *              month:
 *                type: string
 *                example: 12
 *              is_active:
 *                type: boolean
 *                example: true
 *              is_main:
 *                type: boolean
 *                example: false
 *    responses:
 *      201:
 *        description: Mijoz karta muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(customerCardValidation.createCustomer_CardValidation),
  customerCardController.createCustomer_Card
);

// <===== GET ALL CUSTOMER_CARDS ROUTE =====>
/**
 * @swagger
 * /customer_card/all:
 *  get:
 *    tags: [Customer_Card]
 *    summary: Barcha mijoz kartalarini olish
 *    description: Tizimdagi barcha mijoz kartalarini olish
 *    responses:
 *      200:
 *        description: Mijoz kartalari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", customerCardController.getAllCustomer_Cards);

// <===== GET CUSTOMER_CARD BY PK ROUTE =====>
/**
 * @swagger
 * /customer_card/by_pk/{id}:
 *  get:
 *    tags: [Customer_Card]
 *    summary: ID orqali mijoz kartasini olish
 *    description: Berilgan ID bo'yicha mijoz kartasini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijoz kartasining unikal identifikatori
 *    responses:
 *      200:
 *        description: Mijoz karta ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha mijoz karta topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", customerCardController.getCustomer_CardByPk);

// <===== UPDATE CUSTOMER_CARD ROUTE =====>
/**
 * @swagger
 * /customer_card/update/{id}:
 *  put:
 *    tags: [Customer_Card]
 *    summary: Mijoz kartasini yangilash
 *    description: Berilgan ID bo'yicha mijoz kartasini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijoz kartasining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Mastercard Gold
 *              phone:
 *                type: string
 *                example: +998977654321
 *              number:
 *                type: string
 *                example: 9876543210987654
 *              year:
 *                type: string
 *                example: 2026
 *              month:
 *                type: string
 *                example: 06
 *              is_active:
 *                type: boolean
 *                example: false
 *              is_main:
 *                type: boolean
 *                example: true
 *    responses:
 *      200:
 *        description: Mijoz karta muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha mijoz karta topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(customerCardValidation.updateCustomer_CardValidation),
  customerCardController.updateCustomer_Card
);

// <===== DELETE CUSTOMER_CARD ROUTE =====>
/**
 * @swagger
 * /customer_card/delete/{id}:
 *  delete:
 *    tags: [Customer_Card]
 *    summary: Mijoz kartasini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha mijoz kartasini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijoz kartasining unikal identifikatori
 *    responses:
 *      200:
 *        description: Mijoz karta muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha mijoz karta topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", customerCardController.deleteCustomer_Card);

// <===== EXPORT ROUTER =====>
module.exports = router;
