"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    constructor(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    latir() {
        console.log("au au 🐶");
    }
    comer(quantidade) {
        console.log("O Cachorro comeu " + quantidade + "kg de comida");
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map