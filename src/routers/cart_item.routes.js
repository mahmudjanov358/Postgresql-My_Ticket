// <==========> <==========> <==========>
// <===== CART_ITEM ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const cartItemValidation = require("../validations/cart_itemValidation");
const cartItemController = require("../controllers/cart_item.controller");
const router = express.Router();

// <===== CREATE CART_ITEM ROUTE =====>
/**
 * @swagger
 * /cart_item/create:
 *  post:
 *    tags: [Cart_Item]
 *    summary: Yangi savat elementi yaratish
 *    description: Yangi savat elementi yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              ticket_id:
 *                type: integer
 *                example: 1
 *              cart_id:
 *                type: integer
 *                example: 1
 *    responses:
 *      201:
 *        description: Savat elementi muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(cartItemValidation.createCart_ItemValidation),
  cartItemController.createCart_Item
);

// <===== GET ALL CART_ITEMS ROUTE =====>
/**
 * @swagger
 * /cart_item/all:
 *  get:
 *    tags: [Cart_Item]
 *    summary: Barcha savat elementlarini olish
 *    description: Tizimdagi barcha savat elementlarini olish
 *    responses:
 *      200:
 *        description: Savat elementlari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", cartItemController.getAllCart_Items);

// <===== GET CART_ITEM BY PK ROUTE =====>
/**
 * @swagger
 * /cart_item/by_pk/{id}:
 *  get:
 *    tags: [Cart_Item]
 *    summary: ID orqali savat elementini olish
 *    description: Berilgan ID bo'yicha savat elementini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Savat elementining unikal identifikatori
 *    responses:
 *      200:
 *        description: Savat elementi ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha savat elementi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", cartItemController.getCart_ItemByPk);

// <===== DELETE CART_ITEM ROUTE =====>
/**
 * @swagger
 * /cart_item/delete/{id}:
 *  delete:
 *    tags: [Cart_Item]
 *    summary: Savat elementini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha savat elementini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Savat elementining unikal identifikatori
 *    responses:
 *      200:
 *        description: Savat elementi muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha savat elementi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", cartItemController.deleteCart_Item);

// <===== EXPORT ROUTER =====>
module.exports = router;
