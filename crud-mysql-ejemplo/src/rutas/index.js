const express = require("express");
const rutas = express.Router();
const customerController  = require("../Controles/customerController");

//GET
rutas.get("/", customerController.list);
rutas.get("/delete/:id", customerController.delete);
rutas.get("/update/:id", customerController.edit);

//POST
rutas.post("/add", customerController.save);
rutas.post("/update/:id", customerController.update);
module.exports = rutas;