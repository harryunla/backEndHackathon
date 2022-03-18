const EventoDAO = require("../data/EventoDAO");
const dao = new EventoDAO("eventos");

module.exports = class Evento {
  /**
   * Makes an event call per id to the DAO layer
   * @param id
   * @returns dao.getEventoDAO(id)
   */
  static async getEvento(id) {
    return await dao.getEventoDAO(id);
  }
  /**
   * Makes a call of all events to the DAO layer
   * @returns dao.getAllEventoDAO()
   */
  static async getAllEvento() {
    return await dao.getAllEventoDAO();
  }
  /**
   * Makes a call to the DAO layer to add a new event
   * @param evento
   * @returns dao.pushEventoDAO(evento)
   */
  static async pushEvento(evento) {
    return await dao.pushEventoDAO(evento);
  }

  /**
   * Makes a call to the DAO layer to modify an event
   * @param id
   * @param evento
   * @returns dao.editEventoDAO(id,evento)
   */
  static async editEvento(id, evento) {
    return await dao.editEventoDAO(id, evento);
  }

  /**
   * Makes a call to the DAO layer to delete an event
   * @param id
   * @returns dao.deleteEventoDAO(id)
   */
  static async deleteEvento(id) {
    return await dao.deleteEventoDAO(id);
  }
};
