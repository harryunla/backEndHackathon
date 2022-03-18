const express = require("express");
const session = require("express-session");
const evento = require("../model/Evento");
const middlewares = require("../middlewares/Middleware");
const router = express.Router();

router.get("/:id", async (req, res) => {
  let respuesta = await evento.getEvento(req.params.id);
  respuesta.exists ? res.status(200).json(respuesta) : res.status(404).json({error:"event not found"});
});

router.get("/", async (req, res) => {
  let respuesta = await evento.getAllEvento();
  res.status(200).json(respuesta);
});

router.post("/",middlewares.validaBodyEvento,async  (req, res) => {

  let {descripcionEvento,fechaFin, fechaInicio, categoria, imagen,nombreEvento, canal } = req.body;
  const eventoAux ={descripcionEvento,fechaFin, fechaInicio, categoria, imagen,nombreEvento,canal };

  let respuesta = await evento.pushEvento(eventoAux);
  respuesta ? res.status(200).json({status:"ok", message:"event add"}) : res.status(409).json({error:"events not add"});
    
});

router.put("/:id",middlewares.validaBodyEvento,async  (req, res) => {

  let {id} = req.params;
  let {descripcionEvento,fechaFin, fechaInicio, categoria, imagen,nombreEvento, canal } = req.body;
  const eventoAux ={descripcionEvento,fechaFin, fechaInicio, categoria, imagen,nombreEvento,canal };
  let respuesta = await evento.editEvento(id,eventoAux);
  respuesta ? res.status(200).json({status:"ok", message:"event edit"}) : res.status(409).json({error:"events not changed"});
    
});

router.delete("/:id",async  (req, res) => {

  let {id} = req.params;
  let respuesta = await evento.deleteEvento(id);
  respuesta ? res.status(200).json({status:"ok", message:"event delete"}) : res.status(409).json({error:"events not delete"});
    
});



module.exports = router;
