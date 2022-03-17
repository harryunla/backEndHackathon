
const session = require('express-session');

function estaLogeado () {
    if (session.usuario)
          return next();
        else
        res.redirect('/api/login');
     
        
    }

    module.exports = {
        estaLogeado
      }