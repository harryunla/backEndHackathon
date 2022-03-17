const express = require('express');
const session = require('express-session');
const path = require('path');
const rutaPersona  = require("./routes/RouteUsuario");
const rutaLogin  = require("./routes/RouteLogin");
const rutaLogout  = require('./routes/RouteLogout');
const middlewares =  require("./middlewares/Middleware");
const PORT = 8080;
const app = express();

app.use(express.json());
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
app.use(middlewares.errorCuatocientosCuatro);

// error handler
// define as the last app.use callback
app.use(middlewares.errorQuinientos);

//servidor

app.get("/", (req,res)=>{
  res.send("Bienvenido a la Api Equipo 5");
})
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))