// Funciones

// Simple

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Brais")
myFuncWithParams("MoureDev")

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure") // Se invoca usando la variable

// Arrow functions

// Son funciones anónimas

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10) // 15
sum(5) // NaN
sum() // NaN

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum() // 0
defaultSum(5) // 5
defaultSum(5, 10) // 15
defaultSum(b = 5) // 5

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern()  // Error: fuera del scope, porque está definida denteo de la función extern()

// Funciones de orden superior

function myFunc5(text) {
    console.log(`esta función imprime el siguiente texto: ${text}`)
}

function applyFunc(func, param) {
    func(param)
}


applyFunc(myFunc5, "función de orden superior")

// forEach

let myArray = [1, 2, 3, 4]



myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

mySet.forEach((value) => console.log(value))

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

// Recorre los values, no toma en cuenta los keys
myMap.forEach((value) => console.log(value))

for (const item of myMap) {
    console.log(item)
}

