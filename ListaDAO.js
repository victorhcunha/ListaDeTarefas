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

    this.novaTarefa = function (descricao, listaID) {
        //cria id da tarefa
        var tarefaID = "tarefa-" + this.listas[listaID].numeroDeTarefas;
        //cria objeto da tarefa
        var tarefa = {
            id: tarefaID,
            descricao: descricao,
            completa: false
        };
        //adiciona tarefa na lista de tarefas
        this.listas[listaID].tarefas.push(tarefa);
        this.listas[listaID].numeroDeTarefas += 1;
        
        return {
            sucess: true,
            message: "Tarefa adicionada na lista " + this.listas[listaID].nome
        }
    };

    this.toggleTarefa = function (listaID, tarefaID) {
        //funcao para alternar tarefa entre completa "true" ou "false"
        //percorre lista de tarefas
        for (var i = 0; i < this.listas[listaID].tarefas.length; i++) {
            //encontra a tarefa
            if (this.listas[listaID].tarefas[i].id == tarefaID) {
                //mudar valor da propriedade "completa"
                this.listas[listaID].tarefas[i].completa = !this.listas[listaID].tarefas[i].completa;

                return {
                    sucess: true,
                    message: "Tarefa \'" + tarefaID + "\': " + this.listas[listaID].tarefas[i].completa
                };
            };

            return {
                sucess: false,
                message: "Tarefa \'" + tarefaID + "\' não encontrada."
            }
        }
    };


    this.apagarTarefa = function () {};
    this.getTarefas = function () {};

}

module.exports = new ListaDAO();