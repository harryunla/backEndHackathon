const EventoDAO = require('../data/EventoDAO');
const dao = new EventoDAO("eventos");


module.exports = class Evento{

    static async getEvento(id){
        return await dao.getEventoDAO(id);        
    }
    static async getAllEvento(){
        return await dao.getAllEventoDAO();
    }

    static async pushEvento(evento){
        return await dao.pushEventoDAO(evento);
    }
    static async editEvento(id,evento){
        return await dao.editEventoDAO(id,evento);
    }

    static async deleteEvento(id){
        return await dao.deleteEventoDAO(id);
    }

}