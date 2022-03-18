function errorQuinientos(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
}

function errorCuatocientosCuatro(req, res, next) {
  let err = new Error("File Not Found");
  err.status = 404;
  next(err);
}


function validaLogin(req, res, next) {

  let {user, password} = req.body;
  if (user && password) {
    next();
  } 
  else{
      res.status(406).send({error:"user or password not found"});
  }
}
 function validaBodyEvento(req, res, next){

  let {descripcionEvento,fechaFin, fechaInicio, idCategoria, imagen,nombreEvento, canal } = req.body;
  if(descripcionEvento && fechaFin && fechaInicio && idCategoria && imagen && nombreEvento && canal){
    next();
  }
  else{
    res.status(406).send({error:"params not found"});
  }
 }

module.exports = { errorQuinientos, errorCuatocientosCuatro, validaLogin, validaBodyEvento };
