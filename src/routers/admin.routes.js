// <==========> <==========> <==========>
// <===== ADMIN ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const adminValidation = require("../validations/adminValidation");
const adminController = require("../controllers/admin.controller");
const router = express.Router();

// <===== CREATE ADMIN ROUTE =====>
/**
 * @swagger
 * /admin/create:
 *  post:
 *    tags: [Admin]
 *    summary: Yangi Admin yaratish
 *    description: Yangi Admin yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Ali
 *              login:
 *                type: string
 *                example: ali_0
 *              hashed_password:
 *                type: string
 *                example: XXXX
 *              is_active:
 *                type: boolean
 *                example: true/false
 *              is_creator:
 *                type: boolean
 *                example: true/false
 *    responses:
 *      201:
 *        description: Admin muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(adminValidation.createAdminValidation),
  adminController.createAdmin
);

// <===== SIGN ADMIN ROUTE =====>
/**
 * @swagger
 * /admin/sign:
 *  post:
 *    tags: [Admin]
 *    summary: Admin tizimga kirish
 *    description: Admin tizimga kirish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              login:
 *                type: string
 *                example: ali_0
 *              hashed_password:
 *                type: string
 *                example: XXXX
 *    responses:
 *      201:
 *        description: Tizimga muvaffaqiyatli kirdingiz
 *      400:
 *        description: Login yoki parol noto'g'ri
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/sign",
  validationResult(adminValidation.signAdminValidation),
  adminController.signAdmin
);

// <===== GET ALL ADMIN ROUTE =====>
/**
 * @swagger
 * /admin/all:
 *  get:
 *    tags: [Admin]
 *    summary: Barcha adminlar ro'yxatini olish
 *    description: Tizimdagi barcha adminlarni olish
 *    responses:
 *      200:
 *        description: Adminlar ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", adminController.getAllAdmins);

// <===== GET ADMIN BY PK ROUTE =====>
/**
 * @swagger
 * /admin/by_pk/{id}:
 *  get:
 *    tags: [Admin]
 *    summary: ID orqali admin ma'lumotlarini olish
 *    description: Berilgan ID bo'yicha admin ma'lumotlarini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Adminning unikal identifikatori
 *    responses:
 *      200:
 *        description: Admin ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha admin topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", adminController.getAdminByPk);

// <===== UPDATE ADMIN ROUTE =====>
/**
 * @swagger
 * /admin/update/{id}:
 *  put:
 *    tags: [Admin]
 *    summary: Admin ma'lumotlarini yangilash
 *    description: Berilgan ID bo'yicha admin ma'lumotlarini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Adminning unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Ali
 *              login:
 *                type: string
 *                example: ali_0
 *              hashed_password:
 *                type: string
 *                example: XXXX
 *              is_active:
 *                type: boolean
 *                example: true/false
 *              is_creator:
 *                type: boolean
 *                example: true/false
 *    responses:
 *      200:
 *        description: Admin ma'lumotlari muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(adminValidation.updateAdminValidation),
  adminController.updateAdmin
);

// <===== DELETE ADMIN ROUTE =====>
/**
 * @swagger
 * /admin/delete/{id}:
 *  delete:
 *    tags: [Admin]
 *    summary: Adminni tizimdan o'chirish
 *    description: Berilgan ID bo'yicha adminni tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Adminning unikal identifikatori
 *    responses:
 *      200:
 *        description: Admin muvaffaqiyatli o'chirildi
 *      400:
 *        description: O'chirish jarayonida xatolik yuz berdi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", adminController.deleteAdmin);

// <===== EXPORT ROUTER =====>
module.exports = router;
