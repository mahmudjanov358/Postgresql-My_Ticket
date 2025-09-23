// <==========> <==========> <==========>
// <===== VENUE_TYPES ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const venueTypeValidation = require("../validations/venue_typesValidation");
const venueTypeController = require("../controllers/venue_types.controller");
const router = express.Router();

// <===== CREATE VENUE_TYPE ROUTE =====>
/**
 * @swagger
 * /venue_types/create:
 *  post:
 *    tags: [Venue_Types]
 *    summary: Yangi maydon turi yaratish
 *    description: Yangi maydon turini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              venue_id:
 *                type: integer
 *                example: 1
 *              type_id:
 *                type: integer
 *                example: 1
 *    responses:
 *      201:
 *        description: Maydon turi muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(venueTypeValidation.createVenue_TypeValidation),
  venueTypeController.createVenue_Type
);

// <===== GET ALL VENUE_TYPES ROUTE =====>
/**
 * @swagger
 * /venue_types/all:
 *  get:
 *    tags: [Venue_Types]
 *    summary: Barcha maydon turlarini olish
 *    description: Tizimdagi barcha maydon turlarini olish
 *    responses:
 *      200:
 *        description: Maydon turlari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", venueTypeController.getAllVenue_Types);

// <===== GET VENUE_TYPE BY PK ROUTE =====>
/**
 * @swagger
 * /venue_types/by_pk/{id}:
 *  get:
 *    tags: [Venue_Types]
 *    summary: ID orqali maydon turini olish
 *    description: Berilgan ID bo'yicha maydon turini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydon turining unikal identifikatori
 *    responses:
 *      200:
 *        description: Maydon turi ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha maydon turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", venueTypeController.getVenue_TypeByPk);

// <===== DELETE VENUE_TYPE ROUTE =====>
/**
 * @swagger
 * /venue_types/delete/{id}:
 *  delete:
 *    tags: [Venue_Types]
 *    summary: Maydon turini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha maydon turini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydon turining unikal identifikatori
 *    responses:
 *      200:
 *        description: Maydon turi muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha maydon turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", venueTypeController.deleteVenue_Type);

// <===== EXPORT ROUTER =====>
module.exports = router;
