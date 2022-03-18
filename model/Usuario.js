const UsuarioDAO = require('../data/UsuarioDAO');
const dao = new UsuarioDAO("usuarios");

module.exports = class Usuario{


    /**
     * Metodo que cosnsutla un usuario por id
     * @param {string} id es el Id a consultar
     * @returns {object} el usuario
     */
    static async getUsuario(id){
        return await dao.getUsuarioDAO(id);
    }

    /**
     * 
     * @param {string} user usuario a loguear 
     * @param {*} password passwird del usuario
     * @returns {object} usuario logueado
     */
    static async logInUsuario(user, password){
        return await dao.logInUsuarioDAO(user,password);
    }

}
