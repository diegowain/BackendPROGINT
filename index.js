import Evento from "./Modelo/evento.js"
/*
const evento = new Evento("Futebas", "Campeonato Brasileiro", "10/10/2020", "10:00", "São Paulo", "200", "10")

/*evento.incluir().then(() => { console.log("Evento incluido com sucesso")}).catch((erro) => 
    {console.log("Erro ao incluir evento: " + erro)});

/*evento.alterar("Futebol","Campeonato Brasilero","10/10/2020", "11:00" ,"São Paulo","200", "10").then(() => { console.log("Evento alterado com sucesso")}).catch((erro) => 
    {console.log("Erro ao alterar evento: " + erro)});*/

/*evento.excluir('').then(() => { console.log("Evento excluido com sucesso")}).catch((erro) => 
    {console.log("Erro ao excluir evento: " + erro)});*/
/*evento.consultar("Campeonato Brasileiro").then((listaEventos)=>{
    for (const evento of listaEventos){
        console.log(evento.toString())
        
    }
}).catch((erro)=>{
    console.log("Erro ao consultar evento: " + erro)
});*/

import express from "express"
import rotaEvento from "./Rotas/rotaEvento.js"


const app = express();
const host = '0.0.0.0';
const porta = 3024;

app.use(express.json());

app.use('/eventos', rotaEvento)

app.listen(porta,host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
})