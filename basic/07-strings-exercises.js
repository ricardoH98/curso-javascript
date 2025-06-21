// 1. Concatena dos cadenas de texto
let myCompleteName = 'Ricardo' + ` Heredia` 

console.log(myCompleteName)

// 2. Muestra la longitud de una cadena de texto

console.log(myCompleteName.length)

// 3. Muestra el primer y último carácter de un string

console.log('Primera letra: ', myCompleteName[0])
console.log('Última letra: ', myCompleteName[myCompleteName.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

let myString = "Esta cadena de texto puede estar en mayúscula o en minúscula"

console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let anotherString = `Esta cadena 
de texto
esta en
varias lineas`

console.log(anotherString)

// 6. Interpola el valor de una variable en un string

let myWord = 'var let const'

console.log(`En Javascript se declaran variables con las palabras ${myWord}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

myString = 'En esta cadena se reemplazarán los espacios en blanco por guiones'

// Con el uso de la expresión regular: /\s+/g
// Se reemplazrán todos los espacios en blanco (espacios, tabs, saltos de línea). -> \s
// + -> indica "una o más ocurrencias"
// La bandera g (global) hace que se reemplacen todas las coincidencias, no solo la primera.
console.log(myString.replace(/\s+/g, '-'))

// Alternativa para reemplazar solo espacios en blanco (no saltos de línea o tabs)
console.log(myString.replace(/ /g, '-'))

// Alternativa sin regex:
console.log(myString.split(' ').join('-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

myString = "Esta cadena puede contener ciertas palabras"

console.log(myString.includes('cadena'))

// 9. Comprueba si dos strings son iguales

let myString1 = 'Este es un string'
let myString2 = 'ESTE ES UN STRING'

console.log(myString1 == myString2)
console.log(myString1.toUpperCase() == myString2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(myString1.length == myString2.length)

