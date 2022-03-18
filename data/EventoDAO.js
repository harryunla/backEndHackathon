const { db } = require("./conector/ConectorFirebase");

module.exports = class EventoDAO {

    #tabla;
    constructor(tabla){
      this.#tabla = tabla;
    }
  
    async getEventoDAO(id) 
    {
      try{
        return await db.collection(this.#tabla).doc(id).get();
      }
      catch(error){
          console.error(error);
      }
    }

    async getAllEventoDAO() 
    {
      try{
        return (await db.collection(this.#tabla).get()).docs;
      }
      catch(error){
          console.error(error);
      }
    }

    
    async pushEventoDAO(evento) 
    {
      try{
        return await db.collection(this.#tabla).doc().create(evento);
      }
      catch(error){
          console.error(error);
      }
    }

    async editEventoDAO(id,evento) 
    {
      try{
        return await db.collection(this.#tabla).doc(id).update(evento);
      }
      catch(error){
          console.error(error);
      }
    }

    async deleteEventoDAO(id) 
    {
      try{
        return await db.collection(this.#tabla).doc(id).delete();
      }
      catch(error){
          console.error(error);
      }
    }






}