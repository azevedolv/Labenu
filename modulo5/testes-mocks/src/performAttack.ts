import { Character } from ".";
import { validateCharacter } from "./validateCharacter";

export const perfomAttack = (attacker: Character, defender:Character) =>{
      if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character");  
    } 
    if(defender.defense < attacker.strength) {
    const finalAttack = attacker.strength - defender.defense
    defender.life -= finalAttack
    }
}

export const performAttack2 = (attacker: Character,defender: Character, validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (defender.defense < attacker.strength) {
        const finalAttack = attacker.strength - defender.defense
        defender.life -= finalAttack
    }
  };

  //#region Answer
  //A segunda implementação ajuda a ter certeza que o input não venha vazio e permite personalizações de acordo com cada função e necessidade
  //permite a criação de mocks, ou seja, permite a definição do comportamento das dependencias para cada teste
  //#endregion