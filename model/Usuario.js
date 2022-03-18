const UsuarioDAO = require("../data/UsuarioDAO");
const dao = new UsuarioDAO("usuarios");

module.exports = class Usuario {
  /**
   * Make a call from a user to the DAO layer for its id.
   * @param id
   * @returns dao.getUsuarioDAO(id)
   */
  static async getUsuario(id) {
    return await dao.getUsuarioDAO(id);
  }

  /**
   * Performs a call to the logue function in the DAO layer
   * @param user
   * @param password
   * @returns dao.logInUsuarioDAO(user,password)
   */
  static async logInUsuario(user, password) {
    return await dao.logInUsuarioDAO(user, password);
  }
};
