export type purchaseData = {
    id:string,
    userId:string,
    productId:string
    quantity:number,
    totalPrice:number
}

export type AllPurchasesPerson = {
    idDaCompra: string,
    NomeDoProduto : string,
    Quantidade:number,
    TotalPreco:number
}

export type PurchasesByUser = {
    idPessoa: string,
    nomePessoa: string
    compras: AllPurchasesPerson[]
}