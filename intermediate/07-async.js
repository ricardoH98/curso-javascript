/*
Clases 39 a 44 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11890
*/

// Programación asíncrona

// Código síncrono

console.log("Inicio")

for (let i = 0; i < 100000000; i++) { }

console.log("Fin")

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código asíncrono

// - Callbacks

// Las funciones normales son las que tienen prioridad por estar en el call stack
console.log("Inicio")

// Este es un ejemplo de código asíncrono, se ejecuta despúes de 2 segundos, se colocará cuando el call stack este vacío
setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000)

// Las funciones normales son las que tienen prioridad por estar en el call stack
console.log("Fin")

// - Problema: Callback Hell

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

// Callback hell
step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// - Promesas

/* 
En JavaScript, una promesa (Promise) es un objeto que representa la eventual finalización (éxito o fracaso) de una operación asíncrona y su resultado. Las promesas permiten manejar operaciones asíncronas de manera más limpia y estructurada, evitando el "callback hell" (anidamiento excesivo de callbacks).

Características principales:

1. Estados de una Promesa:
- pending (pendiente): Estado inicial, no se ha cumplido ni rechazado.
- fulfilled (cumplida): La operación se completó con éxito.
- rejected (rechazada): La operación falló.

2. Inmutabilidad: Una promesa, una vez resuelta (ya sea como fulfilled o rejected), no puede cambiar su estado ni su valor.

Uso con .then(), .catch() y .finally():

Las promesas proporcionan métodos para manejar el resultado:
- .then(): Se ejecuta cuando la promesa se cumple (resolve).
- .catch(): Captura errores si la promesa es rechazada (reject).
- .finally(): Se ejecuta siempre, sin importar el resultado.


*/

const promise = new Promise((resolve, reject) => {
    // IMPORTANTE: Inicialmente escribí setInterval, pero lo correcto es setTimeout
    // setInterval se ejecutaría indefinidamente cada 4s, y el proceso nunca finalizaría
    setTimeout(() => {
        const ok = true
        if (ok) {
            resolve("Operación exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

// - Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })


    // - Async/Await

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Código síncrono, se ejecuta al instante
wait(5000)
console.log('hola')

// Código asíncrono, despúes de 5 segundos se imprime el hola
await wait(5000)
console.log('hola')

async function process() {

    console.log("Inicio del proceso")

    await wait(5000)
    console.log("Proceso después de 5 segundos")

    await wait(1000)
    console.log("Proceso después de 1 segundo")

    await wait(2000)
    console.log("Proceso después de 2 segundos")

    console.log("Fin del proceso")
}

process()