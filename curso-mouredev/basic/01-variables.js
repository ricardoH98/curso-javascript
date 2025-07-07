/* 3 Formas de declarar variables */

// var (YA NO SE DEBE DECLARAR ASÍ, a menos que sea necesario)

// declarando con var, las variables pueden ser accedidas antes de su declaración, esto devuelve undefined
// console.log(helloWorld) 

// // Declaración inicial
// var helloWorld = "¡Hello, Javascript!"
// console.log(helloWorld)

// // En reasignación de valor, solo se pone el nombre
// helloWorld = "¡Hola, Javascript!"
// console.log(helloWorld)


// let

// Si intentamos acceder a una variable antes de su declaración. el programa ejecuta error
// console.log(helloWorld2)

// Declaración inicial
let helloWorld2 = "¡Hola, Javascrip 2 veces!"

// Reasignación de valor
helloWorld2 = "¡Hello, Javascrip 2 times!"
console.log(helloWorld2)


// const

// Tampoco se puede acceder a la variable antes de su declaración
// console.log(helloWorld3)

// Declaración
const helloWorld3 = "¡Hola, Javascrip 3!"
console.log(helloWorld3)

// cuando se declara con const, se declaran constantes que no pueden mutar su valor, la linea de abajo genera error
// helloWorld3 = "¡Hello world 4!"
// console.log(helloWorld3)


