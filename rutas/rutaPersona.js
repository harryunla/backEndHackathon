const { Router } = require('express');
const session = require('express-session');
const { Persona } = require('../modelo/Persona');
const { login } = require('../control/login')
const rutaPersona = Router();
let p = new Persona();
const personas = [];

rutaPersona.get('/', async (req, res) => {
   //console.log(req.query)
if(req.session.usuario){    
if(req.query.id){
   res.json(p.traerPersona(req.query.id))
   }else{
    res.status(400).send('error')
   }
}else{
    //aca redirigir al login usuario no logeado
   res.status(400).redirect('/api/login')
}
});

// LOGOUT


rutaPersona.post('/', async (req, res) => {
    personas.push(req.query);
    res.json(req.query);
});

exports.rutaPersona = rutaPersona;