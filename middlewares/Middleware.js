/**
 * Validation of the Internal Server Error
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function errorQuinientos(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
}
/**
 * Validation of the Not Found
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function errorCuatocientosCuatro(req, res, next) {
  let err = new Error("File Not Found");
  err.status = 404;
  next(err);
}
/**
 * Validation of user login requirements but returns error 406: Not acceptable.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

function validaLogin(req, res, next) {
  let { user, password } = req.body;
  if (user && password) {
    next();
  } else {
    res.status(406).send({ error: "user or password not found" });
  }
}
/**
 * Validation of entry requirements for a new event or return error 406: Not acceptable.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function validaBodyEvento(req, res, next) {
  let {
    descripcionEvento,
    fechaFin,
    fechaInicio,
    categoria,
    imagen,
    nombreEvento,
    canal,
  } = req.body;
  if (
    descripcionEvento &&
    fechaFin &&
    fechaInicio &&
    categoria &&
    imagen &&
    nombreEvento &&
    canal
  ) {
    next();
  } else {
    res.status(406).send({ error: "params not found" });
  }
}

module.exports = {
  errorQuinientos,
  errorCuatocientosCuatro,
  validaLogin,
  validaBodyEvento,
};
