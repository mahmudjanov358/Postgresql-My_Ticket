// <==========> <==========> <==========>
// <===== SEAT_TYPE ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const seatTypeValidation = require("../validations/seat_typeValidation");
const seatTypeController = require("../controllers/seat_type.controller");
const router = express.Router();

// <===== CREATE SEAT_TYPE ROUTE =====>
/**
 * @swagger
 * /seat_type/create:
 *  post:
 *    tags: [Seat_Type]
 *    summary: Yangi o'rindiq turi yaratish
 *    description: Yangi o'rindiq turini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Simple
 *    responses:
 *      201:
 *        description: O'rindiq turi muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(seatTypeValidation.createSeat_TypeValidation),
  seatTypeController.createSeat_Type
);

// <===== GET ALL SEAT_TYPES ROUTE =====>
/**
 * @swagger
 * /seat_type/all:
 *  get:
 *    tags: [Seat_Type]
 *    summary: Barcha o'rindiq turlarini olish
 *    description: Tizimdagi barcha o'rindiq turlarini olish
 *    responses:
 *      200:
 *        description: O'rindiq turlari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", seatTypeController.getAllSeat_Types);

// <===== GET SEAT_TYPE BY PK ROUTE =====>
/**
 * @swagger
 * /seat_type/by_pk/{id}:
 *  get:
 *    tags: [Seat_Type]
 *    summary: ID orqali o'rindiq turini olish
 *    description: Berilgan ID bo'yicha o'rindiq turini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: O'rindiq turining unikal identifikatori
 *    responses:
 *      200:
 *        description: O'rindiq turi ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha o'rindiq turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", seatTypeController.getSeat_TypeByPk);

// <===== UPDATE SEAT_TYPE ROUTE =====>
/**
 * @swagger
 * /seat_type/update/{id}:
 *  put:
 *    tags: [Seat_Type]
 *    summary: O'rindiq turini yangilash
 *    description: Berilgan ID bo'yicha o'rindiq turini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: O'rindiq turining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Normal
 *    responses:
 *      200:
 *        description: O'rindiq turi muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha o'rindiq turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(seatTypeValidation.updateSeat_TypeValidation),
  seatTypeController.updateSeat_Type
);

// <===== DELETE SEAT_TYPE ROUTE =====>
/**
 * @swagger
 * /seat_type/delete/{id}:
 *  delete:
 *    tags: [Seat_Type]
 *    summary: O'rindiq turini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha o'rindiq turini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: O'rindiq turining unikal identifikatori
 *    responses:
 *      200:
 *        description: O'rindiq turi muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha o'rindiq turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", seatTypeController.deleteSeat_Type);

// <===== EXPORT ROUTER =====>
module.exports = router;
