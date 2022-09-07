// //  - **Exercícios de interpretação de código**
    
// //     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
// //     1. Leia o código abaixo
    
// //         function minhaFuncao(variavel) {
// //         	return variavel * 5
// //         }
        
// //         console.log(minhaFuncao(2))
// //         console.log(minhaFuncao(10))
// //         ```
        
// //         a) O que vai ser impresso no console?
//     //[resposta]
//     //  10
//     //  50
// //         b) O que aconteceria se retirasse os dois `console.log` e simplesmente
// //            invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//     //[resposta]
//     //  Apareceria undefined, pois não há comando de impressão e
//     //  a variável minhaFuncao só foi declarada dentro do escopo loca da função
//     //  e não no escopo geral do projeto
// //     2. Leia o código abaixo
        
// //         let textoDoUsuario = prompt("Insira um texto");
        
// //         const outraFuncao = function(texto) {
// //         	return texto.toLowerCase().includes("cenoura")
// //         }
// //         const resposta = outraFuncao(textoDoUsuario)
// //         console.log(resposta)
// //         ```
        
// //         a. Explique o que essa função faz e qual é sua utilidade
//     //[resposta]
//     //  A função transforma o texto inserido pelo usuário em caixa baixa, ou seja,
//     //  coloca o texto todo em letras minúsculas e verifica se a palavra cenoura
//     //  foi inserida ou não, apontando true se sim e false se não.

// //         b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// //              i.   `Eu gosto de cenoura`
//     //[resposta]
//     //  eu gosto de cenoura true // cenoura aparece antes e depois da função
// //              ii.  `CENOURA é bom pra vista`
//     //[resposta]
//     //  cenoura é bom pra vista true // cenoura só aparece depois da função, 
//     //  mas acredito que pelo fato de toLowerCase() vir primeiro na função
//     //  o .includes() analisa a frase já em caixa baixa.
// //              iii. `Cenouras crescem na terra`
//     //[resposta]
//     //  cenouras crescem na terra false // cenouras é diferente de cenoura

//     //[EXERCÍCIOS PRÁTICOS]
//     // 1. Escreva as funções explicadas abaixo:
    
//     // a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
//     // ```
//     // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//     // ```
//     // Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
//     //[RESPOSTA]
//      function primeiraFuncao () { //*** function nome-da-function (elementos) {corpo-da-function}
//         console.log("Eu sou Luiz, tenho 25 anos, moro no Rio de Janeiro e sou estudante.")
//     };

//     primeiraFuncao();
//     //***to falando que primeiraFuncao é uma variável-função que imprime essa frase e depois chamo a variável
// // 
//     // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
//     function funcaoSobreMim(nome, idade, cidade, profissao) {
//         //***function não precisa de =
//         console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}.`)
//     }// ***templatestring pra inserir os elementos da função
//     funcaoSobreMim('Luiz Vinícius', '25', 'Rio de Janeiro', 'estudante');
//     //***inserir o valor dos elementos da função
//     //
//     // 2. Escreva as funções explicadas abaixo:
//     //
//     // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
//     function soma (a, b) { //***function nome-da-função (parametros) {corpo}
//         return a + b //***return ação-de-saída-da-função
//     }
//     console.log(soma(2, 9));//*** consigo imprimir direto a função, sem precisar criar uma variável resultado
//     //
//     // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
//     function maiorQue (a, b) {
//         return a >= b
//     }
//     console.log(maiorQue(1345, 55));
//     // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
//     function par (a) {
//         par1 = a % 2
//         //return (a % 2) == 0 //*** JEITO MAIS RÁPIDO
//         return par1 === 0
//     }
//     console.log(par(47));
//     // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
//     function mensagem (texto) {
//         console.log(`${texto.length} ${texto.toUpperCase()}`);
//     }
//     mensagem('amanhã vou no show do bk de graça com meus amigos!');
    
//     //3. Crie *uma função para cada* uma das operações básicas (soma, subtração, multiplicação e divisão). 
//     //Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores imputados pelo usuário sendo o argumento. 
//     //Por fim, mostre no console o resultado das operações:
    
//     function funcaoSoma (x, y) {
//         return x + y
//     }
//     function funcaoSubtracao (x, y) {
//         return x - y
//     }
//     function funcaoMultipliacao (x, y) {
//         return x * y
//     }
//     function funcaoDivisao (x, y) {
//         return x / y
//     }
//     const numero1 = Number(prompt("Vamos fazer operações matemáticas. Digite um número:"));
//     const numero2 = Number(prompt("Digite outro número:"));
//     console.log(`A soma de ${numero1} com ${numero2} é ${funcaoSoma(numero1, numero2)}.`)
//     console.log(`A diferença entre ${numero1} e ${numero2} é ${funcaoSubtracao(numero1, numero2)}.`)
//     console.log(`A multiplicação de ${numero1} por ${numero2} é ${funcaoMultipliacao(numero1, numero2)}.`)
//     console.log(`A divisão entre ${numero1} e ${numero2} é ${funcaoDivisao(numero1, numero2)}.`)

function custoMaca (quantidade) {
    let custo
    if (quantidade < 12) {
        custo = quantidade * 1.3
    } else {
        custo = quantidade * 1
    }
        return console.log(custo)
}

custoMaca (5)