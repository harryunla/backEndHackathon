const express = require("express");
const router = express.Router();
const session = require("express-session");
const { login } = require("../controller/Login");
const consulta = require("../model/Consulta");
const middlewares = require("../middlewares/Middleware");


router.get("/", middlewares.validaId, async (req, res) => {
  let respuesta = await consulta.getConsultaPorEvento(req.query.id);
  res.status(200).json(respuesta);
});



module.exports = router;
