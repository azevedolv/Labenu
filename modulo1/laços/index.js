// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
//    
    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)
// [RESPOSTA]
// Acho que vai aparecer a soma de 0+1+2+3+4, ou seja, 10; >>TA CERTO<<
//   
// 2. Leia o código abaixo:
//    
//     ```jsx
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) { //numero corresponde a algum elemento da lista já declarada
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    // }
//     ```
//    
//     a) O que vai ser impresso no console?
    //[RESPOSTA]
    //Acho que a lista: [19, 21, 23, 25, 27, 30];
    //Na verdade foram esses números separadamente, um em cada linha do console
    //Não estavam na lista
//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    //[RESPOSTA]
    //sim! só colocar que a variavel numero = lista["índice do elemento que quer acessar"];
    // [RESPOSTA CORRETA];
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //   let indice = lista.indexOf(numero) 
    // DECLARA UMA VARIAVEL INDICE E USA O .indexOf(numero)
    //   console.log(`O indice do número ${numero} é ${indice}`)
    //
    // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
//     ```jsx
    // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    // let quantidadeAtual = 0
    // while(quantidadeAtual < quantidadeTotal){
    //   let linha = ""
    //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    //     linha += "*"
    //   }
    //   console.log(linha)
    //   quantidadeAtual++
    // }
    //[RESPOSTA] // Na verdade é:
    // * // *
    // * // **
    // * // ***
    // * // ****
//     ```
    
//     - 💡 Dica
        
//         <aside>
//         ⭐ Se tiver dificuldade para entender esse exercício, rode as duas primeiras iterações do loop no [pytutor](http://pythontutor.com/javascript.html#mode=edit)
        
//         </aside>
        

// - **Exercícios de escrita de código**
//     1. Pergunte ao usuário quantos bichinhos de estimação ele tem 
//        e guarde esse dado em uma variável.
// let quantidadeDePets = +prompt("Quantos bichinhos de estimação você tem?");//declara e transforma em número
// let listaNomeDosPets = [] //declara antes para puxar depois na função
        
// //         a) Se a quantidade for 0, imprima no console 
// //            "Que pena! Você pode adotar um pet!"
//         if (quantidadeDePets == 0){
//             console.log("Que pena! Você pode adotar um pet!");
//         }
// //         b) Se a quantidade for maior que 0, solicite que o usuário digite 
// //            os nomes deles, um por um, e guarde esses nomes em um array
//         else if (quantidadeDePets > 0){
//             for (let indice = 0; indice < quantidadeDePets; indice++){//sempre declarar o indice; a condição; e a direção do indice(aumenta ou diminui);
//                 let nomeDoPet = prompt("Qual é o nome do seu pet?");
//                 listaNomeDosPets.push(nomeDoPet);//chama a lista que quero incluir os nomes .push(nomes que quero incluir);
//                 }
//             console.log(listaNomeDosPets);
//             //se ficar dentro do for vai imprimir a cada rodada, de acordo com a qtd dos pets
//         } else{
//     }
//    
//         - 💡 Dica
            
//             <aside>
//             ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
            
//             </aside>
            
        
//         c) Por fim, imprima o array com os nomes dos bichinhos no console - FEITO -
//
//     2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
  const arrayOriginal = [10, 342, 3, 0];// declara a lista origial
  //      
//         a) Escreva um programa que **imprime** cada um dos valores do array original.
//
    function imprimeElementos(lista) {//cria uma função que trabalha uma lista genérica
        //
        for (let indice of lista){// percebi que quando é lista, faz mais sentido usar for...of
            //declara o indice of lista generica - da lista generica
            //
            console.log(indice);//imprime cada indice que a lista generica tiver
            //
        }//fecha o for...of
        //
    }//fecha a function
    //
imprimeElementos(arrayOriginal)//chama a função usando a lista original como parâmetro;
//
//         b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    function divideElementosPor10 (lista) {
        for (let indice of lista){
            indice /= 10;
            console.log(indice); 
}
}
divideElementosPor10(arrayOriginal)
//         c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
        function arrayPar (pares) {//cria uma função qualquer, pensando em colocar uma lista genérica na função
            const listaPar = [];//a primeira ação foi criar uma lista
            for (let indice of pares){// para cada indice da lista genérica
                if (indice % 2 === 0){//se o indice for divisivel por 2
                    listaPar.push(indice);//coloca o indice dentro da listaPar, criada pela função;
                }
            }
            console.log(listaPar)//última ação da função, imprimir a nova função criada;
        }
        arrayPar(arrayOriginal);//chama a nova função com a arrayOriginal como parametro;
        //
//         d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
        function arrayString (string){
            const listaString = [];
            for (let indice = 0; indice < string.length; indice++){// se usar for...of o índice comeca a contar do 1 e não do 0;
                listaString.push(`O elemento do índex ${indice} é: ${string[indice]}.`);
            }
            console.log(listaString);
        }
        arrayString(arrayOriginal);
//         e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    function maiorEmenor (array){
        let maiorNumero = 0//bom declarar para usar de referência em relação ao índice da lista
        let menorNumero = 0  
        for(let indice = 0; indice < array.length; indice++){
            if(maiorNumero < array[indice]){
                maiorNumero = array[indice];
            }
        }
        for (let indice = 0; indice < array.length; indice++){
            if (menorNumero > array[indice]){
            menorNumero = array[indice];
            } else if(array[indice] != 0 && menorNumero == 0){
                menorNumero = array[indice];
            }
            else{
            }
        }
        console.log(maiorNumero);
        console.log(menorNumero);
    }
maiorEmenor(arrayOriginal);