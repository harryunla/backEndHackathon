const express = require("express");
const router = express.Router();
const session = require("express-session");
const { login } = require("../controller/Login");
const usuario = require("../model/Usuario");
const middlewares = require("../middlewares/Middleware");
const usuarioDAO = require("../data/UsuarioDAO");


router.get("/", middlewares.validaId, async (req, res) => {
  let respuesta = await usuario.getUsuario(req.query.id);
  res.status(200).json(respuesta);

  // if (req.session.usuario) {
  //   if (req.query.id) {
  //     res.json(p.traerusuario(req.query.id));
  //   } else {
  //     res.status(400).send("error");
  //   }
  // } else {
  //   //aca redirigir al login usuario no logeado
  //   res.status(400).redirect("/api/login");
  // }
});



module.exports = router;
