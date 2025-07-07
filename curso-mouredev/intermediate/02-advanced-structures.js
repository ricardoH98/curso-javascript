/*
Clases 13 a 22 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4355
*/

// Arrays avanzados

// - Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element)) // recorre los elementos

// map
// devuelve un array con la operación hecha a cada uno de los elementos
let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter
// devuelve un array luego de aplicar el criterio de filtro
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce
// devuelve un number, reduce el array según la operación indicada, va acumulando
let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)

sum = numbers.reduce((result, current) => result * current, 1)
console.log(sum)

// - Manipulación

// flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

let arrWithArrs = [['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'i']]
console.log(arrWithArrs)
let flatarr = arrWithArrs.flat(1)
console.log(flatarr)


const arrayConHuecos = [1, 2, , , 3, [4, , 5]];
const plano = arrayConHuecos.flat();
console.log(plano); // [1, 2, 3, 4, 5] (elimina los espacios vacíos)

// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words) // [ 'Hola', 'mundo', 'Adiós', 'mundo' ] - Combina map() seguido de flat(1) (aplana un nivel de anidación).

let frases = ['Hola mundo', 'Adiós mundo']
let w = frases.map(element => element.split(' '))
console.log(w) // [ [ 'Hola', 'mundo' ], [ 'Adiós', 'mundo' ] ] - map() preserva estos arrays internos, resultando en un array de arrays.

// - Ordenación

// sort

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort() // Por defecto ordena strings, no es necesario colocar un criterio
console.log(sorted) // [ 'a', 'b', 'c', 'd' ]

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)
// La función (a, b) => a - b asegura que el ordenamiento sea numérico ascendente.
// Para orden descendente usarías (a, b) => b - a.

/* 
La función que pasas a sort se llama función de comparación y debe devolver:
Un número negativo si a debe ir antes que b
Un número positivo si a debe ir después que b
0 si son iguales
*/

console.log(sorted)

// reverse

sorted.reverse() // Modifica el estado del array
console.log(sorted)

// find

let firstEven = sorted.find(element => element % 2 === 0) // Deuelve el primer par encontrado, el primer elemento que cumpla con el criterio
console.log('El primer par del arr sorted es: ', firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0) // Devuelve el índice del primer elemento que cumpla con el criterio, si no se cumple el criterio devuelve -1
console.log('El índice del primer par del arr es : ', firstEvenIndex)

// Sets avanzados

// - Operaciones

// Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)] // Spread desenvuelve todos los elemenetos del set y cómo estan entre [] se convierte en un array
console.log(numbersArray) // [ 1, 2, 3, 4, 5, 6 ]

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union) // Set(5) { 1, 2, 3, 4, 5 }

// Intersección

// se hace una intersección de todos los elementos de setA que también se encuentren en setB
const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection) // Set(2) { 2, 3 }

// Diferencia

// Se hace una diferencia, todos los elementos de setA que no se encuentren en setB
const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference) // Set(1) { 1 }

// - Conversión

// Set a Array

console.log([...setA]) // [ 1, 2, 3 ]

// - Iteración

// forEach

setA.forEach(element => console.log(element))

// filter, reduce, flat, flatMap, map, etc son operaciones propias de array, se debe convertir el set para aplicarlas

// Maps avanzados

// - Iteración

let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// console.log(Object.entries({name: 'ricardo', age: 27}))

// - Conversión

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap) // [ [ 'name', 'MoureDev' ], [ 'age', 37 ] ]

// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap) // { name: 'MoureDev', age: 37 }

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject) // Map(2) { 'name' => 'MoureDev', 'age' => 37 }