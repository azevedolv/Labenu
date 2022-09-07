// EXERCÍCIOS DE INTERPRETAÇÃO
// Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/*
let array
console.log('a. ', array)
[RESPOSTA] 
a. undefined

array = null
console.log('b. ', array)
[RESPOSTA]
b. null*/
//
//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)
//[RESPOSTA]
//c. 11
//
//let i = 0
//console.log('d. ', array[i])
//[RESPOSTA]
//d. 3
//
//array[i+1] = 19 // ele substitui a posição i+1 (que no caso é o número 4) por 19;
//console.log('e. ', array)
// [Resposta]
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//
//const valor = array[i+6] //0 + 6 = ao número 9 da lista
//console.log('f. ', valor);
//[RESPOSTA]
//f. 9
/*[QUESTÃO 2]
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//RESPOSTA
SUBI NUM ONIBUS EM MIRROCOS 27

//Exercícios de escrita de código
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
const nome = prompt("Digite seu nome:");
const email = prompt("Digite seu e-mail:");
const frase = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}.`
console.log(frase);
/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.*/
//[RESPOSTAS]*/
    const comidasFav = ["Bife com batata frita", "Churrasco", "Escondidinho", "Feijoada", "Hambúrguer"];
    console.log("Essas são minhas comidas preferidas:");
    console.log(comidasFav[0]);
    console.log(comidasFav[1]);
    console.log(comidasFav[2]);
    console.log(comidasFav[3]);
    console.log(comidasFav[4]);
    const comidaFavUsuario = prompt("Qual é sua comida favorita?");
    let i = 0 // variavel só pra posicionar os itens da lista
    comidasFav[i+1] = comidaFavUsuario //nome da lista[posição da comida] = nova lista
    //comidasFav[1] = comidaFavUsuario // jeito mais rápido de fazer****
    console.log(comidasFav);//imprime a nova lista
//"array[x] = valor"
//Onde X é a posição que você quer colocar o "valor"

//    3. Faça um programa, seguindo os passos:
//    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
let listaDeTarefas = []

//  b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const tarefa1 = prompt("Digite sua primeira tarefa diária:")
const tarefa2 = prompt("Digite sua segunda tarefa diária:")  
const tarefa3 = prompt("Digite sua terceira tarefa diária:")  
listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
//    c) Imprima o array no console
console.log(listaDeTarefas);
//    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const tarefaRealizada = prompt("Entre as tarefas 0, 1 e 2, qual você já realizou?");
//    e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaRealizada,1);
//    f) Imprima o array no console
console.log(listaDeTarefas);
//