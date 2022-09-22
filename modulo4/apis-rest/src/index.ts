import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
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
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


//1-a)método get b)entidade "/users" - dando a entender que vai pegar os usuários
app.get('/users', (req: Request, res: Response) =>{
  let codeError: number = 400
  try{
    res.status(200).send({users})
  } catch (error){
    res.status(codeError).send({error})
  }
})
//2-
type Users = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}
enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}
app.get('/userType', (req: Request, res: Response) =>{
  let codeError: number = 400
  const userType = req.query.type
  const findType:Users[] = users.filter((user)=>{
    return user.type === userType
  })
  try{
    if(!userType){
      codeError = 404
      throw new Error('Type not found')
    }
    if(userType !== UserType.ADMIN && userType !== UserType.NORMAL){
      
      throw new Error("Wrong Type!"); 
    }
    if(userType === UserType.ADMIN || userType === UserType.NORMAL){
      res.status(200).send({findType})
    }
  } catch (err:any){
    if (res.statusCode === 200) {
      res.status(500)
        .send("Erro inesperado")
    } else {
      res.status(codeError).send({message: err.message})

    }
  }
})

//3-a) query params b)

app.get('/userName', (req: Request, res: Response) =>{
  let codeError: number = 400
  try{
    const name : string = req.query.name as string
    const user: Users | undefined = users.find((user) => user.name === name)
    if(!user){
      codeError = 404
      throw new Error('User not found');
    }
    res.status(200).send({user})
  } catch (error:any){
    res.status(codeError).send({message: error.message})
  }
})


//4)
app.put("/users", (req:Request, res:Response)=>{
  let codeError = 400
  const userName:string = req.body.name
  const userEmail:string = req.body.email
  const userType:UserType = req.body.type
  const userAge:number = req.body.age

  try {
    if (!userName || !userEmail || !userType || !userAge) {
      codeError = 401
      throw new Error("Algum parâmetro não enviado");

    }
    if (typeof userName !== "string") {
      codeError= 422
      throw new Error("Nome do usuário inválido ou não enviado");

    }
    if (typeof userEmail !== "string") {
      codeError = 422
      throw new Error("Email do usuário inválido ou não enviado");

    }
    if (userAge < 0) {
      codeError = 422
      throw new Error("Idade do usuário inválida");

    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === userName) {
        codeError = 409
        throw new Error("Já existe usuário com esse nome!")
      }
      users.push({
        id: Number(users.length) + 1,
        name: userName,
        email:userEmail,
        type: userType,
        age: userAge
      })
      break
    }
    res.status(200).send({ users })
  }
  catch (error:any){
    res.status(codeError).send({message: error.message})
  }
})
//4-a) além de adicionar salva os que já foram adicionados
//b)sim, achei apropriado