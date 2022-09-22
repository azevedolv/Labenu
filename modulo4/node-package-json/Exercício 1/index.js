//Exercício 1: 
//a) acessamos os parâmetros passados da linha de comando para o node atribuindo o valor das variáveis como process.argv[2], usando o índice a partir de 2 e executando ou "node nomeDoArquivo parametro" ou atráves de um script por meio do "npm run nomeDoScript parametro"
// b)
const blue = "\x1b[34m";
const purple = "\x1b[35m";
const green = "\x1b[32m";
const red = "\x1b[31m";

const nome = process.argv[2]
const idade = Number(process.argv[3])
const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`
if(nome && idade){
    console.log(green, mensagem);
}else{
    console.log(blue,"Erro. Esperava dois parâmetros e recebi um.");
}
console.log()
//c)
const idadeSeteAanos = idade + 7
const mensagem2 = `Olá, ${nome}! Você tem ${idade} anos. Em 7 anos você terá ${idadeSeteAanos} anos.`

if(nome && idade){
    console.log(red, mensagem2);
}else{
    console.log(purple, "Erro. Esperava dois parâmetros e recebi um.");
}


