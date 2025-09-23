// <==========> <==========> <==========>
// <===== REGION ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const regionValidation = require("../validations/regionValidation");
const regionController = require("../controllers/region.controller");
const router = express.Router();

// <===== CREATE REGION ROUTE =====>
/**
 * @swagger
 * /region/create:
 *  post:
 *    tags: [Region]
 *    summary: Yangi viloyat yaratish
 *    description: Yangi viloyat yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Toshkent
 *    responses:
 *      201:
 *        description: Viloyat muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(regionValidation.createRegionValidation),
  regionController.createRegion
);

// <===== GET ALL REGIONS ROUTE =====>
/**
 * @swagger
 * /region/all:
 *  get:
 *    tags: [Region]
 *    summary: Barcha viloyatlarni olish
 *    description: Tizimdagi barcha viloyatlarni olish
 *    responses:
 *      200:
 *        description: Viloyatlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", regionController.getAllRegions);

// <===== GET REGION BY PK ROUTE =====>
/**
 * @swagger
 * /region/by_pk/{id}:
 *  get:
 *    tags: [Region]
 *    summary: ID orqali viloyat ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha viloyat ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Viloyatning unikal identifikatori
 *    responses:
 *      200:
 *        description: Viloyat ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha viloyat topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", regionController.getRegionByPk);

// <===== UPDATE REGION ROUTE =====>
/**
 * @swagger
 * /region/update/{id}:
 *  put:
 *    tags: [Region]
 *    summary: Viloyat ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha viloyat ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Viloyatning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Samarqand
 *    responses:
 *      200:
 *        description: Viloyat ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha viloyat topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(regionValidation.updateRegionValidation),
  regionController.updateRegion
);

// <===== DELETE REGION ROUTE =====>
/**
 * @swagger
 * /region/delete/{id}:
 *  delete:
 *    tags: [Region]
 *    summary: Viloyatni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha viloyatni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Viloyatning unikal identifikatori
 *    responses:
 *      200:
 *        description: Viloyat muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha viloyat topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", regionController.deleteRegion);

// <===== EXPORT ROUTER =====>
module.exports = router;
