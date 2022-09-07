// //[INTERPRETAÇÃO] 
// //1. Leia o código abaixo:
// //     ```jsx
// //     const respostaDoUsuario = prompt("Digite o número que você quer testar")
// //     const numero = Number(respostaDoUsuario)
    
// //     if (numero % 2 === 0) {
// //       console.log("Passou no teste.")
// //     } else {
// //       console.log("Não passou no teste.")
// //     }
// //     ```   
// //     a) Explique o que o código faz. Qual o teste que ele realiza? 
// //[RESPOSTA]    
// // O CÓDICO TESTA SE O NÚMERO INSERIDO PELO USUÁRIO É PAR OU NÃO, UTLIZANDO CONDIÇÕES PARA RESPONDER À QUESTÃO: 
// //SE O RESTO DA DIVISÃO POR 2 DO NÚMERO ESCOLHIDO FOR 0 O PROGRAMA IMPRIME NO CONSOLE A FRASE Passou no teste.
// //SE O RESTO NÃO FOR 0, Não passou no teste. É IMPRESSO NO CONSOLE

// //     b) Para que tipos de números ele imprime no console "Passou no teste"? 
// //[RESPOSTA]    
// // APENAS OS NÚMEROS PARES
// //
// //     c) Para que tipos de números a mensagem é "Não passou no teste"? 
// //[RESPOSTA]    
// //TODOS OS NÃO PARES, OU SEJA, ÍMPARES
// //
// // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
// //     ```jsx
// //     let fruta = prompt("Escolha uma fruta")
// //     let preco
// //     switch (fruta) {
// //       case "Laranja":
// //         preco = 3.5
// //         break;
// //       case "Maçã":
// //         preco = 2.25
// //         break;
// //       case "Uva":
// //         preco = 0.30
// //         break;
// //       case "Pêra":
// //         preco = 5.5
// //         //break; // BREAK PARA O ITEM c.
// //       default:
// //         preco = 5
// //         break;
// //     }
// //     console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// // //     ```
//     //
// //     a) Para que serve o código acima?
//     //[RESPOSTA]
//     //PARA MOSTRAR O PREÇO DE CADA FRUTA, OU SEJA, SE O USUÁRIO ESCOLHER QUALQUER FRUTA INSERIDA NO CÓDICO SWITCH CASE,
//     //NO CONSOLE SERÁ IMPRESSO A FRASE O preço da fruta __ é R$___, PREENCHENDO OS ESPAÇOS COM A RESPOSTA DO USUÁRIO E SEU RESPECTIVO PREÇO
// //     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//     //O preço da fruta Maçã é R$2.25
// //     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//     // acho que apareceriam 2 mensagens: O preço da fruta Pêra é R$5.5 ; O preço da fruta Pêra é R$5;
//     //Na verdade, só aparece a segunda frase;O preço da fruta Pêra é R$5;
// // 3. Leia o código abaixo:
// //   
// //     ```jsx
// //     const numero = Number(prompt("Digite o primeiro número."))
    
// //     if(numero > 0) {
// //       console.log("Esse número passou no teste")
// //     	let mensagem = "Essa mensagem é secreta!!!"
// //     }
    
// //     console.log(mensagem)
// //     ```
    
// //     a) O que a primeira linha está fazendo?
//     // declarando uma variável, cujo valor seja um número inserido pelo usuário
// //     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//     //Como 10 é maior que zero, a mensagem que aparecerá é Esse número passou no teste. Caso fosse -10, nada apareceria no console
// //     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//     //Sim, pois a variável mensagem foi criada apenas dentro da função if e não no escopo global do programa e blocos de funções apenas recebem ou enviam informações para fora com determinados comandos;
//     //para entrar basta declarar o objeto, variável ou função externa;
//     //para sair apenas com o comando return ou com o console.log;
//===================================================================================================================================================================================================================================//
//[EXERCÍCIOS PRÁTICOS]
//     //1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    //
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//     let idade = +prompt("Qual é a sua idade?");
// //     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
// //     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
//     if (idade >= 18){
//         console.log("Você pode dirigir");
//     }else{
//         console.log("Você não pode dirigir");
//     }
// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
//     
    //    let turno = prompt("Digite M se seu turno de estudo for 'matutino', V se 'vespertino' e N se for 'noturno':");
    //    if (turno == "M"){
    //        console.log('Bom dia!');
    //    }else if (turno == 'V') {
    //        console.log('Boa tarde!');
    //    }else{
    //        console.log('Boa noite!')
    //    }      
    //
// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
//     - 💡 Dica
        
//         <aside>
//         ⭐ Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)
        
//         </aside>
// let turno = prompt("Digite M se seu turno de estudo for 'matutino', V se 'vespertino' e N se for 'noturno':");
// switch (turno){
//     case "M":
//     console.log('Bom dia!');
//     break
//     case "V":
//         console.log('Boa tarde!');
//     break
//     case "N":
//         console.log('Boa noite!');
// }
    
// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
//porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais
//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
//então verifique se seu amigo ou amiga vai topar assistir o filme. 
//Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`
//[RESPOSTA]
// let generoDoFilme = prompt("Qual é o gênero do filme que vamos assistir?");
// let precoDoIngresso = +prompt("Quanto custa o ingresso do cinema?");
// if (generoDoFilme.toLocaleLowerCase() === "fantasia" && precoDoIngresso < 15){
//     console.log('Bom filme!')
// }else{
//     console.log("Escolha outro filme :(")
//}
// [DESAFIOS]
//1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, 
//pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e 
//imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, 
//trocando [LANCHINHO] pelo que o usuário colocou no input.
//
//[RESPOSTA]
// let generoDoFilme = prompt("Qual é o gênero do filme que vamos assistir?");
// let precoDoIngresso = +prompt("Quanto custa o ingresso do cinema?");
// if (generoDoFilme.toLocaleLowerCase() === "fantasia" && precoDoIngresso < 15){
//     const snack = prompt('Qual lanche você vai comprar?')
//     console.log(`Bom filme!`);
//     console.log(`Aproveite o seu ${snack}!`);
// }else{
//     console.log("Escolha outro filme :(")
// }
//
// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
//Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos
//[RESPOSTA]
let nomeCompleto = prompt("Insira seu nome completo:");
let tipoDeJogo = prompt("Digite IN, se seu jogo é internacional, ou DO se seu jogo é doméstico:");
let etapaDoJogo = prompt("Digite SF se o jogo é uma semi-final, DT se for decisão por terceiro lugar ou FI se for uma final:");
let categoria = +prompt("Entre as categorias 1,2,3 e 4 qual o seu jogo se enquadra?");
let quantidadeDeIngressos = +prompt("Insira o número de ingressos comprados:");
const valorSF1 = 1320
const valorSF2 = 880
const valorSF3 = 550
const valorSF4 = 220
const valorDT1 = 660
const valorDT2 = 440
const valorDT3 = 330
const valorDT4 = 170
const valorFI1 = 1980
const valorFI2 = 1320
const valorFI3 = 880
const valorFI4 = 330
// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
//Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar 
//(ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
//Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
//Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, 
//mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 1){
    const valorPago1 = valorSF1 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorSF1}`);
    console.log(`Valor total: R$${valorPago}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 2){
    const valorPago2 = valorSF2 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorSF2}`);
    console.log(`Valor total: R$${valorPago2}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 3){
    const valorPago3 = valorSF3 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorSF3}`);
    console.log(`Valor total: R$${valorPago3}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 4){
        const valorPago4 = valorSF4 * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorSF4}`);
        console.log(`Valor total: R$${valorPago4}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 1){
            const valorPagoDT1 = valorDT1 * quantidadeDeIngressos
            console.log('---Dados da compra---');
            console.log(`Nome do cliente:${nomeCompleto}`);
            console.log(`Tipo de Jogo: Nacional`);
            console.log(`Categoria: ${categoria}`);
            console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
            console.log('---Valores---');
            console.log(`Valor do ingresso: R$${valorDT1}`);
            console.log(`Valor total: R$${valorPagoDT1}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 1){
                const valorPagoDT1 = valorDT1 * quantidadeDeIngressos
                console.log('---Dados da compra---');
                console.log(`Nome do cliente:${nomeCompleto}`);
                console.log(`Tipo de Jogo: Nacional`);
                console.log(`Categoria: ${categoria}`);
                console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
                console.log('---Valores---');
                console.log(`Valor do ingresso: R$${valorDT1}`);
                console.log(`Valor total: R$${valorPagoDT1}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 2){
    const valorPagoDT2 = valorDT2 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorDT2}`);
    console.log(`Valor total: R$${valorPagoDT2}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 3){
    const valorPagoDT3 = valorDT3 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorDT3}`);
    console.log(`Valor total: R$${valorPagoDT3}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 4){
    const valorPagoDT4 = valorDT4 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorDT4}`);
    console.log(`Valor total: R$${valorPagoDT4}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 1){
    const valorPagoFI1 = valorFI1 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorFI1}`);
    console.log(`Valor total: R$${valorPagoFI1}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 2){
    const valorPagoFI2 = valorFI2 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorFI2}`);
    console.log(`Valor total: R$${valorPagoFI2}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 3){
    const valorPagoFI3 = valorFI3 * quantidadeDeIngressos
    console.log('---Dados da compra---');
    console.log(`Nome do cliente:${nomeCompleto}`);
    console.log(`Tipo de Jogo: Nacional`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
    console.log('---Valores---');
    console.log(`Valor do ingresso: R$${valorFI3}`);
    console.log(`Valor total: R$${valorPagoFI3}`);
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 4){
        const valorPagoFI4 = valorFI4 * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorFI4}`);
        console.log(`Valor total: R$${valorPagoFI4}`);
    } else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 4){
        const valorPagoFI4 = valorFI4 * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Nacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorFI4}`);
        console.log(`Valor total: R$${valorPagoFI4}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 1){
        const valorPagoIN1 = (valorSF1 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorSF1 * 4.10}`);
        console.log(`Valor total: R$${valorPagoIN1}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 2){
        const valorPagoIN2 = (valorSF2 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorSF2 * 4.10}`);
        console.log(`Valor total: R$${valorPagoIN2}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 3){
        const valorPagoIN3 = (valorSF3 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorSF3 * 4.10}`);
        console.log(`Valor total: R$${valorPagoIN3}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 4){
        const valorPagoIN4 = (valorSF4 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorSF4 * 4.10}`);
        console.log(`Valor total: R$${valorPagoIN4}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 1){
        const valorPagoINDT1 = (valorDT1 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorDT1 * 4.10}`);
        console.log(`Valor total: R$${valorPagoINDT1}`);
    }  else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 2){
        const valorPagoINDT2 = (valorDT2 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorDT2 * 4.10}`);
        console.log(`Valor total: R$${valorPagoINDT2}`);
    }  else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 3){
        const valorPagoINDT3 = (valorDT3 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: ${valorDT3 * 4.10}`);
        console.log(`Valor total: ${valorPagoINDT3}`);
    }  else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 4){
        const valorPagoINDT4 = (valorDT4 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorDT4 * 4.10}`);
        console.log(`Valor total: R$${valorPagoINDT4}`);
    }  else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 1){
        const valorPagoINFI1 = (valorFI1 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorFI1 * 4.10}`);
        console.log(`Valor total: R$${valorPagoINFI1}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 2){
        const valorPagoINFI2 = (valorFI2 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorFI2 * 4.10}`);
        console.log(`Valor total: R$${valorPagoINFI2}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 3){
        const valorPagoINFI3 = (valorFI3 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorFI3 * 4.10}`);
        console.log(`Valor total: R$${valorPagoINFI3}`);
    } else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 4){
        const valorPagoINFI4 = (valorFI4 * 4.10) * quantidadeDeIngressos
        console.log('---Dados da compra---');
        console.log(`Nome do cliente:${nomeCompleto}`);
        console.log(`Tipo de Jogo: Internacional`);
        console.log(`Categoria: ${categoria}`);
        console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`);
        console.log('---Valores---');
        console.log(`Valor do ingresso: R$${valorFI4 * 4.10}`);
        console.log(`Valor total:R$${valorPagoINFI4}`);
    } else {
        console.log('ERRO DE PREENCHIMENTO! Atualize a página e insira novamente os dados!!');
    }
// - Tabela de Preços

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)

// - Exemplo de saída: Jogo Nacional

// ```
// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980
// Valor total:  R$ 19800

// ```

// - Exemplo de saída: Jogo Internacional

// ```
// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Internacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  U$ 482.92682926829275
// Valor total:  U$ 4829.2682926829275

// ```