// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev") // Se borra indicando el elemento, no se puede indicar posición a un set

console.log(mySet)

console.log(mySet.delete("Brais")) // Elimina el elemento y devuelve true
console.log(mySet.delete(4)) // Si el elemento no existe dentro del set devuelve false

console.log(mySet)

// has

console.log(mySet.has("Moure")) // True
console.log(mySet.has("Brais")) // False

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)

// Elimina duplicados de un array

let duplicatedArray = [1, 1, 2, 2, 2, 4, 4, 4, 5, 5]

let cleanSet = new Set(duplicatedArray)

console.log(cleanSet)