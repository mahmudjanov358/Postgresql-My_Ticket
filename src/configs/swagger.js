// <==========> <==========> <==========>
// <===== SWAGGER CONFIG FILE =====>
// <==========> <==========> <==========>

// <===== IMPORTS =====>
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const fs = require("fs");

// <===== SWAGGER TAGS FOR AUTO GENERATION =====>
const routersPath = path.join(__dirname, "../routers");
const exts = [".routes.js", ".routes.ts"];
function toPascalWithUnderscore(name) {
  return name
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("_");
}
const tags = fs
  .readdirSync(routersPath)
  .filter((file) => exts.some((ext) => file.endsWith(ext)))
  .map((file) => {
    const name = file.replace(/\.routes\.(js|ts)$/, "");
    const formattedName = toPascalWithUnderscore(name);
    return {
      name: formattedName,
      description: `${formattedName} bo'limi`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// <===== SWAGGER OPTIONS =====>
const optionsSwagger = {
  definition: {
    openapi: "3.0.0",
    info: {
      title:
        "Ticketing system with Node.js, Express.js, Sequelize.js, and PostgreSQL for the final exam: Backend project!",
      version: "1.0.0",
      description:
        "Ticketing system with Node.js, Express.js, Sequelize.js, and PostgreSQL for the final exam: Backend project!",
    },
    servers: [
      { url: "http://localhost:5001", description: "Local Development Server" },
    ],

    // <===== SWAGGER TAGS =====>
    tags,
  },
  apis: [path.join(__dirname, "../routers/*.routes.js")],
};

// <===== SWAGGER DOCS =====>
const swaggerDocs = swaggerJsdoc(optionsSwagger);

// <===== SWAGGER FUNCTION =====>
const swagger = (server) => {
  server.use(
    "/my_ticket/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs)
  );
};

// <===== EXPORTS =====>
module.exports = swagger;
