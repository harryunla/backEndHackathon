const { Router } = require('express');
const { Persona } = require('../modelo/Persona');
const rutaLogout = Router();
let p = new Persona();
const personas = [];

rutaLogout.get('/', (req, res) => {
      req.session.destroy(err => {
        res.redirect('/api/login')
      })
});

rutaLogout.post('/', (req, res) => {
   //aca insertar persona nuevo usuario
});



exports.rutaLogout = rutaLogout;