type Spending = {
    value:number,
    date:string,
    description:string
  }

type Account ={
    name:string,
    cpf:string,
    birthday:string,
    balance:number,
    spending:Spending[]
}
export const users:Account[] = [
    {
        name: "Luiz Vinícius",
        cpf: "164.041.037-61",
        birthday: "23/10/1996",
        balance: 900,
        spending: [
            {
                value:100,
                date: '03/06/2022',
                description: "Rodízio Japonês"
            }
        ]
    },
    {
        name: "Thayná Rodrigues",
        cpf: "210.041.032-45",
        birthday: "07/07/1997",
        balance: 2200,
        spending: [
            {
                value:100,
                date: '03/06/2022',
                description: "Rodízio Japonês"
            }
        ]
    }
]