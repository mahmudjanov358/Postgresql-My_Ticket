// <==========> <==========> <==========>
// <===== CUSTOMER ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const customerValidation = require("../validations/customerValidation");
const customerController = require("../controllers/customer.controller");
const router = express.Router();

// <===== CREATE CUSTOMER ROUTE =====>
/**
 * @swagger
 * /customer/create:
 *  post:
 *    tags: [Customer]
 *    summary: Yangi mijoz yaratish
 *    description: Yangi mijoz yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              first_name:
 *                type: string
 *                example: Ali
 *              last_name:
 *                type: string
 *                example: Valiyev
 *              phone:
 *                type: string
 *                example: +998901234567
 *              hashed_password:
 *                type: string
 *                example: 0000
 *              email:
 *                type: string
 *                example: ali.valiyev@gmail.com
 *              birth_date:
 *                type: string
 *                format: date
 *                example: 2009-11-20
 *              gender:
 *                type: string
 *                example: Male
 *              lang_id:
 *                type: integer
 *                example: 1
 *    responses:
 *      201:
 *        description: Mijoz muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(customerValidation.createCustomerValidation),
  customerController.createCustomer
);

// <===== SIGN CUSTOMER ROUTE =====>
/**
 * @swagger
 * /customer/sign:
 *  post:
 *    tags: [Customer]
 *    summary: Mijoz tizimga kirish
 *    description: Mijoz tizimga kirish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: ali.valiyev@gmail.com
 *              hashed_password:
 *                type: string
 *                example: 0000
 *    responses:
 *      200:
 *        description: Tizimga muvaffaqiyatli kirdingiz
 *      401:
 *        description: Login yoki parol noto'g'ri
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/sign",
  validationResult(customerValidation.signCustomerValidation),
  customerController.signCustomer
);

// <===== GET ALL CUSTOMERS ROUTE =====>
/**
 * @swagger
 * /customer/all:
 *  get:
 *    tags: [Customer]
 *    summary: Barcha mijozlarni olish
 *    description: Tizimdagi barcha mijozlarni olish
 *    responses:
 *      200:
 *        description: Mijozlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", customerController.getAllCustomers);

// <===== GET CUSTOMER BY PK ROUTE =====>
/**
 * @swagger
 * /customer/by_pk/{id}:
 *  get:
 *    tags: [Customer]
 *    summary: ID orqali mijoz ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha mijoz ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijozning unikal identifikatori
 *    responses:
 *      200:
 *        description: Mijoz ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha mijoz topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", customerController.getCustomerByPk);

// <===== UPDATE CUSTOMER ROUTE =====>
/**
 * @swagger
 * /customer/update/{id}:
 *  put:
 *    tags: [Customer]
 *    summary: Mijoz ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha mijoz ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijozning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              first_name:
 *                type: string
 *                example: Ali
 *              last_name:
 *                type: string
 *                example: Valiyev
 *              phone:
 *                type: string
 *                example: +998901234567
 *              hashed_password:
 *                type: string
 *                example: 0000
 *              email:
 *                type: string
 *                example: ali.valiyev@gmail.com
 *              birth_date:
 *                type: string
 *                format: date
 *                example: 2009-11-20
 *              gender:
 *                type: string
 *                example: Male
 *    responses:
 *      200:
 *        description: Mijoz ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha mijoz topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(customerValidation.updateCustomerValidation),
  customerController.updateCustomer
);

// <===== DELETE CUSTOMER ROUTE =====>
/**
 * @swagger
 * /customer/delete/{id}:
 *  delete:
 *    tags: [Customer]
 *    summary: Mijozni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha mijozni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijozning unikal identifikatori
 *    responses:
 *      200:
 *        description: Mijoz muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha mijoz topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", customerController.deleteCustomer);

// <===== EXPORT ROUTER =====>
module.exports = router;
