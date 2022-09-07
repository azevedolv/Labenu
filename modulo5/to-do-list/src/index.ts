import { Request, Response } from "express"
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

// Criar usuário
// CREATE TABLE Users (
//     id VARCHAR(255) NOT NULL,
//     name VARCHAR (255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     nickname VARCHAR(255) NOT NULL UNIQUE
//     )
const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email
        })
        .into("Users");
}
app.post("/users", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userName = req.body.name as string
        const userEmail = req.body.email as string
        const userNickname = req.body.nickname as string

        if (!userName || !userEmail || !userNickname) {
            errorCode = 401
            throw new Error("Algum parâmetro não foi passado ou foi inválido!");
        }
        if (userName && userEmail && userNickname) {
            await createUser(
                Date.now().toString(),
                userName,
                userNickname,
                userEmail
            )
            const table = await connection.raw(`SELECT * FROM Users;`)
            res.status(200).send(table[0])
        };
    } catch (err: any) {
        res.status(errorCode).send({
            message: err.message,
        });
    }
})
// Pegar usuário pela id

const getUserById = async (id: string): Promise<any> => {
    const result = await connection("Users")
        .select("id", "nickname")
        .where("id", id)

    return result
}
//não consegui fazer com raw
app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const resultado = await getUserById(id)
        if (!id) {
            res.statusCode = 401
            throw new Error("ID inválida.");
        }
        if (resultado.length === 0) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado");
        }
        res.status(200).send({ user: resultado })
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// Editar usuário
const updateUser = async (id: string, name?: string, email?: string, nickname?: string): Promise<any> => {
    await connection("Users")
        .update({
            name: name,
            email: email,
            nickname: nickname
        })
        .where("id", id);
}
app.put('/users/edit/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const userName = req.body.name;
        const userEmail = req.body.email;
        const userNickname = req.body.nickname
        if (!userEmail && !userName && !userNickname) {
            res.statusCode = 400
            throw new Error("Algum parâmetro deve ser passado para a atualização.");
        }
        if (userName || userEmail || userNickname) {
            await updateUser(id, userName, userEmail, userNickname)
            const resultado = await connection.raw(`SELECT * FROM Users WHERE id = ${id}`)
            res.status(200).send({ user: resultado[0] })
        }

    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

// Criar tarefas
//     CREATE TABLE Tasks (
//         id VARCHAR(255) PRIMARY KEY, 
//     tittle VARCHAR(255) NOT NULL, 
//     description TEXT NOT NULL, 
//     status VARCHAR(255) NOT NULL DEFAULT "to_do",
//     limit_date DATE NOT NULL,
//     creator_user_id varchar(255) NOT NULL,
//     FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
// );
const createTaks = async (
    id: string,
    tittle: string,
    description: string,
    status: string,
    limitDate: string,
    creatorUserID: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            tittle: tittle,
            description: description,
            status: status,
            limit_date: limitDate,
            creator_user_id: creatorUserID
        })
        .into("Tasks");
}
app.post("/task", async (req: Request, res: Response) => {
    try {
        const creatorTasksid = req.body.creator_user_id;
        const tittleTask = req.body.tittle;
        const descriptionTask = req.body.description;
        const statusTask = req.body.status;
        const limitDateTask = req.body.limit_date;

        if (!creatorTasksid || !tittleTask || !descriptionTask || !limitDateTask) {
            res.statusCode = 401
            throw new Error("Algum parâmetro não foi passado! Refaça.");
        }
        if (creatorTasksid && tittleTask && descriptionTask && limitDateTask) {
            function FormataStringData(data: string) {
                var dia = data.split("/")[0];
                var mes = data.split("/")[1];
                var ano = data.split("/")[2];
                return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
            }
            const date = FormataStringData(limitDateTask)
            await createTaks(Date.now().toString(), tittleTask, descriptionTask, statusTask, date, creatorTasksid)
            const resultado = await connection.raw(`SELECT * FROM Users INNER JOIN Tasks ON Users.id = Tasks.creator_user_id`)
            res.status(200).send({ user: resultado[0] })
        }

    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})

//Pegar tarefa pelo id
const getTaksById = async (id: string): Promise<any> => {
    const result = await connection("Tasks")
        .select("id", "tittle", "description", "status", "limit_date", "creator_user_id")
        .where("id", id)

    return result
}
app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const resultado = await getTaksById(id)
        let formatedDate = resultado[0].limit_date
        let realDate = ((formatedDate.getDate())) + "/" + ((formatedDate.getMonth() + 1)) + "/" + formatedDate.getFullYear();

        const formatedTask = { ...resultado[0], limit_date: realDate }

        if (!id) {
            res.statusCode = 401
            throw new Error("ID inválida.");
        }
        if (resultado.length === 0) {
            res.statusCode = 404
            throw new Error("Tarefa não encontrada");
        }
        res.status(200).send({ task: formatedTask })
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
})