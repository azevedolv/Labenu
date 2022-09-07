import { app } from './app'
import { AddressInfo } from "net";
import { signup } from './endpoints/user/signup';
import { login } from './endpoints/user/login';
import { getAllUsers } from './endpoints/user/getAllUsers';
import { getProfile } from './endpoints/user/getProfile';
import { getUserByID } from './endpoints/user/getUserByID';
import { createRecipes } from './endpoints/recipe/createRecipes';
import { getRecipe } from './endpoints/recipe/getRecipe';
import { following } from './endpoints/following/following';
import { unfollowing } from './endpoints/following/unfollowing';
import { getRecipesFromFeed } from './endpoints/recipe/getRecipesFromFeed';
import deleteAccount from './endpoints/user/deleteAccounts';
import deleteRecipe from './endpoints/recipe/deleteRecipe';
import editRecipe from './endpoints/recipe/editRecipe';

//User's endpoints
app.get("/user/feed", getRecipesFromFeed);
app.get("/users", getAllUsers);
app.get("/user/profile", getProfile);
app.get("/user/:id", getUserByID);

app.post("/signup", signup);
app.post("/login", login);
app.post("/user/follow", following);
app.post("/user/unfollow", unfollowing);

app.delete("/user/:id", deleteAccount);


//Recipe's endpoints
app.get("/recipe/:id", getRecipe);

app.post("/recipe", createRecipes);

app.put("/recipe/:id", editRecipe);

app.delete("/recipe/:id", deleteRecipe);

// {
//    "id": "08c5e461-33d8-4720-b2be-76590a6e3257",
//    "name": "Cauã",
//    "email": "reymond@gmail.com"
// }












































export const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
}); 