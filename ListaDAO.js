function ListaDAO() {
    var listas = {};

    this.criarLista = function (nome) {
        //gerar id
        var novoID = "lista-" + Object.keys(this.listas).length;
        //criar objeto da lista
        var novaLista = {
            id: novoID,
            nome: nome,
            tarefas: [],
            numeroDeTarefas: 0
        };
        //adicionar nova lista ao objeto listas
        this.listas[novoID] = novaLista;

        return{
            sucess: true,
            message: "Lista \'" + nome + "\' criada"
        }
    };
    
    this.renomearLista = function (listaID, novoNome) {
        //verifica se a lista existe
        if (this.listas.hasOwnProperty(listaIF)) {
            //renomear com novo nome
            this.listas[listaID].nome = novoNome;
            console.log();

            return{
                sucess: true,
                message: "Lista renomeada para \'" + novoNome + "\'."
            }
        } else {
            return{
                sucess: false,
                mesage: "Lista não pode ser encontrada."
            }
        }
    };

    this.apagarLista = function (listaID) {
        //verifica se lista existe
        if (this.listas.hasOwnProperty(listaID)){
            var nomeDaLista = this.listas[listaID].nome;
            //exclui a lista
            delete this.listas[lista.ID];

            return{
                sucess: true,
                message: "Lista \'" + nomeDaLista + "\' apagada com sucesso."
            }
        } else {
            return {
                sucess: false,
                message: "Lista não pode ser encontrada."
            }
        }
    };

    this.getListas = function () {
        //retornar as listas
        return this.listas;
    };
    
    this.novaTarefa = function () {};
    this.toggleTarefa = function () {};
    this.apagarTarefa = function () {};
    this.getTarefas = function () {};

}

module.exports = new ListaDAO();