import { AllPurchasesPerson, PurchasesByUser } from "../Types/typePurchase";
import { connection } from "./baseDataBase";




export default async function selectPurchasesByUser(userId: string):Promise<PurchasesByUser|undefined> {

    // const result = await connection("labecommerce_purchases")
    //         .select(
    //             "labecommerce_purchases.id as purchase_id",
    //             "labecommerce_purchases.product_id",
    //             "labecommerce_products.name as product_name",
    //             "labecommerce_products.image_url",
    //             "labecommerce_products.price as product_price",
    //             "labecommerce_purchases.quantity",
    //             "labecommerce_purchases.total_price"
    //         )
    //         .innerJoin(
    //             "labecommerce_users",
    //             "labecommerce_users.id",
    //             "labecommerce_purchases.user_id"
    //         )
    //         .innerJoin(
    //             "labecommerce_products",
    //             "labecommerce_products.id",
    //             "labecommerce_purchases.product_id"
    //         )
    //         .where({ user_id })

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
    where labecommerce_users.id = "${userId}";
    `)

    
    let Allpurchases: AllPurchasesPerson[] = []
    let infoUser: any = {}

    result[0].map((person: any) => {
        infoUser = {
            idPerson: person.IdPessoa,
            namePerson: person.NomePessoa
        }

        Allpurchases.push({
            idDaCompra: person.IdCompra,
            NomeDoProduto: person.NomeProduto,
            Quantidade: person.Quantidade,
            TotalPreco: person.PrecoTotal
        })
    })

    const allPurchasesByUser: PurchasesByUser = {
        idPessoa: infoUser.idPerson,
        nomePessoa: infoUser.namePerson,
        compras: Allpurchases
    }



    return allPurchasesByUser
}