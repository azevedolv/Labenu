"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/ping", (req, res) => {
    res.status(200).send("pong!");
});
app.listen(3003, () => {
    console.log('Server is running at port 3003');
});
app.post("/new-account", (req, res) => {
    const userName = req.body.name;
    const userCPF = req.body.cpf;
    const userBirthday = req.body.birthday;
    const arrayBirth = userBirthday.split("/");
    const birthYear = Number(arrayBirth[2]);
    const userAge = 2022 - birthYear;
    let errorCode = 400;
    try {
        for (let i = 0; i < data_1.users.length; i++) {
            if (userCPF === data_1.users[i].cpf) {
                errorCode = 401;
                throw new Error("Usuário já existe!");
            }
        }
        if (userAge < 18) {
            errorCode = 401;
            throw new Error("Não é permitido criar contas para pessoas menores de idade.");
        }
        if (!userBirthday || !userCPF || !userName) {
            throw new Error("Alguma informação está inválida!");
        }
        if (userBirthday && userCPF && userName) {
            data_1.users.push({
                name: userName,
                cpf: userCPF,
                birthday: userBirthday,
                balance: 0,
                spending: [{ value: 0, date: "", description: "" }]
            });
            res.status(200).send({ users: data_1.users });
        }
    }
    catch (err) {
        res.status(errorCode).send({ message: err.message });
    }
});
app.get("/balance", (req, res) => {
    const userName = req.query.name;
    const userCPF = req.query.cpf;
    let errorCode = 400;
    try {
        const findAccount = data_1.users.find((user) => {
            return userCPF === user.cpf && userName === user.name;
        });
        if (!findAccount) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!");
        }
        if (!userCPF || !userName) {
            errorCode = 401;
            throw new Error("Algum prâmetro não foi passado ou foi inválido.");
        }
        if (userCPF && userName) {
            res.status(200).send({ Saldo: findAccount === null || findAccount === void 0 ? void 0 : findAccount.balance });
        }
    }
    catch (err) {
        res.status(errorCode).send({ message: err.message });
    }
});
app.post("/deposit", (req, res) => {
    const userName = req.query.name;
    const userCPF = req.query.cpf;
    const deposit = req.body.deposit;
    let errorCode = 400;
    try {
        const findAccount = data_1.users.find((user) => {
            return userCPF === user.cpf && userName === user.name;
        });
        if (!findAccount) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!");
        }
        if (!userCPF || !userName) {
            errorCode = 401;
            throw new Error("Algum prâmetro não foi passado ou foi inválido.");
        }
        if (userCPF && userName && findAccount) {
            const newBalance = findAccount.balance + deposit;
            const balance = Object.assign(Object.assign({}, findAccount), { balance: newBalance });
            res.status(200).send({ balance });
        }
    }
    catch (err) {
        res.status(errorCode).send({ message: err.message });
    }
});
app.put("/payment", (req, res) => {
    const userName = req.query.name;
    const userCPF = req.query.cpf;
    const value = req.body.value;
    const date = req.body.date;
    const description = req.body.description;
    let errorCode = 400;
    try {
        const findAccount = data_1.users.find((user) => {
            return userCPF === user.cpf && userName === user.name;
        });
        const arrayDate = date.split("/");
        const dataParaConverter = `${arrayDate[1]}/${arrayDate[0]}/${arrayDate[2]}`;
        const newDate = new Date(dataParaConverter);
        const hoje = new Date();
        let dataFormatada = ((hoje.getDate())) + "/" + ((hoje.getMonth() + 1)) + "/" + hoje.getFullYear();
        if (!findAccount) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!");
        }
        if (!userCPF || !userName) {
            errorCode = 401;
            throw new Error("Algum prâmetro não foi passado ou foi inválido.");
        }
        if (!value) {
            errorCode = 401;
            throw new Error("O valor da conta a ser paga não foi passado ou foi inválido.");
        }
        if (value > findAccount.balance) {
            throw new Error("O valor da conta a ser paga é maior que o saldo existente.");
        }
        if (userCPF && userName && findAccount && value <= findAccount.balance) {
            if (!date) {
                findAccount.spending.push({
                    value: value,
                    date: dataFormatada,
                    description: description
                });
                const newBalance = findAccount.balance - value;
                const balance = Object.assign(Object.assign({}, findAccount), { balance: newBalance });
                res.status(200).send({ balance });
            }
            if (hoje > newDate) {
                throw new Error("Permitimos apenas o pagamento de contas referntes a hoje ou ao futuro.");
            }
            if (hoje < newDate) {
                findAccount.spending.push({
                    value: value,
                    date: date,
                    description: description
                });
                res.status(200).send({ findAccount });
            }
        }
    }
    catch (err) {
        res.status(errorCode).send({ message: err.message });
    }
});
app.put("/transfer", (req, res) => {
    const userName = req.query.name;
    const userCPF = req.query.cpf;
    const value = req.body.value;
    const destinyUser = req.query.name1;
    const destinyCPF = req.query.cpf1;
    let errorCode = 400;
    try {
        const findAccount = data_1.users.find((user) => {
            return userCPF === user.cpf && userName === user.name;
        });
        const findDestinyAccount = data_1.users.find((user) => {
            return destinyCPF === user.cpf && destinyUser === user.name;
        });
        if (!findAccount) {
            errorCode = 404;
            throw new Error("Usuário remetente não encontrado!");
        }
        if (!findDestinyAccount) {
            errorCode = 404;
            throw new Error("Usuário de destino não encontrado!");
        }
        if (!userCPF || !userName || !destinyUser || !destinyCPF) {
            errorCode = 401;
            throw new Error("Algum prâmetro não foi passado ou foi inválido.");
        }
        if (!value) {
            errorCode = 401;
            throw new Error("O valor a ser transferido não foi passado ou foi inválido.");
        }
        if (value > findAccount.balance) {
            throw new Error("O valor a ser transferido é maior que o saldo existente.");
        }
        if (userCPF && userName && destinyUser && destinyCPF && findDestinyAccount && findAccount) {
            const novoSaldo = findAccount.balance - value;
            const balance = Object.assign(Object.assign({}, findAccount), { balance: novoSaldo });
            const saldoDestino = findDestinyAccount.balance + value;
            const destinyBalance = Object.assign(Object.assign({}, findDestinyAccount), { balance: saldoDestino });
            res.status(200).send({ balance } && { destinyBalance });
        }
    }
    catch (err) {
        res.status(errorCode).send({ message: err.message });
    }
});
//# sourceMappingURL=index.js.map