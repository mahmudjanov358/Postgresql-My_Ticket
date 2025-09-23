// <==========> <==========> <==========>
// <===== CUSTOMER_ADDRESS CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const {
  Customer_Address,
  Customer,
  Region,
  District,
} = require("../models/main");

// <===== CREATE CUSTOMER_ADDRESS =====>
exports.createCustomer_Address = async (req, res) => {
  try {
    const customer_address = await Customer_Address.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Mijoz manzili muvaffaqiyatli yaratildi!",
      customer_address,
    });
  } catch (error) {
    console.error("Mijoz manzilini yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL CUSTOMER_ADDRESSES =====>
exports.getAllCustomer_Addresses = async (req, res) => {
  try {
    const customer_addresses = await Customer_Address.findAll();
    return res.status(200).json({
      success: true,
      message: "Mijoz manzillari ro'yxati muvaffaqiyatli olingan",
      customer_addresses,
    });
  } catch (error) {
    console.error("Mijoz manzillarini olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET CUSTOMER_ADDRESS BY PK =====>
exports.getCustomer_AddressByPk = async (req, res) => {
  try {
    const customer_address = await Customer_Address.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" },
        { model: Region, as: "region" },
        { model: District, as: "district" },
      ],
    });
    if (!customer_address) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz manzili topilmadi!" });
    }
    return res.status(200).json({
      success: true,
      message: "Mijoz manzili ma'lumotlari muvaffaqiyatli topildi",
      customer_address,
    });
  } catch (error) {
    console.error("Mijoz manzilini ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE CUSTOMER_ADDRESS =====>
exports.updateCustomer_Address = async (req, res) => {
  try {
    const customer_address = await Customer_Address.findByPk(req.params.id);
    if (!customer_address) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz manzili topilmadi!" });
    }
    await customer_address.update(req.body);
    return res.status(200).json({
      success: true,
      message: "Mijoz manzili muvaffaqiyatli yangilandi!",
      customer_address,
    });
  } catch (error) {
    console.error("Mijoz manzilini yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE CUSTOMER_ADDRESS =====>
exports.deleteCustomer_Address = async (req, res) => {
  try {
    const customer_address = await Customer_Address.findByPk(req.params.id);
    if (!customer_address) {
      return res
        .status(404)
        .json({ success: false, message: "Mijoz manzili topilmadi!" });
    }
    await customer_address.destroy();
    return res.status(200).json({
      success: true,
      message: "Mijoz manzili muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("Mijoz manzilini o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
