// 1. Crea una función que retorne a otra función

function func1() {

    return function func2() {
        console.log('Soy la ejecución de una función en otra función')
    }
}

const myFunc = func1()

myFunc()

// 2. Implementa una función currificada que multiplique 3 números

function multiplication(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

console.log(multiplication(3)(8)(7)) //168

const mult = multiplication(1)(4)

console.log(mult(8)) // 32

// Otra manera:

// Las arrow function con bloques {} no tienen return implícito
const multiplication2 = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}

console.log(multiplication2(8)(7)(6))

// variante con return implícito:

const multiplication3 = a => b => c => a * b * c;

console.log(multiplication3(4)(4)(4))


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

console.log(3 ** 4)

function powerOfaNumber(num, exp) {

    if (exp == 1) {
        return num
    }

    return num * powerOfaNumber(num, exp - 1)
}


console.log(powerOfaNumber(3, 4))

/* 
powerOfaNumber(3, 4) => 3 * powerOfaNumber(3, 3) => 3 * 3 * powerOfaNumber(3, 2)
=>  3 * 3 * 3 * powerOfaNumber(3, 1) => 3 * 3 * 3 * 3 = 81

*/

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(initialVal) {

    let val = initialVal
    return obj = {
        increment: () => {
            val++
            return val
        },
        decrement: () => {
            val--
            return val
        },
        getValue: () => {
            return val
        }
    }
}

const vals = createCounter(3)
console.log(vals.increment()) // 4
console.log(vals.increment()) // 5
console.log(vals.increment()) // 6
console.log(vals.getValue()) // 6
console.log(vals.decrement()) // 5

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    let result = 0

    for (const element of numbers) {
        result += element
    }

    return result * multiplier
}


console.log(sumManyTimes(40, 13, 4, 5, 6, 7, 10))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumParams(callback, ...nums) {
    let result = 0

    for (const element of nums) {
        result += element
    }

    callback(result)
}

function total(result) {
    console.log('El resultado es: ', result)
}

sumParams(total, 3, 4, 5, 6, 7, 8, 9)

// 7. Desarrolla una función parcial

function sumManyTimes2(multiplier) {
    return function (...numbers) {
        let result = 0

        for (const element of numbers) {
            result += element
        }

        return result * multiplier
    }
}

const product = sumManyTimes2(40)
console.log(product(3, 4, 5, 6, 7, 10))

// 8. Implementa un ejemplo que haga uso de Spread

const multiplicationFunction = (a, b, c) => {
    return a * b * c
}

const arrNumbers = [3, 4, 5]

console.log(multiplicationFunction(...arrNumbers))

// 9. Implementa un retorno implícito

const power = (a, b) => a ** b

console.log(power(2,5))

// 10. Haz uso del this léxico

class Person {
    constructor(name) {
        this.name = name;
        this.printName = () => {  // ✅ Arrow function como propiedad de instancia
            console.log(this.name);
        };

        setTimeout(()=>{
            console.log(this.name)
        }, 1000)
    }

    name(){
        console.log(this.name)
    }
}

const person = new Person('pedro')

// person.printName()
// person.setTimeout
person.name


const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());

function foo() {
  this.a = 2;
}

foo();

console.log(a); // 2

function Coche(marca) {
  this.marca = marca;
}
const miCoche = new Coche('Toyota');
console.log(miCoche.marca); // Output: Toyota (this es 'miCoche')


const myObj = {
    nombre: 'Ricardo',
    print: function(){
        console.log(this.nombre)
    },
    arrowPrint:()=>{
        console.log(this.nombre)
    },

    arrowInside: function(){
        const arrowInterna = () => {
            console.log(this.nombre) // Hereda el this de arrowInside
        }
        arrowInterna()
    }
    
}

// myObj.print()
// myObj.arrowPrint()
myObj.arrowInside() // this = myObj







