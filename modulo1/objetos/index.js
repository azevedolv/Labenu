// // - **Exercícios de interpretação de código**
// //     1.  Leia o código abaixo
// //         const filme = {
// //         	nome: "Auto da Compadecida", 
// //         	ano: 2000, 
// //         	elenco: [
// //         		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// //         		"Virginia Cavendish"
// //         		], 
// //         	transmissoesHoje: [
// //         		{canal: "Telecine", horario: "21h"}, 
// //         		{canal: "Canal Brasil", horario: "19h"}, 
// //         		{canal: "Globo", horario: "14h"}
// //         		]
// //         }
// //
// //         console.log(filme.elenco[0])
// //         console.log(filme.elenco[filme.elenco.length - 1])
// //         console.log(filme.transmissoesHoje[2])
// //
// //         a) O que vai ser impresso no console?
// //          Matheus Nachtergaele
// //          Virginia Cavendish
// //          Globo 14h
        
// //     2. Leia o código abaixo
// //        
// //         const cachorro = {
// //         	nome: "Juca", 
// //         	idade: 3, 
// //         	raca: "SRD"
// //         }
// //      
// //         const gato = {...cachorro, nome: "Juba"}
// //      
// //         const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
// //        
// //         console.log(cachorro)
// //         console.log(gato)
// //         console.log(tartaruga)
// //        
// //         a) O que vai ser impresso no console?
// //          nome: Juca idade: 3 raca: SRD
// //          nome: Juba idade: 3 raca: SRD
// //          nome: Jubo idade: 3 raca: SRD 
// //         b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// //          Replica a sintaxe de outro objeto
// //     3. Leia o código abaixo       
// //
//         function minhaFuncao(objeto, propriedade) {
//         	return objeto[propriedade]
//         }

//         const pessoa = {
//           nome: "Caio", 
//           idade: 23, 
//           backender: false
//         }
     
//         console.log(minhaFuncao(pessoa, "backender"))
//         console.log(minhaFuncao(pessoa, "altura"))
// //         ```
// //        
// //         a) O que vai ser impresso no console?
// //        // backender
//           // altura
// //         b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// //          como a minhaFuncao transforma seus elementos em uma lista cujo nome é o primeiro elemento e o segundo elemento é o conteúdo da lista,
// //          a ipressão vai mostrar apenas o conteúdo da lista;
// // [DEU UNDEFINED] NÃO ENTENDI 
// - **Exercícios de escrita de código**
//     1. Resolva os passos a seguir: 
//         a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
const pessoa = { // delcara o objeto nomeia = {coloca as propriedades do objeto}
    nome: "Luiz Vinícius",
    apelidos: ["LV", "Éli", "Vini"]
}
function minhaFuncao (pessoa) { //declara a função nomeia(elementos){corpo da função}
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`);
}
//         // Exemplo de entrada
//         const pessoa = {
//            nome: "Amanda", 
//            apelidos: ["Amandinha", "Mandinha", "Mandi"]
//         // Exemplo de saída
//         "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"         
//
//         b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
const novoObjeto = {//* delcara o objeto nomeia = {coloca as propriedades do objeto}
    ...pessoa, apelidos: ["trakinas", "neymar", "lu"]//*no corpo do objeto coloca os ...e chama o outro objeto
}// chamou o objeto, coloca vírgula e coloca o elemento que quer modificar e o novo valor
minhaFuncao(novoObjeto)
//** delcara o objeto nomeia = {coloca as propriedades do objeto}
//
//     2. Resolva os passos a seguir: 
//         a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.  
const objeto1 = {
    nome:"Luiz Vinícius",
    idade:26,
    profissao:"Estudante"
}     
const objeto2 = {
    nome: "Thayna",
    idade: 25,
    profissao: "Estudante"
}     
//         b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//         1. O valor de `nome`
//         2. O numero de caracteres do valor `nome`
//         3. O valor de `idade`
//         4. O valor de `profissão`
//         5. O numero de caracteres do valor `profissão`
//         - Exemplo
//             const pessoa = {
//             	nome: "Bruno", 
//               idade: 23, 
//             	profissao: "Instrutor"
//             }
            
//             minhaFuncao(pessoa)
            
//             // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
function minhaFuncao1(objeto1) {
    return [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length];
}
function minhaFuncao1(objeto2) {
    return [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length];
}
console.log(minhaFuncao1(objeto2))
//     3. Resolva os passos a seguir:         
//         a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho` 
const carrinho = []
const fruta1 = {
    nome: "Manga",
    disponibilidade: true
}       
const fruta2 = {
    nome: "Melancia",
    disponibilidade: true
}       
const fruta3 = {
    nome: "Mamão",
    disponibilidade: true
}       
//         b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)        
//         c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.               
function carrinhoDeCompras (fruta1, fruta2, fruta3) {
    carrinho.push(fruta1, fruta2, fruta3);//PUSH SERVE PARA ADICIONAR ELEMENTOS NO FINAL DE UMA ARRAY
}
carrinhoDeCompras(fruta1, fruta2, fruta3)
console.log(carrinho)
//         d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**         
// - 🏅  Desafios
//     1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**
//         - Exemplo
//             // Exemplo de entrada: "Lais", 26, "Instrutora"
//             // O que deve ser impresso no console: 
//             { nome: 'Lais', profissao: "Instrutora", idade: 26}    
function novaFuncao () {
    let name = prompt("Qual é o seu nome?");
    let age = +prompt("Qual é a sua idade?");
    let job = prompt("Qual é a sua profissão?");
    let object = {
        nome: name,
        idade: age,
        profissao: job
    }
    console.log(object)
    console.log(typeof object)
    }
    novaFuncao()    
      
//     2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
//         O primeiro filme foi lançado antes do segundo? false
//         O primeiro filme foi lançado no mesmo ano do segundo? true 
function newFunction () {
    let object1 = {
        anoDeLancamento: 1972,
        nomeDoFilme:"O Poderoso Chefão"
    }
    let object2 = { 
        anoDeLancamento:2017,
        nomeDoFilme:"Poderoso Chefinho",
    }
let verificacao = object1.anoDeLancamento < object2.anoDeLancamento
let verificacao1 = object1.anoDeLancamento === object2.anoDeLancamento
console.log(`${object1.nomeDoFilme} foi lançado antes de ${object2.nomeDoFilme}? ${verificacao}`)
console.log(`${object1.nomeDoFilme} foi lançado no mesmo ano de ${object2.nomeDoFilme}? ${verificacao1}`)
}
newFunction()

//     3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.
function controleEstoque(fruta) {//por mais que fruta n tenha sido declarado antes, os elementos que vão ser chamados para ocupar esse lugar já foram
    const dispFruta = {
        ...fruta,//puxou o elemento da função
        disponibilidade: !fruta.disponibilidade//verificoou a disponibilidade com o .disponibilidade e inverteu o resultado com o !
    }
    
    return dispFruta//entrega o resultado da função
}


console.log(controleEstoque(fruta1))//puxou a fruta 1 (manga) pra verificar a função controleEstoque;