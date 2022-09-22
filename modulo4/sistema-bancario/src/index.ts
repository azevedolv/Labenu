import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data'


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

app.post("/new-account", (req: Request, res: Response)=>{
  const userName: string = req.body.name
  const userCPF: string = req.body.cpf
  const userBirthday: string = req.body.birthday
  const arrayBirth:string[] = userBirthday.split("/")
  const birthYear:number = Number(arrayBirth[2])
  const userAge:number = 2022 - birthYear
  let errorCode = 400
try{
  
for(let i = 0; i < users.length; i++){
  if(userCPF === users[i].cpf){
    errorCode = 401
    throw new Error("Usuário já existe!");
  }
}
  if(userAge < 18){
    errorCode = 401
    throw new Error("Não é permitido criar contas para pessoas menores de idade.");
  }
  if(!userBirthday || !userCPF || !userName){
    throw new Error("Alguma informação está inválida!");
    
  }
  if(userBirthday && userCPF && userName){
    users.push({
      name: userName,
      cpf: userCPF,
      birthday: userBirthday,
      balance: 0,
      spending: [{value:0, date: "", description:""}]
})
  res.status(200).send({users})
  }
  
}catch(err:any){
      res.status(errorCode).send({message: err.message})
  }
})

app.get("/balance", (req:Request, res:Response)=>{
  const userName: string = req.query.name as string
  const userCPF : string = req.query.cpf as string
  let errorCode = 400
  try{
  const findAccount = users.find((user)=>{
    return userCPF === user.cpf && userName === user.name
  })
  if(!findAccount){
    errorCode = 404
    throw new Error("Usuário não encontrado!");
  }
  if(!userCPF || !userName){
    errorCode = 401
    throw new Error("Algum prâmetro não foi passado ou foi inválido.");
    
  }
  if(userCPF && userName){
    res.status(200).send({Saldo: findAccount?.balance})
  }
  }catch(err:any){
    res.status(errorCode).send({message: err.message})
  }
})

app.post("/deposit", (req: Request, res: Response)=>{
  const userName: string = req.query.name as string
  const userCPF : string = req.query.cpf as string
  const deposit: number = req.body.deposit as number
  let errorCode = 400
  try{
  const findAccount = users.find((user)=>{
    return userCPF === user.cpf && userName === user.name
  })
  if(!findAccount){
    errorCode = 404
    throw new Error("Usuário não encontrado!");
  }
  if(!userCPF || !userName){
    errorCode = 401
    throw new Error("Algum prâmetro não foi passado ou foi inválido.");
  }
  if(userCPF && userName && findAccount){
    const newBalance = findAccount.balance + deposit
    const balance = {...findAccount, balance: newBalance }
    res.status(200).send({balance})
  }
  }catch(err:any){
    res.status(errorCode).send({message: err.message})
  }
})

app.put("/payment", (req:Request, res:Response)=>{
  const userName: string = req.query.name as string
  const userCPF : string = req.query.cpf as string
  const value:number = req.body.value
  const date :string = req.body.date
  const description:string = req.body.description
  
  let errorCode = 400
 
  try{
    const findAccount = users.find((user)=>{
      return userCPF === user.cpf && userName === user.name
    })
    const arrayDate:string[] = date.split("/")
    const dataParaConverter = `${arrayDate[1]}/${arrayDate[0]}/${arrayDate[2]}`
    const newDate = new Date(dataParaConverter)
    const hoje = new Date() 
    let dataFormatada = ((hoje.getDate() )) + "/" + ((hoje.getMonth() + 1)) + "/" + hoje.getFullYear()
    
    if(!findAccount){
      errorCode = 404
      throw new Error("Usuário não encontrado!");
    }
    if(!userCPF || !userName){
      errorCode = 401
      throw new Error("Algum prâmetro não foi passado ou foi inválido.");
    }
    if(!value){
      errorCode = 401
      throw new Error("O valor da conta a ser paga não foi passado ou foi inválido.");
    }
    if(value > findAccount.balance){
      throw new Error("O valor da conta a ser paga é maior que o saldo existente.");
    }
    if(userCPF && userName && findAccount && value <= findAccount.balance){
      if(!date){
        findAccount.spending.push({
          value: value,
          date: dataFormatada,
          description: description
        })
        const newBalance = findAccount.balance - value
        const balance = {...findAccount, balance: newBalance}
        res.status(200).send({balance})
      }
      if (hoje > newDate) { 
        throw new Error("Permitimos apenas o pagamento de contas referntes a hoje ou ao futuro.");
        }
      if (hoje < newDate) {
        findAccount.spending.push({
          value: value,
          date: date,
          description: description
        })
        res.status(200).send({findAccount})
      }
    } 
  }catch(err:any){
    res.status(errorCode).send({message: err.message})
  }
})

app.put("/transfer", (req:Request, res:Response) =>{
  const userName: string = req.query.name as string
  const userCPF : string = req.query.cpf as string
  const value:number = req.body.value
  const destinyUser = req.query.name1
  const destinyCPF = req.query.cpf1
  let errorCode = 400
 
  try{
    const findAccount = users.find((user)=>{
      return userCPF === user.cpf && userName === user.name
    })
    const findDestinyAccount = users.find((user)=>{
      return destinyCPF === user.cpf && destinyUser === user.name
    })
    if(!findAccount){
      errorCode = 404
      throw new Error("Usuário remetente não encontrado!");
    }
    if(!findDestinyAccount){
      errorCode = 404
      throw new Error("Usuário de destino não encontrado!");
    }
    if(!userCPF || !userName || !destinyUser || !destinyCPF){
      errorCode = 401
      throw new Error("Algum prâmetro não foi passado ou foi inválido.");
    }
    if(!value){
      errorCode = 401
      throw new Error("O valor a ser transferido não foi passado ou foi inválido.");
    }
    if(value > findAccount.balance){
      throw new Error("O valor a ser transferido é maior que o saldo existente.");
    }
    if(userCPF && userName && destinyUser && destinyCPF && findDestinyAccount && findAccount){
      const novoSaldo = findAccount.balance - value
      const balance = {...findAccount, balance: novoSaldo}
      const saldoDestino = findDestinyAccount.balance + value
      const destinyBalance = {...findDestinyAccount, balance: saldoDestino}
        res.status(200).send({balance})
    }
  }catch(err:any){
    res.status(errorCode).send({message: err.message})
  }
})