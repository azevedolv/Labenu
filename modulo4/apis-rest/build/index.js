"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
];
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get("/ping", (req, res) => {
    res.status(200).send("pong!");
});
app.listen(3003, () => {
    console.log('Server is running at port 3003');
});
app.get('/users', (req, res) => {
    let codeError = 400;
    try {
        res.status(200).send({ users });
    }
    catch (error) {
        res.status(codeError).send({ error });
    }
});
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["NORMAL"] = "NORMAL";
})(UserType || (UserType = {}));
app.get('/userType', (req, res) => {
    let codeError = 400;
    const userType = req.query.type;
    const findType = users.filter((user) => {
        return user.type === userType;
    });
    try {
        if (!userType) {
            codeError = 404;
            throw new Error('Type not found');
        }
        if (userType !== UserType.ADMIN && userType !== UserType.NORMAL) {
            throw new Error("Wrong Type!");
        }
        if (userType === UserType.ADMIN || userType === UserType.NORMAL) {
            res.status(200).send({ findType });
        }
    }
    catch (err) {
        if (res.statusCode === 200) {
            res.status(500)
                .send("Erro inesperado");
        }
        else {
            res.status(codeError).send({ message: err.message });
        }
    }
});
app.get('/userName', (req, res) => {
    let codeError = 400;
    try {
        const name = req.query.name;
        const user = users.find((user) => user.name === name);
        if (!user) {
            codeError = 404;
            throw new Error('User not found');
        }
        res.status(200).send({ user });
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
app.put("/users", (req, res) => {
    let codeError = 400;
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userType = req.body.type;
    const userAge = req.body.age;
    try {
        if (!userName || !userEmail || !userType || !userAge) {
            codeError = 401;
            throw new Error("Algum parâmetro não enviado");
        }
        if (typeof userName !== "string") {
            codeError = 422;
            throw new Error("Nome do usuário inválido ou não enviado");
        }
        if (typeof userEmail !== "string") {
            codeError = 422;
            throw new Error("Email do usuário inválido ou não enviado");
        }
        if (userAge < 0) {
            codeError = 422;
            throw new Error("Idade do usuário inválida");
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === userName) {
                codeError = 409;
                throw new Error("Já existe usuário com esse nome!");
            }
            users.push({
                id: Number(users.length) + 1,
                name: userName,
                email: userEmail,
                type: userType,
                age: userAge
            });
            break;
        }
        res.status(200).send({ users });
    }
    catch (error) {
        res.status(codeError).send({ message: error.message });
    }
});
//# sourceMappingURL=index.js.map