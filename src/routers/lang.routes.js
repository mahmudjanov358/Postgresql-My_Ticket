// <==========> <==========> <==========>
// <===== LANG ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const langValidation = require("../validations/langValidation");
const langController = require("../controllers/lang.controller");
const router = express.Router();

// <===== CREATE LANG ROUTE =====>
/**
 * @swagger
 * /lang/create:
 *  post:
 *    tags: [Lang]
 *    summary: Yangi til yaratish
 *    description: Yangi til yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Uzbek
 *                enum: ["Uzbek", "Russian", "English"]
 *    responses:
 *      201:
 *        description: Til muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(langValidation.createLangValidation),
  langController.createLang
);

// <===== GET ALL LANGS ROUTE =====>
/**
 * @swagger
 * /lang/all:
 *  get:
 *    tags: [Lang]
 *    summary: Barcha tillarni olish
 *    description: Tizimdagi barcha tillarni olish
 *    responses:
 *      200:
 *        description: Tillar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", langController.getAllLangs);

// <===== GET LANG BY PK ROUTE =====>
/**
 * @swagger
 * /lang/by_pk/{id}:
 *  get:
 *    tags: [Lang]
 *    summary: ID orqali til ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha til ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tilning unikal identifikatori
 *    responses:
 *      200:
 *        description: Til ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha til topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", langController.getLangByPk);

// <===== UPDATE LANG ROUTE =====>
/**
 * @swagger
 * /lang/update/{id}:
 *  put:
 *    tags: [Lang]
 *    summary: Til ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha til ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tilning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Russian
 *                enum: ["Uzbek", "Russian", "English"]
 *    responses:
 *      200:
 *        description: Til ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha til topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(langValidation.updateLangValidation),
  langController.updateLang
);

// <===== DELETE LANG ROUTE =====>
/**
 * @swagger
 * /lang/delete/{id}:
 *  delete:
 *    tags: [Lang]
 *    summary: Tilni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha tilni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tilning unikal identifikatori
 *    responses:
 *      200:
 *        description: Til muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha til topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", langController.deleteLang);

// <===== EXPORT ROUTER =====>
module.exports = router;
