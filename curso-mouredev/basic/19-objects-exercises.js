// 1. Crea un objeto con 3 propiedades

let laptop = {
    brand: 'Lenovo',
    fabricationYear: 2018,
    age: 6
}

// 2. Accede y muestra su valor

console.log(laptop)

// 3. Agrega una nueva propiedad

laptop.os = 'windows'

console.log(laptop)

// 4. Elimina una de las 3 primeras propiedades

delete laptop.age

console.log(laptop)

// 5. Agrega una función e invócala

laptop.turnOn = () => {
    console.log('La laptop se está encendiendo')
}

console.log(laptop)

laptop.turnOn()

// 6. Itera las propiedades del objeto

for (const element in laptop) {
    console.log(element)
}

// 7. Crea un objeto anidado

laptop.age = 7

laptop.os = {
    name: 'windows',
    version: 11,
    typeSystem: '64 bits',
    Ram: '16 GB'
}

console.log(laptop)

// 8. Accede y muestra el valor de las propiedades anidadas

for (const element in laptop.os) {
    console.log(element + ' : ' + laptop.os[element])
}

// 9. Comprueba si los dos objetos creados son iguales

console.log(laptop === laptop.os)

// 10. Comprueba si dos propiedades diferentes son iguales

laptop.sys = {
    name: 'windows',
    version: 11,
    typeSystem: '64 bits',
    Ram: '16 GB'
}

console.log(laptop)

console.log(laptop.os.name == laptop.sys.name)
console.log(laptop.os === laptop.sys)
