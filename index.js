// <==========> <==========> <==========>
// <===== INDEX.JS — SERVER CENTER =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const express = require("express");
const cors = require("cors");
const swagger = require("./src/configs/swagger");
const sequelize = require("./src/configs/database");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// <===== MIDDLEWARES =====>
const server = express();
server.use(express.json());
server.use(cors());
swagger(server);

// <===== ROUTERS =====>
const routersPath = path.join(__dirname, "src", "routers");
const exts = [".routes.js", ".routes.ts"];
let routeCount = 0;
fs.readdirSync(routersPath).forEach((file) => {
  if (exts.some((ext) => file.endsWith(ext))) {
    const route = require(path.join(routersPath, file));
    const routeName = file.replace(/\.routes\.(js|ts)$/, "");
    const prefix = "/" + routeName;
    server.use(prefix, route);
    routeCount++;
  }
});

// <===== SERVER =====>
const PORT = process.env.PORT || 5001;
let isRunning = false;

sequelize
  .sync()
  .then(() => {
    isRunning = true;
    server.listen(PORT, () => {
      console.log(`✅ Jami ${routeCount} ta route qo'shildi`);
      console.log(`🚀 Server http://localhost:${PORT} PORTda yuritilmoqda!`);
    });
  })
  .catch((error) => {
    console.log("Server xatosi yuzaga keldi: ", error.message);
  })
  .finally(() => {
    if (isRunning) {
      console.log("✅ Server muvaffaqiyatli ishga tushdi!");
    } else {
      console.log("❌ Server muvaffaqiyatli ishlay olmadi!");
    }
  });
