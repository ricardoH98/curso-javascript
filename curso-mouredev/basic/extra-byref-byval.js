// Ejemplo de asignación por referencia
let myArray = [1, 2, 3, 4]

let myArray2 = myArray // myArray2 hace referencia la misma dirección de memoria de myArray

myArray2.push(34) // Si modificamos myArray2, se modifica la lista original

console.log(myArray2)
console.log(myArray)

// Ejemplo de paso por valor

let myArray3 = [9, 8, 7, 6]

let myArray4 = [...myArray3] // Pasamos por valor myArray3, se crea otra dirección de memoria para la lista de myArray4

myArray4.push(2) // Solo se modifica myArray4

console.log(myArray4)
console.log(myArray3)