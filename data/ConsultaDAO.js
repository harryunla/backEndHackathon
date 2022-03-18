const { db } = require("./conector/ConectorFirebase");

class ConsultaDAO {

  #tabla;
  constructor(tabla){
    this.#tabla = tabla;
  }

  async getConsultaPorEventoDAO(id) 
  {
    try{
      return (await db.collection(this.#tabla).where("referenciaEvento", "==", id).get()).docs;
    }
    catch(error){
        console.error(error);
    }
  }

  async pushConsultaDAO(evento) 
{
  try{
    return await db.collection(this.#tabla).doc().create(evento);
  }
  catch(error){
      console.error(error);
  }
}

async editConsultaDAO(id,evento) 
{
  try{
    return await db.collection(this.#tabla).doc(id).update(evento);
  }
  catch(error){
      console.error(error);
  }
}
async deleteConsultaDAO(id) 
{
  try{
    return await db.collection(this.#tabla).doc(id).delete();
  }
  catch(error){
      console.error(error);
  }
}
}


module.exports = ConsultaDAO;
