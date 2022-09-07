// 1. Leia o código abaixo

//     ```jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" }
    // ]

    // const novoArrayA = usuarios.map((item, index, array) => {//mapeando: para cada item contido no index contido na array faça:
    //    console.log(item, index, array)//imprima cada item de cada index contido na array
    // })
//     ```

//     a) O que vai ser impresso no console?

    //[RESPOSTA]
    //Acho que vai criar uma nova array de três elementos, onde o primeiro elemento vai ser o o valor do primeiro item, 
    //o indice do primeiro item na lista de usuarios e a lista de usuarios completa, 
    //a mesma coisa pro segundo e terceiro item;
    //[NA VERDADE]
    //Foram criadas 3 arrays iguais, uma para cada elemento da array usuarios

// 2. Leia o código abaixo

//     ```jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]

    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })

    // console.log(novoArrayB)
//     ```

//     a) O que vai ser impresso no console?

    //[RESPOSTA] >>TÁ CERTO<<
    //Vai ser impresso uma array mostrando apenas o nome de cada indice, ou seja:
    //[Amanda Rangel, Laís Petra, Leticia Chijo]

// 3. Leia o código abaixo

//     ```jsx
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]

    // const novoArrayC = usuarios.filter((item, index, array) => {
    //    return item.apelido !== "Chijo"
    // })

    // console.log(novoArrayC)
//     ```

//     a) O que vai ser impresso no console?

    //[RESPOSTA]
    // Vai imprimir uma array de apenas 2 elementos, com os apelidos diferentes de Chijo, ou seja:
    //[Mandi, Laura]
    //[NA VERDADE]
    //Imprimiu sim uma array de 2 elementos, mas com toda a linha,
    //mostrando nome e apelido daqueles que não tinha o apelido chijo
    //{nome: "Amanda Rangel", apelido: "Mandi"},{nome: "Laís Petra", apelido: "Laura"}
