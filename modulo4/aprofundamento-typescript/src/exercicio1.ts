//a) a variável aponta erro, pois string não aceita outro tipo de variavel.
const minhaString:string = ""
//b) com o Union Type | permite usar mais de um tipo de variável
const meuNumero:number | string = 12
//c)d)
enum arcoIris{
    vermelho = "vermelho", 
    laranja = "laranja", 
    amarelo = "amarelo",
    verde = "verde", 
    azul = "azul", 
    anil = "anil", 
    violeta = "violeta"
}
const pessoa :{nome:string, idade:number, corFavorita:string} = {
    nome: 'Luiz Vinícius',
    idade: 25,
    corFavorita: arcoIris.vermelho
}
type person ={
    nome:string,
    idade:number, 
    corFavorita:string
}
const pessoa2:person = {
    nome: 'Thayná',
    idade: 24,
    corFavorita: arcoIris.anil
}
const pessoa3:person = {
    nome: 'Luiza',
    idade: 15,
    corFavorita: arcoIris.azul
}
const pessoa4:person = {
    nome: 'Maira',
    idade: 50,
    corFavorita: arcoIris.amarelo
}
 const listaDePessoas:person[] = [
    {
        nome: 'Maira',
        idade: 50,
        corFavorita: arcoIris.amarelo
    },
    {
        nome: 'Luiza',
        idade: 15,
        corFavorita: arcoIris.azul
    },
    {
        nome: 'Thayná',
        idade: 24,
        corFavorita: arcoIris.anil
    }
 ]
 console.log(listaDePessoas);
 