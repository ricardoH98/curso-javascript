/*
Clases 29 a 37 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=9096
*/

// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Brais", 37)
person.greet()

// Podemos agregar un método tal cual lo haciamos en un object
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()


// - Abstracción


/* 
En JavaScript, una clase abstracta es un concepto de programación orientada a objetos (POO) que sirve como "molde" para otras clases, pero no puede ser instanciada directamente. Su propósito es definir una estructura común (métodos y propiedades) que las clases hijas deben implementar.

Características clave
1. No se puede instanciar:
    Si intentas crear un objeto directamente desde una clase abstracta, debe lanzar un error.
2. Puede tener métodos abstractos:
    Son métodos sin implementación (solo la firma) que las clases hijas deben definir obligatoriamente.
3. Puede incluir métodos concretos:
    Métodos ya implementados que las clases hijas heredan.
*/

class Animal {
    constructor(name) {
        // No permite instanciar a un objeto de clase Animal
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Error
// const animal = new Animal("Mou")
// console.log(animal)

// - Polimorfismo

/* 
es un principio de la programación orientada a objetos (POO) que permite que un mismo método o propiedad se comporte de manera diferente dependiendo de la clase o el objeto que lo ejecute. En otras palabras:

- Objetos distintos pueden responder al mismo mensaje (método) de forma única.
- Se logra mediante herencia y sobrescritura de métodos.

*/

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("MoureCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("MoureDog")
console.log(dog)
dog.makeSound()


// - Mixins

// Sirve para compartir funcionalidad entre diferentes clases, pero sin necesidad de usar la herencia

const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { }

class Dragon extends Animal { }

class Bat {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)
Object.assign(Bat.prototype, FlyMixin) // Esta clase no hereda de Animal y puede tener el método fly con el mixin


const bird = new Bird("MoureBird")

console.log(bird.name)
bird.fly()

const dragon = new Dragon("MoureDragon")

console.log(dragon.name)
dragon.fly()

const bat = new Bat('Batman')

console.log(bat.name)
bat.fly()


// - Patrón Singleton

// sirve para que una clase solo se puede instanciar una sola vez

class Session {

    constructor(name) {
        if (Session.instance) { // Cuando se asgina por primera vez Session.instance no existe
            return Session.instance
        }
        // Session.instances es un objeto (dado por this), con return devolvemos ese objeto y termina la función de constructor
        // Sobrescribe la instancia y devuelve ese objeto en su lugar.
        // El constructor termina, y la instancia original (this) se descarta.
        this.name = name
        Session.instance = this // Session es una propiedad de la clase, this hace referencia al objeto que se instancia
    }
}

const session1 = new Session("Brais Moure")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2) // True

const session3 = new Session("MoureDev")
console.log(session3.name)
console.log(session2 === session3)


// Ejemplo para analizar Singleton
class Persona {
    constructor(name) {
        this.name = name
        Persona.instance = this // This hace referencia a la instancia actual de la clase
    }

    comprobation() {
        if (Persona.instance) {
            return Persona.instance
        }
    }

}

// Persona.instance es una propiedad estática (pertenece a la clase, no a las instancias).
// this sí hace referencia a la instancia actual durante la ejecución del constructor.

const persona = new Persona('ricardo')
const persona2 = new Persona('Bernabe')

console.log(persona)
console.log(persona.comprobation())
console.log(persona.instance) // instance, no se puede acceder como una propiedad dada en el constructor


console.log(persona2)
console.log(persona2.comprobation())
console.log(persona2.instance) // instance, no se puede acceder como una propiedad dada en el constructor

// - Symbol

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() {
        return this[ID]
    }
}

const user = new User("Brais")
console.log(user)
console.log(user.name)
console.log(user.ID) // no permite acceder, undefined
console.log(user[ID]) // permite acceder al ID
console.log(user.getId()) // aaccedemos al ID


// - instanceof

class Car { }

const car = new Car()

console.log(car instanceof Car)

// - create

const anotherCar = Object.create(Car.prototype) // otra manera de instanciar un objeto en base al prototipo

console.log(anotherCar instanceof Car) // True

// - Proxy

const proxy = {
    // target hace referencia a la instancia, property a la cualquiera de las propiedades
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance, owner, numaccount) {
        this.balance = balance
        this.owner = owner
        this.numaccount = numaccount
    }
}

const account = new Proxy(new BankAccount(100, 'pedro', '88-33-333-444'), proxy)
console.log(account.balance)// activan el get del proxy
console.log(account.owner)// activan el get del proxy
console.log(account.numaccount)// activan el get del proxy

account.balance = 50 // activa el set del proxy
console.log(account.balance)

// Error
// account.balance = -10