// import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import { app } from './app'
import { HashManager } from './services/hashManager'
import { AddressInfo } from "net";
import getUserByToken from './endpoints/getUserByToken';


const senhaCriptografada = new HashManager().createHash("batata")

// console.log(senhaCriptografada)

const compare = new HashManager().compareHash("batata", senhaCriptografada)

// console.log(compare)

app.post('/user/signup', createUser)
app.post('/user/login', login)
// app.put('/user/edit/', editUser)
app.get('/user/profile', getUserByToken)














































export const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});