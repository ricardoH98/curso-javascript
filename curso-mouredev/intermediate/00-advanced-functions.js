/*
Clases 2 a 11 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=346
*/

// Ciudadanos de primera clase

/* 
En JavaScript, los ciudadanos de primera clase (o first-class citizens) son aquellos elementos del lenguaje que pueden ser tratados como valores, lo que significa que pueden ser:

1. Asignados a variables
2. Pasados como argumentos a funciones
3. Retornados desde funciones
4. Almacenados en estructuras de datos (como arrays u objetos)
*/

// Las funciones son first-class citizens

// Pueden ser asignadas a variables:

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")

// Pueden ser pasados como argumentos a funciones:

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "MoureDev")

// Pueden ser retornadas desde funciones:

function returnGreeting() {
    return greet
}

const greet2 = returnGreeting()
greet2("Brais Moure")


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Arrow functions avanzadas
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

// - Retorno implícito

/* Las arrow functions no necesitan explícitamente la palabra clave return para devolver el valor de una función */
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Brais",
    /* 
    El this en una función normal hace referencia al contexto en donde se encuentra, en este caso this hace referencia al objeto handler,
    por eso podemos acceder a la propiedad name 
    */
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },

    /* 
    El this de una arrow function es léxico, en este caso de la arrow function, hereda el this del ámbito global, ya que este objeto está creado en un ámbito global, por eso muestra undefined
    */
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting() // Hola, Brais
handler.arrowGreeting(); // Hola, undefined ← con el ";" estamos limitando el scope de todo el código anterior, para que las IFFE no se vean afectadas


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// IIFE (Expresión de Función Invocada Inmediatamente)
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* 
Una IIFE (Immediately Invoked Function Expression, en español "Expresión de Función Invocada Inmediatamente") es una función en JavaScript que se define y ejecuta al mismo tiempo.
*/

// Sintaxis básicas

(function () {
    console.log("IIFE clásico")
})(); // ← limitamos el scope para que no afecte a la siguiente IFFE

// Sintaxis con arrow functions

(() => {
    console.log("IIFE con arrow function")
})();

/* 
Características clave:
1. Se auto-ejecuta apenas se define.
2. Tiene su propio scope, evitando contaminación del scope global.
3. Puede recibir parámetros.

*/


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Parámetros Rest (...)
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* Los parámetros recibidos se convierten en un array, podemos pasar una cantidad indefinida de parámetros y lo podemos combinar con
parámetros explícitos */

function sum(...numbers) {
    let result = 0
    numbers.forEach((value) => result += value)

    return result
}

console.log(sum(1, 2, 3, 4, 5)) // se agrupará en un array
console.log(sum(10, 15))

let arr = [22,33,34,34]
console.log(...arr) // desagrupa el array


console.log(sum[22,33,34,34]) // pero no se puede pasar un array como argumento, por eso devuelve undefined


console.log(sum(...arr)) // devuelve 123
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Operador Spread (...)
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

const numbers = [1, 2, 3]

// En este caso se crea una función con parámetros fijos
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread, desempaquetamos un array para que cada parámetro arroje tome un valor

const arrNumbers = [11, 22, 33, 4, 45] // Si la cantidad de elementos es mayor no importa, solo se toman la cantidad de elementos del array que coincida con la cantidad de parámetos
console.log(sumWithSpread(...arrNumbers))

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Closures (Clausuras)
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* 
Un closure (o clausura) es una función que recuerda y accede a variables de su ámbito léxico (scope externo), incluso después de que ese ámbito haya terminado de ejecutarse. Esto permite que una función mantenga acceso a variables que existían cuando fue creada, aunque el contexto original ya no esté activo.

¿Cómo funciona un closure?
En JavaScript, las funciones internas tienen acceso a las variables de las funciones externas donde fueron declaradas, incluso después de que la función externa haya finalizado su ejecución.

*/

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter() // Cómo la función retorna otra función, para el closure debemos asignar a una variable, llama al contexto original cuando counter = 0
counter() // 1
counter() // 2
counter() // 3
counter() // 4

const counter2 = createCounter() // Se reinicia el counter
counter2() // 1
counter2() // 2
counter2() // 3
counter2() // 4

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Recursividad
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

function factorial(n) {
    // Una función recursiva siempre debe tener una condición de parada, para que no se ejecute infinitamente
    if (n <= 1) {
        return 1
    }
    // Aquí se aplica la recursividad
    return n * factorial(n - 1)
}

console.log(factorial(5))

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Funciones parciales
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* 
Las funciones parciales (partial functions) son un concepto de la programación funcional en el que una función se crea fijando algunos de los argumentos de otra función, generando una nueva función con menos parámetros. Esto permite especializar funciones genéricas sin modificar su lógica original.

¿Cómo funcionan?
- Toman una función base y "pre-definen" algunos argumentos.
- Retornan una nueva función que espera los argumentos restantes.
- Son similares al currying, pero no necesariamente descomponen la función en una cadena de funciones unarias.
*/


/* Recordemos:

function sum(...numbers) {
    let result = 0
    numbers.forEach((value) => result += value)

    return result
}

*/

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4) // Fijamos el primero parámetro
console.log(sumWith(2, 3)) // 9 ← 4 + 2+ 3
console.log(sumWith(1, 2)) // 7 ← 4 + 1 + 2


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Currying
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* 
El currying es una técnica de programación funcional que consiste en transformar una función con múltiples argumentos en una secuencia de funciones anidadas, donde cada una recibe un solo argumento y devuelve otra función hasta completar todos los parámetros. Al final, se ejecuta la función original con todos los argumentos acumulados.
*/

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)

console.log('resultado de: currySum(1)(2):', currySum(1)(2)) // [Function (anonymous)]
console.log('resultado de: currySum(1)(2)(3):', currySum(1)(2)(3)) // [Function (anonymous)]
console.log('resultado de: currySum(1)(2)(3)(4):', currySum(1)(2)(3)(4)) // 10 ← 1 + 2 + 3 + 4
console.log('resultado de sumC(3):', sumC(3)) // 9 ← 3 + 3 + 1 + 2
console.log('resultado de sumC(4)', sumC(4)) // 10 ← 4 + 3 + 1 + 2
console.log(sumAB(5)(7)) // 15 ← 5 + 7 + 1 + 2


// Este ejemplo mezcla currying con funciones parciales

function sumar(a, b, c) {
    return a + b + c
}

function curry(fn) {
    // console.log(fn.length) // 3
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
}

const test = curry(sumar)

console.log(test(2,3,4)) // 9
console.log(test(2,3,4,5,7,7)) // 9

console.log(test(2)(7)(8)) // Currying

console.log(test(2,9)(8)) // funciones parciales

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
// Callbacks
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

// esta función recibe un array y una función que ejecutará
function processData(data, callback) {
    const result = sum(...data) // Data será un array que debe ser desagrupado
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

// la función callback puede ser cualquier función con lógica personalizada
processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
// también puede ser una arrow function
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})