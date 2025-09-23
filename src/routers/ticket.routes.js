// <==========> <==========> <==========>
// <===== TICKET ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const ticketValidation = require("../validations/ticketValidation");
const ticketController = require("../controllers/ticket.controller");
const router = express.Router();

// <===== CREATE TICKET ROUTE =====>
/**
 * @swagger
 * /ticket/create:
 *  post:
 *    tags: [Ticket]
 *    summary: Yangi chipta yaratish
 *    description: Yangi chipta yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              event_id:
 *                type: integer
 *                example: 1
 *              seat_id:
 *                type: integer
 *                example: 5
 *              price:
 *                type: integer
 *                example: 50000
 *              service_fee:
 *                type: integer
 *                example: 5000
 *              ticket_status_id:
 *                type: integer
 *                example: 1
 *              ticket_type:
 *                type: string
 *                example: vip
 *    responses:
 *      201:
 *        description: Chipta muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(ticketValidation.createTicketValidation),
  ticketController.createTicket
);

// <===== GET ALL TICKETS ROUTE =====>
/**
 * @swagger
 * /ticket/all:
 *  get:
 *    tags: [Ticket]
 *    summary: Barcha chiptalarni olish
 *    description: Tizimdagi barcha chiptalarni olish
 *    responses:
 *      200:
 *        description: Chiptalar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", ticketController.getAllTickets);

// <===== GET TICKET BY PK ROUTE =====>
/**
 * @swagger
 * /ticket/by_pk/{id}:
 *  get:
 *    tags: [Ticket]
 *    summary: ID orqali chipta ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha chipta ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Chiptaning unikal identifikatori
 *    responses:
 *      200:
 *        description: Chipta ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha chipta topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", ticketController.getTicketByPk);

// <===== UPDATE TICKET ROUTE =====>
/**
 * @swagger
 * /ticket/update/{id}:
 *  put:
 *    tags: [Ticket]
 *    summary: Chipta ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha chipta ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Chiptaning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              price:
 *                type: integer
 *                example: 60000
 *              service_fee:
 *                type: integer
 *                example: 6000
 *              ticket_type:
 *                type: string
 *                example: vip
 *    responses:
 *      200:
 *        description: Chipta ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha chipta topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(ticketValidation.updateTicketValidation),
  ticketController.updateTicket
);

// <===== DELETE TICKET ROUTE =====>
/**
 * @swagger
 * /ticket/delete/{id}:
 *  delete:
 *    tags: [Ticket]
 *    summary: Chiptani tizimdan o'chirish
 *    description: Berilgan ID bo'yicha chiptani tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Chiptaning unikal identifikatori
 *    responses:
 *      200:
 *        description: Chipta muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha chipta topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", ticketController.deleteTicket);

// <===== EXPORT ROUTER =====>
module.exports = router;
