var Classificacao;
(function (Classificacao) {
    Classificacao["VERAO"] = "Ver\u00E3o";
    Classificacao["INVERNO"] = "Inverno";
    Classificacao["BANHO"] = "Banho";
    Classificacao["INTIMAS"] = "\u00CDntimas";
})(Classificacao || (Classificacao = {}));
const listaDeProdutos = [
    { nome: "Regata", classificacao: Classificacao.VERAO, preco: 80 },
    { nome: "Casaco", classificacao: Classificacao.INVERNO, preco: 100 },
    { nome: "Sunga", classificacao: Classificacao.BANHO, preco: 30 },
    { nome: "Cueca", classificacao: Classificacao.INTIMAS, preco: 20 }
];
function descontos(listaDeProdutos) {
    const listaMap = listaDeProdutos.map((produto) => {
        if (produto.classificacao === Classificacao.VERAO) {
            const desconto = produto.preco * 0.05;
            const novoPreco = produto.preco * 0.95;
            return Object.assign(Object.assign({}, produto), { desconto: desconto, precoDesconto: novoPreco });
        }
        if (produto.classificacao === Classificacao.INVERNO) {
            const desconto = produto.preco * 0.1;
            const novoPreco = produto.preco * 0.9;
            return Object.assign(Object.assign({}, produto), { desconto: desconto, precoDesconto: novoPreco });
        }
        if (produto.classificacao === Classificacao.BANHO) {
            const desconto = produto.preco * 0.04;
            const novoPreco = produto.preco * 0.96;
            return Object.assign(Object.assign({}, produto), { desconto: desconto, precoDesconto: novoPreco });
        }
        if (produto.classificacao === Classificacao.INTIMAS) {
            const desconto = produto.preco * 0.07;
            const novoPreco = produto.preco * 0.93;
            return Object.assign(Object.assign({}, produto), { desconto: desconto, precoDesconto: novoPreco });
        }
    });
    return listaMap;
}
console.log(descontos(listaDeProdutos));
//# sourceMappingURL=exercicio7.js.map