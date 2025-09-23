// <==========> <==========> <==========>
// <===== BOOKING ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const bookingValidation = require("../validations/bookingValidation");
const bookingController = require("../controllers/booking.controller");
const router = express.Router();

// <===== CREATE BOOKING ROUTE =====>
/**
 * @swagger
 * /booking/create:
 *  post:
 *    tags: [Booking]
 *    summary: Yangi bron qilish yaratish
 *    description: Yangi bron qilish yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              cart_id:
 *                type: integer
 *                example: 1
 *              created_at:
 *                type: string
 *                format: date-time
 *                example: "2025-12-31T23:59:59Z"
 *              finished:
 *                type: string
 *                format: date-time
 *                example: "2025-12-31T23:59:59Z"
 *              payment_method_id:
 *                type: integer
 *                example: 1
 *              delivery_method_id:
 *                type: integer
 *                example: 1
 *    responses:
 *      201:
 *        description: Bron muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(bookingValidation.createBookingValidation),
  bookingController.createBooking
);

// <===== GET ALL BOOKINGS ROUTE =====>
/**
 * @swagger
 * /booking/all:
 *  get:
 *    tags: [Booking]
 *    summary: Barcha bron qilishlarni olish
 *    description: Tizimdagi barcha bron qilishlarni olish
 *    responses:
 *      200:
 *        description: Bron qilishlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", bookingController.getAllBookings);

// <===== GET BOOKING BY PK ROUTE =====>
/**
 * @swagger
 * /booking/by_pk/{id}:
 *  get:
 *    tags: [Booking]
 *    summary: ID orqali bron qilish ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha bron qilish ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Bron qilishning unikal identifikatori
 *    responses:
 *      200:
 *        description: Bron qilish ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha bron qilish topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", bookingController.getBookingByPk);

// <===== UPDATE BOOKING ROUTE =====>
/**
 * @swagger
 * /booking/update/{id}:
 *  put:
 *    tags: [Booking]
 *    summary: Bron qilish ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha bron qilish ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Bron qilishning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              finished:
 *                type: string
 *                format: date-time
 *                example: "2025-12-31T23:59:59Z"
 *    responses:
 *      200:
 *        description: Bron qilish ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha bron qilish topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(bookingValidation.updateBookingValidation),
  bookingController.updateBooking
);

// <===== DELETE BOOKING ROUTE =====>
/**
 * @swagger
 * /booking/delete/{id}:
 *  delete:
 *    tags: [Booking]
 *    summary: Bron qilishni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha bron qilishni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Bron qilishning unikal identifikatori
 *    responses:
 *      200:
 *        description: Bron qilish muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha bron qilish topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", bookingController.deleteBooking);

// <===== EXPORT ROUTER =====>
module.exports = router;
