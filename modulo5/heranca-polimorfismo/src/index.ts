//EXERCÍCIO 1 ========================================================
//a)*Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// RESPOSTA: não, pois é um atributo privado, daria para imprimir caso fosse criado um getters para buscar a senha
//b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//RESPOSTA: 1 VEZ
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor( id: string, email: string, name: string, password: string){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
        console.log(this.id);      
          return this.id
      }
  
      public getEmail(): string {
        console.log(this.email);     
          return this.email
      }
  
      public getName(): string {
        console.log(this.name);        
          return this.name
      }
      public introduceYourself():string{
        console.log(`Olá! Sou ${this.name}, bom dia!`);
        return `Olá! Sou ${this.name}, bom dia!`
      }
  }
  const LVUser = new User(`${Date.now().toString()}`, "lv@gmail.com", "Luiz Vinícius", "lv123456")
//EXERCÍCIO 2 ===========================================================

// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
// RESPOSTA : 1 vez
// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
// RESPOSTA : 2 vezes, pois como a classe User também é chamada pela classe Customer, que é filha de User, o código passa duas vezes por User

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor( id: string, email: string, name: string, password: string, creditCard: string) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
        console.log(this.creditCard);       
      return this.creditCard;
    }
  }
  const ThayCustumer = new Customer(Date.now().toString(), "thay@gmail.com", "Thayná Rodrigues", "thay1234", "12345678")

  //EXERCÍCIO 3 ====================================================================
  //IMPRIMIR TODAS AS INFOS
  ThayCustumer.getCreditCard(); 
  ThayCustumer.getEmail();
  ThayCustumer.getId();
  ThayCustumer.getName();
  console.log(ThayCustumer.purchaseTotal);
//a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
//Sem a criação de um getter para isso, não. Pois é um atributo privado

//EXERCÍCIO 4 =======================================================================
// CRIAR METODO INTRODUCEYOURSELF EM USER E CHAMAR EM CUSTOMER
ThayCustumer.introduceYourself()
//EXERCÍCIO 5 =======================================================================
// MUDAR INTRODUCEYOURSELF() PARA FALAR O NOME DO USUÁRIO


// POLIMORFISMO ========================================================================
//EXERCÍCIO 1 ========================================================================
//Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que dar uma implementação para o método calculateBill(). Por enquanto, implemente de tal forma que sempre retorne 2 (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const cliente : Client = { 
    name:"LV",
    registrationNumber: 423,
    consumedEnergy: 300,
    
    calculateBill: () => {
        console.log(2);
        
        return 2
    }
  }
  console.log(cliente.name);
  console.log(cliente.registrationNumber);
  console.log(cliente.consumedEnergy);
  cliente.calculateBill()
  


  //a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// O método calculateBill() não fica com a impressão explítica, aparece : [Function: calculateBill]; se colocar o console.log dentro da função da certo


//EXERCÍCIO 2 ================================================================================
export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
        console.log(this.cep);
        
          return this.cep;
    }
  }
 //a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
//   const lugar = new Place("21665340")
  //RESPOSTA : Não é possível criar instância de classe abstrata

  //b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
  //RESPOSTA: deixar de declarar como abstract e atribuir o constructor do cep de acordo com o parâmetro enviado pelo usuário
//   const lugar = new Place("21665340")
//   const get = lugar.getCep()
//   console.log(get);
  



 //EXERCÍCIO 3 =====================================================================================
    // Esse exercício vai responder melhor a essas três perguntas: 
    // 1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
    // RESPOSTA: criar classes baseadas na classe Place, através da sintaxe extends Place;
    //criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.


    //As propriedades que uma classe herda de uma interface são sempre públicas. Logo, não temos a liberdade de modificar o acesso delas. 


    // 2) *Por que a `Place` não é uma interface?*
    // Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.
    
    // 3) *Por que a classe `Place` é uma Classe Abstrata?*
    //Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe;
    //O nosso sistema possui 3 tipos de lugares e preferimos criar uma classe para representar cada um deles.

    export class Residence extends Place {
        constructor(protected residentsQuantity: number, cep: string) {//maneiras de usar a classe abstrata
          super(cep);
        }
        public getResidentsQuantity(): number {
            console.log(this.residentsQuantity);
            return this.residentsQuantity
          }
      }
      export class Commerce extends Place {
        constructor(protected floorsQuantity: number, cep: string) { // serve de forma para outras classes
          super(cep);
        }
        public getFloorsQuantity(): number {
            console.log(this.floorsQuantity);
            return this.floorsQuantity;
          }
      }
      export class Industry extends Place {
        constructor(protected machinesQuantity: number,cep: string) {//fomra curta de sintaxe dos atributos e constructor
              super(cep);
        }
        public getMachinesQuantity(): number {
            console.log(this.machinesQuantity);
            return this.machinesQuantity;
          }
      }

// Agora, crie uma instância de cada uma das classes novas. Imprima no console o CEP de cada uma delas, através do método getCep herdado da classe Place.
const casa = new Residence(4, "21665340")
casa.getCep()
casa.getResidentsQuantity()
const comercio = new Commerce(3, "21665213")
comercio.getCep()
comercio.getFloorsQuantity()
const industria = new Industry(14, "21665003")
industria.getCep()
industria.getMachinesQuantity()





