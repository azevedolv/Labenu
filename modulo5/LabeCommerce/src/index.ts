import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUsers from "./endpoints/getUsers";
import createProducts from "./endpoints/createProducts";
import getProducts from "./endpoints/getProducts";
import createPurchases from "./endpoints/createPurchases";
import getPurchasesByUser from "./endpoints/getPurchasesByUser";
import getProductsByOrder from "./endpoints/getProductsByOrder";
import getProductsBySearch from "./endpoints/getProductsBySearch";
import getUserWithPurchases from "./endpoints/getUserWithPurchases";

const app: Express = express()
app.use(express.json())
app.use(cors())

// Cadastrar Usuario
app.post("/user",createUser)

// Busca por todos os usuários
app.get("/users",getUsers)

// Cadastro de produto
app.post("/products",createProducts)

// Busca por todos os produtos
app.get("/products",getProducts)

// Registro de compra
app.post("/purchases",createPurchases)

// Busca das compras de um usuário
app.get("/users/:userId/purchases",getPurchasesByUser)

// Busca por todos os produtos por ORDER
app.get("/products-order",getProductsByOrder)

// Busca por todos os produtos por SEARCH
app.get("/products-search",getProductsBySearch)

// Busca por todos os usuários e suas compras
app.get("/user-with-purchases",getUserWithPurchases)




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});