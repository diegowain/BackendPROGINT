import conectar from "../DAO/Conexao.js"
import Evento from "../Modelo/evento.js"
export default class EventoDAO {

    constructor() {
        this.init();
    }


    async init() {
        try{
        const conexao = await conectar();
        const sql =`CREATE TABLE IF NOT EXISTS eventos 
         (titulo VARCHAR(255)  PRIMARY KEY,
         descricao VARCHAR(255),
         data VARCHAR(255),
         horario VARCHAR(255),
         local VARCHAR(255),
         valor INT,
         ingresso INT)`
        await conexao.execute(sql);
        await global.poolConexoes.releaseConnection(conexao);
        console.log("O Banco de Dados foi iniciado")
        }catch(erro){
            console.log("O Banco de Dados não foi iniciado")
        }
    }

    async gravar(evento) {
        if(evento instanceof Evento){
            const conexao = await conectar();
            const sql = `INSERT INTO eventos (titulo,descricao, data, horario, local, valor, ingresso)
             VALUES (?, ?, ?, ?, ?, ?, ?)`
            const parametros = [
                evento.titulo,
                evento.descricao,
                evento.data,
                evento.horario,
                evento.local,
                evento.valor,
                evento.ingresso
            ]
            await conexao.execute(sql,parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
        }

    async alterar(evento) {

        if(evento instanceof Evento){   
            const conexao = await conectar();
            const sql = `UPDATE eventos SET titulo = ?, data = ?, horario = ?,
             local = ?, valor = ?, ingresso = ? WHERE descricao = ?`;
            const parametros = [
                evento.titulo,
                evento.data,
                evento.horario,
                evento.local,
                evento.valor,
                evento.ingresso,
                evento.descricao
            ]
            await conexao.execute(sql,parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }

    }

    async excluir(evento) {

        if(evento instanceof Evento){
            const conexao = await conectar();
            const sql = `DELETE FROM eventos WHERE descricao like ?`;
            const parametros = [
                evento.descricao
            ]
            await conexao.execute(sql,parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(termoBusca) {
        let sql = "";
        let parametros = []
        if(termoBusca){
            sql = `SELECT * FROM eventos WHERE descricao like  ? order by data`
            parametros.push(termoBusca);

        }
        else{
            sql = `SELECT * FROM eventos order by data`
        }
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, parametros);
        let listaEventos = [];
        for (const registro of registros) {
            const evento = new Evento(
                registro.titulo,
                registro.descricao,
                registro.data,
                registro.horario,
                registro.local,
                registro.valor,
                registro.ingresso
            );
            listaEventos.push(evento);
        }
        await global.poolConexoes.releaseConnection(conexao);
        return listaEventos
    }

}