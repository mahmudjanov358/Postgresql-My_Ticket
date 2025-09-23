// <==========> <==========> <==========>
// <===== ADMIN CONTROLLER FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const { Admin } = require("../models/main");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// <===== CREATE ADMIN =====>
exports.createAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({
      where: { login: req.body.login },
    });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ success: false, message: "Admin allaqachon mavjud!" });
    } else {
      const admin = await Admin.create(req.body);
      const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      return res
        .status(201)
        .json({ success: true, message: "Admin yaratildi!", token });
    }
  } catch (error) {
    console.error("Admin yaratishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== SIGN ADMIN =====>
exports.signAdmin = async (req, res) => {
  try {
    const { login, hashed_password } = req.body;
    const admin = await Admin.findOne({
      where: { login },
    });
    if (!admin) {
      return res
        .status(401)
        .json({ success: false, message: "Noto'g'ri login yoki parol!" });
    }
    const isMatch = await bcrypt.compare(
      hashed_password,
      admin.hashed_password
    );
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Noto'g'ri login yoki parol!" });
    }
    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res
      .status(200)
      .json({ success: true, message: "Admin kirish muvaffaqiyatli!", token });
  } catch (error) {
    console.error("Admin kirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ALL ADMINS =====>
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    return res
      .status(200)
      .json({ success: true, message: "Adminlar ro'yxati!", datas: admins });
  } catch (error) {
    console.error("Adminlarni olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== GET ADMIN BY PK =====>
exports.getAdminByPk = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin topilmadi!" });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Admin topildi!", data: admin });
    }
  } catch (error) {
    console.error("Adminni ID bo'yicha olishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== UPDATE ADMIN =====>
exports.updateAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findByPk(req.params.id);
    if (!existingAdmin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin topilmadi!" });
    }
    const newLogin =
      req.body.login !== undefined ? req.body.login : existingAdmin.login;
    if (newLogin === existingAdmin.login) {
      await existingAdmin.update(req.body);
      return res.status(200).json({
        success: true,
        message: "Admin yangilandi!",
        data: existingAdmin,
      });
    } else {
      const existingLogin = await Admin.findOne({
        where: { login: newLogin },
      });
      if (existingLogin) {
        return res
          .status(400)
          .json({ success: false, message: "Ushbu login allaqachon mavjud!" });
      } else {
        await existingAdmin.update(req.body);
        return res.status(200).json({
          success: true,
          message: "Admin yangilandi!",
          data: existingAdmin,
        });
      }
    }
  } catch (error) {
    console.error("Adminni yangilashda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};

// <===== DELETE ADMIN =====>
exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin topilmadi!" });
    } else {
      await admin.destroy();
      return res
        .status(200)
        .json({ success: true, message: "Admin o'chirildi!" });
    }
  } catch (error) {
    console.error("Adminni o'chirishda xatolik:", error);
    res
      .status(500)
      .json({ success: false, message: "Server xatosi yuz berdi!" });
  }
};
