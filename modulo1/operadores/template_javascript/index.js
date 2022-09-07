/* EXERCÍCIO DE INTERPRETAÇÃO
[PRIMEIRO]Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
[RESPOSTA]
a. false
b. false
c. true
d. booleans

[SEGUNDO] Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

[RESPOSTA]
Como não especificamos que as variaveis são numeros, o programa lê tudo entre aspas como string (caractere)
Então ele vai imprimir os numeros em sequência. Exemplo:
primeiroNumero = 2; segundoNumero = 3
23

[TERCEIRO] Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso
no console seja, de fato, a soma dos dois números.
[RESPOSTA]
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero

console.log(soma);

[EXERCICIO RESOLUÇÃO]
1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
    seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
[RESPOSTA]
const idade = Number(prompt("Quantos anos você tem?"));
const idadeMelhorAmigo = Number(prompt("Quantos anos o seu melhor amigo tem?"));
console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo);
console.log("A diferença de idade entre vocês é:", idade - idadeMelhorAmigo);

2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
[RESPOSTA]
    const numPar = Number(prompt("Digite um número par"));
    console.log("O resto da divisão desse número por 2 é:", numPar % 2);
    // a reposta sempre é 0, pois números pares ao serem dividos por dois resultam em números inteiros, sem restos
    // Se digitarmos um número impar o resto da divisão sempre será 1;

    3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas
[RESPOSTA]
    const idade = Number(prompt("Quantos anos você tem?"));
    console.log("Sua idade em meses é:", idade * 12);
    console.log("Sua idade em dias é:", idade * 365);
    console.log("Sua idade em horas é:", (idade * (365 * 24))); 
    
4.  Faça um programa que pergunte ao usuário dois números.
    Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
    O primeiro numero é maior que o segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    obs: O true ou false vai depender dos números inseridos e do resultado das operações.
[RESPOTA]
const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));
let divisivel1 = num1 % num2
let divisivel2 = num2 % num1
console.log("O primeiro numero é maior que o segundo?", num1 > num2);
console.log("O primeiro numero é igual que o segundo?", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", divisivel1 < 1);
console.log("O segundo numero é divisível pelo primeiro?", divisivel2 < 1);


[DESAFIO] 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

    - Graus Celsius(°C) para Graus Fahrenheit (°C)
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
[RESPOSTA]*/
const grausK1 = (77 - 32) * (5 / 9) + 273.15
console.log("77ºF em K são:", grausK1);//298.15K

const grausF1 = (80) * (9 / 5) + 32
console.log("80ºC em ºF são:", grausF1);//175ºF

const grausF2 = (30) * (9 / 5) + 32
const grausK2 = (grausF2 - 32) * (5 / 9) + 273.15
console.log("30ºC em ºF e K, respectivamente, são:", grausF2, grausK2);//86ºF e 303.15K

const grausC = prompt("Insira um valor em graus Celsius");
const grausF3 = (grausC) * (9 / 5) + 32
const grausK3 = (grausF3 - 32) * (5 / 9) + 273.15
console.log(grausC, "ºC em ºF e K, respectivamente, são:", grausF3, grausK3);
