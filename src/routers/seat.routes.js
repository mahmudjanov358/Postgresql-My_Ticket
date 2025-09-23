// <==========> <==========> <==========>
// <===== SEAT ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const seatValidation = require("../validations/seatValidation");
const seatController = require("../controllers/seat.controller");
const router = express.Router();

// <===== CREATE SEAT ROUTE =====>
/**
 * @swagger
 * /seat/create:
 *  post:
 *    tags: [Seat]
 *    summary: Yangi o'rindiq yaratish
 *    description: Yangi o'rindiq yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sector:
 *                type: integer
 *                example: 1
 *              row_number:
 *                type: integer
 *                example: 5
 *              number:
 *                type: integer
 *                example: 12
 *              venue_id:
 *                type: integer
 *                example: 1
 *              seat_type_id:
 *                type: integer
 *                example: 2
 *    responses:
 *      201:
 *        description: O'rindiq muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(seatValidation.createSeatValidation),
  seatController.createSeat
);

// <===== GET ALL SEATS ROUTE =====>
/**
 * @swagger
 * /seat/all:
 *  get:
 *    tags: [Seat]
 *    summary: Barcha o'rindiqlarni olish
 *    description: Tizimdagi barcha o'rindiqlarni olish
 *    responses:
 *      200:
 *        description: O'rindiqlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", seatController.getAllSeats);

// <===== GET SEAT BY PK ROUTE =====>
/**
 * @swagger
 * /seat/by_pk/{id}:
 *  get:
 *    tags: [Seat]
 *    summary: ID orqali o'rindiq ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha o'rindiq ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: O'rindiqning unikal identifikatori
 *    responses:
 *      200:
 *        description: O'rindiq ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha o'rindiq topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", seatController.getSeatByPk);

// <===== UPDATE SEAT ROUTE =====>
/**
 * @swagger
 * /seat/update/{id}:
 *  put:
 *    tags: [Seat]
 *    summary: O'rindiq ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha o'rindiq ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: O'rindiqning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sector:
 *                type: integer
 *                example: 2
 *              row_number:
 *                type: integer
 *                example: 3
 *              number:
 *                type: integer
 *                example: 8
 *    responses:
 *      200:
 *        description: O'rindiq ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha o'rindiq topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(seatValidation.updateSeatValidation),
  seatController.updateSeat
);

// <===== DELETE SEAT ROUTE =====>
/**
 * @swagger
 * /seat/delete/{id}:
 *  delete:
 *    tags: [Seat]
 *    summary: O'rindiqni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha o'rindiqni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: O'rindiqning unikal identifikatori
 *    responses:
 *      200:
 *        description: O'rindiq muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha o'rindiq topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", seatController.deleteSeat);

// <===== EXPORT ROUTER =====>
module.exports = router;
