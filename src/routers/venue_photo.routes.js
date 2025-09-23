// <==========> <==========> <==========>
// <===== VENUE_PHOTO ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const venuePhotoValidation = require("../validations/venue_photoValidation");
const venuePhotoController = require("../controllers/venue_photo.controller");
const router = express.Router();

// <===== CREATE VENUE_PHOTO ROUTE =====>
/**
 * @swagger
 * /venue_photo/create:
 *  post:
 *    tags: [Venue_Photo]
 *    summary: Yangi maydon rasmini yaratish
 *    description: Yangi maydon rasmini yaratish jarayoni
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
 *              url:
 *                type: string
 *                example: https://example.com/photo.jpg
 *    responses:
 *      201:
 *        description: Maydon rasm muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(venuePhotoValidation.createVenue_PhotoValidation),
  venuePhotoController.createVenue_Photo
);

// <===== GET ALL VENUE_PHOTOS ROUTE =====>
/**
 * @swagger
 * /venue_photo/all:
 *  get:
 *    tags: [Venue_Photo]
 *    summary: Barcha maydon rasmlarini olish
 *    description: Tizimdagi barcha maydon rasmlarini olish
 *    responses:
 *      200:
 *        description: Maydon rasmlari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", venuePhotoController.getAllVenue_Photo);

// <===== GET VENUE_PHOTO BY PK ROUTE =====>
/**
 * @swagger
 * /venue_photo/by_pk/{id}:
 *  get:
 *    tags: [Venue_Photo]
 *    summary: ID orqali maydon rasm ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha maydon rasm ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydon rasmining unikal identifikatori
 *    responses:
 *      200:
 *        description: Maydon rasm ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha maydon rasm topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", venuePhotoController.getVenue_PhotoByPk);

// <===== UPDATE VENUE_PHOTO ROUTE =====>
/**
 * @swagger
 * /venue_photo/update/{id}:
 *  put:
 *    tags: [Venue_Photo]
 *    summary: Maydon rasm ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha maydon rasm ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydon rasmining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              url:
 *                type: string
 *                example: https://example.com/new-photo.jpg
 *    responses:
 *      200:
 *        description: Maydon rasm ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha maydon rasm topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(venuePhotoValidation.updateVenue_PhotoValidation),
  venuePhotoController.updateVenue_Photo
);

// <===== DELETE VENUE_PHOTO ROUTE =====>
/**
 * @swagger
 * /venue_photo/delete/{id}:
 *  delete:
 *    tags: [Venue_Photo]
 *    summary: Maydon rasmini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha maydon rasmini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Maydon rasmining unikal identifikatori
 *    responses:
 *      200:
 *        description: Maydon rasm muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha maydon rasm topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", venuePhotoController.deleteVenue_Photo);

// <===== EXPORT ROUTER =====>
module.exports = router;
