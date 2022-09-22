const tarefas = [];
const addTarefa = process.argv[2] 
 addTarefa && tarefas.push(addTarefa)
 //curto-circuito ajuda a conduzir a leitura do código de maneira mais ordenada. No caso pedi pra adicionar à lista de tarefas só depois de existir uma tarefa nova


addTarefa && console.log(tarefas)//só imprime a lista se eu adicionar uma nova tarefa

//Desafio - persistência de dados

const fs = require("fs")//necessário para lidar com arquivos

const tarefasPersistentes = JSON.parse(fs.readFileSync('../data/tarefas.json'))//readFileSync lê o arquivo; por ser arquvivo JSON precisa do Parse para renderizar
//atribui uma variável ao conteúdo do arquivo
const tarefaPersistente = process.argv[2]//tarefa a ser adicionada pelo terminal
tarefaPersistente && tarefasPersistentes.push(tarefaPersistente)//se houver tarefa no terminal, adiciona à lista de tarefas

fs.writeFileSync('../data/tarefas.json', JSON.stringify(tarefasPersistentes, null, '\t'))//salva no arquivo a nova lista de tarefas
//JSON.stringfy é a forma de alterar o conteúdo de arquvios json
console.log("Tarefas:", tarefasPersistentes)