"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry = exports.Commerce = exports.Residence = exports.Place = void 0;
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        console.log(this.id);
        return this.id;
    }
    getEmail() {
        console.log(this.email);
        return this.email;
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    introduceYourself() {
        console.log(`Olá! Sou ${this.name}, bom dia!`);
        return `Olá! Sou ${this.name}, bom dia!`;
    }
}
const LVUser = new User(`${Date.now().toString()}`, "lv@gmail.com", "Luiz Vinícius", "lv123456");
class Customer extends User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        console.log(this.creditCard);
        return this.creditCard;
    }
}
const ThayCustumer = new Customer(Date.now().toString(), "thay@gmail.com", "Thayná Rodrigues", "thay1234", "12345678");
ThayCustumer.getCreditCard();
ThayCustumer.getEmail();
ThayCustumer.getId();
ThayCustumer.getName();
console.log(ThayCustumer.purchaseTotal);
ThayCustumer.introduceYourself();
const cliente = {
    name: "LV",
    registrationNumber: 423,
    consumedEnergy: 300,
    calculateBill: () => {
        console.log(2);
        return 2;
    }
};
console.log(cliente.name);
console.log(cliente.registrationNumber);
console.log(cliente.consumedEnergy);
cliente.calculateBill();
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        console.log(this.cep);
        return this.cep;
    }
}
exports.Place = Place;
class Residence extends Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
    getResidentsQuantity() {
        console.log(this.residentsQuantity);
        return this.residentsQuantity;
    }
}
exports.Residence = Residence;
class Commerce extends Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
    getFloorsQuantity() {
        console.log(this.floorsQuantity);
        return this.floorsQuantity;
    }
}
exports.Commerce = Commerce;
class Industry extends Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
    getMachinesQuantity() {
        console.log(this.machinesQuantity);
        return this.machinesQuantity;
    }
}
exports.Industry = Industry;
const casa = new Residence(4, "21665340");
casa.getCep();
casa.getResidentsQuantity();
const comercio = new Commerce(3, "21665213");
comercio.getCep();
comercio.getFloorsQuantity();
const industria = new Industry(14, "21665003");
industria.getCep();
industria.getMachinesQuantity();
//# sourceMappingURL=index.js.map