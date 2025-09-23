// <==========> <==========> <==========>
// <===== TYPES ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const typesValidation = require("../validations/typesValidation");
const typesController = require("../controllers/types.controller");
const router = express.Router();

// <===== CREATE TYPE ROUTE =====>
/**
 * @swagger
 * /types/create:
 *  post:
 *    tags: [Types]
 *    summary: Yangi tur yaratish
 *    description: Yangi tur yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: VIP
 *    responses:
 *      201:
 *        description: Tur muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(typesValidation.createTypeValidation),
  typesController.createType
);

// <===== GET ALL TYPES ROUTE =====>
/**
 * @swagger
 * /types/all:
 *  get:
 *    tags: [Types]
 *    summary: Barcha turlarni olish
 *    description: Tizimdagi barcha turlarni olish
 *    responses:
 *      200:
 *        description: Turlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", typesController.getAllTypes);

// <===== GET TYPE BY PK ROUTE =====>
/**
 * @swagger
 * /types/by_pk/{id}:
 *  get:
 *    tags: [Types]
 *    summary: ID orqali tur ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha tur ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Turning unikal identifikatori
 *    responses:
 *      200:
 *        description: Tur ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha tur topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", typesController.getTypeByPk);

// <===== UPDATE TYPE ROUTE =====>
/**
 * @swagger
 * /types/update/{id}:
 *  put:
 *    tags: [Types]
 *    summary: Turni yangilash
 *    description: Berilgan ID bo'yicha turni yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Turning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Premium
 *    responses:
 *      200:
 *        description: Tur muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha tur topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(typesValidation.updateTypeValidation),
  typesController.updateType
);

// <===== DELETE TYPE ROUTE =====>
/**
 * @swagger
 * /types/delete/{id}:
 *  delete:
 *    tags: [Types]
 *    summary: Turni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha turni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Turning unikal identifikatori
 *    responses:
 *      200:
 *        description: Tur muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha tur topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", typesController.deleteType);

// <===== EXPORT ROUTER =====>
module.exports = router;
