// Clases
 
// Más información en: https://es.javascript.info/classes

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")

console.log(person)
console.log(person2)

console.log(typeof person) // object

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Brais", 37)

console.log(person3) // DefaultPerson { name: 'Brais', age: 37, alias: 'Sin alias' }

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "MoureDev"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }



}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()

// Propiedades privadas

// Una propiedad privada no es accesible fuera del constructor, no se puede consultar su valor, ni se puede modificar su valor.

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    // Solo dentro de la clase podemos acceder a la propiedad bank, por ejemplo usandolo en este metodo pay
    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank)  // no se imprimira su valor
// person5.bank = "new IBAN123456789" // bank no es #bank, no cambiaremos el valor

console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    // propiedad name es accesible para consultar su valor
    get name() {
        return this.#name
    }

    // Permitimos modificar la propiedad bank, pero no está permitido su consulta
    set bank(bank) {
        this.#bank = bank
    }

    // get bank() {
    //     return this.#bank
    // }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6) // GetSetPerson {} -> las propiedades son privadas
console.log(person6.name) // Brais, si podemos acceder a esta propiedad por el método get 
person6.bank = "new IBAN123456789"

// Construyendo clases simulando parametros nombrados (NO RECOMENDADO, LENGUAJE NO SOPORTA NATIVAMENTE)

// class DefaultPerson2 {
//     constructor({name = "Sin nombre", age, alias = "Sin alias"} = {}) {
//         this.name = name
//         this.age = age
//         this.alias = alias
//     }
// }

// let personN = new DefaultPerson2({age: 13})
// console.log(personN)

// let personM = new DefaultPerson2('jose', 26, 'jj')
// console.log(personM) 

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    // Se sobreescribe el metodo sound heredado de Animal
    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name) // Se mantiene el parametro name de la clase Animal
        this.size = size // Se agrega el parametro size al constructor para Fish
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run() //  El perro corre
myDog.sound() // Guau!

let myFish = new Fish("MoureFish", 10)
myFish.swim() // El pez nada
myFish.sound() // El animal emite un sonido genérico

// Métodos estáticos

class MathOperations {
    // Con un metodo static, no es necesario instanciar una variable para poder hacer uso del metodo
    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))
