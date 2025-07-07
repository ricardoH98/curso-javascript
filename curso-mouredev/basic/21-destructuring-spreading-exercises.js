// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = ['a', 'b', 'c', 'd']

let [letter1, letter2] = myArray

console.log(letter1)
console.log(letter2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [, , letter3 = '', letter4, letter5 = 'e'] = myArray

console.log(letter3)
console.log(letter4)
console.log(letter5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let smartphone = {
    brand: 'Samsung',
    so: 'Android',
    yearOfpurchase: 2022,
    yearsOfuse: 3,
    usbC: true
}

let { brand, usbC } = smartphone

console.log(brand)
console.log(usbC)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { so: sys, brand: model } = smartphone

console.log(sys)
console.log(model)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let fighter = {
    firstName: 'Islam',
    lastName: 'Makhachev',
    age: 31,
    stats: {
        fightWinStrak: 15,
        winsByKnockOut: 5,
        winBySubmission: 13
    }
}

let { stats: { winsByKnockOut, winBySubmission } } = fighter

console.log(winsByKnockOut)
console.log(winBySubmission)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let arr1 = [22, 23, 24, 25, 26]
let arr2 = [33, 34, 35]

let newArr = [...arr1, ...arr2]

console.log(newArr)


// 7. Usa propagación para crear una copia de un array

let myArray3 = [9, 8, 7, 6]

let myArray4 = [...myArray3]

console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person = {
    firstName: 'Jose',
    lastName: 'Galvez',
    age: 24
}

let stats = {
    weight: 85,
    height: 183,
}

let personWithStats = { ...person, ...stats }

console.log(personWithStats)

// 9. Usa propagación para crear una copia de un objeto

let personWithStats2 = { ...personWithStats }

console.log(personWithStats2)

// 10. Combina desestructuración y propagación

let usuario = {
    id: 1,
    nombre: 'Carlos',
    apellido: 'Pérez',
    edad: 32,
    direccion: {
        ciudad: 'Madrid',
        pais: 'España'
    },
    hobbies: ['fútbol', 'lectura', 'viajar']
}

let {nombre, apellido, ...restoDatos} = usuario

console.log(nombre)
console.log(apellido)
console.log(restoDatos) // Se usa propagación para crear un objeto con los datos restantes


// Ejemplo con arrays
const numeros = [1, 2, 3, 4, 5];

const [primero, segundo, ...otrosNumeros] = numeros;

console.log(primero); // 1
console.log(segundo); // 2
console.log(otrosNumeros); // [3, 4, 5]
