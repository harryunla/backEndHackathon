const express  = require("express");
const session = require("express-session");
const usuario  = require("../model/Usuario");
const middlewares = require("../middlewares/Middleware");
const router = express.Router();


router.get("/", (req, res) => {

});

//Login
router.post("/",middlewares.validaLogin, async (req, res) => {

  let respuesta = await usuario.logInUsuario(req.body.user,req.body.password);
  res.status(200).json(respuesta);
});

module.exports = router;
