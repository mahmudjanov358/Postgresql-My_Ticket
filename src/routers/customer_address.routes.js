// <==========> <==========> <==========>
// <===== CUSTOMER_ADDRESS ROUTER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const { validationResult } = require("../middlewares/validationResult");
const customerAddressValidation = require("../validations/customer_addressValidation");
const customerAddressController = require("../controllers/customer_address.controller");
const router = express.Router();

// <===== CREATE CUSTOMER_ADDRESS ROUTE =====>
/**
 * @swagger
 * /customer_address/create:
 *  post:
 *    tags: [Customer_Address]
 *    summary: Yangi mijoz manzilini yaratish
 *    description: Yangi mijoz manzilini yaratish jarayoni
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              customer_id:
 *                type: integer
 *                example: 1
 *              name:
 *                type: string
 *                example: Uy
 *              region_id:
 *                type: integer
 *                example: 1
 *              district_id:
 *                type: integer
 *                example: 1
 *              street:
 *                type: string
 *                example: Amir Temur ko'chasi
 *              house:
 *                type: string
 *                example: 12A
 *              flat:
 *                type: integer
 *                example: 5
 *              location:
 *                type: string
 *                example: 41.3111,69.2797
 *              post_index:
 *                type: string
 *                example: 100000
 *              info:
 *                type: string
 *                example: 2-qavat, eshikda zangora
 *    responses:
 *      201:
 *        description: Mijoz manzili muvaffaqiyatli yaratildi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.post(
  "/create",
  validationResult(customerAddressValidation.createCustomer_AddressValidation),
  customerAddressController.createCustomer_Address
);

// <===== GET ALL CUSTOMER_ADDRESSES ROUTE =====>
/**
 * @swagger
 * /customer_address/all:
 *  get:
 *    tags: [Customer_Address]
 *    summary: Barcha mijoz manzillarini olish
 *    description: Tizimdagi barcha mijoz manzillarini olish
 *    responses:
 *      200:
 *        description: Mijoz manzillari ro'yxati muvaffaqiyatli olingan
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/all", customerAddressController.getAllCustomer_Addresses);

// <===== GET CUSTOMER_ADDRESS BY PK ROUTE =====>
/**
 * @swagger
 * /customer_address/by_pk/{id}:
 *  get:
 *    tags: [Customer_Address]
 *    summary: ID orqali mijoz manzilini olish
 *    description: Berilgan ID bo'yicha mijoz manzilini olish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijoz manzilining unikal identifikatori
 *    responses:
 *      200:
 *        description: Mijoz manzili ma'lumotlari muvaffaqiyatli topildi
 *      404:
 *        description: Berilgan ID bo'yicha mijoz manzili topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.get("/by_pk/:id", customerAddressController.getCustomer_AddressByPk);

// <===== UPDATE CUSTOMER_ADDRESS ROUTE =====>
/**
 * @swagger
 * /customer_address/update/{id}:
 *  put:
 *    tags: [Customer_Address]
 *    summary: Mijoz manzilini yangilash
 *    description: Berilgan ID bo'yicha mijoz manzilini yangilash
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijoz manzilining unikal identifikatori
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Ish joyi
 *              region_id:
 *                type: integer
 *                example: 2
 *              district_id:
 *                type: integer
 *                example: 3
 *              street:
 *                type: string
 *                example: Bunyodkor ko'chasi
 *              house:
 *                type: string
 *                example: 8B
 *              flat:
 *                type: integer
 *                example: 10
 *              location:
 *                type: string
 *                example: 41.3000,69.2500
 *              post_index:
 *                type: string
 *                example: 100001
 *              info:
 *                type: string
 *                example: Lift bor, 3-qavat
 *    responses:
 *      200:
 *        description: Mijoz manzili muvaffaqiyatli yangilandi
 *      400:
 *        description: So'rovda xatolik mavjud
 *      404:
 *        description: Berilgan ID bo'yicha mijoz manzili topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.put(
  "/update/:id",
  validationResult(customerAddressValidation.updateCustomer_AddressValidation),
  customerAddressController.updateCustomer_Address
);

// <===== DELETE CUSTOMER_ADDRESS ROUTE =====>
/**
 * @swagger
 * /customer_address/delete/{id}:
 *  delete:
 *    tags: [Customer_Address]
 *    summary: Mijoz manzilini tizimdan o'chirish
 *    description: Berilgan ID bo'yicha mijoz manzilini tizimdan o'chirish
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mijoz manzilining unikal identifikatori
 *    responses:
 *      200:
 *        description: Mijoz manzili muvaffaqiyatli o'chirildi
 *      404:
 *        description: Berilgan ID bo'yicha mijoz manzili topilmadi
 *      500:
 *        description: Serverda ichki xatolik yuz berdi
 */
router.delete("/delete/:id", customerAddressController.deleteCustomer_Address);

// <===== EXPORT ROUTER =====>
module.exports = router;
