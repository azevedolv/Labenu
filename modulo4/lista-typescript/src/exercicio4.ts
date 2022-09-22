enum Setores{
MARKETING = "Marketing",
VENDAS = "Vendas",
FINANCEIRO = "Financeiro"
}

type Colaboradores = {
    nome:string,
    salário:number,
    setor:Setores,
    presencial:boolean
}

const colaboradores = [
	{ nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.MARKETING, presencial: true }
]
function colaboradoresDeMarketingPresencial(listaDeColabs:Colaboradores[]):Colaboradores[]{
    return listaDeColabs.filter((colab) =>{
        return colab.setor === Setores.MARKETING && colab.presencial === true
    })
}
console.log(colaboradoresDeMarketingPresencial(colaboradores));
