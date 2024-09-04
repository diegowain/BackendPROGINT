import Evento from "./Modelo/evento.js"

const evento = new Evento("Basquete", "NBA","18/11/2024", "22:00", "Los Angeles", 300, 10000)

/*evento.incluir().then(() => { console.log("Evento incluido com sucesso")}).catch((erro) => 
    {console.log("Erro ao incluir evento: " + erro)});*/

/*evento.alterar("Futebol").then(() => { console.log("Evento alterado com sucesso")}).catch((erro) => 
    {console.log("Erro ao alterar evento: " + erro)});*/

/*evento.excluir("Futebol").then(() => { console.log("Evento excluido com sucesso")}).catch((erro) => 
    {console.log("Erro ao excluir evento: " + erro)});*/

evento.consultar("").then(()=>{
    for (const evento of listaEventos){
        console.log(evento.toString())
        
    }
}).catch((erro)=>{
    console.log("Erro ao consultar evento: " + erro)
});