// 1. Exporta una función

export function printYourName(name) {
    console.log(name)
}

// 2. Exporta una constante

export const myVar = 29

// 3. Exporta una clase

export class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// 4. Importa una función

import {greaterInArr} from "./31-modules-exercises-export.js"

console.log(greaterInArr([33, 23, 45, 66, 12, 13]))

// 5. Importa una constante

import {myName} from "./31-modules-exercises-export.js"

console.log(myName)

// 6. Importa una clase

import {Employee} from "./31-modules-exercises-export.js"

const emp1 = new Employee('juan', 'perez', 23, 'juan@correo.com', 'calle doña hortencia')

console.log(emp1.lastName)
console.log(emp1.fullName)
console.log(emp1.completeName = 'pablo')
console.log(emp1.fullName)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

const myArr = [34, 45, 46]
export default myArr

// Solo se puede exportar una funcionalidad por defecto

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import numeroDeVocales from "./31-modules-exercises-export.js"

console.log(numeroDeVocales('Cuenta las vocales de este texto'))

// solo se puede importar por defecto una sola funcionalidad, en este caso fue una función

// 9. Exporta una función, una constante y una clase desde una carpeta

// Hecho en fichero modules/exports.js

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import substract, {sum, SmartPhone, nameFile} from "./modules/exports.js"

console.log(substract(14, 5))
console.log(sum(14, 5))

console.log(new SmartPhone('Pixel', 'Android'))

SmartPhone.red(true)

console.log(nameFile)