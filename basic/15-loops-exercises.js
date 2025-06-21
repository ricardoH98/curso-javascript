// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i < 21; i++) {
    console.log(`Número: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let acumSum = 0
let n = 1
while (n <= 100) {
    acumSum += n
    n++
}

console.log(`la suma de los números del 1 al 100 es: ${acumSum}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i < 51; i++) {

    if (i % 2 == 0) {
        console.log(`Número par impreso: ${i}`)
    }

}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let namesArray = ['Jose', 'Pedro', 'Manuel', 'Miguel', 'Ricardo']

for (const element of namesArray) {
    console.log(element)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = 'Esta es una cadena de texto corta y rápida para el ejemplo'
let numOfVocals = 0
for (const element of myString) {

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
            numOfVocals++
            break;

    }
}

console.log(`La cantidad de vocales en la cadena es: ${numOfVocals}`)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrNumbers = [22, 33, 2, 5, 6, 78, 10]

let prod = 1

for (const element of arrNumbers) {
    
    prod *= element
}

console.log(`El producto total es: ${prod}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let i = 0
while (i < 13) {
    console.log(`5 x ${i} es: ${i * 5}`)
    i++
}

// 8. Usa un bucle para invertir una cadena de texto

let newText = 'roma'
let arr = []

for (const element of newText) {
    arr.unshift(element)
}

console.log(arr.join(''))

// Otra manera:

let reverseText = ''
for (const element of newText) {
    reverseText = element + reverseText // Se coloca cada caracter al inicoi
}

console.log(reverseText)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let secuence = [0 , 1]

for (let i = 2; i < 10; i++) {
    secuence[i] = secuence[i - 1] + secuence[i - 2]
    
}

console.log(`Los primero 10 números de la secuencia de fibonnaci son: ${secuence}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrRandomNumbers = [45, 23, 7, 2, 14, 25]
let greaterThanTen = []

for (const element of arrRandomNumbers) {
    if (element > 10) {
        greaterThanTen.push(element)
    }
}

console.log(greaterThanTen)