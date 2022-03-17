const express = require("express");
const router = express.Router();
const session = require("express-session");
const { login } = require("../controller/Login");
const usuario = require("../model/Usuario");
const middlewares = require("../middlewares/Middleware");
const usuarioDAO = require("../data/usuarioDAO");


router.get("/", middlewares.validaId, async (req, res) => {
  let usuario = await usuario.getusuario(req.query.id);
  res.status(200).json(usuario);

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



//Logout

router.post("/logout", async (req, res) => {
  usuarios.push(req.query);
  res.json(req.query);
});

module.exports = router;
