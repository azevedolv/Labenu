import { performPurchase, verifyAge } from "../src"
import { Casino, LOCATION, NACIONALITY, UserCasino } from "../src/model/Casino"
import { User } from "../src/model/User"

describe("Exercícios aula 62", () => {

    test("Balance greater than value", () => {

        const user: User = {
            name: "LV",
            balance: 150
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "LV",
            balance: 50
        })
    })

    test("Balance equal to the value", () => {

        const user: User = {
            name: "LV",
            balance: 150
        }

        const result = performPurchase(user, 150)

        expect(result).toEqual({
            name: "LV",
            balance: 0
        })
    })

    test("Balance less than value", () => {

        const user: User = {
            name: "LV",
            balance: 150
        }

        const result = performPurchase(user, 200)

        expect(result).not.toBeDefined()
    })
})

describe("Desafio 3 e 4 - Casino", () => {

    test("a Brazilian user who can enter the casino in Brazil", () => {

        const users: UserCasino[] = [{
            name: "LV",
            age: 25,
            nacionality: NACIONALITY.BRAZILIAN
        }]

        const casino: Casino = {
            name: "Cassino GDL",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.allowed).toEqual(["LV"])
    })

    test("An American user who can enter the casino in Brazil", () => {

        const users: UserCasino[] = [{
            name: "Johnny",
            age: 45,
            nacionality: NACIONALITY.AMERICAN
        }]

        const casino: Casino = {
            name: "Joga Cassino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.americans.allowed).toEqual(["Johnny"])
    })

    test("All unallowed", () => {

        const users: UserCasino[] = [
            {
                name: "Johnny",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }, {
                name: "Anne",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Paulo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Amanda",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const casino: Casino = {
            name: "Play Casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toEqual(["Paulo", "Amanda"])
        expect(result.americans.unallowed).toEqual(["Johnny", "Anne"])
    })

    test("Two americans allowed and two brazilians unallowed", () => {

        const users: UserCasino[] = [
            {
                name: "Johnny",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }, {
                name: "Anne",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Paulo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Amanda",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const casino: Casino = {
            name: "Play Casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toEqual(["Paulo", "Amanda"])
        expect(result.americans.allowed).toEqual(["Johnny", "Anne"])
    })

    test("Brazilian allowed", () => {

        const users: UserCasino[] = [{
            name: "LV",
            age: 30,
            nacionality: NACIONALITY.BRAZILIAN
        }]

        const casino: Casino = {
            name: "Joga Cassino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })

    test("American allowed", () => {

        const users: UserCasino[] = [{
            name: "Johnny",
            age: 25,
            nacionality: NACIONALITY.AMERICAN
        }]

        const casino: Casino = {
            name: "Joga Cassino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, users)

        expect(result.americans.unallowed.length).toEqual(0)
    })

    test("All unallowed", () => {

        const users: UserCasino[] = [
            {
                name: "Johnny",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }, {
                name: "Anne",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Paulo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Amanda",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const casino: Casino = {
            name: "Play Casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toContain("Paulo")
        expect(result.americans.unallowed).toContainEqual("Johnny")
    })

    test("Two americans allowed and two brazilians unallowed", () => {

        const users: UserCasino[] = [
            {
                name: "Johnny",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }, {
                name: "Kate",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Fred",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Ney",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const casino: Casino = {
            name: "GROOVE Casino",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })

})

describe("Desafio 5 - Casino", () => {
    test("A Brazillian allowed to be in Brazillian Casino. Verify allowed's length.", () => {
    const users: UserCasino[] = [{
        name: "LV",
        age: 25,
        nacionality: NACIONALITY.BRAZILIAN
    }]

    const casino: Casino = {
        name: "Cassino GDL",
        location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, users)
    expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    expect(result.brazilians.allowed.length).toBeLessThan(2)
})
test("An American guy allowed to be in a brazilian Casino. Verify the unallowed's length.", () => {
    const users: UserCasino[] = [{
        name: "Jordan",
        age: 20,
        nacionality: NACIONALITY.AMERICAN
    }]

    const casino: Casino = {
        name: "Cassino GDL",
        location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, users)  
    
    expect(result.brazilians.unallowed.length).toEqual(0)
})

test("Two americans and two brazilians are 19 years old in an american Casino. Verify a name in unallowed array. ", () => {

    const users: UserCasino[] = [
        {
            name: "Johnny",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }, {
            name: "Kate",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        },
        {
            name: "Fred",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        },
        {
            name: "Ney",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
    ]

    const casino: Casino = {
        name: "GROOVE Casino",
        location: LOCATION.EUA
    }

    const result = verifyAge(casino, users)

    expect(result.brazilians.unallowed).toContainEqual({name: "Fred"})
})
})