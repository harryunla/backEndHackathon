const UsuarioDAO = require('../data/UsuarioDAO');
const dao = new UsuarioDAO("usuarios");

class Usuario{


    static async getUsuario(id){
        return await dao.getUsuarioDAO(id);
    }

    static async logInUsuario(user, password){
        return await dao.logInUsuarioDAO(user,password);
    }


}
module.exports =  Usuario;