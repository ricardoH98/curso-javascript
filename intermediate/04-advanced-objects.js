/*
Clases 24 a 28 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7639
*/

// Objetos avanzados

// - Prototipos y Herencia

// Prototipos

// Todos los objects tienen un prototipo asociado

// El prototipo es una base de propiedades y métodos

let person = {
    name: "Brais",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

// Agregando un método al object person
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

// Herencia
console.log('--------------------------')

let programmer = Object.create(person) // creamos un nuevo object a partir de person
console.log('el protitpo de programmer es: ',Object.getPrototypeOf(programmer))

programmer.language = "JavaScript" // propiedad nueva solo para este object

programmer.name = "MoureDev" // propiedad modificada solo para este object
person.name = 'ricardo'// una ves el object heredero se le asginado un valor a su object, que se modifique el objeto padre no repercute en el hijo

console.log('El name del object person es: ',person.name)
console.log('el language del object person es: ',person.language)
console.log()
console.log('propiedades del object programmer:')
console.log()
console.log('programmer.name: ',programmer.name)
console.log('programmer.age:',programmer.age)
console.log('programmer.language: ',programmer.language) // languaje no existe en person, solo en programmer
programmer.greet()
programmer.sayAge()


/* console.log(person.name)
console.log(programmer.name)

person.name = 'roberto'

console.log(person.name)
console.log(programmer.name)

programmer.name = 'daniel'
console.log(person.name)
console.log(programmer.name)

person.name = 'braulio'
console.log(person.name)
console.log(programmer.name) */

// - Métodos estáticos y de instancia

// Función que actúa como clase de un objeto
function Person(name, age) {
    this.name = name
    this.age = age
}

// Manera de agregar un método a la clase creada en una function
Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

// Instancia de clase Person a variable newPerson
let newPerson = new Person("Brais", 37)
newPerson.greet()

// - Métodos avanzados

// assign

let personCore = { name: "Brais" }
let personDetails = { age: 37, alias: "MoureDev" }

// Combinación de propiedades de dos objects
let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson)) // [ 'name', 'age', 'alias' ]
console.log(Object.values(fullPerson)) // [ 'Brais', 37, 'MoureDev' ]
console.log(Object.entries(fullPerson)) // [ [ 'name', 'Brais' ], [ 'age', 37 ], [ 'alias', 'MoureDev' ] ]


/* Otra manera de combinar dos objects mediante spread (...)
let personName = {
    name:'brenda'
}

let personDetails = {
    age:25,
    alias:'brendadev'
}

const newOb = {...personName, ...personDetails} // { name: 'brenda', age: 25, alias: 'brendadev' }

console.log(newOb) */