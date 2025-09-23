// <==========> <==========> <==========>
// <===== VENUE ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const venueValidation = require("../validations/venueValidation");
const venueController = require("../controllers/venue.controller");
const router = express.Router();

// <===== CREATE VENUE ROUTE =====>
/**
 * @swagger
 * /venue/create:
 *  post:
 *    tags: [Venue]
 *    summary: Yangi maydon yaratish
 *    description: Yangi maydon yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Olimpiya saroyi
 *              address:
 *                type: string
 *                example: Amir Temur ko'chasi 12, Toshkent
 *              location:
 *                type: string
 *                example: 41.3111,69.2797
 *              site:
 *                type: string
 *                example: https://olimpiya.uz
 *              phone:
 *                type: string
 *                example: +998901234567
 *              region_id:
 *                type: integer
 *                example: 1
 *              district_id:
 *                type: integer
 *                example: 3
 *    responses:
 *      201:
 *        description: Maydon muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(venueValidation.createVenueValidation),
  venueController.createVenue
);

// <===== GET ALL VENUES ROUTE =====>
/**
 * @swagger
 * /venue/all:
 *  get:
 *    tags: [Venue]
 *    summary: Barcha maydonlarni olish
 *    description: Tizimdagi barcha maydonlarni olish
 *    responses:
 *      200:
 *        description: Maydonlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", venueController.getAllVenues);

// <===== GET VENUE BY PK ROUTE =====>
/**
 * @swagger
 * /venue/by_pk/{id}:
 *  get:
 *    tags: [Venue]
 *    summary: ID orqali maydon ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha maydon ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydonning unikal identifikatori
 *    responses:
 *      200:
 *        description: Maydon ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha maydon topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", venueController.getVenueByPk);

// <===== UPDATE VENUE ROUTE =====>
/**
 * @swagger
 * /venue/update/{id}:
 *  put:
 *    tags: [Venue]
 *    summary: Maydon ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha maydon ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydonning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Milliy Arena
 *              address:
 *                type: string
 *                example: Bunyodkor ko'chasi 1, Toshkent
 *              location:
 *                type: string
 *                example: 41.3000,69.2500
 *              site:
 *                type: string
 *                example: https://milliyarena.uz
 *              phone:
 *                type: string
 *                example: +998977654321
 *    responses:
 *      200:
 *        description: Maydon ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha maydon topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(venueValidation.updateVenueValidation),
  venueController.updateVenue
);

// <===== DELETE VENUE ROUTE =====>
/**
 * @swagger
 * /venue/delete/{id}:
 *  delete:
 *    tags: [Venue]
 *    summary: Maydonni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha maydonni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydonning unikal identifikatori
 *    responses:
 *      200:
 *        description: Maydon muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha maydon topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", venueController.deleteVenue);

// <===== EXPORT ROUTER =====>
module.exports = router;
