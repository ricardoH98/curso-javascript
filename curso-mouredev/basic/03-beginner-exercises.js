// 1. Escribe un comentario en una línea

// Comentario en 1 linea

// 2. Escribe un comentario en varias líneas

/* Comentario
en varias
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "mi cadena de texto"
let myNumber = 45.32
let myBoolean = true
let myUndefinedValue
let myNull = null
let mySymbol = Symbol(45)
let myBigInt = BigInt(94349324923429348293849238492384923849238493289483294829348293489238492384923)


// 4. Imprime por consola el valor de todas las variables

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefinedValue)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myUndefinedValue)
console.log(typeof myNull)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "otra cadena de texto"
myNumber = 56
myBoolean = false
mySymbol = Symbol("otrosymbol")
myBigInt = 9384938493849384938498294829348928439238948294823n

console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(mySymbol)
console.log(myBigInt)

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 32
myNumber = "mi numero"
myBoolean = 4555
myUndefinedValue = BigInt(9348938493849384938493894839489358495849854958)
myNull = 34.56
mySymbol = null
myBigInt = undefined


console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefinedValue)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

console.log("El type ahora es:",typeof myString)
console.log("El type ahora es:",typeof myNumber)
console.log("El type ahora es:",typeof myBoolean)
console.log("El type ahora es:",typeof myUndefinedValue)
console.log("El type ahora es:",typeof myNull)
console.log("El type ahora es:",typeof mySymbol)
console.log("El type ahora es:",typeof myBigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myNewString = "Este es un string const"
const myNewNumber = 3455
const myNewBoolean = true
const myNewUndefinedValue = undefined
const myNewNullValue = null
const myNewSymbol = Symbol("Nuevo Symbol")
const myNewBigInt = 98539284923948239489328493284932842938492349823948923849238423n

console.log("El type es:",typeof myNewString)
console.log("El type es:",typeof myNewNumber)
console.log("El type es:",typeof myNewBoolean)
console.log("El type es:",typeof myNewUndefinedValue)
console.log("El type es:",typeof myNewNullValue)
console.log("El type es:",typeof myNewSymbol)
console.log("El type es:",typeof myNewBigInt)


// 9. A continuación, modifica los valores de las constantes

// myNewString = "Modificando cadena"
// myNewNumber =  44343

/*
myNewBoolean
myNewUndefinedValue
myNewNullValue
myNewSymbol
myNewBigInt
 */
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse