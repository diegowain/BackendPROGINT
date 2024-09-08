import Evento from "./Modelo/evento.js"

const evento = new Evento("Corrida","F1","21/10/2022", "13:00" ,"Manchester","300", "10000")

/*evento.incluir().then(() => { console.log("Evento incluido com sucesso")}).catch((erro) => 
    {console.log("Erro ao incluir evento: " + erro)});*/

/*evento.alterar("Futebol","Campeonato Brasilero","10/10/2020", "11:00" ,"São Paulo","200", "10").then(() => { console.log("Evento alterado com sucesso")}).catch((erro) => 
    {console.log("Erro ao alterar evento: " + erro)});*/

/*evento.excluir('NFL').then(() => { console.log("Evento excluido com sucesso")}).catch((erro) => 
    {console.log("Erro ao excluir evento: " + erro)});*/
evento.consultar('F1').then((listaEventos)=>{
    for (const evento of listaEventos){
        console.log(evento.toString())
        
    }
}).catch((erro)=>{
    console.log("Erro ao consultar evento: " + erro)
});

