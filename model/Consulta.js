const ConsultaDAO = require('../data/ConsultaDAO');
    const dao = new ConsultaDAO("consultas");
    
    class Consulta{
        static async getConsultaPorEvento(id){
            return await dao.getConsultaPorEventoDAO(id);
        }
    }
    module.exports =  Consulta;
