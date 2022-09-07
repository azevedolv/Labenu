import { Character } from "../src"
import { validateCharacter } from "../src/validateCharacter"

describe("validation test for some Tekken's Characteres.", ()=>{
    test("Verify character's name ''.", ()=>{
        // try {
            const character:Character={
                name: "",
                life: 1000,
                defense: 400,
                strength: 11000
            }

            const result = validateCharacter(character)
            expect(result).toBe(false)
        // } catch (error) {
            
        // }
    })
    test("Verify character's life = 0", ()=>{
        // try {
            const character:Character={
                name: "Yushimitso",
                life: 0,
                defense: 400,
                strength: 11000
            }

            const result = validateCharacter(character)
            expect(result).toBe(false)
        // } catch (error) {
            
        // }
    })
    test("Verify character's strength = 0.", ()=>{
        // try {
            const character:Character={
                name: "Jack 5",
                life: 1000,
                defense: 400,
                strength: 0
            }

            const result = validateCharacter(character)
            expect(result).toBe(false)
        // } catch (error) {
            
        // }
    })
    test("Verify character's defense =0 .", ()=>{
        // try {
            const character:Character={
                name: "Christie",
                life: 1000,
                defense: 0,
                strength: 11000
            }

            const result = validateCharacter(character)
            expect(result).toBe(false)
        // } catch (error) {
            
        // }
    })
    test("Verify character's life, defense or strength with a negative value.", ()=>{
        // try {
            const character:Character={
                name: "Raven",
                life: -1000,
                defense: 400,
                strength: 11000
            }

            const result = validateCharacter(character)
            expect(result).toBe(false)
        // } catch (error) {
            
        // }
    })
    test("A valid character.", ()=>{
        // try {
            const character:Character={
                name: "Ed",
                life: 1000,
                defense: 400,
                strength: 11000
            }

            const result = validateCharacter(character)
            expect(result).toBe(true)
        // } catch (error) {
            
        // }
    })
})