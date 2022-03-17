function errorQuinientos(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
}

function errorCuatocientosCuatro(req, res, next) {
  let err = new Error("File Not Found");
  err.status = 404;
  next(err);
}

function validaId(req, res, next) {
  if (req.query.id) {
    next();
  } else {
    res.status(404).send({ error: "id not found" });
  }
}

function validaLogin(req, res, next) {

  if (req.body.user && req.body.password) {
    next();
  } 
  else{
      res.status(406).send({error:"user or password not found"});
  }
}

module.exports = { errorQuinientos, errorCuatocientosCuatro, validaId, validaLogin };
