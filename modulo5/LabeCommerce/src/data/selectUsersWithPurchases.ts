import { AllPurchasesPerson, PurchasesByUser } from "../Types/typePurchase"
import { connection } from "./baseDataBase"

export default async function selectUsersWithPurchases() {

    const result = await connection.raw(`
    select 
    labecommerce_users.id as IdPessoa , labecommerce_users.name as NomePessoa,labecommerce_products.name as NomeProduto, labecommerce_purchases.id as IdCompra , labecommerce_purchases.quantity as Quantidade, labecommerce_purchases.total_price as PrecoTotal
    from labecommerce_purchases
    inner join labecommerce_users 
    on
    labecommerce_purchases.user_id = labecommerce_users.id
    inner join labecommerce_products 
    on
    labecommerce_purchases.product_id = labecommerce_products.id
    `)

    // let Allpurchases: AllPurchasesPerson[] = []
    const AllUsers : PurchasesByUser[] = []
    let controller: { [key: string]: number } = {}

    result[0].forEach((person: any) => {
       console.log(controller);
       
        if (controller[person.IdPessoa] === undefined) {
            const infoUser: PurchasesByUser = {
                idPessoa: person.IdPessoa,
                nomePessoa: person.NomePessoa,
                compras: []
            }

            if(person.IdCompra){
                infoUser.compras.push({
                    idDaCompra: person.IdCompra,
                    NomeDoProduto: person.NomeProduto,
                    Quantidade: person.Quantidade,
                    TotalPreco: person.PrecoTotal
                })
            }
            controller[person.IdPessoa] = AllUsers.length
            AllUsers.push(infoUser)
        } else {
            const infoUser = AllUsers[controller[person.IdPessoa]]
            infoUser.compras.push({
                idDaCompra: person.IdCompra,
                NomeDoProduto: person.NomeProduto,
                Quantidade: person.Quantidade,
                TotalPreco: person.PrecoTotal
            })
        }

    });

    return AllUsers
}