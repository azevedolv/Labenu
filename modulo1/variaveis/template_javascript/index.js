/**1. INTERPRETAÇÃO 1
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Vai ser impresso:
10
10 5

2. INTERPRETAÇÃO 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
Vai ser impresso:
10 10 10

3.[INTERPRETAÇÃO] Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
Sugestão:
let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasDeTrabalho} por hora`)

EXERCÍCIO PRÁTICO

const nome = "";
let idade = "";

console.log(typeof nome, typeof idade);
/** Não defini se idade precisa ser number, então ele reconheceu como string, que pode ser qualquer caractere

 const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
console.log(nome, idade);
console.log(typeof nome, typeof idade);

Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu */

/*const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
console.log("Olá,", nome,"você tem", idade, "anos.");
console.log(typeof nome, typeof idade);*/

/**Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?".
 
const clima = "Hoje fez calor?";
const calçado = "Hoje você saiu de casa de tênis?";
const transporte = "Hoje você usou transporte público?";
a = "- SIM";
b = "- NÃO";
c = "- SIM";
console.log(clima, a);
console.log(calçado, b);
console.log(transporte, c);

3.[EXERCICIO] Suponha que temos duas variáveis a e b, cada uma com um valor inicial
Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a. 
Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.
// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

[EXERCICIO] Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente
(ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). */
/**let a = 10
let b = 25
let c = 0
c = a
a = b
b = c
console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
 começar com c=a fez com que "salvasse" o valor de a em c, para acessar depois, com o b; independente do valor de c a vira 25 depois com a =b; e agora com c = 10 b pode ser 10 também com b = c. */
 
 /**Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
  * O primeiro número somado ao segundo número resulta em: x
  * O primeiro número multiplicado pelo segundo número resulta em: y.
 let numFav = prompt("Qual o seu número de favorito?");
 let diaDoMes = prompt("Hoje é qual dia do mês?");
 let numFavNumero = Number(numFav);
 let diaDoMesNumero = Number(diaDoMes);
 console.log("x:", numFavNumero+diaDoMesNumero);
 console.log("y:", numFavNumero*diaDoMesNumero);*/

 /**[EXERCICIO OPERADORES ARTIMETICOS] 
/** exercicio 1: somar 3 com 4
 const exercicio1 = 3 + 4
console.log("A soma de 3 + 4 é:", exercicio1)

/** exercicio 2: (3 x 5)/2 
const exercicio2 = (3*5)/2
console.log("O resultado de (3 x 5)/2 é:", exercicio2)

/**exercicio 3: (4-5)*-1 
const exercicio3 = (4-5)*-1
console.log("O resultado de (4-5)*-1 é:", exercicio3)

/** exercicio 4: qual é o resto da divisão de 234 por 5 
const exercicio4 = 234 % 5
console.log("O resto da divisão entre 234 e 5 é:", exercicio4); */

/**EXERCICIO COMPARADORES */
/**IGUALDADE */
comparacao = 1 === 1 // true
comparacao = 1 === '1'//false - ele compara o valor e o tipo
comparacao = 1 == '1'// true - só comparou o valor, não o tipo

//DIFERENÇA
comparacao = 1 !== 1 //false
comparacao = 1 !== '1' //true
comparacao = 'Bom dia' !== 'bom dia' // true - o b e o B são diferentes

//Maior e maior ou igual (> ou >=)
comparacao = 5 > 6 //false
comparacao = 5 > 5 //false
comparacao = 5 >= 6 //false
comparacao = 5 >= 5 //true
comparacao = 5 < 6 //true

//EXERCICIO 2 
//CRIE 2 VARIAVEIS QUE GUARDEM 2 NUMEROS
const num1 = 10;
const num2 = 5;
//O PRIMEIRO NUMERO É igual QUE O SEGUNDO?
console.log("O PRIMEIRO NUMERO É igual QUE O SEGUNDO?", num1 === num2) //false

//O PRIMEIRO NUMERO É DIFERENTE DO SEGUNDO?
console.log("O PRIMEIRO NUMERO É DIFERENTE QUE O SEGUNDO?", num1 !== num2) //TRUE

// O PRIMEIRO NÚMERO É MAIOR QUE O SEGUNDO?
console.log("O PRIMEIRO NUMERO É MAIOR QUE O SEGUNDO?", num1 > num2) // TRUE

// O PRIMEIRO NUMERO É MENOR QUE O SEGUNDO?
console.log("O PRIMEIRO NUMERO É MENOR QUE O SEGUNDO?", num1 < num2) // FALSE

// EXEMPLOS COMPARADORES LÓGICOS
//Exemplo operador &&
const estarSol = true
const estarDeFerias = true
const podeIrParaPraia = estarSol && estarDeFerias
console.log("Posso ir para a praia?", podeIrParaPraia);

const comeArroz = true
const comeFrango= true
const comeUvaPassa = false
const gostoDoPrato = comeArroz && comeFrango && comeUvaPassa
console.log("Eu gosto do prato?", gostoDoPrato);

// Crie 3 variaveis: a, b e c
//Atribua os valores true, false e true, respectivamente
/*const a = true
const b = false
const c = true
operacao1 = a && b //false
operacao2 = b && c //false
operacao3 = a && c //true
operacao4 = a && b && c //false
console.log("a && b", operacao1);
console.log("b && c", operacao2);
console.log("a && c", operacao3);
console.log("a && b && c", operacao4);*/

//EXEMPLO OPERADOR || OU OR
const estouEmCasa = false
const estouComVontadeDeDoce = true
const estouTriste = false

const possoComerChocolate = estouEmCasa || estouComVontadeDeDoce || estouTriste
console.log("Eu posso comer chocolate?", possoComerChocolate);
//operador de negação !
const taChovendo = false
console.log("está chovendo?", !!taChovendo);

//EXERCICIO - CRIE 3 VARIAVEIS A,B E C
const a = true 
const b = false
const c = true
// a || b
console.log("a ou b", a || b);
//b || c
console.log("b ou c", b || c);
//a || c
console.log("a ou c", a || c);
//a || b || c
console.log("a ou b ou c", a || b || c);

//exercicio5

const nome = prompt("Digite o seu nome:")
const anoNascimento = Number(prompt("Digite o ano que você nasceu:"));
const anoAtual = +prompt("Em que ano estamos agora?");
const idade = anoAtual - anoNascimento;
console.log("Nome:", nome);
console.log("Idade", idade);
console.log("É maior de idade?", idade >= 18);
console.log("Sua idade em 2050:", 2050 - anoNascimento);
