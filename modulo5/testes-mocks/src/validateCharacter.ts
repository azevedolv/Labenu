import { Character } from "./index"

export const validateCharacter = (character:Character):boolean =>{
    if(!character.name||character.life==undefined||character.defense ==undefined||character.strength==undefined){
        return false
    }
    if(character.life <=0||character.defense <=0||character.strength <=0){
        return false
    }

    return true
}