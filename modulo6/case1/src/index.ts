import  {UserBusiness} from "./business/UserBusiness"
import { app } from "./controller/app"
import { UserController } from "./controller/UserController"


//User
const userBusiness = new UserBusiness()
const userController = new UserController(userBusiness)
//Get AllUsers, UserByID, UserByFirstName, UserByLastName
app.get("/user", userController.getUser)
//GET first name by id
app.get("/firstName/:id", userController.getFirstName)
//GET last name by id
app.get("/lastName/:id", userController.getLastName)
//POST createUser
app.post("/user", userController.createUser)
//DELETE delete All Users
app.delete("/user", userController.deleteUsers)

