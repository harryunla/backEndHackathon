const {PersonaDAO} = require('../DAO/PersonaDAO');

class Persona{

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    traerPersona(idPersona){
        let personaDAO = new PersonaDAO();
        return personaDAO.traerPersonaDAO(1);
    }

    logeoPersona(user,password){
        let personaDAO = new PersonaDAO();
        return personaDAO.traerPersonaDAO(1);
    }

    get getNombre(){
        return this.nombre;
    }

    get getApellido(){
        return this.apellido;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setApellido (apellido){
        this.apellido = apellido;
    }
}
module.exports = { Persona }