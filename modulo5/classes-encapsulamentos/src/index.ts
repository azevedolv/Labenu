//###Exercício 1

// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
// RESPOSTA: executa ações em instâncias de classe utilizando as características da classe como parâmetro
// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). 
//Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//RESPOSTA: uma vez só
type Transaction = {
    description: string,
    value: number,
    date: string
}
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[];

    constructor(cpf: string, name: string, age: number, transactions:Transaction[], balance:number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
        this.balance = balance
    }
    public getCpf(): void {
        console.log(this.cpf);
    }
    public getName(): void {
        console.log(this.name);
    }
    public getage(): void {
        console.log(this.age);
    }
    public getTransactions(): void {
        console.log(this.transactions);
    }
    public getBalance(): void {
        console.log(this.balance)
    }
    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}


// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
// RESPOSTA: criando getters dentro da classe e chamando essas funções fora dela com progrmação orientada a objeto
// const transacao = new Transaction1("Aula 52", 140, "2002-03-12")
// const pegaNome = LV.getName()
// LV.getTransactions()

//###Exercício 2


class Transaction1 {
    private transacao:Transaction

    constructor(transacao:Transaction) {
        console.log("Chamando o construtor da classe Transaction1")
        this.transacao = transacao
    }
    public getTransacao(): Transaction {
        return (this.transacao);
    }

    // public getDescription(): void {
    //     console.log(this.description);
    // }
    // public getValue(): void {
    //     console.log(this.value);
    // }
    // public getDate(): void {
    //     console.log(this.date);
    // }

}
const transacao = new Transaction1({description:"Aula 52", value:140, date:"2002-03-12"})
const LV = new UserAccount("164.041.037-61", "Luiz Vinícius", 25, [transacao.getTransacao()], 5000)
LV.getTransactions()
LV.setTransactions({description:"teste add", value: 500, date:"2022-10-23"})
LV.getTransactions()


//###Exercício 3
class Bank {
    private accounts: UserAccount[];
    
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccounts(): void {
        console.log(this.accounts)
    }
    public setAddAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }

  }
  const transacao2 = new Transaction1({description:"Aula 52", value:140, date:"2002-03-12"})
  const Books = new UserAccount("111.222.333-44", "Books", 23, [transacao2.getTransacao()], 5000)
  const contas = new Bank([LV, Books])
  contas.getAccounts()