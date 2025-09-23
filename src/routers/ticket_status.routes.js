// <==========> <==========> <==========>
// <===== TICKET_STATUS ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const ticketStatusValidation = require("../validations/ticket_statusValidation");
const ticketStatusController = require("../controllers/ticket_status.controller");
const router = express.Router();

// <===== CREATE TICKET_STATUS ROUTE =====>
/**
 * @swagger
 * /ticket_status/create:
 *  post:
 *    tags: [Ticket_Status]
 *    summary: Yangi chipta holati yaratish
 *    description: Yangi chipta holatini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Available
 *    responses:
 *      201:
 *        description: Chipta holati muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(ticketStatusValidation.createTicket_StatusValidation),
  ticketStatusController.createTicket_Status
);

// <===== GET ALL TICKET_STATUS ROUTE =====>
/**
 * @swagger
 * /ticket_status/all:
 *  get:
 *    tags: [Ticket_Status]
 *    summary: Barcha chipta holatlarini olish
 *    description: Tizimdagi barcha chipta holatlarini olish
 *    responses:
 *      200:
 *        description: Chipta holatlari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", ticketStatusController.getAllTicket_Status);

// <===== GET TICKET_STATUS BY PK ROUTE =====>
/**
 * @swagger
 * /ticket_status/by_pk/{id}:
 *  get:
 *    tags: [Ticket_Status]
 *    summary: ID orqali chipta holatini olish
 *    description: Berilgan ID bo'yicha chipta holatini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Chipta holatining unikal identifikatori
 *    responses:
 *      200:
 *        description: Chipta holati ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha chipta holati topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", ticketStatusController.getTicket_StatusByPk);

// <===== UPDATE TICKET_STATUS ROUTE =====>
/**
 * @swagger
 * /ticket_status/update/{id}:
 *  put:
 *    tags: [Ticket_Status]
 *    summary: Chipta holatini yangilash
 *    description: Berilgan ID bo'yicha chipta holatini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Chipta holatining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Sold
 *    responses:
 *      200:
 *        description: Chipta holati muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha chipta holati topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(ticketStatusValidation.updateTicket_StatusValidation),
  ticketStatusController.updateTicket_Status
);

// <===== DELETE TICKET_STATUS ROUTE =====>
/**
 * @swagger
 * /ticket_status/delete/{id}:
 *  delete:
 *    tags: [Ticket_Status]
 *    summary: Chipta holatini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha chipta holatini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Chipta holatining unikal identifikatori
 *    responses:
 *      200:
 *        description: Chipta holati muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha chipta holati topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", ticketStatusController.deleteTicket_Status);

// <===== EXPORT ROUTER =====>
module.exports = router;
