// <==========> <==========> <==========>
// <===== DISTRICT ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const districtValidation = require("../validations/districtValidation");
const districtController = require("../controllers/district.controller");
const router = express.Router();

// <===== CREATE DISTRICT ROUTE =====>
/**
 * @swagger
 * /district/create:
 *  post:
 *    tags: [District]
 *    summary: Yangi tuman yaratish
 *    description: Yangi tuman yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Chilonzor
 *              region_id:
 *                type: integer
 *                example: 1
 *    responses:
 *      201:
 *        description: Tuman muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(districtValidation.createDistrictValidation),
  districtController.createDistrict
);

// <===== GET ALL DISTRICTS ROUTE =====>
/**
 * @swagger
 * /district/all:
 *  get:
 *    tags: [District]
 *    summary: Barcha tumani olish
 *    description: Tizimdagi barcha tumani olish
 *    responses:
 *      200:
 *        description: Tumanlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", districtController.getAllDistricts);

// <===== GET DISTRICT BY PK ROUTE =====>
/**
 * @swagger
 * /district/by_pk/{id}:
 *  get:
 *    tags: [District]
 *    summary: ID orqali tuman ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha tuman ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tumaning unikal identifikatori
 *    responses:
 *      200:
 *        description: Tuman ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha tuman topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", districtController.getDistrictByPk);

// <===== UPDATE DISTRICT ROUTE =====>
/**
 * @swagger
 * /district/update/{id}:
 *  put:
 *    tags: [District]
 *    summary: Tuman ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha tuman ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tumaning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Yunusobod
 *    responses:
 *      200:
 *        description: Tuman ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha tuman topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(districtValidation.updateDistrictValidation),
  districtController.updateDistrict
);

// <===== DELETE DISTRICT ROUTE =====>
/**
 * @swagger
 * /district/delete/{id}:
 *  delete:
 *    tags: [District]
 *    summary: Tumanni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha tumanni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tumaning unikal identifikatori
 *    responses:
 *      200:
 *        description: Tuman muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha tuman topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", districtController.deleteDistrict);

// <===== EXPORT ROUTER =====>
module.exports = router;
