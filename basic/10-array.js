// Array

// Declaración

let myArray = [] // Forma recomendada de usar arrays
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3] // Crea un array con un item, el item es el número 3
myArray2 = new Array(3) // Crea un array que ha reservado 3 espacios vacíos

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4] // array con estos 4 elementos
myArray2 = new Array(1, 2, 3, 4) // array con estos 4 elementos

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log('El método shift: ',myArray.shift()) // Remueve y devuelve el primer elemento de un array
console.log(myArray)

myArray.unshift("Brais", "mouredev") // Añade estos elementos pero al principio de la lista, lo contrario a push
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa para vaciar un array
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) // Devuelve una proción del array, desde el item con index 1 hasta el item con index 3 - 1

console.log(myArray) // ["Brais", "Moure", "mouredev", 37, true]
console.log(myNewArray) // [ "Moure", "mouredev" ]

// splice

myArray.splice(1, 3) // Elimina elementos de un array, primer argumento indica el index del elemento donde se va empezar a elimnar, comienza desde el elemento con index 1, a partir de ese elemento, quitará 3 items.

console.log(myArray) // [ 'Brais', true ]

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada") // Se ubica en el elemento con index 1, a patir de ahí quita 2 elementos, e inserta un nuevo item llamado "Nueva entrada"
console.log(myArray) // [ 'Brais', 'Nueva entrada', 37, true ]