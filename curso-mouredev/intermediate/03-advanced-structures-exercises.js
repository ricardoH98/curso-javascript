/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

let fruitObjet = {
    manzana: 1,
    pera: 2,
    platano: 3,
    piña: 4
}

// El operador || para valores no booleanos se comporta como si fuera un +
console.log(fruitObjet['pera'] || 0)
console.log(fruitObjet['kiwi'] || 0)
console.log(fruitObjet['platano'] || 0)
console.log(undefined || 0) // 0
console.log(1 || 0) // 1
console.log(4 || 0) // 4

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

const frutas = ["manzana", "pera", "manzana", "banana", "pera"];
// acc es el acumulador, el primer parámetro de la callback del metodo reduce, y toma como valor inicial un object vacío {}
const frecuencia = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});
console.log(frecuencia);


const words = ['este', ' ', 'string', ' ', 'será', ' ', 'concatenado']
const phrase = words.reduce((acum, current) => acum + current, '')
console.log(phrase)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

const arr = [45, 56, 23, 13, 34, 77]

const newArr = arr.map(element => element ** 3).filter(element => element % 2 === 0)

console.log(newArr)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

const arrayProfundo = [1, [2, [3, [4]]]];
const planoCompleto = arrayProfundo.flat(Infinity); // Todos los niveles
console.log(planoCompleto); // [1, 2, 3, 4]

const arrayConHuecos = [1, 2, , , 3, [4, , 5]];
const plano = arrayConHuecos.flat();
console.log(plano); // [1, 2, 3, 4, 5] (elimina los espacios vacíos)

const arrNums = [1, 2, 3, 4, 5]

const result = arrNums.flatMap((value) => {
    if (value % 2 === 0) {
        return [value * 2]
    } else {
        return []
    }
})

console.log(result)


const numeros = [1, 2, 3];
const secuencias = numeros.flatMap(num => [num, num * 10]);
console.log(secuencias); // [1, 10, 2, 20, 3, 30]

// 4. Ordena un array de números de mayor a menor

let sortedAsc = arr.sort((a, b) => a - b)
console.log(sortedAsc)

let sortedDesc = arr.sort((a, b) => b - a)
console.log(sortedDesc)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const set1 = new Set([3, 4, 9, 7, 8, 6, 22, 23, 24])
const set2 = new Set([3, 4, 2, 1, 5, 6, 26, 25, 24, 21])

const union = new Set([...set1, ...set2])
console.log(union)

// intersección
let intersection = new Set([...set1].filter(element => set2.has(element)))
console.log(intersection)

// in set1 but not in set2
const difference1 = new Set([...set1].filter(element => !set2.has(element)))
console.log(difference1)

// in set2 but not in set 2
const difference2 = new Set([...set2].filter(element => !set1.has(element)))
console.log(difference2)

// 6. Itera los resultados del ejercicio anterior
console.log('Iterando union: ')
union.forEach(element => console.log(element))

console.log('Iterando intersection: ')
intersection.forEach(element => console.log(element))

console.log('Iterando difference1: ')
difference1.forEach(element => console.log(element))

console.log('Iterando difference2: ')
difference2.forEach(element => console.log(element))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

const userMap = new Map([
    [1, { name: "ricardo", age: 27, email: "ricardo@correo.com" }],
    [2, { name: "Mouredev", age: 37, email: "moure@correo.com" }],
    [3, { name: "Brais", age: 47, email: "brais@correo.com" }],
    [4, { name: "sofia", age: 17, email: "sofia@correo.com" }],
    [5, { name: "amanda", age: 15, email: "amanda@correo.com" }],
    [6, { name: "pepe", age: 16, email: "pepe@correo.com" }],
]);

userMap.forEach((value, key) => console.log(key, ' : ', value))

// 8. Dado el mapa anterior, crea un array con los nombres

const arrayFromMap = Array.from(userMap).flat(1)
console.log(arrayFromMap)

const arrObj = arrayFromMap.filter(element => typeof element === "object")
console.log(arrObj)

const arrNames = arrObj.map(element => element.name)
console.log(arrNames)

// opción directa:

const arrNamesDirect = Array.from(userMap).flat(1).filter(element => typeof element === "object").map(element => element.name)

console.log(arrNamesDirect)

// [ 'ricardo', 'Mouredev', 'Brais', 'sofia', 'amanda', 'pepe' ]

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

const arrEmails = [...userMap.values()].filter(element => element.age >= 18).map(element => element.email)

const setEmails = new Set(arrEmails)

console.log(setEmails)

/* Resultado:
Set(3) { 'ricardo@correo.com', 'moure@correo.com', 'brais@correo.com' }
*/


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

// Transformación de map a object
const objectUsers = Object.fromEntries(userMap)
console.log(objectUsers)

// Transformación de object a map
console.log(Object.entries(objectUsers))

let arrPre = Object.entries(objectUsers).map(([id, user]) => {
    const email = user.email
    delete user.email
    return [email, { ...user, id }]
})

// Transformación a Map
let mapArrPre = new Map(arrPre)

console.log(mapArrPre)


/* Resultado:
Map(6) {
  'ricardo@correo.com' => { name: 'ricardo', age: 27, id: '1' },
  'moure@correo.com' => { name: 'Mouredev', age: 37, id: '2' },
  'brais@correo.com' => { name: 'Brais', age: 47, id: '3' },
  'sofia@correo.com' => { name: 'sofia', age: 17, id: '4' },
  'amanda@correo.com' => { name: 'amanda', age: 15, id: '5' },
  'pepe@correo.com' => { name: 'pepe', age: 16, id: '6' }
}

*/

// Nota:

// let obj = {
//     name:'ricardo',
//     age:27,
//     email:'ricardo@corre.com'
// }

// // Agregando un atributo con spread del object

// let id = '1'

// console.log({...obj, id}) // { name: 'ricardo', age: 27, email: 'ricardo@corre.com', id: '1' }