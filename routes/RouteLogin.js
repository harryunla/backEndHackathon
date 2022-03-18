const express  = require("express");
const session = require("express-session");
const usuario  = require("../model/Usuario");
const middlewares = require("../middlewares/Middleware");
const router = express.Router();


router.get("/", (req, res) => {

});

//Login
router.post("/", async (req, res) => {

  let respuesta = await usuario.logInUsuario(req.body.user,req.body.password);
  respuesta.length == 0 ? res.status(401).json({error:"access denied"}) :res.status(200).json({status:"ok", object:respuesta[0]["_fieldsProto"]});
});

module.exports = router;
