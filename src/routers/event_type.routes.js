// <==========> <==========> <==========>
// <===== EVENT_TYPE ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const eventTypeValidation = require("../validations/event_typeValidation");
const eventTypeController = require("../controllers/event_type.controller");
const router = express.Router();

// <===== CREATE EVENT_TYPE ROUTE =====>
/**
 * @swagger
 * /event_type/create:
 *  post:
 *    tags: [Event_Type]
 *    summary: Yangi tadbir turi yaratish
 *    description: Yangi tadbir turini yaratish jarayoni
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
 *    responses:
 *      201:
 *        description: Tadbir turi muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(eventTypeValidation.createEvent_TypeValidation),
  eventTypeController.createEvent_Type
);

// <===== GET ALL EVENT_TYPES ROUTE =====>
/**
 * @swagger
 * /event_type/all:
 *  get:
 *    tags: [Event_Type]
 *    summary: Barcha tadbir turlarini olish
 *    description: Tizimdagi barcha tadbir turlarini olish
 *    responses:
 *      200:
 *        description: Tadbir turlari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", eventTypeController.getAllEvent_Types);

// <===== GET EVENT_TYPE BY PK ROUTE =====>
/**
 * @swagger
 * /event_type/by_pk/{id}:
 *  get:
 *    tags: [Event_Type]
 *    summary: ID orqali tadbir turini olish
 *    description: Berilgan ID bo'yicha tadbir turini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tadbir turining unikal identifikatori
 *    responses:
 *      200:
 *        description: Tadbir turi ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha tadbir turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", eventTypeController.getEvent_TypeByPk);

// <===== UPDATE EVENT_TYPE ROUTE =====>
/**
 * @swagger
 * /event_type/update/{id}:
 *  put:
 *    tags: [Event_Type]
 *    summary: Tadbir turini yangilash
 *    description: Berilgan ID bo'yicha tadbir turini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tadbir turining unikal identifikatori
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
 *    responses:
 *      200:
 *        description: Tadbir turi muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha tadbir turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(eventTypeValidation.updateEvent_TypeValidation),
  eventTypeController.updateEvent_Type
);

// <===== DELETE EVENT_TYPE ROUTE =====>
/**
 * @swagger
 * /event_type/delete/{id}:
 *  delete:
 *    tags: [Event_Type]
 *    summary: Tadbir turini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha tadbir turini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Tadbir turining unikal identifikatori
 *    responses:
 *      200:
 *        description: Tadbir turi muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha tadbir turi topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", eventTypeController.deleteEvent_Type);

// <===== EXPORT ROUTER =====>
module.exports = router;
