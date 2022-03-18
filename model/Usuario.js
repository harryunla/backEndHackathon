const UsuarioDAO = require('../data/UsuarioDAO');
const dao = new UsuarioDAO("usuarios");

module.exports = class Usuario{


    static async getUsuario(id){
        return await dao.getUsuarioDAO(id);
    }

    static async logInUsuario(user, password){
        return await dao.logInUsuarioDAO(user,password);
    }

}
