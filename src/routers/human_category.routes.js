// <==========> <==========> <==========>
// <===== HUMAN_CATEGORY ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const humanCategoryValidation = require("../validations/human_categoryValidation");
const humanCategoryController = require("../controllers/human_category.controller");
const router = express.Router();

// <===== CREATE HUMAN_CATEGORY ROUTE =====>
/**
 * @swagger
 * /human_category/create:
 *  post:
 *    tags: [Human_Category]
 *    summary: Yangi odam toifasi yaratish
 *    description: Yangi odam toifasini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Bolalar
 *              start_age:
 *                type: integer
 *                example: 6
 *              finish_age:
 *                type: integer
 *                example: 12
 *              gender:
 *                type: string
 *                example: male
 *    responses:
 *      201:
 *        description: Odam toifasi muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(humanCategoryValidation.createHuman_CategoryValidation),
  humanCategoryController.createHuman_Category
);

// <===== GET ALL HUMAN_CATEGORIES ROUTE =====>
/**
 * @swagger
 * /human_category/all:
 *  get:
 *    tags: [Human_Category]
 *    summary: Barcha odam toifalarini olish
 *    description: Tizimdagi barcha odam toifalarini olish
 *    responses:
 *      200:
 *        description: Odam toifalari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", humanCategoryController.getAllHuman_Categories);

// <===== GET HUMAN_CATEGORY BY PK ROUTE =====>
/**
 * @swagger
 * /human_category/by_pk/{id}:
 *  get:
 *    tags: [Human_Category]
 *    summary: ID orqali odam toifasini olish
 *    description: Berilgan ID bo'yicha odam toifasini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Odam toifasining unikal identifikatori
 *    responses:
 *      200:
 *        description: Odam toifasi ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha odam toifasi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", humanCategoryController.getHuman_CategoryByPk);

// <===== UPDATE HUMAN_CATEGORY ROUTE =====>
/**
 * @swagger
 * /human_category/update/{id}:
 *  put:
 *    tags: [Human_Category]
 *    summary: Odam toifasini yangilash
 *    description: Berilgan ID bo'yicha odam toifasini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Odam toifasining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: O'smirlar
 *              start_age:
 *                type: integer
 *                example: 13
 *              finish_age:
 *                type: integer
 *                example: 17
 *              gender:
 *                type: string
 *                example: female
 *    responses:
 *      200:
 *        description: Odam toifasi muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha odam toifasi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(humanCategoryValidation.updateHuman_CategoryValidation),
  humanCategoryController.updateHuman_Category
);

// <===== DELETE HUMAN_CATEGORY ROUTE =====>
/**
 * @swagger
 * /human_category/delete/{id}:
 *  delete:
 *    tags: [Human_Category]
 *    summary: Odam toifasini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha odam toifasini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Odam toifasining unikal identifikatori
 *    responses:
 *      200:
 *        description: Odam toifasi muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha odam toifasi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", humanCategoryController.deleteHuman_Category);

// <===== EXPORT ROUTER =====>
module.exports = router;
