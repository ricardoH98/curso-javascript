// 1. Crea una variable para cada operación aritmética

let mySum = 5 + 45
let myRest = 56 - 23
let myMult = 34 * 32
let myDiv = 12 / 5
let myMod = 30 % 3
let myPot = 4 ** 2

console.log("El valor de mySum es: ", mySum )
console.log("El valor de myRest es: ", myRest )
console.log("El valor de myMult es: ", myMult )
console.log("El valor de myDiv es: ", myDiv )
console.log("El valor de myMod es: ", myMod )
console.log("El valor de myPot es: ", myPot )


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asigSum = 5 + 45
asigSum += 3

let asigRest = 56 - 23
asigRest -= 4

let asigMult = 34 * 32
asigMult *= 5

let asigDiv = 12 / 5
asigDiv /= 3

let asigMod = 30 % 3
asigMod %= 3

let asigPot = 4 ** 2
asigPot **= 3

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log('a' != 'A') 
console.log(7 == '7') // true, son iguales por valor
console.log(23 === 23) // false, no son identicos
console.log(34 >= 31)
console.log(12 < 15)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(23 === '23')
console.log(8 != '8')
console.log(2 == true)
console.log(7 < 2)
console.log(3 > 33)

// 5. Utiliza el operador lógico and

console.log(34 < 233 && 100 > 99)

// 6. Utiliza el operador lógico or

console.log(undefined==null || 1 < 0)

// 7. Combina ambos operadores lógicos

let myVar = 54 > 23 && 8 == '8' || 23 > 12
console.log('El valor de myVar es', myVar)

// 8. Añade alguna negación

let myNewVar = 54 > 23 && !(8 == '8') || 23 > 12
console.log('El valor de myNewVar es', myNewVar)

// 9. Utiliza el operador ternario

const evaluation = 54 > 23 && !(8 == '8') || 23 > 12

evaluation ? console.log('la evaluación es true') : console.log('la evaluación es false')


// 10. Combina operadores aritméticos, de comparáción y lógicas

const operation = (12 - 34 > 12 * 8) || (33 / 7 <= 26 % 15) && (3 ** 4 > 234 + 1900)

operation ? console.log('la evaluación es true') : console.log('la evaluación es false')