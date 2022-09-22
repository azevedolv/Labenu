var Setores;
(function (Setores) {
    Setores["MARKETING"] = "Marketing";
    Setores["VENDAS"] = "Vendas";
    Setores["FINANCEIRO"] = "Financeiro";
})(Setores || (Setores = {}));
const colaboradores = [
    { nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: Setores.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: Setores.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: Setores.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: Setores.MARKETING, presencial: true }
];
function colaboradoresDeMarketingPresencial(listaDeColabs) {
    return listaDeColabs.filter((colab) => {
        return colab.setor === Setores.MARKETING && colab.presencial === true;
    });
}
console.log(colaboradoresDeMarketingPresencial(colaboradores));
//# sourceMappingURL=exercicio4.js.map