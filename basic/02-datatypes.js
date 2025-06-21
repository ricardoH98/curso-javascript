// Tipos de datos primitivos (7)

// Cadenas de texto (string)
let myName = "Ricardo Heredia"
let alias = "Richi"
let email = `ricardo060498@gmail.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue // La variable no ha sido asignada, está a la espera de asignarle un valor
console.log(undefinedValue)

// Null
let nullValue = null // Se le asignó el valor null a la variable

// Symbol

/* 
Un Symbol es un tipo de dato primitivo único e inmutable introducido en ES6. Se utiliza principalmente como identificador único para propiedades de objetos, evitando colisiones de nombres.
*/

let mySymbol = Symbol("mysymbol") // Valor único e inmutable, sirve para representar identificadores únicos
console.log(mySymbol)

// BigInt
// Solo es para número enteros y que sean grandes
let myBigInt = BigInt(3984928492834923849238492384923894823948239489238492384923849238492384932)

// Otra forma de declarar
let myBigInt2 = 9842938492849238492384923849238942384923849238492834923894283948239482394823948239n

// Mostrar los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue) // La palabra null es un tipo de dato primitivo, por mas que el type para la variable arroje object

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)




