const { Router } = require('express');
const session = require('express-session');
const { Persona } = require('../modelo/Persona');
const rutaLogin = Router();
let p = new Persona();
const personas = [];

rutaLogin.get('/', (req, res) => {
   console.log(req.query)

   if(req.query.user && req.query.password){
   //res.json(p.logeoPersona(req.query.user,req.query.password))
   const usuario = p.logeoPersona(req.query.user,req.query.password);
   if(usuario){
   req.session = usuario;
   }else{    
    return res.render('register-error');
   }
   }else{
    res.status(500).send('error')
   }
});

rutaLogin.post('/', (req, res) => {
   console.log("post")
   //aca insertar persona nuevo usuario
});



exports.rutaLogin = rutaLogin;