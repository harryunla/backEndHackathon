const { db } = require("./conector/ConectorFirebase");

module.exports = class EventoDAO {
  #tabla;
  constructor(tabla) {
    this.#tabla = tabla;
  }
  /**
   * Query an event in the database by its id
   * @param {*} id
   * @returns
   */
  async getEventoDAO(id) {
    try {
      return await db.collection(this.#tabla).doc(id).get();
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Query all events in the database
   * @returns
   */
  async getAllEventoDAO() {
    try {
      return (await db.collection(this.#tabla).get()).docs;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Adds a new event to the database
   * @param {*} evento
   * @returns
   */
  async pushEventoDAO(evento) {
    try {
      return await db.collection(this.#tabla).doc().create(evento);
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Edits an existing event in the database using as reference its id
   * @param {*} id
   * @param {*} evento
   * @returns
   */
  async editEventoDAO(id, evento) {
    try {
      return await db.collection(this.#tabla).doc(id).update(evento);
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Deletes an existing event in the database by its id
   * @param {*} id
   * @returns
   */
  async deleteEventoDAO(id) {
    try {
      return await db.collection(this.#tabla).doc(id).delete();
    } catch (error) {
      console.error(error);
    }
  }
};
