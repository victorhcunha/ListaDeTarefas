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




//associar api com porta 8080
app.listen(8080)