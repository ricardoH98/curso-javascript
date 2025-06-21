export const greaterInArr = (arr) => {

    let maxNumber = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i]
        }

    }

    return maxNumber

}

export const myName = 'ricardo'

export class Employee {

    #email
    #address

    constructor(name, lastName, age, email, address) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.#email = email
        this.#address = address
    }

    get fullName() {
        return `${this.name} ${this.lastName}`
    }

    set completeName(secondName) {
        this.name = `${this.name} ` + secondName
    }

    get showEmail() {
        return this.#email
    }

    set changeAddrees(newAdress) {
        this.#address = newAdress
    }

    get showAddress() {
        return this.#address
    }
}

export default function numberOfVowels(aString) {

    let countOfVowels = 0
    for (const element of aString) {
        switch (element.toLowerCase()) {
            case 'a':
            case 'á':
            case 'e':
            case 'é':
            case 'i':
            case 'í':
            case 'o':
            case 'ó':
            case 'u':
            case 'ú':
                countOfVowels++
                break;

        }
    }

    return countOfVowels
}