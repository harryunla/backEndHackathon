const express = require('express')
const session = require('express-session')
const path = require('path')
const { rutaPersona } = require("./rutas/rutaPersona")
const { rutaLogin } = require("./rutas/rutaLogin")
const { rutaLogout } = require('./rutas/rutaLogout')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'laClaveSecreta',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000
    }
  }))



//rutas


app.use('/api/personas',rutaPersona);
app.use('/api/login',rutaLogin);
app.use('/api/logout',rutaLogout)



//fin rutas

//archivos static
app.use(express.static(path.join(__dirname,'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

//servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))