const { add } = require("nodemon/lib/rules");
const { db } = require("./conector/ConectorFirebase");

class ConsultaDAO {

  #tabla;
  constructor(tabla){
    this.#tabla = tabla;
  }

  async getConsultaPorEventoDAO(id) 
  {
    try{
      return (await db.collection(this.#tabla).where("idEventos", "==", id).get()).docs;      
    }
    catch(error){
        console.error(error);
    }
  }
}
module.exports = ConsultaDAO;
