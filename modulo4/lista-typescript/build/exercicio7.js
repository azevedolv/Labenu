const estoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
const ajustaPreco = (array) => {
    return array.map((produto) => {
        const valorUnitario = produto.valorUnitario;
        const valorAjustado = valorUnitario.toFixed(2).replace('.', ',');
        return Object.assign(Object.assign({}, produto), { valorUnitario: `R$${valorAjustado}` });
    }).sort((a, b) => a.quantidade - b.quantidade);
};
console.log(ajustaPreco(estoque));
//# sourceMappingURL=exercicio7.js.map