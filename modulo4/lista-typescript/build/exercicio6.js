const clientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
function clientesComSaldoNegativo(clientes) {
    return clientes.filter((cliente) => {
        let somaDebitos = cliente.debitos.reduce((acumulador, item) => {
            acumulador += item;
            return acumulador;
        }, 0);
        const saldo = cliente.saldoTotal - somaDebitos;
        return saldo < 0;
    }).map((cliente) => {
        let somaDebitos = cliente.debitos.reduce((acumulador, item) => {
            acumulador += item;
            return acumulador;
        }, 0);
        const novoSaldo = cliente.saldoTotal - somaDebitos;
        const novoDebito = [];
        return Object.assign(Object.assign({}, cliente), { saldoTotal: novoSaldo, debitos: novoDebito });
    });
}
console.log(clientesComSaldoNegativo(clientes));
//# sourceMappingURL=exercicio6.js.map