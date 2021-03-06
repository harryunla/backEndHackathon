const express = require("express");
const router = express.Router();
const session = require("express-session");
const consulta = require("../model/Consulta");
const middlewares = require("../middlewares/Middleware");

/**
 * API Method to call an event by its id
 * @requires id
 * @returns respuesta
 */
router.get("/:id", async (req, res) => {
  let respuesta = await consulta.getConsultaPorEvento(req.params.id);
  res.status(200).json(respuesta);
});



module.exports = router;
