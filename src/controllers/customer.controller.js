// <==========> <==========> <==========>
// <===== CUSTOMER CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Customer, Lang } = require("../models/main");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

// <===== CREATE CUSTOMER =====>
exports.createCustomer = async (req, res) => {
  try {
    const existingCustomer = await Customer.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { phone: req.body.phone }],
      },
    });
    if (existingCustomer) {
      return res
        .status(400)
        .json({ success: false, message: "Mijoz allaqachon mavjud!" });
    }
    const customer = await Customer.create(req.body);
    const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(201).json({
      success: true,
      message: "Mijoz muvaffaqiyatli yaratildi!",
      token,
      customer,
    });
  } catch (error) {
    console.error("Mijoz yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== SIGN CUSTOMER =====>
exports.signCustomer = async (req, res) => {
  try {
    const existingCustomer = await Customer.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }],
      },
    });
    if (!existingCustomer) {
      return res
        .status(401)
        .json({ success: false, message: "Noto'g'ri login yoki parol!" });
    }
    const isMatch = await bcrypt.compare(
      req.body.hashed_password,
      existingCustomer.hashed_password
    );
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Noto'g'ri login yoki parol!" });
    }
    const token = jwt.sign(
      { id: existingCustomer.id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.status(200).json({
      success: true,
      message: "Mijoz tizimga muvaffaqiyatli kirdi!",
      token,
      existingCustomer,
    });
  } catch (error) {
    console.error("Mijoz kirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL CUSTOMERS =====>
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    return res.status(200).json({
      success: true,
      message: "Mijozlar ro'yxati muvaffaqiyatli olingan",
      customers,
    });
  } catch (error) {
    console.error("Mijozlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET CUSTOMER BY PK =====>
exports.getCustomerByPk = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id, {
      include: [{ model: Lang, as: "lang" }],
    });
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Mijoz ma'lumotlari muvaffaqiyatli topildi",
      customer,
    });
  } catch (error) {
    console.error("Mijozni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE CUSTOMER =====>
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz topilmadi!" });
    }
    await customer.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Mijoz ma'lumotlari muvaffaqiyatli yangilandi!",
      customer,
    });
  } catch (error) {
    console.error("Mijozni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE CUSTOMER =====>
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz topilmadi!" });
    }
    await customer.destroy();
    return res
      .status(200)
      .json({ success: true, message: "Mijoz muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("Mijozni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
