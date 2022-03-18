const { db } = require("./conector/ConectorFirebase");
// return await (await db.collection(this.#tabla).where("nombre", "==", "Alejandro").get()).docs;

module.exports = class UsuarioDAO {
  #tabla;
  constructor(tabla) {
    this.#tabla = tabla;
  }
  /**
   * Query a user by user id
   * @param {*} id
   * @returns
   */
  async getUsuarioDAO(id) {
    try {
      return await db.collection(this.#tabla).doc(id).get();
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Check the existence of the user and password for the loguin
   * @param {*} user
   * @param {*} password
   * @returns
   */
  async logInUsuarioDAO(user, password) {
    try {
      const usuarios = db
        .collection(this.#tabla)
        .where("estado", "==", true)
        .where("legajo", "==", user)
        .where("clave", "==", password);
      return (await usuarios.get()).docs;
    } catch (error) {
      console.error(error);
    }
  }
};
