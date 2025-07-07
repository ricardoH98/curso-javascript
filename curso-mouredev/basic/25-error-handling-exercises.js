// 1. Captura una excepción utilizando try-catch

let aVar

try {
    console.log(aVar.property)
} catch (error) {
    console.log('El error producido es: ', error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(aVar.property)
} catch (error) {
    console.log('El error producido es: ', error.message)
} finally {
    console.log('Debe crear la propiedad para poder consultarla')
}


// 3. Lanza una excepción genérica

throw Error('Esta es una excepción genérica')

// 4. Crea una excepción personalizada

class CustomError extends Error {
    constructor(message) {
        super(message)
    }
}

// 5. Lanza una excepción personalizada

throw new CustomError('Esta es una excepción persnalizada')

// 6. Lanza varias excepciones según una lógica definida

function divNumbers(a, b) {


    if (typeof b == 'undefined') {
        throw ReferenceError('Tiene que insertar el divisor')
    }

    if (typeof a != "number" || typeof b != "number") {
        throw TypeError('No se puede ejecutar la división, los parámetros deben ser de tipo numérico')
    }

    if (b == 0) {
        throw Error('El divisor no puede ser 0')

    }

    if (arguments.length != 2) {
        throw RangeError('La función tiene que dividir solo dos números')

    }

    return a / b
}

// console.log(divNumbers(3))
// console.log(divNumbers(13, 4, 23))
// console.log(divNumbers(20, 0))
// console.log(divNumbers('20', 5))
// console.log(divNumbers(5, '1'))


// 7. Captura varias excepciones en un mismo try-catch

try {
    // console.log(divNumbers(13, 4, 34, 34))
    // console.log(divNumbers(13, 0))
    // console.log(divNumbers(123))
    console.log(divNumbers(123, '45'))

} catch (error) {
    if (error instanceof ReferenceError) {
        console.log('Se ha producidor el siguiente error de Referencia: ', error.message)
    } else if (error instanceof TypeError) {
        console.log('Se ha producidor el siguiente error de Tipo: ', error.message)
    } else if (error instanceof RangeError) {
        console.log('Se ha producidor el siguiente error de Rango: ', error.message)
    } else {
        console.log('Se ha producidor el siguiente error: ', error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores


let arr = ['23.2', '45.2', '45', 'ddddd', true, '123a', 'a234', '123b', '432cccddd', undefined, null, { key: "value" }, '989   ']
let arrFloat = []

function convertToFloat(value) {
    let valFloat = parseFloat(value)

    if (String(value).trim() !== String(valFloat)) {
        throw Error(`No se puede transformar el siguiente elemento ${value}`)
    }

    if (isNaN(valFloat)) {
        throw Error('No se puede convertir el valor a tipo de dato float')
    }

    return valFloat
}

for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    try {
        arrFloat.push(convertToFloat(element))
    } catch (error) {
        console.log(`El item ${element} no se puede convertir a float`)
    }

}

console.log(arrFloat)

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let user = {
    name: 'Pedro',
    lastName: 'Gonzalez',
    age: 24,
    email: 'pedrog@correo.com',
    2: 344
}

// console.log(user)
// console.log(user.name)
// console.log(String(user))

// console.log("lastName" in user) // true
// console.log(Object.hasOwn(user, "age")) // true
// console.log(Object.hasOwn(user, '2')) // true
// console.log(typeof user) // object


class PropertyNotFoundError extends Error {
    constructor(message) {
        super(message)

    }

}

function hasThisProperty(obj, prop) {

    if (typeof obj != "object") {
        throw TypeError('El primer argumento debe ser un objeto')
    }

    if (typeof prop != 'string') {
        throw Error('Debe escribir en una cadena el nombre de la propiedad a evaluar')
    }

    if (!Object.hasOwn(obj, prop)) {
        throw new PropertyNotFoundError(`La propiedad no existe dentro del objeto`)
    }

    return true
}

try {
    console.log(hasThisProperty(user, 'fullName'))
    // console.log(hasThisProperty(2, 'fullName'))
    // console.log(hasThisProperty(user, 23232))
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error.message}`)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function errorFunction() {

    let randomNumber = Math.floor(Math.random() * 10) + 1

    if (randomNumber <= 2) {
        console.log('Operación exitosa'); // Sin return
    } else {
        throw new Error("Error en la operación - seguir intentando");

    }

}

function tryAttempts(func, maxAttempts = 10) {
    for (let i = 1; i <= maxAttempts; i++) {
        try {
            func()
            break
        } catch (error) {
            console.log(`Intento ${i}: ${error.message}`);
        }
    }
}

tryAttempts(errorFunction)


