// Clase Number

let a = new Number(12)

console.log(a) // [Number: 12]
console.log(a * 2) // 24
console.log(typeof a) // object
console.log(a instanceof Number) // true

// la variable a es una instancia de la clase Number, pero no es un tipo de dato primitivo number, el tipo de a es object

let b = new Number('4')

console.log(b) // [Number: 4]
console.log(b * 2) // 8
console.log(typeof b) // object
console.log(b instanceof Number) // true
console.log(Number.isNaN(b)) // false - b ¿Is not Number? : Falso no es NaN es [Number: 4]

b = new Number('dddddd')
console.log(b) // [Number: NaN]
console.log(b * 2) // NaN
console.log(typeof b) // object
console.log(b instanceof Number) // true
console.log(Number.isNaN(b)) // false ¿Is not Number? : Falso, no es Nan es  [Number: NaN]


/* el método isNaN solo devuelve true cuando evalúa que un dato es NaN explícitamente */
console.log(Number.isNaN(12)) // false
console.log(Number.isNaN('12')) // false
console.log(Number.isNaN('sss')) // false
console.log(Number.isNaN(NaN)) // true

let c = NaN
console.log(Number.isNaN(c)) // true

// Tipo de dato primitivo number

let d = 12
console.log(d) // 12
console.log(typeof d) // number (No es lo mismo que Number)
console.log(d instanceof Number) // false


// comprobando tipos de datos:
console.log(typeof 12 == "number") // true
console.log(typeof '12' == "number") // false
console.log(typeof 'sdsds' == "number") // false

console.log(typeof '12' != "number") // true -> '12' no es tipo de dato number. Comparación por valor
console.log(typeof '12' !== "number") // true -> '12' no es tipo de dato number. Comparación por identidad

// comprobando que números sean enteros:
console.log(Number.isInteger(2)) // true
console.log(Number.isInteger(2.23)) // false
console.log(Number.isInteger('2.23')) // false
console.log(Number.isInteger('2')) // false
console.log(Number.isInteger('dddd')) // false

console.log(!Number.isInteger('dddd')) // true - es como decir 'dddd ¿no es entero?'
console.log(!Number.isInteger(2.23)) // true - es como decir 2.23 ¿no es entero?'

/* Construir una función que sume dos números enteros, la función debe asegurarse de que los sumandos sean de tipo number y sean enteros, y además ninguno de sus sumandos puede ser 0 */

function sumIntegers(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw new TypeError("Esta operación sólo suma números")
    }

    // Si cualquiera de los sumandos no es entero
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }

    // Si alguno de los sumanos es 0
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b) // se pasan los parametros
    }

    return a + b
}

try {
    console.log(sumIntegers(2, 4)) // 6
    console.log(sumIntegers("2", 4)) // Lanza error, se bloquea el programa
} catch (error) {
    console.log(error.message) // Capturamos el error producido en el segundo console.log e imprimimos el mensaje 
}


try {
    console.log(sumIntegers(2.23, 45))
} catch (error) {
    console.log(error.message) // Capturamos el error cuando no se pasan numeros enteros
}

try {
    console.log(sumIntegers(5.5, 10))
    // console.log(sumIntegers("5", 10))
} catch (error) {
    // Devolvemos un mensaje de acuerdo a la instancia del error
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de TIPO:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}

