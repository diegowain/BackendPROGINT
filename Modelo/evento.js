import conectar from "../DAO/Conexao.js"
import EventoDAO from "../DAO/EventoDAO.js"

export default class Evento{
    #titulo
    #descricao
    #data
    #horario
    #local
    #valor
    #ingresso

    constructor(titulo,descricao,data, horario, local, valor, ingresso){
        this.titulo = titulo
        this.descricao = descricao
        this.#data = data
        this.#horario = horario
        this.#local = local
        this.#valor = valor
        this.#ingresso = ingresso
    }


    get titulo(){
        return this.#titulo
    }
    set titulo (novoTitulo){
        this.#titulo = novoTitulo
    }
    get descricao(){
        return this.#descricao
    }
    set descricao (novaDescricao){
        this.#descricao = novaDescricao
    }
    get data(){
        return this.#data
    }
    set data (novaData){
        this.#data = novaData
    }   

    get horario(){
        return this.#horario
    }
    set horario (novoHorario){
        this.#horario = novoHorario
    }

    get local(){
        return this.#local

    }
    set local (novoLocal){
        this.#local = novoLocal
    }
    get valor (){
        return this.#valor
    }
    set valor (novoValor){
        this.#valor = novoValor
    }   
    
    get ingresso (){
        return this.#ingresso
    }
    set ingresso (novoIngresso){
        this.#ingresso = novoIngresso
    }

    toString(){
        return `Titulo: ${this.#titulo} 
                Descrição: ${this.#descricao}
                Data: ${this.#data} 
                Horario: ${this.#horario}
                Local: ${this.#local} 
                Valor: ${this.#valor}
                Ingresso: ${this.#ingresso}`
    }

    toJSON(){
        return {
            titulo: this.#titulo,
            descricao: this.#descricao,
            data: this.#data,
            horario: this.#horario,
            local: this.#local,
            valor: this.#valor,
            ingresso: this.#ingresso

        }
    }

    async incluir(){
        const eveDAO = new EventoDAO();
        await eveDAO.gravar(this);
    }

    async alterar(){
        const eveDAO = new EventoDAO();
        await eveDAO.alterar(this);
    }

    async excluir(){
        const eveDAO = new EventoDAO();
        await eveDAO.excluir(this);
    }


    async consultar (termoBusca) {
        const eveDAO = new EventoDAO();
        return await eveDAO.consultar(termoBusca)
   
    }

}