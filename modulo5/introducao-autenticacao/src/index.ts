import app from "./app"
import createUser from './endpoints/createUser'
import { IDGenerator } from "./services/IDGenerator"
import loginUser from './endpoints/loginUser'
import getUserByEmail from "./endpoints/getUserByEmail"
import getUserByToken from "./endpoints/getUserByToken"


app.post('/user/signup', createUser)
app.post('/login', loginUser)
app.get('/user/info', getUserByEmail)
app.get('/user/profile', getUserByToken)

