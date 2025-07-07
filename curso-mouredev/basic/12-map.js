// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "mouredev") // La key alias no existe, se alade esta clave - valor
myMap.set("name", "Brais Moure") // la key name ya existe, se actualiza el valor de esta

console.log(myMap)

// get

console.log(myMap.get("name")) // valor de esta key: Brais Moure
console.log(myMap.get("surname")) // no existe esta key en el map -> undefined

// has

console.log(myMap.has("surname")) // false
console.log(myMap.has("age")) // true

// delete

console.log(myMap.delete("email")) // elimina el key-value de email

console.log(myMap)

// keys, values y entries

console.log(myMap.keys()) // [Map Iterator] { 'name', 'age', 'alias' }
console.log(myMap.values()) // [Map Iterator] { 'Brais Moure', 37, 'mouredev' }
console.log(myMap.entries())
/* 
[Map Entries] {
  [ 'name', 'Brais Moure' ],
  [ 'age', 37 ],
  [ 'alias', 'mouredev' ]
}

*/

// size

console.log(myMap.size) // 3

// clear

myMap.clear() // vacía el map

console.log(myMap)