//
    //
    // -[**Exercícios de escrita de código**]
    // 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
    // realize as operações pedidas nos itens abaixo 
    // utilizando as funções de array **map** e **filter:**

    //     ```jsx
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]
 //     ```

 //     - ⭐  Resultados esperados em cada item

 //         ```jsx
 //         // item A
 //         [
 //           "Lupin", 
 //           "Polly",
 //           "Madame",
 //           "Quentinho", 
 //           "Fluffy", 
 //           "Caramelo"
 //         ]

 //         // item B
 //         [
 //            { nome: "Lupin", raca: "Salsicha"},
 //            { nome: "Quentinho", raca: "Salsicha"}
 //         ]

 //         // item C
 //         [
 //           "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
 //           "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
 //         ]
 //         ```


 //     a) Crie um novo array que contenha apenas o nome dos doguinhos
     const nomeDosDogs = pets.map((nome, indice, array) =>{
         return nome.nome 
     })
     console.log(nomeDosDogs)
 //     b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
     const apenasSalsicha = pets.filter(item => item.raca === "Salsicha");//DECLARA A VARIAVEL-FUNÇÃO = função-referencia.fliter(parametro-que-quer-olhar => elemento-do-parametro === "Salsicha");
     console.log(apenasSalsicha)
     //[FORMAS ALTERNATIVAS]
     //const apenasSalsicha = pets.filter((item, indice, array) =>{//declara a função-variavel = função-referencia.filter((item,indice,array) =>{corpo-da-função-com-as-condições});
     // if (item.raca === "Salsicha"){
     //     return true
     // } else{
     //     return false}
     // })
     //-------------------------
     // const apenasRacaSalsicha = pets.filter((item, index, array) => {
     //     return (item.raca === "Salsicha")
     // console.log(apenasSalsicha);
 //     c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
     const cupomPoodles = pets.filter((item) =>{ //CRIOU UMA ARRAY APENAS COM OS POODLES - INCLUINDO NOME E RAÇA
         if (item.raca === "Poodle"){
         return true;
     } else{
         false
     }})
     .map((item) => {//SUBSTITUIU O ELEMENTO(ITEM) CONTIDO EM CADA INDICE PELA FRASE
             item = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
             return item;})//RETORNOU A FRASE
     console.log(cupomPoodles)//IMPRIMIU A FUNÇÃO
     //[FORMA ALTERNATIVA]
     // const mensagemParaPoodle = pets.filter((item, index, array) => {
     //     const racaPoodle = item.raca === "Poodle"
     //     return racaPoodle
     // }).map((item, index, array) => {
     //     item = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
     //     return item
     // })

     // console.log(mensagemParaPoodle)
 //     - 💡  Dica

 //         <aside>
 //         ⭐ Você pode encadear o uso do map e do filter

 //         </aside>


 // 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

 //     ```jsx
     const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
 //     ```

 //     - ⭐  Resultados esperados em cada item

 //         ```jsx
 //         // item A
 //         [
 //           "Alface Lavada", 
 //           "Guaraná 2l",
 //           "Veja Multiuso",
 //           "Dúzia de Banana", 
 //           "Leite", 
 //           "Cândida", 
 //           "Detergente Ypê", 
 //           "Vinho Tinto", 
 //           "Berinjela kg", 
 //           "Sabão em Pó"
 //         ]

 //         // item B
 //         [
 //            { nome: "Alface Lavada", preço: 2.38 },
 //            { nome: "Guaraná 2l", preço: 7.13 },
 //            { nome: "Veja Multiuso", preço: 11.97 },
 //            { nome: "Dúzia de Banana", preço: 5.42 },
 //            { nome: "Leite", preço: 2.84 },
 //            { nome: "Cândida", preço: 3.14 },
 //            { nome: "Detergente Ypê", preço: 2.09 },
 //            { nome: "Vinho Tinto", preço: 52.25 },
 //            { nome: "Berinjela kg", preço: 8.54 },
 //            { nome: "Sabão em Pó Ypê", preço: 10.26 }
 //         ]

 //         // item C
 //         [
 //            { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
 //            { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
 //            { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 }
 //         ]

 //         // item D
 //         [
 //            { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
 //            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preço: 10.80 }
 //         ]

 //         // item E
 //         [
 //           "Compre Detergente Ypê por R$2,20",
 //         	"Compre Sabão em Pó Ypê por R$10,80"
 //         ]
 //         ```


 //     a) Crie um novo array que contenha apenas o nome de cada item
     const nomesProdutos = produtos.map((item) => {
         return item.nome
     })
     console.log(nomesProdutos)
 //     b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
 // aplicando 5% de desconto em todos eles
     const arrayDesconto = produtos.map((item) =>{
         const objetoDesconto = {
             nome: item.nome,//tenho que colocar o item genérico, não posso chamar produtos, pq produtos já está como referência do map;
             preco: item.preco * 0.95
         }
         item = objetoDesconto
         return item
     })  
     console.log(arrayDesconto)
 //     c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
     const apenasBebidas = produtos.filter(item => item.categoria === "Bebidas");//DECLARA NOMEIA = REFERÊNCIA.FILTER(REFERENCIA O ITEM => CONDIÇÃO);
     console.log(apenasBebidas)
 //     d) Crie um novo array que contenha apenas os objetos cujo nome contenha 
 //a palavra "Ypê"
     const apenasYpe = produtos.filter(item => item.nome.includes("Ypê"))
     console.log(apenasYpe);
 //     - 💡  Dica

 //         <aside>
 //         ⭐ Para te ajudar, você pode usar o método de stirngs chamado includes() que verifica se os caracteres escolhidos fazem parte da sua string

 //         E caso não se lembre como fazer isso, não tenha medo de pesquisar no google!

 //         </aside>


 //     e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
 const frase = apenasYpe.map((item) => {//mapeia apenasYpe que já tá filtrado
     item = `Compre ${item.nome} por ${item.preco}`
     return item
 })
 console.log(frase);
 //DESAFIOS//
 // 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

 // ```jsx
 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 // ```

 // - ⭐  Resultados esperados em cada item

 //     ```jsx
 //     // item A
 //     [
 //       "Bellsprout", 
 //       "Bulbasaur",
 //       "Charmander",
 //       "Psyduck", 
 //       "Squirtle", 
 //       "Vulpix"
 //     ]

 //     // item B
 //     [
 //        "grama",
 //        "fogo",
 //        "água",
 //     ]
 //     ```


 // a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
 const ordem = pokemons.map((item) => {
     return item.nome
 })
 const ordemAlfabetica = ordem.sort()
 console.log(ordemAlfabetica)
 // - 💡  Dica

 //     <aside>
 //     ⭐ Pesquise sobre o método `sort()`

 //     </aside>


 // b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
 const tiposDePokemons = pokemons.map(item => item.tipo);
 const unicos = [...new Set(tiposDePokemons)];//... serve pra replicar a estrutura da função anterior; new cria um novo objeto; Set(armazena informações)
 //...new Set() = retira repetições em arrays
 console.log(unicos)
 // - 💡  Dica

 //     <aside>
 //     ⭐ Existem várias maneiras de resolver esse exercício! Pesquise outras funções de arrays ou utilize loops juntamente com o filter 😄

 //     </aside>
 // const mapearTipos = pokemons.map((item, index, array)  => {
 //     return item.tipo
 // })

 // const tiposDePokemons = mapearTipos.filter((item, index, array) => {
 //       return array.indexOf(item) === index//indexOf() serve pra mostrar a posição do"item" na array;
       //a função ta excluindo os itens que 
//  })

 // console.log(tiposDePokemons) 