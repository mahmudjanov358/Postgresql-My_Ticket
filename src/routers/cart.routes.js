// <==========> <==========> <==========>
// <===== CART ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const cartValidation = require("../validations/cartValidation");
const cartController = require("../controllers/cart.controller");
const router = express.Router();

// <===== CREATE CART ROUTE =====>
/**
 * @swagger
 * /cart/create:
 *  post:
 *    tags: [Cart]
 *    summary: Yangi savat yaratish
 *    description: Yangi savat yaratish jarayoni
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
 *              createdAt:
 *                type: string
 *                format: date-time
 *                example: "2025-12-31T23:59:59Z"
 *              finishedAt:
 *                type: string
 *                format: date-time
 *                example: "2025-12-31T23:59:59Z"
 *    responses:
 *      201:
 *        description: Savat muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(cartValidation.createCartValidation),
  cartController.createCart
);

// <===== GET ALL CARTS ROUTE =====>
/**
 * @swagger
 * /cart/all:
 *  get:
 *    tags: [Cart]
 *    summary: Barcha savatlarni olish
 *    description: Tizimdagi barcha savatlarni olish
 *    responses:
 *      200:
 *        description: Savatlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", cartController.getAllCarts);

// <===== GET CART BY PK ROUTE =====>
/**
 * @swagger
 * /cart/by_pk/{id}:
 *  get:
 *    tags: [Cart]
 *    summary: ID orqali savat ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha savat ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Savatning unikal identifikatori
 *    responses:
 *      200:
 *        description: Savat ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha savat topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", cartController.getCartByPk);

// <===== UPDATE CART ROUTE =====>
/**
 * @swagger
 * /cart/update/{id}:
 *  put:
 *    tags: [Cart]
 *    summary: Savat ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha savat ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Savatning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              finishedAt:
 *                type: string
 *                format: date-time
 *                example: "2025-12-31T23:59:59Z"
 *    responses:
 *      200:
 *        description: Savat ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha savat topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(cartValidation.updateCartValidation),
  cartController.updateCart
);

// <===== DELETE CART ROUTE =====>
/**
 * @swagger
 * /cart/delete/{id}:
 *  delete:
 *    tags: [Cart]
 *    summary: Savatni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha savatni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Savatning unikal identifikatori
 *    responses:
 *      200:
 *        description: Savat muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha savat topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", cartController.deleteCart);

// <===== EXPORT ROUTER =====>
module.exports = router;
