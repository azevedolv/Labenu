//Exercício 1: 
//a) acessamos os parâmetros passados da linha de comando para o node atribuindo o valor das variávis como process.argv[2], usando o índice a partir de 2 e executando ou "node nomeDoArquivo parametro" ou atráves de um script por meio do "npm run nomeDoScript parametro"
//b)c)
// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const idadeSeteAanos = idade + 7
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em 7 anos você terá ${idadeSeteAanos} anos.`)

//Exercício 2:
const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2= Number(process.argv[4])

switch(operacao){
    case "soma":
        const soma = valor1 + valor2;
        console.log(`A resposta é: ${soma}`);
        break
    case "sub":
        const sub = valor1 - valor2;
        console.log(`A resposta é: ${sub}`);
        break
    case "mult":
        const mult = valor1 * valor2;
        console.log(`A resposta é: ${mult}`);
        break 
    case "div":
        const div = valor1 / valor2;
        console.log(`A resposta é: ${div}`);
        break
    default:
        console.log("Erro! As operações disponíveis são: soma;sub;mult;div;");
}