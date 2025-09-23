// <==========> <==========> <==========>
// <===== EVENT ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const eventValidation = require("../validations/eventValidation");
const eventController = require("../controllers/event.controller");
const router = express.Router();

// <===== CREATE EVENT ROUTE =====>
/**
 * @swagger
 * /event/create:
 *  post:
 *    tags: [Event]
 *    summary: Yangi tadbir yaratish
 *    description: Yangi tadbir yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Konsert
 *              photo:
 *                type: string
 *                example: https://example.com/photo.jpg
 *              start_date:
 *                type: string
 *                format: date
 *                example: 2025-12-25
 *              start_time:
 *                type: string
 *                example: 19:00
 *              finish_date:
 *                type: string
 *                format: date
 *                example: 2025-12-25
 *              finish_time:
 *                type: string
 *                example: 22:00
 *              info:
 *                type: string
 *                example: Tadbir haqida qisqacha ma'lumot
 *              event_type_id:
 *                type: integer
 *                example: 1
 *              human_category_id:
 *                type: integer
 *                example: 2
 *              venue_id:
 *                type: integer
 *                example: 3
 *              lang_id:
 *                type: integer
 *                example: 1
 *              release_date:
 *                type: string
 *                format: date
 *                example: 2025-12-01
 *    responses:
 *      201:
 *        description: Tadbir muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(eventValidation.createEventValidation),
  eventController.createEvent
);

// <===== GET ALL EVENTS ROUTE =====>
/**
 * @swagger
 * /event/all:
 *  get:
 *    tags: [Event]
 *    summary: Barcha tadbirlarni olish
 *    description: Tizimdagi barcha tadbirlarni olish
 *    responses:
 *      200:
 *        description: Tadbirlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", eventController.getAllEvents);

// <===== GET EVENT BY PK ROUTE =====>
/**
 * @swagger
 * /event/by_pk/{id}:
 *  get:
 *    tags: [Event]
 *    summary: ID orqali tadbir ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha tadbir ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tadbirning unikal identifikatori
 *    responses:
 *      200:
 *        description: Tadbir ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha tadbir topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", eventController.getEventByPk);

// <===== UPDATE EVENT ROUTE =====>
/**
 * @swagger
 * /event/update/{id}:
 *  put:
 *    tags: [Event]
 *    summary: Tadbir ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha tadbir ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tadbirning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Spektakl
 *              photo:
 *                type: string
 *                example: https://example.com/new-photo.jpg
 *              start_date:
 *                type: string
 *                format: date
 *                example: 2025-12-26
 *              start_time:
 *                type: string
 *                example: 20:00
 *              finish_date:
 *                type: string
 *                format: date
 *                example: 2025-12-26
 *              finish_time:
 *                type: string
 *                example: 23:00
 *              info:
 *                type: string
 *                example: Yangilangan tadbir haqida ma'lumot
 *              release_date:
 *                type: string
 *                format: date
 *                example: 2025-12-02
 *    responses:
 *      200:
 *        description: Tadbir ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha tadbir topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(eventValidation.updateEventValidation),
  eventController.updateEvent
);

// <===== DELETE EVENT ROUTE =====>
/**
 * @swagger
 * /event/delete/{id}:
 *  delete:
 *    tags: [Event]
 *    summary: Tadbirni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha tadbirni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tadbirning unikal identifikatori
 *    responses:
 *      200:
 *        description: Tadbir muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha tadbir topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", eventController.deleteEvent);

// <===== EXPORT ROUTER =====>
module.exports = router;
