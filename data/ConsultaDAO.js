const { db } = require("./conector/ConectorFirebase");

class ConsultaDAO {
  #tabla;
  constructor(tabla) {
    this.#tabla = tabla;
  }
  /**
   * Returns the existing queries of an event by its id
   * @param {*} id
   * @returns
   */
  async getConsultaPorEventoDAO(id) {
    try {
      return (
        await db
          .collection(this.#tabla)
          .where("referenciaEvento", "==", id)
          .get()
      ).docs;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Add a new query to an existing event
   * @param {*} evento
   * @returns
   */
  async pushConsultaDAO(evento) {
    try {
      return await db.collection(this.#tabla).doc().create(evento);
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Edits an existing query with reference to its id and the event
   * @param {*} id
   * @param {*} evento
   * @returns
   */
  async editConsultaDAO(id, evento) {
    try {
      return await db.collection(this.#tabla).doc(id).update(evento);
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Deletes a query based on its id
   * @param {*} id
   * @returns
   */
  async deleteConsultaDAO(id) {
    try {
      return await db.collection(this.#tabla).doc(id).delete();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ConsultaDAO;
