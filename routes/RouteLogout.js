const express = require("express");
const usuario = require("../model/Usuario");
const router = express.Router();
let p = new usuario();
const usuarios = [];

router.get("/", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/api/login");
  });
});

router.post("/", (req, res) => {
  //aca insertar usuario nuevo usuario
});


//Logout

router.post("/logout", async (req, res) => {
  usuarios.push(req.query);
  res.json(req.query);
});


module.exports = router;
