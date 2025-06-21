let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis arrays

// Se está asignando a una variable cada uno de los items un array
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados

// Asignamos un valor por defecto si es que esta variable no llega a coger un valor de item del array
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) // toma el valor de 0

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray // [1, 2, 3, 4]
console.log(myValue10) // toma el valor 1
console.log(myValue13) // toma el valor 4

// Sintaxis objects

// para asignar variables a los elementos de un object, debemos usar el nombre de sus propiedades (keys)
let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email) // toma el valor por defecto

// Sintaxis objects con nuevos nombres de variables

let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let { name: name4, job: { name: jobName } } = person3

console.log(name4) // Brais
console.log(jobName) // Programador

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)