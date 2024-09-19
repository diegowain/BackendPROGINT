import Evento from "../Modelo/evento.js"

export default class ClienteCtrl {


    gravar(requisicao,resposta){
        if(requisicao.method == "POST" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const titulo = dados.titulo;
            const descricao = dados.descricao;
            const data = dados.data;
            const horario = dados.horario;
            const local = dados.local;
            const valor = dados.valor;
            const ingresso = dados.ingresso;

            if(titulo && descricao && data && horario && local && valor && ingresso){
                const evento = new Evento(titulo,descricao,data, horario, local, valor, ingresso);

                evento.incluir().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Evento incluido com sucesso"
                    })
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao incluir evento: " + erro.message
                    })
                })
    }
    else{
        resposta.status(405).json({
            "status": false,
            "mensagem": "Requisição inválida"
        
        })
    }
    }
    };
    alterar(requisicao,resposta){
        if(requisicao.method == "PUT" || requisicao.method == "PATCH" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const titulo = dados.titulo;
            const descricao = dados.descricao;
            const data = dados.data;
            const horario = dados.horario;
            const local = dados.local;
            const valor = dados.valor;
            const ingresso = dados.ingresso;
            if(titulo && descricao && data && horario && local && valor && ingresso){
                const evento = new Evento (titulo,descricao,data, horario, local, valor, ingresso);
                evento.alterar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Evento alterado com sucesso"
                    })
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao alterar evento: " + erro.message
                    })
                })
    }
    else{
        resposta.status(400).json({
            "status": false,
            "mensagem": "Requisição inválida"
        
        })
    }
    }
    else{
        resposta.status(405).json({
            "status": false,
            "mensagem": "Requisição inválida"
        
        })
    }
}


    excluir(requisicao,resposta){
        if(requisicao.method == "DELETE" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const data = dados.data;

            if(data){
                const evento = new Evento(data);
                evento.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Evento excluido com sucesso"
                    })
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir evento: " + erro.message
                    })
                })
    }
    else{
        resposta.status(400).json({
            "status": false,
            "mensagem": "Requisição inválida! Informe a data do evento"
        
        })
    }
    }
    else{
        resposta.status(405).json({
            "status": false,
            "mensagem": "Requisição inválida"
        
        })
    }

    };

    consultar(requisicao,resposta){

        let termoBusca = requisicao.params.termoBusca;
        if(!termoBusca){
            termoBusca = ""
        }

        if(requisicao.method == "GET" && requisicao.is("application/json")){
            const evento = new Evento();
            evento.consultar(termoBusca).then((eventos) => {
                return resposta.status(200).json({
                    "status": true,
                    "listaEventos": eventos
                })
            }).catch((erro) => {
                return resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao consultar evento: " + erro.message
                })
            })
        }
        else{
            return resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida"
            })
        }

    };

}
