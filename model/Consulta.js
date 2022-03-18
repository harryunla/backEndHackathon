const ConsultaDAO = require('../data/ConsultaDAO');
    const dao = new ConsultaDAO("consultas");
    
    class Consulta{
        static async getConsultaPorEvento(id){
            return await dao.getConsultaPorEventoDAO(id);
        }

        static async pushConsultaDAO(evento){
            return await dao.pushConsultaDAO(evento);
        }

        static async editConsulta(id,consulta){
            return await dao.editConsultaDAO(id,consulta);
        }
    }

    module.exports =  Consulta;
