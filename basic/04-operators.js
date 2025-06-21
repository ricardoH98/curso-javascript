// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multipliación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación

a = 5
b = 10

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 5) // Igualdad por valor
console.log(a == "5") // Igualdad por valor
console.log(5 == "5") // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor)
console.log(a === 5)
console.log(a === "5") // No son el mismo tipo de dato, mismo valor sí pero no mismo tipo de dato

console.log(a != 5) // False, tienen el mismo valor
console.log(a !== "5") // True, no son idénticos, tienen mismo valor pero no mismo tipo de dato

console.log(0 == false) // True
console.log(1 == true) // True
console.log(2 == false)

console.log("Peculiridad del 0 y strings vacios")

console.log(0 == "") // True
console.log(0 == " ") // True
console.log(0 == '') // True
console.log(0 == 'Hola') // False
console.log(0 === "") // False
console.log(undefined == null) // True
console.log(undefined === null) // False

// Truthy values (valores verdaderos)

// Todas las cadenas de texto menos la vacías
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// el boolean false
// Cadena de texto vacías

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 < 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

console.log(5 > 10 && 15 > 20 || 30 < 40) // True

// not (!)
console.log(!true) // False
console.log(!false) // True
console.log(!(5 > 10 && 15 > 20)) // True
console.log(!(5 > 10 || 15 > 20)) // True

// Operadores ternarios

const isRainning = false

// Si es true, se ejecuta console de la izquierda, si es false el console de la derecha
isRainning ? console.log('Está lloviendo') : console.log('No está lloviendo')