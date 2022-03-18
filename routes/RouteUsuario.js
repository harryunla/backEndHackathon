const express = require("express");
const router = express.Router();
const session = require("express-session");
const { login } = require("../controller/Login");
const usuario = require("../model/Usuario");
const middlewares = require("../middlewares/Middleware");



router.get("/:id", async (req, res) => {
  let respuesta = await usuario.getUsuario(req.params.id);
  respuesta.exists ? res.status(200).json(respuesta) : res.status(404).json({error:"user not found"});



module.exports = router;
