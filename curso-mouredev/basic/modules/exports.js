export function sum(a, b) {
    return a + b
}

export default function resta(a, b) {
    return a - b
}

export const nameFile = "exports.js"

export class SmartPhone {
    constructor(brand, so) {
        this.brand = brand
        this.so = so
    }

    turnOn() {
        console.log(`Encendiendo el teléfono ${this.brand}, sistema operativo ${this.so}`)
    }

    static red(r = true) {
        if (r) {
            return console.log('El smartphone tiene 5g')
        } else {
            return console.log('El smartphone no tiene 5g')
        }
    }
}

// const nombre = 'ricardo' 
// export default nombre ← No puede ser exportado por defecto porque arriba ya exportamos por defecto una función, genera error