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

//associar api com porta 8080
app.listen(8080)