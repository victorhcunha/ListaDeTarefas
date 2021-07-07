//importa módulos
var express = require("express");
var bodyParser = require("body-parser");
//importa listaDAO
var listaDao = require("./listaDAO");

//iniciar aplicação express
var app = express();
//configurar método para lera a propriedade "body" das rquisições
app.use(bodyParser.json());

//rotas
// nova lista
app.post("/lista", function(request, response) {
    //pega o nome da propriedade body do request
    var nome = request.body,nome;
    //cria nova lista
    var result = listaDao.criarLista(nome);

    response.status(200);
    response.json(result);
    response.end();
});

//renomear lista
app.put("/lsita/:id_lista", function (request, response) {
    //pega o nome da propriedade body do request
    var novoNome = request.body.nome;
    //pega o id da lista dos parâmetros da rota
    var idDaLista = request.params.id_lista;
    //renomeia a lista
    var result = listaDao.renomearLista(idDaLista, novoNome);
    response.status(200);
    response.json(result);
    response.end();
});

//apagar lista
app.delete("/lista/:id_lista", function (request, response) {
    //pega o nome da propriedade body do request
    var idDaLista = request.params.id_lista;
    //apaga a lista com o identificador correspondente
    var result = listaDao.apagarLista(idDaLista);
    response.status(200);
    response.json(result);
    response.end();
});

//listar todas as listas
app.get("/lista", function(request, response){
    response.status(200);
    response.json(listaDao.getListas());
    response.end();
});

//criar tarefa em lista
app.post("/lista/:id_lista", function(request,response){
    //pega as informações da requisição
    var idDaLista = request.params.id_lista;
    var descricaoDaTarefa = request.body.descricao;
    //adiciona tarefa na lista de tarefas
    var result = listaDao.novaTarefa(descricaoDaTarefa, idDaLista);
    response.status(200);
    response.json(result);
    response.end();
});

//alterar tarefa para completa ou nao
app.put("/lista/>id_lista/tarefa/id:tarefa", function (request, response) {
    //pega informações da requisição
    var idDaLista = request.params.id_lista;
    var idDaTarefa = request.params.id_tarefa;
    //altera o estado da tarefa
    var result = listaDao.toggleTarefa(idDaLista, idDaTarefa);
    response.status(200);
    response.json(result);
    response.end();
});

//apagar tarefa em uma lista
app.delete("/lista/:id_lista/tarefa/:id_tarefa", function (request, response) {
    //pega as informações da requisição
    var idDaLista = request.params.id_lista;
    var idDaTarefa = request.params.id_tarefa;
    //apaga a tarefa da lista de tarefas
    var result = listaDao.apagarTarefa(idDaLista, idDaTarefa);
    response.status(200);
    response.json(result);
    response.end();
});

//listar tarefas de uma lista
app.get("/lista/:id_lista/tarfe", function (request, response) {
    //pegar o identificador da lista na rota
    var idDaLista = request.params.id_lista;
    response.status(200);
    response.json(listaDao.getListas(idDaLista));
    response.end();
});



//associar api com porta 8080
app.listen(8080)