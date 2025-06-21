/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function greeting(name, callback) {
    setTimeout(() => {
        callback(name)
    }, 2000);
}

function sayHi(name) {
    console.log(`Hola ${name}`)
}

greeting('ricardo', sayHi)

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
    setTimeout(() => {
        console.log('Procesando tarea 1...')
        callback()
    }, 1000);
}


function task2(callback) {
    setTimeout(() => {
        console.log('Procesando tarea 2...')
        callback()
    }, 1000);
}


function task3(callback) {
    setTimeout(() => {
        console.log('Procesando tarea 3...')
        callback()
    }, 1000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log('tareas completadas')
        })
    })
})


// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function verification(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve('Número Par')
        } else {
            reject('Número Impar')
        }
    });
}

verification(9)
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Primera tarea completada')
            resolve()
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Segunda tarea completada')
            resolve()
        }, 2000);
    });
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tercera tarea completada')
            resolve()
        }, 1500);
    });
}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() => {
        console.log('Tareas terminadas')
    })


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function executeTasks() {

    console.log('Iniciando Tareas')
    await firstTask()
    await secondTask()
    await thirdTask()
    console.log('Tareas terminadas')
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

async function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve(`{${id}, nombre: Usuario ${id}}`)
            } else {
                reject('Usuario no encontrado')
            }
        }, 2000);
    });
}

try {
    let result = await getUser(2)
    console.log(result)
} catch (reject) {
    console.log(reject)
}

// getUser(2)
//     .then((result) => console.log(result))
//     .catch((result) => console.log(result))

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

/* 
Predicción:
Inicio
Fin
setTimeout ejecutado
Promesa resuelta
*/

/* 
Resultado:
Inicio
Fin
Promesa resuelta
setTimeout ejecutado
*/


/* Explicación:
Este comportamiento se debe al Event Loop de JavaScript y cómo maneja las tareas asíncronas, diferenciando entre microtareas (como las Promesas) y macrotareas (como setTimeout). Aquí está la explicación detallada:

Flujo del Event Loop:
1. Ejecuta todo el código síncrono (primero Inicio, luego Fin).
2. Verifica la cola de microtareas:
    Ejecuta () => console.log("Promesa resuelta") (porque Promise.resolve() encola una microtarea).
    → Salida: Promesa resuelta
3. Verifica la cola de macrotareas:
    Ejecuta el callback de setTimeout.
    → Salida: setTimeout ejecutado.

¿Por qué las microtareas tienen prioridad?
- Microtareas (ej: Promesas, queueMicrotask, MutationObserver):
Se ejecutan inmediatamente después del código síncrono actual, antes de renderizar o procesar eventos/macrotareas.

- Macrotareas (ej: setTimeout, setInterval, eventos de UI):
Esperan a que no haya microtareas pendientes y a que el call stack esté vacío.

*/

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function process1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Primer proceso ejecutado')
            resolve()
        }, 2000);
    });
}


function process2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Segundo proceso ejecutado')
            resolve()
        }, 1000);
    });
}


function process3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tercer proceso ejecutado')
            resolve()
        }, 3000);
    });
}


Promise.all([process1(), process2(), process3()])
    .then(() => console.log(`Todas las tareas terminadas`))



// Otro ejemplo:

// Funciones que devuelven promesas
function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, nombre: `Usuario ${id}` }), 1000);
    });
}

function obtenerPosts(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([`Post 1 de ${usuarioId}`, `Post 2 de ${usuarioId}`]), 1500);
    });
}

function obtenerComentarios(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([`Comentario 1 de ${usuarioId}`, `Comentario 2 de ${usuarioId}`]), 800);
    });
}

// Uso de Promise.all()
Promise.all([
    obtenerUsuario(1),
    obtenerPosts(1),
    obtenerComentarios(1)
])
    .then(([usuario, posts, comentarios]) => {
        console.log('Datos completos:', { usuario, posts, comentarios });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(sec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, sec * 1000);
    });
}

async function process() {
    console.log('Inicio del proceso')
    await waitSeconds(3)
    console.log('Tiempo Finalizado')
}

process()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let balance = 500

function checkBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Saldo disponible: ${balance}$`)
        }, 1000);
    });
}

// function withdrawMoney(amount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Retirando ${amount}$...`)
//             if (balance >= amount) {
//                 balance -= amount
//                 resolve(`Operación exitosa, saldo restante ${balance}$`)
//             } else {
//                 reject('Error: no hay suficientes fondos')
//             }
//         }, 2000);
//     });
// }

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(`Retirando ${amount}$...`)
        }, 1000);

        setTimeout(() => {
            if (balance >= amount) {
                balance -= amount
                resolve(`Operación exitosa, saldo restante ${balance}$`)
            } else {
                reject('Error: no hay suficientes fondos')
            }
        }, 2000);
    });
}


async function proccesing() {
    try {
        console.log(await checkBalance())
        console.log(await withdrawMoney(300))
        console.log(await withdrawMoney(300))
    } catch (reject) {
        console.log(reject)
    }

}

proccesing()

