// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
    return a + b
}

let mySum = sum(14, 22)

console.log(mySum)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const greaterInArr = (arr) => {

    let maxNumber = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i]
        }

    }

    return maxNumber

}

console.log(greaterInArr([24, 23, 46, 223, 2333, 111]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numberOfVowels(aString) {

    let countOfVowels = 0
    for (const element of aString) {
        switch (element.toLowerCase()) {
            case 'a':
            case 'á':
            case 'e':
            case 'é':
            case 'i':
            case 'í':
            case 'o':
            case 'ó':
            case 'u':
            case 'ú':
                countOfVowels++
                break;

        }
    }

    return countOfVowels
}

console.log(numberOfVowels('Dime la cantidad de vocales de este texto'))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// ['perro', 'gato', 'pericote'] => ['PERRO', 'GATO', 'PERICOTE']

function converToUpper(arrString) {
    let upperArr = []

    arrString.forEach(element => {
        upperArr.push(element.toUpperCase())
    });

    return upperArr
}

console.log(converToUpper(['perro', 'gato', 'pericote']))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const isPrime = (num) => {
    if (num <= 1) {
        return false
    }

    if (num > 2 && num % 2 == 0) {
        return false
    } else if (num === 2) {
        return true
    }

    let sqr = Math.floor(Math.sqrt(num))

    for (let i = 2; i <= sqr; i++) {
        if (num % i != 0) {
            continue
        } else if (num % i == 0) {
            return false
            break
        }

    }

    return true

}

console.log(isPrime(78))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementsInCommon(arr1, arr2) {
    let newArr = []

    for (const element of arr1) {
        if (arr2.includes(element)) {
            newArr.push(element)
        }
    }

    return Array.from(new Set(newArr))
}

console.log(elementsInCommon([3, 4, 5, 6, 7, 2, 'hola'], [23, 2, 3, 5, 6, 'hola', 1500, 234, 6]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// [13, 14, 16, 23, 22, 19, 18]

const sumOfpairs = (arr) => {
    let sum = 0

    arr.forEach((value) => {
        if (value % 2 == 0) {
            sum += value
        }
    })

    return sum
}

console.log(sumOfpairs([13, 14, 16, 23, 22, 19, 18, 20]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const raiseToPower = (arr) => {
    let newArr = []

    arr.forEach(element => {
        newArr.push(element ** 2)
    })

    return newArr
}

console.log(raiseToPower([1, 2, 3, 4, 5, 6]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reversedWord(text) {
    let reverseText = ''

    for (const element of text) {
        reverseText = element + reverseText
    }

    return reverseText
}

console.log(reversedWord('apra'))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num) {
    
    let q = 1

    for (let i = num; i >= 1; i--) {
        q *= i        
    }

    return q
}

console.log(factorial(6))