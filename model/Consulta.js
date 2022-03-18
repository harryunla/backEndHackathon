const ConsultaDAO = require("../data/ConsultaDAO");
const dao = new ConsultaDAO("consultas");

class Consulta {
  /**
   * Makes a call to the DAO layer to fetch the queries of an event for its id
   * @param id
   * @returns dao.getConsultaPorEventoDAO(id)
   */
  static async getConsultaPorEvento(id) {
    return await dao.getConsultaPorEventoDAO(id);
  }
  /**
   * Makes a call to the DAO layer to add a query to an event
   * @param evento
   * @returns dao.pushConsultaDAO(evento)
   */
  static async pushConsultaDAO(evento) {
    return await dao.pushConsultaDAO(evento);
  }
  /**
   * Makes a call to the DAO layer to edit a query by its id
   * @param id
   * @param consulta
   * @returns dao.editConsultaDAO(id,consulta)
   */
  static async editConsulta(id, consulta) {
    return await dao.editConsultaDAO(id, consulta);
  }
}

module.exports = Consulta;
