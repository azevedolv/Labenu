const minhaString = "";
const meuNumero = 12;
var arcoIris;
(function (arcoIris) {
    arcoIris["vermelho"] = "vermelho";
    arcoIris["laranja"] = "laranja";
    arcoIris["amarelo"] = "amarelo";
    arcoIris["verde"] = "verde";
    arcoIris["azul"] = "azul";
    arcoIris["anil"] = "anil";
    arcoIris["violeta"] = "violeta";
})(arcoIris || (arcoIris = {}));
const pessoa = {
    nome: 'Luiz Vinícius',
    idade: 25,
    corFavorita: arcoIris.vermelho
};
const pessoa2 = {
    nome: 'Thayná',
    idade: 24,
    corFavorita: arcoIris.anil
};
const pessoa3 = {
    nome: 'Luiza',
    idade: 15,
    corFavorita: arcoIris.azul
};
const pessoa4 = {
    nome: 'Maira',
    idade: 50,
    corFavorita: arcoIris.amarelo
};
const listaDePessoas = [
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
];
console.log(listaDePessoas);
//# sourceMappingURL=exercicio1.js.map