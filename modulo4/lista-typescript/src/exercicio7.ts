
const estoque = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

type Estoque ={
    nome:string,
    quantidade:number,
    valorUnitario:number | string
}
// type EstoqueSaida ={
//     nome:string,
//     quantidade:number,
//     valorUnitario:string
// }
const ajustaPreco = (array:Estoque[]): Estoque[] => {
	return array.map((produto) =>{
		const valorUnitario = produto.valorUnitario as number
        const valorAjustado: string = valorUnitario.toFixed(2).replace('.', ',')
	return {...produto, valorUnitario: `R$${valorAjustado}`}
    }).sort((a,b) => a.quantidade - b.quantidade)
}
console.log(ajustaPreco(estoque));
// const ajustaPreco = (array:Estoque[]): EstoqueSaida[] => {
// 	return array.map((produto) =>{
//         const valorAjustado: string = produto.valorUnitario.toFixed(2).replace('.', ',')
// 	return {...produto, valorUnitario: `R$${valorAjustado}`}
//     }).sort((a,b) => a.quantidade - b.quantidade)
// }
