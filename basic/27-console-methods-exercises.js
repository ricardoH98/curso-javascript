// 1. Crea un función que utilice error correctamente

function divNumbers(a, b) {

    if (typeof b == 'undefined') {
        console.info('No se puede ejecutar la función son un solo parámetro')
        return 
        // throw ReferenceError('Tiene que insertar el divisor')
    }

    if (typeof a != "number" || typeof b != "number") {
        throw TypeError('No se puede ejecutar la división, los parámetros deben ser de tipo numérico')
    }

    if (b == 0) {
        console.error('Imposible ejecutar la divsión: ')
        throw new Error("El divisor no puede ser 0")
    }

    if (arguments.length != 2) {
        console.warn('Se ha ingresado más de dos argumentos, solo se dividiran los dos primeros')
    }

    return a / b
}

// console.log(divNumbers(24,0))

// 2. Crea una función que utilice warn correctamente

// console.log(divNumbers(24, 2, 4, 2))

// 3. Crea una función que utilice info correctamente

console.log(divNumbers(24))

// 4. Utiliza table

let data = [
    ["ricardo", 27],
    ["pedro", 21],
    ["juan", 21],
    ["horacio", 21],
]

console.table(data)

// 5. Utiliza group

console.group("Grupo 1:")
console.log("item 1")
console.log("item 2")
console.log("item 3")

// 6. Utiliza time

console.time("time 1")

for (let i = 0; i <= 1000000; i++) {

}
console.timeEnd("time 1")

// 7. Valida con assert si un número es positivo

let num = -2
console.assert(num >= 1, "El número debe ser positivo.")

// 8. Utiliza count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

for (let i = 1; i < 100; i++) {
    console.count("round")
    
}

// 9. Utiliza trace

function funcion1() {
  funcion2();
}

function funcion2() {
  funcion3();
}

function funcion3() {
  console.trace("Mostrando la traza de la pila de llamadas:");
}


funcion1()

// 10. Utiliza clear

console.clear()